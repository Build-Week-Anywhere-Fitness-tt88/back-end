const server = require('../server'); 
const request = require('supertest');
const db = require('../data/config');

beforeAll(async () => {
    await db.seed.run();
})

afterAll(async () => {
    await db.destroy();
})

describe('Testing the classes endpoints', () => {
    jest.setTimeout(30000);
    test('Triggers the restrict function', async () => {
        const res = await request(server).get('/classes')
        expect(res.statusCode).toBe(401)
    })
    test('Registers a user', async () => {
        const res = await request(server).post('/users/sign-up').send({
            username: 'test',
            password: 'testing',
            role: 'Jest'
        })
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe('application/json')
    })
    test('triggers login error', async () => {
        const res = await request(server).post('/users/login').send({
            username: 'false',
            password: 'falser',
            role: 'hacker'
        })
        expect(res.statusCode).toBe(401)
    })
    test('logs in', async () => {
        const res = await request(server).post('/users/login').send({
            username: 'test',
            password: 'testing'
        })
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('application/json')
    })
    test('Successful Login', async () => {
        // const login = await request(server).post('/users/login').send({
        //     username: "test",
        //     password: "testing"
        // })
        // const payload = {
		// 	userId: 1,
		// 	email: "Test User 2",
		// 	userRole: "normal",
		// };
		// const token = jwt.sign(payload, process.env.TOKEN_SECRET);
        const res = await request(server).get("/classes")
        expect(res.statusCode).toBe(200)
    })
})