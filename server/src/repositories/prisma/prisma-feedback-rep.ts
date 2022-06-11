import { prisma } from "../../prisma";
import { CreateFeedbackRep, FeedbackRep } from "../feedback-rep";

export class PrismaFBRep implements FeedbackRep {
    async create({type, comment, photo}:CreateFeedbackRep) {
        const feeds = await prisma.feedbacks.create({
            data:{
                comment,
                type,
                photo
            }
        });
}}