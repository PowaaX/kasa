import { Link } from "react-router-dom";

import img from "../../assets/home.webp";

import data from "../../assets/data.json";

import Banner from "../../components/banner/banner";

import Card from "../../components/card/card";

import "./home.css";

const Home = () => {
  return (
    <main id="home">
      <Banner
        src={img}
        alt="bannière Kasa"
        title="Chez vous, partout et ailleurs"
      />

      <ul>
        {data.housing.map(({ cover, title, id }) => (
          <li key={id}>
            <Link to={`/housing/${id}`}>
              <Card
                src={cover}
                alt={`Présentation de ${title}`}
                title={title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
