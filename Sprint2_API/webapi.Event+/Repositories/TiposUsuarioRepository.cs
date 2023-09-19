using webapi.Event_.Contexts;
using webapi.Event_.Domains;
using webapi.Event_.Interfaces;

namespace webapi.Event_.Repositories
{
    public class TiposUsuarioRepository : ITiposUsuarioRepository
    {
        private readonly EventContext _eventContext;
        public TiposUsuarioRepository()
        {
            _eventContext = new EventContext();
        }
        public void Atualizar(Guid id, TiposUsuario tipoUsuario)
        {
            TiposUsuario buscado = _eventContext.TiposUsuario.Find(id)!;

            if (buscado != null)
            {
                buscado.Titulo = tipoUsuario.Titulo;
            }
            _eventContext.TiposUsuario.Update(buscado!);
            _eventContext.SaveChanges();
        }

        public TiposUsuario BuscarPorId(Guid id)
        {
            return _eventContext.TiposUsuario.FirstOrDefault(x => x.IdTipoUsuario == id)!;
        }

        public void Cadastrar(TiposUsuario tipoUsuario)
        {
            _eventContext.TiposUsuario.Add(tipoUsuario);

            _eventContext.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            TiposUsuario Buscado = _eventContext.TiposUsuario.Find(id)!;
            _eventContext.TiposUsuario.Remove(Buscado);

            _eventContext.SaveChanges();
        }

        public List<TiposUsuario> Listar()
        {
           return  _eventContext.TiposUsuario.ToList();
        }
    }
}
