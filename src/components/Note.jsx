import React from "react";
import Data from "./data";

// function createCard(props){
//     return(
//         <div>
//           <h4>{props.title}</h4>
//           <p>{props.desc}</p>
//         </div>
//     );
// }
// function Note(){
//     return(
//         <note>
//             {Data.map(createCard)}
//         </note>
//     );
// }

// export default Note;

function Note() {
  return (
    <note>
      {Data.map((props) => {
        return (
          <div>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
          </div>
        );
      })}
    </note>
  );
}

export default Note;
