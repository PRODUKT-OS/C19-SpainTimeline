
export function msgObj(this: any, type: string, msg: any, token: string) {
    var msg: any = {
        type: type,
        content: msg,
        token: token
    }

    return msg;
}