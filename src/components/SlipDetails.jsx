import { useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'

function SlipDetails(props){

const [created, setCreated] = useState ('');
const [appearance, setAppearance] = useState('');
const [taste, setTaste] = useState('');
const [tenderness, setTenderness] = useState('');
const [comments, setComments] = useState('');
const params = useParams();
const history = useHistory();

useEffect (() => {
    if (props.slips.length > 0 && params.id) {
        const slipsFind = props.slips.find((slip) => slip.id === params.id);
        if (slipsFind) {
            setCreated(slipsFind.fields.created);
            setAppearance(slipsFind.fields.appearance);
            setTaste(slipsFind.fields.taste);
            setTenderness(slipsFind.fields.tenderness);
            setComments(slipsFind.fields.comments);
          }
        }
}, [])

const weightedAppearance = ((appearance) * (0.015 * 100).toFixed(1))
const weightedTaste = ((taste) * (0.05 * 100).toFixed(1))
const weightedTenderness = ((tenderness) * (0.035 * 100).toFixed(1))
const weightedTotal = ((weightedAppearance + weightedTaste + weightedTenderness) * 0.1).toFixed(1)

    return (
        <div className='unique-score-detail'>
          <h2>Score Breakdown</h2>
          <h3>{weightedTotal} / 10</h3>
          <br/>
          <h4>Appearance</h4>
          <h5>Slip Score: {appearance}</h5>
          <h5>BBQ Wars Weighting: 15%</h5>
          <h5>Adjusted Weighted Score: {weightedAppearance}</h5>
          <br/>
          <br/>
          <h4>Taste</h4>
          <h5>Slip Score: {taste}</h5>
          <h5>BBQ Wars Weighting: 50%</h5>
          <h5>Adjusted Weighted Score: {weightedTaste}</h5>
          <br/>
          <h4>Tenderness</h4>
          <h5>Slip Score: {tenderness}</h5>
          <h5>BBQ Wars Weighting: 35%</h5>
          <h5>Adjusted Weighted Score: {weightedTenderness}</h5>
          <br/>
          <h5>Comments: <h4>{comments}</h4></h5>
          <br/>
          <h6>Slip Creation Date: {created}</h6>
          <button className='details-back-button' onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default SlipDetails;