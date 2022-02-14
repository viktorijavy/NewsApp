import backgroundvideo from '../production ID_3944852.mp4';
import Navbar from '../components/Navbar';

const Home = () => {


    return (

        <>
        <Navbar/>

            <video autoPlay="autoplay" loop="loop" muted>
                <source
                    src={backgroundvideo}
                    type="video/mp4"
                />

            </video>
        </>
    )
}

export default Home