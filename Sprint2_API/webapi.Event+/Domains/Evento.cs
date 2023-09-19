using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Event_.Domains
{
    [Table(nameof(Evento))]
    public class Evento
    {
        [Key]
        public Guid IdEvento { get; set; } = Guid.NewGuid();


        [Column(TypeName = "DATE")]
        [Required(ErrorMessage ="Data do Evento obrigatoria")]
        public DateTime DataEvento { get; set; }

        [Column(TypeName ="VARCHAR(100)")]
        [Required(ErrorMessage ="Nome do evento obrigatorio")]
        public string? NomeEvento { get; set; }

        [Column(TypeName ="TEXT")]
        [Required(ErrorMessage ="Descricao do Evento obrigatoria")]
        public string? Descricao { get; set; }


        // referencia TipoEvento
        [Required(ErrorMessage ="Tipo do evento obrigatorio")]
        public Guid IdTipoEvento { get; set; }


        [ForeignKey(nameof(IdTipoEvento))]
        public TiposEvento? TipoEvento { get; set; }

        // referencia Instituicao
        [Required(ErrorMessage ="Instituicao obrigatoria")]
        public Guid IdInstituicao { get; set; }


        [ForeignKey(nameof(IdInstituicao))]
        public Instituicao? Instituicao { get; set; }


    }
}
