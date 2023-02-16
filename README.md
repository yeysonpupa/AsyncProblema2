# AsyncProblema2
Ejemplo PostApp

Se plantea la situación de una red social donde las personas pueden publicar, leer, editar y eliminar sus publicaciones. Desde el front-end, el usuario tiene la posibilidad de estas 4 acciones, las cuales son posibles al comunicarse a través de una API con el back-end.

En back-end se tiene un controller que recibe las request provenientes desde el front-end, de manera asincrónica, que a su vez cuenta con el operador await, para trabajarse como una promesa, lo que causa que cada función async (getPosts, createPost, updatePost, deletePost) sea pausada hasta que la promesa devuelva la respuesta negativa o positiva.

Los posts se identifican mediante ID, que se encuentran almacenados con toda su información y parámetros dentro de una base de datos Mongo.
Este es un ejemplo superficial de solamente las funciones asincrónicas de dicha red social, puesto que para tener un software completo haría falta hacer una conexión real con base de datos y las diversas funciones de interacción para el usuario con el front-end.
