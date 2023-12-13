import * as React from "react";


// variable declaration ------outside the component
const title = "React";


function App(){
  // variable declaration -----inside the component
  // const title = "React";

  return (
    <div>
      <h1>Hello {title}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

    </div>
  );
}

export default App;