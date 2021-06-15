import { Request, Response } from 'express';
import User from '../models/User';
const jwt = require("jsonwebtoken");

function getCookie(req: any, name: any) {
    if (req.headers['cookie'] == null) return null;
    var v = req.headers['cookie'].match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

const pageController = {
    login: async (req: Request, res: Response) => {
        res.sendFile('pages/login.html', { root: './' }) // if there isn't any token
        const token = getCookie(req, "token")
        console.log(token)
        if (token != null) {
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err: any, user: any) => {
                if (!err) {
                    res.redirect('/timeline')
                }
            })
        }
    },
    timeline: async (req: Request, res: Response) => {
        res.sendFile('pages/timeline.html', { root: './' })
    }
}


export default pageController;