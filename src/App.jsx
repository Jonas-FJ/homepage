import constructionImg from './assets/mathieu-stern-construction-unsplash.jpg';
import './App.css'

function App() {
  return (
    <div className="construction">
      <figure>
        <img src={constructionImg} />
        <figcaption> Photo by Mathieu Stern {'\u00A0'}
          <a href="https://unsplash.com/photos/3-men-in-white-and-orange-shirts-and-green-pants-action-figures-tv7GF92ZWvs">
            Unsplash
          </a>
        </figcaption>

      </figure>
      <h1>Under construction</h1>
      <h2>Comnig to a server near you.</h2>
    </div>
  );
}

export default App;
