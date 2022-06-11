import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';
import { SubmiteFeed } from './services/submite-feedback';
import { PrismaFBRep } from './repositories/prisma/prisma-feedback-rep';
import { NodeMailerClass } from './nodemailer/nodemailer';

const app = express();

app.use(express.json());


app.post('/feedback', async (req, res)=> {
    const {comment, type, photo} = req.body;

    const prismaFeedRep = new PrismaFBRep();
    const nodeMailerAdapter = new NodeMailerClass();
    const submiteFeed = new SubmiteFeed(prismaFeedRep, nodeMailerAdapter);

    await submiteFeed.execute({type, comment, photo})

    return res.status(201).send();
});

app.get('', (req, res)=> {
    return res.send('oi')
});

app.listen(3333, ()=>{
    console.log('oi')
});