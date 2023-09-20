using webapi.Event_.Domains;

namespace webapi.Event_.Interfaces
{
    public interface IComentariosEventoRepository
    {
        void Cadastrar(ComentariosEvento comentario);
        List<ComentariosEvento> Listar();
        void Deletar(Guid id);
        ComentariosEvento BuscarPorId(Guid id);
    }
}
