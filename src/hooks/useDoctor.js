import { useEffect, useState } from "react";

const useDoctor = (user) => {
  const [doctor, setDoctor] = useState(false);
  const [doctorLoading, setDoctorLoading] = useState(false);

  useEffect(() => {
    const currentUserEmail = user.email;

    if (user) {
      setDoctorLoading(true);
      fetch("http://localhost:5000/isDoctor", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ currentUserEmail }),
      })
        .then((res) => {
          if (res.status === 404) {
            setDoctorLoading(false);
            return;
          }
          return res.json();
        })
        .then((data) => {
          setDoctorLoading(false);
          if (data.role === "doctor") {
            setDoctorLoading(false);
            setDoctor(true);
          }
        });
    }
  }, [user]);

  return [doctor, doctorLoading];
};

export default useDoctor;
