const { readFileSync, writeFileSync } = require('fs');

const generateConfig = (filePath, newFilePath, filebeatModule, kibanaHost, kafkaHosts) => {
  const moduleRegex = /{{module}}/;
  const kibanaHostRegex = /{{kibanaHost}}/;
  const kafkaHostsRegex = /{{kafkaHosts}}/;
  const topicRegex = /{{topic}}/;

  let newFile = readFileSync(filePath, 'utf-8');
  
  newFile = newFile.replace(moduleRegex, filebeatModule.yaml);
  newFile = newFile.replace(kibanaHostRegex, kibanaHost);
  newFile = newFile.replace(kafkaHostsRegex, kafkaHosts);
  newFile = newFile.replace(topicRegex, filebeatModule.topic);
  
  writeFileSync(newFilePath, newFile);
}

module.exports = { generateConfig };