import { Persona } from "../models/persona_model";

export class PersonaMapper {
    public mapPersona(respuesta: any): Persona {
        let persona: Persona = new Persona();
        persona.nombre = respuesta.name;
        persona.altura = respuesta.height;
        persona.peso = respuesta.mass;
        persona.colorCabello = respuesta.hair_color;
        persona.colorPiel = respuesta.skin_color;
        persona.colorOjos = respuesta.eye_color;
        persona.anhoNacimiento = respuesta.birth_year;
        persona.genero = respuesta.gender;
        persona.mundoNatal = respuesta.homeworld;
        persona.peliculas = respuesta.films;
        persona.vehiculos = respuesta.vehicles;
        persona.naves = respuesta.starships;
        persona.creado = respuesta.created;
        persona.editado = respuesta.edited;
        persona.url = respuesta.url;

        return persona;
    }

    public mapPersonas(lista: Array<any>): Array<Persona> {
        let personas: Array<Persona> = new Array<Persona>();
        if (lista) {
            lista.forEach(item => {
                personas.push(this.mapPersona(item))
            })
        }
        return personas;
    }
}