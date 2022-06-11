import { Bug } from "phosphor-react";
import { SubmiteFeed } from "./submite-feedback";

describe('Submite feedback', ()=> {
    it('should be able to submite feedback', async ()=> {
        const submiteFeed = new SubmiteFeed(
            {create: async ()=> {}},
            {sendMail: async ()=> {}}
        )

        await expect(submiteFeed.execute({
            type: 'Bug',
            comment: 'foi',
            photo: 'test.png',
        })).resolves.not.toThrow();
    })
});