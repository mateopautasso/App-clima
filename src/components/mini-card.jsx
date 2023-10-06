import "./mini-card.css";

export function MiniCard({ day, icon, tempMax, tempMin }) {
  return (
    <div className="mini-card">
      <h5>{day}</h5>
      <figure>
        <img src={icon} alt="" />
      </figure>
      <div className="temp">
        <p>{tempMax} °C</p>
        <p>{tempMin} °C</p>
      </div>
    </div>
  );
}
