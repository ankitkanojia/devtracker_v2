/****** Object:  Table [dbo].[__MigrationHistory]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[__MigrationHistory]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[__MigrationHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ContextKey] [nvarchar](300) NOT NULL,
	[Model] [varbinary](max) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_dbo.__MigrationHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC,
	[ContextKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Activity]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Activity]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Activity](
	[ActivityId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](128) NOT NULL,
	[ProjectId] [bigint] NULL,
	[TaskMasterId] [bigint] NULL,
	[Title] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[IsOnDashboard] [bit] NOT NULL,
	[IsDelete] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
 CONSTRAINT [PK_Activity] PRIMARY KEY CLUSTERED 
(
	[ActivityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[AspNetRoles]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[AspNetRoles](
	[Id] [nvarchar](128) NOT NULL,
	[Name] [nvarchar](256) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[AspNetUserClaims]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](128) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_dbo.AspNetUserClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[AspNetUserLogins]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[AspNetUserLogins](
	[LoginProvider] [nvarchar](128) NOT NULL,
	[ProviderKey] [nvarchar](128) NOT NULL,
	[UserId] [nvarchar](128) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUserLogins] PRIMARY KEY CLUSTERED 
(
	[LoginProvider] ASC,
	[ProviderKey] ASC,
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[AspNetUserRoles]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[AspNetUserRoles](
	[UserId] [nvarchar](128) NOT NULL,
	[RoleId] [nvarchar](128) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[AspNetUsers]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[AspNetUsers](
	[Id] [nvarchar](128) NOT NULL,
	[FullName] [nvarchar](max) NULL,
	[ProfileImage] [nvarchar](max) NULL,
	[SkypeId] [nvarchar](max) NULL,
	[CompanyName] [nvarchar](max) NULL,
	[Bio] [nvarchar](max) NULL,
	[IsActive] [bit] NOT NULL,
	[Gender] [nvarchar](max) NULL,
	[DateOfBirth] [datetime] NULL,
	[FacebookLink] [nvarchar](max) NULL,
	[TwitterLink] [nvarchar](max) NULL,
	[LinkedInLink] [nvarchar](max) NULL,
	[UserDefine1] [nvarchar](max) NULL,
	[UserDefine2] [nvarchar](max) NULL,
	[UserDefine3] [nvarchar](max) NULL,
	[Email] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[LockoutEndDateUtc] [datetime] NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
	[UserName] [nvarchar](256) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[ChatMaster]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ChatMaster]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ChatMaster](
	[ChatMasterId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](128) NOT NULL,
	[Message] [nvarchar](max) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[IsDelete] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
 CONSTRAINT [PK_ChatMaster] PRIMARY KEY CLUSTERED 
(
	[ChatMasterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[CommentMaster]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CommentMaster]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[CommentMaster](
	[CommentMasterId] [bigint] NOT NULL,
	[UserId] [nvarchar](128) NOT NULL,
	[Message] [nvarchar](max) NOT NULL,
	[TaskMasterId] [bigint] NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[IsDelete] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
 CONSTRAINT [PK_CommentMaster] PRIMARY KEY CLUSTERED 
(
	[CommentMasterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[DependantTask]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DependantTask]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[DependantTask](
	[DependantTaskId] [bigint] IDENTITY(1,1) NOT NULL,
	[TaskMasterId] [bigint] NOT NULL,
	[OnDependTaskMasterId] [bigint] NOT NULL,
	[IsActive] [bit] NOT NULL,
	[IsDelete] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [nvarchar](128) NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [nvarchar](128) NULL,
 CONSTRAINT [PK_DependantTask] PRIMARY KEY CLUSTERED 
(
	[DependantTaskId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[EmailTemplete]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[EmailTemplete]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[EmailTemplete](
	[EmailTempleteId] [bigint] NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Subject] [nvarchar](1024) NOT NULL,
	[Body] [nvarchar](max) NOT NULL,
	[HashTag] [nvarchar](max) NULL,
	[FromEmail] [nvarchar](255) NOT NULL,
	[BccEmail] [nvarchar](255) NULL,
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_EmailTemplete_IsActive1]  DEFAULT ((1)),
	[IsDelete] [bit] NOT NULL CONSTRAINT [DF_EmailTemplete_IsDelete1]  DEFAULT ((0)),
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [bigint] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_EmailTemplete] PRIMARY KEY CLUSTERED 
(
	[EmailTempleteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Links]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Links]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Links](
	[LinkId] [bigint] NOT NULL,
	[ModuleId] [bigint] NOT NULL,
	[LinkName] [nvarchar](50) NOT NULL,
	[Controller] [nvarchar](50) NOT NULL,
	[Action] [nvarchar](50) NOT NULL,
	[ViewIndex] [int] NULL,
	[IsDefault] [bit] NOT NULL,
	[IsSingle] [bit] NOT NULL,
	[CreatedById] [nvarchar](128) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt] [int] NULL,
	[IsVisible] [bit] NULL,
 CONSTRAINT [PK_Links] PRIMARY KEY CLUSTERED 
(
	[LinkId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Modules]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Modules]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Modules](
	[ModuleId] [bigint] IDENTITY(1,1) NOT NULL,
	[ModuleName] [nvarchar](100) NOT NULL,
	[CssClass] [nvarchar](100) NOT NULL,
	[ViewIndex] [int] NULL,
	[CreatedById] [nvarchar](128) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt] [int] NULL,
 CONSTRAINT [PK_Modules] PRIMARY KEY CLUSTERED 
(
	[ModuleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[PriorityMaster]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[PriorityMaster]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[PriorityMaster](
	[PriorityMasterId] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[ColorCode] [nvarchar](50) NOT NULL,
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_PriorityMaster_IsActive]  DEFAULT ((1)),
	[IsDelete] [bit] NOT NULL CONSTRAINT [DF_PriorityMaster_IsDelete]  DEFAULT ((0)),
 CONSTRAINT [PK_PriorityMaster] PRIMARY KEY CLUSTERED 
(
	[PriorityMasterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Project]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Project]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Project](
	[ProjectId] [bigint] IDENTITY(1,1) NOT NULL,
	[TagLine] [nvarchar](500) NULL,
	[Name] [nvarchar](500) NOT NULL,
	[ClientName] [nvarchar](100) NOT NULL,
	[StartDate] [datetime] NOT NULL,
	[EndDate] [datetime] NULL,
	[Budget] [decimal](10, 2) NULL,
	[BasicDescription] [nvarchar](max) NOT NULL,
	[ConfidentialDescription] [nvarchar](max) NULL,
	[EstimateHours] [int] NULL,
	[TeamMemberCount] [int] NULL,
	[ActualTeamMemberCount] [int] NULL,
	[ProjectStatusMasterId] [bigint] NULL,
	[LiveURL] [nvarchar](500) NULL,
	[StagingURL] [nvarchar](500) NULL,
	[IsActive] [bit] NOT NULL,
	[IsDelete] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [nvarchar](128) NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [nvarchar](128) NULL,
 CONSTRAINT [PK_Project] PRIMARY KEY CLUSTERED 
(
	[ProjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[ProjectAssigny]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ProjectAssigny]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ProjectAssigny](
	[ProjectAssignyId] [bigint] IDENTITY(1,1) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[AssignyId] [nvarchar](128) NOT NULL,
	[WhoAssign] [nvarchar](128) NOT NULL,
	[IsActive] [bit] NOT NULL,
	[IsDelete] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [nvarchar](128) NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [nvarchar](128) NULL,
 CONSTRAINT [PK_ProjectAssigny] PRIMARY KEY CLUSTERED 
(
	[ProjectAssignyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[ProjectAttachment]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ProjectAttachment]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ProjectAttachment](
	[ProjectAttachmentId] [bigint] IDENTITY(1,1) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[DisplayName] [nvarchar](500) NOT NULL,
	[FileName] [nvarchar](500) NOT NULL,
	[FileSize] [decimal](18, 0) NOT NULL,
	[IsActive] [bit] NOT NULL,
	[IsDelete] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [nvarchar](128) NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [nvarchar](128) NULL,
 CONSTRAINT [PK_ProjectAttachment] PRIMARY KEY CLUSTERED 
(
	[ProjectAttachmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[ProjectCategory]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ProjectCategory]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ProjectCategory](
	[ProjectCategoryId] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](500) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[IsActive] [bit] NOT NULL,
	[IsDelete] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [nvarchar](128) NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [nvarchar](128) NULL,
 CONSTRAINT [PK_ProjectCategory] PRIMARY KEY CLUSTERED 
(
	[ProjectCategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[ProjectStatusMaster]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ProjectStatusMaster]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ProjectStatusMaster](
	[ProjectStatusMasterId] [bigint] IDENTITY(1,1) NOT NULL,
	[Status] [nvarchar](100) NOT NULL,
	[ColorCode] [nvarchar](50) NOT NULL,
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_ProjectStatusMaster_IsActive]  DEFAULT ((1)),
	[IsDelete] [bit] NOT NULL CONSTRAINT [DF_ProjectStatusMaster_IsDelete]  DEFAULT ((0)),
 CONSTRAINT [PK_ProjectStatusMaster] PRIMARY KEY CLUSTERED 
(
	[ProjectStatusMasterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[TaskAttachment]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TaskAttachment]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[TaskAttachment](
	[TaskAttachmentId] [bigint] IDENTITY(1,1) NOT NULL,
	[TaskMasterId] [bigint] NOT NULL,
	[DisplayName] [nvarchar](500) NOT NULL,
	[FileName] [nvarchar](500) NOT NULL,
	[FileSize] [decimal](18, 0) NOT NULL,
	[IsActive] [bit] NOT NULL,
	[IsDelete] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [nvarchar](128) NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [nvarchar](128) NULL,
 CONSTRAINT [PK_TaskAttachment] PRIMARY KEY CLUSTERED 
(
	[TaskAttachmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[TaskCategory]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TaskCategory]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[TaskCategory](
	[TaskCategoryId] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](500) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[IsActive] [bit] NOT NULL,
	[IsDelete] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [nvarchar](128) NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [nvarchar](128) NULL,
 CONSTRAINT [PK_TaskCategory] PRIMARY KEY CLUSTERED 
(
	[TaskCategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[TaskMaster]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TaskMaster]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[TaskMaster](
	[TaskMasterId] [bigint] NOT NULL,
	[TaskCode] [nvarchar](50) NOT NULL,
	[TaskCategoryId] [bigint] NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[Title] [nvarchar](500) NOT NULL,
	[TaskTypeMasterId] [bigint] NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[AssignyId] [bigint] NOT NULL,
	[ReporterId] [bigint] NOT NULL,
	[PriorityMasterId] [bigint] NOT NULL,
	[TaskStatusMasterId] [bigint] NOT NULL,
	[StartDate] [datetime] NOT NULL,
	[EndDate] [datetime] NULL,
	[EstimateTimeHours] [int] NULL,
	[ActualTimeHours] [int] NULL,
	[CompletionPercentage] [int] NOT NULL,
	[IsActive] [bit] NOT NULL,
	[IsDelete] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [nvarchar](128) NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [nvarchar](128) NULL,
 CONSTRAINT [PK_TaskMaster] PRIMARY KEY CLUSTERED 
(
	[TaskMasterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[TaskStatusMaster]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TaskStatusMaster]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[TaskStatusMaster](
	[TaskStatusMasterId] [bigint] IDENTITY(1,1) NOT NULL,
	[Status] [nvarchar](100) NOT NULL,
	[ColorCode] [nvarchar](50) NOT NULL,
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_TaskStatusMaster_IsActive]  DEFAULT ((1)),
	[IsDelete] [bit] NOT NULL CONSTRAINT [DF_TaskStatusMaster_IsDelete]  DEFAULT ((0)),
 CONSTRAINT [PK_TaskStatusMaster] PRIMARY KEY CLUSTERED 
(
	[TaskStatusMasterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[TaskTypeMaster]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TaskTypeMaster]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[TaskTypeMaster](
	[TaskTypeMasterId] [bigint] IDENTITY(1,1) NOT NULL,
	[Type] [nvarchar](50) NOT NULL,
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_TaskTypeMaster_IsActive]  DEFAULT ((1)),
	[IsDelete] [bit] NOT NULL CONSTRAINT [DF_TaskTypeMaster_IsDelete]  DEFAULT ((0)),
 CONSTRAINT [PK_TaskTypeMaster] PRIMARY KEY CLUSTERED 
(
	[TaskTypeMasterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[TimeTracker]    Script Date: 05-09-2019 04:42:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TimeTracker]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[TimeTracker](
	[TimeTrackerId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserMasterId] [nvarchar](128) NOT NULL,
	[TaskMasterId] [bigint] NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[Hours] [decimal](6, 2) NOT NULL,
	[IsActive] [bit] NOT NULL,
	[IsDelete] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [nvarchar](128) NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [nvarchar](128) NULL,
 CONSTRAINT [PK_TimeTracker] PRIMARY KEY CLUSTERED 
(
	[TimeTrackerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_Activity_IsOnDashboard]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Activity] ADD  CONSTRAINT [DF_Activity_IsOnDashboard]  DEFAULT ((0)) FOR [IsOnDashboard]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_Activity_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Activity] ADD  CONSTRAINT [DF_Activity_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_ChatMaster_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ChatMaster] ADD  CONSTRAINT [DF_ChatMaster_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_CommentMaster_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[CommentMaster] ADD  CONSTRAINT [DF_CommentMaster_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_DependantTask_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[DependantTask] ADD  CONSTRAINT [DF_DependantTask_IsActive]  DEFAULT ((1)) FOR [IsActive]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_DependantTask_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[DependantTask] ADD  CONSTRAINT [DF_DependantTask_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_Project_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Project] ADD  CONSTRAINT [DF_Project_IsActive]  DEFAULT ((1)) FOR [IsActive]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_Project_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Project] ADD  CONSTRAINT [DF_Project_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_ProjectAssigny_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ProjectAssigny] ADD  CONSTRAINT [DF_ProjectAssigny_IsActive]  DEFAULT ((1)) FOR [IsActive]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_ProjectAssigny_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ProjectAssigny] ADD  CONSTRAINT [DF_ProjectAssigny_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_ProjectAttachment_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ProjectAttachment] ADD  CONSTRAINT [DF_ProjectAttachment_IsActive]  DEFAULT ((1)) FOR [IsActive]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_ProjectAttachment_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ProjectAttachment] ADD  CONSTRAINT [DF_ProjectAttachment_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_ProjectCategory_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ProjectCategory] ADD  CONSTRAINT [DF_ProjectCategory_IsActive]  DEFAULT ((1)) FOR [IsActive]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_ProjectCategory_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ProjectCategory] ADD  CONSTRAINT [DF_ProjectCategory_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TaskAttachment_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TaskAttachment] ADD  CONSTRAINT [DF_TaskAttachment_IsActive]  DEFAULT ((1)) FOR [IsActive]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TaskAttachment_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TaskAttachment] ADD  CONSTRAINT [DF_TaskAttachment_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TaskCategory_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TaskCategory] ADD  CONSTRAINT [DF_TaskCategory_IsActive]  DEFAULT ((1)) FOR [IsActive]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TaskCategory_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TaskCategory] ADD  CONSTRAINT [DF_TaskCategory_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TaskMaster_CompletionPercentage]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TaskMaster] ADD  CONSTRAINT [DF_TaskMaster_CompletionPercentage]  DEFAULT ((0)) FOR [CompletionPercentage]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TaskMaster_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TaskMaster] ADD  CONSTRAINT [DF_TaskMaster_IsActive]  DEFAULT ((1)) FOR [IsActive]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TaskMaster_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TaskMaster] ADD  CONSTRAINT [DF_TaskMaster_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TimeTracker_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TimeTracker] ADD  CONSTRAINT [DF_TimeTracker_IsActive]  DEFAULT ((1)) FOR [IsActive]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TimeTracker_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TimeTracker] ADD  CONSTRAINT [DF_TimeTracker_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
END

GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId]') AND parent_object_id = OBJECT_ID(N'[dbo].[AspNetUserClaims]'))
ALTER TABLE [dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId]') AND parent_object_id = OBJECT_ID(N'[dbo].[AspNetUserClaims]'))
ALTER TABLE [dbo].[AspNetUserClaims] CHECK CONSTRAINT [FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId]') AND parent_object_id = OBJECT_ID(N'[dbo].[AspNetUserLogins]'))
ALTER TABLE [dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId]') AND parent_object_id = OBJECT_ID(N'[dbo].[AspNetUserLogins]'))
ALTER TABLE [dbo].[AspNetUserLogins] CHECK CONSTRAINT [FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId]') AND parent_object_id = OBJECT_ID(N'[dbo].[AspNetUserRoles]'))
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId]') AND parent_object_id = OBJECT_ID(N'[dbo].[AspNetUserRoles]'))
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId]') AND parent_object_id = OBJECT_ID(N'[dbo].[AspNetUserRoles]'))
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId]') AND parent_object_id = OBJECT_ID(N'[dbo].[AspNetUserRoles]'))
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId]
GO
