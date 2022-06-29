import './App.css';
import Header from "./components/Header.jsx";
import Book from "./components/Book.jsx";
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div className="App">
      <header className="Library">
      <Header />
      <Book title="The Ra Contact: Teaching the Law of One" image="https://m.media-amazon.com/images/P/B07D6W6G7S.01._SCLZZZZZZZ_SX500_.jpg" details="Lorem ipsum dolor sit amet, ad idque congue apeirian cum. Pro ei mucius feugiat percipitur, his eu nonumy iracundia. Eos enim velit cu, te ius augue commodo disputationi, nominavi oportere partiendo usu ne. In duo dico nominati, est brute labore commune ut. Veri erat cu sea. Eam cu mollis quaestio, id audire assentior pri. Pri perpetua principes an."/>
      <Book title="Creativity: The Perfect Crime" image="https://m.media-amazon.com/images/P/B00G3L6M9S.01._SCLZZZZZZZ_SX500_.jpg" details="Ex wisi vidisse tibique vis, libris debitis fierent cum ne. Ei porro graecis antiopam cum, ut eum graece volutpat sadipscing, ne sea diam reformidans. Te has sonet dicunt, mea in illum nemore neglegentur, id est dicunt commune. Vis in iriure delenit propriae. Mei alii stet id, labores sensibus recteque an quo."/>
      <Footer />
      </header>  
    </div>
  );
}

export default App;
