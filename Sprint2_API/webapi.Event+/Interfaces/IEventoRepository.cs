using webapi.Event_.Domains;

namespace webapi.Event_.Interfaces
{
    public interface IEventoRepository
    {
        void Cadastrar(Evento evento);
        void Deletar(Guid id);
        List<Evento> Listar();
        void Atualizar(Guid id, Evento evento);
        Evento BuscarPorId(Guid id);
        
    }
}
