### Instalar dependencias
`npm install`

### Desplegar hacia AWS (requiere que se tenga configurado las credenciales de AWS)
`npx sls deploy`

### Eliminar recursos creados en AWS
`npx sls remove`

### Ejecutar pruebas unitarias
`npm test`


### Documentación API's
Obtener persona desde SWAPI `GET /persona-swapi/{personaId}`
- Respuesta: 
    ```
    {
    "respuesta": 
        {
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

Obtener personas desde SWAPI `GET /persona-swapi/`
- Respuesta
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
        ]
    }
    ```

Crear vehiculo desde DynamoDB `POST /automoviles/`
- Body:
    ```
    {
        "nombre": "Yaris",
        "altura": "1.25",
        "peso": "123.25",
        "color": "Rojo",
        "anhoFabricacion": "2015"
    }
    ```
- Respuesta Correcta:
    ```
    {
        "respuesta": 
        {
            "esCorrecto": true,
            "mensajes": [],
            "httpStatusCode": 201,
            "resultado": "Se ha creado correctamente el registro de código 670b9562-b30d-52d5-b827-655787665500"
        }
    }
    ```
- Respuesta de bad request:
    ```
    {
        "respuesta": 
        {
            "esCorrecto": false,
            "mensajes": [
                "El campo nombre es requerido",
                "El campo altura es requerido",
                "El campo peso es requerido",
                "El campo color es requerido",
                "El campo anhoFabricacion es requerido"
            ],
            "httpStatusCode": 400
        }
    }
    ```

Obtener vehiculo desde DynamoDB `GET /automoviles/{vehiculoId}`
- Respuesta:
    ```
    {
        "respuesta": 
        {
            "esCorrecto": true,
            "mensajes": [],
            "httpStatusCode": 200,
            "resultado": 
                {
                    "id": "670b9562-b30d-52d5-b827-655787665500",
                    "nombre": "Yaris",
                    "altura": "1.25",
                    "peso": "123.25",
                    "color": "Rojo",
                    "anhoFabricacion": "2015",
                    "creado": "2021-01-03"
                }
        }
    }
    ```