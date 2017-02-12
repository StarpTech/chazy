const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:1883');

client.on('message', function (topic, message) {

    console.log(message.toString())
})

client.on('connect', function () {
    console.log('Connected')
    client.subscribe('mqtt/demo', function() {
        client.publish('mqtt/demo', 'Hello mqtt')
    })
})