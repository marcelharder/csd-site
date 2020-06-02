using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace csd.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cardios",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    center_id = table.Column<string>(nullable: true),
                    registry_id = table.Column<int>(nullable: false),
                    cassette_id = table.Column<string>(nullable: true),
                    contributor_id = table.Column<string>(nullable: true),
                    patient_age = table.Column<int>(nullable: false),
                    patient_gender = table.Column<int>(nullable: false),
                    indication = table.Column<int>(nullable: false),
                    support_mode = table.Column<int>(nullable: false),
                    time_supported = table.Column<int>(nullable: false),
                    comment1 = table.Column<string>(nullable: true),
                    comment2 = table.Column<string>(nullable: true),
                    comment3 = table.Column<string>(nullable: true),
                    comment4 = table.Column<string>(nullable: true),
                    comment5 = table.Column<string>(nullable: true),
                    page_1_complete = table.Column<bool>(nullable: false),
                    page_2_complete = table.Column<bool>(nullable: false),
                    page_3_complete = table.Column<bool>(nullable: false),
                    page_4_complete = table.Column<bool>(nullable: false),
                    page_5_complete = table.Column<bool>(nullable: false),
                    support_mode_other = table.Column<string>(nullable: true),
                    selected_cannulation_site_1 = table.Column<int>(nullable: false),
                    selected_cannulation_site_2 = table.Column<int>(nullable: false),
                    selected_cannulation_site_3 = table.Column<int>(nullable: false),
                    selected_size_1 = table.Column<int>(nullable: false),
                    selected_size_2 = table.Column<int>(nullable: false),
                    selected_size_3 = table.Column<int>(nullable: false),
                    selected_length_1 = table.Column<int>(nullable: false),
                    selected_length_2 = table.Column<int>(nullable: false),
                    selected_length_3 = table.Column<int>(nullable: false),
                    selected_vv_size = table.Column<int>(nullable: false),
                    percutaneous_1 = table.Column<bool>(nullable: false),
                    percutaneous_2 = table.Column<bool>(nullable: false),
                    percutaneous_3 = table.Column<bool>(nullable: false),
                    double_lumen = table.Column<bool>(nullable: false),
                    selected_age = table.Column<int>(nullable: false),
                    selected_weight = table.Column<double>(nullable: true),
                    selected_height = table.Column<double>(nullable: true),
                    selected_fac = table.Column<int>(nullable: false),
                    selected_intubated = table.Column<int>(nullable: false),
                    selected_arrest = table.Column<int>(nullable: false),
                    selected_btt = table.Column<int>(nullable: false),
                    ox_failure = table.Column<bool>(nullable: false),
                    tub_rupture = table.Column<bool>(nullable: false),
                    pump_malf = table.Column<bool>(nullable: false),
                    heat_malf = table.Column<bool>(nullable: false),
                    clots = table.Column<bool>(nullable: false),
                    air_circuit = table.Column<bool>(nullable: false),
                    conn_crack = table.Column<bool>(nullable: false),
                    cannula_problems = table.Column<bool>(nullable: false),
                    hemo = table.Column<bool>(nullable: false),
                    hemo_gi = table.Column<bool>(nullable: false),
                    hemo_ca = table.Column<bool>(nullable: false),
                    hemo_su = table.Column<bool>(nullable: false),
                    hemo_he = table.Column<bool>(nullable: false),
                    hemo_di = table.Column<bool>(nullable: false),
                    neuro = table.Column<bool>(nullable: false),
                    neuro_br = table.Column<bool>(nullable: false),
                    neuro_se = table.Column<bool>(nullable: false),
                    neuro_ee = table.Column<bool>(nullable: false),
                    neuro_in = table.Column<bool>(nullable: false),
                    neuro_he = table.Column<bool>(nullable: false),
                    renal = table.Column<bool>(nullable: false),
                    renal_cr_1 = table.Column<bool>(nullable: false),
                    renal_cr_2 = table.Column<bool>(nullable: false),
                    renal_di = table.Column<bool>(nullable: false),
                    renal_he = table.Column<bool>(nullable: false),
                    renal_ca = table.Column<bool>(nullable: false),
                    pulm = table.Column<bool>(nullable: false),
                    pulm_pn = table.Column<bool>(nullable: false),
                    pulm_pu = table.Column<bool>(nullable: false),
                    cp = table.Column<bool>(nullable: false),
                    cp_in = table.Column<bool>(nullable: false),
                    cp_my = table.Column<bool>(nullable: false),
                    cp_hy = table.Column<bool>(nullable: false),
                    cp_pda_1 = table.Column<bool>(nullable: false),
                    cp_ta_1 = table.Column<bool>(nullable: false),
                    cp_pda_2 = table.Column<bool>(nullable: false),
                    cp_ta_2 = table.Column<bool>(nullable: false),
                    cp_cp = table.Column<bool>(nullable: false),
                    cp_ca = table.Column<bool>(nullable: false),
                    cp_pda_3 = table.Column<bool>(nullable: false),
                    cp_pda_4 = table.Column<bool>(nullable: false),
                    cp_ta_3 = table.Column<bool>(nullable: false),
                    infect = table.Column<bool>(nullable: false),
                    infect_cu = table.Column<bool>(nullable: false),
                    infect_wb = table.Column<bool>(nullable: false),
                    meta = table.Column<bool>(nullable: false),
                    meta_gl_1 = table.Column<bool>(nullable: false),
                    meta_gl_2 = table.Column<bool>(nullable: false),
                    meta_ph_1 = table.Column<bool>(nullable: false),
                    meta_ph_2 = table.Column<bool>(nullable: false),
                    meta_hy = table.Column<bool>(nullable: false),
                    selected_reason_death = table.Column<int>(nullable: false),
                    selected_reason = table.Column<int>(nullable: false),
                    reason_cns = table.Column<string>(nullable: true),
                    reason_pulmonary = table.Column<string>(nullable: true),
                    reason_cardiac = table.Column<string>(nullable: true),
                    reason_liver = table.Column<string>(nullable: true),
                    reason_infection = table.Column<string>(nullable: true),
                    reason_other = table.Column<string>(nullable: true),
                    selected_repair = table.Column<int>(nullable: false),
                    discharged_alive = table.Column<bool>(nullable: false),
                    selected_discharge_location = table.Column<int>(nullable: false),
                    discharge = table.Column<DateTime>(nullable: false),
                    extubation = table.Column<DateTime>(nullable: false),
                    death_date = table.Column<DateTime>(nullable: false),
                    discharge_hours = table.Column<int>(nullable: false),
                    extubation_hours = table.Column<int>(nullable: false),
                    death_date_hours = table.Column<int>(nullable: false),
                    discharge_minutes = table.Column<int>(nullable: false),
                    extubation_minutes = table.Column<int>(nullable: false),
                    death_date_minutes = table.Column<int>(nullable: false),
                    start = table.Column<DateTime>(nullable: false),
                    start_hour = table.Column<int>(nullable: false),
                    start_min = table.Column<int>(nullable: false),
                    stop = table.Column<DateTime>(nullable: false),
                    stop_hour = table.Column<int>(nullable: false),
                    stop_min = table.Column<int>(nullable: false),
                    date_death_followup = table.Column<DateTime>(nullable: false),
                    one_year_followup = table.Column<int>(nullable: false),
                    last_followup = table.Column<DateTime>(nullable: false),
                    lldp = table.Column<int>(nullable: false),
                    lldp_diam = table.Column<int>(nullable: false),
                    lldp_length = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cardios", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Hospitals",
                columns: table => new
                {
                    center_id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    name = table.Column<string>(nullable: true),
                    address = table.Column<string>(nullable: true),
                    street = table.Column<string>(nullable: true),
                    city = table.Column<string>(nullable: true),
                    pobox = table.Column<string>(nullable: true),
                    tel = table.Column<string>(nullable: true),
                    fax = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: true),
                    country = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hospitals", x => x.center_id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    deployed_url = table.Column<string>(nullable: true),
                    paid_till = table.Column<DateTime>(nullable: false),
                    username = table.Column<string>(nullable: true),
                    PasswordHash = table.Column<byte[]>(nullable: true),
                    PasswordSalt = table.Column<byte[]>(nullable: true),
                    user_role = table.Column<string>(nullable: true),
                    active = table.Column<string>(nullable: true),
                    contributor_id = table.Column<string>(nullable: true),
                    center_id = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cardios");

            migrationBuilder.DropTable(
                name: "Hospitals");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
