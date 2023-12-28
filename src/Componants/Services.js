import React from 'react';
import Card from 'react-bootstrap/Card';
import mentor from '../Image/abouts.jpg'; 
import consultancy from '../Image/consultancy.jpeg';
import company from '../Image/company.jpeg';
import app from '../Image/app.jpeg';
import home from '../Image/home.jpeg';
import './Services.css'

export default function Services() {
    const array = [
        {
            img: mentor,
            info: "Mentorship Service",
            text:"We provide mentorship for aspiring professionals.",

        },
        {
            img: consultancy,
            info: "Consultancy Service",
            text:"We provide mentorship for aspiring professionals.",

            
        },
        {
            img: company,
            info: "Company Service",
            text:"We provide mentorship for aspiring professionals.",

        },
        {
            img: app,
            info: "App Service",
            text:"We provide mentorship for aspiring professionals.",

        },
        {
            img: home,
            info: "Home Service",
            text:"We provide mentorship for aspiring professionals.",

        }
    ];

    return (
        <>
            <div className="container-fluid "style={{backgroundColor:"black"}}>
                <div className="container">
                    <h1 className='text-center fw-bold py-5 pt-5 text-white'>OUR SERVICES</h1>
                    <div className="row justify-content-center">
                        {array.map((item, index) => { 
                            const { img, info } = item; 
                            return (
                                <div className="col-md-4  col-sm-12 mb-5 pt-5" key={index}>
                                    <Card style={{  height: "20rem" }} className='shadow card-with-hover'>
                                        <Card.Img variant="top" src={item.img} style={{ height: '50%', objectFit: 'cover' }} />
                                        <Card.Body className='text-center fw-bold'>
                                            <Card.Title>{item.info}</Card.Title>
                                            <Card.Text className='mt-3 text-dark'>
                                                {item.text}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}


// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import mentor from '../Image/abouts.jpg'; 
// import consultancy from '../Image/consultancy.jpeg';
// import company from '../Image/company.jpeg';
// import app from '../Image/app.jpeg';
// import home from '../Image/home.jpeg';
// import './Services.css'

// export default function Services() {
//     const array = [
//         {
//             img: mentor,
//             info: "Mentorship Service" 
//         },
//         {
//             img: consultancy,
//             info: "Consultancy Service"
//         },
//         {
//             img: company,
//             info: "Company Service"
//         },
//         {
//             img: app,
//             info: "App Service"
//         },
//         {
//             img: home,
//             info: "Home Service"
//         }
//     ];

//     return (
//         <div className="container-fluid bg-dark">
//             <div className="container">
//                 <h1 className='text-center fw-bold py-5 text-white'>OUR SERVICES</h1>
//                 <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
//                     {array.map((item, index) => { 
//                         const { img, info } = item; 
//                         return (
//                             <div className="col mb-4" key={index}>
//                                 <Card style={{ width: '100%' }} className='shadow card-with-hover'>
//                                     <Card.Img variant="top" src={img} style={{ height: '50%', objectFit: 'cover' }} />
//                                     <Card.Body className='text-center'>
//                                         <Card.Title>{info}</Card.Title>
//                                         <Card.Text>
//                                             Some quick example text to build on the card title and make up the
//                                             bulk of the card's content.
//                                         </Card.Text>
//                                     </Card.Body>
//                                 </Card>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// }
