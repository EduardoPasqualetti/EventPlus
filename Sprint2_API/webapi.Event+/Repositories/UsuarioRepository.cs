using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using webapi.Event_.Contexts;
using webapi.Event_.Domains;
using webapi.Event_.Interfaces;
using webapi.Event_.Utils;

namespace webapi.Event_.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly EventContext _eventContext;

        public UsuarioRepository()
        {
            _eventContext= new EventContext();
        }
        public Usuario BuscarPorCorpo(string email, string senha)
        {
            Usuario usuario = _eventContext.Usuario
                 .Select(u => new Usuario
                 {
                     IdUsuario = u.IdUsuario,
                     Nome = u.Nome,
                     Email = u.Email,
                     Senha = u.Senha,
                     TipoUsuario = new TiposUsuario
                     {
                         IdTipoUsuario= u.IdTipoUsuario,
                         Titulo = u.TipoUsuario!.Titulo
                     }
                 }).FirstOrDefault(u => u.Email == email)!;

            if (usuario != null)
            {
                bool confere = Criptografia.CompararHash(senha, usuario.Senha!);

                if (confere)
                {
                    return usuario;
                }
            }
            return null!;
        }

        public Usuario BuscarPorId(Guid id)
        {
            try
            {
                Usuario usuario = _eventContext.Usuario
                    .Select(u => new Usuario
                     {
                           IdUsuario = u.IdUsuario,
                           Nome= u.Nome,
                           Email= u.Email,
                           TipoUsuario= new TiposUsuario
                           {
                               Titulo = u.TipoUsuario!.Titulo
                           }
                     }).FirstOrDefault(u => u.IdUsuario == id)!;

                if (usuario != null)
                {
                    return usuario;
                }
                return null!;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Cadastrar(Usuario usuario)
        {
            try
            {
                usuario.Senha = Criptografia.GerarHash(usuario.Senha!);

                _eventContext.Usuario.Add(usuario);

                _eventContext.SaveChanges();
            }
            catch (Exception)
            {

                throw; 
            }
        }
    }
}
