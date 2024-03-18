import { useState, useEffect } from "react";
//Components
import { Collection, CollectionProps } from "./Collections";
//Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const Foundations = ({ collectionName }: CollectionProps) => {
  const [allDocs, setAllDocs] = useState<Collection[]>([]);

  const fetchAll = async () => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents = querySnapshot.docs.map((doc) => doc.data());
    setAllDocs(documents as Collection[]);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="Item-boxes">
      {allDocs.map(({ id, name, mission, items }) => (
        <div key={id} className="Item-box">
          <div className="Item-text_container">
            <div className="Item-header&paragraph_container">
              <h1 className="Item-header">{name}</h1>
              <p className="Item-paragraph">{mission} </p>
            </div>
            <span className="Item-span">{items}</span>
          </div>
          <div className="line" />
        </div>
      ))}
    </div>
  );
};
