import './App.css';
import travel_01 from './assets/Lima-Peru-ST.jpg';
import travel_02 from './assets/arequipa.jpg';
import travel_03 from './assets/Lago Titicaca.jpg';
import travel_04 from './assets/peru-5761765_960_720.jpg';
import travel_05 from './assets/amazonas-peru.webp';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';


function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#trips", title: "Trips" },
    { url: "#contacto", title: "Contacto" },
  ];

  const credits = {
    year: new Date().getFullYear()
  };
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_01}/>
      <h2 id="trips" className="subtitle">TRIPS</h2>
      <Slider 
        imageSrc={travel_02}
        title={"Arequipa-Perú"}
        subtitle={
          "Esta hermosísima ciudad, también conocida como la Ciudad Blanca, ha sido otro de los tantos puntos preferidos por los turistas debido a la arquitectura colonial que ha conservado a pesar del modernismo en el que ha entrado el país en los últimos años"
        }
      />
      <Slider 
        imageSrc={travel_03}
        title={"El Lago Titicaca"}
        subtitle={
          " Este es uno de los lagos navegables más altos del planeta, así que no puede dejarse por fuera ir al a la nación andina. Lo que más ha atraído la atención de los turistas hacia él han sido sus inmensas riquezas naturales y las 3 preciosas islas de las que se compone"
        }
        flipped={true}
        />
      <Slider 
        imageSrc={travel_04}
        title={"El Lago Titicaca"}
        subtitle={
          " Este es uno de los lagos navegables más altos del planeta, así que no puede dejarse por fuera ir al a la nación andina. Lo que más ha atraído la atención de los turistas hacia él han sido sus inmensas riquezas naturales y las 3 preciosas islas de las que se compone"
        }
        />
        <Slider 
        imageSrc={travel_05}
        title={"El Lago Titicaca"}
        subtitle={
          " Este es uno de los lagos navegables más altos del planeta, así que no puede dejarse por fuera ir al a la nación andina. Lo que más ha atraído la atención de los turistas hacia él han sido sus inmensas riquezas naturales y las 3 preciosas islas de las que se compone"
        }
        flipped={true}
        />

        <Section/>
        <Footer credits ={credits}/>
      
    </div>
  );
}

export default App;