using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace talent_management.Migrations
{
    public partial class DatabaseCreation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProjectList",
                columns: table => new
                {
                    ProjectId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Client = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Budget = table.Column<double>(type: "float", nullable: false),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectList", x => x.ProjectId);
                });

            migrationBuilder.CreateTable(
                name: "TalentList",
                columns: table => new
                {
                    TalentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Age = table.Column<int>(type: "int", nullable: false),
                    Race = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TalentList", x => x.TalentId);
                });

            migrationBuilder.CreateTable(
                name: "ProjectTalent",
                columns: table => new
                {
                    ProjectListProjectId = table.Column<int>(type: "int", nullable: false),
                    TalentListTalentId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectTalent", x => new { x.ProjectListProjectId, x.TalentListTalentId });
                    table.ForeignKey(
                        name: "FK_ProjectTalent_ProjectList_ProjectListProjectId",
                        column: x => x.ProjectListProjectId,
                        principalTable: "ProjectList",
                        principalColumn: "ProjectId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProjectTalent_TalentList_TalentListTalentId",
                        column: x => x.TalentListTalentId,
                        principalTable: "TalentList",
                        principalColumn: "TalentId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProjectTalent_TalentListTalentId",
                table: "ProjectTalent",
                column: "TalentListTalentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProjectTalent");

            migrationBuilder.DropTable(
                name: "ProjectList");

            migrationBuilder.DropTable(
                name: "TalentList");
        }
    }
}
