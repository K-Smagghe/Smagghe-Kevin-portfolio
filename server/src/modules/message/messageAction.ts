import nodemailer from "nodemailer";
import "dotenv/config";
import type { NextFunction, Request, Response } from "express";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendMail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, nom, prenom, message } = req.body;

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      replyTo: email,
      html: `
    <p><b>Nom :</b> ${nom} ${prenom}</p>
    <p><b>Email :</b> ${email}</p>
    <p><b>Message :</b></p>
    <p>${message}</p>
  `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "E-mail envoyé avec succès" });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
    next(error);
  }
};

export default { sendMail };
