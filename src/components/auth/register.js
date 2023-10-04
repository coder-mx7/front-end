import axios from "axios";
import React, { useState } from "react";
import { basurl, register } from "../../Api/api1";
import "../../css/components/form.css";
import Londing from "../londing/londing";
import  Cookie from 'cookie-universal'

const Register = () => {
   const [londing,setlonding]=useState(false)
   
   const [form, setform] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [err,seteror] = useState('')
  function hundel(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }
   const cookie = Cookie()
  function hundelsubmite(e) {
        setlonding(true)

    e.preventDefault();
    axios
      .post(`${basurl}${register}`, form)
      .then((res) => {
        console.log(res);
        seteror('');
        setlonding(false)
        const token = res.data.token
        cookie.set('ecoomrc',token)
        window.location.pathname='/'

      })
      .catch((error) => {
        console.error(error);
        if (error.response && error.response.status === 422) {
          seteror(error.response.data.message);
        }
        setlonding(false)
      });
  }
  console.log(form);
  return (
   <>
   {londing && <Londing />}
    <div className="container">
      <div className="row h-100">
        <form className="form" onSubmit={hundelsubmite}>
          <h1>Regester Now</h1>
          <div className="coustem-form">
            <div className="from-contrl">
              <input
                name="name"
                value={form.name}
                onChange={hundel}
                id="name"
                type="text"
                placeholder="Enter Your Name"
                required
              />
              <label htmlFor="name">name</label>
            </div>
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
            {err!==''?<span className="eror">{err}</span>:''}
            <button className="btn-primary btn">Rgister</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;
