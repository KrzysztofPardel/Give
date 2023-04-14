import { useState, FC, useEffect } from "react";

import {
  FoundationsOne,
  FoundationsTwo,
  FoundationsThree
} from "./Foundations";
import { OrganizationsOne, OrganizationsTwo } from "./Organizations";
import { CollectionsOne, CollectionsTwo } from "./Collections";

import "./SCSS/WhoWeHelp.scss";
import Decoration from "../../assets/Decoration.svg";

interface Foundation {
  data: any;
  id: string;
}
const WhoWeHelp: FC = () => {
  const [currentFoundationPage, setCurrentFoundationPage] = useState(1);
  const [organizationPage, setOrganizationPage] = useState(1);
  const [collectionPage, setCollectionPage] = useState(1);
  const [foundations, setFoundations] = useState(1);
  const [organization, setOrganizations] = useState(1);
  const [collections, setCollections] = useState(1);
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
            <button type="button" className="who-button">
              Foundations
            </button>
            <button type="button" className="who-button">
              Non-governmental organizations
            </button>
            <button type="button" className="who-button">
              Local collections
            </button>
          </div>
          <p className="who-text_paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            repudiandae ea fugit qui pariatur illo repellat, eveniet blanditiis
            nemo ducimus. Possimus pariatur explicabo laudantium.
          </p>
        </div>
        {/* Foundations */}
        <div className="who-foundations_container">
          {currentFoundationPage === 1 && <FoundationsOne />}
          {currentFoundationPage === 2 && <FoundationsTwo />}
          {currentFoundationPage === 3 && <FoundationsThree />}
        </div>

        <div className="who-foundations_button_number_container">
          <button
            onClick={() => handleFoundationPage(1)}
            type="button"
            className="button_number"
          >
            1
          </button>
          <button
            onClick={() => handleFoundationPage(2)}
            type="button"
            className="button_number"
          >
            2
          </button>
          <button
            onClick={() => handleFoundationPage(3)}
            type="button"
            className="button_number"
          >
            3
          </button>
        </div>

        {/* Non-governmental organizations */}

        <div className="who-non_container">
          {organizationPage === 1 && <OrganizationsOne />}
          {organizationPage === 2 && <OrganizationsTwo />}
        </div>
        <div className="who-non_button_number_container">
          <button
            onClick={() => handleOrganizationPage(1)}
            type="button"
            className="button_number"
          >
            1
          </button>
          <button
            onClick={() => handleOrganizationPage(2)}
            type="button"
            className="button_number"
          >
            2
          </button>
        </div>

        {/* Local collections */}

        <div className="who-collections_container">
          {collectionPage === 1 && <CollectionsOne />}
          {collectionPage === 2 && <CollectionsTwo />}
        </div>
        <div className="who-collections_button_number_container">
          <button
            onClick={() => handleCollectionPage(1)}
            type="button"
            className="button_number"
          >
            1
          </button>
          <button
            onClick={() => handleCollectionPage(2)}
            type="button"
            className="button_number"
          >
            2
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeHelp;
