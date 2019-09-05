namespace Repository.Models.ViewModels
{
    public class RoleVm
    {
    }

    public class MenuVM
    {
        public long UserRoleID { get; set; }

        public long LinkID { get; set; }

        public long ModuleID { get; set; }

        public string ModuleName { get; set; }

        public string LinkName { get; set; }

        public string Controller { get; set; }

        public string Action { get; set; }

        public string CssClass { get; set; }

        public long LinkOperationID { get; set; }

        public long UserID { get; set; }

        public long OperationID { get; set; }

        public string Operation { get; set; }

        public string LinkType { get; set; }

        public bool IsDefault { get; set; }

        public bool IsSingle { get; set; }

        public bool IsReadOnly { get; set; }
        public bool IsAccess { get; set; }

        public bool IsReadWrite { get; set; }
    }
}
