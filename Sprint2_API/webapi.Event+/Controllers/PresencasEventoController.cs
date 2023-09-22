using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using webapi.Event_.Domains;
using webapi.Event_.Interfaces;
using webapi.Event_.Repositories;

namespace webapi.Event_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class PresencasEventoController : ControllerBase
    {
        private IPresencasEventoRepository _evento;
        public PresencasEventoController()
        {
            _evento = new PresencasEventoRepository();
        }

        [HttpPost]
        [Authorize(Roles = "Administrador,Comum")]
        public IActionResult Post(PresencasEvento presenca)
        {
            try
            {
                _evento.Cadastrar(presenca);
                return StatusCode(201);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpDelete]
        [Authorize(Roles = "Administrador")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                _evento.Deletar(id);
                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpPut]
        [Authorize(Roles = "Administrador,Comum")]
        public IActionResult Atualizar(Guid id,PresencasEvento presenca)
        {
            try
            {
                _evento.Atualizar(id, presenca);
                return NoContent();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        [Authorize(Roles = "Administrador")]
        public IActionResult Get()
        {
            try
            {
                return Ok(_evento.Listar());
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "Administrador,Comum")]
        public IActionResult LisatrMinhas(Guid id)
        {
            try
            {
                return Ok(_evento.ListarMinhas(id));
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
