import { useState, useEffect } from "react";
//Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export type Collection = {
  id: number;
  name: string;
  description: string;
  mission: string;
  items: string;
};

export interface CollectionProps {
  collectionName: string;
}

export const Collections = ({ collectionName }: CollectionProps) => {
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
    <div className="">
      {allDocs.map(({ id, name, description, items }) => (
        <div key={id}>
          <div className="Item-text_container">
            <div className="Item-header&paragraph_container">
              <h1 className="Item-header">{name}</h1>
              <p className="Item-paragraph">{description}</p>
            </div>
            <span className="Item-span">{items}</span>
          </div>
          <div className="line" />
        </div>
      ))}
    </div>
  );
};
