import * as React from "react";


// variable declaration ------outside the component
// javascript string primitive
// const title = "React";

// javascript object 
const welcome = {
  greeting: "Hey",
  title: "React"

}


function App(){
  // variable declaration -----inside the component
  // const title = "React";

  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

    </div>
  );
}

export default App;