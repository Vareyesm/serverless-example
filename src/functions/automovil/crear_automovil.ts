import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { AutomovilService } from '../../services';
import { RespuestaAPI } from '../../utils/respuesta_api';

export const automovil: APIGatewayProxyHandler = async (event, _context) => {
  let automovilService: AutomovilService = new AutomovilService();
  let respuesta: RespuestaAPI<string> = automovilService.crearAutomovil(JSON.parse(event.body));

  return {
    statusCode: respuesta.httpStatusCode,
    body: JSON.stringify({
      respuesta
    }, null, 2),
  };
}
