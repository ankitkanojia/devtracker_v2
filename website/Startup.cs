using Microsoft.Owin;
using Owin;
using website;

[assembly: OwinStartupAttribute(typeof(Startup))]

namespace website
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}