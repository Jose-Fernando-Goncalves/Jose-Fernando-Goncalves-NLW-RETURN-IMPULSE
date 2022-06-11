import { SendMail, SendMailData } from "../adapters/sendMail";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d6fe5c29c279d0",
      pass: "c33b8f41eade6e"
    }
  });

export class NodeMailerClass implements SendMail {
    async sendMail({subject, body}:SendMailData){

        await  transport.sendMail({
            from: "Equipe Nandoca <pkgonando@gmail.com>",
            to: "Nandoca <nandogamer11@hotmail.com>",
            subject,
            html:body

    });
}}