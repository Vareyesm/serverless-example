import { DynamoDB } from 'aws-sdk';
import { AutomovilMapper } from '../mappers/automovil_mapper';
import { Automovil } from '../models/automovil_model';
import { RespuestaAPI } from '../utils/respuesta_api';
import { AutomovilValidator } from '../validators';

const dynamoDb = new DynamoDB.DocumentClient()
let validator: AutomovilValidator = new AutomovilValidator();
let mapper: AutomovilMapper = new AutomovilMapper();
const nombreTabla: string = "serverless-example";

export class AutomovilService {
    public crearAutomovil(datos: any): RespuestaAPI<string> {
        let respuestaAPI: RespuestaAPI<string> = validator.validarCamposRequeridos(datos);
        if (!respuestaAPI.esCorrecto)
            return respuestaAPI;
        let automovil: Automovil = mapper.mapHaciaAutomovil(datos);

        const parametros = {
            TableName: nombreTabla,
            Item: {
                automovil
            }
        };

        dynamoDb.put(parametros, (error) => {
            if (error) {
                respuestaAPI.esCorrecto = false;
                respuestaAPI.mensajes.push(error.message)
            } else {
                respuestaAPI.resultado = `Se ha creado correctamente el registro de código ${automovil.id}`;
                respuestaAPI.httpStatusCode = 201;
            }
            return respuestaAPI;
        });

        return respuestaAPI;
    }

    public obtenerAutomovil(id: string) {
        let respuestaAPI: RespuestaAPI<Object> = new RespuestaAPI<Object>();

        const params = {
            TableName: nombreTabla,
            Key: {
                id: id,
            },
        };

        dynamoDb.get(params, (error, result) => {
            if (error) {
                respuestaAPI.httpStatusCode = 500;
                respuestaAPI.esCorrecto = false;
                respuestaAPI.mensajes.push('Ha ocurrodo un error al obtener el registro desde DynamoDB')
            }
            else {
                respuestaAPI.httpStatusCode = 200;
                respuestaAPI.resultado = JSON.stringify(result.Item);
            }

            return respuestaAPI;
        });

        return respuestaAPI;
    }
}