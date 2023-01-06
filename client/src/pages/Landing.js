import Wrapper from "../assets/wrappers/Landing";
import { Link, Navigate } from "react-router-dom";
import img from "../assets/images/landing2.svg";
import { useAppContext } from "../context/appContext";
import Logo from "../components/Logo";

const Landing = () => {
  const { user } = useAppContext();
  return (
    <Wrapper>
      {user && <Navigate to="/" />}
      <Logo />
      <div className="container page">
        <div className="info">
          <h1>Job List</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            aliquid voluptates, explicabo rem nesciunt eum consequuntur
            consectetur veritatis optio amet sunt.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={img} alt="job list landing" className="img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
