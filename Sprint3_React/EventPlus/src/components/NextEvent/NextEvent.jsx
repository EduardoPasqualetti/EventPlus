import React from "react";
import "./NextEvent.css";

const NextEvent = ({ title, description, eventDate, idEvento }) => {
  function conectar() {
    alert(`Chamar o recurso para conectar: ${idEvento}`);
  }
  return (
        <article className="event-card">
          <h2 className="event-card__title">{title}</h2>

          <p className="event-card__description">{description}</p>

          <p className="event-card__description">{eventDate}</p>

          <a
            href=""
            onClick={() => {
              conectar(idEvento);
            }}
            className="event-card__connect-link"
          >
            Conectar
          </a>
        </article>
  );
};

export default NextEvent;
