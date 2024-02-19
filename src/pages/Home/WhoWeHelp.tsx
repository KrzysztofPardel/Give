import { useState, FC } from "react";
import { Foundations } from "./Foundations";
import { Organizations } from "./Organizations";
import { Collections } from "./Collections";
import "./SCSS/WhoWeHelp.scss";
import Decoration from "../../assets/Decoration.svg";

const BUTTONS_GENERAL = [
  { id: 1, option: 1, content: "Foundations" },
  { id: 2, option: 2, content: " Non-governmental organizations" },
  { id: 3, option: 3, content: "Local collections" }
];

const BUTTONS_PAGES_TWO = [
  { id: 1, number: 1 },
  { id: 2, number: 2 }
];

const BUTTONS_PAGES_THREE = [
  { id: 1, number: 1 },
  { id: 2, number: 2 },
  { id: 3, number: 3 }
];

const WhoWeHelp: FC = () => {
  const [currentFoundationPage, setCurrentFoundationPage] = useState<number>(1);
  const [organizationPage, setOrganizationPage] = useState<number>(1);
  const [collectionPage, setCollectionPage] = useState<number>(1);
  const [currentSwitch, setCurrentSwitch] = useState<number>(1);

  const handleSwitch = (button: number) => {
    setCurrentSwitch(button);
  };
  const handleFoundationPage = (page: number) => {
    setCurrentFoundationPage(page);
  };
  const handleOrganizationPage = (page: number) => {
    setOrganizationPage(page);
  };
  const handleCollectionPage = (page: number) => {
    setCollectionPage(page);
  };

  return (
    <div id="help" className="who-background">
      <div className="who-container">
        <div className="who-text-container">
          <h1 className="who-header">Who do we help?</h1>
          <img src={Decoration} alt="box" className="who-decoration_image" />

          <div className="who-button_container">
            {BUTTONS_GENERAL.map(({ id, option, content }) => (
              <button
                key={id}
                onClick={() => handleSwitch(option)}
                type="button"
                className="who-button"
              >
                {content}
              </button>
            ))}
          </div>
          <p className="who-text_paragraph">
            Meet those who partner with us. Among them are foundatons,
            non-governmental organizations as well as local people responsible
            for collections of things will will be distributred throughout local
            communities.
          </p>
        </div>

        {/* Foundations */}
        {currentSwitch === 1 && (
          <>
            <div className="Item-container">
              {currentFoundationPage === 1 && (
                <Foundations collectionName="f_Collections" />
              )}
              {currentFoundationPage === 2 && (
                <Foundations collectionName="f_Collections_two" />
              )}
              {currentFoundationPage === 3 && (
                <Foundations collectionName="f_Collections_three" />
              )}
            </div>

            <div className="button_nr_container">
              {BUTTONS_PAGES_THREE.map(({ id, number }) => (
                <button
                  key={id}
                  onClick={() => handleFoundationPage(number)}
                  type="button"
                  className="button_number"
                >
                  {number}
                </button>
              ))}
            </div>
          </>
        )}
        {/* Non-governmental organizations */}
        {currentSwitch === 2 && (
          <>
            <div className="Item-container">
              {organizationPage === 1 && (
                <Organizations collectionName="o_Collections" />
              )}
              {organizationPage === 2 && (
                <Organizations collectionName="o_Collections" />
              )}
            </div>
            <div className="button_nr_container">
              {BUTTONS_PAGES_TWO.map(({ id, number }) => (
                <button
                  key={id}
                  onClick={() => handleFoundationPage(number)}
                  type="button"
                  className="button_number"
                >
                  {number}
                </button>
              ))}
            </div>
          </>
        )}
        {/* Local collections */}
        {currentSwitch === 3 && (
          <>
            <div className="Item-container">
              {collectionPage === 1 && (
                <Collections collectionName="c_Collections" />
              )}
              {collectionPage === 2 && (
                <Collections collectionName="c_Collections_two" />
              )}
            </div>
            <div className="button_nr_container">
              {BUTTONS_PAGES_TWO.map(({ id, number }) => (
                <button
                  key={id}
                  onClick={() => handleFoundationPage(number)}
                  type="button"
                  className="button_number"
                >
                  {number}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WhoWeHelp;
