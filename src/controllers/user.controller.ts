import { Request, Response } from 'express';
import User from '../models/User';
import * as constructor from '../config/constructors'
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import bcryptConfig from '../config/bcrypt';
const jwt = require("jsonwebtoken");
// Dotenv
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

export function sendUnauth(connection: any) {
    
        var msg = constructor.msgObj("unauth", "", "");
        console.log("SENDING:\n");
        console.log(msg);
        connection.send(JSON.stringify(msg));
}

export function sendRole(connection: any,token:any) {
    const username = jwt.decode( token, process.env.ACCESS_TOKEN_SECRET).username
    User.find({username}).exec(function (err: any, user: any) {
        console.log(user)
        var msg = constructor.msgObj("roleResponse", user[0].role, token);
        console.log("SENDING:\n");
        console.log(msg);
        connection.send(JSON.stringify(msg));
    });

    // var msg = constructor.msgObj("unauth", "", "");
    // console.log("SENDING:\n");
    // console.log(msg);
    // connection.send(JSON.stringify(msg));
}

function getCookie(req:any,name:any) {
    if(req.headers['cookie'] == null) return null;
    var v = req.headers['cookie'].match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

function generateAccessToken(username:any) {
    // expires after half and hour (1800 seconds = 30 minutes)
    return jwt.sign(username, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
  }


const userController = {
    create: async (req: Request, res: Response) => {
        try {
            const { username, password: passwordBody, role } = req.body;
            
            if (!username || !passwordBody || !role) return res.status(400).json({ message: "Missing data" });

            const isUserExists = await User.findOne({ username }).exec();

            if (isUserExists) return res.status(401).json({ message: "User Already Exists" })

            const password = await bcrypt.hash(passwordBody, bcryptConfig.salt);

            const newUser = await new User({
                username,
                password,
                role
            }).save();

            return res.status(201).json(newUser);

        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: "Internal Server Error" });
        }
    },

    login: async (req: Request, res: Response) => {
        try {
            const { username, password } = req.body;

            if (!username || !password) return res.status(400).json({ message: "Missing Data" });

            const user = await User.findOne({ username }).exec();

            if (!user) return res.status(401).json({ message: "Wrong UP" })

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) return res.status(401).json({ message: "Wrong UP" })
            
            const token = generateAccessToken({ username: username })
            //const new_token = crypto.randomBytes(30).toString("hex"); 

            //await User.findOneAndUpdate({username}, {access_token: new_token},{new: true});
            
            return res.status(200).json({
                username: user.name,
                access_token: token,
                message: "Access granted"
            });

        } catch (err) {
            return res.status(500).json({ message: "Internal Server Error" })
        }
    },

    auth: function authenticateToken(req:any, res:any, next:any) {
        // Gather the jwt access token from the request header
        const authHeader = req.headers
        console.log(authHeader)
        //if(authHeader.split(' ').length == 1) res.redirect('/login');
        //const token = authHeader && authHeader.split(' ')[1].split('=')[1]
        const token = getCookie(req,"token")
        //console.log(token)
        if (token == null) {
            res.redirect('/login')
            //return res.sendStatus(401) // if there isn't any token
        }
        console.log(process.env.ACCESS_TOKEN_SECRET)
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err: any, user: any) => {
          //console.log(err)
          if (err){
            res.redirect('/login')
            //return res.sendStatus(403)
          }
          req.user = user
          next() // pass the execution off to whatever request the client intended
        })
      }
    
};




export default userController;