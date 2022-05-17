import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  //   Get token and upsert the user info

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email };

    if (user) {
      fetch("http://localhost:5000/token", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ currentUser }),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data[1];
          setToken(accessToken);
          localStorage.setItem("accessToken", accessToken);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
