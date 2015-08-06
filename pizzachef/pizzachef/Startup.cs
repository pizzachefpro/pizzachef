using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(pizzachef.Startup))]
namespace pizzachef
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
