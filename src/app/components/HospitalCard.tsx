// import Image from 'next-/Image';
import { useState } from "react";
import Image from "next/image";
import GoogleImage from "../images/google-maps.svg";

interface HospitalCardProps {
  name: string;
  address: string;
  //   state: string;
  //   phone_number: any;
  //   clinic_type : string;
}

const HospitalCard: React.FC<HospitalCardProps> = ({
  name,
  address,
  //   state,
  //   phone_number,
}) => {
  const handleOpenGoogleMaps = () => {
    const formattedAddress = address.replace(/\s/g, "+");
    const url = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;
    window.open(url, "_blank");
  };

  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipBoard = () => {
    const textToCopy = `${name}\n${address}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => console.error("copy failed:", error));
  };

  return (
    <div className="max-w-sm p-4 gap-4 flex flex-col mx-auto max-h-42  border border-gray-200 rounded-lg hover:bg-gray-300 dark:bg-blue-green-200">
      <div className="flex items-end my-2">
        <button onClick={handleOpenGoogleMaps}>
          <Image
            src={GoogleImage}
            width={10}
            height={10}
            alt="Google map icon"
            className="w-8 h-8 cursor-pointer "
          />
        </button>
      </div>

      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-600 dark:text-gray-400">
        {name}
      </h5>

      <p className="mb-2 font-normal text-gray-700 dark:text-gray-300">
        {address}
      </p>

      {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
        {phone_number}
      </p> */}

      <div className="">
        <button
          className="inline-flex items-end text-gray-600 hover:text-green-400 hover:border-green-200 hover:border-2 my-1 rounded-md p-2"
          onClick={copyToClipBoard}
        >
          {copied ? "copied" : "copy address"}
        </button>
      </div>
    </div>
  );
};

export default HospitalCard;
