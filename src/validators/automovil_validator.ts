import { RespuestaAPI } from "../utils/respuesta_api";

export class AutomovilValidator {
    public validarCamposRequeridos(datos: any): RespuestaAPI<string> {
        let resultadoAPI: RespuestaAPI<string> = new RespuestaAPI<string>();
        if (!datos.nombre)
            resultadoAPI.mensajes.push(this.obtenerMensajeCampoRequerido('nombre'));

        if (!datos.altura)
            resultadoAPI.mensajes.push(this.obtenerMensajeCampoRequerido('altura'));

        if (!datos.peso)
            resultadoAPI.mensajes.push(this.obtenerMensajeCampoRequerido("peso"));

        if (!datos.color)
            resultadoAPI.mensajes.push(this.obtenerMensajeCampoRequerido("color"));

        if (!datos.anhoFabricacion)
            resultadoAPI.mensajes.push(this.obtenerMensajeCampoRequerido("anhoFabricacion"));

        if (resultadoAPI.mensajes.length > 0){
            resultadoAPI.esCorrecto = false;
            resultadoAPI.httpStatusCode = 400;
        }
        
        return resultadoAPI;
    }

    private obtenerMensajeCampoRequerido(nombreCampo: string): string {
        return `El campo ${nombreCampo} es requerido`;
    }
}