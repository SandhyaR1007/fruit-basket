import "./App.css";
import { useState } from "react";
import { fruits } from "./fruits";
const App = () => {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const checkCart = (val) => {
    let keysArr = Object.keys(fruits);
    let valuesArr = Object.values(fruits);
    if (val == "") {
      setName("");
    } else if (keysArr.includes(val)) {
      setName(fruits[val].name);
      setColor(fruits[val].color);
    } else {
      let found = null;
      valuesArr.forEach((item, index) => {
        if (item.name.toLowerCase() == val.toLowerCase()) {
          found = index;
        }
      });
      if (found !== null) {
        setName(keysArr[found]);
        setColor(valuesArr[found].color);
      } else {
        setColor("");
        setName("Looks like we don't have this fruit !!");
      }
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
