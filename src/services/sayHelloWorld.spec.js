const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello tests', () => {
    it('Should say Hello World', () => {
        const response = sayHelloWorld.sayHello();

        expect(response).toBe('Hello World!');
    });

    it('Should say Marcelo Souza', () => {
        const response = sayHelloWorld.sayHello('Marcelo Souza');

        expect(response).toBe('Hello Marcelo Souza! ');
    })
});