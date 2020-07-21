import React from "react";
// import Images from "Img";

function Segment(props) {
  console.log(props.category);
  return (
    <div className="seg">
      <div className="titles">
        <h2>{props.category.category}</h2>
      </div>

      <div className="images">
        {props.category.images.map((elem, index) => {
          return <img src={elem} alt="film Netflix"></img>;
        })}
      </div>
    </div>
  );
}
export default Segment;
