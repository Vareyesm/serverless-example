import { PersonaMapper } from "../mappers/persona_swapi_mapper";
import { Persona } from "../models/persona_model";
import { RespuestaAPI } from "../utils/respuesta_api";
import axios from 'axios';

const SWAPI_PEOPLE_URL_BASE = 'https://swapi.py4e.com/api/people';
let mapper: PersonaMapper = new PersonaMapper();

export class SwapiService {
    public async obtenerPersona(personaId: Number) {
        const url = `${SWAPI_PEOPLE_URL_BASE}/${personaId.toString()}`;
        let respuestaAPI: RespuestaAPI<Persona> = new RespuestaAPI<Persona>();
        try {
            await axios.get(url)
                .then(respuesta => {           
                    respuestaAPI.httpStatusCode = 200;
                    respuestaAPI.resultado = mapper.mapPersona(respuesta.data)
                })
        } catch (error) {
            console.log(error);
            respuestaAPI.httpStatusCode = 500;
            respuestaAPI.mensajes.push(error);
        }

        return respuestaAPI;
    }

    public async obtenerPersonas() {
        let respuestaAPI: RespuestaAPI<Array<Persona>> = new RespuestaAPI<Array<Persona>>();
        try {
            await axios.get(SWAPI_PEOPLE_URL_BASE)
                .then(respuesta => {
                    respuestaAPI.httpStatusCode = 200;
                    respuestaAPI.resultado = mapper.mapPersonas(respuesta.data.results);
                })
        } catch (error) {
            respuestaAPI.httpStatusCode = 500;
            respuestaAPI.mensajes.push(error);
        }

        return respuestaAPI;
    }
}