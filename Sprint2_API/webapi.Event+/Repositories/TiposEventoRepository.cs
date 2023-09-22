using webapi.Event_.Contexts;
using webapi.Event_.Domains;
using webapi.Event_.Interfaces;

namespace webapi.Event_.Repositories
{
    public class TiposEventoRepository : ITiposEventoRepository
    {
        private readonly EventContext _eventContext;

        public TiposEventoRepository()
        {
            _eventContext = new EventContext();
        }
        public void Atualizar(Guid id, TiposEvento tipoEvento)
        {
            TiposEvento buscado = _eventContext.TiposEvento.Find(id)!;

            if (buscado != null)
            {
                buscado.Titulo = tipoEvento.Titulo;
            }
            _eventContext.TiposEvento.Update(buscado!);
            _eventContext.SaveChanges();
        }

        public TiposEvento BuscarPorId(Guid id)
        {
            return _eventContext.TiposEvento.FirstOrDefault(e => e.IdTipoEvento == id)!;
        }

        public void Cadastrar(TiposEvento tipoEvento)
        {
            _eventContext.TiposEvento.Add(tipoEvento);
            _eventContext.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            TiposEvento buscado = _eventContext.TiposEvento.Find(id)!;

            _eventContext.TiposEvento.Remove(buscado);
            _eventContext.SaveChanges();
        }

        public List<TiposEvento> Listar()
        {
            List<TiposEvento> list = _eventContext.TiposEvento.ToList();
            return list;
        }

    }
}
