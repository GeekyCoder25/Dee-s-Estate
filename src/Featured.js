import Headers from "./Headers";
import Grid2 from "./Grid2";
import img3 from "./images/house3.jpg"
import img2 from "./images/house2.png"
import img1 from "./images/house1.png"
const Featured = () => {
    return (
        <article className="featured">
            <Headers
                h1="Our Featured Properties"
                p="One of our biggest product to be featured and that has sold out the most"
            />
            <section className="button">
                <button type="submit">View more</button>
            </section>
            <section className="featuredGrid">
                <Grid2 
                house={img3}
                name="The Palace"
                type="Flat"
                address="Lekki, Phase 2"
                price="2,000"
                />
                <Grid2 
                house={img2}
                name="IVY RORY"
                type="Duplex"
                address="Surulere"
                price="2,500"
                />
                <Grid2 
                house={img1}
                name="REXONA"
                type="Duplex"
                address="Mandate Estate"
                price="4,000"
                />
            </section>
        </article>
    );
}

export default Featured;