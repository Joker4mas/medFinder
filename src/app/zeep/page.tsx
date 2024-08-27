'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import {  doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../config/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

interface IFormInput {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const checkUserExists = async (uid: string) => {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    return userSnap.exists();
  };

  const handleLogin = async (user: any) => {
    const userExists = await checkUserExists(user.uid);
    if (userExists) {
      toast.success('Login successful!');
      // Redirect to dashboard or home page
      // For example: router.push('/dashboard');
    } else {
      toast.info('New user detected. Please complete registration.');
      // Redirect to registration page
      // For example: router.push('/register');
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      await handleLogin(userCredential.user);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await handleLogin(result.user);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, githubProvider);
      await handleLogin(result.user);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-2 font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="password" className="block mb-2 font-bold">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register('password', { required: 'Password is required' })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div className="mt-4 space-y-2">
        <button
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
        >
          Sign in with Google
        </button>
        <button
          onClick={handleGithubSignIn}
          disabled={isLoading}
          className="w-full px-4 py-2 font-bold text-white bg-gray-800 rounded hover:bg-gray-900"
        >
          Sign in with GitHub
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default LoginForm;