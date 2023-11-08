import React from "react";
import "./HomePage.css";
import Banner from "../../components/Banner/Banner";
import MainContent from "../../components/Main/MainContent";
import VisionSection from "../../components/VisionSection/VisionSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import NextEvent from "../../components/NextEvent/NextEvent"
import Container from "../../components/Container/Container"
import Titulo from "../../components/Titulo/Titulo";


const HomePage = () => {
  return (
    <div>
      <MainContent>
        <Banner />

        <section className="proximos-eventos">
          <Container>
            <Titulo titleText={"Proximos Eventos"}/>
            <div className="events-box"> 
            <NextEvent title={"Evento JavaScript"} description={"Evento legal sobre javascript"} eventDate={"19/12/2023"} />
            <NextEvent title={"HTML & CSS"} description={"Evento educativo sobre HTML e CSS"} eventDate={"28/11/2023"}/>
            <NextEvent title={"React"} description={"Evento com foco de Aprendizagem de React"} eventDate={"05/01/2024"} />
            <NextEvent title={"Sql Server"} description={"Evento sobre banco de dados Sql Server"} eventDate={"10/11/2023"} />
            </div>
          </Container>
        </section>

        <VisionSection />
        <ContactSection/>
      </MainContent>
    </div>
  );
};

export default HomePage;
