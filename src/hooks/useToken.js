import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  const email = user?.user?.email;

  const currentUser = { email };

  //   Get token and upsert the user info

  if (user) {
    fetch("http://localhost:5000/token", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data[1]);
        const accessToken = data[1];
        setToken(accessToken);
        localStorage.setItem("accessToken", accessToken);
      });
  }
  return [token];
};

export default useToken;
