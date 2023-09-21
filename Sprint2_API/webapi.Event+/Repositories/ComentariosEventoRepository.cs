using webapi.Event_.Contexts;
using webapi.Event_.Domains;
using webapi.Event_.Interfaces;

namespace webapi.Event_.Repositories
{
    public class ComentariosEventoRepository : IComentariosEventoRepository
    {
        private readonly EventContext _eventContext;
        public ComentariosEventoRepository()
        {
            _eventContext= new EventContext();  
        }
        public ComentariosEvento BuscarPorId(Guid id)
        {
            return _eventContext.ComentariosEventos.FirstOrDefault(x => x.IdComentarioEvento == id)!;
        }

        public void Cadastrar(ComentariosEvento comentario)
        {
            _eventContext.ComentariosEventos.Add(comentario);
            _eventContext.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            ComentariosEvento comentario = _eventContext.ComentariosEventos.Find(id)!;
            _eventContext.ComentariosEventos.Remove(comentario);
            _eventContext.SaveChanges();
        }

        public List<ComentariosEvento> Listar()
        {
           return _eventContext.ComentariosEventos.ToList();
        }
    }
}
