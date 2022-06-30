import Grid3 from "./Grid3";
import Headers from "./Headers";


const Testimonials = () => {
    return (
        <article className="testimonials">
            <Headers
                h1="Testimonials"
                p="This is what our clients are saying"
            />
            <section className="button">
                <button type="submit">View more</button>
            </section>
            <section className="testimonialsGrid">
                <Grid3 
                name="Ibrahim Odenike"
                about="South Africa"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus saepe fuga sed dolore, exercitationem nostrum laborum itaque quis! Accusamus quae reprehenderit soluta illum aspernatur?"
                />
                <Grid3 
                name="Toyib Lawal"
                about="Nigeria"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus saepe fuga sed dolore, exercitationem nostrum laborum itaque quis! Accusamus quae reprehenderit soluta illum aspernatur?"
                />
                <Grid3 
                name="Qoreeb Abubakr"
                about="Nigeria"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus saepe fuga sed dolore, exercitationem nostrum laborum itaque quis! Accusamus quae reprehenderit soluta illum aspernatur?"
                />
            </section>
        </article>
    );
}

export default Testimonials;