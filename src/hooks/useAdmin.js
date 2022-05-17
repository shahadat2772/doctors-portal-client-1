import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const currentUserEmail = user.email;

    if (user) {
      fetch("http://localhost:5000/isAdmin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ currentUserEmail }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.admin) {
            setAdmin(true);
            setAdminLoading(false);
          }
          setAdminLoading(false);
        });
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;
