DROP DATABASE Biblioteca;

CREATE DATABASE Biblioteca;

USE Biblioteca;

/* Creacion de tablas */
CREATE TABLE autor (
    autor_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    nacionalidad VARCHAR(50) NOT NULL
);

CREATE TABLE editorial (
    editorial_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nacionalidad VARCHAR(50) NOT NULL
);

CREATE TABLE categoria (
    categoria_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE libro (
    isbn VARCHAR(20) PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    editorial INTEGER NOT NULL,
    idioma VARCHAR(50) NOT NULL,
    año VARCHAR(5) NOT NULL,
    edicion VARCHAR(10) NOT NULL,
    categoria INTEGER NOT NULL,
    resumen TEXT,
    FOREIGN KEY (editorial) REFERENCES editorial (editorial_id),
    FOREIGN KEY (categoria) REFERENCES categoria (categoria_id)
);

CREATE TABLE libro_autor (
    id_libro VARCHAR(20) NOT NULL,
    id_autor INTEGER NOT NULL,
    PRIMARY KEY (id_libro, id_autor),
    FOREIGN KEY (id_libro) REFERENCES libro (isbn),
    FOREIGN KEY (id_autor) REFERENCES autor (autor_id)
);

CREATE TABLE punto_trabajo (
    punto_trabajo_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(100) NOT NULL
);

CREATE TABLE libro_localidad (
    id_libro VARCHAR(20) NOT NULL,
    id_localidad INTEGER NOT NULL,
    num_inventario VARCHAR(50) NOT NULL,
    estado VARCHAR(20) NOT NULL,
    coste_dia REAL NOT NULL,
    PRIMARY KEY (
        id_libro,
        id_localidad,
        num_inventario
    ),
    FOREIGN KEY (id_libro) REFERENCES libro (isbn),
    FOREIGN KEY (id_localidad) REFERENCES punto_trabajo (punto_trabajo_id)
);

CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    contraseña VARCHAR(255) NOT NULL,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    direccion VARCHAR(255),
    telefono VARCHAR(15),
    rol VARCHAR(50) NOT NULL, -- Puede ser 'usuario_final', 'administrador', o 'bibliotecario'
    correo_electronico VARCHAR(100) UNIQUE NOT NULL,
    fecha_nacimiento DATE
);

CREATE TABLE bibliotecario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    localidad INTEGER NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario),
    FOREIGN KEY (localidad) REFERENCES punto_trabajo (punto_trabajo_id)
);

CREATE TABLE prestamo (
    id_libro VARCHAR(20) NOT NULL,        
    id_localidad INTEGER NOT NULL,        
    num_inventario VARCHAR(50) NOT NULL,  
    id_usuario INT NOT NULL,
    fecha_inicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_fin TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fecha_dev TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    valor_pactado_dia REAL NOT NULL,
    PRIMARY KEY (id_libro, id_localidad, num_inventario, id_usuario,fecha_inicio),  
    FOREIGN KEY (id_libro, id_localidad, num_inventario) REFERENCES libro_localidad(id_libro, id_localidad, num_inventario),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);