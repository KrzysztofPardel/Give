import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../firebase";

export const OrganizationsOne = () => {
  const [allDocs, setAllDocs] = useState([]);

  const fetchAll = async () => {
    const querySnapshot = await getDocs(collection(db, "o_Collections"));

    const documents = querySnapshot.docs.map((doc) => doc.data());
    setAllDocs(documents);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="">
      {allDocs.map((doc) => (
        <div key={doc.id}>
          <div className="non-text_container">
            <div className="non-header&paragraph_container">
              <h1 className="non-header">{doc.name}</h1>
              <p className="non-paragraph">{doc.description} </p>
            </div>
            <span className="non-span">{doc.items}</span>
          </div>
          <div className="line" />
        </div>
      ))}
    </div>
  );
};

export const OrganizationsTwo = () => {
  const [allDocs, setAllDocs] = useState([]);

  const fetchAll = async () => {
    const querySnapshot = await getDocs(collection(db, "o_Collections_two"));

    const documents = querySnapshot.docs.map((doc) => doc.data());
    setAllDocs(documents);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="">
      {allDocs.map((doc) => (
        <div key={doc.id}>
          <div className="foundation-text_container">
            <div className="foundation-header&paragraph_container">
              <h1 className="foundation-header">{doc.name}</h1>
              <p className="foundation-paragraph">{doc.description} </p>
            </div>
            <span className="foundation-span">{doc.items}</span>
          </div>
          <div className="line" />
        </div>
      ))}
    </div>
  );
};
