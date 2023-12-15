using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.CognitiveServices.ContentModerator;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using webapi.event_.Domains;
using webapi.event_.Interfaces;
using webapi.event_.Repositories;

namespace webapi.event_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ComentariosEventoController : Controller
    {
        ComentariosEventoRepository comentarioEvento  = new ComentariosEventoRepository();

        // Armazena dados do servico da APi externa(IA - Azure)
        private readonly ContentModeratorClient _contentModeratorClient;

        /// <summary>
        /// Construtor que recebe os dados necessarios para acesso ao servico extremo
        /// </summary>
        /// <param name="contentModeratorClient">objeto do tipo ContentModeratorClient</param>
        public ComentariosEventoController(ContentModeratorClient contentModeratorClient)
        {
            _contentModeratorClient = contentModeratorClient;
        }


        [HttpPost("ComentarioIA")]
        public async Task<IActionResult> PostIA(ComentariosEvento newComentario)
        {
            try
            {
                if (string.IsNullOrEmpty(newComentario.Descricao))
                {
                    return BadRequest("A descricao do comentario nao pode estar vazia ou nula");
                }
                using var stream = new MemoryStream(Encoding.UTF8.GetBytes(newComentario.Descricao));

                var moderatingResult = await _contentModeratorClient.TextModeration
                    .ScreenTextAsync("text/plain", stream, "por", false, false, null, true);

                if (moderatingResult.Terms != null)
                {
                    newComentario.Exibe = false;

                    comentarioEvento.Cadastrar(newComentario);
                }
                else
                {
                    newComentario.Exibe = true;

                    comentarioEvento.Cadastrar(newComentario);
                }
                return StatusCode(201, newComentario);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("IA")]
        public IActionResult GetShow()
        {
            try
            {
                return Ok(comentarioEvento.ListarIA());
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
                return Ok(comentarioEvento.Listar());
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet("BuscarPorIdUsuario")]
        public IActionResult GetByIdUser(Guid idUser, Guid idEvent)
        {
            try
            {
                return Ok(comentarioEvento.BuscarPorIdUsuario(idUser, idEvent));
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public IActionResult Post(ComentariosEvento novoComentario)
        {
            try
            {
                comentarioEvento.Cadastrar(novoComentario);

                return StatusCode(201, novoComentario);
            }
            catch (Exception e )
            {

                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                comentarioEvento.Deletar(id);
                return NoContent();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
