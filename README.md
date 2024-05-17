# video-api

## Class Diagram
![ModelsDiagram](videoAPI-models.png?raw=true "Models")

## Building and running docker image
```
docker build . -t <desired tag>
docker run <desired tag> -p 8000:8000
```

## API
Before running any request make sure to have a valid JWT, the send it in th e authorization header with 'Bearer ' at he beginning

the code exposes it's swagger (redocly) in /redoc so you can see all the available endpoints
