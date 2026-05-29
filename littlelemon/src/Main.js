import salad from './icons_assets/greeksalad.jpg';
import bruschetta from './icons_assets/bruchetta.svg';
import lemonDessert from './icons_assets/lemondessert.jpg';

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero__text">
          <div className="hero_header">
            <h1>Specials</h1>
            <button>Online Menu</button>
          </div>

          <div className="specials">
            <div className="special-card">
              <img className="special-card__image" src={salad} alt="Greek salad" />
              <h2 className="special-card__title">Greek Salad</h2>
              <p className="special-card__description">
                Crisp vegetables, tangy feta, and house vinaigrette in a refreshing classic.
              </p>
              <a className="special-card__link" href="#">Order now</a>
            </div>

            <div className="special-card">
              <img className="special-card__image" src={bruschetta} alt="Bruschetta" />
              <h2 className="special-card__title">Bruschetta</h2>
              <p className="special-card__description">
                Toasted bread topped with ripe tomatoes, basil, garlic, and olive oil.
              </p>
              <a className="special-card__link" href="#">Order now</a>
            </div>

            <div className="special-card">
              <img className="special-card__image" src={lemonDessert} alt="Lemon dessert" />
              <h2 className="special-card__title">Lemon Dessert</h2>
              <p className="special-card__description">
                A bright citrus finish with silky texture and a light, sweet finish.
              </p>
              <a className="special-card__link" href="#">Order now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
 
export default Main;
 