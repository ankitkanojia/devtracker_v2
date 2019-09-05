using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Models.ViewModels
{
    public class DashboardVm
    {
        public long TotalResource { get; set; }
        public long TprojectManager { get; set; }
        public long TteamLeader { get; set; }
        public long Tdesigner { get; set; }
    }
}
