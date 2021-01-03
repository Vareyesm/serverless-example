### Instalar dependencias
`npm install`

### Desplegar hacia AWS (requiere que se tenga configurado las credenciales de AWS)
`npx sls deploy`

### Eliminar recursos creados en AWS
`npx sls remove`

### Ejecutar pruebas unitarias
`npm test`


### Documentación API's
Obtener persona desde SWAPI `/persona-swapi/{personaId}`
- Respuesta: 
    ```
    {
    "respuesta": {
        "esCorrecto": true,
        "mensajes": [],
        "httpStatusCode": 200,
        "resultado": {
            "nombre": "Luke Skywalker",
            "altura": "172",
            "peso": "77",
            "colorCabello": "blond",
            "colorPiel": "fair",
            "colorOjos": "blue",
            "anhoNacimiento": "19BBY",
            "genero": "male",
            "mundoNatal": "https://swapi.py4e.com/api/planets/1/",
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/",
                ...
            ],
            "vehiculos": [
                "https://swapi.py4e.com/api/vehicles/14/",
                ...
            ],
            "naves": [
                "https://swapi.py4e.com/api/starships/12/",
                ...
            ],
            "creado": "2014-12-09T13:50:51.644000Z",
            "editado": "2014-12-20T21:17:56.891000Z",
            "url": "https://swapi.py4e.com/api/people/1/"
        }
    }
}
    ```

Obtener personas desde SWAPI `/persona-swapi/`
    ```
    {"respuesta": {
        "esCorrecto": true,
        "mensajes": [],
        "httpStatusCode": 200,
        "resultado": [
            {
                "nombre": "Luke Skywalker",
                "altura": "172",
                "peso": "77",
                "colorCabello": "blond",
                "colorPiel": "fair",
                "colorOjos": "blue",
                "anhoNacimiento": "19BBY",
                "genero": "male",
                "mundoNatal": "https://swapi.py4e.com/api/planets/1/",
                "peliculas": [
                    "https://swapi.py4e.com/api/films/1/",
                    ...
                ],
                "vehiculos": [
                    "https://swapi.py4e.com/api/vehicles/14/",
                    ...
                ],
                "naves": [
                    "https://swapi.py4e.com/api/starships/12/",
                    ...
                ],
                "creado": "2014-12-09T13:50:51.644000Z",
                "editado": "2014-12-20T21:17:56.891000Z",
                "url": "https://swapi.py4e.com/api/people/1/"
            },
            ...
            }
    ```