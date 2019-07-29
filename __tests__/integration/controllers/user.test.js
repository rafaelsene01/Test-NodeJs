import request from 'supertest';
import app from '../../../src/app';

describe('User', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'DIego Fernandes',
        email: 'Diego@rocketseat.com.br',
        password_hash: '13456',
      });

    expect(response.body).toHaveProperty('id');
  });
});
