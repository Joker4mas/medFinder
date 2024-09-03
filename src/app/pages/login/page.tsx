"use client";
import {useForm, SubmitHandler} from 'react-hook-form'
import Image from "next/image";
import { auth, githubProvider, googleProvider , db} from "../../config/config";
import { useState } from "react";
import {doc, getDoc } from 'firebase/firestore';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithPopup, signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider} from "firebase/auth";


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

  const router = useRouter()

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
    router.push('../pages/dashboard');
    } else {
      toast.info('New user detected. Please complete registration.');
      // Redirect to registration page
    router.push('../pages/register');
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
    <div className="max-w-sm items-center my-auto  mx-auto h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="container p-4  border-2 border-green-400 ">
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
          className={`w-full px-4 py-2 my-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>


      <div className="grid grid-cols-2 gap-2 items-center mx-auto  space-y-2">
        <button
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-32 px-4 py-2 font-bold mx-auto text-white bg-red-500 rounded hover:bg-red-700"
        >
             <span className='flex'>
             <Image
                      alt="..."
                      className="w-5 mr-1"
                      src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                      width={40}
                      height={40}
                    />
                   Google 
                 </span>        
        </button>
        <button
          onClick={handleGithubSignIn}
          disabled={isLoading}
          className="flex w-32 px-4 py-2 mx-auto font-bold text-white bg-gray-400 rounded hover:bg-green-400"
        >
                  <Image
                      alt="..."
                      className="w-5 mr-1"
                      src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"
                      width={40}
                      height={60}
                    />
          Github
        </button>
      </div>

      <div className=" my-4">
       <p>Need have an Account ? 
        <Link href="/register" className="hover:text-green-600 mr-4"> ...Register here</Link>
        </p> 
      </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default LoginForm;