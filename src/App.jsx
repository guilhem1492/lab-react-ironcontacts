// src/App.js
import { useState } from "react";
import "./App.css";
import contactsArray from "./contacts.json";

function App() {
  const arrayOfFive = contactsArray.slice(0, 5);
  const title = "IronContacts";
  const [contacts, setContacts] = useState(arrayOfFive);

  const addRandomStar = () => {
    const listRandomStar = [...contacts];

    listRandomStar.push(
      contactsArray[Math.floor(Math.random() * contactsArray.length)]
    );
    //console.log("test", listRandomStar[0]);
    setContacts(listRandomStar);
  };

  const sortByName = () => {
    const copy = [...contacts];
    copy.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(copy);
  };

  const sortByPopularity = () => {
    const copy = [...contacts];
    copy.sort((a, b) => b.popularity - a.popularity);
    setContacts(copy);
  };

  const removeContact = (toDelete) => {
    setContacts((prev) => {
      return prev.filter((contact) => contact !== toDelete);
    });
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      <button onClick={addRandomStar}>Add Random Contact</button>
      <button onClick={sortByName}>Sort contacts by name</button>
      <button onClick={sortByPopularity}>Sort contacts by popularity</button>
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        {contacts.map((actor) => {
          return (
            <tbody>
              <tr>
                <td>
                  <img src={actor.pictureUrl} alt={actor.name} />
                </td>
                <td>{actor.name}</td>
                <td>{actor.popularity}</td>
                {actor.wonOscar ? <td>🏆</td> : <td></td>}
                {actor.wonEmmy ? <td>🏆</td> : <td></td>}
                <td>
                  <button
                    onClick={() => {
                      removeContact(actor);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
export default App;
