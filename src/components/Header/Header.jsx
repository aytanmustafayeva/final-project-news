import React from 'react'
import './Header.css'
import Logo from './Logo/Logo'
import { Container, Row, Col } from 'reactstrap'
import Navigation from './Navigation/Navigation'
const Header = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">
                        <Logo />
                    </Col>
                    <Col lg="8">
                        <Navigation />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header