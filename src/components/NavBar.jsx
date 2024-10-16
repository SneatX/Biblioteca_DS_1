import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';

export default function NavBar({options}){
  const pathsOptions = {
      home: {
        label: 'Home',
        path: '/',
      },
      user: {
        label: 'Mi cuenta',
        path: '/user',
      },
      about: {
        label: 'Acerca de',
        path: '/admin',
      },
      contact: {
        label: 'Contactanos',
        path: '/librarian',
      },
      login: {
        label: 'Iniciar sesión',
        path: '/login',
      },
      logout: {
        label: 'Cerrar sesión',
        path: '/',
      },
      default: {
        label: 'Sin opciones',
        path: '/',
      }
  }
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Book size={24} />
          <span className="text-xl font-bold">BiblioTech</span>
        </Link>
        <div className="space-x-4">
          {
            options.map(option =>{
              console.log("xd")
              return (
                pathsOptions[option] ? <Link key={pathsOptions[option].label} to={pathsOptions[option].path} className="hover:underline">{pathsOptions[option].label}</Link> : <Link to={pathsOptions["default"].path} className="hover:underline">{pathsOptions["default"].label}</Link>
              )
            }
            )
          }
        </div>
      </div>
    </nav>
  );
};