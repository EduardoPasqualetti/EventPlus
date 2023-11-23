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
  const [eventos, setEventos] = useState([]);
  const [idEvento, setIdEvento] = useState(null);

  const [idTipoEvento, setIdTipoEvento] = useState(null);
  const [tipoEvento, setTipoEvento] = useState([]);

  const idInstituicao = "0c5dc806-7860-42ae-b77a-2c54d41dcf1e";

  useEffect(() => {
    async function loadEvents() {
      try {
        const retorno = await api.get(eventsResource);
        setEventos(retorno.data);
      } catch (error) {
        console.log("erro na api");
        console.log(error);
      }
    }
    loadEvents();
  }, []);

  useEffect(() => {
    async function loadEventsType() {
      try {
        const retorno = await api.get(eventsTypeResource);
        setTipoEvento(retorno.data)
      } catch (error) {
        
      }}
      loadEventsType();
  },[])

  function dePara(retornoApi) {
    let arrayOptions = [];
    retornoApi.forEach(e => {
      arrayOptions.push({ value: e.idTipoEvento, text: e.titulo})
    });
    return arrayOptions;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post(eventsResource, {
        nomeEvento: nome,
        dataEvento: data,
        descricao: descricao,
        idTipoEvento: idTipoEvento,
        idInstituicao: idInstituicao,
      });
      setNome("");
      setDescricao("");
      setData("");
      setTipoEvento("");

      const buscaEventos = await api.get(eventsResource);
      setEventos(buscaEventos.data);

      setNotifyUser({
        titleNote: "Sucesso",
        textNote: `${nome} Cadastrado com sucesso`,
        imgIcon: "success",
        imgAlt:
          "Imagem de ilustracao de sucesso. Moca segurando um balao com simbolo de confirmacao ok",
        showMessage: true,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function handleUpdate(e) {
    e.preventDefault();

    try {
      const retorno = await api.put(eventsResource + "/" + idEvento, {
        nomeEvento: nome,
        dataEvento: data,
        descricao: descricao,
        idTipoEvento: tipoEvento,
        idInstituicao: idInstituicao,
      });

      if (retorno.status === 204) {
        setNotifyUser({
          titleNote: "Sucesso",
          textNote: `Atualizado com sucesso`,
          imgIcon: "success",
          imgAlt:
            "Imagem de ilustracao de sucesso. Moca segurando um balao com simbolo de confirmacao ok",
          showMessage: true,
        });

        const buscaEventos = await api.get(eventsResource);
        setEventos(buscaEventos.data);

        editActionAbort();
      }
    } catch (error) {
      setNotifyUser({
        titleNote: "Erro",
        textNote: `erro no atualizar`,
        imgIcon: "danger",
        imgAlt:
          "Imagem de ilustracao de erro. Rapaz segurando um balao com simbolo",
        showMessage: true,
      });
    }
  }

  async function handleDelete(idEvento, nome) {
    if (window.confirm("Deseja realmente excluir ?")) {
      try {
        const promisse = await api.delete(`${eventsResource}/${idEvento}`);
        if (promisse.status === 204) {
          const buscaEventos = await api.get(eventsResource);
          setEventos(buscaEventos.data);

          setNotifyUser({
            titleNote: "Sucesso",
            textNote: `Evento ${nome} excluido com sucesso`,
            imgIcon: "success",
            imgAlt:
              "Imagem de ilustracao de sucesso. Moca segurando um balao com simbolo de confirmacao ok",
            showMessage: true,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function showUpdateForm(idElement) {
    setFrmEdit(true);
    setIdEvento(idElement);

    try {
      const retorno = await api.get(`${eventsResource}/${idElement}`);
      setNome(retorno.data.nomeEvento);
      setDescricao(retorno.data.descricao);
      setData(retorno.data.dataEvento.slice(0,10));
      console.log(retorno.data);
    } catch (error) {}
  }

  async function editActionAbort() {
    setFrmEdit(false);
    setNome("");
    setDescricao("");
    setData("");
  }


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
                    <Select
                      id="TipoEvento"
                      name={"tipoEvento"}
                      required={"required"}
                      value={idTipoEvento}
                      manipulationFunction={(e) => {
                        setIdTipoEvento(e.target.value);
                      }}
                      options={dePara(tipoEvento)}
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
                      textButton="Atualizar"
                      id="Atualizar"
                      name="Atualizar"
                      type="submit"
                    />
                    <Button
                      textButton="Cancelar"
                      id="cancelar"
                      name="cancelar"
                      type="submit"
                      manipulationFunction={editActionAbort}
                    />
                  </>
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
