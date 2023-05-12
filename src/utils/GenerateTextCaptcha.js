const GenerateTextCaptcha = () => {
    let captcha = ''
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
        captcha += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))
    }
    return captcha
}

export default GenerateTextCaptcha