import React, { useState, useTransition } from "react";

const UseStateExample2 = () => {
  const [firstName, setFristName] = useState("");
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");
  const [submiData, setSubmitData]=useState(null);
  const [errors,setErrors]=useState({})


  const validateForm = () => {
    let formErrors = {};
    if (!firstName) formErrors.firstName = "Please enter your first name.";
    if (!emailid) formErrors.emailid = "Please enter your email.";
    if (!password) formErrors.password = "Please enter your password.";
    return formErrors;
  };

  const changeFirstName=(e)=>{
    setFristName(e.target.value)
    
  }
  const changeEmailid=(e)=>{
    setEmailid(e.target.value)
  }
  const changePassword=(e)=>{
    setPassword(e.target.value)
  }

  // button sumbit prevent default
  const buttonSubmit =(e)=>{
    e.preventDefault()
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const dataObj = {
        firstName: firstName,
        emailid: emailid,
        password: password,
      };
      setSubmitData(dataObj);
      setErrors({});
    } else {
      setErrors(formErrors);
      
    }
    
  }


  return (
    <div className="form_Container" style={{width:"600px",alignItems:"center",margin:"auto"}}>
      <form onSubmit={buttonSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="FirstName"
          value={firstName}
          onChange={changeFirstName}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="email"
          name="email"
          id="email_id"
          placeholder="EmailId"
          value={emailid}
          onChange={changeEmailid}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={changePassword}
          value={password}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            cursor:"pointer",
            borderRadius: "5px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
          }}
        >
          submit
        </button>
      </form>
      {
        submiData ? 
        <div style={{marginTop:"4rem"}}>
          <h1>Submited Data</h1>
          <div>
            <h3> FirstNme :{submiData.firstName}</h3>
            <h3> Email-Id :{submiData.emailid}</h3>
            <h3> Password :{submiData.password}</h3>
          </div>
        </div>
:<h1>No Data Here</h1>

}
      <div>
      
      </div>
    </div>
  );
};

export default UseStateExample2;
