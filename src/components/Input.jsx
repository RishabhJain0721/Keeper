import React,{useState} from "react";

function Input(props){
    console.log(props);
    let [note,setNote] = useState({
        id : -1,
        title : "",
        description : ""
    })

    function handleChange(event){

        let {value,name}=event.target;

        setNote(prevValue => ({
            id : prevValue.id+1,
            title : name==="first-ip" ? value : prevValue.title,
            description : name==="second-ip" ? value : prevValue.description
        }))

    }

    // function handleClick(){


        // setData(prevValues =>{
        //     return [...prevValues,note];
        // });

        // console.log("New Array : ");
        // console.log(Data);
    // }

    return(
        <div className="ip">
            <textarea placeholder="Enter the title" name="first-ip" className="first-ip" onChange={handleChange} />
            <textarea placeholder="Enter the description" name="second-ip" className="second-ip" onChange={handleChange} />
            <button className="plus" onClick={()=>{
                console.log("sent");
                props.onAdd(note);
                console.log(note);
            }}><h4>+</h4></button>
        </div>
    )
}

function Note(){
    
}

export default Input;