import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container fluid className="px-5">
        <Row>
          {/* Logo & About */}
          <Col md={4} className="mb-3">
            <h4 className="fw-bold">StudentHub</h4>
            <p>
              StudentHub helps schools manage student information, track
              performance, and stay organized — all in one easy-to-use
              platform.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#students" className="text-light text-decoration-none">Students</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={4}>
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email: support@studenthub.com</p>
            <p>Phone: +1 234 567 890</p>
          </Col>
        </Row>

        <hr className="border-secondary" />

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <small>© {new Date().getFullYear()} StudentHub. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer