using Microsoft.AspNetCore.Mvc;
using NorthWind.Models;
using NorthWind.UnitOfWork;
using NorthWind.WebApi.Authentication;
using System;

namespace NorthWind.WebApi.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class TokenController: Controller
    {
        private ITokenProvider _tokenProvider;
        private IUnitOfWork _unitOfWork;

        public TokenController(ITokenProvider tokenProvider, IUnitOfWork unitOfWork)
        {
            _tokenProvider = tokenProvider;
            _unitOfWork = unitOfWork;

        }

        [HttpPost]
        public JsonWebToken Post([FromBody]User userLogin)
        {
            var user = _unitOfWork.User.validateUser(userLogin.Email, userLogin.Password);

            if (user == null)
            {
                throw new UnauthorizedAccessException();
            }

            var token = new JsonWebToken
            {
                Access_Token = _tokenProvider.CreateToken(user, DateTime.UtcNow.AddDays(8)),
                Expires_in = 480
            };

            return token;
        }
    }
}
