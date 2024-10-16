import React from 'react';
import { BookOpen, Search } from 'lucide-react';
import NavBar from '../components/NavBar';

const LibrarianPanel = () => {
  return (
    <>
      <NavBar options={["about", "contact", "user", "logout"]} />
      <section className='p-4'>
        <h1 className="text-3xl font-bold">Panel de Bibliotecario</h1>

        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BookOpen className="mr-2" />
            Gestión de Préstamos y Devoluciones
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="user" className="block mb-1">Usuario</label>
              <input type="text" id="user" className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div>
              <label htmlFor="book" className="block mb-1">Libro</label>
              <input type="text" id="book" className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="space-x-4">
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Iniciar Préstamo
              </button>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Iniciar Devolución
              </button>
            </div>
          </form>
        </article>

        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Search className="mr-2" />
            Inventario
          </h2>
          <div className="mb-4">
            <input type="text" placeholder="Buscar libros..." className="w-full px-3 py-2 border rounded-md" />
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">ISBN</th>
                <th className="p-2 text-left">Título</th>
                <th className="p-2 text-left">Autor</th>
                <th className="p-2 text-left">Editorial</th>
                <th className="p-2 text-left">Idioma</th>
                <th className="p-2 text-left">Año</th>
                <th className="p-2 text-left">Edicion</th>
                <th className="p-2 text-left">Categorias</th>
                <th className="p-2 text-left">Existencias</th>
                <th className="p-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">9780307474728</td>
                <td className="p-2">Cien años de soledad</td>
                <td className="p-2">Gabriel García Márquez</td>
                <td className="p-2">Editorial Sudamericana</td>
                <td className="p-2">Español</td>
                <td className="p-2">1967</td>
                <td className="p-2">5</td>
                <td className="p-2">Drama, Realismo magico</td>
                <td className="p-2">69</td>

                <td className="p-2">
                  <button className="text-blue-600 hover:underline mr-2">Editar</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Agregar Libro
          </button>
        </article>
        
      </section>
    </>
  );
};

export default LibrarianPanel;