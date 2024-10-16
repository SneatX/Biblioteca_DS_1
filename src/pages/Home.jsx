import React from 'react';
import { Book, Clock, Users, Map } from 'lucide-react';
import NavBar from '../components/NavBar';

export default function Home(){
  return (
    <>
      <NavBar options={["login"]} />
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Bienvenido a BiblioTech</h1>
        <p className="mt-2 text-xl text-gray-600">Tu puerta de entrada al conocimiento</p>
      </header>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sobre Nosotros</h2>
        <p className="text-gray-700">
          BiblioTech es una biblioteca moderna que combina la riqueza de los libros tradicionales
          con las últimas tecnologías. Nuestro objetivo es fomentar el amor por la lectura y
          facilitar el acceso al conocimiento para todos los miembros de nuestra comunidad.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Book className="mr-2 text-blue-600" />
            Colección
          </h2>
          <p className="text-gray-700">
            Contamos con más de 50,000 libros en diversos formatos, incluyendo libros impresos,
            e-books y audiolibros. Nuestra colección abarca una amplia gama de géneros y temas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Clock className="mr-2 text-blue-600" />
            Horario
          </h2>
          <p className="text-gray-700">
            Lunes a Viernes: 9:00 AM - 8:00 PM<br />
            Sábados: 10:00 AM - 6:00 PM<br />
            Domingos: Cerrado
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="mr-2 text-blue-600" />
            Servicios
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Préstamo de libros</li>
            <li>Acceso a computadoras e internet</li>
            <li>Salas de estudio</li>
            <li>Eventos literarios y culturales</li>
            <li>Programas de lectura para niños</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Map className="mr-2 text-blue-600" />
            Ubicación
          </h2>
          <p className="text-gray-700">
            Calle Principal 123<br />
            Ciudad Ejemplo, CP 12345<br />
            Tel: (123) 456-7890<br />
            Email: info@bibliotech.com
          </p>
        </div>
      </div>
    </>
  )
}