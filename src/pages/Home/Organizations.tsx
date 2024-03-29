import { useState, useEffect } from "react";
import { Collection, CollectionProps } from "./Collections";
//Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

// "o_Collections"
export const Organizations = ({ collectionName }: CollectionProps) => {
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
    <div className="item-boxes">
      {allDocs.map(({ name, description, items }) => {
        return (
          <div key={name} className="item-box">
            <div className="item-text_container">
              <div className="text-main">
                <h1 className="text-main_header">{name}</h1>
                <p className="text-main_paragraph">{description} </p>
              </div>
              <span className="item-span">{items}</span>
            </div>
            <div className="line" />
          </div>
        );
      })}
    </div>
  );
};
