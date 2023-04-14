import { useState, FC, useEffect } from "react";

import { Fetch, FetchTwo, FetchThree } from "./FetchedData";

import "./SCSS/WhoWeHelp.scss";
import Decoration from "../../assets/Decoration.svg";

interface Foundation {
  data: any;
  id: string;
}
const WhoWeHelp: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleSwitchPage = (page: number) => {
    setCurrentPage(page);
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
          {currentPage === 1 && <Fetch />}
          {currentPage === 2 && <FetchTwo />}
          {currentPage === 3 && <FetchThree />}
        </div>

        <div className="who-foundations_button_number_container">
          <button
            onClick={() => handleSwitchPage(1)}
            type="button"
            className="button_number"
          >
            1
          </button>
          <button
            onClick={() => handleSwitchPage(2)}
            type="button"
            className="button_number"
          >
            2
          </button>
          <button
            onClick={() => handleSwitchPage(3)}
            type="button"
            className="button_number"
          >
            3
          </button>
        </div>

        {/* Non-governmental organizations */}

        {/* <div className="who-non_container">
          <div className="non-text_container">
            <div className="non-header&paragraph_container">
              <h1 className="non-header">Organization:"Better with others"</h1>
              <p className="non-paragraph">
                {" "}
                Goal & Mission: Helping those who are going through a hard
                season of life.
              </p>
            </div>
            <span className="non-span">All kinds and pieces of clothing</span>
          </div>
          <div className="line" />
          <div className="non-text_container">
            <div className="non-header&paragraph_container">
              <h1 className="non-header">Organization:"Not on your own"</h1>
              <p className="non-paragraph">
                {" "}
                Goal & Mission: Helping those who are going through a hard
                season of life.
              </p>
            </div>
            <span className="non-span">devices,AGD,toys</span>
          </div>
          <div className="line" />
          <div className="non-text_container">
            <div className="non-header&paragraph_container">
              <h1 className="non-header">Organization:"Rescue"</h1>
              <p className="non-paragraph">
                {" "}
                Goal & Mission: Helping those who are going through a hard
                season of life.
              </p>
            </div>
            <span className="non-span">Short and long term food products</span>
          </div>
        </div>
        <div className="who-non_button_number_container">
          <button type="button" className="button_number">
            1
          </button>
          <button type="button" className="button_number">
            2
          </button>
          <button type="button" className="button_number">
            3
          </button>
        </div> */}

        {/* Local collections */}

        {/* <div className="who-collections_container">
          <div className="collections-text_container">
            <div className="collections-header&paragraph_container">
              <h1 className="collections-header">
                Zbiórka:"Package from Mokotów"
              </h1>
              <p className="collections-paragraph">
                {" "}
                Goal & Mission: Helping those who are going through a hard
                season of life.
              </p>
            </div>
            <span className="collections-span">
              clothes,food,AGD, furnitures,toys
            </span>
          </div>
          <div className="line" />
          <div className="collections-text_container">
            <div className="collections-header&paragraph_container">
              <h1 className="collections-header">Zbiórka:"League of Prague"</h1>
              <p className="collections-paragraph">
                {" "}
                Goal & Mission: Helping those who are going through a hard
                season of life.
              </p>
            </div>
            <span className="collections-span">
              clothes,food,AGD, furnitures,toys
            </span>
          </div>
          <div className="line" />
          <div className="collections-text_container">
            <div className="collections-header&paragraph_container">
              <h1 className="collections-header">Zbiórka:"Helping Teofilów"</h1>
              <p className="collections-paragraph">
                {" "}
                Goal & Mission: Helping those who are going through a hard
                season of life.
              </p>
            </div>
            <span className="collections-span">
              clothes,food,AGD, furnitures,toys
            </span>
          </div>
        </div> */}
        {/* <div className="who-collections_button_number_container">
          <button type="button" className="button_number">
            1
          </button>
          <button type="button" className="button_number">
            2
          </button>
          <button type="button" className="button_number">
            3
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default WhoWeHelp;
