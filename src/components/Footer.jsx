import { Container, Row, Col } from "react-bootstrap"

import MailchimpForm from './MailchipForm'
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.png'
import navIcon3 from '../assets/img/nav-icon3.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className='align-items-center'>
                    <MailchimpForm />
                    <Col sm={6}>
                        <img classsname='logo-img' src={logo} alt='logo' />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/ankush-g-0aab86134/" target='_blank' rel='noreferrer'><img src={navIcon1} alt="linkedin-logo" /></a>
                            <a href="https://github.com/AN01KU" target='_blank' rel='noreferrer'><img src={navIcon2} alt="github-logo" /></a>
                            <a href="https://www.instagram.com/an01ku/" target='_blank' rel='noreferrer'><img src={navIcon3} alt="insta-logo" /></a>
                        </div>
                        <p>CopyRight 2022.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer