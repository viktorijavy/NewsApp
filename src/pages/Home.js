import backgroundvideo from '../production ID_3944852.mp4';

const Home = () => {
    return (

        <>

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