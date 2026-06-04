import { Link } from 'react-router-dom';
import salad from './icons_assets/greeksalad.jpg';
import bruschetta from './icons_assets/bruchetta.svg';
import lemonDessert from './icons_assets/lemondessert.jpg';
import restaurant from './icons_assets/restaurant.jpg';
import chefB from './icons_assets/restaurant chef B.jpg';
import marioA from './icons_assets/Mario and Adrian A.jpg';
import marioB from './icons_assets/Mario and Adrian b.jpg';
import food1 from './icons_assets/food1.jpg';
import food2 from './icons_assets/food2.jpg';

const testimonials = [
  {
    title: 'Perfect Dinner',
    name: 'Jamie R.',
    image: restaurant,
    review:
      'The atmosphere was warm and welcoming, and the food felt fresh, vibrant, and full of character.',
  },
  {
    title: 'Fresh Favorites',
    name: 'Avery T.',
    image: chefB,
    review:
      'Every dish tasted thoughtful and well prepared, from the appetizers to the final dessert.',
  },
  {
    title: 'Family Favorite',
    name: 'Taylor M.',
    image: marioA,
    review:
      'We loved the lively energy and the quality of the ingredients. It feels like a true neighborhood gem.',
  },
  {
    title: 'Top Spot',
    name: 'Jordan P.',
    image: marioB,
    review:
      'Friendly service, bold flavors, and a memorable dining experience from start to finish.',
  },
];

function HomePage() {
  return (
    <main id="main" className="main">
      <section className="hero">
        <div className="hero__text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <Link className="hero__button" to="/booking" aria-label="On Click">
            Reserve a Table
          </Link>
        </div>

        <img
          className="hero__image"
          src={restaurant}
          alt="Little Lemon Restaurant"
        />
      </section>
      <section className="hero">
        <div className="hero__text">
          <div className="hero_header">
            <h1>Specials</h1>
            <button aria-label="On Click">Online Menu</button>
          </div>

          <div className="specials">
            <div className="special-card">
              <img className="special-card__image" src={salad} alt="Greek salad" />
              <div className="special-card__header">
                <h2 className="special-card__title">Greek Salad</h2>
                <h2 className="special-card__price">$12.99</h2>
              </div>
              <p className="special-card__description">
                Crisp vegetables, tangy feta, and house vinaigrette in a refreshing classic.
              </p>
              <a className="special-card__link" href="#" aria-label="On Click">
                Order now
              </a>
            </div>

            <div className="special-card">
              <img className="special-card__image" src={bruschetta} alt="Bruschetta" />
              <div className="special-card__header">
                <h2 className="special-card__title">Bruschetta</h2>
                <h2 className="special-card__price">$5.99</h2>
              </div>
              <p className="special-card__description">
                Toasted bread topped with ripe tomatoes, basil, garlic, and olive oil.
              </p>
              <a className="special-card__link" href="#" aria-label="On Click">
                Order now
              </a>
            </div>

            <div className="special-card">
              <img className="special-card__image" src={lemonDessert} alt="Lemon dessert" />
              <div className="special-card__header">
                <h2 className="special-card__title">Lemon Dessert</h2>
                <h2 className="special-card__price">$5.00</h2>
              </div>
              <p className="special-card__description">
                A bright citrus finish with silky texture and a light, sweet finish.
              </p>
              <a className="special-card__link" href="#" aria-label="On Click">
                Order now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="hero testimonials-section">
        <div className="hero_header2">
          <h1>Testimonials</h1>
        </div>

        <div className="testimonials">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="testimonial-card__title-row">
                <h2>{item.title}</h2>
              </div>

              <div className="testimonial-card__profile-row">
                <img
                  className="testimonial-card__avatar"
                  src={item.image}
                  alt={item.name}
                />
                <h2>{item.name}</h2>
              </div>

              <p className="testimonial-card__review">{item.review}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hero about" name="about">
        <div className="hero__text">
          <h1>About</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant dedicated to bringing people together through authentic flavours and
            warm hospitality. Our menu combines traditional recipes passed down through generations with a modern twist,
            using fresh ingredients to create memorable dining experiences.
          </p>
        </div>

        <div className="about__image-group">
          <img
            className="about__image about__image--base"
            src={food1}
            alt="Little Lemon Restaurant"
          />
          <img
            className="about__image about__image--overlay"
            src={food2}
            alt="Chef preparing food"
          />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
