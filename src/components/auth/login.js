import axios, { Axios } from "axios";
import React, { useState } from "react";
import { basurl, login } from "../../Api/api1";
import "../../css/components/form.css";
import Londing from "../londing/londing";
import  Cookie from 'cookie-universal'
const Login = () => {
  const [londing, setlonding] = useState(false);
  const [err, seteror] = useState("");

  const [form, setform] = useState({
    password: "",
    email: "",
  });
  function hundel(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }
  function hundelsubmite(e) {
    setlonding(true);
    e.preventDefault();
    const cookie = Cookie()
    axios
      .post(`${basurl}${login}`, form)
      .then((res) => {
        console.log(res);
        setlonding(false);
        const token = res.data.token
        cookie.set('ecoomrc',token)
        window.location.pathname='/'
      })
      .catch((err) => {
        console.log(err);
        seteror(err.response.data.error);
        setlonding(false);
      });
  }

  console.log(form);
  return (
    <>
      {londing && <Londing />}
      <div className="container">
        <div className="row h-100">
          <form className="form" onSubmit={hundelsubmite}>
            <h1>Login Now</h1>
            <div className="coustem-form">
              <div className="from-contrl">
                <input
                  name="email"
                  value={form.email}
                  onChange={hundel}
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="from-contrl">
                <input
                  value={form.passwored}
                  name="password"
                  onChange={hundel}
                  id="passwored"
                  type="passwored"
                  placeholder="Enter Your passwored"
                  minLength={"8"}
                  required
                />
                <label htmlFor="passwored">Passwored</label>
              </div>
              {err !== "" ? <span className="eror">{err}</span> : ""}
              <button className="btn-primary btn">Rgister</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
