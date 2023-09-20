using System.ComponentModel.DataAnnotations;

namespace webapi.Event_.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Email Obrigatorio")]
        public string? Email { get; set; }


        [Required(ErrorMessage = "Senha Obrigatoria")]
        public string? Senha { get; set; }
    }
}
