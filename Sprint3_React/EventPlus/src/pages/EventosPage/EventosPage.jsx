import React, { useEffect, useState } from "react";
import Titulo from "../../components/Titulo/Titulo";
import "./EventosPage.css";
import eventoImage from "../../assets/images/evento.svg";
import MainContent from "../../components/Main/MainContent";
import Container from "../../components/Container/Container";
import ImageIlustrator from "../../components/ImageIlustrator/ImageIlustrator";
import {
  Input,
  Button,
  Select,
} from "../../components/FormComponents/FormComponents";
import api, {
  eventsResource,
  eventsTypeResource,
} from "../../Services/Service";
import Notification from "../../components/Notification/Notification";
import Table from "./TableE/TableE";

const EventosPage = () => {
  const [notifyUser, setNotifyUser] = useState();
  const [frmEdit, setFrmEdit] = useState(false);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [tipoEventos, setTipoEventos] = useState([]);
  const [eventos,setEventos] = useState([])

  useEffect(() => {
    async function loadEventsType() {
      try {
        const retorno = await api.get(eventsResource);
        console.log(retorno);
        setEventos(retorno.data);
      } catch (error) {
        console.log("erro na api");
        console.log(error);
      }
    }
    loadEventsType();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await api.post(eventsResource, {
        nomeEvento:nome,
        dataEvento:data,
        descricao:descricao,
        
      });


      const buscaEventos = await api.get(eventsResource);
      setEventos(buscaEventos.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function handleUpdate() {}

  
  async function handleDelete(idEvento) {
    try {
      const promisse = await api.delete(
        `${eventsResource}/${idEvento}`
      );

      if (promisse.status === 204) {
        const buscaEventos = await api.get(eventsTypeResource);

        setTipoEventos(buscaEventos.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function showUpdateForm() {}

  // async function dePara(tipoEventos) {
  //   const arrOptions = [];

  //   tipoEventos.forEach((ev) => {
  //     arrOptions.push({ value: ev.idTipoEvento, text: ev.titulo });
  //   });

  //   return arrOptions;
  // }

  return (
    <div>
      {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}
      <MainContent>
        <section className="cadastro-evento-section">
          <Container>
            <div className="cadastro-evento__box">
              <Titulo titleText={"Eventos Page"} className="margem_acima" />
              <ImageIlustrator imageRender={eventoImage} />
              <form
                className="ftipo-evento"
                onSubmit={frmEdit ? handleUpdate : handleSubmit}
              >
                {!frmEdit ? (
                  <>
                    <Input
                      id="Nome"
                      placeholder="Nome"
                      name={"nome"}
                      type={"text"}
                      required={"required"}
                      value={nome}
                      manipulationFunction={(e) => {
                        setNome(e.target.value);
                      }}
                    />
                    <Input
                      id="Descricao"
                      placeholder="Descricao"
                      name={"descricao"}
                      type={"text"}
                      required={"required"}
                      value={descricao}
                      manipulationFunction={(e) => {
                        setDescricao(e.target.value);
                      }}
                    />
                    <Input
                      id="Data"
                      placeholder="Data"
                      name={"data"}
                      type={"Date"}
                      required={"required"}
                      value={data}
                      manipulationFunction={(e) => {
                        setData(e.target.value);
                      }}
                    />

                    <Button
                      textButton="Cadastrar"
                      id="Cadastrar"
                      name="Cadastrar"
                      type="submit"
                    />
                  </>
                ) : (
                  <> Tela de Edicao</>
                )}
              </form>
            </div>
          </Container>
        </section>
        <section className="lista-eventos-section">
          <Container>
            <Titulo
              titleText={"Lista dos Eventos"}
              className="margem_acima"
              color="white"
            />
            <Table
              dados={eventos}
              fnDelete={handleDelete}
              fnUpdate={showUpdateForm}
            />
          </Container>
        </section>
      </MainContent>
    </div>
  );
};

export default EventosPage;
