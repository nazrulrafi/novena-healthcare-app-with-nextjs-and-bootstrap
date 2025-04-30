import nodemailer from 'nodemailer';

export async function SendEmail(Emailto, EmailText, EmailSubject) {
    const transporter = nodemailer.createTransport({
        host: 'mail.nazrulrafi.com',
        port: 587,  // Try TLS port
        secure: false, // False for TLS
        auth: {
            user: 'novera@nazrulrafi.com',
            pass: 'w},as2b)2wGo',
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const mailOptions = {
        from: '"Novera App" <novera@nazrulrafi.com>',
        to: Emailto,
        subject: EmailSubject,
        text: EmailText,
    };

    return await transporter.sendMail(mailOptions);
}