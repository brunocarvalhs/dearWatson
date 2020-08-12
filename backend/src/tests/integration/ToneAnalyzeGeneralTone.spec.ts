import request from 'supertest';
import app from '../../app';

describe('TONE ANALYZER', () => {
    test('Use the general-purpose endpoint to analyze the tone of your input content. The service analyzes the content for emotional and language tones.', async () => {
        const response = await request(app)
        .post('/tone/v1/analyze')
        .send({
            text: "Team, I know that times are tough! Product sales have been disappointing  for the past three quarters. We have a competitive product, but we need to do a better job of selling it!"
        });
        expect(response.status).toBe(200);
    });
});