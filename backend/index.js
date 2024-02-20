import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
const app = express()
const port = 8080

app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.send("hello world")
})

app.post('/mail', async (req, res) => {
    console.log(req.body.email);
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.google.com",
        port: 465,
        auth: {
            user: "info@fansright.com",
            pass: "Aa121212!",
        },
    });
    // hubofinnovation
    const mailOptions = {
        from: req.body.email,
        to: 'hubofinnovation0@gmail.com',
        subject: 'Contact Us',
        text: `USER EMAIL: ${req.body.email} ${req.body.name} has sent you a message: ${req.body.message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error.message);
            return;
        }
        res.send({ message: 'Message sent successfully' });
    });

})

app.listen(port, () => {
    console.log("server running at port " + port)
})