import React from 'react';
import { Search, BookOpen } from 'lucide-react';
import NavBar from '../components/NavBar';

const UserPanel = () => {
  return (
    <>
      <NavBar options={["home", "logout"]} />
      <main className="space-y-6 p-4">
        <h1 className="text-3xl font-bold">Panel de Usuario</h1>
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Search className="mr-2" />
            Búsqueda de Libros
          </h2>
          <form className="space-y-4">
            <div>
              <input type="text" placeholder="Buscar por título, autor, género o ISBN" className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="flex space-x-4">
              <select className="px-3 py-2 border rounded-md">
                <option value="">Todos los géneros</option>
              </select>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Buscar
              </button>
            </div>
          </form>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BookOpen className="mr-2" />
            Mis Libros
          </h2>
          <table className="w-full text-center">
            <thead className=''>
              <tr className="bg-gray-100 text-center">
                <th className="p-2">Título</th>
                <th className="p-2">Autor</th>
                <th className="p-2">Fecha inicio</th>
                <th className="p-2">Fecha entrega</th>
                <th className="p-2">Estado</th>
                <th className="p-2">Costo</th>
                <th className="p-2">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {/* TODO: Implementar lista de libros del usuario */}
              <tr>
                <td className="p-2">El principito</td>
                <td className="p-2">Antoine de Saint-Exupéry</td>
                <td className="p-2">2024-9-30</td>
                <td className="p-2">2024-10-20</td>
                <td className="p-2">Prestado</td>
                <td className="p-2">$ 10.500</td>
                <td className="p-2">
                  <select name="" id="" className='w-full text-center'>
                    <option value=""></option>
                    <option value="">Extender prestamo</option>
                    <option value="">Volver a solicitar</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="p-2">1984</td>
                <td className="p-2">George Orwell</td>
                <td className="p-2">2023-10-20</td>
                <td className="p-2">2023-10-30</td>
                <td className="p-2 text-red-500 underline">En mora</td>
                <td className="p-2">$ 750.000</td>
                <td className="p-2">
                  <select name="" id="" className='w-full text-center'>
                    <option value=""></option>
                    <option value="">Extender prestamo</option>
                    <option value="">Volver a solicitar</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default UserPanel;