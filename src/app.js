const mqtt = require('mqtt');
const config = require('./config');
const DB = require('./db');
const Client = require('./client');

new Client(config, mqtt, new DB()).run();
