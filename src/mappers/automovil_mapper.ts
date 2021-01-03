import { Automovil } from "../models/automovil_model";
import * as uuid from 'uuid';

export class AutomovilMapper {
    public mapHaciaAutomovil(datos: any): Automovil {
        let automovil: Automovil = new Automovil();
        automovil.id = uuid.v1();
        automovil.nombre = datos.nombre;
        automovil.altura = datos.altura;
        automovil.peso = datos.peso;
        automovil.color = datos.color;
        automovil.anhoFabricacion = datos.anhoFabricacion;
        automovil.creado = new Date().toDateString();
        return automovil;
    }
}