export class RespuestaAPI<S>{
    constructor() {
        this.esCorrecto = true;
        this.mensajes = new Array<string>();
    }
    esCorrecto: boolean;
    httpStatusCode: number;
    resultado: S;
    mensajes: Array<string>;
}