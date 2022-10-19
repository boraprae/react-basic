import * as React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  const params = useParams();
  //new ver
  const { state } = useLocation();
  const [product, setProduct] = React.useState(null);

  console.log(state.name);

  React.useEffect(()=>{
    if(state !== null){
      setProduct(state);
    }
  },[state]);

  return (
    <>
      {params.id == null ? <h1>Welcome who?</h1> : <h1>Welcome {params.id}</h1>}
      {product == null ? <h3>No product</h3> : <h3>{product.name}</h3>}
      <button onClick={() => navigate(-1)}>Home</button>
      <button onClick={() => navigate("/", { replace: true })}>Logout</button>
    </>
  );
};

export default About;
