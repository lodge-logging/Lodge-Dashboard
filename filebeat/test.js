const path = require('fs');
const { generateConfig } = require('./generateConfig');
const { modules } = require('./filebeat-modules');
// (filePath, newFilePath, filebeatModule, kibanaHost, kafkaHosts)
const kafkaHosts = '["12.34.45.56:9200", "12.34.45.56:9200", "12.34.45.56:9200"]';
const kibanaHost = '12.34.45.56:5601';

// const filePath = path.join(__dirname, '..', '..', 'configFiles', 'filebeat', 'filebeat.yml');
generateConfig('filebeat.yml', 'filebeat-5.yml', modules.mongo, kibanaHost, kafkaHosts);
