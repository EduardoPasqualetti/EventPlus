import React from "react";
import Title from "../../components/Titulo/Titulo";
import "./TipoEventosPage.css";
import MainContent from "../../components/Main/MainContent";
import Container from "../../components/Container/Container";
import ImageIlustrator from "../../components/ImageIlustrator/ImageIlustrator";

const TipoEventos = () => {
  return (
    <>
      <MainContent>
        <section className="cadastro-evento-section">
          <Container>
            <div className="cadastro-evento__box">

                <Title titleText={"Cadastro Tipo de Eventos"} />

                <ImageIlustrator/>

                <form className="ftipo-evento">
                    <p>Formulario aqui</p>
                </form>
            </div>
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default TipoEventos;
