import React, { useEffect } from "react";
import { basurl, users } from "../../Api/api1";
import axios from "axios";
import Cookie from "cookie-universal";
const User = () => {
  const cookie = Cookie();
  useEffect(() => {
    axios
      .get(`${basurl}${users}`, {
        headers: {
          Authorization: `Bearer ` + cookie.get("ecoomrc"),
        },
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>page user</div>;
};

export default User;
