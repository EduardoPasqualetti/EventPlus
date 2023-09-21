using webapi.Event_.Contexts;
using webapi.Event_.Domains;
using webapi.Event_.Interfaces;

namespace webapi.Event_.Repositories
{
    public class PresencasEventoRepository : IPresencasEventoRepository
    {
        private readonly EventContext _eventContext;

        public PresencasEventoRepository()
        {
            _eventContext = new EventContext();
        }
        public void Atualizar(Guid id, PresencasEvento presenca)
        {
            PresencasEvento presencaEvento = _eventContext.PresencasEvento.Find(id)!;
            if (presencaEvento != null)
            {
                presencaEvento.Situacao = presenca.Situacao;
            }
            _eventContext.PresencasEvento.Update(presencaEvento!);
            _eventContext.SaveChanges();
        }

        public void Cadastrar(PresencasEvento presenca)
        {
            _eventContext.PresencasEvento.Add(presenca);
            _eventContext.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            PresencasEvento presenca = _eventContext.PresencasEvento.Find(id)!;
            _eventContext.PresencasEvento.Remove(presenca);
            _eventContext.SaveChanges();
        }

        public List<PresencasEvento> Listar()
        {
            return _eventContext.PresencasEvento.ToList();
        }

        public List<PresencasEvento> ListarMinhas(Guid id)
        {
            return _eventContext.PresencasEvento
                .Where(x => x.IdUsuario == id).ToList();    
        }
    }
}
