﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class DBEntities : DbContext
    {
        public DBEntities()
            : base("name=DBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<C__MigrationHistory> C__MigrationHistory { get; set; }
        public virtual DbSet<Activity> Activities { get; set; }
        public virtual DbSet<AspNetRole> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaim> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogin> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUser> AspNetUsers { get; set; }
        public virtual DbSet<ChatMaster> ChatMasters { get; set; }
        public virtual DbSet<CommentMaster> CommentMasters { get; set; }
        public virtual DbSet<DependantTask> DependantTasks { get; set; }
        public virtual DbSet<EmailTemplete> EmailTempletes { get; set; }
        public virtual DbSet<Link> Links { get; set; }
        public virtual DbSet<Module> Modules { get; set; }
        public virtual DbSet<PriorityMaster> PriorityMasters { get; set; }
        public virtual DbSet<Project> Projects { get; set; }
        public virtual DbSet<ProjectAssigny> ProjectAssignies { get; set; }
        public virtual DbSet<ProjectAttachment> ProjectAttachments { get; set; }
        public virtual DbSet<ProjectCategory> ProjectCategories { get; set; }
        public virtual DbSet<ProjectStatusMaster> ProjectStatusMasters { get; set; }
        public virtual DbSet<TaskAttachment> TaskAttachments { get; set; }
        public virtual DbSet<TaskCategory> TaskCategories { get; set; }
        public virtual DbSet<TaskMaster> TaskMasters { get; set; }
        public virtual DbSet<TaskStatusMaster> TaskStatusMasters { get; set; }
        public virtual DbSet<TaskTypeMaster> TaskTypeMasters { get; set; }
        public virtual DbSet<TimeTracker> TimeTrackers { get; set; }
    }
}
