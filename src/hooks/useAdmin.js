import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(false);

  useEffect(() => {
    const currentUserEmail = user.email;

    if (user) {
      setAdminLoading(true);
      fetch("http://localhost:5000/isAdmin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ currentUserEmail }),
      })
        .then((res) => {
          if (res.status === 404) {
            setAdminLoading(false);
            return;
          }
          return res.json();
        })
        .then((data) => {
          setAdminLoading(false);
          if (data.role === "admin") {
            setAdminLoading(false);
            setAdmin(true);
          }
        });
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;
