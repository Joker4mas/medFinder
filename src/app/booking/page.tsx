"use client";
import { signOut } from "firebase/auth";
import { auth } from "../config/config";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link'
import { useAuthState } from "react-firebase-hooks/auth";
// import Dashboard from "../dashboard/page";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  // const [user] = useAuthState(auth);
  // const userSession = sessionStorage.getItem("user");
  const router = useRouter();

  // if (!user && !userSession) {
  //   router.push("/");
  // }


  return (
    <>
      <div className="flex p-4  mx-auto">

      <div className="bg-gray-700 p-8 my-4  rounded shadow-md w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-200">
          Book a Medical Appointment
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-200"
              >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded bg-gray-300 text-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded  bg-gray-300 text-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-200"
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded  bg-gray-300 text-black"
              />
          </div>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-200"
              >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded  bg-gray-300 text-black"
              />
          </div>
          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-200"
              >
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded  bg-gray-300 text-black"
              />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-200"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded  bg-gray-300 text-black"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={() => {
              signOut(auth);
              sessionStorage.removeItem("user");
              router.push("/dashboard");
            }}
          >
            Submit
          </button>
        </form>
      </div>

   </div>
    </>
  );
};

export default Booking;
