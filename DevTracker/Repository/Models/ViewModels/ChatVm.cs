using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Models.ViewModels
{
    public class ChatVm
    {
        public long ChatMasterId { get; set; }
        public long UserMasterId { get; set; }
        public long TaskMasterId { get; set; }
        public string UserName { get; set; }
        public string ProfileImage { get; set; }
        public string Side { get; set; }
        public string Message { get; set; }
        public long ProjectId { get; set; }
        public bool IsDelete { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Time { get; set; }
        public int CreatedDateInt { get; set; }
        public bool IsBoxVisible { get; set; }
        public DateTime ChatDate { get; set; }
    }

    public class FilterChatVm
    {
        public long ProjectId { get; set; }
        public long TaskMasterId { get; set; }
        public DateTime ChatDate { get; set; }

    }
}
