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
        title={"Machu Picchu"}
        subtitle={
          " Pocos lugares hay en el Perú que despiertan tanto interés como el espectáculo que representa Machu Picchu para todo el que tenga la fortuna de ir alguna vez en la vida a esta belleza de sitio. Este es uno de esos lugares que siempre debe estar incluido en cualquier lista de destinos preferidos del país andino, así que aquí tenía que estar."
        }
        />
        <Slider 
        imageSrc={travel_05}
        title={"Iquitos"}
        subtitle={
          " anta maravilla no parece ni siquiera del mundo real. Es desde este poblado desde donde se les da inicio a una buena parte de las expediciones que se llevan a cabo en los bosques vírgenes, ya sea través de la navegación del Rio Amazonas o una buena caminata por las increíbles reservas naturales de las que se compone este mágico lugar."
        }
        flipped={true}
        />

        <Section/>
        <Footer credits ={credits}/>
      
    </div>
  );
}

export default App;