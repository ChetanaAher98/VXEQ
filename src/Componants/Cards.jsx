import React from 'react';
import { Card, CardDeck, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mentor from '../Image/abouts.jpg'; 
import consultancy from '../Image/consultancy.jpeg';
import company from '../Image/company.jpeg';
import app from '../Image/app.jpeg';
import home from '../Image/home.jpeg';
import './Services.css';

export default function Cards() {
    const array = [
        {
            img: mentor,
            info: "Mentorship Service",
            text: "We provide mentorship for aspiring professionals.",
        },
        {
            img: consultancy,
            info: "Consultancy Service",
            text: "We provide consultancy for aspiring professionals.",
        },
        {
            img: company,
            info: "Company Service",
            text: "We provide company services for aspiring professionals.",
        },
        {
            img: app,
            info: "App Service",
            text: "We provide app services for aspiring professionals.",
        },
        {
            img: home,
            info: "Home Service",
            text: "We provide home services for aspiring professionals.",
        },
    ];

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                {array.slice(0, 3).map((card, index) => (
                    <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={card.img} />
                            <Card.Body>
                                <Card.Title>{card.info}</Card.Title>
                                <Card.Text>{card.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className="justify-content-center">
                {array.slice(3).map((card, index) => (
                    <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={card.img} />
                            <Card.Body>
                                <Card.Title>{card.info}</Card.Title>
                                <Card.Text>{card.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
