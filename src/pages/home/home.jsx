import { Link } from "react-router-dom";

import img from "../../assets/home.webp";

import Banner from "../../components/banner/banner";

import "./home.css";

/**
 * ? HOME
 * * Renders the Home component with a banner & a list of housing cards.
 *
 * @return {JSX.Element} The main section containing the banner & housing cards.
 */
const Home = () => {
  return (
    <main id="home">
      <Banner
        src={img}
        alt="bannière Kasa"
        title="Chez vous, partout et ailleurs"
      />
    </main>
  );
};

export default Home;
