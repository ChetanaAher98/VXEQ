// import React from 'react'
// import about from '../Image/about.jpg'
// import img1 from "../Image/img1.jpeg"
// import img2 from "../Image/img2.jpeg"
// import img3 from "../Image/img3.jpeg"
// import img4 from "../Image/img4.jpeg"
// import img5 from "../Image/img5.jpeg"
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function About() {
//     const MySlider = () => {
//         const settings = {
//           dots: true,
//           infinite: true,
//           speed: 500,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           autoplay: true,
//           autoplaySpeed: 2000,
//         };

// //     const settings = {

// //         dots: true,
// //         infinite: true,
// //         speed: 500,
// //         slidesToShow: 3, // Number of slides to show at once
// //         slidesToScroll: 3, // Number of slides to scroll at a time
// //         autoplay: true,
// //         autoplaySpeed: 2000, // Autoplay speed in milliseconds
// //         responsive: [
// //             {
// //                 breakpoint: 1024,
// //                 settings: {
// //                     slidesToShow: 3,
// //                     slidesToScroll: 2,
// //                     infinite: true,
// //                     dots: true,
// //                 },
// //             },
// //             // {
// //             //     breakpoint: 600,
// //             //     settings: {
// //             //         slidesToShow: 2,
// //             //         slidesToScroll: 1,
// //             //         initialSlide: 1,
// //             //     },
// //             // },
// //         ],
// //     };

//     return (
//         <>
//             <div className="container-fluid bg-dark " >
//                     <div className="row">
//                 <img src={about} alt="" style={{ opacity: "0.5", width: "100% " }} className='img-fluid' />
//                 <h1 style={{ position: 'absolute', marginTop: "20rem", textAlign:"center", zIndex: "2", fontSize: "4rem",
//                 color:"white" }} 
//                 >VXEQ INFRA FACILITIES PVT LTD</h1>
//                 </div>

//                 <div className="container mt-2">
//                     <div className="row">
//                         <h1 className='text-white fs-1 fw-bold text-center mt-5'>ABOUT</h1>
//                     <p style={{ fontSize: "30px", color: "white", textAlign: "center", marginTop:"2rem" }}>VXEQ IFPL is an IIT’ian Startup, that provide FOC mentorship,
//                         consultancy and a registered company name, office, to fresh graduates to develop innovative app, fms & home automation
//                         services</p>
//                         </div>
//                 </div>

//                 <div className="container-fluid "><h2 className='text-center fw-bold text-white '
//                   style={{fontSize:"2rem",marginBottom:"3rem",marginTop:"7rem"}}>
//                     PHOTOS</h2></div>


//                 <div className='continer mt-5'style={{display:"flex",justifyContent:"space-evenly",paddingBottom:"8rem"}} >
//                     <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
//                         <div class="carousel-inner">
//                             <div class="carousel-item active" data-bs-interval="1500">
//                                 <img src={img1} class="d-block " alt="..." style={{ height: "28rem",width:"26rem"}} />
//                             </div>
//                             <div class="carousel-item" data-bs-interval="1400">
//                                 <img src={img2} class="d-block " alt="..."style={{ height: "30rem",width:"26rem"}} />
//                             </div>
//                             <div class="carousel-item" data-bs-interval="1400">
//                                 <img src={img3} class="d-block" alt="..."style={{ height: "30rem",width:"26rem"}} />
//                             </div>
//                             <div class="carousel-item" data-bs-interval="1200">
//                                 <img src={img4} class="d-block" alt="..."style={{ height: "30rem",width:"26rem"}} />
//                             </div>
//                             <div class="carousel-item" data-bs-interval="1200">
//                                 <img src={img5} class="d-block" alt="..."style={{ height: "30rem",width:"26rem"}} />
//                             </div>
//                         </div>
//                         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
//                             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                             <span class="visually-hidden">Previous</span>
//                         </button>
//                         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
//                             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                             <span class="visually-hidden">Next</span>
//                         </button>
//                     </div>
//                 </div>
//                 </div>

//     <Slider {...settings}>
//       <div className="container-fluid">
//          <div>
//              <img src={img1} alt="" style={{height:"20rem",width:"30rem"}} />
//          </div>
//          <div>
//              <img src={img2} alt="" style={{height:"20rem",width:"30rem"}} />
//          </div>
//          <div>
//              <img src={img3} alt="" style={{height:"20rem",width:"30rem"}} />
//          </div>
//          <div>
//              <img src={img4} alt="" style={{height:"20rem",width:"30rem"}}/>
//          </div>
//          <div>
//              <img src={img5} alt="" style={{height:"20rem",width:"30rem"}} />
//          </div>
//       </div>
        
//      </Slider>

//      </> 

//  )
// }
// function App() {
//     return (
//       <div>
//         <h2>My React Slick Carousel</h2>
//         <MySlider />
//       </div>
//     );
//   }
  
//   export default App;
 

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
      <div className="container-fluid bg-dark pt-5">
        <div className="row">
          <img src={about} alt="" style={{ opacity: '0.5', width: '100%' }} className="img-fluid" />
          <h1
            style={{
              position: 'absolute',
              marginTop: '7rem',
              textAlign: 'center',
              zIndex: '2',
              fontSize: '4rem',
              color: 'white',
            }}
          >
            VXEQ INFRA FACILITIES PVT LTD
          </h1>
        </div>

        <div className="container mt-2">
          <div className="row">
            <h1 className="text-white fs-1 fw-bold text-center mt-5">ABOUT</h1>
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

        <Slider {...settings}>
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
