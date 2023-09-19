using webapi.Event_.Domains;

namespace webapi.Event_.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuario usuario);
        Usuario BuscarPorId(Guid id);
        Usuario BuscarPorCorpo(string email, string senha);
    }
}
