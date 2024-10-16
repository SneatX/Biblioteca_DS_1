import React from 'react';
import { Search } from 'lucide-react';
import { Users, FileText } from 'lucide-react';
import NavBar from '../components/NavBar';

const AdminPanel = () => {
  return (
    <>
      <NavBar options={["home", "logout"]} />
      <div className="space-y-6 p-4">
        <h1 className="text-3xl font-bold">Panel de Administrador</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="mr-2" />
            Gestión de Usuarios
          </h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Nombre</th>
                <th className="p-2 text-left">Correo</th>
                <th className="p-2 text-left">Rol</th>
                <th className="p-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* TODO: Implementar lista de usuarios */}
              <tr>
                <td className="p-2">Juan Pérez</td>
                <td className="p-2">juan@example.com</td>
                <td className="p-2">Usuario</td>
                <td className="p-2">
                  <button className="text-blue-600 hover:underline mr-2">Editar</button>
                  <button className="text-red-600 hover:underline">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Agregar Usuario
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
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
                <th className="p-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* TODO: Implementar lista de libros */}
              <tr>
                <td className="p-2">9780307474728</td>
                <td className="p-2">Cien años de soledad</td>
                <td className="p-2">Gabriel García Márquez</td>
                <td className="p-2">Editorial Sudamericana</td>
                <td className="p-2">Español</td>
                <td className="p-2">1967</td>
                <td className="p-2">5</td>
                <td className="p-2">Drama, Realismo magico</td>
                <td className="p-2">
                  <button className="text-blue-600 hover:underline mr-2">Editar</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Agregar Libro
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FileText className="mr-2" />
            Informes
          </h2>
          <div className="space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Generar Informe de Préstamos
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Generar Informe de Devoluciones
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;