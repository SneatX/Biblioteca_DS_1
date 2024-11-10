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
    id_usuario VARCHAR(150) PRIMARY KEY,
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
    id_usuario VARCHAR(150) NOT NULL,
    localidad INTEGER NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario),
    FOREIGN KEY (localidad) REFERENCES punto_trabajo (punto_trabajo_id)
);

CREATE TABLE prestamo (
    id_libro VARCHAR(20) NOT NULL,        
    id_localidad INTEGER NOT NULL,        
    num_inventario VARCHAR(50) NOT NULL,  
    id_usuario VARCHAR(150) NOT NULL,
    fecha_inicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_fin TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fecha_dev TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    valor_pactado_dia REAL NOT NULL,
    PRIMARY KEY (id_libro, id_localidad, num_inventario, id_usuario,fecha_inicio),  
    FOREIGN KEY (id_libro, id_localidad, num_inventario) REFERENCES libro_localidad(id_libro, id_localidad, num_inventario),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- Insertar autores
INSERT INTO autor (nombre, apellido, nacionalidad) VALUES
('Gabriel', 'García Márquez', 'Colombiana'),
('J.K.', 'Rowling', 'Británica'),
('George', 'Orwell', 'Británica'),
('Isabel', 'Allende', 'Chilena'),
('Mario', 'Vargas Llosa', 'Peruana');

-- Insertar editoriales
INSERT INTO editorial (nacionalidad) VALUES
('Colombiana'),
('Británica'),
('Española'),
('Chilena'),
('Peruana');

-- Insertar categorías
INSERT INTO categoria (nombre) VALUES
('Ficción'),
('No Ficción'),
('Ciencia Ficción'),
('Historia'),
('Literatura Clásica');

-- Insertar libros
INSERT INTO libro (isbn, titulo, editorial, idioma, año, edicion, categoria, resumen) VALUES
('978-3-16-148410-0', 'Cien años de soledad', 1, 'Español', '1967', 'Primera', 1, 'Una de las obras más importantes de la literatura latinoamericana, narra la historia de la familia Buendía en el mítico pueblo de Macondo.'),
('978-0-7475-3269-9', 'Harry Potter y la piedra filosofal', 2, 'Inglés', '1997', 'Primera', 3, 'Un niño huérfano descubre que es un mago y se embarca en una aventura en el mundo de la magia.'),
('978-0-452-28423-4', '1984', 3, 'Inglés', '1949', 'Primera', 2, 'En una sociedad distópica bajo un régimen totalitario, Winston Smith lucha contra el Gran Hermano.'),
('978-0-06-112241-5', 'La casa de los espíritus', 4, 'Español', '1982', 'Primera', 1, 'Una saga familiar que mezcla realismo mágico y la historia de Chile.'),
('978-0-06-121943-5', 'La ciudad y los perros', 5, 'Español', '1963', 'Primera', 4, 'Un grupo de jóvenes cadetes en una academia militar en Lima viven experiencias de opresión y rebeldía.');

-- Insertar relaciones libro-autor
INSERT INTO libro_autor (id_libro, id_autor) VALUES
('978-3-16-148410-0', 1),
('978-0-7475-3269-9', 2),
('978-0-452-28423-4', 3),
('978-0-06-112241-5', 4),
('978-0-06-121943-5', 5);

-- Insertar puntos de trabajo
INSERT INTO punto_trabajo (nombre, direccion) VALUES
('Biblioteca Central', 'Av. Principal 123'),
('Biblioteca Norte', 'Calle 45, Edificio A'),
('Biblioteca Sur', 'Calle 67, Piso 2'),
('Biblioteca Este', 'Avenida 9, Local 3'),
('Biblioteca Oeste', 'Calle 24, Oficina 5');

-- Insertar libros en localidades
INSERT INTO libro_localidad (id_libro, id_localidad, num_inventario, estado, coste_dia) VALUES
('978-3-16-148410-0', 1, 'INV001', 'Disponible', 1.5),
('978-0-7475-3269-9', 2, 'INV002', 'Prestado', 2.0),
('978-0-452-28423-4', 3, 'INV003', 'Disponible', 1.2),
('978-0-06-112241-5', 4, 'INV004', 'Disponible', 1.8),
('978-0-06-121943-5', 5, 'INV005', 'Prestado', 2.5);

-- Insertar usuarios
-- Insertar usuarios
INSERT INTO usuario (id_usuario, contraseña, nombres, apellidos, direccion, telefono, rol, correo_electronico, fecha_nacimiento) VALUES
('user_1', 'pass1234', 'Juan', 'Pérez', 'Calle Ficticia 123', '555-1234', 'usuario_final', 'juan.perez@email.com', '1985-06-15'),
('admin_2', 'admin1234', 'Carlos', 'Martínez', 'Calle Ejemplo 456', '555-5678', 'administrador', 'carlos.martinez@email.com', '1975-09-20'),
('librarian_3', 'pass5678', 'Ana', 'Gómez', 'Calle Real 789', '555-8765', 'bibliotecario', 'ana.gomez@email.com', '1990-03-30'),
('user_4', 'pass9876', 'Luis', 'Sánchez', 'Av. Reforma 101', '555-4321', 'usuario_final', 'luis.sanchez@email.com', '1988-11-22'),
('admin_5', 'admin5678', 'Eva', 'López', 'Calle Luna 202', '555-2345', 'administrador', 'eva.lopez@email.com', '1980-12-05'),
('librarian_4', 'pass2345', 'Pedro', 'Ramírez', 'Calle Sol 303', '555-1122', 'bibliotecario', 'pedro.ramirez@email.com', '1982-07-14'),
('user_5', 'userpass123', 'Laura', 'García', 'Av. Libertad 500', '555-6677', 'usuario_final', 'laura.garcia@email.com', '1995-02-18');


-- Insertar bibliotecarios
INSERT INTO bibliotecario (id_usuario, localidad) VALUES
("librarian_3", 1),
("librarian_4", 2);

-- Insertar préstamos
INSERT INTO prestamo (id_libro, id_localidad, num_inventario, id_usuario, fecha_inicio, fecha_fin, fecha_dev, valor_pactado_dia) VALUES
('978-3-16-148410-0', 1, 'INV001', "user_1", '2024-11-01 10:00:00', '2024-11-10 10:00:00', '2024-11-09 12:00:00', 1.5),
('978-0-7475-3269-9', 2, 'INV002', "user_4", '2024-11-02 14:00:00', '2024-11-09 14:00:00', '2024-11-08 16:00:00', 2.0),
('978-0-452-28423-4', 3, 'INV003', "user_4", '2024-11-03 09:00:00', '2024-11-15 09:00:00', '2024-11-13 11:00:00', 1.2),
('978-0-06-112241-5', 4, 'INV004', "user_5", '2024-11-04 16:00:00', '2024-11-20 16:00:00', '2024-11-18 18:00:00', 1.8),
('978-0-06-121943-5', 5, 'INV005', "user_1", '2024-11-05 11:00:00', '2024-11-12 11:00:00', '2024-11-10 14:00:00', 2.5);
