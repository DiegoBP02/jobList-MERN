import Wrapper from "../assets/wrappers/Landing";
import { Link } from "react-router-dom";
import img from "../assets/images/landing2.svg";
import logo from "../assets/images/logo.png";

const Landing = () => {
  return (
    <Wrapper>
      <nav className="nav">
        <div className="header">
          <img src={logo} alt="logo" />
        </div>
      </nav>
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
