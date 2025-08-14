# Recetas Culinarias

## Descripcion
API REST para una Plataforma de Recetas Culinarias donde los usuarios puedan registrarse, agregar sus recetas y detallar sus ingredientes, así como buscar recetas por ingrediente y consultar las recetas creadas por un usuario en particular.

## Endpoints
### 1. Usuarios 
1. Registrar nuevos usuarios en la plataforma.
    - Metodo: POST

        ```http://localhost:5500/usuarios/create```
2. Listar todos los Usuarios registrados
    - Metodo: GET

        ```http://localhost:5500/usuarios/list ```
3. Ver la información detallada de un usuario en específico.
    
    - Metodo GET

        ``` http://localhost:5500/usuarios/get/:id ```
4. Actualizar los datos de un usuario.
    
    - Metodo PATCH

        ``` http://localhost:5500/usuarios/update/:id ```
5. Eliminar un usuario y todas sus recetas asociadas.
    
    - Metodo DELETE

        ``` http://localhost:5500/usuarios/del/:id ```

### 2. Recetas 
1. Permitir que un usuario pueda registrar una nueva receta con su título y descripción.
    - Metodo: POST

        ```http://localhost:5500/usuarios/create```
2. Listar todas las recetas disponibles en la plataforma.
    - Metodo: GET

        ```http://localhost:5500/usuarios/list ```
3. Consultar una receta en específico con todos sus ingredientes.
    
    - Metodo GET

        ``` http://localhost:5500/usuarios/get/:id ```
4. Editar el título o descripción de una receta.
    
    - Metodo PATCH

        ``` http://localhost:5500/usuarios/update/:id ```
5. Eliminar una receta.
    
    - Metodo DELETE

        ``` http://localhost:5500/usuarios/del/:id ```
6. Listar todas las recetas que pertenecen a un usuario específico (ej. “ver todas las recetas de Juan Pérez”).
    
    - Metodo GET

        ``` http://localhost:5500/usuarios/del/:id ```
### 3. Ingredientes 

## Instrucciones
### Instalacion
1. 

## Video
www.youtube.com

## Integrantes
- Sebastian Mauricio Betancourt
- Alejandro Naranjo Marin