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

        public void Atualizar(Guid id, Instituicao instituicao)
        {
            Instituicao buscada = _eventContext.Instituicao.FirstOrDefault(x => x.IdInstituicao == id)!;
            if (buscada != null)
            {
                buscada.CNPJ = instituicao.CNPJ;
                buscada.Endereco = instituicao.Endereco;
                buscada.NomeFantasia = instituicao.NomeFantasia;
            }
            _eventContext.Instituicao.Update(instituicao);
            _eventContext.SaveChanges();
        }

        public void Cadastrar(Instituicao instituicao)
        {
            _eventContext.Instituicao.Add(instituicao);
            _eventContext.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            Instituicao buscada = _eventContext.Instituicao.Find(id)!;
            _eventContext.Instituicao.Remove(buscada!);
            _eventContext.SaveChanges();
        }

        public List<Instituicao> Listar()
        {
            return _eventContext.Instituicao.ToList();
        }
    }
}
