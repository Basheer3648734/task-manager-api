const sgmail = require('@sendgrid/mail')


sgmail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgmail.send({
        to: email,
        from: 'mabasheer9059@gmail.com',
        subject: 'congratulations on joining us',
        text: `welcome to the app , ${name}. Let me know how get along with the app.`
    })
}
const cancellationEmail = (email, name) => {
    sgmail.send({
        to: email,
        from: 'mabasheer905@gmail.com',
        subject: 'Deleting the account',
        text: `Hello ${name}.Your request for deleting the account has been successfully executed`
    })
}
module.exports = { sendWelcomeEmail, cancellationEmail }