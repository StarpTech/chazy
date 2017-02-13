# chazy
Prototype - Implementing a massively scalable chat application based on EMQ and NodeJs

# Features
- One to one (private)
- One to many (groups)
- Realtime with Sockets
- Authorization

# Client
- REST API with [Hapi.js](https://github.com/hapijs/hapi)
- NodeJs and [MQTT.js](https://github.com/mqttjs/MQTT.js)

# Webapp
- mqtt connection to the broker via mqtt.js
- simple ui
- stream handling via rxjs

# Getting started

1. Download [emqtt](http://emqtt.io/downloads)

2. Start broker with `./bin/emqttd start`

3. Open [dashboard](http://localhost:18083)

4. Open webapp/index.html

5. Run `node ./api/index.js`
