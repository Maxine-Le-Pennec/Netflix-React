import React from "react";
import data from "./assets/data.json";
import Segment from "./components/Segments";
import "./App.css";

function App() {
  return (
    <div>
      <body>
        <div className="container">
          <header>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmV6Fkc2C1lvZcK4su69wAFsdg67pWuT0RCw&usqp=CAU"
              alt="logo netflix"
            ></img>
          </header>
          <main>
            {data.map((elem, index) => {
              return <Segment category={elem}></Segment>;
            })}
          </main>
        </div>
      </body>
    </div>
  );
}

export default App;
