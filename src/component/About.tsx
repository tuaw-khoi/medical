import React from "react";
import StatBox from "./StatBox";

const About = () => {
  return (
    <div className="bg-[#0D4241] text-white p-10 pb-72">
      <div className="flex justify-center gap-10">
        <StatBox number="10,000+" label="Consultation" />
        <StatBox number="24+" label="Years of service" />
        <StatBox number="200k+" label="Surgery" />
        <StatBox number="200+" label="Angiography" />
      </div>
      <div className="flex justify-center gap-10 mt-16 w-[80%] mx-auto ">
        <div className="flex flex-col space-y-5 min-w-[50%]">
          <h3 className="text-[20px]">MESSAGE FROM CHAIRMAN</h3>
          <h1 className="text-[34px] font-bold">
            Know more about our <br /> Institute: National <br /> Medical
            College
          </h1>
        </div>
        <div className="flex flex-col space-y-5">
          <p className="text-[16px]">
            National Medical College was established in the year 2001, promoted
            by the “National Medical College Company Pvt. Ltd.” under the
            Chairmanship of Prof. Dr. Jainuddin Ansari, an outstanding surgeon
            who has earned national and international credentials for the
            promotion of Medico-Social services.
          </p>
          <p className="text-[16px]">
            National Medical College is one of the best medical colleges in
            Nepal, in fact the number one among all medical colleges in terms of
            infrastructure, academic facilities and modern sophisticated medical
            equipments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
