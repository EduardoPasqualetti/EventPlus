import React, { useContext, useEffect, useState } from "react";
import MainContent from "../../components/Main/MainContent";
import Title from "../../components/Titulo/Titulo";
import Table from "./TableEvA/TableEvA";
import Container from "../../components/Container/Container";
import { Select } from "../../components/FormComponents/FormComponents";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal";
import api, { eventsTypeResource } from "../../Services/Service";
import {
  eventsResource,
  myEventsResource,
  presencesEventResource,
} from "../../Services/Service";
import Notification from "../../components/Notification/Notification";

import "./EventosAlunoPage.css";

// Contexto
import { UserContext } from "../../context/AuthContext";

const EventosAlunoPage = () => {
  // Estados
  const [exibeNavbar, setExibeNavbar] = useState(false);
  const [eventos, setEventos] = useState([]);
  const [quaisEventos, setQuaisEventos] = useState([
    { value: 1, text: "Todos os eventos" },
    { value: 2, text: "Meus eventos" },
  ]);
  const [tipoEvento, setTipoEvento] = useState(""); // Código do tipo do Evento escolhido
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [notifyUser, setNotifyUser] = useState({});

  // Recupera os dados globais do usuário
  const { userData, setUserData } = useContext(UserContext);

  // UseEffect para carregar os eventos baseado no tipo selecionado
  useEffect(() => {
    // Função para carregar os tipos de eventos ao montar a página
    async function loadEventsType() {
      if (tipoEvento === "1") {
        try {
          const returnAllEvents = await api.get(eventsResource);

          const returnEvents = await api.get(
            `${myEventsResource}/${userData.userId}`
          );

          const markedEvents = verifyPresence(returnAllEvents.data,returnEvents.data);
          setEventos(markedEvents);

          console.clear();
          console.log("Todos eventos");
          console.log(returnAllEvents.data);
          console.log("Meus Eventos");
          console.log(returnEvents.data);
          console.log("eventos marcados");
          console.log(markedEvents.data);
        } catch (error) {
          notifyError("Erro na API ");
        }
      } else if (tipoEvento === "2") {
        try {
          const returnEvents = await api.get(
            `${myEventsResource}/${userData.userId}`
          );
          console.log(returnEvents);
          // Verifique a estrutura dos dados retornados para acessar corretamente os eventos
          const arrEvents = [];
          returnEvents.data.forEach((e) => {
            arrEvents.push({ ...e.evento, situacao: e.presenca });
          });
          setEventos(arrEvents);
          console.log(arrEvents);
        } catch (error) {
          notifyError("Erro na API");
        }
      } else {
        setEventos([]);
      }
    }

    loadEventsType();
  }, [tipoEvento, userData.userId]);

  // Função para verificar a presença de eventos do usuário em todos os eventos
  const verifyPresence = (arrAllEvents, eventsUser) => {
    // Itera sobre todos os eventos em arrAllEvents
    for (let x = 0; x < arrAllEvents.length; x++) {
      // Itera sobre todos os eventos em eventsUser
      for (let i = 0; i < eventsUser.length; i++) {
        // Verifica se o ID do evento em arrAllEvents é igual ao ID do evento em eventsUser
        if (arrAllEvents[x].idEvento === eventsUser[i].evento.idEvento) {
          // Se os IDs forem iguais, atualiza a situação do evento em arrAllEvents com a situação do evento em eventsUser
          arrAllEvents[x].situacao = true;
          arrAllEvents[x].idPresencaEvento = eventsUser[i].idPresencaEvento
          break;
        }
      }
    }
    // Retorna todos os eventos Marcado com a presenca do Usuario
    return arrAllEvents;
  };

  // Função para alternar entre "Meus Eventos" e "Todos os Eventos"
  function myEvents(tpEvent) {
    setTipoEvento(tpEvent);
  }

  // Função para carregar o comentário do usuário
  async function loadMyComentary(idComentary) {
    return "????";
  }

  // Função para exibir ou esconder o modal
  const showHideModal = () => {
    setShowModal(!showModal);
  };

  // Função para remover o comentário
  const commentaryRemove = () => {
    alert("Remover o comentário");
  };

  // Função para conectar evento
  async function handleConnect(eventId, whatTheFunction, presencaId = null) {
    if (whatTheFunction === "connect") {
      try {
        const promisse = await api.get(presencesEventResource, {
          situacao: true,
          idUsuario: userData.userId,
          idEvento: eventId,
        });

        if (promisse.status === 201) {
          alert("Presenca confirmada, parabens!")
        }

        const allEvents = api.get(eventsResource)
        setEventos(allEvents.data)
        
      } catch (error) {}

      alert("CONECTAR AO EVENTO:" + eventId);
      return;
    }
    try {
      const unconnected = await api.delete(
        `${presencesEventResource}/${presencaId}`);
        
        if (unconnected.status === 204) {
          alert("Desconectado do evento");
          const todosEventos = await api.get(eventsResource);
          setEventos(todosEventos.data)
        }
    } catch (error) {
      
    }
    alert("DESCONECTAR AO EVENTO:" + eventId);
  }

  const notifySuccess = (textNote) => {
    setNotifyUser({
      titleNote: "Sucesso",
      textNote,
      imgIcon: "success",
      imgAlt:
        "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
      showMessage: true,
    });
  };

  const notifyError = (textNote) => {
    setNotifyUser({
      titleNote: "Erro",
      textNote,
      imgIcon: "danger",
      imgAlt:
        "Imagem de ilustração de erro. Homem segurando um balão com símbolo de X.",
      showMessage: true,
    });
  };

  const notifyWarning = (textNote) => {
    setNotifyUser({
      titleNote: "Aviso",
      textNote,
      imgIcon: "warning",
      imgAlt:
        "Imagem de ilustração de aviso. Mulher em frente a um grande ponto de exclamação.",
      showMessage: true,
    });
  };

  return (
    <>
      {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}
      <MainContent>
        <Container>
          <Title titleText={"Eventos"} className="custom-title" />

          {/* Select para escolha entre "Meus Eventos" e "Todos os Eventos" */}
          <Select
            id="id-tipo-evento"
            name="tipo-evento"
            required={true}
            options={quaisEventos} // aqui o array dos tipos
            manipulationFunction={(e) => myEvents(e.target.value)} // aqui só a variável state
            defaultValue={tipoEvento}
            addtionalClass="select-tp-evento"
          />
          {/* Tabela de eventos */}
          <Table
            dados={eventos}
            fnConnect={handleConnect}
            fnShowModal={() => { 
              showHideModal();
            }}
          />
        </Container>
      </MainContent>

      {/* SPINNER - Feito com position */}
      {showSpinner ? <Spinner /> : null}

      {/* Modal para remoção de comentário */}
      {showModal ? (
        <Modal
          userId={userData.userId}
          showHideModal={showHideModal}
          fnDelete={commentaryRemove}
        />
      ) : null}
    </>
  );
};

export default EventosAlunoPage;
