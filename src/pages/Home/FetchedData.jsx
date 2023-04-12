// import * as firebase from "firebase/app";
// import "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase";
import { collection } from "firebase/firestore";

const Fetch = () => {
  const [allDocs, setAllDocs] = useState([]);
  const [singleDoc, setSingleDoc] = useState({});
  // const db = firebase.firestore(); //-tak to powinno wyglądać, ale wywala błąd firebase.firestore() is not a function
  // const db = firebase.firestore();

  const fetchAll = (e) => {
    e.preventDefault();
    db.collection("f_Collections")
      .get()
      .then((snapshot) => {
        if (snapshot.docs.length > 0) {
          snapshot.docs.forEach((doc) => {
            setAllDocs((prev) => {
              return [...prev, doc.data()];
            });
          });
        }
      });
    console.log(allDocs);
  };

  // useEffect(() => {
  //   fetchAll();
  // }, []);

  return (
    <div className="">
      qwerty
      <button type="button" onClick={fetchAll} className="">
        Fetch
      </button>
    </div>
  );
};

export default Fetch;
