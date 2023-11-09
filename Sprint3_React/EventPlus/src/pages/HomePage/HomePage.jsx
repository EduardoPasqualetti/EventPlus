import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import Banner from "../../components/Banner/Banner";
import MainContent from "../../components/Main/MainContent";
import VisionSection from "../../components/VisionSection/VisionSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import NextEvent from "../../components/NextEvent/NextEvent";
import Container from "../../components/Container/Container";
import Titulo from "../../components/Titulo/Titulo";

const HomePage = () => {
  const [nextEvents, setNextEvents] = useState([]);
  const urlLocal = "https://localhost:7118/api";
  useEffect(() => {
    async function getNextEvents() {
      try {
        const promisse = await axios.get(`${urlLocal}/Evento/ListarProximos`);
        const dados = await promisse.data;

        setNextEvents(dados);
      } catch (error) {
        alert("Deu ruim na API");
      }
    }
    getNextEvents();
  }, []);

  return (
    <div>
      <MainContent>
        <Banner />

        <section className="proximos-eventos">
          <Container>
            <Titulo titleText={"Proximos Eventos"} />
            <div className="events-box">
              {nextEvents.map((e) => {
                return (
                  <NextEvent
                    key={e.idEvento}
                    title={e.nomeEvento}
                    description={e.descricao}
                    eventDate={e.dataEvento}
                    idEvento={e.idEvento}
                  />
                );
              })}
            </div>
          </Container>
        </section>

        <VisionSection />
        <ContactSection />
      </MainContent>
    </div>
  );
};

export default HomePage;
