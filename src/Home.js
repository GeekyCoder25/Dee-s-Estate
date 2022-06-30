import house from "./images/house1.png"
import audio from "./text sample.mp3"

const Home = () => {
    function pressPlay() {
        const audio = document.querySelector('.audio')
        const play = document.querySelector('.fa-circle-play')
        const pause = document.querySelector('.fa-circle-pause')
        audio.play();
        play.style.display = "none";
        pause.style.display = "block";
        alert('The Audio is now playing!')
    }
    function pressPause() {
        const play = document.querySelector('.fa-circle-play')
        const pause = document.querySelector('.fa-circle-pause')
        const audio = document.querySelector('.audio')
        audio.pause()
        play.style.display = "block";
        pause.style.display = "none";
    }
    return (
        <article className="articleOne">
            <section className="sectionOne">
                <h1>Helping you find the property of your dreams.</h1>
                <p>Creating quality urban lifestyles, building stronger communities</p>
                <div>
                    <button>Learn More</button><i className="fas fa-circle-play fa-2x" onClick={pressPlay}></i>
                    <audio src={audio} className="audio"></audio><i className="fas fa-circle-pause fa-2x" onClick={pressPause}></i>
                </div>
            </section>
            <section className="sectionTwo">
                <img src={house} alt="house" />
                <div></div>
            </section>
        </article>
    );
}

export default Home;