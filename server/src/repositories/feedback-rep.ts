export interface CreateFeedbackRep{
    type: string,
    comment: string,
    photo?: string
}

export interface FeedbackRep{
    create: (data:CreateFeedbackRep)=> Promise<void>;
}
