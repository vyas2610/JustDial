import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import logo from "../images/jdlogosvg.svg";
import { Bell, Megaphone } from "react-bootstrap-icons";

const Layout = () => {
  return (
    <>
      {/* Header  */}
      {/* <Navbar expand="lg" className="bg-body-tertiary container ">
        <Container className="py-2">
          <Navbar.Brand href="#">
            <img src={logo} width="100" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="En" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">We are Hiring</Nav.Link>
              <Nav.Link href="#action2">
                <Megaphone></Megaphone> Investor Relations
              </Nav.Link>
              <Nav.Link href="#action3">Advertise</Nav.Link>
              <Nav.Link href="#action4">Free Listing</Nav.Link>
              <Nav.Link href="#action5">
                <Bell></Bell>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="primary">Login / Sing up</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <nav className="">
        <div className="container mx-auto bg-white">
          <div className="flex p-5 items-center">
            <Link>
              <img src={logo} width="100" loading="lazy" />
            </Link>
            <ul className="lg:flex ms-auto gap-3 items-center">
              <li className="py-1">
                <Link className="hover:bg-gray-300 p-2 rounded">Home</Link>
              </li>
              <li className="py-1">
                <Link className="hover:bg-gray-300 p-2 rounded">
                  We're Hiring
                </Link>
              </li>
              <li className="py-1">
                <Link className="flex items-center hover:bg-gray-300 p-2 rounded gap-1">
                  <span>
                    <Megaphone />
                  </span>
                  <div className="">Investor Relations</div>
                </Link>
              </li>
              <li className="py-1">
                <Link className="hover:bg-gray-300 p-2 rounded">Advertise</Link>
              </li>
              <li className="py-1">
                <Link className="hover:bg-gray-300 p-2 rounded">
                  Free Listing
                </Link>
              </li>

              <li className="flex items-center bg-blue-700 px-2 py-1 text-white rounded gap-1">
                <span>
                  <Bell />
                </span>
                <Link>Login / Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

      {/* footer */}

      <div className="container bg-white mx-auto px-5 py-5">
        <h5>
          One-Stop for All Local Businesses, Services, & Stores Nearby Across
          India
        </h5>

        <p className="py-4 text-color">
          Welcome to Justdial, your 'one stop shop' where you are assisted with
          day-to-day and exclusive planning and purchasing activities. We take
          pride in our iconic customer support number, 8888888888 and the fact
          that we own a strong hold on local business information pan India.
        </p>

        <p className="py-4 text-color">
          Our service extends from providing address and contact details of
          business establishments around the country, to making orders and
          reservations for leisure, medical, financial, travel and domestic
          purposes. We enlist business information across varied sectors like
          Hotels, Restaurants, Auto Care, Home Decor, Personal and Pet Care,
          Fitness, Insurance, Real Estate, Sports, Schools, etc. from all over
          the country. Holding information right from major cities like Mumbai,
          Delhi, Bangalore, Hyderabad, Chennai, Ahmedabad and Pune our reach
          stretches out to other smaller cities across the country too.
        </p>
        <p className="py-4 text-color">
          Our 'Free Listing' feature gives a platform to showcase varied
          specialities. We then furnish you with the information via phone, SMS,
          web, App and WAP as well as, create a space for you to share your
          experiences through our 'Rate & Review' feature. Through the 'Best
          Deals', 'Last Minute Deals' and 'Live Quotes', we make sure that you
          are offered the best bargains in the market
        </p>

        <h5>
          Some of our services that will prove useful to you on a day-to-day
          basis are :
        </h5>
      </div>
    </>
  );
};

export default Layout;
