import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import about from '../Image/about.jpg';
import img1 from '../Image/img1.jpeg';
import img2 from '../Image/img2.jpeg';
import img3 from '../Image/img3.jpeg';
import img4 from '../Image/img4.jpeg';
import img5 from '../Image/img5.jpeg';


const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>

      <div className="container-fluid pt-5" style={{backgroundColor:"black"}}>
        <div className="row">
          <img src={about} alt="" style={{ opacity: '0.7', width: '100%' }} className="img-fluid" />
          <h1 className='px-2'
            style={{
              position: 'absolute',
              marginTop: '45px',
              textAlign: 'center',
              zIndex: '2',
              fontSize: '45px',
              color: 'white',
              fontWeight:900,
            }}
          >
            VXEQ INFRA FACILITIES PVT LTD
          </h1>
        </div>

        <div className="container mt-2">
          <div className="row">
            <h1 className="text-white fs-1 fw-bold text-center " style={{marginTop:"4rem"}}>ABOUT</h1>
            <p
              style={{
                fontSize: '30px',
                color: 'white',
                textAlign: 'center',
                marginTop: '2rem',
              }}
            >
              VXEQ IFPL is an IIT’ian Startup, that provides FOC mentorship, consultancy, and a registered company name,
              office, to fresh graduates to develop innovative app, fms & home automation services
            </p>
          </div>
        </div>

        <div className="container-fluid ">
          <h2 className="text-center fw-bold text-white " style={{ fontSize: '2rem', marginBottom: '3rem', marginTop: '7rem' }}>
            PHOTOS
          </h2>
        </div>

        <Slider {...settings} className='mx-5'>
          <div>
            <img src={img1} alt=""className='mx-5' style={{ height: '20rem', width: '30rem' }} />
          </div>
          <div>
            <img src={img2} alt="" style={{ height: '20rem', width: '30rem' }} />
          </div>
          <div>
            <img src={img3} alt="" style={{ height: '20rem', width: '30rem' }} />
          </div>
          <div>
            <img src={img4} alt="" style={{ height: '20rem', width: '30rem' }} />
          </div>
          <div>
            <img src={img5} alt="" style={{ height: '20rem', width: '30rem' }} />
          </div>
        </Slider>
      </div>

    </>
  );
};


function App() {
  return (
    <div>
      <MySlider />
    </div>
  );
}

export default App;











// import React from 'react';

// const ScrollableDiv = () => {
//   return (
//     <div style={{ height: '300px', overflowY: 'scroll' }}>
//       {/* Your content goes here */}
//       <p>This is a scrollable div.</p>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
//       {/* Add more content as needed */}
       
//       
//     </div>
//   );
// };

// export default ScrollableDiv;
