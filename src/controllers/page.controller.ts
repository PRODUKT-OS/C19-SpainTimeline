import { Request, Response } from 'express';
import User from '../models/User';
const jwt = require("jsonwebtoken");

function getCookie(req: any, name: any) {
    if (req.headers['cookie'] == null) return null;
    var v = req.headers['cookie'].match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

async function checkRoleRedirect(req: Request, res: Response) {
    const token = getCookie(req, "token");
    const username = jwt.decode(token, process.env.ACCESS_TOKEN_SECRET).username;
    const user = await User.find({ username }).exec();
    console.log(user[0].role + ": " + req.url)
    switch (user[0].role) {
        case "Admin":
            res.sendFile('pages/' + req.url + '.html', { root: './' });
            break;
        default:
            break;
    }

}
const pageController = {
    home: async (req: Request, res: Response) => {
        res.sendFile('pages/index.html', { root: './' })
    },
    register: async (req: Request, res: Response) => {
        checkRoleRedirect(req, res);
        //res.sendFile('pages/register.html', { root: './' })
    },
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
        checkRoleRedirect(req, res);
        //res.sendFile('pages/statistics.html', { root: './' })
    },
    alerts: async (req: Request, res: Response) => {
        checkRoleRedirect(req, res);
        //res.sendFile('pages/alerts.html', { root: './' })
    },
    slots: async (req: Request, res: Response) => {
        checkRoleRedirect(req, res);
        //res.sendFile('pages/slots.html', { root: './' })
    },
    casinos: async (req: Request, res: Response) => {
        checkRoleRedirect(req, res);
        //res.sendFile('pages/casinos.html', { root: './' })
    },
    slotsJs: async (req: Request, res: Response) => {
        res.sendFile('public/client/js/slots.js', { root: './' })
    },
    client: async (req: Request, res: Response) => {
        res.sendFile('/client/js/client.js',{root: './'})
    },
    statisticsJs: async (req: Request, res: Response) => {
        res.sendFile('public/client/js/statistics.js',{root: './'})
    }
}


export default pageController;