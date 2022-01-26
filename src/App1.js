import React from "react"; //optional
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItem1 from "./components/ListItem1";
import MyBook from "./components/MyBook";

const App1 = () => {
  const hobbies = ["reading", "travelling", "painting", "skiing"];
  const purchases = ["shoes", "bag", "hat", "shirt"];
  const bookSeries = [
    {
      name: "GOT", 
      author: "G.Martin"
    }, 
    {
      name: "LOTR", 
      author: "J.R.Tolkien"
    }, 
    {
      name: "KC", 
      author: "P.Rothfuss"
    }, 
    {
      name: "HP", 
      author: "J.K.Rowling"
    }
  ]
  return (
    <div>
      <ul>
        {hobbies.map((hobby) => {
          return <ListItem item={hobby} />;
        })}
        {/* <ListItem hobby={hobbies[0]}/>
        <ListItem hobby={hobbies[1]}/>
        <ListItem hobby={hobbies[2]}/>
        <ListItem hobby={hobbies[3]}/> */}
      </ul>
      <ul>
        {purchases
          .filter((purchase) => purchase.length > 3)
          .map((purchase) => (
            <ListItem1 item={purchase} />
          ))}
      </ul>
      <h2>My Favorite book series are:</h2>
      <ul>
        {
          bookSeries.map(book => {
            return <MyBook item={book}/>
          })
        }
      </ul>
    </div>
  );
}

export default App1;
//create a ListItem1 component(import&export) that will have li with bookname and author 
/* Example
my favorite book series are:
GOT by G.Martin
...
... 
...
*/
