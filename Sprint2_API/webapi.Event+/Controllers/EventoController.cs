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
    public class EventoController : ControllerBase
    {
        private IEventoRepository _evento;

        public EventoController()
        {
            _evento = new EventoRepository();
        }

        [HttpPost]
        [Authorize(Roles = "Administrador")]
        public IActionResult Post(Evento evento)
        {
            try
            {
                _evento.Cadastrar(evento);
                return StatusCode(201); 
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        [Authorize(Roles = "Administrador,Comum")]
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

        [HttpGet("{id}")]
        [Authorize(Roles = "Administrador,Comum")]
        public IActionResult Buscar(Guid id)
        {
            try
            {
                return Ok(_evento.BuscarPorId(id));
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpPut]
        [Authorize(Roles = "Administrador")]
        public IActionResult Put(Guid id, Evento evento)
        {
            try
            {
                _evento.Atualizar(id, evento);
                return NoContent();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
        
    }
}
