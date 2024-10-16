import React from 'react';
import { BookOpen, Search } from 'lucide-react';

const LibrarianPanel = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Panel de Bibliotecario</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
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
              Registrar Préstamo
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Registrar Devolución
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Search className="mr-2" />
          Catálogo de Libros
        </h2>
        <div className="mb-4">
          <input type="text" placeholder="Buscar libros..." className="w-full px-3 py-2 border rounded-md" />
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Título</th>
              <th className="p-2 text-left">Autor</th>
              <th className="p-2 text-left">ISBN</th>
              <th className="p-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Implementar lista de libros */}
            <tr>
              <td className="p-2">Cien años de soledad</td>
              <td className="p-2">Gabriel García Márquez</td>
              <td className="p-2">9780307474728</td>
              <td className="p-2">
                <button className="text-blue-600 hover:underline mr-2">Editar</button>
                <button className="text-red-600 hover:underline">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Agregar Libro
        </button>
      </div>
    </div>
  );
};

export default LibrarianPanel;