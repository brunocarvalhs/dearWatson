import request from 'supertest';
import app from '../../app';

describe('NATURAL LANGUAGE', () => {
    test('Analyze various features of text content at scale.', async () => {
        const response = await request(app)
        .post('/natural/v1/create')
        .send({
            url: "https://github.com/brunocarvalhs"
        });
        expect(response.status).toBe(200);
    });
});