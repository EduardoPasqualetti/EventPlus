using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.Event_.Interfaces;
using webapi.Event_.Repositories;

namespace webapi.Event_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class PresencasEventoController : ControllerBase
    {
        private IEventoRepository _evento;
        public PresencasEventoController()
        {
            _evento = new EventoRepository();
        }
    }
}
