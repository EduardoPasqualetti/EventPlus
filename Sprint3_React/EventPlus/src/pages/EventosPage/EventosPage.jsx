import React, { useState } from "react";
import Titulo from "../../components/Titulo/Titulo";
import "./EventosPage.css";
import eventoImage from "../../assets/images/evento.svg";
import MainContent from "../../components/Main/MainContent";
import Container from "../../components/Container/Container";
import ImageIlustrator from "../../components/ImageIlustrator/ImageIlustrator";
import {Input, Button, Select} from "../../components/FormComponents/FormComponents";
import api, { eventsResource } from "../../Services/Service";
import Notification from "../../components/Notification/Notification";

const EventosPage = () => {
  const [notifyUser, setNotifyUser] = useState();
  const [frmEdit, setFrmEdit] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataEvento, setDataEvento] = useState("");

  return (
    <div>
      {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}
      <MainContent>
        <section>
          <Container>
            <div>
              <Titulo titleText={"Eventos Page"} className="margem_acima" />
              <ImageIlustrator imageRender={eventoImage} />
              <form>
                {!frmEdit ? (
                  <>
                  </>
                ) : (
                  <></>
                )}
              </form>
            </div>
          </Container>
        </section>
        <section>
          <Container></Container>
        </section>
      </MainContent>
    </div>
  );
};

export default EventosPage;
