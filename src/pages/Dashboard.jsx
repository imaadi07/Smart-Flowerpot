import "../styles/Dashboard.css";
import FlowerCard from "../pages/Flowercard";

export default function Dashboard() {
  return (
    <div className="dash-body">
      <div className="dash-heading">
        <h3>Your smart plant's were waiting for you</h3>
      </div>
      <div className="pot-card">
        <FlowerCard
          image="https://www.pexels.com/photo/vibrant-daruma-dolls-at-japanese-temple-display-31100425/"
          name="Rose"
          description="A beautiful red rose symbolizing love and passion."
        />
      </div>
      <button>➕</button>
    </div>
  );
}
