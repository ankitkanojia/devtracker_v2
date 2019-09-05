using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Repository.Models.ViewModels
{

    public class TaskDetailsVm
    {
        public long TaskCategoryId { get; set; }
        public long TaskMasterId { get; set; }
        public string TaskCode { get; set; }
        public long ProjectId { get; set; }
        public string ProjectName { get; set; }
        public string Title { get; set; }
        public long TaskTypeMasterId { get; set; }
        public string Description { get; set; }
        public long AssignyId { get; set; }
        public long ReporterId { get; set; }
        public long PriorityMasterId { get; set; }
        public long TaskStatusMasterId { get; set; }
        public string StartDateString { get; set; }
        public string EndDateString { get; set; }
        public int? EstimateTimeHours { get; set; }
        public int? ActualTimeHours { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public DateTime CreatedDate { get; set; }
        public ICollection<TaskAttachment> TaskAttachments { get; set; }
        public ICollection<CommentMaster> CommentMasters { get; set; }
    }

    public class TaskVm
    {
        public long TaskCategoryId { get; set; }
        public long TaskMasterId { get; set; }
        public string TaskCode { get; set; }
        public long ProjectId { get; set; }
        public string Title { get; set; }
        public long TaskTypeMasterId { get; set; }
        public string Description { get; set; }
        public long AssignyId { get; set; }
        public long ReporterId { get; set; }
        public long PriorityMasterId { get; set; }
        public long TaskStatusMasterId { get; set; }
        public DateTime StartDate { get; set; }
        public string StartDateString { get; set; }
        public Nullable<DateTime> EndDate { get; set; }
        public string EndDateString { get; set; }
        public Nullable<int> EstimateTimeHours { get; set; }
        public Nullable<int> ActualTimeHours { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public HttpPostedFileBase[] AttachedFiles { get; set; }
    }
}
