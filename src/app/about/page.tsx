"use client";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
export default function About() {
  return (
    <>
      <div className="py-12 h-screen p-8">
        <Accordion>
          <AccordionItem
            header="Why MedFinder?"
            className="items-center p-4 mb-4 text-center"
          >
            <div className="p-4">
              <p className=" w-full p-2 md:w-4/5 mx-auto text-lg">
                In todays fast-paced world, finding the right medical facility
                quickly and efficiently is crucial. MedFinder simplifies this
                process by offering a comprehensive, user-friendly platform that
                connects you with a wide range of healthcare providers in your
                area.
              </p>
              <span className="my-2 md:w-2/5 text-lg">
                How to Use MedFinder Visit Our Website Go to MedFinder.com and
                click on the Find Medical Facilities button.
              </span>
            </div>
          </AccordionItem>

          <AccordionItem
            header="Features of MedFinder!"
            className="w-h-screen items-center p-4 mb-4 text-center"
          >
            <h4 className="font-bold my-2"> Detailed Information </h4>
            <div className="p">
              <p>
                Get detailed information about each medical facility, including:
              </p>
              <ul>
                <li>Services offered</li>
                <li>Operating Hours</li>
                <li>Patient reviews and rating</li>
              </ul>
            </div>
          </AccordionItem>

          <AccordionItem
            header="Comprehensive Search"
            className="w-h-screen items-center p-4 mb-4 text-center"
          >
            <h3 className="font-bold my-2"> Search</h3>
            <p className="p-4 w-full md:w-4/5 mx-auto">
              Our advanced search engine allows you to find hospitals, clinics,
              pharmacies, and specialized medical centers based on your location
              and specific needs. Simply enter your zip code or use your
              device’s GPS, and we’ll provide you with a list of the nearest
              facilities.
            </p>
          </AccordionItem>

          <AccordionItem
            header="Emergency Alert"
            className="w-h-screen items-center p-4 mb-4 text-center"
          >
            <h3 className="font-semibold text-center"> Search</h3>
            <p className="p-4 md:w-4/5 mx-auto"> 
              Our advanced search engine allows you to find hospitals, clinics,
              pharmacies, and specialized medical centers based on your location
              and specific needs. Simply enter your zip code or use your
              device’s GPS, and we’ll provide you with a list of the nearest
              facilities.
            </p>
          </AccordionItem>

          <AccordionItem
            header="Booking Appointment"
            className="w-h-screen items-center p-4 mb-4 text-center"
          >
            <h3 className="font-semibold "> Search</h3>
            <p className="p-4 md:w-4/5 mx-auto">
              Our advanced search engine allows you to find hospitals, clinics,
              pharmacies, and specialized medical centers based on your location
              and specific needs. Simply enter your zip code or use your
              device’s GPS, and we’ll provide you with a list of the nearest
              facilities.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
