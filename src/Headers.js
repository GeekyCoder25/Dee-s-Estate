const Headers = (props) => {
    return (
        <section className="headers">
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
        </section>
    );
}

export default Headers;