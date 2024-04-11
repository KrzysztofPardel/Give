import { useEffect, useState } from "react";
import "./SCSS/ThreeColumns.scss";
//Redux
import { useSelector } from "react-redux";
import { RootState } from "Redux/store";
//Firebase
import { collection, getDocs } from "firebase/firestore";
import { dbMultiform } from "../../firebase";

const ThreeColumns = () => {
  const [doc, setAllDocs] = useState([]);
  const donationsCounter = useSelector(
    (state: RootState) => state.dataCounter.counter
  );
  const user = useSelector((state: RootState) => state.auth.user);

  const loggedUserUid = useSelector((state: RootState) => state.auth.user?.uid);

  const [bags, setBags] = useState(0);
  const [organizations, setOrganizations] = useState(0);
  const [collections, setCollections] = useState(0);

  //fetching the amount of bags of a user
  const fetchAll = async () => {
    const querySnapshot = await getDocs(collection(dbMultiform, "summaries"));
    //pobieram wszystkie dane
    const documents = querySnapshot.docs.map((doc) => doc.data());
    //wybieram dane od konkretnego uzytkownika
    const docsForUserId = documents.filter(
      (doc) => doc.step4.uid === loggedUserUid
    );
    //podliczam potrzebny fragment danych, np. bagsAmount
    const bags = docsForUserId.reduce((acc, cur) => {
      return acc + cur.step2.bagsAmount;
    }, 0);

    setOrganizations(docsForUserId.length || 0);
    setBags(bags);
    setAllDocs(documents as any);
  };

  const fetchOrganizeCollection = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(dbMultiform, "summariesCollections")
      );
      const documents = querySnapshot.docs.map((doc) => doc.data());
      const docsForUserId = documents.filter(
        (doc) => doc.step2.loggedUserId === loggedUserUid
      );
      console.log("doc for user", docsForUserId);

      setCollections(docsForUserId.length || 0);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAll();
    fetchOrganizeCollection();
  }, []);

  return (
    <>
      {user ? (
        <div id="start" className="three-background">
          <div className="three-columns-container">
            <div className="three-single_column">
              <div className="three-text-number">{bags}</div>
              <h1 className="three-text-header">Bags donated recently</h1>
              <p className="three-text-paragraph">
                {" "}
                Here is the amount of bags you have donated so far.
              </p>
            </div>
            <div className="three-single_column">
              <div className="three-text-number">{organizations}</div>
              <h1 className="three-text-header">Organizations supported</h1>
              <p className="three-text-paragraph">
                Here you can see how many organizations you were able to support
                up to this point of your journey with Give.
              </p>
            </div>
            <div className="three-single_column">
              <div className="three-text-number">{collections}</div>
              <h1 className="three-text-header">Collections organized</h1>
              <p className="three-text-paragraph">
                Here you can see how many collections you have organized.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div id="start" className="three-background">
          <div className="three-columns-container">
            <div className="three-single_column">
              <div className="three-text-number">500+</div>
              <h1 className="three-text-header">Bags donated recently</h1>
              <p className="three-text-paragraph">
                {" "}
                Thanks to your generous donations we were able to distribute
                large bags full of previously enjoyed things to those who would
                not be able to afford themselves. We wish you could see their
                joy!
              </p>
            </div>
            <div className="three-single_column">
              <div className="three-text-number">30+</div>
              <h1 className="three-text-header">Organizations supported</h1>
              <p className="three-text-paragraph">
                We are a channel through which many goodies flow to
                organizations which have direct contact with the needy families
                or single people. We are privileged to partner with those who
                have a burden for helping.
              </p>
            </div>
            <div className="three-single_column">
              <div className="three-text-number">100+</div>
              <h1 className="three-text-header">Collections organized</h1>
              <p className="three-text-paragraph">
                People just like you step up and organize collections which are
                supervised by our organization, to make sure all items are well
                prepared for transportation and later distribution. Why not try
                it yourself?
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThreeColumns;
