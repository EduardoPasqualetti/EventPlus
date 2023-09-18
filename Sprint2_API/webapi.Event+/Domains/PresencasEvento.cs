using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Event_.Domains
{
    [Table(nameof(PresencasEvento))]
    public class PresencasEvento
    {
        [Key]
        public Guid IdPresencaEvento { get; set; } = Guid.NewGuid();

        [Column(TypeName ="TEXT")]
        [Required(ErrorMessage ="campo obrigatorio")]
        public string Sobre { get; set; }

        // referencia usuario
        [Required(ErrorMessage ="Id do Usuario obrigatorio")]
        public Guid IdUsuario { get; set; }


        [ForeignKey(nameof(IdUsuario))]
        public Usuario? Usuario { get; set; }


        // referencia evento 
        [Required(ErrorMessage ="Id do Evento obrigatorio")]
        public Guid IdEvento { get; set; }


        [ForeignKey(nameof(IdEvento))]
        public Evento? Evento { get; set; }

    }
}
