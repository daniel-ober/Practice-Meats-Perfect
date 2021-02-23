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
          <h2>Overall: {weightedTotal} / 10</h2>
          <h5>Appearance (BBQ Wars uses a weight score of 15% for Appearance)<h4>{appearance} ({weightedAppearance}% of weighted total)</h4></h5>
          <h5>Taste (BBQ Wars uses a weight score of 50% for Taste)<h4>{taste} ({weightedTaste}% of weighted total)</h4></h5>
          <h5>Tenderness (BBQ Wars uses a weight score of 35% for Tenderness)<h4>{tenderness} ({weightedTenderness}% of weighted total)</h4></h5>
          <h5>Comments: <h4>{comments}</h4></h5>
          <h5>Slip Audit Creation Date: {created}</h5>
          <button className='details-back-button' onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default SlipDetails;