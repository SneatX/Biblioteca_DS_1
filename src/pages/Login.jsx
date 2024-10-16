import React from 'react';
import { useForm } from 'react-hook-form';
import { LogIn, UserPlus } from 'lucide-react';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // TODO: Implementar lógica de inicio de sesión
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'El correo electrónico es requerido' })}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Contraseña</label>
          <input
            type="password"
            id="password"
            {...register('password', { required: 'La contraseña es requerida' })}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex items-center justify-center">
          <LogIn size={18} className="mr-2" />
          Iniciar Sesión
        </button>
      </form>
      <div className="mt-4 text-center">
        <p>¿No tienes una cuenta?</p>
        <button className="text-blue-600 hover:underline mt-2 flex items-center justify-center mx-auto">
          <UserPlus size={18} className="mr-2" />
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default Login;