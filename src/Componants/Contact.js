import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function Contact() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <div className="container-fluid pt-5 "style={{backgroundColor:"black"}}>
                <h1 className='text-center mb-5 fw-bold text-white '>CONTACT US</h1>
                <div className="row  text-white py-5" >
                    <div className="col-md-6 col-sm-12 text-center ">
                        
                            <h4 className='my-2'>Mobile No:</h4>
                            <p className='mb-4 fs-5'>+91-9457030089 </p>
                            <h4 className='my-2'>Email:</h4>
                            <p className='mb-4 fs-5'>ceo@vxeq.com</p>
                            <h4 className='my-2'>Address:</h4>
                            <p className='mb-4 fs-5'>421, C - 2, Orbit Plaza Crossing Republic <br /> GHAZIABAD Ghaziabad UP 201016 IN</p>
                            <h4 className='my-2'>GST NO:</h4>
                            <p className='mb-4 fs-5'>09AAGCV4082Q1ZI</p>
                            <h4 className='my-2'>PAN NO:</h4>
                            <p className='mb-4 fs-5'>AAGCV4082Q</p>
                            <h4 className='my-2'>Registration Number:</h4>
                            <p className='mb-4 fs-5'>103827</p>
                        
                    </div>

                    <div className="col-md-6 col-sm-12">

                        
                            <h5 className='text-light ps-5' >Thanks, We will contact you soon</h5>
                            <form className='px-5' action="" noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Label htmlFor="inputPassword5" className='mt-3 mb-2' style={{ fontSize: "18px" }} >Name:</Form.Label>
                                <Form.Control type="text" id="name" className='mt-2 mb-4' style={{ fontFamily: "serif" }} placeholder="Let me know your name" />

                                <Form.Label htmlFor="email" className='my-1 mb-2' style={{ fontSize: "18px" }}>Your Email:</Form.Label>
                                <Form.Control type="email" id="email" className='mt-2 mb-4' style={{ fontFamily: "serif" }} placeholder="name@gmail.com" />

                                <Form.Label htmlFor="contact" className='my-1 mb-2' style={{ fontSize: "18px" }}>Contact:</Form.Label>
                                <Form.Control type="text" id="cont" className='mt-2 mb-4' style={{ fontFamily: "serif" }} placeholder="Let me know your contact" />

                                <Form.Label htmlFor="contact" className='my-1 mb-2' style={{ fontSize: "18px" }}>Contact:</Form.Label>
                                <Form.Control as="textarea" className='mt-2 mb-4' style={{ fontFamily: "serif" }} placeholder="Leave a comment here" />

                                <center><button type="button" class="btn btn-primary my-3 px-4 ">Send Message</button></center>

                            </form>


                    </div>
                </div>


            </div>
        </>
    )
}
