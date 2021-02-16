function Slip(props) {
    
    const { name, category, imageURL, appearance, taste, tenderness, notes } = props.review.fields;
    
    return (
        <div>
            <h3>{name}</h3>
            <h4>{category}</h4>
            <img src={imageURL}>
            <h5>{appearance}</h5>
            <h5>{taste}</h5>
            <h5>{tenderness}</h5>
            <h5>{notes}</h5>
        </div>
    )
}

export default Slip;