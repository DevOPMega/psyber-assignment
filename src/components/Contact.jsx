import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row">
      <div className="flex flex-col basis-1/2 space-y-5">
        <h2 className="text-heading text-3xl font-bold">Contact Us</h2>
        <span className="text-text-1 font-light">
          Please feel free to ask if you have any further questions.
        </span>
        <ul className="flex flex-col justify-center space-y-3">
          <li className="flex space-x-2">
            <span className="material-symbols-outlined">location_on</span>
            <span className="text-heading text-base font-semibold ">
              Sydney, Australia
            </span>
          </li>
          <li className="flex space-x-2">
            <span className="material-symbols-outlined">call</span>
            <span className="text-heading text-base font-semibold ">
              0468328227
            </span>
          </li>
          <li className="flex space-x-2">
            <span className="material-symbols-outlined">schedule</span>
            <span className="text-heading text-base font-semibold ">
              Mon-Fri: 9:00am - 5:00pm
            </span>
          </li>
          <li className="flex space-x-2">
            <span className="material-symbols-outlined">schedule</span>
            <span className="text-heading text-base font-semibold ">
              Weekends Appointments Only
            </span>
          </li>
        </ul>
      </div>
      <div className="basis-1/2 rounded-lg  overflow-hidden">
        <Image 
            src="/close-up-person-working-call-center.jpg"
            width={480}
            height={340}
            className="w-full"
            alt="Person close phone call"
        />
      </div>
    </div>
  );
};

export default Contact;
