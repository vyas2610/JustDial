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
import { data } from "../Component/data";
import { FaHandshakeSimple } from "react-icons/fa6";

const Layout = () => {
  return (
    <>
      {/* Header  */}

      <nav className="font-size border-b-2">
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

        <h5 className="py-5">
          Some of our services that will prove useful to you on a day-to-day
          basis are :
        </h5>

        <div className="flex gap-5">
          {data.map((d) => (
            <div>
              <div className="flex py-5 items-center gap-3">
                <div className="text-2xl">{d.icon}</div>
                <div>{d.title}</div>
              </div>
              <p className="text-color leading-7">{d.content}</p>
            </div>
          ))}
        </div>

        <div className="py-4 text-color">
          <p className="py-5">
            Some of the other services that can be of assistance to you for
            leisure, health and home convenience are - Pest Control, Skin Care
            Clinics, Painters, Laundry Services, Interior Designers, Mobile
            Phone Repair, Vaccination Centres, Internet Service Providers, etc.
            With an endless number of things under the sun, you can be sure this
            will be your 'One Stop Shop' to find everything and more.
          </p>
        </div>

        <div className="py-4">
          <h5>Popular Categories</h5>
        </div>

        <div className="py-4">
          <h5 className="py-4">Explore JD Collection</h5>
          <div className="flex text-color gap-2 items-center">
            <div className=""> Travel & Tourism</div>
            <div className="border-l-1 border-r-1">Beauty & Fashion</div>
            <div className=" border-r-1 p-1">Health & Fitness</div>
            <div className=" border-r-1 p-1">Food & Beverage</div>
            <div className=" border-r-1 p-1">Fianace</div>
            <div className=" border-r-1 p-1">On Demand Service</div>
            <div className=" border-r-1 p-1">Home & Living</div>
            <div className=" border-r-1 p-1">Education & Career</div>
            <div className=" border-r-1 p-1">Recreation</div>
            <div>JD Business Guide</div>
          </div>
        </div>

        <div className="py-4">
          <h5 className="py-4">Popular Cities</h5>
          <div className="flex text-color gap-2 items-center">
            <div className=""> Travel & Tourism</div>
            <div className="border-l-1 border-r-1">Beauty & Fashion</div>
            <div className=" border-r-1 p-1">Health & Fitness</div>
            <div className=" border-r-1 p-1">Food & Beverage</div>
            <div className=" border-r-1 p-1">Fianace</div>
            <div className=" border-r-1 p-1">On Demand Service</div>
            <div className=" border-r-1 p-1">Home & Living</div>
            <div className=" border-r-1 p-1">Education & Career</div>
            <div className=" border-r-1 p-1">Recreation</div>
            <div>JD Business Guide</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
