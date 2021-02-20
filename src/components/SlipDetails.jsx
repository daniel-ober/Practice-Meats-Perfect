import { useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'

function SlipDetails(props){

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
            setAppearance(slipsFind.fields.appearance);
            setTaste(slipsFind.fields.taste);
            setTenderness(slipsFind.fields.tenderness);
            setComments(slipsFind.fields.comments);
          }
        }
}, [])

    return (
        <div>
          <h5>Appearance: {appearance}</h5>
          <h5>Taste: {taste}</h5>
          <h5>Tenderness: {tenderness}</h5>
          <h5>Comments: {comments}</h5>
          <button className='slip-details-button' onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default SlipDetails;