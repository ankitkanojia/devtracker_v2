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
    
    public partial class ChatMaster
    {
        public long ChatMasterId { get; set; }
        public string UserId { get; set; }
        public string Message { get; set; }
        public long ProjectId { get; set; }
        public bool IsDelete { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public Nullable<int> CreatedDateInt { get; set; }
    
        public virtual AspNetUser AspNetUser { get; set; }
        public virtual Project Project { get; set; }
    }
}
