import React from "react";
import { useForm } from "react-hook-form";
const Form = () => {

    const {register,handleSubmit}=useForm();
    const onSubmit = (data)=>{
      const fn=document.getElementById('fn')
      const ln=document.getElementById('ln')
      const em=document.getElementById('email')
      const sub=document.getElementById('sub')
      fn.innerHTML="First Name: "+data.FirstName;
      ln.innerHTML="Last Name: "+data.LastName;
      em.innerHTML="E-Mail: "+data.Email;
      sub.innerHTML="Subject: "+data.Subject;
    }

  return (
    <div className="container">
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-5 card py-3 px-4">
        <h1 className="text-center">Registration</h1>
      <div className="mb-3 my-4">
        <label htmlFor="FirstName" className="form-label">
          First Name:{" "}
        </label>
        <input {...register("FirstName")} type="text" name="FirstName" id="FirstName" />
      </div>
      <div className="mb-3">
        <label htmlFor="LastName" className="form-label">
          Last Name:
        </label>
        <input {...register("LastName")} type="text" name="LastName" id="LastName" />
      </div>
      <div className="mb-3">
        <label htmlFor="Email" className="form-label">
          E-Mail:
        </label>
        <input {...register("Email")} type="email" name="Email" id="Email" />
      </div>
      <div className="mb-3 row">
        <label htmlFor="Subject" className="form-label">
          Subject:
        </label>
        <select {...register("Subject")} name="Subject" id="Subject" className="form-select my-4">
          <option value="React">React</option>
          <option value="DS">DS</option>
        </select>
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
    <div id="details" className="container text-center card w-50 my-4">
      <h3 id="fn" className="text-center"></h3>
      <h3 id="ln" className="text-center"></h3>
      <h4 id="email" className="text-center"></h4>
      <h4 id="sub" className="text-center"></h4>
    </div>
    <br />
    <br />
    </div>
  );
};
export default Form;
