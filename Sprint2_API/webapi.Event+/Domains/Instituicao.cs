using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Event_.Domains
{
    [Table("Instituicao")]
    [Index(nameof(CNPJ),IsUnique = true)]
    public class Instituicao
    {
        [Key]
        public Guid IdInstituicao { get; set; } = Guid.NewGuid();


        [Column(TypeName ="CHAR(14)")]
        [Required(ErrorMessage ="CNPJ da Instituicao obrigatorio")]
        [StringLength(14)]
        public string? CNPJ { get; set; }


        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Endereco da Instituicao obrigatorio")]
        public string? Endereco { get; set; }


        [Column(TypeName ="VARCHAR(100)")]
        [Required(ErrorMessage ="Nome Fantasia da Instituicao obrigatorio")]
        public string? NomeFantasia { get; set; }

    }
}

