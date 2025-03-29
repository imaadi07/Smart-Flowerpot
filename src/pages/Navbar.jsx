import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-body">
      <img src="/images/Logo.jpg" alt="Logo" className="logo" />
      <ul className="nav-bar-items">
        <li>Home</li>
        <li>Services</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
}
