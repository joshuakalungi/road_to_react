import * as React from "react";


// variable declaration ------outside the component
// javascript string primitive
// const title = "React";

// javascript object 
// const welcome = {
//   greeting: "Hey",
//   title: "React"

// }


// function usage in JSX
function getTitle(title){
  return title;
}



// lists in React
const list = [
  { 
    title: "React", 
    url: 'https://reactjs.org/',
    author: 'Jordan   Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  { 
    title: "Redux", 
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]; 


const App =() => (
  // variable declaration -----inside the component
  // const title = "React";
    <div>
      <h1>{getTitle("React")}</h1>

      
      <Search />

      <hr />

      <List />
      
    </div>
);


const List =() => (
  <ul>
        { /*using arrow functions in jsx maps */ }
        {list.map((item) => {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title} </a>
              </span>
              <span>{item.author} </span>
              <span>{item.num_comments} </span>
              <span>{item.points} </span>
            </li>);
        })}
      </ul>
);


const Search =() => (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
);


export default App;