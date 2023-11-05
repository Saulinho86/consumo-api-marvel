import { useEffect, useState } from "react";
import Characters from "./components/modules/Characters";
import Hero from "./components/modules/Hero";

function App() {
  const heroData = {
    title: 'Personajes de Marvel',
    image: 'https://www.seas.es/blog/wp-content/uploads/2014/09/marvel.jpg'
  };

  const [marvelData, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=8d80e859d34dcbe4857a62d0dda89f20&hash=9e5c7000def5457564f6c1ec2ae38013');
      const marvelData = await response.json();
      setData(marvelData);
    };
    fetchData();
  }, []);

  return (
    <>
      <Hero data={heroData} />
      <Characters data={marvelData.data?.results} />
    </>
  );
}

export default App;