import logo from "../../assets/footer.webp";

import "./footer.css";

/**
 * ? FOOTER
 * * Renders the footer component with the provided brand name.
 *
 * @return {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo Kasa" />

      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
