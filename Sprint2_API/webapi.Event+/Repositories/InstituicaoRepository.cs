using webapi.Event_.Contexts;
using webapi.Event_.Domains;
using webapi.Event_.Interfaces;

namespace webapi.Event_.Repositories
{
    public class InstituicaoRepository : IInsituicaoRepository
    {
        private readonly EventContext _eventContext;

        public InstituicaoRepository()
        {
            _eventContext= new EventContext();
        }
        public void Cadastrar(Instituicao instituicao)
        {
            _eventContext.Instituicao.Add(instituicao);
            _eventContext.SaveChanges();
        }
    }
}
