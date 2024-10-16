import React from 'react';
import { Search, BookOpen } from 'lucide-react';

const UserPanel = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Panel de Usuario</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
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
              {/* TODO: Agregar opciones de géneros */}
            </select>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Buscar
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <BookOpen className="mr-2" />
          Mis Libros
        </h2>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Título</th>
              <th className="p-2 text-left">Autor</th>
              <th className="p-2 text-left">Estado</th>
              <th className="p-2 text-left">Acción</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Implementar lista de libros del usuario */}
            <tr>
              <td className="p-2">El principito</td>
              <td className="p-2">Antoine de Saint-Exupéry</td>
              <td className="p-2">Prestado</td>
              <td className="p-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                  Devolver
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2">1984</td>
              <td className="p-2">George Orwell</td>
              <td className="p-2">Disponible</td>
              <td className="p-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  Reservar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPanel;