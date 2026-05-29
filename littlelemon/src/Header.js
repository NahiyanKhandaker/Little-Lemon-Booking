import restaurant from "./icons_assets/restaurant.jpg";

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero__text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>

        <img
          className="hero__image"
          src={restaurant}
          alt="Little Lemon Restaurant"
        />
      </section>
    </main>
  );
}
 
export default Main;
 