import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
const About = () => {
    const navigate = useNavigate();
    const params = useParams();
  return (
    <>
      {params.id == null? <h1>Welcome who?</h1> : <h1>Welcome {params.id}</h1>} 
      <button onClick={()=> navigate(-1)}>Home</button>
      <button onClick={()=> navigate('/', {replace: true})}>Logout</button>
    </>
  );
};

export default About;
