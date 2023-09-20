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
    public class InstituicaoController : ControllerBase
    {
        private IInsituicaoRepository _instituicao;

        public InstituicaoController()
        {
            _instituicao = new InstituicaoRepository();
        }

        [HttpPost]
        public IActionResult Post(Instituicao instituicao)
        {
            try
            {
                _instituicao.Cadastrar(instituicao);
                return StatusCode(201);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
