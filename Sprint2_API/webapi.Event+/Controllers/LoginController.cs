using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using webapi.Event_.Domains;
using webapi.Event_.Interfaces;
using webapi.Event_.Repositories;
using webapi.Event_.ViewModels;

namespace webapi.Event_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository _usuario;

        public LoginController()
        {
            _usuario = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Login(LoginViewModel usuario)
        {
            try
            {
                Usuario user = _usuario.BuscarPorCorpo(usuario.Email!,usuario.Senha!);

                if (usuario == null)
                {
                    return NotFound("Email ou Senha invalidos!");
                }

                //Logica do token

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, user.Email!),
                    new Claim(JwtRegisteredClaimNames.Name, user.Nome!),
                    new Claim(JwtRegisteredClaimNames.Jti, user.IdUsuario.ToString()),
                    new Claim(ClaimTypes.Role,user.TipoUsuario!.Titulo!)
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("Event-chave-autenticacao-webapi-dev"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken
                (
                    issuer: "webapi.Event+",
                    audience: "webapi.Event+",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: creds
                );


                // 5 parte - retornar o token criado
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            catch (Exception ERRO)
            {
                return BadRequest(ERRO.Message);
            }
        }
    }
}
