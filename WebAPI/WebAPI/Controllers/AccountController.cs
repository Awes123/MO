using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WebAPI.Dtos;
using WebAPI.Errors;
using WebAPI.Extensions;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class AccountController : BaseController
    {
        private readonly IUnitOfWork uow;
        private readonly IConfiguration configuration;

        public AccountController(IUnitOfWork uow, IConfiguration configuration)
        {
            this.uow = uow;
            this.configuration = configuration;
        }
        //Api/Account/Login
        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginReqDto userReq)
        {
            var user = await uow.UserRepository.Authenticate(userReq.UserName, userReq.Password);

            ApiError apiError = new ApiError();

            if (user == null)
            {
                apiError.ErrorCode = Unauthorized().StatusCode;
                apiError.ErrorMessage = "Invalid User ID or Password";
                apiError.ErrorDetails = "This error appear when provided user credential does not exists";
                return Unauthorized(apiError);
            }
            var loginRes = new LoginResDto();
            loginRes.UserName = user.Email;
            loginRes.Id = user.Id;
            loginRes.Name = user.FirstName + " " + user.LastName;
            switch (user.Role)
            {
                case "Admin":
                    loginRes.Role = "1";
                    break;
                case "Customer":
                    loginRes.Role = "2";
                    break;
            }
            loginRes.Token = CreateJWT(user);
            return Ok(loginRes);
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto userReq)
        {
            ApiError apiError = new ApiError();
            var person = await uow.UserRepository.UserbyReferralCode(userReq.MyReferralCode);
            if (person != null)
            {
                userReq.MyReferralCode = userReq.MyReferralCode + userReq.firstName[0] + userReq.lastName[0];
            }
            if (userReq.firstName.IsEmpty() || userReq.lastName.IsEmpty() || userReq.email.IsEmpty() || userReq.mobile.IsEmpty() || userReq.password.IsEmpty())
            {
                apiError.ErrorCode = BadRequest().StatusCode;
                apiError.ErrorMessage = "All fields are required";
                return BadRequest(apiError);
            }
            if (await uow.UserRepository.UserAlreadyExists(userReq.email))
            {
                apiError.ErrorCode = BadRequest().StatusCode;
                apiError.ErrorMessage = "User already exists, please try something else";
                return BadRequest(apiError);
            }

            uow.UserRepository.Register(userReq);
            await uow.SaveAsync();
            return StatusCode(201);
        }
        private string CreateJWT(User user)
        {
            var secretKey = configuration.GetSection("AppSettings:Key").Value;
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
            var claims = new Claim[]
            {
                new Claim(ClaimTypes.Name,user.Email),
                new Claim(ClaimTypes.NameIdentifier,user.Id.ToString())
            };

            var signingCredentials = new SigningCredentials(
                    key, SecurityAlgorithms.HmacSha256Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(10),
                SigningCredentials = signingCredentials
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
        [HttpGet("Referred/{referralCode}")]
        public async Task<IActionResult> ReferredPerson(string referralCode)
        {
            var person = await uow.UserRepository.UserbyReferralCode(referralCode);
            var loginRes = new LoginResDto();
            loginRes.Name = "Invalid referral code";
            if (person != null)
            {
                loginRes.Name = person.FirstName + " " + person.LastName;
            }
            return Ok(loginRes);
        }
    }
}
