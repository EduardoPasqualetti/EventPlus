using webapi.Event_.Domains;

namespace webapi.Event_.Interfaces
{
    public interface IPresencasEventoRepository
    {
        void Cadastrar(PresencasEvento presenca);
        void Deletar(Guid id);
        List<PresencasEvento> Listar();
        TiposUsuario BuscarPorId(Guid id);
        void Atualizar(Guid id, PresencasEvento presenca);
    }
}
