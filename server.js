const express = require("express");
const jsonServer = require("json-server");
const nodemailer = require("nodemailer");
const cors = require("cors");
const middlewares = jsonServer.defaults();

const app = express();
const port = process.env.PORT || 10000;

const router = jsonServer.router('./public/db.json');
app.use(middlewares);
app.use(router);
app.use(cors);

app.use(express.static(__dirname));
app.get('/', function(req, res){
    res.sendFile(__dirname +'/public/index.html');
});

const transport = nodemailer.createTransport({
    host: "smtp.live.com",
    port: 465,
    secure: false,
    auth: {
        user: "servico60maisTech@hotmail.com",
        pass: ".69c3u=9Q5q5kUd",
    },
  });

app.post("/send-email", async (req, res) => {
    //const { to, subject, text } = req.body;
    console.log('chamando a rota');
    // Configuração do Nodemailer
    const { to, subject, text } = req.body;

  const mailOptions = {
    from: "Equipe 60+ Tech <servico60maisTech@hotmail.com>", // Substituir com o seu e-mail
    to: to,
    subject: subject,
    text: text,
  };

  // Envie o e-mail
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erro ao enviar e-mail:", error);
      res.status(500).send("Erro ao enviar e-mail");
    } else {
      console.log("E-mail enviado:", info.response);
      res.status(200).send("E-mail enviado com sucesso");
    }
  });
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));
