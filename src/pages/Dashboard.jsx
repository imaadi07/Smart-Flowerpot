import "../styles/Dashboard.css";
import FlowerCard from "./Flowercard";

export default function Dashboard() {
  const flowers = [
    {
      image:
        "https://images.unsplash.com/photo-1616844868137-7ffaf43c2d80?w=600&auto=format&fit=crop&q=60",
      name: "Rose",
      description: "A beautiful red rose symbolizing love and passion.",
      moisture: 85,
    },
    {
      image: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg",
      name: "Tulip",
      description: "A vibrant tulip that brings joy and color to any garden.",
      moisture: 60,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1667821537436-6950502e95a8?w=600&auto=format&fit=crop&q=60",
      name: "Peony",
      description:
        "Soft and elegant peonies, a favorite for romantic settings.",
      moisture: 45,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1673037269228-f3cd141cbb0e?w=600&auto=format&fit=crop&q=60",
      name: "Sunflower",
      description: "Bright and cheerful, sunflowers always face the sun.",
      moisture: 30,
    },
  ];

  return (
    <div className="dash-body">
      <div className="dash-heading">
        <h3>Your smart plants are waiting for you 🌱</h3>
      </div>

      {/* Flower Cards Container */}
      <div className="flower-card-container">
        {flowers.map((flower, index) => (
          <FlowerCard
            key={index}
            image={flower.image}
            name={flower.name}
            description={flower.description}
            moisture={flower.moisture}
          />
        ))}
      </div>

      {/* Add Button */}
      <button className="add-btn">➕</button>
    </div>
  );
}
