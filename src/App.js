import "./App.css";
import tachyons from "tachyons";
import { Cards } from "./components/Cards";
import { pizzaData } from "./data";



function App() {
  return (
    <div className="App">
      <h1>- fast react pizza co. -</h1>
      <div className="our-menu">
        <hr></hr>
        <h3>our menu</h3>
        <hr></hr>
      </div>
      <div>
        <p className="bold"></p>
        <div className="card-container">
          {pizzaData.map((i) => {
           return <Cards
              image={i.photoName}
              name={i.name}
              ingredients={i.ingredients}
              price={i.price}
              isSoldOut={i.soldOut}
            />;
          })}
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
