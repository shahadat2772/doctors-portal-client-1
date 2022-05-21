import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";

const AddDoctor = () => {
  // Navigator
  //   const navigate = useNavigate();

  const [services, setServices] = useState([]);

  // Form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // Hook to sign in with google

  //   Img storage key
  const imageStorageKey = `1ada22c843bec539f6c33ffc5484c2a5`;

  const onSubmit = async (data) => {
    const image = data.image[0];

    const formData = new FormData();

    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;

          const docInfo = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: img,
          };

          console.log(docInfo);

          fetch("http://localhost:5000/addDoctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(docInfo),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
        console.log("img bb result", result);
      });
  };

  return (
    <div>
      <div className="addDoctorContainer">
        <div className="hero h-[100vh]">
          <div className="card w-[385px] bg-base-100 shadow-xl">
            <div className="card-body p-[29px] pt-[35px]">
              <h3 className="text-center text-xl pb-3">Add a Doctor</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name input */}
                <div className="form-control w-full">
                  <label className="label py-[3px]">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type={`text`}
                    className="input input-bordered w-full"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                  {/* Error for Name filed */}
                  <label className="label pb-0">
                    {errors.name?.type === "required" && (
                      <span className="text-[12px] text-red-600">
                        *{errors.name.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* Email Field */}
                <div className="form-control w-full">
                  <label className="label py-[3px]">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type={`email`}
                    className="input input-bordered w-full"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Invalid email",
                      },
                    })}
                  />
                  {/* Error for email filed */}
                  <label className="label pb-0">
                    {errors.email?.type === "required" && (
                      <span className="text-[12px] text-red-600">
                        *{errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="text-[12px] text-red-600">
                        *{errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* Specialty input */}
                <div className="form-control w-full">
                  <label className="label py-[3px]">
                    <span className="label-text">Specialty</span>
                  </label>
                  <select
                    {...register("specialty")}
                    className="input input-bordered w-full"
                  >
                    {services?.map((service, index) => (
                      <option key={index} value={service.treatmentName}>
                        {service.treatmentName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Image input */}
                <div className="form-control w-full">
                  <label className="label py-[3px]">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type={`file`}
                    className="input input-bordered w-full"
                    {...register("image", {
                      required: {
                        value: true,
                        message: "Image is required",
                      },
                    })}
                  />
                  {/* Error for image filed */}
                  <label className="label pb-0">
                    {errors.image?.type === "required" && (
                      <span className="text-[12px] text-red-600">
                        *{errors.image.message}
                      </span>
                    )}
                  </label>
                </div>

                <input
                  className="w-full rounded-lg bg-accent text-white h-[48px] block mt-1"
                  type="submit"
                  value={`ADD`}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
