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





const App =() => {
  
  // lists in React
  const stories = [
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

  
  return(
  // variable declaration -----inside the component
  // const title = "React";
    <div>
      <h1>{getTitle("React")}</h1>

      
      <Search />

      <hr />

      <List list={stories} />
      
    </div>
);
}


const List = (props) => (
  <ul>
        { /*using arrow functions in jsx maps */ }
        {props.list.map((item) => {
          return (
            <Item key={item.objectID} item={ item }/>
          );
        })}
      </ul>
);

const Item = (props) => {
  return (
      <li>
              <span>
                <a href={props.item.url}>{props.item.title} </a>
              </span>
              <span>{props.item.author} </span>
              <span>{props.item.num_comments} </span>
              <span>{props.item.points} </span>
            
      </li>
  );

}


const Search =() => {

  const [ searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm = event.target.value;
    // // synthetic event
    // console.log(event);
    // // value of target (input: HTML element)
    // console.log(event.target.value)
  }
  
  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Searching for: <strong>{searchTerm}</strong>
      </p>
    </div>
);
}

export default App;