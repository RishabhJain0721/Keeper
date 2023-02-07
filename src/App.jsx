import React from "react";
import Header from "./components/Header";
import Input from "./components/Input"
import Note from "./components/Note";
import Footer from "./components/Footer";

function App(){
    return(
        <div>
            <Header />
            <Input />
            <Note />
            <Footer />
        </div>
    )
}

export default App;