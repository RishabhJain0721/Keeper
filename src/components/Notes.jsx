import React from "react";
import Data from "./data";

function createCard(datum) {
  return <Note id={datum.id} key={datum.id} name={datum.title} d={datum.desc} />;
}
function Note(props) {
  return (
    <div>
      <h1>{props.id}</h1>
      <h4>{props.name}</h4>
      <p>{props.d}</p>
    </div>
  );
}

function Notes() {
  return <note>{Data.map(createCard)}</note>;
}

export default Notes;
