const Footer = () => {
    const pressProperty = () => {
        const property = document.querySelector('.propertylinks')
        if (property.style.display !== "block") {
            property.style.display = "block";
        }
        else {
            property.style.display = "none";
        }
    }
    const pressAbout = () => {
        const property = document.querySelector('.aboutlinks')
        if (property.style.display !== "block") {
            property.style.display = "block"
        }
        else {
            property.style.display = "none";
        }
    }
    const pressResources = () => {
        const property = document.querySelector('.resourceslinks')
        if (property.style.display !== "block") {
            property.style.display = "block"
        }
        else {
            property.style.display = "none";
        }
    }
    const link = '#'
    const blank = '_blank'
    return (
        <footer>
            <section className="about">
                <h2>Dee's Estate</h2>
                <div>Solution for easy and flexible house hunting. You can trust us anywhere through this platform</div>
            </section>
            <section>
                <h1 className="property" onClick={pressProperty}>Property <i className="fas fa-angle-down"></i></h1>
                <div className="propertylinks">
                    <a href={link}>Learning Modules</a>
                    <a href={link}>Partnership</a>
                    <a href={link}>Watch demo</a>
                    <a href={link}>Event</a>
                </div>
            </section>
            <section>
                <h1 className="about" onClick={pressAbout}>About <i className="fas fa-angle-down"></i></h1>
                <div className="aboutlinks">
                    <a href={link}>Our Company</a>
                    <a href={link}>Career</a>
                    <a href={link}>Investors Relations</a>
                    <a href={link}>Social Impact</a>
                </div>
            </section>
            <section>
                <h1 className="resources" onClick={pressResources}>Resources <i className="fas fa-angle-down"></i></h1>
                <div className="resourceslinks">
                    <a href={link}>Contact</a>
                    <a href={link}>Give feedback</a>
                    <a href={link}>System status</a>
                    <a href={link}>Privacy Policy</a>
                </div>
            </section>
            <small><a href="https://twitter.com/_GeekyCoder_" target={blank}><i className="fab fa-twitter"></i> &copy; Geeky Coder, All Rights Reserved, Privacy Policy</a></small>
        </footer>
    );
}

export default Footer;