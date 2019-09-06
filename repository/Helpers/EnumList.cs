namespace repository.Helpers
{
    public static class EnumList
    {
        public enum TaskChangeType
        {
            Assignee = 1,
            Reporter = 2,
            Priority = 3,
            Task_Status = 4,
            Completion_Percentage = 5
        } 
       

        public enum ProjectStatus
        {
            Contract_signed_not_begun = 1,
            On_Development = 2,
            On_Hold = 3,
            On_Staging = 4,
            On_Live = 5
        }

        public enum EmailTemplate
        {
            VerificationEmail = 1,
            ResetPassword = 2
        }

        public enum Response
        {
            Success = 1,
            Error = 2,
            Exception = 3,
            Failure = 4
        }
    }
}