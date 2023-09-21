using webapi.Event_.Domains;

namespace webapi.Event_.Interfaces
{
    public interface IPresencasEventoRepository
    {
        void Cadastrar(PresencasEvento presenca);
        void Deletar(Guid id);
        List<PresencasEvento> Listar();
        void Atualizar(Guid id, PresencasEvento presenca);
        List<PresencasEvento> ListarMinhas(Guid id);
    }
}
