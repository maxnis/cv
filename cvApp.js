var cvApp = angular.module("cvApp", []);

cvApp.controller("cvController", function ($scope) {
    $scope.cv = {
        name: "Maxim Nisenbaum",
        city: "Richmond Hill",
        province: "ON",
        phone: "416-856-9515",
        email: "maxnis@gmail.com",
        objective: "Software engineer with more than 10 years of experience in systems development.",
        summary: {
            description: "Technically sophisticated and highly accomplished .NET developer with a successful track record in systems analysis, design, and business process modelling. Skilled at providing specialized workflow solutions and technical support. Extensive experience of extending enterprise applications to support product profitability and customer retention. Passionate about producing reliable and maintainable code.",
            short: "Software Development / Front-End & Back-End Development / Web & Mobile Applications / Windows and Web Services / Windows Server / IIS"
        },
        techskills: [
            { title: "Languages", icon: "code", text: "C#, VB.NET, T-SQL, LINQ, JavaScript." },
            { title: "Tools", icon: "setting", text: "MS Visual Studio 2008 - 2013, VS-Code, .NET frameworks 4.5-2.0, Nancy Fx, EF." },
            { title: "Databases", icon: "database", text: "MS SQL Server 2005 - 2014, SQLite." },
            { title: "Web development", icon: "world", text: "ASP.NET, ASP.NET.MVC, HTML5, CSS, jQuery, jQueryMobile, Knockout JS, AngularJS, Bootstrap, Telerik Kendo UI." },
            { title: "Source control", icon: "fork", text: "TFS, Git, GitHub." },
            { title: "Exposure to", icon: "lab", text: "AWS, MongoDB, NserviceBus, NodeJS, PowerShell, Linux." }
        ],
        employment: [
            { 
                company: "Jonas Software", address: "Markham, ON, Canada", show: true,
                description: "Jonas Software is a leading provider of enterprise software for the Club Management and Construction and Service industries", 
                url: "http://www.jonasconstruction.com", 
                positions:
                [
                    { 
                        title: "Senior Software Developer", period: "2008 - 08/2016", 
                        dolist: [
                        "Led hybrid mobile HTML5 project using AngularJS and Kendo UI, including mentoring newly hired developers, doing code reviews to improve code quality.", 
                        "Led successfully migration of web-hosted solutions to a new environment, ensuring that no data loss occurred in the process. Project involved both system and SQL Server upgrade and required transferring hundreds of web sites and databases. Developed automation tools to simplify the process of new releases and updates. Developed, automated and documented procedure of creating hosting infrastructure for new customers.",
                        "Led development of multi-tier software containing cross-platform HTML5 mobile responsive web application which utilized websqldb and application cache allowing application to stay functional offline.",
                        "Designed multi-tenant architecture for data-driven web solutions across the company which reduced maintenance cost to a minimum.",
                        "Initiated and completed an internal web based admin dashboard tool used by professional services and technical support. Tool provides features to register and configure customers in the system, test their working modules remotely replacing previous manual procedures - as a result reducing support time and enhancing problem identification.",
                        "Developed business-driven enhancements and defect fixes for an existing range of production systems. Collaborated with teams to improve the performance of systems including websites, web services, windows services, and desktop applications for a leading provider of enterprise management software and related services. Provided technical expertise to create enhancements, code corrections, and develop new functionality on the company's in-house systems. Worked with other developers, analysts and management to complete projects as needed."
                    ]}
                ] 
            },
            {
                company: "BSM Wireless", address: "Woodbridge, ON, Canada", show: true,
                description: "BSM Wireless Inc. designs, manufactures and markets a comprehensive line of Automatic Vehicle Security and Location solutions", 
                url: "http://www.bsmwireless.com", 
                positions: 
                [
                    { 
                        title: "Software Developer", period: "2006 - 2008", 
                        dolist: [
                        "Maintained in-house device diagnostics and provisioning software tools.", 
                        "Developed modules and features for the customer's web portal solution.",
                        "Accomplished various SQL Server development projects as well as development and maintenance of different modules for real-time fleet management web portal."
                    ]}
                ]
            },
            {
                company: "Emka Group Inc.", address: "Asdod Ind. zone, Israel", show: true,
                description: "Emka Group is a direct mail provider and manufacturer of printing paper, envelopes, magnetic cards, etc.", 
                url: "http://www.emkagroup.co.il",
                positions:
                [
                    {
                        title: "Software Engineer", period: "1997 - 2005",
                        dolist: [
                            "Developed numerous data processing projects like merging, sorting, translation and more according to requirements which saved mailing costs and often helped the company to win a tender.",
                            "Built modules for creating Postscript files of variable data for digital printer using Printsoft. Wrote printer side scripts to combine master graphics and data files which minimized significantly RIP time and size of created files.",
                            "Designed and implemented indexing system which replaced existing sorting routine of large data files and saved processing time on x386 computers from hours to minutes allowing to complete and submit projects in time."
                        ]
                    }
                ]
            }
        ],
        education: [
            { title: "Advanced T-SQL for SQL Server 08/12", period: "2014", description: "SolidQ" },
            { title: "Software Engineering Course", period: "1997", description: "Tel-Aviv University, Israel" },
            { title: "M. Eng. in Electrical Engineering", period: "1987", description: "Perm State Technical University, Perm, Russia" }
        ]
    };

});
