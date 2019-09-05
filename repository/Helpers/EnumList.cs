namespace repository.Helpers
{
    public static class EnumList
    {
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