import React from 'react';
class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className="col-1-review-summary">
      <label >Rating Breakdown:</label>
      <div className="col-1-review-summary-breadown-entry">

          <div className="barEntry">
          <span className="skillbar-msg">5 stars  </span>  <span className="initbar"></span>
          </div>

          <div className="barEntry" >
            <span className="skillbar-msg">4 stars  </span>  <span className="initbar"></span>
          </div>

          <div className="barEntry" >
              <span className="skillbar-msg">3 stars  </span>  <span className="initbar"></span>
        </div>

        <div className="barEntry" >
            <span className="skillbar-msg">2 stars  </span>  <span className="initbar"></span>
          </div>

          <div className="barEntry" >
              <span className="skillbar-msg">1 stars  </span>  <span className="initbar"></span>
          </div>

      </div>
    </div>
  )}
}

export default RatingBreakdown;