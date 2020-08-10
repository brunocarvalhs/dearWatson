import request from 'supertest';
import app from '../../app';

describe('TONE ANALYZER', () => {
    it('must be able to analyze the text and returns the emotions present in the text.', async () => {
        const response = await request(app)
        .post('/tone/v1/create')
        .send({
            text: ` Team, I know that times are tough! Product sales have been disappointing 
                    for the past three quarters. We have a competitive product, but we need 
                    to do a better job of selling it!`
        });

        console.log(response.body);
    });
});