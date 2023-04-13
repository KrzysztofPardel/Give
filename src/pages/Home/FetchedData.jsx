import {
  collection,
  query,
  onSnapshot,
  QuerySnapshot,
  doc,
  getDocs
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../firebase";

const Fetch = () => {
  const [allDocs, setAllDocs] = useState([]);

  const fetchAll = async (e) => {
    // e.preventDefault();

    const querySnapshot = await getDocs(collection(db, "f_Collections"));

    const documents = querySnapshot.docs.map((doc) => doc.data());
    setAllDocs(documents);
  };
  useEffect(() => {
    fetchAll();
  }, []);
  return (
    <div className="">
      {/* <button type="button" onClick={fetchAll} className="">
        Fetch
      </button> */}

      {allDocs.map((doc) => (
        <div key={doc.id}>
          <div className="foundation-text_container">
            <div className="foundation-header&paragraph_container">
              <h1 className="foundation-header">{doc.name}</h1>
              <p className="foundation-paragraph">{doc.mission} </p>
            </div>
            <span className="foundation-span">{doc.items}</span>
          </div>
          <div className="line" />
        </div>
      ))}

      {/* <div className="who-foundations_container">
        <div className="foundation_text_container">
          <div className="foundation-header&paragraph_container">
            <h1 className="foundation-header">Foundation:"Dbam o Zdrowie"</h1>
            <p className="foundation-paragraph">
              {" "}
              Goal & Mission: Helping those who are going through a hard season
              of life.
            </p>
          </div>
          <span className="foundation-span">
            clothes,food,AGD, furnitures,toys
          </span>
        </div>
        <div className="line" />
        <div className="foundation_text_container">
          <div className="foundation-header&paragraph_container">
            <h1 className="foundation-header">Foundation:"Dbam o Zdrowie"</h1>
            <p className="foundation-paragraph">
              {" "}
              Goal & Mission: Helping those who are going through a hard season
              of life.
            </p>
          </div>
          <span className="foundation-span">
            clothes,food,AGD, furnitures,toys
          </span>
        </div>
        <div className="line" />
        <div className="foundation_text_container">
          <div className="foundation-header&paragraph_container">
            <h1 className="foundation-header">Foundation:"Dbam o Zdrowie"</h1>
            <p className="foundation-paragraph">
              {" "}
              Goal & Mission: Helping those who are going through a hard season
              of life.
            </p>
          </div>
          <span className="foundation-span">
            clothes,food,AGD, furnitures,toys
          </span>
        </div>
      </div>

      <div className="who-foundations_button_number_container">
        <button type="button" className="button_number">
          1
        </button>
        <button type="button" className="button_number">
          2
        </button>
        <button type="button" className="button_number">
          3
        </button>
      </div> */}
    </div>
  );
};

export default Fetch;
