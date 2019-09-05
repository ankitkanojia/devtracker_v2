IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId]') AND parent_object_id = OBJECT_ID(N'[dbo].[AspNetUserRoles]'))
ALTER TABLE [dbo].[AspNetUserRoles] DROP CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId]') AND parent_object_id = OBJECT_ID(N'[dbo].[AspNetUserRoles]'))
ALTER TABLE [dbo].[AspNetUserRoles] DROP CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId]') AND parent_object_id = OBJECT_ID(N'[dbo].[AspNetUserLogins]'))
ALTER TABLE [dbo].[AspNetUserLogins] DROP CONSTRAINT [FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId]') AND parent_object_id = OBJECT_ID(N'[dbo].[AspNetUserClaims]'))
ALTER TABLE [dbo].[AspNetUserClaims] DROP CONSTRAINT [FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId]
GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TimeTracker_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TimeTracker] DROP CONSTRAINT [DF_TimeTracker_IsDelete]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TimeTracker_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TimeTracker] DROP CONSTRAINT [DF_TimeTracker_IsActive]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TaskMaster_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TaskMaster] DROP CONSTRAINT [DF_TaskMaster_IsDelete]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TaskMaster_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TaskMaster] DROP CONSTRAINT [DF_TaskMaster_IsActive]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TaskMaster_CompletionPercentage]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TaskMaster] DROP CONSTRAINT [DF_TaskMaster_CompletionPercentage]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TaskCategory_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TaskCategory] DROP CONSTRAINT [DF_TaskCategory_IsDelete]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TaskCategory_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TaskCategory] DROP CONSTRAINT [DF_TaskCategory_IsActive]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TaskAttachment_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TaskAttachment] DROP CONSTRAINT [DF_TaskAttachment_IsDelete]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_TaskAttachment_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[TaskAttachment] DROP CONSTRAINT [DF_TaskAttachment_IsActive]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_ProjectCategory_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ProjectCategory] DROP CONSTRAINT [DF_ProjectCategory_IsDelete]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_ProjectCategory_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ProjectCategory] DROP CONSTRAINT [DF_ProjectCategory_IsActive]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_ProjectAttachment_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ProjectAttachment] DROP CONSTRAINT [DF_ProjectAttachment_IsDelete]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_ProjectAttachment_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ProjectAttachment] DROP CONSTRAINT [DF_ProjectAttachment_IsActive]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_ProjectAssigny_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ProjectAssigny] DROP CONSTRAINT [DF_ProjectAssigny_IsDelete]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_ProjectAssigny_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ProjectAssigny] DROP CONSTRAINT [DF_ProjectAssigny_IsActive]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_Project_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Project] DROP CONSTRAINT [DF_Project_IsDelete]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_Project_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Project] DROP CONSTRAINT [DF_Project_IsActive]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_DependantTask_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[DependantTask] DROP CONSTRAINT [DF_DependantTask_IsDelete]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_DependantTask_IsActive]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[DependantTask] DROP CONSTRAINT [DF_DependantTask_IsActive]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_CommentMaster_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[CommentMaster] DROP CONSTRAINT [DF_CommentMaster_IsDelete]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_ChatMaster_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ChatMaster] DROP CONSTRAINT [DF_ChatMaster_IsDelete]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_Activity_IsDelete]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Activity] DROP CONSTRAINT [DF_Activity_IsDelete]
END

GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_Activity_IsOnDashboard]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Activity] DROP CONSTRAINT [DF_Activity_IsOnDashboard]
END

GO
/****** Object:  Table [dbo].[TimeTracker]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TimeTracker]') AND type in (N'U'))
DROP TABLE [dbo].[TimeTracker]
GO
/****** Object:  Table [dbo].[TaskTypeMaster]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TaskTypeMaster]') AND type in (N'U'))
DROP TABLE [dbo].[TaskTypeMaster]
GO
/****** Object:  Table [dbo].[TaskStatusMaster]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TaskStatusMaster]') AND type in (N'U'))
DROP TABLE [dbo].[TaskStatusMaster]
GO
/****** Object:  Table [dbo].[TaskMaster]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TaskMaster]') AND type in (N'U'))
DROP TABLE [dbo].[TaskMaster]
GO
/****** Object:  Table [dbo].[TaskCategory]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TaskCategory]') AND type in (N'U'))
DROP TABLE [dbo].[TaskCategory]
GO
/****** Object:  Table [dbo].[TaskAttachment]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TaskAttachment]') AND type in (N'U'))
DROP TABLE [dbo].[TaskAttachment]
GO
/****** Object:  Table [dbo].[ProjectStatusMaster]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ProjectStatusMaster]') AND type in (N'U'))
DROP TABLE [dbo].[ProjectStatusMaster]
GO
/****** Object:  Table [dbo].[ProjectCategory]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ProjectCategory]') AND type in (N'U'))
DROP TABLE [dbo].[ProjectCategory]
GO
/****** Object:  Table [dbo].[ProjectAttachment]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ProjectAttachment]') AND type in (N'U'))
DROP TABLE [dbo].[ProjectAttachment]
GO
/****** Object:  Table [dbo].[ProjectAssigny]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ProjectAssigny]') AND type in (N'U'))
DROP TABLE [dbo].[ProjectAssigny]
GO
/****** Object:  Table [dbo].[Project]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Project]') AND type in (N'U'))
DROP TABLE [dbo].[Project]
GO
/****** Object:  Table [dbo].[PriorityMaster]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[PriorityMaster]') AND type in (N'U'))
DROP TABLE [dbo].[PriorityMaster]
GO
/****** Object:  Table [dbo].[Modules]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Modules]') AND type in (N'U'))
DROP TABLE [dbo].[Modules]
GO
/****** Object:  Table [dbo].[Links]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Links]') AND type in (N'U'))
DROP TABLE [dbo].[Links]
GO
/****** Object:  Table [dbo].[EmailTemplete]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[EmailTemplete]') AND type in (N'U'))
DROP TABLE [dbo].[EmailTemplete]
GO
/****** Object:  Table [dbo].[DependantTask]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DependantTask]') AND type in (N'U'))
DROP TABLE [dbo].[DependantTask]
GO
/****** Object:  Table [dbo].[CommentMaster]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CommentMaster]') AND type in (N'U'))
DROP TABLE [dbo].[CommentMaster]
GO
/****** Object:  Table [dbo].[ChatMaster]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ChatMaster]') AND type in (N'U'))
DROP TABLE [dbo].[ChatMaster]
GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[AspNetUsers]') AND type in (N'U'))
DROP TABLE [dbo].[AspNetUsers]
GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[AspNetUserRoles]') AND type in (N'U'))
DROP TABLE [dbo].[AspNetUserRoles]
GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[AspNetUserLogins]') AND type in (N'U'))
DROP TABLE [dbo].[AspNetUserLogins]
GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[AspNetUserClaims]') AND type in (N'U'))
DROP TABLE [dbo].[AspNetUserClaims]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[AspNetRoles]') AND type in (N'U'))
DROP TABLE [dbo].[AspNetRoles]
GO
/****** Object:  Table [dbo].[Activity]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Activity]') AND type in (N'U'))
DROP TABLE [dbo].[Activity]
GO
/****** Object:  Table [dbo].[__MigrationHistory]    Script Date: 05-09-2019 04:35:08 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[__MigrationHistory]') AND type in (N'U'))
DROP TABLE [dbo].[__MigrationHistory]
GO
/****** Object:  Table [dbo].[__MigrationHistory]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[Activity]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[ChatMaster]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[CommentMaster]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[DependantTask]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[EmailTemplete]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[Links]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[Modules]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[PriorityMaster]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[Project]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[ProjectAssigny]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[ProjectAttachment]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[ProjectCategory]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[ProjectStatusMaster]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[TaskAttachment]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[TaskCategory]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[TaskMaster]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[TaskStatusMaster]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[TaskTypeMaster]    Script Date: 05-09-2019 04:35:08 PM ******/
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
/****** Object:  Table [dbo].[TimeTracker]    Script Date: 05-09-2019 04:35:08 PM ******/
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
INSERT [dbo].[__MigrationHistory] ([MigrationId], [ContextKey], [Model], [ProductVersion]) VALUES (N'201909050856531_InitialCreate', N'repository.Models.ApplicationDbContext', 0x1F8B0800000000000400DD5C6D6FE33612FE7EC0FD07419F7A87D44AECEE622F705A649DE42E685E16EB6CD16F0B5AA21D2212A54A5436C1A1BFEC3EF427F52F1CA977BEE9C59265A72850ACC9E133C3E1901C8E66F2E7FFFE98FFF4E2B9C6330C23E4E333F364726C1A10DBBE83F0E6CC8CC9FAFB0FE64F3FFEFD6FF34BC77B317EC9E9668C8E8EC4D199F94848706A5991FD083D104D3C64877EE4AFC9C4F63D0B38BE353D3EFE97757262410A61522CC3987F8E31411E4C7ED09F0B1FDB302031706F7D07BA51D64E7B9609AA71073C1805C086676608033F42C40F5F2729B1699CBB08504196D05D9B06C0D8278050314FBF447049421F6F96016D00EEC36B0029DD1AB811CCC43F2DC9DBCEE478CA6662950373283B8E88EF75043C9965AAB1C4E15B29D82C5447957749954C5ED9AC13059E99D70E4C9A3EFB2E5580C8F074E1868CF8CCBC2D589C47C11D24937CE02485BC0A29DC373F7C9A54118F8CD6E38E0A539A4E8ED97F47C62276491CC2330C631202F7C8F814AF5C64FF0C5F1FFC2788CF6627ABF5ECC3BBF7C099BDFF01CEDE55674AE74AE9B806DAF429F4031852D9E0BA98BF6958FC384B1C580CAB8C49B5426D89EE0AD3B8052F37106FC823DD2FD30FA671855EA093B764C6F50523BA89E82012C6F4E75DECBA60E5C2A2DFAAE5C9FE5FC375FAEEFD205CEFC033DA244B2FF0A71B27A4FBEA337493DEE81105E9F6E2D6FB6B467615FA1EFBCDDB57DAFB75E9C7A1CD26E36B491E40B88184976E6E95C6DBCAA419D4F0669DA31EBE69334965F35692B2096DB313721663EF865CDEDDF26D6D71E74140172F312DA6913A8393EEAA8930F8C828494AC339696B38984EE8AF7C0E5E51F286B390FEB315E77A46F4E71A512BF3C066F7CC964F14BF569DC3F059F85E00F0EB280AFC88FC9DF3B88ECE6D829E8BC97CF4E9C1007067ABFA37C40EDBB73B16F7021078BFFE8842F298F3624D0FC86BB67BEAE9AE7CFFE906E1A79DCBF9F00D1102C351783126D0B9C6A3306307EC055C230C4F46E4351D91D76CE7BC2E3D80DC015CD1165CE823708D420F3A7DF7F7271045D41373FE03A2C7DD1FE6D08E43EA202C09F082DDDF538F3E8677B1B71AE1FCAAF01A6C691EBEF9F46CA3DECE2566A37AE3DDF8F6931F934BECB0A3F50BB1BB9EB405C020E29CDB368CA22B6ACCD059F8312639E03526B3696738B6D1F7FD145CB80079EAB7A0E0CB7ECD49CBF7A09A427A136AC854EFC23A516FFC0DC2ED44CD49F5A2A6148DA266645D456560ED24CD28F58226048D72A65483BDB493151AFEA99DC01EFE5BBBDFF349771654D4B8A42724A46E2A0CE931E67C02CC3FC3E50AB43937F6F15C4B968F31DDFDD38671FA05B8F1D0ACB6DA0DC92130FC6E48600F7F372462D2E66794BCAA5A04A072620ADF8A5E1DDB6ADE738264636F076E9A63331FE70CD06D97F328F26D94EC02C5A7872C70CCCB4F7D38A3398A9CCE468C44D389514347ECCAA32D746EA66854F7F802BA9040838510D8A79905886CE0C86AA413723A0896DFA80AC1CA88342FDC3F259ED4D261C80601F6088AE84E4598C8DB02611B05C06DD49230B2E515C6E65EF0107B2E60C0822698346AA20D7375009A0950F01116A5494373AB6271F586A8F15A756BDEE4C296EB2EC58547B1C906DF59639799FFB613C3ACD7D808C659AF923602683FA6ECC340B3B74A5B03101F2E8766A0C28B4963A0994B358A81F21ADB8381F22A7973069A3E51DBAEBFF05E3D34F3E41FCAE35FEBB5EADA836D72FA3830D34C7D4F3A86D0113094CDF362C53AE10B513CCEA89CD9FB2CCA5C5DD14418F812123E6453FABB4A3FD4AA07118DA80EB034B406D02C0D430292365407E1F2585EAD749917D101368FBBD5C26667BF005BB10119BB9A8E5221D427AD88C6D9EAF551CCACB006C9C85B3D162A380A83100F2F7EE22D94A28BCBCA8A69E30B77F1862B13CB16A346410D9EAB4649F96406D7526E9ACD5A5239645D5CB25E5A12DC278D96F2C90CAEA5CC469B95A4700A3AB805BD54C45FE1036DB63CD251DC3645DFDC4A9354B386B9A5C9669DDF8220407853C96ECD5A8C659ADABAF87ED93DE9D34B312C3B52E47E16D2169C881F820D147A59AE8803AF5018910B40C00AB038CFC2F12432E5DDAA39FE7396D5EB535EC4FC1EC8A9D9BFD31172F21477D5CABE4806714527E831872689A22B965F3DDC60C9C6C005A12270BFF0DDD8C37AFF4A3F3AFD7C571D9FB6C808734B905FF29F2465495E2EAFF956EB22EF8961D6A8F05EB65F273D844EDBB9EF59D5B7CE1FD5A3E4E1A92A8A2E64B5B775D3B9315DD64A7410BB2F5523C26E7655991758C5285BDB23F1897F5534BEA73D6291DD57052B1ADBE370D97B552CAEA33D5E92A157C5491ADA8F2FB3EFB8752B5ADB23E5F977559CBCAD3D0A975E5785E23A3AD8149773C7D915D7D31E914BACAB02721DEDF1F8E4B92A20DFD31E91CB90130FCDA2631BBCA90E6FBA1DDE4C8737EB829765B35591B2A68E1895842809ACD2D7E11CE272D6B87388EBE9700EF18969DC69C4777590B29A7EC60959EDD80A4FA3513545973D28269CF11B51ECEDB01BE5D4336E4BCADD5B602B6416FBDAA32AB2D3AAC08AEE6E3B55BEAACAD683F19B14B184E11CDE3420D6CFE3D560ECC6911AC661AEE4FD708E4AD9DC112BCBEC91C0B2F68334266D54685B634AC3A0FD8C4983A13F77B88419FED8A9CDF2D1637259308283ADCF02D2E37533D99D1A86141312490AEE456C488801CDB3784C73D9B314A049494C235723BDD65F2302BD0923982C7F73172E82EC10CF096E01466B189134F3CB9C1E9F4C85D2E9C32963B6A2C87115F12C5D2D33BF66232471E26710DA8F209453AA7A94FA96A0D2D7AA6BFA3C7A3933FF9B8C3A4D029FEC5F49F391711D7DC1E8B798763C8431347E9753C487297D6C516C5B08FAFB9BA8626DAFF2EB5FBFA6438F8CFB906EA753E35850F436CBCFD7B67692261DDA439AAD2B5EDFEE6E130B4A73E0EF3CF0F28F2ADAB645A3BD0085C2D05E588AE2CF5E789502CF5E386211E70A919E059CBDC45114693AB48924A543DDA054459BBD64531466F6C253155FF6025414580E84371D186F36081E570CA93C9384BB76FBDAC76DB685AAEEB1DF79A4AA6DEC7764CAF58B43E10DA2425D7DE23658DADAC46D0F1875ADE236A269EB1411EE0E265629B67762F2917BF46215D196311C9A44CF8D555EBD4A3EF6EDD94AC560FDDC19A9E0AB03DCA0455DFD1E386FAC586A30C75B510B3518F63EED7EE705508752F3543EF9F75BEA346675534D0ECB5FAAA8E900D2F01569C5FB2F5D1ADBD6749F8F0EBCFEA35B81D281195B76CDEFBF0C696C63D37D5E3A7063EB546C7460B6B6AFFB73CF96D6FA0ADD7BE9909C052D2EABBAB4255D3B6D514BDA9D7EB0A3CFFF158BA4A61E65FA171DD4B9E87575340D0C4B123D537D12BCC858DA38125F89A29E6DB7B966177EED64339A7AB69AD2913ADED9F95FCB3BA3A9E7AD29C8D8475193B224425568D6708ED5656CBFA522266E260D35734D3E6B6D4ECF5BAA591A4429DCEED1E4A6BC9D12A5415432E4D6E9509224A799D0BBB3F237F8E9FD1DA14D09C1FE223F8636776B1634D778EDE797B720514E2244686E21010EBD52CF4382D6C026B49B05A0933F499304F5D8679015FB36751F93202674CAD05BB95CC08B390175FC93BA2B5EE6F97DC07E45434C818A8958E0FE1E7F8C91EB14725F2962421A08E65D64E15EB69684857D37AF05D29D8F5B0265EA2B9CA207E8052E058BEEF112B04FABDD65A3E6770337C07E2D23803A90E685E0D53EBF406013022FCA30CAF1F427B561C77BF9F1FFD89631A68A620000, N'6.2.0-61023')
GO
INSERT [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'44D28071-363B-45F2-8C2A-769AC0B56B4A', N'Owner')
GO
INSERT [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'44D28071-363B-45F2-8C2A-769AC0B56B4B', N'Project Manager')
GO
INSERT [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'44D28071-363B-45F2-8C2A-769AC0B56B4C', N'Team Leader')
GO
INSERT [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'44D28071-363B-45F2-8C2A-769AC0B56B4D', N'User')
GO
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'a6083435-f843-4bb4-8203-00a0de0c75eb', N'44D28071-363B-45F2-8C2A-769AC0B56B4A')
GO
INSERT [dbo].[AspNetUsers] ([Id], [FullName], [ProfileImage], [SkypeId], [CompanyName], [Bio], [IsActive], [Gender], [DateOfBirth], [FacebookLink], [TwitterLink], [LinkedInLink], [UserDefine1], [UserDefine2], [UserDefine3], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'a6083435-f843-4bb4-8203-00a0de0c75eb', N'Hero Hamada', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'admin@gmail.com', 0, N'ALeo+BtArQ0/aIkvaZa6Njpjd2G2oXWS/QfsMWPE/kRfcj5n/bE9Eb09BrOFozvPQQ==', N'a7eec2a0-f322-4e41-9ef5-08242e549de1', NULL, 0, 0, NULL, 1, 0, N'admin@gmail.com')
GO
INSERT [dbo].[EmailTemplete] ([EmailTempleteId], [Name], [Subject], [Body], [HashTag], [FromEmail], [BccEmail], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (1, N'Forgot Password Request', N'Riowebs security - reset your password', N' <style type="text/css">
        img {
            max-width: 100%;
        }

        body {
            -webkit-font-smoothing: antialiased;
            -webkit-text-size-adjust: none;
            width: 100% !important;
            height: 100%;
            line-height: 1.6em;
        }

        body {
            background-color: #f6f6f6;
        }

        @media only screen and (max-width: 640px) {
            body {
                padding: 0 !important;
            }

            h1 {
                font-weight: 800 !important;
                margin: 20px 0 5px !important;
            }

            h2 {
                font-weight: 800 !important;
                margin: 20px 0 5px !important;
            }

            h3 {
                font-weight: 800 !important;
                margin: 20px 0 5px !important;
            }

            h4 {
                font-weight: 800 !important;
                margin: 20px 0 5px !important;
            }

            h1 {
                font-size: 22px !important;
            }

            h2 {
                font-size: 18px !important;
            }

            h3 {
                font-size: 16px !important;
            }

            .container {
                padding: 0 !important;
                width: 100% !important;
            }

            .content {
                padding: 0 !important;
            }

            .content-wrap {
                padding: 10px !important;
            }

            .invoice {
                width: 100% !important;
            }
        }
    </style>

	
    <table class="body-wrap" style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">
        <tr style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
            <td style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
            <td class="container" width="600" style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;" valign="top">
                <div class="content" style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
                    <table class="main" width="100%" cellpadding="0" cellspacing="0" style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;" bgcolor="#fff">
                        <tr style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                            <td class="alert alert-warning" style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 16px; vertical-align: top; color: #fff; font-weight: 500; text-align: center; border-radius: 3px 3px 0 0; background-color: #FF9F00; margin: 0; padding: 20px;" align="center" bgcolor="#FF9F00" valign="top">
                              DevTracker security
                            </td>
                        </tr>
                        <tr style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                            <td class="content-wrap" style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;" valign="top">
                                <table width="100%" cellpadding="0" cellspacing="0" style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                    <tr style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                        <td class="content-block" style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                                            <strong style="font-family: ''Helvetica Neue'', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 18px; margin: 0;">
                                                Hello #name#
                                            </strong> 
                                        </td>
                                    </tr>
                                    <tr style="font-family: ''Helvetica Neue'', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                        <td class="content-block" style="font-family: ''Helvetica Neue'', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                                            It looks like you requested a new password.
                                            <br/>
                                            If that sounds right, you can enter new password by clicking on button below.
                                        </td>
                                    </tr>
                                   
                                    <tr style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                        <td class="content-block" style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                                            <a href="#link#" target="_blank" class="btn-primary" style="font-family: ''Helvetica Neue'', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #348eda; margin: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;">
                                                Reset password
                                            </a>
											
											<br /> <br />
											If above button is not working then cut and paste this URL into your browser.
											<br />
											<a href="#" target="_blank"> #link# </a>
                                        </td>
                                    </tr>
                                    <tr style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                        <td class="content-block" style="font-family: ''Helvetica Neue'', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                                            This link will be valid for the next 12 hours.
                                            <br/> 
                                            <strong>
                                                Thanks for choosing DevTracker.
                                            </strong>
                                           
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table><div class="footer" style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px;">
                        <table width="100%" style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                            <tr style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                <td class="aligncenter content-block" style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; color: #999; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top"><a href="http://www.mailgun.com" style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; color: #999; text-decoration: underline; margin: 0;">Unsubscribe</a> from these alerts.</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </td>
            <td style="font-family: ''Helvetica Neue'',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
        </tr>
    </table>

	', N'#name#, #link#', N'noreply@riowebs.com', NULL, 1, 0, CAST(N'1993-04-16 00:00:00.000' AS DateTime), 1, NULL, NULL)
GO
INSERT [dbo].[EmailTemplete] ([EmailTempleteId], [Name], [Subject], [Body], [HashTag], [FromEmail], [BccEmail], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (2, N'Welcome', N'Welcome to DevTracker', N'<div style="background: #e4e9f0;">
    <div style="margin: 0 auto; max-width: 700px;">
        <table class="" style="width: 100%; font-size: 0px;">
            <tbody>
                <tr>
                    <td style="text-align: center; vertical-align: top; font-size: 0; padding: 20px 0; padding-top: 0px; padding-bottom: 24px;"></td>
                </tr>
            </tbody>
        </table>
    </div>

    <div style="margin: 0 auto; max-width: 700px;">
        <table class="" style="width: 100%; font-size: 0px; background: #d8e2e7;">
            <tbody>
                <tr>
                    <td style="text-align: center; vertical-align: top; font-size: 0; padding: 1px;">
                        <div style="vertical-align: top; display: inline-block; font-size: 13px; text-align: left; width: 100%;">
                            <table style="background: white; width: 100%">
                                <tbody>
                                    <tr>
                                        <td style="font-size: 0; padding: 30px 30px 18px;">
                                            <div style="cursor: auto; color: #000000; font-family: Proxima Nova, Arial, Arial, Helvetica, sans-serif; font-size: 22px; line-height: 22px;">
                                                Welcome to DevTracker
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="font-size: 0; padding: 0 30px 16px;">
                                            <div style="cursor: auto; color: #000000; font-family: Proxima Nova, Arial, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 22px;">
                                                Hey <b>#name#</b>,<br />
                                                Thanks for signing up.
                                                <br />
                                                Your password is #password#
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="font-size: 0; padding: 0 30px 6px;">
                                            <div style="cursor: auto; color: #000000; font-family: Proxima Nova, Arial, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 22px;">
                                                <h2>Technology built to make Technologies!</h2>
                                                <p>
                                                    Got an idea? Not able to connect the dots?
                                                    <br>
                                                    Put it down on DevTracker and keep your mind free from all the hassles. All you need to do is: <br>
                                                    - Set Milestone <br>
                                                    - Categorize your task <br>
                                                    - Manage hours <br>
                                                    - Track the progress <br><br>
                                                    And start thinking for your next idea!
                                                </p>

                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="font-size: 0; padding: 0 30px 30px 30px;">
                                            <div style="cursor: auto; color: #000000; font-family: Proxima Nova, Arial, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 22px;">
                                                -----<br />
                                                Thank you<br />
                                                Team DevTracker
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <table style="width: 100%">
            <tbody>
                <tr>
                    <td style="font-size: 0; padding: 0px;">
                        <div style="cursor: auto; color: #6b7a85; font-family: Proxima Nova, Arial, Arial, Helvetica, sans-serif; font-size: 12px; line-height: 22px; margin-top: 10px; text-align: center;">
                            © 2017 Bird&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;Web app kit by <a href="http://followtechnique.com" target="_blank" style="border-bottom: dotted 1px #b3bac1; text-decoration: none; color: inherit;">FollowTechnique</a>&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;Version - 1.0.0
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>', N'#name#, #password#', N'noreply@riowebs.com', NULL, 1, 0, CAST(N'1993-04-16 00:00:00.000' AS DateTime), 1, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[PriorityMaster] ON 

GO
INSERT [dbo].[PriorityMaster] ([PriorityMasterId], [Name], [ColorCode], [IsActive], [IsDelete]) VALUES (1, N'Blocker', N'#ED5466', 1, 0)
GO
INSERT [dbo].[PriorityMaster] ([PriorityMasterId], [Name], [ColorCode], [IsActive], [IsDelete]) VALUES (2, N'Critical', N'#FFD66A', 1, 0)
GO
INSERT [dbo].[PriorityMaster] ([PriorityMasterId], [Name], [ColorCode], [IsActive], [IsDelete]) VALUES (3, N'Major', N'#00B1E3', 1, 0)
GO
INSERT [dbo].[PriorityMaster] ([PriorityMasterId], [Name], [ColorCode], [IsActive], [IsDelete]) VALUES (4, N'Minor', N'#A2A2A2', 1, 0)
GO
INSERT [dbo].[PriorityMaster] ([PriorityMasterId], [Name], [ColorCode], [IsActive], [IsDelete]) VALUES (5, N'Trivial', N'#5C8A00', 1, 0)
GO
SET IDENTITY_INSERT [dbo].[PriorityMaster] OFF
GO
SET IDENTITY_INSERT [dbo].[ProjectStatusMaster] ON 

GO
INSERT [dbo].[ProjectStatusMaster] ([ProjectStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (1, N'Contract signed not begun', N'#5C8A00', 1, 0)
GO
INSERT [dbo].[ProjectStatusMaster] ([ProjectStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (2, N'On Development', N'#00878A', 1, 0)
GO
INSERT [dbo].[ProjectStatusMaster] ([ProjectStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (3, N'On Hold', N'#636363', 1, 0)
GO
INSERT [dbo].[ProjectStatusMaster] ([ProjectStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (4, N'On Staging', N'#FFD66A', 1, 0)
GO
INSERT [dbo].[ProjectStatusMaster] ([ProjectStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (5, N'On Live', N'#99CCFF', 1, 0)
GO
SET IDENTITY_INSERT [dbo].[ProjectStatusMaster] OFF
GO
SET IDENTITY_INSERT [dbo].[TaskStatusMaster] ON 

GO
INSERT [dbo].[TaskStatusMaster] ([TaskStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (1, N'To Do', N'#A2A2A2', 1, 0)
GO
INSERT [dbo].[TaskStatusMaster] ([TaskStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (2, N'In Progress', N'#00B1E1', 1, 0)
GO
INSERT [dbo].[TaskStatusMaster] ([TaskStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (3, N'QA Review', N'#6BCCB4', 1, 0)
GO
INSERT [dbo].[TaskStatusMaster] ([TaskStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (4, N'PM Review', N'#FFD66A', 1, 0)
GO
INSERT [dbo].[TaskStatusMaster] ([TaskStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (5, N'Client Review', N'#551A8B', 1, 0)
GO
INSERT [dbo].[TaskStatusMaster] ([TaskStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (6, N'Canceled', N'#FFA500', 1, 0)
GO
INSERT [dbo].[TaskStatusMaster] ([TaskStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (7, N'Fixes', N'#ED5466', 1, 0)
GO
INSERT [dbo].[TaskStatusMaster] ([TaskStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (8, N'Will Not Fix', N'#FFA51F', 1, 0)
GO
INSERT [dbo].[TaskStatusMaster] ([TaskStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (9, N'On Hold', N'#636363', 1, 0)
GO
INSERT [dbo].[TaskStatusMaster] ([TaskStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (10, N'Done', N'#5C8A00', 1, 0)
GO
INSERT [dbo].[TaskStatusMaster] ([TaskStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (11, N'Done On Development', N'#91C854', 1, 0)
GO
INSERT [dbo].[TaskStatusMaster] ([TaskStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (12, N'Ready For Staging', N'#74E2A0', 1, 0)
GO
INSERT [dbo].[TaskStatusMaster] ([TaskStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (13, N'Ready For Live', N'#FB4198', 1, 0)
GO
INSERT [dbo].[TaskStatusMaster] ([TaskStatusMasterId], [Status], [ColorCode], [IsActive], [IsDelete]) VALUES (14, N'On Live', N'#0084FF', 1, 0)
GO
SET IDENTITY_INSERT [dbo].[TaskStatusMaster] OFF
GO
SET IDENTITY_INSERT [dbo].[TaskTypeMaster] ON 

GO
INSERT [dbo].[TaskTypeMaster] ([TaskTypeMasterId], [Type], [IsActive], [IsDelete]) VALUES (1, N'New Task', 1, 0)
GO
INSERT [dbo].[TaskTypeMaster] ([TaskTypeMasterId], [Type], [IsActive], [IsDelete]) VALUES (2, N'Bug', 1, 0)
GO
SET IDENTITY_INSERT [dbo].[TaskTypeMaster] OFF
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
