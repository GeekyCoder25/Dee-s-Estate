import Grid from "./Grid";
import img from "./images/address-mark.png";
import img2 from "./images/make-payment.png";
import img3 from "./images/official-image.png";
import Headers from "./Headers";
const How = () => {
    return (
        <article className="how">
            <section className="howSectionOne">
                <Headers
                    h1="How it works"
                    p="This is how our product works"
                />
            </section>
            <section className="howSectionTwo">
                <Grid
                    img={img}
                    header="Find Home"
                    text="Our properties are located at prime areas whereby there won't be problem with transportation." />
                <Grid
                    img={img2}
                    header="Make Payments"
                    text="Our estates comes with good network, portable water, 24 hrs light and round the clock security." />
                <Grid
                    img={img3}
                    header="Make it Official"
                    text="We have been in business for over 32 years, for client outside the country you can trust us to deliver well." />
            </section>
        </article>
    );
}

export default How;