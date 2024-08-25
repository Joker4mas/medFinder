"use client";
import Image from "next/image";
import FemaleDoctor from "./images/doc-2.jpeg";
import Physician from "./images/fourone_zehebp.jpg";
import MedConference from "./images/medConfe_oed4bz.jpg"
import { RiGlobalFill, RiSearchFill, RiSpeakFill } from "react-icons/ri";
import Link from "next/link";
import Hospitals from "./components/Hospitals";
// import Teams from './components/Teams'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      
      <section data-id="hero-section" className="hero ">
        <div className="hero flex flex-col-reverse  md:flex-row bg-base-200 min-h-screen">
          <div data-id="hero-container" className="hero-content flex-col lg:flex-row-reverse w-50">
            <div className="p-4">
              <h1 data-id="hero-header" className="text-5xl font-bold">
                Discover Nearby Medical Facilities with MedFinder
              </h1>

              <p data-id="welcome-note" className="py-8  line-24">
                Welcome to MedFinder, your trusted partner in locating the best
                medical facilities near you. <br /> Whether you need immediate medical
                attention, a routine check-up, or specialized care, MedFinder is
                here to guide you every step of the way.
              </p>

              <button data-id="booking-btn" className="btn btn-success"><Link href="/login">Book an Appointment</Link></button>
            </div>
          </div>
          <div data-id="doc-picture" className="items-center md:mr-8">
            <Image
              src={FemaleDoctor}
              width={1250}
              height={1250}
              alt="consultation picture"
              className="h-full rounded-md p-4"
              priority={true}
            />
          </div>
        </div>
      </section>

      <div data-testid="card-components" className="cards grid grid-cols-1 md:grid-cols-2 lg:flex-row items-center justify-between gap-8 my-24">
        <div data-testid="first-card" className="card bg-info text-primary-content w-96" data-aos="fade-left">
          <div  className="card-body">
            <div className="inline-flex items-center gap-2">
              <RiGlobalFill width={44} height={90} />
              <h2 data-testid="card-title" className="card-title">Nationwide Hospitals!</h2>
            </div>
            <p>Get Hospitals in every state within Nigeria</p>
            <div className="card-actions justify-start">
              <button className="btn">Search</button>
            </div>
          </div>
        </div>

        <div className="card bg-info text-primary-content w-96">
          <div className="card-body">
            <div className="inline-flex items-center gap-2">
              <RiSpeakFill width={44} height={90} />
              <h2 className="card-title">Free Consultations!</h2>
            </div>
            <p>Get free Consultation on us today.</p>
            <div className="card-actions justify-end">
              <button className="btn"><Link href="./login">Book now </Link> </button>
            </div>
          </div>
        </div>

        <div className="card bg-info text-primary-content w-96" data-aos="fade-right">
          <div className="card-body">
            <div className="inline-flex items-center gap-2">
              <RiSearchFill width={44} height={90} />
              <h2 className="card-title">Add new Hospitals</h2>
            </div>
            <p>You can add new Hospitals to our list 😇 .</p>
            <div className="card-actions justify-start">
              <button className="btn"><Link href="/admin">LogIn as an Admin</Link></button>
            </div>
          </div>
        </div>

        <div className="card bg-info text-primary-content w-96" data-aos="fade-right">
          <div className="card-body">
            <div className="inline-flex items-center gap-2">
              <RiSearchFill width={44} height={90} />
              <h2 className="card-title">Find Hospitals</h2>
            </div>
            <p>Search for Hospitals close to you today.</p>
            <div className="card-actions justify-end">
              <button className="btn">Search</button>
            </div>
          </div>
        </div>
      </div>

    
    {/* <Hospitals/> */}
    <Hospitals />





      <section className="hero-bottom">
        <div className="hero flex flex-col-reverse  md:flex-row bg-base-200 min-h-screen">
          <div data-id="hero-bottom"  className="flex flex-col  md:flex-col lg:flex-row items-center mx-auto gap-8 text-center">
        
            <Image
              src={MedConference}
              width={450}
              height={225}
              alt="consultation picture"
              className="rounded-md mx-auto h-auto w-auto"
              data-aos="flip-right"
            />
            <Image src={Physician}   
            width={450} height={225} alt="medfracture picture"
             className="my-4 md:my-0 h-auto w-auto rounded-md mx-auto"/>

            {/* <CldImage src='/public/images/' width={850} heigh={550} alt="Cloud images"/> */}
          </div>
        </div>
      </section>

    </main>
  );
}
