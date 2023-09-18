using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Event_.Domains
{
    [Table("TiposEvento")]
    public class TiposEvento
    {
        [Key]
        public Guid IdTipoEvento { get; set; } = Guid.NewGuid();


        [Column(TypeName ="VARCHAR(100)")]
        [Required(ErrorMessage ="Titulo de tipo evento obrigatorio")]
        public string? Titulo { get; set; }
    }
}
