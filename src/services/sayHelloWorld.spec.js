const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello tests', () => {
    it('Should say Hello World', () => {
        const response = sayHelloWorld.sayHello();

        expect(response).toBe('Hello World!');
    });

    it('Should say Marcelo Souza Santos', () => {
        const response = sayHelloWorld.sayHello('Marcelo Souza Santos');

        expect(response).toBe('Marcelo Souza Santos!');
    })
});