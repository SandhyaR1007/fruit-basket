import "./App.css";
import { useState } from "react";
import { fruits } from "./fruits";
const App = () => {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const checkCart = (val) => {
    if (Object.keys(fruits).includes(val)) {
      setName(fruits[val].name);
      setName(fruits[val].color);
    } else if (val == "") {
      setName("");
    } else {
      console.log(Object.values(fruits));
      setColor("");
      setName("Looks like we don't have this fruit !!");
    }
  };
  return (
    <div className="App" style={{ background: `${color}` }}>
      <h1>Fruit Basket</h1>
      <input
        value={search}
        placeholder="Enter fruit to search"
        onChange={(e) => {
          setSearch(e.target.value);
          checkCart(e.target.value);
        }}
      />
      <p className="sub-head">fruits we have</p>
      <div className="basket">
        {Object.keys(fruits).map((i, index) => (
          <span
            className="fruit"
            key={index}
            onClick={() => {
              setColor(fruits[i].color);
              setSearch(i);
              setName(fruits[i].name);
            }}
          >
            {i}
          </span>
        ))}
      </div>
      <div className="result">{name}</div>
    </div>
  );
};

export default App;
