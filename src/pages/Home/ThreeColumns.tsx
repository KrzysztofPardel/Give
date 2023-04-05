import "./SCSS/ThreeColumns.scss";

const ThreeColumns = () => {
  return (
    <div id="start" className="three-background">
      <div className="three-container">
        <div className="three-columns-container">
          <div className="three-single_column">
            <div className="three-text-number">10</div>
            <h1 className="three-text-header">Bags donated recently</h1>
            <p className="three-text-paragraph">
              Thanks to your generous donations we were able to distribute 10
              large bags full of previously enjoyed things to those who would
              not be able to afford themselves. We wish you could see their joy!
            </p>
          </div>
          <div className="three-single_column">
            <div className="three-text-number">5</div>
            <h1 className="three-text-header">Organizations supported</h1>

            <p className="three-text-paragraph">
              We are a channel through which many goodies flow to organizations
              which have direct contact with the needy families or single
              people. We are privileged to partner with those who have a burden
              for helping.
            </p>
          </div>
          <div className="three-single_column">
            <div className="three-text-number">7</div>
            <h1 className="three-text-header">Collections organized</h1>

            <p className="three-text-paragraph">
              People just like you step up and organize collections which are
              supervised by our organization, to make sure all items are well
              prepared for transportation and later distribution. Why not try
              yourself?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumns;
