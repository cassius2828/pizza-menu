import "./App.css";
import tachyons from "tachyons";
import { Cards } from "./components/Cards";
import { pizzaData } from "./data";
import { useEffect, useState } from "react";

function App() {
  const [storeOpen, setStoreOpen] = useState(true);
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());

 
  useEffect(() => {
    console.log(hour);
    console.log(minute);
  }, []);
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
            return (
              <Cards
                image={i.photoName}
                name={i.name}
                ingredients={i.ingredients}
                price={i.price}
                isSoldOut={i.soldOut}
              />
            );
          })}
        </div>
      </div>
      <footer className="mt5 mb5">
        {(hour > 22 && minute > 59) || hour < 9 ? (
          <p className="tc">We will reopen at 9:00 AM. Hope to see you soon!</p>
        ) : (
          <p className="tc">
            We are open until 10:00 PM! Come visit us now or order online
          </p>
        )}
      

        <button className="mt3">Order</button>
      </footer>
    </div>
  );
}

export default App;
