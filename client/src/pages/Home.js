import backgroundvideo from '../production ID_3944852.mp4';

const Home = () => {


    return (

        <>
       
        <div className='video-wrapper'>
            <video className='video1' autoPlay="autoplay" loop="loop" muted>
                <source
                    src={backgroundvideo}
                    type="video/mp4"
                />

            </video>
            </div>
        </>
    )
}

export default Home