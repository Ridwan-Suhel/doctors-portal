import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../../assets/images/footer.png";
const Footer = () => {
  const newDate = new Date();
  const thisYear = newDate.getFullYear();

  return (
    <footer
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        <div className="footer px-4 py-10 text-accent">
          <div>
            <span className="footer-title">Services</span>
            <Link to="" className="link link-hover">
              Branding
            </Link>
            <Link to="" className="link link-hover">
              Design
            </Link>
            <Link to="" className="link link-hover">
              Marketing
            </Link>
            <Link to="" className="link link-hover">
              Advertisement
            </Link>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link to="" className="link link-hover">
              About us
            </Link>
            <Link to="" className="link link-hover">
              Contact
            </Link>
            <Link to="" className="link link-hover">
              Jobs
            </Link>
            <Link to="" className="link link-hover">
              Press kit
            </Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link to="" className="link link-hover">
              Terms of use
            </Link>
            <Link to="" className="link link-hover">
              Privacy policy
            </Link>
            <Link to="" className="link link-hover">
              Cookie policy
            </Link>
          </div>
        </div>
        <div className="text-center py-6">
          <p>Copyright © {thisYear} - All right reserved by Ridwan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
