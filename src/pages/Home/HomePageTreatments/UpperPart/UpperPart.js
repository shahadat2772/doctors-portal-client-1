import React, { useEffect, useState } from "react";

const UpperPart = () => {
  const [treatments, setTreatments] = useState([]);

  // Fetching Treatments
  useEffect(() => {
    fetch("homePageTreatment.json")
      .then((res) => res.json())
      .then((data) => setTreatments(data));
  }, []);

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-12">
      {treatments.map((treatment) => (
        <div
          key={treatment._id}
          class="eachHomePageTreatment card w-[340px] md:w-[400px] h-[310] bg-base-100 shadow-xl"
        >
          <figure class="pt-[25px]">
            <img src={treatment.img} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body p-[28px] items-center text-center">
            <h2 class="card-title">{treatment.treatmentName}</h2>
            <p>{treatment.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpperPart;
