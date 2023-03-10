import logo from "../assets/images/mainLogo.png";

const Logo = ({ center, noMargin }) => {
  let className = "nav";
  if (center) {
    className += " center";
  }
  if (noMargin) {
    className += " noMargin";
  }
  return (
    <nav className={className}>
      <img src={logo} alt="logo image" />
      <h2>Job List</h2>
    </nav>
  );
};
export default Logo;
