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
const  getTitle =(title) => title;


const App =() => {

  // React Hook
  const [searchTerm, setSearchTerm] = React.useState("React");

  const handleSearch = (event) =>{
    setSearchTerm(event.target.value);
  }
  
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

  // filter the stories using the array's filter() function
  const searchedStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase()));//making filter() case insensitive


  console.log("App rendering");
  return(
  // variable declaration -----inside the component
  // const title = "React";
    <div>
      <h1>{getTitle("My Hacker Stories")}</h1>

      
      <Search search={searchTerm} onSearch={handleSearch}/>

      <hr />

      <List list={searchedStories} />
      
    </div>
);
}


const List = (props) => (
  console.log("List rendering"),
  <ul>
    {/* eslint-disable-next-line react/prop-types*/}
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
      console.log("Item rendering"),
      <li>
              <span>
                {/* eslint-disable-next-line react/prop-types*/}
                <a href={props.item.url}>{props.item.title} </a>
              </span>
              {/* eslint-disable-next-line react/prop-types*/}
              <span>{props.item.author} </span>
              {/* eslint-disable-next-line react/prop-types*/}
              <span>{props.item.num_comments} </span>
              {/* eslint-disable-next-line react/prop-types*/}
              <span>{props.item.points} </span>
            
      </li>
  );


const Search =(props) => {
  console.log("Search rendering");

  // const [ searchTerm, setSearchTerm] = React.useState('');

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  //   // // synthetic event
  //   // console.log(event);
  //   // // value of target (input: HTML element)
  //   // console.log(event.target.value)
  //   props.onSearch(event);
  // }
  // eslint-disable-next-line react/prop-types
  const { search, onSearch } = props; // destructuring assignment
  
  return(
    <div>
      <label htmlFor="search">Search: </label>
      {/*eslint-disable-next-line react/prop-types*/}
      <input id="search" type="text" onChange={onSearch} value={search} />
      {/*
      <p>
        Searching for: <strong>{searchTerm}</strong>
      </p>

      */}
      
    </div>
);
}

export default App;