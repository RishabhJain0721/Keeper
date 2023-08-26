import React, { useState } from "react";
import Header from "./Header";
// import Input from "./components/Input"
// import Notes from "./Notes";
import Footer from "./Footer";

function App() {

  let [note, setNote] = useState({
    id: 0,
    title: "",
    description: "",
  });
  let [list, setList] = useState([]);

  function handleChange(event) {
    let { value, name } = event.target;
    setNote((prevValue) => ({  
      title: name === "first-ip" ? value : prevValue.title,
      description: name === "second-ip" ? value : prevValue.description,
    }));
  }


  function createCard(datum,index) {
    return <Note id={index} key={index} name={datum.title} d={datum.description} />;
  }
  function Note(props) {
    return (
      <div>
        <h5>{props.id}</h5>
        <h3>{props.name}</h3>
        <p>{props.d}</p>
      </div>
    );
  }
  function Notes(){
    return <note>{list.map(createCard)}</note>;
  }
  

  return (
    <div>
      <Header />
      {/* <Input /> */}
      {/* <Notes /> */}

      <div className="ip">
        <textarea
          placeholder="Enter the title"
          name="first-ip"
          className="first-ip"
          onChange={handleChange}
        />
        <textarea
          placeholder="Enter the description"
          name="second-ip"
          className="second-ip"
          onChange={handleChange}
        />
        <button className="plus" onClick={()=>{
            setList((prevList) => [...prevList, note])
            console.log(list);
            // display();
        }}>
          <h4>+</h4>
        </button>
        <Notes />
      </div>

      <Footer />
    </div>
  );
}

export default App;
