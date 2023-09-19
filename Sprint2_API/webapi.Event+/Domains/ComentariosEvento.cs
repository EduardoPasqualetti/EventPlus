using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Event_.Domains
{
    [Table(nameof(ComentariosEvento))]
    public class ComentariosEvento
    {
        [Key]
        public Guid IdComentarioEvento { get; set; } = Guid.NewGuid();


        [Column(TypeName ="TEXT")]
        [Required(ErrorMessage ="Descricao Obrigatoria")]
        public string? Descricao { get; set; }

        [Column(TypeName ="BIT")]
        [Required(ErrorMessage ="Campo Obrigatorio")]
        public bool Exibe { get; set; }


        // referencia usuario
        [Required(ErrorMessage = "Usuario obrigatorio")]
        public Guid IdUsuario { get; set; }


        [ForeignKey(nameof(IdUsuario))]
        public Usuario? Usuario { get; set; }


        // referencia evento 
        [Required(ErrorMessage = "Id do Evento obrigatorio")]
        public Guid IdEvento { get; set; }


        [ForeignKey(nameof(IdEvento))]
        public Evento? Evento { get; set; }
    }
}
