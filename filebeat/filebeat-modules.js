const { readFileSync } = require('fs');
const mongo = readFileSync('mongo-config.yml', 'utf-8');
const nginx = readFileSync('nginx-config.yml', 'utf-8');
const postgres = readFileSync('postgres-config.yml', 'utf-8');
const system = readFileSync('system-config.yml', 'utf-8');

const modules = {
  mongo: {
    yaml: mongo,
    topic: 'mongo'
  },
  nginx: {
    yaml: nginx,
    topic: 'nginx'
  },
  postgres: {
    yaml: postgres,
    topic: 'postgres'
  },
  system: {
    yaml: system,
    topic: 'system'
  }
}

module.exports = { modules }