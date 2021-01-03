import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'serverless-test-1',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  // Add the serverless-webpack plugin
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    region: 'us-west-2',
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
  },
  functions: {
    hello: {
      handler: 'handler.hello',
      events: [
        {
          http: {
            method: 'get',
            path: 'hello',
          }
        }
      ]
    },
    personaSwapi: {
      handler: 'src/functions/swapi_persona/obtener_persona.persona',
      events: [
        {
          http: {
            method: 'get',
            path: 'persona-swapi/{personaId}'
          }
        }
      ]
    },
    personasSwapi: {
      handler: 'src/functions/swapi_persona/obtener_personas.personas',
      events: [
        {
          http: {
            method: 'get',
            path: 'persona-swapi'
          }
        }
      ]
    }
  }
}

module.exports = serverlessConfiguration;
