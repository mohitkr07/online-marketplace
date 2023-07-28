const nodemailer = require("nodemailer")

const sendMail = async (req, res)=>{
    let testAccount = await nodemailer.createTestAccount();

    // let transport = await nodemailer.createTransport({"transport": })
}