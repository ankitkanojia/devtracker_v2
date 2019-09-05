
/****** Object:  Table [dbo].[Activity]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Activity](
	[ActivityId] [bigint] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[TaskMasterId] [bigint] NULL,
	[ProjectId] [bigint] NULL,
	[IsOnDashboard] [bit] NOT NULL,
	[UserMasterId] [bigint] NOT NULL,
	[IsDelete] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
 CONSTRAINT [PK_Activity] PRIMARY KEY CLUSTERED 
(
	[ActivityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ChatMaster]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChatMaster](
	[ChatMasterId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserMasterId] [bigint] NOT NULL,
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

GO
/****** Object:  Table [dbo].[CommentMaster]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CommentMaster](
	[CommentMasterId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserMasterId] [bigint] NOT NULL,
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

GO
/****** Object:  Table [dbo].[DependantTask]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DependantTask](
	[DependantTaskId] [bigint] IDENTITY(1,1) NOT NULL,
	[TaskMasterId] [bigint] NOT NULL,
	[OnDependTaskMasterId] [bigint] NOT NULL,
	[IsActive] [bit] NOT NULL,
	[IsDelete] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [bigint] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_DependantTask] PRIMARY KEY CLUSTERED 
(
	[DependantTaskId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[EmailTemplete]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
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

GO
/****** Object:  Table [dbo].[Links]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Links](
	[LinkId] [bigint] IDENTITY(1,1) NOT NULL,
	[ModuleId] [bigint] NOT NULL,
	[LinkName] [varchar](50) NOT NULL,
	[Controller] [varchar](50) NOT NULL,
	[Action] [varchar](50) NOT NULL,
	[ViewIndex] [int] NULL,
	[IsDefault] [bit] NOT NULL,
	[IsSingle] [bit] NOT NULL,
	[CreatedById] [bigint] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt] [int] NULL,
	[IsVisible] [bit] NULL,
 CONSTRAINT [PK_Links] PRIMARY KEY CLUSTERED 
(
	[LinkId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Modules]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Modules](
	[ModuleId] [bigint] NOT NULL,
	[ModuleName] [varchar](50) NOT NULL,
	[CssClass] [varchar](100) NOT NULL,
	[ViewIndex] [int] NULL,
	[CreatedById] [bigint] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt] [int] NULL,
 CONSTRAINT [PK_Modules] PRIMARY KEY CLUSTERED 
(
	[ModuleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[PriorityMaster]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
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

GO
/****** Object:  Table [dbo].[Project]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
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
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_Project_IsActive]  DEFAULT ((1)),
	[IsDelete] [bit] NOT NULL CONSTRAINT [DF_Project_IsDelete]  DEFAULT ((0)),
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [bigint] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_Project] PRIMARY KEY CLUSTERED 
(
	[ProjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ProjectAssigny]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProjectAssigny](
	[ProjectAssignyId] [bigint] IDENTITY(1,1) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[AssignyId] [bigint] NOT NULL,
	[WhoAssign] [bigint] NOT NULL,
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_ProjectAssigny_IsActive]  DEFAULT ((1)),
	[IsDelete] [bit] NOT NULL CONSTRAINT [DF_ProjectAssigny_IsDelete]  DEFAULT ((0)),
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [bigint] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_ProjectAssigny] PRIMARY KEY CLUSTERED 
(
	[ProjectAssignyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ProjectAttachment]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProjectAttachment](
	[ProjectAttachmentId] [bigint] IDENTITY(1,1) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[DisplayName] [nvarchar](500) NOT NULL,
	[FileName] [nvarchar](500) NOT NULL,
	[FileSize] [decimal](18, 0) NOT NULL,
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_ProjectAttachment_IsActive]  DEFAULT ((1)),
	[IsDelete] [bit] NOT NULL CONSTRAINT [DF_ProjectAttachment_IsDelete]  DEFAULT ((0)),
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [bigint] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_ProjectAttachment] PRIMARY KEY CLUSTERED 
(
	[ProjectAttachmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ProjectCategory]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProjectCategory](
	[ProjectCategoryId] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](500) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[IsActive] [bit] NOT NULL,
	[IsDelete] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [bigint] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[ProjectCategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ProjectStatusMaster]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProjectStatusMaster](
	[ProjectStatusMasterId] [bigint] NOT NULL,
	[Status] [nvarchar](100) NOT NULL,
	[ColorCode] [nvarchar](50) NOT NULL,
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_StatusMaster_IsActive]  DEFAULT ((1)),
	[IsDelete] [bit] NOT NULL CONSTRAINT [DF_StatusMaster_IsDelete]  DEFAULT ((0)),
 CONSTRAINT [PK_StatusMaster] PRIMARY KEY CLUSTERED 
(
	[ProjectStatusMasterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[RoleMaster]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RoleMaster](
	[RoleMasterId] [bigint] IDENTITY(1,1) NOT NULL,
	[RoleName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_RoleMaster] PRIMARY KEY CLUSTERED 
(
	[RoleMasterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TaskAttachment]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TaskAttachment](
	[TaskAttachmentId] [bigint] IDENTITY(1,1) NOT NULL,
	[TaskMasterId] [bigint] NOT NULL,
	[DisplayName] [nvarchar](500) NOT NULL,
	[FileName] [nvarchar](500) NOT NULL,
	[FileSize] [decimal](18, 0) NOT NULL,
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_TaskAttachment_IsActive]  DEFAULT ((1)),
	[IsDelete] [bit] NOT NULL CONSTRAINT [DF_TaskAttachment_IsDelete]  DEFAULT ((0)),
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [bigint] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_TaskAttachment] PRIMARY KEY CLUSTERED 
(
	[TaskAttachmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TaskCategory]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TaskCategory](
	[TaskCategoryId] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](500) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_TaskCategory_IsActive]  DEFAULT ((1)),
	[IsDelete] [bit] NOT NULL CONSTRAINT [DF_TaskCategory_IsDelete]  DEFAULT ((0)),
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [bigint] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_TaskCategory] PRIMARY KEY CLUSTERED 
(
	[TaskCategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TaskMaster]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TaskMaster](
	[TaskMasterId] [bigint] IDENTITY(1,1) NOT NULL,
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
	[CompletionPercentage] [int] NOT NULL CONSTRAINT [DF_TaskMaster_CompletionPercentage]  DEFAULT ((0)),
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_TaskMaster_IsActive]  DEFAULT ((1)),
	[IsDelete] [bit] NOT NULL CONSTRAINT [DF_TaskMaster_IsDelete]  DEFAULT ((0)),
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [bigint] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_TaskMaster_1] PRIMARY KEY CLUSTERED 
(
	[TaskMasterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TaskStatusMaster]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TaskStatusMaster](
	[TaskStatusMasterId] [bigint] NOT NULL,
	[Status] [nvarchar](100) NOT NULL,
	[ColorCode] [nvarchar](50) NOT NULL,
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_TaskStatusMaster_IsActive]  DEFAULT ((1)),
	[IsDelete] [bit] NOT NULL CONSTRAINT [DF_TaskStatusMaster_IsDelete]  DEFAULT ((0)),
 CONSTRAINT [PK_TaskStatusMaster] PRIMARY KEY CLUSTERED 
(
	[TaskStatusMasterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TaskTypeMaster]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
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

GO
/****** Object:  Table [dbo].[TimeTracker]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TimeTracker](
	[TimeTrackerId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserMasterId] [bigint] NOT NULL,
	[TaskMasterId] [bigint] NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[Hours] [decimal](6, 2) NOT NULL,
	[IsActive] [bit] NOT NULL,
	[IsDelete] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [bigint] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_TimeTracker] PRIMARY KEY CLUSTERED 
(
	[TimeTrackerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UserMaster]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[UserMaster](
	[UserMasterId] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Email] [nvarchar](50) NOT NULL,
	[Hash] [nvarchar](max) NOT NULL,
	[Salt] [varbinary](512) NOT NULL,
	[RoleMasterId] [bigint] NOT NULL,
	[Mobile] [nvarchar](10) NULL,
	[Profile] [nvarchar](255) NULL,
	[CompanyName] [nvarchar](255) NULL,
	[SkypeId] [nvarchar](255) NULL,
	[BirthDate] [datetime] NULL,
	[BioStatus] [nvarchar](500) NULL,
	[GoogleId] [nvarchar](500) NULL,
	[IsTermAccept] [bit] NOT NULL CONSTRAINT [DF_UserMaster_IsTermAccept]  DEFAULT ((1)),
	[IsEmailVerified] [bit] NOT NULL CONSTRAINT [DF_UserMaster_IsEmailVerified]  DEFAULT ((1)),
	[Tokens] [nvarchar](500) NULL,
	[TokensGenerated] [datetime] NULL,
	[FacebookLink] [nvarchar](500) NULL,
	[TwitterLink] [nvarchar](500) NULL,
	[LinkedInLink] [nvarchar](500) NULL,
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_UserMaster_IsActive]  DEFAULT ((1)),
	[IsDelete] [bit] NOT NULL CONSTRAINT [DF_UserMaster_IsDelete]  DEFAULT ((0)),
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [bigint] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedDateInt]  AS ((datepart(year,[UpdatedDate])*(10000)+datepart(month,[UpdatedDate])*(100))+datepart(day,[UpdatedDate])),
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_UserMaster] PRIMARY KEY CLUSTERED 
(
	[UserMasterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[UserRights]    Script Date: 13-07-2017 04:57:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRights](
	[UserRightId] [bigint] IDENTITY(1,1) NOT NULL,
	[RoleMasterId] [bigint] NOT NULL,
	[LinkId] [bigint] NOT NULL,
	[IsAccess] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[CreatedBy] [bigint] NOT NULL,
 CONSTRAINT [PK_UserRights] PRIMARY KEY CLUSTERED 
(
	[UserRightId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

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
SET IDENTITY_INSERT [dbo].[Links] ON 

GO
INSERT [dbo].[Links] ([LinkId], [ModuleId], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedById], [CreatedDate], [CreatedDateInt], [IsVisible]) VALUES (1, 1, N'Dashboard', N'Dashboard', N'Index', 1, 1, 1, 1, CAST(N'1993-04-16 00:00:00.000' AS DateTime), NULL, 1)
GO
INSERT [dbo].[Links] ([LinkId], [ModuleId], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedById], [CreatedDate], [CreatedDateInt], [IsVisible]) VALUES (2, 2, N'Create Project', N'Projects', N'Create', 1, 1, 0, 1, CAST(N'1993-04-16 00:00:00.000' AS DateTime), NULL, 1)
GO
INSERT [dbo].[Links] ([LinkId], [ModuleId], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedById], [CreatedDate], [CreatedDateInt], [IsVisible]) VALUES (3, 2, N'My Projects', N'Projects', N'List', 2, 0, 0, 1, CAST(N'1993-04-16 00:00:00.000' AS DateTime), NULL, 1)
GO
INSERT [dbo].[Links] ([LinkId], [ModuleId], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedById], [CreatedDate], [CreatedDateInt], [IsVisible]) VALUES (4, 2, N'Edit Project', N'Projects', N'Edit', 3, 0, 0, 1, CAST(N'1993-04-16 00:00:00.000' AS DateTime), NULL, 0)
GO
INSERT [dbo].[Links] ([LinkId], [ModuleId], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedById], [CreatedDate], [CreatedDateInt], [IsVisible]) VALUES (5, 3, N'Role Management', N'Role', N'List', 1, 1, 1, 1, CAST(N'1993-04-16 00:00:00.000' AS DateTime), NULL, 1)
GO
INSERT [dbo].[Links] ([LinkId], [ModuleId], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedById], [CreatedDate], [CreatedDateInt], [IsVisible]) VALUES (6, 4, N'Create Task', N'Tasks', N'Create', 1, 1, 0, 1, CAST(N'1993-04-16 00:00:00.000' AS DateTime), NULL, 1)
GO
INSERT [dbo].[Links] ([LinkId], [ModuleId], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedById], [CreatedDate], [CreatedDateInt], [IsVisible]) VALUES (7, 4, N'My Task', N'Tasks', N'Details', 2, 0, 0, 1, CAST(N'1993-04-16 00:00:00.000' AS DateTime), NULL, 1)
GO
INSERT [dbo].[Links] ([LinkId], [ModuleId], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedById], [CreatedDate], [CreatedDateInt], [IsVisible]) VALUES (8, 4, N'Edit Task', N'Tasks', N'Edit', 3, 0, 0, 1, CAST(N'1993-04-16 00:00:00.000' AS DateTime), NULL, 0)
GO
INSERT [dbo].[Links] ([LinkId], [ModuleId], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedById], [CreatedDate], [CreatedDateInt], [IsVisible]) VALUES (9, 5, N'Employee Report', N'Users', N'List', 1, 1, 0, 1, CAST(N'1993-04-16 00:00:00.000' AS DateTime), NULL, 1)
GO
INSERT [dbo].[Links] ([LinkId], [ModuleId], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedById], [CreatedDate], [CreatedDateInt], [IsVisible]) VALUES (10, 5, N'Create Employee', N'Users', N'Create', 2, 0, 0, 1, CAST(N'1993-04-16 00:00:00.000' AS DateTime), NULL, 1)
GO
INSERT [dbo].[Links] ([LinkId], [ModuleId], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedById], [CreatedDate], [CreatedDateInt], [IsVisible]) VALUES (11, 5, N'Change Password', N'Users', N'ChangePassword', 3, 0, 0, 1, CAST(N'1993-04-16 00:00:00.000' AS DateTime), NULL, 1)
GO
INSERT [dbo].[Links] ([LinkId], [ModuleId], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedById], [CreatedDate], [CreatedDateInt], [IsVisible]) VALUES (12, 6, N'Time Tracker', N'Home', N'Maintenance', 1, 0, 1, 1, CAST(N'1993-04-16 00:00:00.000' AS DateTime), NULL, 1)
GO
INSERT [dbo].[Links] ([LinkId], [ModuleId], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedById], [CreatedDate], [CreatedDateInt], [IsVisible]) VALUES (13, 7, N'Email Templete', N'Home', N'Maintenance', 1, 0, 1, 1, CAST(N'1993-04-16 00:00:00.000' AS DateTime), NULL, 1)
GO
SET IDENTITY_INSERT [dbo].[Links] OFF
GO
INSERT [dbo].[Modules] ([ModuleId], [ModuleName], [CssClass], [ViewIndex], [CreatedById], [CreatedDate], [CreatedDateInt]) VALUES (1, N'Dashboard', N'icon-display4', 1, 1, CAST(N'2017-07-04 00:00:00.000' AS DateTime), NULL)
GO
INSERT [dbo].[Modules] ([ModuleId], [ModuleName], [CssClass], [ViewIndex], [CreatedById], [CreatedDate], [CreatedDateInt]) VALUES (2, N'Project', N'icon-briefcase', 2, 1, CAST(N'2017-07-04 00:00:00.000' AS DateTime), NULL)
GO
INSERT [dbo].[Modules] ([ModuleId], [ModuleName], [CssClass], [ViewIndex], [CreatedById], [CreatedDate], [CreatedDateInt]) VALUES (3, N'Role', N'icon-cog52', 3, 1, CAST(N'2017-07-04 00:00:00.000' AS DateTime), NULL)
GO
INSERT [dbo].[Modules] ([ModuleId], [ModuleName], [CssClass], [ViewIndex], [CreatedById], [CreatedDate], [CreatedDateInt]) VALUES (4, N'Task', N'icon-task', 4, 1, CAST(N'2017-07-04 00:00:00.000' AS DateTime), NULL)
GO
INSERT [dbo].[Modules] ([ModuleId], [ModuleName], [CssClass], [ViewIndex], [CreatedById], [CreatedDate], [CreatedDateInt]) VALUES (5, N'Users', N'icon-users2', 5, 1, CAST(N'2017-07-04 00:00:00.000' AS DateTime), NULL)
GO
INSERT [dbo].[Modules] ([ModuleId], [ModuleName], [CssClass], [ViewIndex], [CreatedById], [CreatedDate], [CreatedDateInt]) VALUES (6, N'Time Tracker', N'icon-sort-time-asc', 6, 1, CAST(N'2017-07-04 00:00:00.000' AS DateTime), NULL)
GO
INSERT [dbo].[Modules] ([ModuleId], [ModuleName], [CssClass], [ViewIndex], [CreatedById], [CreatedDate], [CreatedDateInt]) VALUES (7, N'Email Templete', N'icon-envelop', 7, 1, CAST(N'2017-07-04 00:00:00.000' AS DateTime), NULL)
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
SET IDENTITY_INSERT [dbo].[Project] ON 

GO
INSERT [dbo].[Project] ([ProjectId], [TagLine], [Name], [ClientName], [StartDate], [EndDate], [Budget], [BasicDescription], [ConfidentialDescription], [EstimateHours], [TeamMemberCount], [ActualTeamMemberCount], [ProjectStatusMasterId], [LiveURL], [StagingURL], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (1, N'A online shopping system', N'Kids Crown', N'Yogesh Patel', CAST(N'2017-07-12 00:00:00.000' AS DateTime), CAST(N'2017-07-27 00:00:00.000' AS DateTime), CAST(60000.00 AS Decimal(10, 2)), N'<p class="text-size-large">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
<p class="text-size-large">Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis preti<em>um. Integer tincidunt. Cras dapibus. Vivamus e</em>lementum semper nisi. Aenean vulputate eleifend tellus.</p>
<p class="text-size-large">Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. <strong> Curabitur</strong> ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
<p class="text-size-large">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.</p>', N'<p>nko</p>', 600, NULL, NULL, 1, N'http://kidscrown.azurewebsites.net/', NULL, 1, 0, CAST(N'2017-07-12 22:02:16.800' AS DateTime), 1, NULL, NULL)
GO
INSERT [dbo].[Project] ([ProjectId], [TagLine], [Name], [ClientName], [StartDate], [EndDate], [Budget], [BasicDescription], [ConfidentialDescription], [EstimateHours], [TeamMemberCount], [ActualTeamMemberCount], [ProjectStatusMasterId], [LiveURL], [StagingURL], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (2, N'A online banking system', N'Zemulla', N'Joe Smith', CAST(N'2017-07-11 00:00:00.000' AS DateTime), CAST(N'2017-07-19 00:00:00.000' AS DateTime), CAST(90000.00 AS Decimal(10, 2)), N'<div class="row m-t-20">
<div class="col-md-12">
<h4 class="m-b-10 text-semibold">Basic description</h4>
<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<h2>Where can I get some?</h2>
<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don''t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn''t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
</div>
</div>', N'<p>nko</p>', 800, NULL, NULL, 1, N'http://zemulla.azurewebsites.net/', NULL, 1, 0, CAST(N'2017-07-12 22:04:40.610' AS DateTime), 1, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[Project] OFF
GO
SET IDENTITY_INSERT [dbo].[ProjectAssigny] ON 

GO
INSERT [dbo].[ProjectAssigny] ([ProjectAssignyId], [ProjectId], [AssignyId], [WhoAssign], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (1, 1, 2, 1, 0, 0, CAST(N'2017-07-12 22:02:22.107' AS DateTime), 1, NULL, NULL)
GO
INSERT [dbo].[ProjectAssigny] ([ProjectAssignyId], [ProjectId], [AssignyId], [WhoAssign], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (2, 1, 3, 1, 0, 0, CAST(N'2017-07-12 22:02:22.107' AS DateTime), 1, NULL, NULL)
GO
INSERT [dbo].[ProjectAssigny] ([ProjectAssignyId], [ProjectId], [AssignyId], [WhoAssign], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (3, 2, 3, 1, 0, 0, CAST(N'2017-07-12 22:04:40.647' AS DateTime), 1, NULL, NULL)
GO
INSERT [dbo].[ProjectAssigny] ([ProjectAssignyId], [ProjectId], [AssignyId], [WhoAssign], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (4, 2, 4, 1, 0, 0, CAST(N'2017-07-12 22:04:40.647' AS DateTime), 1, NULL, NULL)
GO
INSERT [dbo].[ProjectAssigny] ([ProjectAssignyId], [ProjectId], [AssignyId], [WhoAssign], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (5, 2, 5, 1, 0, 0, CAST(N'2017-07-12 22:04:40.647' AS DateTime), 1, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[ProjectAssigny] OFF
GO
SET IDENTITY_INSERT [dbo].[ProjectAttachment] ON 

GO
INSERT [dbo].[ProjectAttachment] ([ProjectAttachmentId], [ProjectId], [DisplayName], [FileName], [FileSize], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (1, 1, N'Dev Tracker Timeline.pdf', N'b55b7ef7-2a50-4407-8fae-f207e7660abc.pdf', CAST(249 AS Decimal(18, 0)), 0, 0, CAST(N'2017-07-12 22:02:22.130' AS DateTime), 1, NULL, NULL)
GO
INSERT [dbo].[ProjectAttachment] ([ProjectAttachmentId], [ProjectId], [DisplayName], [FileName], [FileSize], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (2, 1, N'DTScript_10072017.sql', N'ffb1007e-4097-4f73-a618-a5f4cd5083d9.sql', CAST(127 AS Decimal(18, 0)), 0, 0, CAST(N'2017-07-12 22:02:22.327' AS DateTime), 1, NULL, NULL)
GO
INSERT [dbo].[ProjectAttachment] ([ProjectAttachmentId], [ProjectId], [DisplayName], [FileName], [FileSize], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (3, 2, N'Dev Tracker Timeline.pdf', N'7ba317be-2b8a-47a2-9b4d-ea2d04d32ac1.pdf', CAST(249 AS Decimal(18, 0)), 0, 0, CAST(N'2017-07-12 22:04:40.697' AS DateTime), 1, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[ProjectAttachment] OFF
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
SET IDENTITY_INSERT [dbo].[RoleMaster] ON 

GO
INSERT [dbo].[RoleMaster] ([RoleMasterId], [RoleName]) VALUES (1, N'Owner')
GO
INSERT [dbo].[RoleMaster] ([RoleMasterId], [RoleName]) VALUES (2, N'Project Manager')
GO
INSERT [dbo].[RoleMaster] ([RoleMasterId], [RoleName]) VALUES (3, N'Team Leader')
GO
INSERT [dbo].[RoleMaster] ([RoleMasterId], [RoleName]) VALUES (4, N'Designer')
GO
SET IDENTITY_INSERT [dbo].[RoleMaster] OFF
GO
SET IDENTITY_INSERT [dbo].[TaskAttachment] ON 

GO
INSERT [dbo].[TaskAttachment] ([TaskAttachmentId], [TaskMasterId], [DisplayName], [FileName], [FileSize], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (1, 1, N'Dev Tracker Timeline.pdf', N'b7238089-c776-4c5c-a878-2e0a33aad135.pdf', CAST(249 AS Decimal(18, 0)), 0, 0, CAST(N'2017-07-12 22:42:12.343' AS DateTime), 1, NULL, NULL)
GO
INSERT [dbo].[TaskAttachment] ([TaskAttachmentId], [TaskMasterId], [DisplayName], [FileName], [FileSize], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (2, 2, N'LinksDocument.txt', N'e0fa75ef-7817-4308-b177-5ebebbd1c4e2.txt', CAST(0 AS Decimal(18, 0)), 0, 0, CAST(N'2017-07-12 22:43:32.877' AS DateTime), 1, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[TaskAttachment] OFF
GO
SET IDENTITY_INSERT [dbo].[TaskCategory] ON 

GO
INSERT [dbo].[TaskCategory] ([TaskCategoryId], [Name], [ProjectId], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (6, N'Mockup Design', 1, 1, 0, CAST(N'1993-04-16 00:00:00.000' AS DateTime), 1, NULL, NULL)
GO
INSERT [dbo].[TaskCategory] ([TaskCategoryId], [Name], [ProjectId], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (7, N'Research and Development', 1, 1, 0, CAST(N'1993-04-16 00:00:00.000' AS DateTime), 1, NULL, NULL)
GO
INSERT [dbo].[TaskCategory] ([TaskCategoryId], [Name], [ProjectId], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (8, N'Logo Design', 1, 1, 0, CAST(N'1993-04-16 00:00:00.000' AS DateTime), 1, NULL, NULL)
GO
INSERT [dbo].[TaskCategory] ([TaskCategoryId], [Name], [ProjectId], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (9, N'Module Implement', 1, 1, 0, CAST(N'1993-04-16 00:00:00.000' AS DateTime), 1, NULL, NULL)
GO
INSERT [dbo].[TaskCategory] ([TaskCategoryId], [Name], [ProjectId], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (11, N'PSD to HTML', 1, 1, 0, CAST(N'1993-04-16 00:00:00.000' AS DateTime), 1, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[TaskCategory] OFF
GO
SET IDENTITY_INSERT [dbo].[TaskMaster] ON 

GO
INSERT [dbo].[TaskMaster] ([TaskMasterId], [TaskCode], [TaskCategoryId], [ProjectId], [Title], [TaskTypeMasterId], [Description], [AssignyId], [ReporterId], [PriorityMasterId], [TaskStatusMasterId], [StartDate], [EndDate], [EstimateTimeHours], [ActualTimeHours], [CompletionPercentage], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (1, N'[KI-6]', 8, 1, N'Create a logo', 1, N'<p class="text-size-large">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
<p class="text-size-large">Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis preti<em>um. Integer tincidunt. Cras dapibus. Vivamus e</em>lementum semper nisi. Aenean vulputate eleifend tellus.</p>
<p class="text-size-large">Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. <strong> Curabitur</strong> ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
<p class="text-size-large">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.</p>', 3, 1, 1, 1, CAST(N'2017-07-11 00:00:00.000' AS DateTime), CAST(N'2017-07-17 00:00:00.000' AS DateTime), 300, NULL, 0, 0, 0, CAST(N'2017-07-12 22:42:05.800' AS DateTime), 1, NULL, NULL)
GO
INSERT [dbo].[TaskMaster] ([TaskMasterId], [TaskCode], [TaskCategoryId], [ProjectId], [Title], [TaskTypeMasterId], [Description], [AssignyId], [ReporterId], [PriorityMasterId], [TaskStatusMasterId], [StartDate], [EndDate], [EstimateTimeHours], [ActualTimeHours], [CompletionPercentage], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (2, N'[ZE-1]', 9, 2, N'Mockup design', 2, N'<p class="text-size-large">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
<p class="text-size-large">Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis preti<em>um. Integer tincidunt. Cras dapibus. Vivamus e</em>lementum semper nisi. Aenean vulputate eleifend tellus.</p>
<p class="text-size-large">Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. <strong> Curabitur</strong> ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
<p class="text-size-large">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.</p>', 4, 4, 3, 3, CAST(N'2017-07-11 00:00:00.000' AS DateTime), CAST(N'2017-07-11 00:00:00.000' AS DateTime), 500, NULL, 0, 0, 0, CAST(N'2017-07-12 22:43:32.020' AS DateTime), 1, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[TaskMaster] OFF
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
SET IDENTITY_INSERT [dbo].[TaskTypeMaster] ON 

GO
INSERT [dbo].[TaskTypeMaster] ([TaskTypeMasterId], [Type], [IsActive], [IsDelete]) VALUES (1, N'New Task', 1, 0)
GO
INSERT [dbo].[TaskTypeMaster] ([TaskTypeMasterId], [Type], [IsActive], [IsDelete]) VALUES (2, N'Bug', 1, 0)
GO
SET IDENTITY_INSERT [dbo].[TaskTypeMaster] OFF
GO
SET IDENTITY_INSERT [dbo].[UserMaster] ON 

GO
INSERT [dbo].[UserMaster] ([UserMasterId], [Name], [Email], [Hash], [Salt], [RoleMasterId], [Mobile], [Profile], [CompanyName], [SkypeId], [BirthDate], [BioStatus], [GoogleId], [IsTermAccept], [IsEmailVerified], [Tokens], [TokensGenerated], [FacebookLink], [TwitterLink], [LinkedInLink], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (1, N'Suchit Khunt', N'khuntsr@gmail.com', N'u+yMMzIzvvbjSqhn/B1kEqP05cJ7PnTPJX/ievv6ifvbKoNZniPJMak8ouwrX0KZRILIFLtlYUl06rmAnmM7WEFcj1gIup7wVaCGWjj6SyvPrNgyZjXdI97decE8/r48', 0x415C8F5808BA9EF055A0865A38FA4B2BCFACD8326635DD23DEDD79C13CFEBE3C, 1, N'9099673090', N'40b08fbe-5425-44a9-9b2f-a353afbe4d10System.Web.HttpPostedFileWrapper.jpg', N'Riowebs', N'khuntsr', NULL, N'If you have more then you need then simple shate it to other', NULL, 1, 1, N'AKR396FVJM5H5EJMVA1LZTPM10W8KX595U8WHEQLBCXKBX11124C5L1R6YCSJ25F', CAST(N'2017-07-02 14:05:16.120' AS DateTime), N'https://www.facebook.com/khuntsr', N'https://twitter.com/khuntsr', NULL, 1, 0, CAST(N'2017-06-30 21:27:04.293' AS DateTime), 0, NULL, NULL)
GO
INSERT [dbo].[UserMaster] ([UserMasterId], [Name], [Email], [Hash], [Salt], [RoleMasterId], [Mobile], [Profile], [CompanyName], [SkypeId], [BirthDate], [BioStatus], [GoogleId], [IsTermAccept], [IsEmailVerified], [Tokens], [TokensGenerated], [FacebookLink], [TwitterLink], [LinkedInLink], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (2, N'Ankit Kanojia', N'ankitkanojia.rs@gmail.com', N'Yaae4ao0qwu3QJuA+t94nsygxt10NbuD/cxjcI6kU/N3xnlsHcb7fj/bUfFeSdDIvcK+Q2Q7dKJ8Jjk3KN4kYUFRhUX8iKoI9P6xHcrD3FoV7u+PqkhkpYu6sr8GYYLG', 0x41518545FC88AA08F4FEB11DCAC3DC5A15EEEF8FAA4864A58BBAB2BF066182C6, 2, N'9904415123', N'ankit.jpg', N'Bay81 Studio', N'ankitrs', NULL, NULL, NULL, 1, 1, N'29IU08XCUBS6SSEFMDE6NP05EB226G1D19JXTVKGWZSHA8HYM8VAQ4MM0OQ9ZPH8', CAST(N'2017-07-08 12:57:59.383' AS DateTime), NULL, NULL, NULL, 0, 0, CAST(N'2017-07-01 14:04:35.850' AS DateTime), 0, NULL, NULL)
GO
INSERT [dbo].[UserMaster] ([UserMasterId], [Name], [Email], [Hash], [Salt], [RoleMasterId], [Mobile], [Profile], [CompanyName], [SkypeId], [BirthDate], [BioStatus], [GoogleId], [IsTermAccept], [IsEmailVerified], [Tokens], [TokensGenerated], [FacebookLink], [TwitterLink], [LinkedInLink], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (3, N'Jasmin Vohra', N'jasmin1993@gmail.com', N'DeA6LE5XKhRzdl3V+C2vd3HGmvqZyfFsg+C23DOl832ZQFn8zH9MnmY/7Zz7STQi7NgS5+I7geB/z+TPBhOi1Cqjxrre468j0a6CCLZIHV9tSYfntsYbDb9lIKHE7Hu6', 0x2AA3C6BADEE3AF23D1AE8208B6481D5F6D4987E7B6C61B0DBF6520A1C4EC7BBA, 3, N'9033501662', N'818cf385-c53c-46cb-8e9a-c19addb966eaSystem.Web.HttpPostedFileWrapper.jpg', N'Riowebs', N'jas93', NULL, NULL, NULL, 1, 1, NULL, NULL, NULL, NULL, NULL, 1, 0, CAST(N'2017-07-02 11:26:12.117' AS DateTime), 0, NULL, NULL)
GO
INSERT [dbo].[UserMaster] ([UserMasterId], [Name], [Email], [Hash], [Salt], [RoleMasterId], [Mobile], [Profile], [CompanyName], [SkypeId], [BirthDate], [BioStatus], [GoogleId], [IsTermAccept], [IsEmailVerified], [Tokens], [TokensGenerated], [FacebookLink], [TwitterLink], [LinkedInLink], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (4, N'Vaibhavi Panchal', N'vaibhavi99@gmail.com', N'xGDf/3q/NOuq+2DTESFp5YklhyitzME5CHzF6OvLZeu0bXVz40NaEq8bRIpsm8s4G+4fVpXRzQyUwo6BoZoYQN+9vF8qHsCELNUIQHpHlLAy6t/HjbNGOYYyOpaP/Z0J', 0xDFBDBC5F2A1EC0842CD508407A4794B032EADFC78DB3463986323A968FFD9D09, 4, N'9055898955', N'0e426b23-0c2a-476c-82ef-5c7730d8d856System.Web.HttpPostedFileWrapper.jpg', N'Bay81 Studio', N'viks921', NULL, NULL, NULL, 1, 1, NULL, NULL, NULL, NULL, NULL, 1, 0, CAST(N'2017-07-02 11:35:29.527' AS DateTime), 0, NULL, NULL)
GO
INSERT [dbo].[UserMaster] ([UserMasterId], [Name], [Email], [Hash], [Salt], [RoleMasterId], [Mobile], [Profile], [CompanyName], [SkypeId], [BirthDate], [BioStatus], [GoogleId], [IsTermAccept], [IsEmailVerified], [Tokens], [TokensGenerated], [FacebookLink], [TwitterLink], [LinkedInLink], [IsActive], [IsDelete], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy]) VALUES (5, N'Sachin Makavana 2', N'sachin_998@yahoo.com', N'tdDQ+SyiRbqWqkMSR9W5SNCVHM/rlQKvSf/Be69pTN8mRUOhXAC5EWOVavJrThDnmnNdUKHHqDaAPQZWaYXvsz80TplrmwQ6wbPGhA+ARqyj1/TVLA9auLUqW1mQTBwr', 0x69B49FB8DBA856558FC8ECDDF9C44493FB3448E914E257C7364BF1B076995515, 4, N'8000232546', NULL, N'Bay81 as d', N'sachinm', NULL, NULL, NULL, 1, 1, NULL, NULL, NULL, NULL, NULL, 1, 0, CAST(N'2017-07-08 13:45:32.860' AS DateTime), 1, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[UserMaster] OFF
GO
SET IDENTITY_INSERT [dbo].[UserRights] ON 

GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (37, 1, 1, 1, CAST(N'2017-07-08 11:28:43.700' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (38, 1, 2, 1, CAST(N'2017-07-08 11:28:43.923' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (39, 1, 3, 1, CAST(N'2017-07-08 11:28:43.930' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (40, 1, 5, 1, CAST(N'2017-07-08 11:28:43.933' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (41, 1, 6, 1, CAST(N'2017-07-08 11:28:43.940' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (42, 1, 7, 1, CAST(N'2017-07-08 11:28:43.953' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (43, 1, 9, 1, CAST(N'2017-07-08 11:28:43.957' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (44, 1, 10, 1, CAST(N'2017-07-08 11:28:43.963' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (45, 1, 11, 1, CAST(N'2017-07-08 11:28:43.967' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (46, 1, 12, 1, CAST(N'2017-07-08 11:28:43.973' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (47, 1, 13, 1, CAST(N'2017-07-08 11:28:43.977' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (48, 2, 1, 1, CAST(N'2017-07-08 11:29:08.270' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (49, 2, 2, 1, CAST(N'2017-07-08 11:29:08.277' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (50, 2, 3, 1, CAST(N'2017-07-08 11:29:08.280' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (51, 2, 5, 1, CAST(N'2017-07-08 11:29:08.283' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (52, 2, 6, 1, CAST(N'2017-07-08 11:29:08.287' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (53, 2, 7, 1, CAST(N'2017-07-08 11:29:08.287' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (54, 2, 9, 1, CAST(N'2017-07-08 11:29:08.290' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (55, 2, 10, 1, CAST(N'2017-07-08 11:29:08.290' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (56, 2, 11, 1, CAST(N'2017-07-08 11:29:08.297' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (57, 2, 12, 1, CAST(N'2017-07-08 11:29:08.297' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (58, 2, 13, 1, CAST(N'2017-07-08 11:29:08.327' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (59, 3, 1, 1, CAST(N'2017-07-08 11:29:30.240' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (60, 3, 3, 1, CAST(N'2017-07-08 11:29:30.243' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (61, 3, 7, 1, CAST(N'2017-07-08 11:29:30.247' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (62, 3, 11, 1, CAST(N'2017-07-08 11:29:30.250' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (63, 3, 12, 1, CAST(N'2017-07-08 11:29:30.253' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (64, 4, 1, 1, CAST(N'2017-07-08 11:29:49.007' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (65, 4, 3, 1, CAST(N'2017-07-08 11:29:49.007' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (66, 4, 7, 1, CAST(N'2017-07-08 11:29:49.143' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (67, 4, 11, 1, CAST(N'2017-07-08 11:29:49.143' AS DateTime), 1)
GO
INSERT [dbo].[UserRights] ([UserRightId], [RoleMasterId], [LinkId], [IsAccess], [CreatedDate], [CreatedBy]) VALUES (68, 4, 12, 1, CAST(N'2017-07-08 11:29:49.147' AS DateTime), 1)
GO
SET IDENTITY_INSERT [dbo].[UserRights] OFF
GO
ALTER TABLE [dbo].[Activity] ADD  CONSTRAINT [DF_Activity_IsOnDashboard]  DEFAULT ((0)) FOR [IsOnDashboard]
GO
ALTER TABLE [dbo].[Activity] ADD  CONSTRAINT [DF_Activity_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
GO
ALTER TABLE [dbo].[ChatMaster] ADD  CONSTRAINT [DF_ChatMaster_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
GO
ALTER TABLE [dbo].[CommentMaster] ADD  CONSTRAINT [DF_CommentMaster_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
GO
ALTER TABLE [dbo].[DependantTask] ADD  CONSTRAINT [DF_DependantTask_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[DependantTask] ADD  CONSTRAINT [DF_DependantTask_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
GO
ALTER TABLE [dbo].[ProjectCategory] ADD  CONSTRAINT [DF_Category_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[ProjectCategory] ADD  CONSTRAINT [DF_Category_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
GO
ALTER TABLE [dbo].[TimeTracker] ADD  CONSTRAINT [DF_TimeTracker_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[TimeTracker] ADD  CONSTRAINT [DF_TimeTracker_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
GO
ALTER TABLE [dbo].[Activity]  WITH CHECK ADD  CONSTRAINT [FK_Activity_UserMaster] FOREIGN KEY([UserMasterId])
REFERENCES [dbo].[UserMaster] ([UserMasterId])
GO
ALTER TABLE [dbo].[Activity] CHECK CONSTRAINT [FK_Activity_UserMaster]
GO
ALTER TABLE [dbo].[ChatMaster]  WITH CHECK ADD  CONSTRAINT [FK_ChatMaster_Project] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Project] ([ProjectId])
GO
ALTER TABLE [dbo].[ChatMaster] CHECK CONSTRAINT [FK_ChatMaster_Project]
GO
ALTER TABLE [dbo].[ChatMaster]  WITH CHECK ADD  CONSTRAINT [FK_ChatMaster_UserMaster] FOREIGN KEY([UserMasterId])
REFERENCES [dbo].[UserMaster] ([UserMasterId])
GO
ALTER TABLE [dbo].[ChatMaster] CHECK CONSTRAINT [FK_ChatMaster_UserMaster]
GO
ALTER TABLE [dbo].[CommentMaster]  WITH CHECK ADD  CONSTRAINT [FK_CommentMaster_Project] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Project] ([ProjectId])
GO
ALTER TABLE [dbo].[CommentMaster] CHECK CONSTRAINT [FK_CommentMaster_Project]
GO
ALTER TABLE [dbo].[CommentMaster]  WITH CHECK ADD  CONSTRAINT [FK_CommentMaster_TaskMaster] FOREIGN KEY([TaskMasterId])
REFERENCES [dbo].[TaskMaster] ([TaskMasterId])
GO
ALTER TABLE [dbo].[CommentMaster] CHECK CONSTRAINT [FK_CommentMaster_TaskMaster]
GO
ALTER TABLE [dbo].[CommentMaster]  WITH CHECK ADD  CONSTRAINT [FK_CommentMaster_UserMaster] FOREIGN KEY([UserMasterId])
REFERENCES [dbo].[UserMaster] ([UserMasterId])
GO
ALTER TABLE [dbo].[CommentMaster] CHECK CONSTRAINT [FK_CommentMaster_UserMaster]
GO
ALTER TABLE [dbo].[DependantTask]  WITH CHECK ADD  CONSTRAINT [FK_DependantTask_TaskMaster] FOREIGN KEY([TaskMasterId])
REFERENCES [dbo].[TaskMaster] ([TaskMasterId])
GO
ALTER TABLE [dbo].[DependantTask] CHECK CONSTRAINT [FK_DependantTask_TaskMaster]
GO
ALTER TABLE [dbo].[DependantTask]  WITH CHECK ADD  CONSTRAINT [FK_DependantTask_TaskMaster1] FOREIGN KEY([OnDependTaskMasterId])
REFERENCES [dbo].[TaskMaster] ([TaskMasterId])
GO
ALTER TABLE [dbo].[DependantTask] CHECK CONSTRAINT [FK_DependantTask_TaskMaster1]
GO
ALTER TABLE [dbo].[DependantTask]  WITH CHECK ADD  CONSTRAINT [FK_DependantTask_UserMaster] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[UserMaster] ([UserMasterId])
GO
ALTER TABLE [dbo].[DependantTask] CHECK CONSTRAINT [FK_DependantTask_UserMaster]
GO
ALTER TABLE [dbo].[Links]  WITH CHECK ADD  CONSTRAINT [FK_Links_Modules] FOREIGN KEY([ModuleId])
REFERENCES [dbo].[Modules] ([ModuleId])
GO
ALTER TABLE [dbo].[Links] CHECK CONSTRAINT [FK_Links_Modules]
GO
ALTER TABLE [dbo].[Project]  WITH CHECK ADD  CONSTRAINT [FK_Project_ProjectStatusMaster] FOREIGN KEY([ProjectStatusMasterId])
REFERENCES [dbo].[ProjectStatusMaster] ([ProjectStatusMasterId])
GO
ALTER TABLE [dbo].[Project] CHECK CONSTRAINT [FK_Project_ProjectStatusMaster]
GO
ALTER TABLE [dbo].[Project]  WITH CHECK ADD  CONSTRAINT [FK_Project_UserMaster] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[UserMaster] ([UserMasterId])
GO
ALTER TABLE [dbo].[Project] CHECK CONSTRAINT [FK_Project_UserMaster]
GO
ALTER TABLE [dbo].[ProjectAssigny]  WITH CHECK ADD  CONSTRAINT [FK_ProjectAssigny_Assigny] FOREIGN KEY([AssignyId])
REFERENCES [dbo].[UserMaster] ([UserMasterId])
GO
ALTER TABLE [dbo].[ProjectAssigny] CHECK CONSTRAINT [FK_ProjectAssigny_Assigny]
GO
ALTER TABLE [dbo].[ProjectAssigny]  WITH CHECK ADD  CONSTRAINT [FK_ProjectAssigny_Created] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[UserMaster] ([UserMasterId])
GO
ALTER TABLE [dbo].[ProjectAssigny] CHECK CONSTRAINT [FK_ProjectAssigny_Created]
GO
ALTER TABLE [dbo].[ProjectAssigny]  WITH CHECK ADD  CONSTRAINT [FK_ProjectAssigny_Project] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Project] ([ProjectId])
GO
ALTER TABLE [dbo].[ProjectAssigny] CHECK CONSTRAINT [FK_ProjectAssigny_Project]
GO
ALTER TABLE [dbo].[ProjectAssigny]  WITH CHECK ADD  CONSTRAINT [FK_ProjectAssigny_WhoAssign] FOREIGN KEY([WhoAssign])
REFERENCES [dbo].[UserMaster] ([UserMasterId])
GO
ALTER TABLE [dbo].[ProjectAssigny] CHECK CONSTRAINT [FK_ProjectAssigny_WhoAssign]
GO
ALTER TABLE [dbo].[ProjectAttachment]  WITH CHECK ADD  CONSTRAINT [FK_ProjectAttachment_Project] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Project] ([ProjectId])
GO
ALTER TABLE [dbo].[ProjectAttachment] CHECK CONSTRAINT [FK_ProjectAttachment_Project]
GO
ALTER TABLE [dbo].[ProjectAttachment]  WITH CHECK ADD  CONSTRAINT [FK_ProjectAttachment_UserMaster] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[UserMaster] ([UserMasterId])
GO
ALTER TABLE [dbo].[ProjectAttachment] CHECK CONSTRAINT [FK_ProjectAttachment_UserMaster]
GO
ALTER TABLE [dbo].[ProjectCategory]  WITH CHECK ADD  CONSTRAINT [FK_Category_UserMaster] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[UserMaster] ([UserMasterId])
GO
ALTER TABLE [dbo].[ProjectCategory] CHECK CONSTRAINT [FK_Category_UserMaster]
GO
ALTER TABLE [dbo].[TaskAttachment]  WITH CHECK ADD  CONSTRAINT [FK_TaskAttachment_TaskMaster] FOREIGN KEY([TaskMasterId])
REFERENCES [dbo].[TaskMaster] ([TaskMasterId])
GO
ALTER TABLE [dbo].[TaskAttachment] CHECK CONSTRAINT [FK_TaskAttachment_TaskMaster]
GO
ALTER TABLE [dbo].[TaskAttachment]  WITH CHECK ADD  CONSTRAINT [FK_TaskAttachment_UserMaster] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[UserMaster] ([UserMasterId])
GO
ALTER TABLE [dbo].[TaskAttachment] CHECK CONSTRAINT [FK_TaskAttachment_UserMaster]
GO
ALTER TABLE [dbo].[TaskCategory]  WITH CHECK ADD  CONSTRAINT [FK_TaskCategory_UserMaster] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[UserMaster] ([UserMasterId])
GO
ALTER TABLE [dbo].[TaskCategory] CHECK CONSTRAINT [FK_TaskCategory_UserMaster]
GO
ALTER TABLE [dbo].[TaskMaster]  WITH CHECK ADD  CONSTRAINT [FK_TaskMaster_Project] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Project] ([ProjectId])
GO
ALTER TABLE [dbo].[TaskMaster] CHECK CONSTRAINT [FK_TaskMaster_Project]
GO
ALTER TABLE [dbo].[TaskMaster]  WITH CHECK ADD  CONSTRAINT [FK_TaskMaster_TaskCategory] FOREIGN KEY([TaskCategoryId])
REFERENCES [dbo].[TaskCategory] ([TaskCategoryId])
GO
ALTER TABLE [dbo].[TaskMaster] CHECK CONSTRAINT [FK_TaskMaster_TaskCategory]
GO
ALTER TABLE [dbo].[TaskMaster]  WITH CHECK ADD  CONSTRAINT [FK_TaskMaster_TaskStatusMaster] FOREIGN KEY([TaskStatusMasterId])
REFERENCES [dbo].[TaskStatusMaster] ([TaskStatusMasterId])
GO
ALTER TABLE [dbo].[TaskMaster] CHECK CONSTRAINT [FK_TaskMaster_TaskStatusMaster]
GO
ALTER TABLE [dbo].[TaskMaster]  WITH CHECK ADD  CONSTRAINT [FK_TaskMaster_UserMaster] FOREIGN KEY([AssignyId])
REFERENCES [dbo].[UserMaster] ([UserMasterId])
GO
ALTER TABLE [dbo].[TaskMaster] CHECK CONSTRAINT [FK_TaskMaster_UserMaster]
GO
ALTER TABLE [dbo].[TaskMaster]  WITH CHECK ADD  CONSTRAINT [FK_TaskMaster_UserMaster1] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[UserMaster] ([UserMasterId])
GO
ALTER TABLE [dbo].[TaskMaster] CHECK CONSTRAINT [FK_TaskMaster_UserMaster1]
GO
ALTER TABLE [dbo].[TimeTracker]  WITH CHECK ADD  CONSTRAINT [FK_TimeTracker_Project] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Project] ([ProjectId])
GO
ALTER TABLE [dbo].[TimeTracker] CHECK CONSTRAINT [FK_TimeTracker_Project]
GO
ALTER TABLE [dbo].[TimeTracker]  WITH CHECK ADD  CONSTRAINT [FK_TimeTracker_TaskMaster] FOREIGN KEY([TaskMasterId])
REFERENCES [dbo].[TaskMaster] ([TaskMasterId])
GO
ALTER TABLE [dbo].[TimeTracker] CHECK CONSTRAINT [FK_TimeTracker_TaskMaster]
GO
ALTER TABLE [dbo].[TimeTracker]  WITH CHECK ADD  CONSTRAINT [FK_TimeTracker_UserMaster] FOREIGN KEY([UserMasterId])
REFERENCES [dbo].[UserMaster] ([UserMasterId])
GO
ALTER TABLE [dbo].[TimeTracker] CHECK CONSTRAINT [FK_TimeTracker_UserMaster]
GO
ALTER TABLE [dbo].[UserMaster]  WITH CHECK ADD  CONSTRAINT [FK_UserMaster_RoleMaster] FOREIGN KEY([RoleMasterId])
REFERENCES [dbo].[RoleMaster] ([RoleMasterId])
GO
ALTER TABLE [dbo].[UserMaster] CHECK CONSTRAINT [FK_UserMaster_RoleMaster]
GO
ALTER TABLE [dbo].[UserRights]  WITH CHECK ADD  CONSTRAINT [FK_UserRights_RoleMaster] FOREIGN KEY([RoleMasterId])
REFERENCES [dbo].[RoleMaster] ([RoleMasterId])
GO
ALTER TABLE [dbo].[UserRights] CHECK CONSTRAINT [FK_UserRights_RoleMaster]
GO
