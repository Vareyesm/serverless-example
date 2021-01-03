import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { Persona } from '../../models/persona_model';
import { SwapiService } from '../../services/swapi_service';
import { RespuestaAPI } from '../../utils/respuesta_api';

export const persona: APIGatewayProxyHandler = async (event, _context) => {
  let personaService: SwapiService = new SwapiService();
  let respuesta: RespuestaAPI<Persona> = await personaService.obtenerPersona(parseInt(event.pathParameters.personaId));

  return {
    statusCode: respuesta.httpStatusCode,
    body: JSON.stringify({
      respuesta
    }, null, 2),
  };
}
