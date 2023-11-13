import React, { useState } from "react";
import Title from "../../components/Titulo/Titulo";
import "./TipoEventosPage.css";
import MainContent from "../../components/Main/MainContent";
import Container from "../../components/Container/Container";
import ImageIlustrator from "../../components/ImageIlustrator/ImageIlustrator";
import tipoEventoImage from "../../assets/images/tipo-evento.svg";
import FormComponente from "../../components/FormComponents/FormComponents"

const TipoEventos = () => {
  const [frmEdit, setFrmEdit] = useState(false)

  function handleSubmit() {

  }
  function handleUpdate() {

  }
  
  return (
    <>
      <MainContent>
        <section className="cadastro-evento-section">
          <Container>
            <div className="cadastro-evento__box">
              <Title titleText={"Cadastro Tipo de Eventos"} />

              <ImageIlustrator imageRender={tipoEventoImage} />

              <form 
              className="ftipo-evento"
              onSubmit={frmEdit ? handleUpdate : handleSubmit}
              >
                {
                  !frmEdit ? (<p>Tela de cadastro</p>) : (<p>Tela de Edicao</p>)
                }
              </form>
            </div>
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default TipoEventos;
