using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace csd.Migrations
{
    public partial class hemoAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "hemodynamics",
                table: "Cardios",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "hemodynamics",
                table: "Cardios");
        }
    }
}
