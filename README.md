# Sistema de Gestión de Biblioteca

Este proyecto tiene como objetivo desarrollar un sistema para la gestión de bibliotecas, que permita la administración eficiente de inventarios de libros, el manejo de préstamos, devoluciones, reservas, y la autenticación de usuarios con diferentes roles (administradores, bibliotecarios, y usuarios finales).

## Integrantes del Proyecto

- **Andrés David Elizalde Peralta**
- **Emily Julieth Nieves Badillo**
- **Santiago Alexander Ospina Pabon**

## Docente

- **Nury Farelo Velasquez**

## Tabla de Contenido

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Funcionalidades Principales](#funcionalidades-principales)
3. [Clases Principales](#clases-principales)
4. [Patrones de Diseño Implementados](#patrones-de-diseño-implementados)
5. [Requisitos del Sistema](#requisitos-del-sistema)
6. [Diagramas](#diagramas)
7. [Tecnologías Utilizadas](#tecnologías-utilizadas)
8. [Sistemas de Referencia](#sistemas-de-referencia)

---

## Descripción del Proyecto

Este sistema busca mejorar la eficiencia operativa de las bibliotecas, facilitando el acceso de los usuarios a los libros mediante una interfaz intuitiva y funcionalidades avanzadas de búsqueda y reserva. Se identifican varios roles de usuarios que interactúan con el sistema:

- **Administradores**: Gestionan roles de usuarios, libros y generan informes.
- **Bibliotecarios**: Administran los préstamos, devoluciones y el catálogo de libros.
- **Usuarios Finales**: Buscan libros, consultan su disponibilidad y los reservan.

## Funcionalidades Principales

1. **Gestión de Usuarios**:

   - Registro y autenticación de usuarios.
   - Gestión de roles: administradores pueden asignar y modificar roles.

2. **Gestión de Libros**:

   - Agregar, editar y eliminar libros del catálogo.
   - Consultar la disponibilidad de libros.
   - Búsqueda avanzada con múltiples filtros (autor, título, género, etc.).

3. **Gestión de Préstamos y Reservas**:

   - Registro de préstamos y devoluciones.
   - Reserva de libros disponibles o en préstamo.
   - Notificaciones de disponibilidad para usuarios.

4. **Informes y Estadísticas**:
   - Generación de informes sobre préstamos, devoluciones, reservas y uso del catálogo.

## Clases principales

1. ****

## Patrones de Diseño Implementados

1. **Patrón Singleton**:

   - Implementado para manejar la conexión a la base de datos, asegurando que solo exista una conexión activa para mejorar el rendimiento.

   - En una aplicación grande, puede haber múltiples módulos o clases que necesiten acceder a la base de datos. Con el Singleton, cada uno de estos módulos puede obtener la misma instancia de la conexión de manera segura.

   - Al centralizar la gestión de la conexión de base de datos en un solo lugar, puedes asegurarte de que la conexión se maneja de forma consistente, evitando errores como conexiones no cerradas o conexiones múltiples innecesarias.

   - Ejemplo de la implementacion del patron:

```bash
import sqlite3
from sqlite3 import Error

class DatabaseConnection:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(DatabaseConnection, cls).__new__(cls)
            cls._instance._connection = None
        return cls._instance

    def connect(self, db_file):
        """Establecer una conexión con la base de datos SQLite"""
        if self._connection is None:
            try:
                self._connection = sqlite3.connect(db_file)
                print("Conexión a la base de datos establecida.")
            except Error as e:
                print(f"Error al conectar a la base de datos: {e}")
        return self._connection

    def close(self):
        """Cerrar la conexión con la base de datos"""
        if self._connection:
            self._connection.close()
            print("Conexión a la base de datos cerrada.")
            self._connection = None

# Uso del Singleton para manejar la conexión a la base de datos
if __name__ == "__main__":
    # Crear la primera instancia del singleton
    db1 = DatabaseConnection()
    connection1 = db1.connect("example.db")
```

2. **Patrón Builder**:

   - El patrón Builder se utiliza para construir objetos complejos paso a paso. En este sistema, se aplica a la clase `Libro`, que puede tener múltiples atributos como título, autor, ISBN, género, y ubicación. El Builder facilita la creación de instancias de Libro al permitir un proceso de construcción más flexible y controlado.

   - El patrón Builder es ideal para la clase `Libro`, ya que los libros en el sistema de gestión de bibliotecas pueden tener una amplia variedad de atributos que se deben definir. El uso del Builder permite la creación de objetos Libro de forma controlada y con flexibilidad, lo cual es útil en situaciones donde no se tienen todos los datos del libro en un solo momento o algunos atributos son opcionales.

- Director: Es responsable de gestionar el proceso de construcción.

```bash
class Director:
    def __init__(self, builder):
        self._builder = builder

    def construirLibro(self, titulo, autor, isbn, genero, ubicacion):
        self._builder.setTitulo(titulo)
        self._builder.setAutor(autor)
        self._builder.setIsbn(isbn)
        self._builder.setGenero(genero)
        self._builder.setUbicacion(ubicacion)
        return self._builder.getResult()
```

- Clase Builder: contiene los pasos para construir un objeto `Libro`.

```bash
class LibroBuilder:
    def __init__(self):
        self.libro = Libro(None, None, None, None, None)

    def setTitulo(self, titulo):
        self.libro.titulo = titulo

    def setAutor(self, autor):
        self.libro.autor = autor

    def setIsbn(self, isbn):
        self.libro.isbn = isbn

    def setGenero(self, genero):
        self.libro.genero = genero

    def setUbicacion(self, ubicacion):
        self.libro.ubicacion = ubicacion

    def getResult(self):
        return self.libro
```

- Clase Libro modificada: sigue siendo la misma, pero ahora es construida usando el patrón Builder.

```bash
class Libro:
    def __init__(self, titulo, autor, isbn, genero, ubicacion, disponibilidad=True):
        self.titulo = titulo
        self.autor = autor
        self.isbn = isbn
        self.genero = genero
        self.ubicacion = ubicacion
        self.disponibilidad = disponibilidad

    def actualizarDisponibilidad(self, estado):
        self.disponibilidad = estado

    def obtenerInformacion(self):
        return f"{self.titulo} - {self.autor}, ISBN: {self.isbn}"

```

## Requisitos del Sistema

### Requisitos Funcionales

- **Gestión de usuarios**: Registro, autenticación, roles y permisos.
- **Gestión de libros**: Agregar, editar, eliminar y buscar libros.
- **Préstamos y devoluciones**: Registrar préstamos y gestionar la devolución de libros.
- **Reservas**: Reservar libros y gestionar la cola de reservas.
- **Informes**: Generar estadísticas sobre el uso del sistema.

### Requisitos No Funcionales

- **Rendimiento**: El sistema debe ser capaz de manejar hasta 10,000 libros con un tiempo de respuesta de búsqueda menor a 2 segundos.
- **Escalabilidad**: Diseñado para soportar un aumento en la cantidad de usuarios y libros.
- **Seguridad**: Control de acceso basado en roles y encriptación de contraseñas.

## Diagramas

### Diagrama UML de Clases

El sistema incluye las siguientes clases principales:

- `Usuario` (base para todos los tipos de usuarios)
- `Administrador`
- `Bibliotecario`
- `UsuarioFinal`
- `Libro`
- `Prestamo`
- `Reserva`
- `Informe`

<img src="imgs/diagramaClases.png">

## Tecnologías Utilizadas

- **Lenguaje de Programación**: Python
- **Base de Datos**: SQLite (conexión gestionada por el patrón Singleton)
- **Frameworks de Desarrollo**: Flask, Django (dependiendo del alcance)
- **Bibliotecas**: sqlite3 (para la base de datos), etc.
- **Nota**: Debido a la limitacion en conocimientos, el primer boceto de las vistas se realizo en React

## Sistemas de Referencia

- **Koha**: Sistema de código abierto para la gestión de bibliotecas, utilizado a nivel mundial.
- **Evergreen**: Sistema utilizado por consorcios de bibliotecas públicas, con soporte para API y bibliotecas múltiples.
- **LibraryWorld**: Sistema basado en la nube, ideal para bibliotecas pequeñas.
