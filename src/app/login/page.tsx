"use client";

import Image from "next/image";
import { auth, githubProvider, googleProvider } from "../config/config";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/Link';
import { signInWithPopup, signInWithEmailAndPassword,} from "firebase/auth";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSingIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log({ res });
      sessionStorage.setItem("user", email);
      setEmail("");
      setPassword("");
      router.push("/dashboard");
    } catch (e) {
      console.error(e);
    }
  };

  const handleGoogleSingIn = async () => {
          try {
            await signInWithPopup(auth, googleProvider);
            sessionStorage.setItem("user", 'true');
            router.push('/dashboard');
          }catch (e){
            console.error(e);
          }
  }

  const handleGitSignIn = async () =>{
    try{
      await signInWithPopup(auth, githubProvider);
      sessionStorage.setItem("user", 'true');
      router.push('/dashboard');
    }catch(e){
      console.error(e)
    }
  }



  return (
    <>
      <div className="">
        <section className="bg-Gray-50 my-8">
          <div className="w-full md:w-2/4 lg:w-4/12 px-4 mx-auto pt-6">
            <div className="relative flex flex-col min-w-0 md:min-w-52 break-words w-full mb-6 
            shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 
                    font-bold px-4 py-2 rounded outline-none focus:outline-none mr-2 
                    mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs 
                    ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleGitSignIn}
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
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 
                    font-bold px-4 py-2 rounded outline-none focus:outline-none 
                    mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center 
                    text-xs ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleGoogleSingIn}
                  >
                    <Image
                      alt="..."
                      className="w-5 mr-1"
                      src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                      width={40}
                      height={60}
                    />
                    Google{" "}
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300  
                      bg-white rounded text-sm shadow focus:outline-none focus:ring 
                      w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-required
                      aria-invalid
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 
                      bg-white rounded text-sm shadow focus:outline-none focus:ring w-full 
                      ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      aria-invalid
                      required
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 
                        ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blue-800 text-white active:bg-blueGray-600
                       text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg 
                       outline-none focus:outline-none mr-1 mb-1 w-full ease-linear 
                       transition-all duration-150"
                      type="button"
                      onClick={handleSingIn}
                    >
                      Sign In
                    </button>
                  </div>
                   <div className="flex gap-4 my-2"><p>Need an Account ?</p><Link href="/signup" className="text-blue-400">Register</Link></div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
