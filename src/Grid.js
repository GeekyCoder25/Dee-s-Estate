const Grid = (props) => {
    return (
        <section className="grid">
            <img src={props.img} alt="img" />
            <h1>{props.header}</h1>
            <p>{props.text}</p>
        </section>);
}

export default Grid;