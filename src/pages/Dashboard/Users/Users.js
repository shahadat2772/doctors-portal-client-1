import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { auth } from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import useAdmin from "../../../hooks/useAdmin";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import

const Users = () => {
  const navigate = useNavigate();

  const [user, loading] = useAuthState(auth);

  const [admin] = useAdmin(user);

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", (req, res) =>
    fetch("http://localhost:5000/users", {
      headers: {
        authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        navigate("/login");
        signOut(auth);
        return;
      }
      return res.json();
    })
  );

  const makeAdmin = (email) => {
    fetch("http://localhost:5000/makeAdmin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="m-6">
      <h2 className="text-2xl">Users {users?.length}</h2>

      <div className="usersContainer mt-4">
        <div class="overflow-x-auto">
          <table class="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Admin</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {users?.map((user, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{user?.email}</td>
                  <td>
                    {admin && !user.admin && (
                      <button
                        onClick={() => makeAdmin(user.email)}
                        class="btn btn-xs"
                      >
                        MAKE ADMIN
                      </button>
                    )}
                  </td>
                  <td>
                    <button class="btn btn-xs">REMOVE USER</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
