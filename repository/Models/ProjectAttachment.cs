//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace repository.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class ProjectAttachment
    {
        public long ProjectAttachmentId { get; set; }
        public long ProjectId { get; set; }
        public string DisplayName { get; set; }
        public string FileName { get; set; }
        public decimal FileSize { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public Nullable<int> CreatedDateInt { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedDate { get; set; }
        public Nullable<int> UpdatedDateInt { get; set; }
        public string UpdatedBy { get; set; }
    
        public virtual Project Project { get; set; }
    }
}
