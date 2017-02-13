const Hapi = require('hapi');

const server = new Hapi.Server({
    debug: {
        request: ['error', 'info']
    }
});
server.connection({
    port: 3000,
    host: '127.0.0.1'
});

server.route({
    method: 'POST',
    path: '/mqtt/auth',
    handler: function (request, reply) {
        console.log('TEST')
        reply('Hello, world!');
    }
});

server.route({
    method: 'POST',
    path: '/mqtt/superuser',
    handler: function (request, reply) {
        console.log('TEST')
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/mqtt/acl',
    handler: function (request, reply) {
        console.log('TEST')
        reply('Hello, world!');
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});