import Home from "./Home";
import MiddleSearch from "./MiddleSearch";
import How from "./How";
import Choose from "./Choose";
import Featured from "./Featured";
import Testimonials from "./Testimonials";

const Main = () => {
    window.onload = () => {
        // alert('Responsive landing page \nDeisgn by Adeola UI/UX \nDeveloped by Toyib Lawal' )
    }
    let exe = false;
    window.onscroll = () => {
        const scroll = window.scrollY
        if (scroll > 4050 && exe === false) {
            alert('Kindly follow me on Twitter by clicking on the Twitter logo below');
            exe = true
        }
    }
    window.onresize = function () {
        let width = window.screen.width;
        if (width > 768) {
            window.location.reload();
        }

    }
    return (
        <main>
            <Home />
            <MiddleSearch />
            <How />
            <Choose />
            <Featured />
            <Testimonials />
        </main>
    );
}

export default Main;