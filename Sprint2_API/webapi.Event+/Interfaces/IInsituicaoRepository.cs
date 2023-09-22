using webapi.Event_.Domains;

namespace webapi.Event_.Interfaces
{
    public interface IInsituicaoRepository
    {
        void Cadastrar(Instituicao instituicao);
        void Atualizar(Guid id, Instituicao instituicao);
        void Deletar(Guid id);
        List<Instituicao> Listar();
    }
}
