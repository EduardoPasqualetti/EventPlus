using webapi.Event_.Contexts;
using webapi.Event_.Domains;
using webapi.Event_.Interfaces;

namespace webapi.Event_.Repositories
{
    public class EventoRepository : IEventoRepository
    {
        private readonly EventContext _eventContext;
        public EventoRepository()
        {
            _eventContext = new EventContext();
        }
        public void Atualizar(Guid id, Evento evento)
        {
            Evento buscado = _eventContext.Evento.Find(id)!;
            if (buscado != null)
            {
                buscado.NomeEvento = evento.NomeEvento;
            }
            _eventContext.Update(buscado!);
            _eventContext.SaveChanges();
        }

        public Evento BuscarPorId(Guid id)
        {
            return _eventContext.Evento.FirstOrDefault(e => e.IdEvento == id)!;
        }

        public void Cadastrar(Evento evento)
        {
            _eventContext.Evento.Add(evento);

            _eventContext.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            Evento buscado = _eventContext.Evento.Find(id)!;

            _eventContext.Evento.Remove(buscado);

            _eventContext.SaveChanges();
        }

        public List<Evento> Listar()
        {
           return  _eventContext.Evento.ToList();
        }
    }
}
