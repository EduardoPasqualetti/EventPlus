using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.Event_.Domains;
using webapi.Event_.Interfaces;
using webapi.Event_.Repositories;

namespace webapi.Event_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class TiposUsuarioController : ControllerBase
    {
        private ITiposUsuarioRepository _tiposUsuario;
        
        public TiposUsuarioController()
        {
            _tiposUsuario = new TiposUsuarioRepository();
        }

        [HttpPost]
        [Authorize(Roles ="Administrador")]
        public IActionResult Post(TiposUsuario tipoUsuario)
        {
            try
            {
                _tiposUsuario.Cadastrar(tipoUsuario);

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
                return Ok(_tiposUsuario.Listar());
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
                _tiposUsuario.Deletar(id);
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
                return Ok(_tiposUsuario.BuscarPorId(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut]
        public IActionResult Atualizar(Guid id,TiposUsuario tipoUsuario)
        {
            try
            {
                _tiposUsuario.Atualizar(id, tipoUsuario);
                return NoContent();

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
