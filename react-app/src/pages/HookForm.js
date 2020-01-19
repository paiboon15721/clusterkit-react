import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const App = () => {
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState("");
  const onSubmit = data => {
    axios.post("http://localhost:4000/customers", data).then(() => {
      setMessage("บันทึกข้อมูลเรียบร้อย");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {message && (
        <div className="alert alert-primary" role="alert">
          {message}
        </div>
      )}
      <div className="form-group">
        <input
          ref={register({ required: true })}
          name="name"
          placeholder="name"
          className="form-control"
        />
        {errors.name && "กรุณาระบุชื่อ"}
      </div>
      <div className="form-group">
        <input
          ref={register({ required: true })}
          name="age"
          placeholder="age"
          className="form-control"
        />
        {errors.name && "กรุณาระบุอายุ"}
      </div>
      <div className="form-group">
        <input
          ref={register({ required: true })}
          name="phone"
          placeholder="phone"
          className="form-control"
        />
        {errors.name && "กรุณาระบุหมายเลขโทรศัพ์"}
      </div>
      <div className="form-group">
        <input
          ref={register({ required: true })}
          name="email"
          placeholder="email"
          className="form-control"
        />
        {errors.name && "กรุณาระบุอีเมล"}
      </div>
      <div className="form-group">
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default App;
