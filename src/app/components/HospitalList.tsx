import HospitalCards from "./HospitalCard";
import React, { useEffect, useState } from "react";

interface Provider {
  name: string;
  address: string;
  // product:string;
  // state: string;
  // phone_number: any;
  // clinic_type : string;
}

interface HospitalCardProps {
  providersArray: Provider[]; //
}

const HospitalList: React.FC<HospitalCardProps> = ({ providersArray }) => {
  return (
    <div className="grid gird-col-1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 gap-4 items-center">
      {providersArray.length > 0 ? (
        providersArray.map((providers, index) => (
          <HospitalCards
            key={index}
            name={providers.name}
            address={providers.address}
            // state={providers.state}
            // phone_number={providers.phone_number?.json('')}
            // clinic_type={providers.clinic_type}
          />
        ))
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default HospitalList;
