import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'serverless-example',
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
      DYNAMO_TABLE: 'serverless-example',
    },
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: [
          'dynamodb:Query',
          'dynamodb:Scan',
          'dynamodb:GetItem',
          'dynamodb:PutItem',
          'dynamodb:UpdateItem',
          'dynamodb:DeleteItem'
        ],
        Resource: 'arn:aws:dynamodb:us-west-2:*:table/serverless-example'
      }
    ]
  },
  functions: {
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
    },
    crearAutomovil: {
      handler: 'src/functions/automovil/crear_automovil.automovil',
      events: [
        {
          http: {
            method: 'post',
            path: 'automoviles'
          }
        }
      ]
    },
    obtenerAutomovil: {
      handler: 'src/functions/automovil/obtener_automovil.automovil',
      events: [
        {
          http: {
            method: 'get',
            path: 'automoviles/{automovilId}'
          }
        }
      ]
    }
  },
  resources: {
    Resources: {
      PersonaDynamoDbTable: {
        Type: 'AWS::DynamoDB::Table',
        DeletionPolicy: 'Retain',
        Properties: {
          AttributeDefinitions: [
            {
              AttributeName: 'id',
              AttributeType: 'S'
            }
          ],
          KeySchema:[
            {
              AttributeName: 'id',
              KeyType: 'HASH'
            }
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
          },
          TableName: 'serverless-example'
        }
      }
    }
  }
}

module.exports = serverlessConfiguration;
