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
    
    public partial class Project
    {
        public long ProjectId { get; set; }
        public string TagLine { get; set; }
        public string Name { get; set; }
        public string ClientName { get; set; }
        public System.DateTime StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public Nullable<decimal> Budget { get; set; }
        public string BasicDescription { get; set; }
        public string ConfidentialDescription { get; set; }
        public Nullable<int> EstimateHours { get; set; }
        public Nullable<int> TeamMemberCount { get; set; }
        public Nullable<int> ActualTeamMemberCount { get; set; }
        public Nullable<long> ProjectStatusMasterId { get; set; }
        public string LiveURL { get; set; }
        public string StagingURL { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public Nullable<int> CreatedDateInt { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedDate { get; set; }
        public Nullable<int> UpdatedDateInt { get; set; }
        public string UpdatedBy { get; set; }
    }
}