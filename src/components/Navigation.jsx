import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';

const Navigation = () => {
  // TODO: Implementar lógica para mostrar enlaces según el rol del usuario
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Book size={24} />
          <span className="text-xl font-bold">BiblioTech</span>
        </Link>
        <div className="space-x-4">
          <Link to="/admin" className="hover:underline">Admin</Link>
          <Link to="/librarian" className="hover:underline">Bibliotecario</Link>
          <Link to="/user" className="hover:underline">Usuario</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;