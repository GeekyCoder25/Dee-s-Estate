const Grid2 = (props) => {
    return (
        <section className="grid2">
            <img src={props.house} alt="img" />
            <div>
                <span>
                    <h3>{props.name}</h3>
                    <small>{props.address}</small>
                </span>
                <span>
                    <h4>{props.type}</h4>
                    <span className="price">${props.price}</span>
                </span>
            </div>
        </section>
    );
}

export default Grid2;