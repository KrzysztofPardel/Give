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
      <button type="button" onClick={fetchAll} className="">
        Fetch
      </button>

      {allDocs.map((doc) => (
        <div key={doc.id}>
          <h2>{doc.name}</h2>
          <p>{doc.mission}</p>
          <span>{doc.items}</span>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
