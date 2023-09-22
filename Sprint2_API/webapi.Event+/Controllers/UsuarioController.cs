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
    public class UsuarioController : ControllerBase
    {
        private IUsuarioRepository _usuario;

        public UsuarioController()
        {
            _usuario = new UsuarioRepository();
        }

        [HttpPost]
        [Authorize(Roles = "Administrador,Comum")]
        public IActionResult Post(Usuario usuario)
        {
            try
            {
                _usuario.Cadastrar(usuario);

                return StatusCode(201);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }


        [HttpGet("{id}")]
        [Authorize(Roles = "Administrador")]
        public IActionResult BuscarPorId(Guid id)
        {
            try
            {
               
                return Ok(_usuario.BuscarPorId(id));
                
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        [Authorize(Roles = "Administrador,Comum")]
        public IActionResult BuscarPorcorpo(string email,string senha)
        {
            try
            {
                return Ok(_usuario.BuscarPorCorpo(email, senha));
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
