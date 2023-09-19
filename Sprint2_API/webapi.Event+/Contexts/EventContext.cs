using Microsoft.EntityFrameworkCore;
using webapi.Event_.Domains;

namespace webapi.Event_.Contexts
{
    public class EventContext : DbContext
    {
        public DbSet<TiposUsuario> TiposUsuario { get; set; }

        public DbSet<TiposEvento> TiposEvento { get; set; }

        public DbSet<Usuario> Usuario { get; set; }

        public DbSet<Evento> Evento { get; set; }

        public DbSet<Instituicao> Instituicao { get; set; }

        public DbSet<PresencasEvento> PresencasEvento { get; set; }

        public DbSet<ComentariosEvento> ComentariosEventos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=NOTE16-S14; Database=Event+_manhaAPI; User id=sa; pwd=Senai@134; TrustServerCertificate=True;");
            base.OnConfiguring(optionsBuilder);
        }
    }
}
