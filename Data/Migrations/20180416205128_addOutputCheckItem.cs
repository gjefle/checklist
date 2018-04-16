using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class addOutputCheckItem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OutputCheckItems",
                columns: table => new
                {
                    Description = table.Column<string>(nullable: true),
                    State = table.Column<string>(nullable: true),
                    OutputCheckItemId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ChecklistId = table.Column<int>(nullable: false),
                    IpAddress = table.Column<string>(nullable: true),
                    Number = table.Column<int>(nullable: false),
                    NormallyHigh = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OutputCheckItems", x => x.OutputCheckItemId);
                    table.ForeignKey(
                        name: "FK_OutputCheckItems_Checklists_ChecklistId",
                        column: x => x.ChecklistId,
                        principalTable: "Checklists",
                        principalColumn: "ChecklistId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OutputCheckItems_ChecklistId",
                table: "OutputCheckItems",
                column: "ChecklistId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OutputCheckItems");
        }
    }
}
