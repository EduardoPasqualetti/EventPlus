using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.Event_.Domains;
using webapi.Event_.Interfaces;
using webapi.Event_.Repositories;

namespace webapi.Event_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("applicattion/json")]
    public class TiposEventoController : ControllerBase
    {
        private ITiposEventoRepository _tiposEvento;

        public TiposEventoController()
        {
            _tiposEvento = new TiposEventoRepository();
        }

        [HttpPost]
        public IActionResult Post(TiposEvento tipoEvento)
        {
            try
            {
                _tiposEvento.Cadastrar(tipoEvento);
                return StatusCode(201);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_tiposEvento.Listar());
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }


        [HttpDelete]
        public IActionResult Delete(Guid id)
        {
            try
            {
                _tiposEvento.Deletar(id);
                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult Buscar(Guid id)
        {
            try
            {
                return Ok(_tiposEvento.BuscarPorId(id));
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpPut]
        public IActionResult Atualizar(Guid id, TiposEvento tiposEvento)
        {
            try
            {
                _tiposEvento.Atualizar(id, tiposEvento);
                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
