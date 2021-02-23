import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function SlipDetails(props) {
  const [team, setTeam] = useState("");
  const [category, setCategory] = useState("");
  const [appearance, setAppearance] = useState("");
  const [taste, setTaste] = useState("");
  const [tenderness, setTenderness] = useState("");
  const [comments, setComments] = useState("");
  const [created, setCreated] = useState("");
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (props.slips.length > 0 && params.id) {
      const slipsFind = props.slips.find((slip) => slip.id === params.id);
      if (slipsFind) {
        setTeam(slipsFind.fields.team);
        setCategory(slipsFind.fields.category);
        setAppearance(slipsFind.fields.appearance);
        setTaste(slipsFind.fields.taste);
        setTenderness(slipsFind.fields.tenderness);
        setComments(slipsFind.fields.comments);
        setCreated(slipsFind.fields.created);
      }
    }
  }, []);

  const weightedAppearance = appearance * (0.15).toFixed(2);
  const weightedTaste = taste * (0.5).toFixed(2);
  const weightedTenderness = tenderness * (0.35).toFixed(2);
  const weightedTotal = (
    weightedAppearance +
    weightedTaste +
    weightedTenderness
  ).toFixed(2);

  return (
    <div className="unique-score-detail">
      <h2 className="score-breakdown-header">Score Breakdown</h2>
      <h5 className="scoring-categories">{team}</h5>
      <h5 className="scoring-categories">{category}</h5>
      <br />
      <h2>{weightedTotal} / 10</h2>
      <h4 className="scoring-categories">Appearance</h4>
      <h5>Slip Score: {appearance}</h5>
      <h5>BBQ Wars Weighting: 15%</h5>
      <h5>Adjusted Weighted Score: {weightedAppearance}</h5>
      <br />
      <h4 className="scoring-categories">Taste</h4>
      <h5>Slip Score: {taste}</h5>
      <h5>BBQ Wars Weighting: 50%</h5>
      <h5>Adjusted Weighted Score: {weightedTaste}</h5>
      <br />
      <h4 className="scoring-categories">Tenderness</h4>
      <h5>Slip Score: {tenderness}</h5>
      <h5>BBQ Wars Weighting: 35%</h5>
      <h5>Adjusted Weighted Score: {weightedTenderness}</h5>
      <br />
      <h4>
        Comments: <h5>{comments}</h5>
      </h4>
      <h6 className="creation-date">Slip Creation Date: {created}</h6>
      <br />
      <button className="details-back-button" onClick={() => history.goBack()}>
        Back
      </button>
    </div>
  );
}

export default SlipDetails;
