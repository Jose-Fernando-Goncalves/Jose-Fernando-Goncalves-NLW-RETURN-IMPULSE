import { SendMail } from "../adapters/sendMail";
import { FeedbackRep } from "../repositories/feedback-rep";

interface SubmiteFeedReq {
    type: string,
    comment: string,
    photo?: string
}

export class SubmiteFeed{

    constructor(
        private feedbackRep : FeedbackRep,
        private mailAdapter : SendMail
        ){
    }

    async execute(request:SubmiteFeedReq) {
        const {type, comment, photo} = request;

       await this.feedbackRep.create({
                comment,
                type,
                photo
        })

        await this.mailAdapter.sendMail({
            subject: "Novo feed",
            body: [
                `<p>Tipo:<p style="color: #2ecc71">${type}</p></p>`,
                `<p>Comentário:<p style="color: #3498db">${comment}</p></p>`,
            ].join('\n')
        })

    }
}