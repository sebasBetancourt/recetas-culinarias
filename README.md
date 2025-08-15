# Plataforma de Recetas Culinarias

Desarrollar una API REST para una **Plataforma de Recetas Culinarias** donde los usuarios puedan registrarse, agregar sus recetas y detallar sus ingredientes, así como buscar recetas por ingrediente y consultar las recetas creadas por un usuario en particular.

---

## **Contexto funcional**

Tu equipo ha sido contratado para desarrollar una API que será la base de una futura aplicación web de recetas. El sistema debe permitir:

1. **Gestión de usuarios**
    - Registrar nuevos usuarios en la plataforma.
    - Consultar la lista de todos los usuarios registrados.
    - Ver la información detallada de un usuario en específico.
    - Actualizar los datos de un usuario.
    - Eliminar un usuario y todas sus recetas asociadas.
2. **Gestión de recetas**
    - Permitir que un usuario pueda registrar una nueva receta con su título y descripción.
    - Listar todas las recetas disponibles en la plataforma.
    - Consultar una receta en específico con todos sus ingredientes.
    - Editar el título o descripción de una receta.
    - Eliminar una receta.
    - **Listar todas las recetas que pertenecen a un usuario específico** (ej. “ver todas las recetas de Juan Pérez”).
3. **Gestión de ingredientes**
    - Agregar ingredientes a una receta existente (cada ingrediente tendrá un nombre y estará vinculado a una receta).
    - Ver todos los ingredientes de una receta.
    - Eliminar ingredientes de una receta.
    - **Buscar todas las recetas que contengan un ingrediente específico** (ej. “pollo” muestra todas las recetas que lo usan).

---

## **Requerimientos técnicos**

1. El proyecto debe estar desarrollado con **Node.js, Express, MongoDB y Dotenv**.
2. La conexión a la base de datos debe estar en un archivo separado y reutilizable.
3. Debe tener rutas organizadas por funcionalidad.
4. Incluir un **script de inicialización** (`dataset.js`) que inserte datos de prueba.
5. Documentar **cada endpoint** en el README con:
    - Método HTTP.
    - URL.
    - Descripción funcional.
    - Ejemplo de request y response (puede ser en JSON).
6. El código debe manejar errores y devolver mensajes claros al usuario.

---

## **Entregables**

- **Repositorio en GitHub** con:
    - Código fuente.
    - README documentado con instrucciones y endpoints.
- **Video demostrativo** (máx. 10 minutos y con cámara activa de todos los integrantes) usando **Insomnia o Postman**, mostrando:
    - Ejecución de cada operación solicitada.
    - Búsqueda por ingrediente.
    - Listado de recetas por usuario.

⚠️ El link del video debe agregarse en el Readme 

## Endpoints
### 1. Usuarios 
1. Registrar nuevos usuarios en la plataforma.
    - Metodo: POST
    - URL: http://localhost:3000/usuarios/create
    - Descripción: Crea un nuevo usuario.
    - Request ejemplo: 
      ```json
      {
        "id": 151,
        "nombre": "Nuevo Usuario",
        "email": "nuevo@example.com"
      }
      ```
    - Response ejemplo: 
      ```json
      {
        "message": "User created!",
        "id": "someObjectId"
      }
      ```

2. Listar todos los Usuarios registrados
    - Metodo: GET
    - URL: http://localhost:3000/usuarios/list
    - Descripción: Lista todos los usuarios.
    - Request: N/A
    - Response ejemplo: [array de usuarios]

3. Ver la información detallada de un usuario en específico.
    - Metodo: GET
    - URL: http://localhost:3000/usuarios/get/:id
    - Descripción: Obtiene un usuario por ID.
    - Request: N/A
    - Response ejemplo: 
      ```json
      {
        "id": 101,
        "nombre": "Usuario 1",
        "email": "usuario1@example.com",
        "recetas": [ObjectId("64f0b1c8f1d2c4b3a8e4e5d6")]
      }
      ```

4. Actualizar los datos de un usuario.
    - Metodo: PATCH
    - URL: http://localhost:3000/usuarios/update/:id
    - Descripción: Actualiza datos del usuario.
    - Request ejemplo: 
      ```json
      {
        "id": 101,
        "nombre": "Usuario Actualizado",
        "email": "actualizado@example.com"
      }
      ```
    - Response ejemplo: 
      ```json
      {"message": "User Updated!"}
      ```

5. Actualizar recetas de un usuario.
    - Metodo: PATCH
    - URL: http://localhost:3000/usuarios/recetas/:id
    - Descripción: Actualiza el array de recetas del usuario.
    - Request ejemplo: 
      ```json
      {
        "recetas": ["64f0b1c8f1d2c4b3a8e4e5d6", "64f0b1c8f1d2c4b3a8e4e5d7"]
      }
      ```
    - Response ejemplo: 
      ```json
      {"message": "User recipes updated!"}
      ```

6. Eliminar un usuario y todas sus recetas asociadas.
    - Metodo: DELETE
    - URL: http://localhost:3000/usuarios/del/:id
    - Descripción: Elimina usuario y recetas asociadas.
    - Request: N/A
    - Response ejemplo: 
      ```json
      {"message": "User and associated recipes deleted!"}
      ```

### 2. Recetas 
1. Registrar una nueva receta con título y descripción.
    - Metodo: POST
    - URL: http://localhost:3000/recetas/create
    - Descripción: Crea una receta y la asocia a un usuario.
    - Request ejemplo: 
      ```json
      {
        "id": 1051,
        "nombre": "Nueva Receta",
        "descripcion": "Descripción",
        "userId": 101
      }
      ```
    - Response ejemplo: 
      ```json
      {"message": "Receta creada", "id": "someId"}
      ```

2. Listar todas las recetas disponibles.
    - Metodo: GET
    - URL: http://localhost:3000/recetas/list
    - Descripción: Lista todas las recetas.
    - Request: N/A
    - Response: [array de recetas]

3. Consultar una receta en específico con todos sus ingredientes.
    - Metodo: GET
    - URL: http://localhost:3000/recetas/get/:id
    - Descripción: Obtiene receta con ingredientes.
    - Request: N/A
    - Response ejemplo: 
      ```json
      {
        "id": 1001,
        "nombre": "Pastel de Chocolate",
        "descripcion": "Delicioso...",
        "ingredientes": [{"_id": ObjectId("64f0b1c8f1d2c4b3a8e4e5d9"), "nombre": "Chocolate"}, ...]
      }
      ```

4. Editar el título o descripción de una receta.
    - Metodo: PATCH
    - URL: http://localhost:3000/recetas/update/:id
    - Descripción: Actualiza nombre o descripción.
    - Request ejemplo: 
      ```json
      {"nombre": "Nuevo Nombre"}
      ```
    - Response: 
      ```json
      {"message": "Receta actualizada"}
      ```

5. Eliminar una receta.
    - Metodo: DELETE
    - URL: http://localhost:3000/recetas/del/:id
    - Descripción: Elimina la receta y la remueve de usuarios.
    - Request: N/A
    - Response: 
      ```json
      {"message": "Receta eliminada"}
      ```

6. Listar todas las recetas que pertenecen a un usuario específico.
    - Metodo: GET
    - URL: http://localhost:3000/recetas/user/:userId
    - Descripción: Lista recetas de un usuario.
    - Request: N/A
    - Response: [array de recetas del usuario]

### 3. Ingredientes 
1. Agregar ingredientes a una receta existente.
    - Metodo: POST
    - URL: http://localhost:3000/recetas/add-ingrediente/:id
    - Descripción: Agrega un ingrediente a la receta (crea si no existe en ingredientes).
    - Request ejemplo: 
      ```json
      {"nombre": "Pollo"}
      ```
    - Response: 
      ```json
      {"message": "Ingrediente agregado"}
      ```

2. Ver todos los ingredientes de una receta.
    - Incluido en GET /recetas/get/:id

3. Eliminar ingredientes de una receta.
    - Metodo: DELETE
    - URL: http://localhost:3000/recetas/del-ingrediente/:id
    - Descripción: Elimina un ingrediente de la receta.
    - Request ejemplo: 
      ```json
      {"nombre": "Pollo"}
      ```
    - Response: 
      ```json
      {"message": "Ingrediente eliminado"}
      ```

4. Buscar todas las recetas que contengan un ingrediente específico.
    - Metodo: GET
    - URL: http://localhost:3000/recetas/search/:ingrediente
    - Descripción: Busca recetas por ingrediente.
    - Request: N/A
    - Response: [array de recetas]

## Instrucciones
### Instalacion
1. Clona el repositorio.
2. Instala dependencias: `npm install`
3. Configura .env con DB_URI y DB_NAME.
4. Inicia el servidor: `node index.js`
5. Para datos de prueba: `node dataset.js`

## Video
https://www.canva.com/design/DAGwHOc42aE/k_H65CfF3yXGElO5QSZX0w/edit?utm_content=DAGwHOc42aE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## Integrantes
- Sebastian Mauricio Betancourt
- Alejandro Naranjo Marin
```