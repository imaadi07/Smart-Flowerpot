import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-body">
      <div className="home-logo">
        <img
          src="https://i.etsystatic.com/53878342/r/il/9e2a7d/6253415746/il_1588xN.6253415746_c2je.jpg"
          alt="Minions"
          className="home-page-logo"
        />
        <h2>Welcome</h2>
      </div>
      <div className="home-btn">
        <button className="btn">Sign Up</button>
        <p>or</p>
        <button className="btn">Log In</button>
      </div>
    </div>
  );
}
