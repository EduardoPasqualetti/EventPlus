import React from "react";
import comentaryIcon from "../../../assets/images/comentary-icon.svg";
import ToggleSwitch from "../../../components/Toggle/Toggle";
import { dateFormatDbToView } from "../../../Utils/stringFunctions";
// importa a biblioteca de tootips ()
import "react-tooltip/dist/react-tooltip.css";

// import trashDelete from "../../../assets/images/trash-delete.svg";
import "./TableEvA.css";

const Table = ({ dados, fnConnect = null, fnShowModal = null }) => {
  return (
    <table className="tbal-data">
      <thead className="tbal-data__head">
        <tr className="tbal-data__head-row tbal-data__head-row--red-color">
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Evento
          </th>
          {/* <th className="tbal-data__head-title tbal-data__head-title--big">
            Descrição
          </th> */}
          {/* <th className="tbal-data__head-title tbal-data__head-title--big">
            Tipo
          </th> */}
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Data
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        {dados.map((e) => {
          return (
            <tr className="tbal-data__head-row" key={Math.random()}>
              <td className="tbal-data__data tbal-data__data--big">
                {e.nomeEvento}
              </td>
              {/* <td
                className="tbal-data__data tbal-data__data--big tbal-data__data--handover"
                data-tooltip-id="description-tooltip"
                data-tooltip-content={e.descricao}
                data-tooltip-place="top"
              >
                {e.descricao.substr(0, 15)} ...
                <Tooltip
                  id="description-tooltip"
                  className="custom-tootip"
                />
              </td> */}
              {/* <td className="tbal-data__data tbal-data__data--big">
                {e.titulo}
              </td> */}
              <td className="tbal-data__data tbal-data__data--big tbal-data__btn-actions">
                {dateFormatDbToView(e.dataEvento)}
              </td>

              <td className="tbal-data__data tbal-data__data--big tbal-data__btn-actions">
                <img
                  className="tbal-data__icon"
                  src={comentaryIcon}
                  alt=""
                  onClick={() => {fnShowModal(e.idEvento)}}
                />

                <ToggleSwitch toggleActive={e.situacao}  manipulationFunction={() => {
                  fnConnect(e.idEvento, e.situacao ? "unconnect" : "connect", e.idPresencaEvento )} }
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
