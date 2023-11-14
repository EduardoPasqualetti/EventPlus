import React, { useEffect, useState } from "react";
import Title from "../../components/Titulo/Titulo";
import "./TipoEventosPage.css";
import MainContent from "../../components/Main/MainContent";
import Container from "../../components/Container/Container";
import ImageIlustrator from "../../components/ImageIlustrator/ImageIlustrator";
import tipoEventoImage from "../../assets/images/tipo-evento.svg";
import { Input, Button } from "../../components/FormComponents/FormComponents";
import api, {eventsTypeResource} from "../../Services/Service";
import Table from "./TableTp/TableTp"

const TipoEventos = () => {
  const [frmEdit, setFrmEdit] = useState(false);
  const [titulo, setTitulo] = useState();
  const [tipoEventos, setTipoEventos] = useState([]);

  useEffect(() => {
    async function loadEventsType() {

      try {
        const retorno = await api.get(eventsTypeResource);
        setTipoEventos(retorno.data)
        console.log(retorno.data);

      } catch (error) {
        console.log(error)
      }
    }
    loadEventsType();
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();

    if (titulo.trim().length < 3) {
      alert("O titulo deve ter pelo menos tres caracteres");
    }

    try {
      const retorno = await api.post(eventsTypeResource, {
        titulo:titulo
      })
      alert("Cadastrado com sucesso")

    } catch (error) {
      alert("Deu ruim no submit")
    }

  }



  function handleUpdate() {
    alert("tela de edit");
  }

  // cancela a tela/acao de edicao (volta para o form de cadastro)
  function editActionAbort() {
    alert(`Cancelar a tela de edicao de dados`)
  }

  // mostra o formulario de edicao
  function showUpdateForm() {
    alert(`Mostrar o formulario de edicao`)
  }

  // apaga o tipo de evento na api
  function handleDelete(idElement) {
    alert(`apagar o evento do id: ${idElement}`)
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
                {!frmEdit ? (
                  // Cadastrar
                  <>
                    <Input
                      id="Titulo"
                      placeholder="Titulo"
                      name={"titulo"}
                      type={"text"}
                      required={"required"}
                      value={titulo}
                      manipulationFunction={(e) => {
                        setTitulo(e.target.value);
                      }}
                    />
                    <span>{titulo}</span>
                    <Button
                      textButton="Cadastrar"
                      id="Cadastrar"
                      name="Cadastrar"
                      type="submit"
                    />
                  </>
                ) : (
                  //Editar
                  <>
                    <p>Tela de Edicao</p>
                  </>
                )}
              </form>

            </div>
          </Container>
        </section>
        <section className="lista-eventos-section">
          <Container>
            <Title titleText={"Lista tipo de eventos"} color="white"/>
            <Table
            dados={tipoEventos}
              fnUpdate={showUpdateForm}
              fnDelete={handleDelete}
            />
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default TipoEventos;
