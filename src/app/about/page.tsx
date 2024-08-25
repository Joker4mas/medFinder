"use client";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
export default function About() {
  return (
    <>
      {/* <div className="text-center mx-8 min-w-min">
        <h1 className="text-3xl font-bold my-8">About Us</h1>
        <blockquote className="p-12 text-lg leading-loose text-center">
          Welcome to MedFinder, your trusted partner in locating the best
          medical facilities near you. Whether you need immediate medical
          attention, a routine check-up, or specialized care, MedFinder is here
          to guide you every step of the way.
        </blockquote>

        <div className="01">
          <div className="bg-base-200 collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content font-bold">
              Why MedFinder?
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray-400 peer-checked:text-secondary-content">
              <h3 className="font-semibold "> Detailed Information </h3>
              <p>
                In todays fast-paced world, finding the right medical facility
                quickly and efficiently is crucial. MedFinder simplifies this
                process by offering a comprehensive, user-friendly platform that
                connects you with a wide range of healthcare providers in your
                area.
              </p>
              <span>
                How to Use MedFinder Visit Our Website Go to MedFinder.com and
                click on the Find Medical Facilities button.
              </span>
            </div>
          </div>
        </div>

        <div className="01">
          <div className="bg-base-200 collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content font-bold">
              Features of MedFinder
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray-400 peer-checked:text-secondary-content">
              <h3 className="font-semibold "> Detailed Information </h3>
              <p>
                Get detailed information about each medical facility, including:
              </p>
              <ol>Services offered</ol>
              <ol>Operating Hours</ol>
              <ol>Patient reviews and rating</ol>
            </div>
          </div>
        </div>

        <div className="02">
          <div className="bg-base-200 collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content font-bold">
              Comprehensive Search
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray-400 peer-checked:text-secondary-content">
              <h3 className="font-semibold "> Search</h3>
              <p>
                Our advanced search engine allows you to find hospitals,
                clinics, pharmacies, and specialized medical centers based on
                your location and specific needs. Simply enter your zip code or
                use your device’s GPS, and we’ll provide you with a list of the
                nearest facilities.
              </p>
            </div>
          </div>
        </div>

        <div className="03">
          <div className="bg-base-200 collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content font-bold">
              Emergency Alert
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray-400 peer-checked:text-secondary-content">
              <h3 className="font-semibold "> Detailed Information </h3>
              <p>
                In an emergency, every second counts. MedFinder offers an
                emergency alert feature that provides quick access to the
                nearest emergency rooms and urgent care centers.
              </p>
            </div>
          </div>
        </div>

      
          <div className="bg-base-200 collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content font-bold">
              Booking Appointments
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray-400 peer-checked:text-secondary-content">
              <h3 className="font-semibold "> Detailed Information </h3>
              <p>
                Schedule appointments directly through MedFinder with a few
                clicks. Our seamless integration with medical facility schedules
                ensures you find the earliest available slots.
              </p>
            </div>
          </div>
        
      </div> */}
      <div className="py-12 h-screen">
      <Accordion>
      <AccordionItem header="Why MedFinder?" className="bg-green-100 w-h-screen items-center">
      <p>
       In todays fast-paced world, finding the right medical facility
                quickly and efficiently is crucial. MedFinder simplifies this
                process by offering a comprehensive, user-friendly platform that
                connects you with a wide range of healthcare providers in your
                area.
              </p>
              <span>
                How to Use MedFinder Visit Our Website Go to MedFinder.com and
                click on the Find Medical Facilities button.
              </span>
      </AccordionItem>

      <AccordionItem header="Where does it come from?">
        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
        vitae, accumsan auctor mi.
      </AccordionItem>

      <AccordionItem header="Why do we use it?">
        Suspendisse massa risus, pretium id interdum in, dictum sit
        amet ante. Fusce vulputate purus sed tempus feugiat.
      </AccordionItem>
    </Accordion>
      </div>
    </>
  );
}
