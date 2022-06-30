const Grid3 = (props) => {
    return ( 
        <section className="grid3">
            <h2>{props.name}</h2>
            <h4>{props.about}</h4>
            <p>{props.text}</p>
        </section>
     );
}
 
export default Grid3;