'use client'
import React ,{ useState}from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {collection, doc, addDoc} from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { Bounce, ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {db} from '@/app/config/config';


interface IFormInput {
  name: string;
  address: string;
  phone: string;
  state: string;
  contributors?: string;
}

const HospitalForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);


  const notify = () => {
  }



    

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const docRef = await addDoc(collection(db, 'hospitals'), data);
      console.log("Document written with ID: ", docRef.id);
      reset();
     toast.success('Form submitted successfully 😉!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // You can add a success message here if needed
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error('An error occurred while submitting the form. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setSubmitError("An error occurred while submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">

<div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-bold">
          Hospital Name
        </label>
        <input
          id="name"
          {...register('name', { required: 'Hospital name is required' })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block mb-2 font-bold">
          Hospital Address
        </label>
        <textarea
          id="address"
          {...register('address', { required: 'Address is required' })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.address && <span className="text-red-500">{errors.address.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2 font-bold">
          Phone
        </label>
        <input
          id="phone"
          {...register('phone', { 
            required: 'Phone number is required',
            pattern: {
              value: /^\d{10}$/,
              message: 'Please enter a valid 10-digit phone number'
            }
          })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="state" className="block mb-2 font-bold">
          State
        </label>
        <input
          id="state"
          {...register('state', { required: 'State is required' })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.state && <span className="text-red-500">{errors.state.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="contributors" className="block mb-2 font-bold">
          Contributors Information
        </label>
        <textarea
          id="contributors"
          {...register('contributors')}
          className="w-full px-3 py-2 border rounded"
        />
        </div>
   

      

      {submitError && <p className="text-red-500 mb-4">{submitError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
    <ToastContainer/>
    </>
  );
};

export default HospitalForm;