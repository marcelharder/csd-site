using System.Text;

using AutoMapper;
using csd.data;
using csd.data.code;
using csd.data.Implementations;
using csd.data.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;

namespace csd
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers().AddNewtonsoftJson();
            services.AddHttpContextAccessor();
            services.AddCors();



            services.AddDbContext<dataContext>(x => x.UseSqlite(Configuration.GetConnectionString("DefaultConnection"))
            // .EnableSensitiveDataLogging()
            );

            services.AddScoped<IAuthRepository, AuthRepository>();
            services.AddScoped<IUser, UserRepository>();
            services.AddScoped<IMail, Mail>();
            services.AddScoped<Dropdownlists>();
            services.AddScoped<SpecialMaps>();


            //services.AddAutoMapper(cfg => cfg.AddProfile<MappingProfile>(), AppDomain.CurrentDomain.GetAssemblies());
            services.AddAutoMapper(System.Reflection.Assembly.GetExecutingAssembly());

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII
                    .GetBytes(Configuration.GetSection("AppSettings:Token").Value)),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

            services.AddCors(options =>
                       {
                           options.AddPolicy("CorsPolicy",
                           builder =>
                           {
                               builder.WithOrigins("http://localhost:4200")
                                                   .AllowAnyHeader()
                                                   .AllowCredentials()
                                                   .AllowAnyMethod();
                           });
                       });


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors("CorsPolicy");



            app.UseAuthentication();
            app.UseAuthorization();

            app.UseDefaultFiles();
            app.UseStaticFiles();


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapFallbackToController("Index", "Fallback");
            });
        }
    }
}
