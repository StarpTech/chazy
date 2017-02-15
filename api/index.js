const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:1883', { username: 'test', password: 'peter', clientId: 'node1' });

client.on('message', function (topic, message) {

    console.log(topic, message.toString())
})

client.on('connect', function () {
    console.log('Connected')
    client.subscribe('mqtt/demo')
    client.subscribe('mqtt/test')
})