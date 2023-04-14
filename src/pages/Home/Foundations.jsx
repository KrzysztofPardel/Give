import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../firebase";

export const FoundationsOne = () => {
  const [allDocs, setAllDocs] = useState([]);

  const fetchAll = async () => {
    const querySnapshot = await getDocs(collection(db, "f_Collections"));

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
              <p className="foundation-paragraph">{doc.mission} </p>
            </div>
            <span className="foundation-span">{doc.items}</span>
          </div>
          <div className="line" />
        </div>
      ))}
    </div>
  );
};

export const FoundationsTwo = () => {
  const [allDocs, setAllDocs] = useState([]);

  const fetchAll = async () => {
    const querySnapshot = await getDocs(collection(db, "f_Collections_two"));

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
              <p className="foundation-paragraph">{doc.mission} </p>
            </div>
            <span className="foundation-span">{doc.items}</span>
          </div>
          <div className="line" />
        </div>
      ))}
    </div>
  );
};

export const FoundationsThree = () => {
  const [allDocs, setAllDocs] = useState([]);

  const fetchAll = async () => {
    const querySnapshot = await getDocs(collection(db, "f_Collections_three"));

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
              <p className="foundation-paragraph">{doc.mission} </p>
            </div>
            <span className="foundation-span">{doc.items}</span>
          </div>
          <div className="line" />
        </div>
      ))}
    </div>
  );
};
