export interface RegistryDetails {

  id : number;
  center_id : string;
  registry_id : number;
  cassette_id : string;
  contributor_id : string;
  patient_age : number;
  patient_gender : number;
  indication : number;
  support_mode : number;
  time_supported : number;
  comment1 : string;
  comment2 : string;
  comment3 : string;
  comment4 : string;
  comment5 : string;
  page_1_complete : boolean;
  page_2_complete : number;
  page_3_complete : number;
  page_4_complete : number;
  page_5_complete : number;
  support_mode_other : string;
  selected_cannulation_site_1 : number;
  selected_cannulation_site_2 : number;
  selected_cannulation_site_3 : number;
  selected_size_1 : number;
  selected_size_2 : number;
  selected_size_3 : number;
  selected_length_1 : number;
  selected_length_2 : number;
  selected_length_3 : number;
  selected_vv_size : number;
  percutaneous_1 : boolean;
  percutaneous_2 : boolean;
  percutaneous_3 : boolean;
  double_lumen : boolean;
  selected_age : number;
  selected_weight : number;
  selected_height : number;
  selected_fac : number;
  selected_intubated : number;
  selected_arrest : number;
  selected_btt : number;
  ox_failure : boolean;
  tub_rupture : boolean;
  pump_malf : boolean;
  heat_malf : boolean;
  clots : boolean;
  air_circuit : boolean;
  conn_crack : boolean;
  cannula_problems : boolean;
  hemo : boolean;
  hemo_gi : boolean;
  hemo_ca : boolean;
  hemo_su : boolean;
  hemo_he : boolean;
  hemo_di : boolean;
  neuro : boolean;
  neuro_br : boolean;
  neuro_se : boolean;
  neuro_ee : boolean;
  neuro_in : boolean;
  neuro_he : boolean;
  renal : boolean;
  renal_cr_1 : boolean;
  renal_cr_2 : boolean;
  renal_di : boolean;
  renal_he : boolean;
  renal_ca : boolean;
  pulm : boolean;
  pulm_pn : boolean;
  pulm_pu : boolean;
  cp : boolean;
  cp_in : boolean;
  cp_my : boolean;
  cp_hy : boolean;
  cp_pda_1 : boolean;
  cp_ta_1 : boolean;
  cp_pda_2 : boolean;
  cp_ta_2 : boolean;
  cp_cp : boolean;
  cp_ca : boolean;
  cp_pda_3 : boolean;
  cp_pda_4 : boolean;
  cp_ta_3 : boolean;
  infect : boolean;
  infect_cu : boolean;
  infect_wb : boolean;
  meta : boolean;
  meta_gl_1 : boolean;
  meta_gl_2 : boolean;
  meta_ph_1 : boolean;
  meta_ph_2 : boolean;
  meta_hy : boolean;
  selected_reason_death : number;
  selected_reason : number;
  reason_cns : string;
  reason_pulmonary : string;
  reason_cardiac : string;
  reason_liver : string;
  reason_infection : string;
  reason_other : string;
  selected_repair : number;
  discharged_alive : boolean;
  selected_discharge_location : number;
  discharge : Date;
  extubation : Date;
  death_date : Date;
  discharge_hours : number;
  extubation_hours : number;
  death_date_hours : number;
  discharge_minutes : number;
  extubation_minutes : number;
  death_date_minutes : number;
  start : Date;
  start_hour : number;
  start_min : number;
  stop : Date;
  stop_hour : number;
  stop_min : number;
  date_death_followup : Date;
  one_year_followup : number;
  last_followup : Date;
  lldp : number;
  lldp_diam : number;
  lldp_length : number;

  }