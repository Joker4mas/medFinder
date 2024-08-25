"use client";

import Image from "next/image";
import { auth, githubProvider, googleProvider } from "../config/config";
import { useState } from "react";
// import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from 'next/link';
// import {auth, db} from '../config/config'
import { signInWithPopup, signInWithEmailAndPassword,} from "firebase/auth";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();


  // const checkIfUserExists = async (email) => {
  //   try {
  //       const  userDocRef =  doc(db, "users", email);
  //       const userSnapshot = await getDoc(userDocRef);
  //       return userSnapshot.exists();
  //   } catch (err) {
  //     console.error('Error checking user in Firebase:', err);
  //     return false;
  //   }
  // };


  // Function to save new user to Firestore
  // const addUserToFirestore = async (user) => {
  //   try {
  //     const userDocRef = doc(db, "users", user.email);
  //     await setDoc(userDocRef, {
  //       email: user.email,
  //       name: user.displayName,
  //       provider: user.providerId,
  //       createdAt: new Date(),
  //     });
  //   } catch (err) {
  //     console.error("Error adding user to Firestore:", err);
  //   }
  // };

  // const handleSignIn = async (e) => {
  //   e.preventdefault();
  //   setError(null);

  //   try {
  //     const userExists = await checkIfUserExists(email);//checks if user exist
  //     if (userExists){
  //       //if the user is found in firestore, proceed to sign in 
  //       await signInWithEmailAndPassword(auth, email, password);
  //       router.push("/dashboard");
  //     }else{
  //       //if user dosn't exist in the store redirect to the register page
  //       setError("User not found. Please  Register.");
  //       router.push('/signup');
  //     }
  //   }catch(err){
  //     setError(err.message);
  //   }
  // };





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



  // Sign in with Google to check if a user exist
  // const handleGoogleSignIn = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, googleProvider);
  //     const user = result.user;

      // Check if user exists in Firestore
  //     const userExists = await checkIfUserExists(user.email);

  //     if (!userExists) {
        // If user does not exist, add them to Firestore
  //       await addUserToFirestore(user);
  //     }

  //     router.push("/dashboard"); // Redirect to dashboard after successful login
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };



  const handleGitSignIn = async () =>{
    try{
      await signInWithPopup(auth, githubProvider);
      sessionStorage.setItem("user", 'true');
      router.push('/dashboard');
    }catch(e){
      console.error(e)
    }
  }



  // Sign in with GitHub and check if user exist
  // const handleGitHubSignIn = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, githubProvider);
  //     const user = result.user;

      // Check if user exists in Firestore
  //     const userExists = await checkIfUserExists(user.email);

  //     if (!userExists) {
        // If user does not exist, add them to Firestore
  //       await addUserToFirestore(user);
  //     }

  //     router.push("/dashboard"); // Redirect to dashboard after successful login
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };




  


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
                      aria-required
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
                </form>
                   <div className="flex gap-4 my-2"><p>Need an Account ?
                    <Link href="/register" className="text-blue-400 ml-4">Register</Link>
                    </p>
                    </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
