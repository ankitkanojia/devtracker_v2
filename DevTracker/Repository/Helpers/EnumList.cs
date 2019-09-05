namespace Repository.Helpers
{
    public class EnumList
    {
        public enum TaskChangeType
        {
            Assignee = 1,
            Reporter = 2,
            Priority = 3,
            Task_Status = 4,
            Completion_Percentage = 5
        }

        public enum Roles
        {
            Owner = 1,
            Project_Manager = 2,
            Team_Leader = 3,
            Designer = 4
        }

        public enum EmailTemplete
        {
            ForgotPassword = 1,
            Welcome = 2
        }

        public enum ProjectStatus
        {
            Contract_signed_not_begun = 1,
            On_Development = 2,
            On_Hold = 3,
            On_Staging = 4,
			On_Live = 5
        }
    }
}
