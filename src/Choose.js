import house from "./images/house2.png"
import Headers from "./Headers";

const Choose = () => {
    return (
        <article className="choose">
            <section>
                <img src={house} alt="" />
            </section>
            <section>
                <Headers
                    h1="Why you should choose us"
                    p="Creating quality urban lifestyles, building stronger communities" />
                <div>
                    <span><i className="far fa-square-check"></i>World Class</span>
                    <span><i className="far fa-square-check"></i>Affordable</span>
                    <span><i className="far fa-square-check"></i>Trusted</span>                 <span><i className="far fa-square-check"></i>Amenities </span>
                </div>
            </section>
        </article>
    );
}

export default Choose;