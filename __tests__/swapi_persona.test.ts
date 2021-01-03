import { Persona } from "../src/models/persona_model";
import { SwapiService } from "../src/services/swapi_service";
import { RespuestaAPI } from "../src/utils/respuesta_api";

let service = new SwapiService();

describe('SWAPI Persona', () => {
    test('Probar que retorne a Luke Skywalker', async () => {
        let respuesta: RespuestaAPI<Persona> = await service.obtenerPersona(1);
        expect(respuesta.resultado.nombre).toBe("Luke Skywalker");
    });

    test('Probar que retorne personas', async () => {
        let respuesta: RespuestaAPI<Array<Persona>> = await service.obtenerPersonas();
        expect(respuesta.resultado.length).toBeGreaterThan(0);
    });
})
