﻿// <auto-generated />
using System;
using Cardiohelp.data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Cardiohelp.Migrations
{
    [DbContext(typeof(dataContext))]
    [Migration("20200517110329_hemoAdded")]
    partial class hemoAdded
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3");

            modelBuilder.Entity("Cardiohelp.data.Cardio", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("air_circuit")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("cannula_problems")
                        .HasColumnType("INTEGER");

                    b.Property<string>("cassette_id")
                        .HasColumnType("TEXT");

                    b.Property<string>("center_id")
                        .HasColumnType("TEXT");

                    b.Property<bool>("clots")
                        .HasColumnType("INTEGER");

                    b.Property<string>("comment1")
                        .HasColumnType("TEXT");

                    b.Property<string>("comment2")
                        .HasColumnType("TEXT");

                    b.Property<string>("comment3")
                        .HasColumnType("TEXT");

                    b.Property<string>("comment4")
                        .HasColumnType("TEXT");

                    b.Property<string>("comment5")
                        .HasColumnType("TEXT");

                    b.Property<bool>("conn_crack")
                        .HasColumnType("INTEGER");

                    b.Property<string>("contributor_id")
                        .HasColumnType("TEXT");

                    b.Property<bool>("cp")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("cp_ca")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("cp_cp")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("cp_hy")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("cp_in")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("cp_my")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("cp_pda_1")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("cp_pda_2")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("cp_pda_3")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("cp_pda_4")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("cp_ta_1")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("cp_ta_2")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("cp_ta_3")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("date_death_followup")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("death_date")
                        .HasColumnType("TEXT");

                    b.Property<int>("death_date_hours")
                        .HasColumnType("INTEGER");

                    b.Property<int>("death_date_minutes")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("discharge")
                        .HasColumnType("TEXT");

                    b.Property<int>("discharge_hours")
                        .HasColumnType("INTEGER");

                    b.Property<int>("discharge_minutes")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("discharged_alive")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("double_lumen")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("extubation")
                        .HasColumnType("TEXT");

                    b.Property<int>("extubation_hours")
                        .HasColumnType("INTEGER");

                    b.Property<int>("extubation_minutes")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("heat_malf")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("hemo")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("hemo_ca")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("hemo_di")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("hemo_gi")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("hemo_he")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("hemo_su")
                        .HasColumnType("INTEGER");

                    b.Property<byte[]>("hemodynamics")
                        .HasColumnType("BLOB");

                    b.Property<int>("indication")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("infect")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("infect_cu")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("infect_wb")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("last_followup")
                        .HasColumnType("TEXT");

                    b.Property<int>("lldp")
                        .HasColumnType("INTEGER");

                    b.Property<int>("lldp_diam")
                        .HasColumnType("INTEGER");

                    b.Property<int>("lldp_length")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("meta")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("meta_gl_1")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("meta_gl_2")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("meta_hy")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("meta_ph_1")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("meta_ph_2")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("neuro")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("neuro_br")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("neuro_ee")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("neuro_he")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("neuro_in")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("neuro_se")
                        .HasColumnType("INTEGER");

                    b.Property<int>("one_year_followup")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("ox_failure")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("page_1_complete")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("page_2_complete")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("page_3_complete")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("page_4_complete")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("page_5_complete")
                        .HasColumnType("INTEGER");

                    b.Property<int>("patient_age")
                        .HasColumnType("INTEGER");

                    b.Property<int>("patient_gender")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("percutaneous_1")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("percutaneous_2")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("percutaneous_3")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("pulm")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("pulm_pn")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("pulm_pu")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("pump_malf")
                        .HasColumnType("INTEGER");

                    b.Property<string>("reason_cardiac")
                        .HasColumnType("TEXT");

                    b.Property<string>("reason_cns")
                        .HasColumnType("TEXT");

                    b.Property<string>("reason_infection")
                        .HasColumnType("TEXT");

                    b.Property<string>("reason_liver")
                        .HasColumnType("TEXT");

                    b.Property<string>("reason_other")
                        .HasColumnType("TEXT");

                    b.Property<string>("reason_pulmonary")
                        .HasColumnType("TEXT");

                    b.Property<int>("registry_id")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("renal")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("renal_ca")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("renal_cr_1")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("renal_cr_2")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("renal_di")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("renal_he")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_age")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_arrest")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_btt")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_cannulation_site_1")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_cannulation_site_2")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_cannulation_site_3")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_discharge_location")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_fac")
                        .HasColumnType("INTEGER");

                    b.Property<double?>("selected_height")
                        .HasColumnType("REAL");

                    b.Property<int>("selected_intubated")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_length_1")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_length_2")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_length_3")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_reason")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_reason_death")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_repair")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_size_1")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_size_2")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_size_3")
                        .HasColumnType("INTEGER");

                    b.Property<int>("selected_vv_size")
                        .HasColumnType("INTEGER");

                    b.Property<double?>("selected_weight")
                        .HasColumnType("REAL");

                    b.Property<DateTime>("start")
                        .HasColumnType("TEXT");

                    b.Property<int>("start_hour")
                        .HasColumnType("INTEGER");

                    b.Property<int>("start_min")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("stop")
                        .HasColumnType("TEXT");

                    b.Property<int>("stop_hour")
                        .HasColumnType("INTEGER");

                    b.Property<int>("stop_min")
                        .HasColumnType("INTEGER");

                    b.Property<int>("support_mode")
                        .HasColumnType("INTEGER");

                    b.Property<string>("support_mode_other")
                        .HasColumnType("TEXT");

                    b.Property<int>("time_supported")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("tub_rupture")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Cardios");
                });

            modelBuilder.Entity("Cardiohelp.data.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("BLOB");

                    b.Property<string>("active")
                        .HasColumnType("TEXT");

                    b.Property<string>("center_id")
                        .HasColumnType("TEXT");

                    b.Property<string>("contributor_id")
                        .HasColumnType("TEXT");

                    b.Property<string>("deployed_url")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("paid_till")
                        .HasColumnType("TEXT");

                    b.Property<string>("user_role")
                        .HasColumnType("TEXT");

                    b.Property<string>("username")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Cardiohelp.data.hospital", b =>
                {
                    b.Property<int>("center_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("address")
                        .HasColumnType("TEXT");

                    b.Property<string>("city")
                        .HasColumnType("TEXT");

                    b.Property<string>("country")
                        .HasColumnType("TEXT");

                    b.Property<string>("email")
                        .HasColumnType("TEXT");

                    b.Property<string>("fax")
                        .HasColumnType("TEXT");

                    b.Property<string>("name")
                        .HasColumnType("TEXT");

                    b.Property<string>("pobox")
                        .HasColumnType("TEXT");

                    b.Property<string>("street")
                        .HasColumnType("TEXT");

                    b.Property<string>("tel")
                        .HasColumnType("TEXT");

                    b.HasKey("center_id");

                    b.ToTable("Hospitals");
                });
#pragma warning restore 612, 618
        }
    }
}
