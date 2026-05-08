const db = [
  {
    id: 1,
    theme: "Limitations",
    question: "What is the maximum wind speed for passenger door operation?",
    options: ["75 kt", "65 kt", "60 kt", "55 kt"],
    correct: 1,
    explanation:
      "FCOM LIM-AG-OPS: Maximum wind speed to operate passenger doors is 65 knots.",
  },
  {
    id: 2,
    theme: "Limitations",
    question: "What is the runway slope limitation for the A320?",
    options: ["± 3%", "± 5%", "± 2%", "± 1%"],
    correct: 2,
    explanation: "FCOM LIM-AG-OPS: The maximum runway slope is ± 2%.",
  },
  {
    id: 3,
    theme: "Limitations",
    question: "What is the maximum operating speed for the windshield wipers?",
    options: ["200 kt", "180 kt", "230 kt", "215 kt"],
    correct: 2,
    explanation: "FCOM LIM-AG-SPD: Wiper operation is limited to 230 kt.",
  },
  {
    id: 4,
    theme: "Limitations",
    question:
      "What is the maximum speed at which the landing gear may be extended (VLO extension)?",
    options: ["200 kt", "250 kt", "220 kt", "280 kt"],
    correct: 1,
    explanation: "FCOM LIM-LG: VLO extension is 250 kt (VLE is 280 kt).",
  },
  {
    id: 5,
    theme: "Limitations",
    question: "What is the maximum speed (VFE) with CONF FULL for the A320?",
    options: ["185 kt", "177 kt", "175 kt", "195 kt"],
    correct: 1,
    explanation: "FCOM LIM-AG-SPD: VFE in CONF FULL is 177 kt.",
  },
  {
    id: 6,
    theme: "Limitations",
    question:
      "What is the maximum indicated airspeed for opening a cockpit window in flight?",
    options: ["200 kt", "250 kt", "220 kt", "195 kt"],
    correct: 0,
    explanation:
      "FCOM LIM-AG-SPD: The maximum speed to open a cockpit window is 200 kt.",
  },
  {
    id: 7,
    theme: "Limitations",
    question: "Maximum reverse thrust should not be used below what airspeed?",
    options: ["60 kt", "70 kt", "100 kt", "80 kt"],
    correct: 1,
    explanation:
      "OM-B Section 2.3.19 Manual Landing requires both reversers levers to be set to IDLE at 70 kt. <br>FCOM PRO-NOR-SRP-01-70: To prevent FOD ingestion and compressor stall, reduce to reverse idle by 70 kt.",
  },
  {
    id: 8,
    theme: "Limitations",
    question:
      "What are the minimum and maximum cabin differential pressure limits?",
    options: [
      "+8.6 to -1 PSI",
      "+8.5 to -1 PSI",
      "+8.5 to -0.4 PSI",
      "+9 to -1 PSI",
    ],
    correct: 3,
    explanation: "FCOM LIM-AIR: Max +9.0 PSI and -1.0 PSI.",
  },
  {
    id: 9,
    theme: "Limitations",
    question:
      "What are the flight maneuvering load acceleration limits for the A320?",
    options: [
      "Clean 0g to 2.5g. Other configurations 0g to 2g",
      "-1 to 2g in all configurations",
      "Clean -1g to 2.5g. Other configurations 0g to 2g",
    ],
    correct: 2,
    explanation:
      "FCOM LIM-AG-F_CTL: Clean configuration is -1g to +2.5g. Slats/flaps extended is 0g to +2.0g.",
  },
  {
    id: 10,
    theme: "Limitations",
    question: "What is the maximum tyre speed?",
    options: ["195 kt", "200 kt", "210 kt", "185 kt"],
    correct: 0,
    explanation: "FCOM LIM-LG: The maximum tyre ground speed is 195 kt.",
  },
  {
    id: 11,
    theme: "Limitations",
    question:
      "Which of the following statements regarding LP ground air limitations is true?",
    options: [
      "LP air and APU bleed must not be used at the same time",
      "Before connecting LP air, PACK 1+2 must be OFF, and X BLEED set to OPEN",
      "LP air can be used to supplement the cooling air from the packs",
      "LP air and the packs must not be used at the same time",
    ],
    correct: 3,
    explanation:
      "FCOM LIM-AIR: Never use LP ground conditioned air simultaneously with the packs.",
  },
  {
    id: 12,
    theme: "Performance / EFB",
    question: "What is the screen height for a wet runway?",
    options: ["10 ft", "25 ft", "15 ft", "30 ft"],
    correct: 2,
    explanation:
      "FCOM EFB-TOF-30-20: The regulatory screen height reduces to 15 ft on a wet runway.",
  },
  {
    id: 13,
    theme: "Performance / EFB",
    question: "What is the screen height for a dry runway?",
    options: ["30 ft", "10 ft", "15 ft", "35 ft"],
    correct: 3,
    explanation:
      "FCOM EFB-TOF-30-10: The standard screen height for a dry runway is 35 ft.",
  },
  {
    id: 14,
    theme: "Performance / EFB",
    question:
      "After a landing performance calculation, Flysmart generates amber figures in the computations area. What does this mean?",
    options: [
      "Single engine performance is not available",
      "Autoland not available",
      "Factored landing distance exceeds available landing distance",
      "Calculated stop point within 300 m of runway end",
    ],
    correct: 2,
    explanation:
      "FCOM EFB-LDG-10: Amber text alerts that factored landing distance exceeds available LDA.",
  },
  {
    id: 15,
    theme: "Performance / EFB",
    question:
      "A 'contaminated runway' describes a surface where a certain percentage of the runway is covered by what depth of contaminant?",
    options: [
      "More than 3 mm",
      "More than 1 mm",
      "More than 7 mm",
      "More than 5 mm",
    ],
    correct: 0,
    explanation:
      "FCOM LIM-AG-OPS: A runway is contaminated when depth exceeds 3 mm.",
  },
  {
    id: 16,
    theme: "Performance / EFB",
    question:
      "In the event of a QNH reduction by 1 hPa on taxi-out, what correction must be applied?",
    options: [
      "Initial calculations cover this change. No action required.",
      "No correction available. Recalculate speeds and flex.",
      "Increase thrust reduction altitude by 500 ft",
      "Subtract one degree from flex",
    ],
    correct: 3,
    explanation:
      "FCOM EFB-TOF-20-20-20: Adjust for 1 hPa drop by reducing Flex Temp by 1°C.",
  },
  {
    id: 17,
    theme: "Performance / EFB",
    question:
      "In the event of a last minute decision to use engine bleed to supply packs, what correction must be applied?",
    options: [
      "Initial calculations cover this change.",
      "No correction available. Recalculate speeds and flex.",
      "Subtract two degrees from flex",
      "Subtract one degree from flex",
    ],
    correct: 1,
    explanation:
      "FCOM EFB-TOF-20-10: Unexpected engine bleed use requires a full performance recalculation.",
  },
  {
    id: 18,
    theme: "Performance / EFB",
    question:
      "What is the correct runway condition in EFB PERF for takeoff if the runway is damp?",
    options: ["Wet", "Dry", "Neither dry nor wet"],
    correct: 0,
    explanation:
      "FCOM EFB-TOF-30-20: A damp runway is considered WET for takeoff performance.<br>⚠️ According to CAE Pelesys, right answer is sometimes 'Dry', sometimes 'Neither'... Good luck!",
  },
  {
    id: 19,
    theme: "Performance / EFB",
    question:
      "For an in-flight landing calculation, what is the maximum crosswind with compacted snow at -10°C?",
    options: ["25 kts", "20 kts", "15 kts", "29 kts"],
    correct: 0,
    explanation:
      "FCOM EFB-LDG-30: Compacted snow at -10°C (RCC 3) allows max 25 knots.",
  },
  {
    id: 20,
    theme: "Performance / EFB",
    question:
      "Where can the 'maximum' acceleration altitude be found on the EFB TO PERF page?",
    options: [
      "Adding 4000ft to acceleration altitudes calculated",
      "Must be manually calculated using FCOM",
      "On the last page of computations",
      "By tapping on the flex temperature",
    ],
    correct: 2,
    explanation:
      "FCOM EFB-TOF-10: Found on the final computations page or under 'MORE'.",
  },
  {
    id: 21,
    theme: "Performance / EFB",
    question:
      "Engine anti-ice must be included in takeoff performance calculation if planned to be used below what altitude?",
    options: ["THR RED", "EOACC", "MSA", "ACC"],
    correct: 1,
    explanation:
      "FCOM EFB-TOF-20-20-20: factors anti-ice if required below EOACC.",
  },
  {
    id: 22,
    theme: "Performance / EFB",
    question:
      "During a flex takeoff, the thrust reduction must not exceed _____ of flat-rated thrust.",
    options: ["25%", "20%", "No restrictions"],
    correct: 0,
    explanation:
      "FCOM EFB-TOF-20-20-20: Flex thrust reduction limit is 25% of maximum thrust.",
  },
  {
    id: 23,
    theme: "Performance / EFB",
    question:
      "What is the standard operating procedure for the EOSID stop altitude?",
    options: ["SID stop altitude", "No procedure specified", "MHA", "MSA"],
    correct: 1,
    explanation:
      "FCOM PRO-NOR-SOP-01-30: EOSID stop altitude is defined by company SOP.",
  },
  {
    id: 24,
    theme: "Performance / EFB",
    question:
      "On the EFB T.O PERF page, how can MEL items be added to assure performance requirements are met?",
    options: [
      "By tapping on the flex temperature",
      "On the last page of computations",
      "Dialog box in bottom left of T.O PERF page",
      "Must be manually calculated",
    ],
    correct: 2,
    explanation:
      "OM-B Section 2.3.4.9 Preliminary Performance Determination states that when the aircraft is dispatched under MEL/CDL deferred items which have an associated performance penalty, these shall be selected in FS+ so that the performance penalties are accounted for in the performance computation.<br>FCOM EFB-TOF-40: Use Aircraft Status (ACFT STS) to input MEL/CDL penalties.",
  },
  {
    id: 25,
    theme: "Performance / EFB",
    question:
      "For sample aircraft G-EZGY, find the minimum control speed at landing – assume sea level, ISA conditions:",
    options: ["113 kt", "116 kt", "110 kt", "114 kt"],
    correct: 0,
    explanation:
      "FCOM EFB-LDG-20: Based on specific VMCL data for the aircraft variant.",
  },
  {
    id: 26,
    theme: "Performance / EFB",
    question:
      "If a runway is wet and NOTAMed 'slippery when wet', what is the correct EFB to PERF input for RWY COND?",
    options: ['WATER 1/4"', "DRY", "ICY", "WET"],
    correct: 0,
    explanation:
      "FCOM PRO-NOR-SOP-01-20: Runway condition is downgraded in EFB for safety.",
  },
  {
    id: 27,
    theme: "Performance / EFB",
    question:
      "In EFB LDG PERF, how do we correctly adjust for a NOTAMed shortening of a runway?",
    options: [
      "Choosing intersection as appropriate",
      "Modify RWY",
      "Adding Vpilot",
      "Operational Quick Reference",
    ],
    correct: 1,
    explanation:
      "FCOM EFB-LDG-10: Use 'MODIFY RWY' to manually adjust TORA/LDA.",
  },
  {
    id: 28,
    theme: "Performance / EFB",
    question:
      "For an in-flight landing calculation, what is the appropriate EFB input for RWY COND with 5 mm of water on the runway?",
    options: ["3-Medium", "2-Medium to Poor", "5-Good", "6-Dry"],
    correct: 1,
    explanation:
      "FCOM EFB-LDG-30: > 3 mm standing water corresponds to RCC 2.<br>⚠️ According to CAE, SOMETIMES it is '3-Medium'.",
  },
  {
    id: 29,
    theme: "Performance / EFB",
    question:
      "For an in-flight landing calculation, what is the appropriate EFB input for RWY COND with 'Wet' runway?",
    options: ["6-Dry", "3-Medium", "4-Good to Medium", "5-Good"],
    correct: 3,
    explanation:
      "FCOM EFB-LDG-30: A standard 'Wet' runway (< 3 mm) has an RCC of 5.",
  },
  {
    id: 30,
    theme: "Performance / EFB",
    question: "OPT CONF selection for takeoff ensures what?",
    options: [
      "Always produces CONF 3 takeoff",
      "The best MTOW is calculated",
      "That the highest V1 is always used",
    ],
    correct: 1,
    explanation:
      "FCOM EFB-TOF-10: Optimum config iteratively calculates the highest MTOW.",
  },
  {
    id: 31,
    theme: "Performance / EFB",
    question: "What is the TREF value for an Airbus A320-214?",
    options: ["ISA+29", "ISA", "ISA+15", "ISA+25"],
    correct: 0,
    explanation:
      "FCOM DSC-70-30-30: Flat rating temperature (TREF) for CFM56-5B4 is ISA+29°C.",
  },
  {
    id: 32,
    theme: "Performance / EFB",
    question:
      "Which of these is an appropriate wind entry for a METAR reading VRB03KT?",
    options: ["TVRB", "TL03", "HD03", "0/0"],
    correct: 1,
    explanation:
      "FCOM PRO-NOR-SOP-01-30: Assume 3-knot tailwind (TL03) for variable winds.",
  },
  {
    id: 33,
    theme: "Performance / EFB",
    question:
      "What are the standard second and final segment gross climb gradients on takeoff?",
    options: ["2.4% and 1.2%", "1% and 2.2%", "2.4% and 4.8%"],
    correct: 0,
    explanation:
      "FCOM EFB-TOF-10: Twin-engine gross climb: 2.4% (2nd) and 1.2% (final).",
  },
  {
    id: 34,
    theme: "Performance / EFB",
    question:
      "On the EFB, how can the GA gradient be modified to ensure compliance?",
    options: [
      "Adding Vpilot",
      "MORE",
      "MODIFY RWY",
      "There is a specific box for GA GRADIENT available on the LDG PERF page",
    ],
    correct: 3,
    explanation:
      "FCOM EFB-LDG-10: GA GRADIENT can be manually entered on LDG PERF page.",
  },
  {
    id: 35,
    theme: "Systems - Elec",
    question:
      "What is the normal order of priority for supplying power to AC BUS 1?",
    options: [
      "APU, EXT PWR, GEN1, then GEN2",
      "GEN1, EXT PWR, APU, then GEN2",
      "EXT PWR, APU, GEN1, then GEN2",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-24-10-30: Priority: On-side Gen > EXT PWR > APU > Off-side Gen.",
  },
  {
    id: 36,
    theme: "Systems - Elec",
    question:
      "Which of the following AC busses can be powered by the emergency generator?",
    options: [
      "AC ESS and AC ESS SHED busses",
      "BAT BUS",
      "AC BUS 1",
      "AC BUS 2",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-24-10-30: EMER GEN powers AC ESS and DC ESS (via ESS TR).",
  },
  {
    id: 37,
    theme: "Systems - Elec",
    question:
      "During a routine flight, which of the following would result after the loss of GEN 2 and the subsequent start of the APU?",
    options: [
      "GEN 1 continues to power AC bus 1. The APU powers AC bus 2.",
      "The APU will power both AC bus 1 and 2.",
      "GEN 1 will power both AC bus 1 and 2. The APU generator will remain in standby.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-24-10-30: Buses split; GEN 1 powers AC BUS 1, APU powers AC BUS 2.",
  },
  {
    id: 38,
    theme: "Systems - Elec",
    question:
      "The aircraft is on the ground with external power plugged into the aircraft, and the APU running. How can the APU generator be connected to the electrical system?",
    options: [
      "By pushing the APU MASTER SW pb-sw",
      "By pushing the EXT PWR pb when the blue ON light is illuminated",
      "By pushing the APU START pb-sw",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-24-10-30: EXT PWR has priority; deselect blue ON light to connect APU.",
  },
  {
    id: 39,
    theme: "Systems - Elec",
    question: "What is the function of the GEN 1 LINE push button?",
    options: [
      "GEN 1 LINE contactor opens. GEN 1 powers all AC busses",
      "GEN 1 LINE contactor opens. GEN 1 remains running and supplies one fuel pump in each wing tank.",
      "GEN 1 LINE contactor opens. GEN 1 remains running and supplies all fuel pumps",
    ],
    correct: 1,
    explanation:
      "FCOM PRO-ABN-SMOKE: Line contactor opens; GEN 1 powers one wing fuel pump directly.",
  },
  {
    id: 40,
    theme: "Systems - Elec",
    question:
      "The MAINT BUS switch is used to supply only ground services. Where is it located?",
    options: [
      "Behind the co-pilot's seat",
      "On the ceiling in the forward galley just outside the flight deck",
      "There is no such switch on the A320",
      "In the overhead panel",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-24-20: Located on forward galley ceiling for maintenance services.",
  },
  {
    id: 41,
    theme: "Systems - Air/Press",
    question: "The Air Conditioning System Controller 1 (ACSC 1):",
    options: [
      "Is the primary controller",
      "Regulates both the cockpit, and the two cabin zone temperatures",
      "Regulates the cockpit temperature",
      "Regulates cockpit, cabin and cargo compartment zone temperatures",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-21-10-20: ACSC 1 manages the cockpit zone and Pack 1.",
  },
  {
    id: 42,
    theme: "Systems - Air/Press",
    question:
      "What impact does a single lane failure of ACSC 2 have on the air conditioning system?",
    options: [
      "There is no impact, loss of redundancy only",
      "Only PACK 2 flow control valve, and cockpit trim valve close",
      "PACK 1 and PACK 2 are automatically set to HIGH flow...",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-21-10-20: ACSC is dual-channel; loss of one triggers automatic switchover.",
  },
  {
    id: 43,
    theme: "Systems - Air/Press",
    question: "What happens if the DITCHING push button is selected ON?",
    options: [
      "A close signal will be sent to the outflow valve, avionics ventilation inlet and extract, emergency ram air valve, and pack flow control valves.",
      "A close signal will be sent to the outflow valve, emergency ram air valve, and pack flow control valves.",
      "A close signal will be sent to the emergency ram air valve, and pack flow control valves.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-21-20-40: Closes all valves below the waterline to seal the aircraft.",
  },
  {
    id: 44,
    theme: "Systems - Air/Press",
    question: "The MIXER Unit is connected to:",
    options: [
      "Packs, re-circulated cabin air, emergency ram air inlet, and LP ground connector",
      "Only the Packs and re-circulated cabin air",
      "Zone controllers",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-21-10-20: Mixer unit aggregates air from packs, cabin, and ram air.",
  },
  {
    id: 45,
    theme: "Systems - Air/Press",
    question: "What will trigger the CAB PR LDG ELEV FAULT (amber) alert?",
    options: [
      "The failure of CPC 1 or 2",
      "The active CPC is no longer receiving the landing field elevation automatically from the FMGS. The flight crew must set the MODE SEL push button to MAN...",
      "The active CPC is no longer receiving the landing field elevation automatically from the FMGS. The flight crew must adjust the target landing elevation using the LDG ELEV rotary knob...",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-21-20-30: Manual landing elevation entry required via rotary knob.",
  },
  {
    id: 46,
    theme: "Systems - Air/Press",
    question:
      "On the ground, which configuration would you expect the avionics ventilation system to select if the OAT is 3°C on an overcast day?",
    options: ["Closed", "Intermediate", "Open"],
    correct: 0,
    explanation:
      "FCOM DSC-21-30-20: 'Closed' circuit selected on ground if temperature < 12°C.",
  },
  {
    id: 47,
    theme: "Auto Flight / FMS",
    question:
      "Which of the following options contains only managed AP / FD modes?",
    options: [
      "NAV, LOC, G/S, RWY, RWY TRK, GA TRK, FPA",
      "NAV, APP NAV, LOC, RWY, RWY TRK, GA TRK",
      "NAV, HDG, LOC, RWY, RWY TRK",
      "NAV, OP CLB, OP DES, LOC, RWY, RWY TRK, GA TRK",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-22-30: Managed modes rely on FMS trajectories or ground beams.",
  },
  {
    id: 48,
    theme: "Auto Flight / FMS",
    question:
      "What happens if the EXPED button is pushed when the FCU selected altitude is above the current altitude?",
    options: [
      "THR CLB (if A/THR active) and OP CLB engage. The speed becomes managed with a target of Green dot, altitude constraints are disregarded.",
      "THR IDLE and OP DES engage...",
      "THR CLB and CLB engage...",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-22-30-40: Expedite Climb aims for max gradient at Green Dot speed.",
  },
  {
    id: 49,
    theme: "Auto Flight / FMS",
    question:
      "What happens if the EXPED button is pushed when the FCU selected altitude is below the current altitude?",
    options: [
      "THR IDLE (if A/THR active) and OP DES engage. The speed becomes managed with a target of 340kt/M0.8, altitude constraints are disregarded.",
      "THR CLB and OP CLB engage...",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-22-30-40: Expedite Descent aims for max sink rate at VMO/MMO.",
  },
  {
    id: 50,
    theme: "Auto Flight / FMS",
    question:
      "What will happen to the flight guidance modes when the altitude knob is pulled on the FCU?",
    options: [
      "OPEN CLIMB or OPEN DESCENT engages depending on the selected altitude.",
      "The current altitude constraint is cancelled",
      "Managed CLB or Managed DES engages",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-22-30-40: Pulling altitude knob engages an OPEN (selected) mode.",
  },
  {
    id: 51,
    theme: "Auto Flight / FMS",
    question:
      "When does the FMGS automatically switch from takeoff to climb phase?",
    options: [
      "When the crew sets the cruise altitude in the FCU",
      "When the thrust levers are moved from FLEX or TOGA to the CLB detent",
      "When the aircraft climbs above acceleration altitude",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-22-20-10-20: Phase transition occurs upon CLB detent selection.",
  },
  {
    id: 52,
    theme: "Auto Flight / FMS",
    question: "What are the basic modes of the AP / FD?",
    options: ["Pitch and roll", "HDG and V/S", "SPD and HDG"],
    correct: 1,
    explanation:
      "FCOM DSC-22-30-10: AP/FD revert to Heading and Vertical Speed.",
  },
  {
    id: 53,
    theme: "Auto Flight / FMS",
    question: "Cost Index = 0 (zero) corresponds to:",
    options: [
      "Best ratio between the flight time cost and the fuel cost",
      "Minimum fuel consumption (maximum range)",
      "Minimum time",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-22-20-10-40: CI 0 gives priority to absolute fuel savings.",
  },
  {
    id: 54,
    theme: "Auto Flight / FMS",
    question: "ALPHA FLOOR is available from:",
    options: [
      "Lift-off until the aircraft reaches 100 ft RA on approach",
      "Slat retraction until landing gear extension",
      "Lift-off until touchdown",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-22-40-30: Alpha Floor active from liftoff down to 100 ft RA.",
  },
  {
    id: 55,
    theme: "Auto Flight / FMS",
    question:
      "Which system/computer provides the reactive windshear detection function?",
    options: ["The weather radar", "ADIRU 1", "FAC"],
    correct: 2,
    explanation:
      "FCOM DSC-22-40-40: Flight Augmentation Computers (FAC) detect windshear.",
  },
  {
    id: 56,
    theme: "Auto Flight / FMS",
    question: "When the ND is set to the PLAN mode, how is the map oriented?",
    options: ["To aircraft heading", "To true north", "To magnetic north"],
    correct: 1,
    explanation:
      "FCOM DSC-34-NAV-10-20: PLAN mode map is always True North Up.",
  },
  {
    id: 57,
    theme: "Auto Flight / FMS",
    question: "What is the standard method for disconnecting the A/THR?",
    options: [
      "The flight crew press the A/THR instinctive disconnect pushbutton, or set both thrust levers to the IDLE detent.",
      "By moving the thrust levers forwards out of the CLB detent",
      "Press the A/THR pb on the FCU",
    ],
    correct: 0,
    explanation:
      "FCOM PRO-NOR-SRP-01-60: Use instinctive disconnect or retard to IDLE.",
  },
  {
    id: 58,
    theme: "Auto Flight / FMS",
    question:
      "After engine start, which MCDU page should be used to modify ZFW and ZFWCG?",
    options: [
      "INIT B",
      "Fuel Prediction page (FUEL PRED)",
      "T.O Performance page (PERF)",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-22-20-10-30: Use FUEL PRED page as INIT B is locked after start.",
  },
  {
    id: 59,
    theme: "Flight Controls",
    question:
      "Which C/Bs have red caps on them to prevent them from being reset?",
    options: ["FMGEC 1 and 2", "WTB's", "ELAC 1"],
    correct: 1,
    explanation:
      "FCOM DSC-27-30-20: Wing Tip Brakes (WTB) C/Bs are red-capped.",
  },
  {
    id: 60,
    theme: "Flight Controls",
    question: "Typically when will direct law be active?",
    options: [
      "Direct law is the flare mode for normal law",
      "Direct law is the flare mode for alternate law. Alternate reconfigures to direct law when the landing gear is extended.",
      "Direct law is only available on the ground",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-27-20-20: Gear extension in Alternate Law triggers Direct Law.",
  },
  {
    id: 61,
    theme: "Flight Controls",
    question: "How many channels does a SFCC have?",
    options: [
      "2 identical channels for redundancy",
      "4 channels: 2 SLAT and 2 FLAP",
      "2 channels: 1 SLAT and 1 FLAP",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-27-30-10: Each SFCC has one Slats and one Flaps channel.",
  },
  {
    id: 62,
    theme: "Flight Controls",
    question:
      "What order is used by the flight control computers when both sidesticks are moved at the same time?",
    options: [
      "The first sidestick that is deflected takes priority",
      "The orders of both sidesticks are algebraically added",
      "The left sidestick takes priority",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-27-20-30: Sidestick inputs are algebraically summed.",
  },
  {
    id: 63,
    theme: "Flight Controls",
    question:
      "After a takeoff in CONF 1+F, what would happen if FLAP 0 is not selected as the aircraft accelerates?",
    options: [
      "The flaps will be overstressed",
      "At 210 kt the flaps will automatically retract changing the config from 1+F to 1. This prevents slat/flap overspeed.",
      "At 210 kt the flaps will automatically retract changing the config to 0.",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-27-20-10-30: Auto-Retract brings flaps up at 210 kt.",
  },
  {
    id: 64,
    theme: "Hydraulics",
    question:
      "When will the blue hydraulic system be pressurized on the ground?",
    options: [
      "When AC power is available",
      "When ENG 1 is running",
      "When AC power is available and at least one engine is running",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-29-10-20: Blue pump starts if AC power and one engine runs.",
  },
  {
    id: 65,
    theme: "Hydraulics",
    question: "When will the PTU pushbutton FAULT (amber) light illuminate?",
    options: [
      "When there is an overheat, low pressure or low fluid level in either green or yellow reservoirs.",
      "When there is a PTU overheat",
      "When the pressure difference exceeds 500 PSI",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-29-20: Fault light protection for reservoir anomalies.",
  },
  {
    id: 66,
    theme: "Powerplant",
    question: "Select the correct statement about an engine in flight:",
    options: [
      "Automatic start is unavailable in flight",
      "During an automatic start in flight, the FADEC may not need to engage the starter motor if the engine is wind milling at sufficient N2.",
      "In flight the FADEC always commands a starter-assisted air start",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-70-80-40: FADEC may air-start without starter if N2 is high.",
  },
  {
    id: 67,
    theme: "Powerplant",
    question:
      "Which hydraulic systems are used to actuate engine reverser doors?",
    options: [
      "GREEN for ENG 1, and YELLOW for ENG 2",
      "BLUE for ENG 1, and GREEN for ENG 2",
      "Each engine has its own independent hydraulic system",
    ],
    correct: 0,
    explanation: "FCOM DSC-70-70: ENG 1 uses Green; ENG 2 uses Yellow system.",
  },
  {
    id: 68,
    theme: "Powerplant",
    question: "What does REV in GREEN on the N1/EPR gauge on the E/WD mean?",
    options: [
      "The thrust reverser is unlocked",
      "The thrust reverser is fully deployed",
      "Reverse thrust has been selected",
    ],
    correct: 1,
    explanation: "FCOM DSC-70-90-40: Green indicates doors are fully deployed.",
  },
  {
    id: 69,
    theme: "Powerplant",
    question: "Select the correct starter limitation for the CFM engines:",
    options: [
      "A 60 minute cooling period is required following 3 consecutive start attempts",
      "A 15 minute cooling period is required following 4 failed start cycles.",
      "A 20 minute cooling period is required following 3 failed start cycles.",
    ],
    correct: 1,
    explanation:
      "FCOM LIM-ENG: 15-minute cooling required after 4 failed cycles.",
  },
  {
    id: 70,
    theme: "Powerplant",
    question:
      "The Engine Interface Unit (EIU) fails. What information does the FADEC lose access to?",
    options: [
      "Master switch, and engine mode selector position",
      "Engine sensors",
      "Thrust lever angle",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-70-20: EIU provides Master SW and Mode selection to FADEC. TLA & Engine sensors are directly fed to the FADEC.",
  },
  {
    id: 71,
    theme: "Fuel",
    question:
      "What does an amber half box around the FOB on the E/WD indicate?",
    options: [
      "The fuel quantity indicated is unreliable",
      "The indicated fuel quantity is less than 1,500 kg",
      "The fuel quantity indicated is inaccurate",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-28-20: Indicates fuel quantity calculation is inaccurate.",
  },
  {
    id: 72,
    theme: "Fuel",
    question:
      "Which of the following statements best describes the operation of the fuel transfer valves?",
    options: [
      "The transfer valve can be used to balance the fuel",
      "When a low fuel level is sensed in an inner tank (c. 750 kg), one transfer valve will open in each wing",
      "The transfer valves will not open until total fuel on board reaches 1,500 kg",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-28-10-80: Low level in inner tank triggers valves in both wings.",
  },
  {
    id: 73,
    theme: "Fuel",
    question: "When does the FUEL L (R) WING TK LO LVL ECAM alert trigger?",
    options: [
      "When the associated inner and outer tank quantity on the same wing is below 750 kg",
      "When the associated inner fuel tank quantity is below 750 kg",
      "When the combined inner and outer tank quantity is below 1,500 kg",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-28-10-80: Triggered when inner tank quantity < 750 kg.",
  },
  {
    id: 74,
    theme: "Fuel",
    question:
      "What do two dashes across the last two digits of the fuel quantity indicator mean?",
    options: [
      "The fuel quantity indicated is inaccurate for one or more tanks. The FUEL SD page can be used to determine which tanks are affected.",
      "The fuel quantity indicated for every tank is inaccurate",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-28-20: Dashes indicate inaccurate data; check FUEL SD page.",
  },
  {
    id: 75,
    theme: "Fuel",
    question: "The cross feed valve (X FEED) is:",
    options: [
      "Controlled by a single motor",
      "Open for takeoff",
      "Normally closed",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-28-10-30: The valve is normally in the closed position.",
  },
  {
    id: 76,
    theme: "ECAM / Displays",
    question:
      "Which of the following statements best describes a level 3 ECAM alert?",
    options: [
      "A steady red master warning light, a red warning message... and a single chime",
      "A flashing red master warning light, a red warning message on the E/WD, automatic call of the relevant system page, and a CRC, specific sound or synthetic voice.",
      "A steady amber master caution light...",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-31-10: Level 3 signifies an emergency with CRC and flashing red.",
  },
  {
    id: 77,
    theme: "ECAM / Displays",
    question: "Regarding ECAM, which of the following statements is true?",
    options: [
      "An amber message on the E/WD is always accompanied by a Master Caution",
      "A Master Caution is always accompanied by an amber message on the E/WD.",
      "Primary failures are identified by a star (*)",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-31-10: Master Caution always occurs with an E/WD identification.",
  },
  {
    id: 78,
    theme: "ECAM / Displays",
    question:
      "If a system page push button fails on the ECAM control panel, can the corresponding system page still be viewed?",
    options: [
      "Yes, the ALL button allows the flight crew to select the desired SD page. This provides redundancy in the case of an ECAM control panel failure.",
      "No, the associated system page is no longer available",
      "Yes, but only if an ECAM alert is triggered",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-31-30: Press and hold 'ALL' to cycle through system pages.",
  },
  {
    id: 79,
    theme: "ECAM / Displays",
    question:
      "If the upper ECAM DU fails, or is switched off, how can a system or status page be displayed for review?",
    options: [
      "Pressing and holding the desired system page push button on the ECP will replace the E/WD with the selected system page. Upon releasing the button, the E/WD will return.",
      "Use the ECAM/ND XFR switch",
      "It cannot be displayed",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-31-05-60: Holding system button temporarily replaces E/WD.",
  },
  {
    id: 80,
    theme: "ECAM / Displays",
    question:
      "Both ECAM screens have failed. Can the E/WD be displayed on any of the remaining display units?",
    options: [
      "Yes, FWD information is automatically transferred to the PFD",
      "Yes, use the ECAM/ND XFR switch on the SWITCHING panel to display the E/WD page on an ND.",
      "No, the flight is lost",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-31-05-40: Use transfer switch to display E/WD on an ND.",
  },
  {
    id: 81,
    theme: "ECAM / Displays",
    question:
      "On the PFD, what causes the indicated barometric altitude to change colour (digital value)?",
    options: [
      "Below MDA for the MDA entered in the MCDU Perf Page. The current altitude digits are steady amber.",
      "At and below 400RA: the current altitude digits are steady amber",
      "Passing 750' to go to FCU altitude: the current altitude digits turn steady amber",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-31-40: Passing below entered MDA turns altitude digits amber.",
  },
  {
    id: 82,
    theme: "Performance / EFB",
    question:
      "If engine anti-ice is planned to be used during takeoff, until reaching which altitude should it be considered to be ON?",
    options: ["MSA", "ACC", "EOACC", "THRRED"],
    correct: 2,
    explanation:
      "FCOM EFB-TOF-20-20-20: anti-ice factored if required below EOACC.",
  },
  {
    id: 83,
    theme: "Performance / EFB",
    question:
      "Which of the following is NOT an SOP while taking off on a contaminated runway?",
    options: [
      "TOGA thrust to be used",
      "CM1 to be PF",
      "Normal takeoff technique to be used",
      "CONF 1 +F must be used for takeoff",
    ],
    correct: 3,
    explanation: "FCOM PRO-NOR-SOP-01-30: Configurations 2 or 3 are preferred.",
  },
  {
    id: 84,
    theme: "Performance / EFB",
    question:
      "On an EFB PERF page, where can the ISA value be located (to calculate TREF for example)?",
    options: [
      "Must be calculated manually",
      "Next to OAT",
      "Next to computed flex temperature",
      "MORE <F10>",
    ],
    correct: 1,
    explanation:
      "FCOM EFB-TOF-10: ISA deviation is displayed next to OAT field.",
  },
  {
    id: 85,
    theme: "Performance / EFB",
    question:
      "In the event of an LMC of 200 kg, what is the appropriate response?",
    options: [
      "Subtract one degree from flex",
      "No correction available. Recalculate speeds and flex.",
      "Initial calculations cover this change. No action required.",
      "Perform a rolling takeoff",
    ],
    correct: 2,
    explanation:
      "FCOM PRO-NOR-SRP-01-15: Minor LMCs within limits require no action.",
  },
  {
    id: 86,
    theme: "Performance / EFB",
    question:
      "In the event of a last-minute decision to use engine anti-ice, what correction must be applied?",
    options: [
      "No correction available. Recalculate speeds and flex.",
      "Subtract five degrees from flex",
      "Initial calculations cover this change. No action required.",
      "Increase thrust reduction altitude by 500 ft",
    ],
    correct: 1,
    explanation:
      "OM-B Section 2.3.10.5 Flex Temperature Corrections states that if Engine A/ICE is subsequently used for take-off, you must subtract 5°C from the Flex temperature. This correction does not require an EFB T/O performance re-computation and can be entered in the MCDU by the PM during taxi.<br>FCOM PRO-NOR-SOP-01-20: Subtract 5°C from Flex if Engine A/ICE is used.",
  },
  {
    id: 87,
    theme: "Performance / EFB",
    question:
      "In the event of a QNH reduction by 2 hPa on taxi-out, what correction must be applied?",
    options: [
      "No correction available. Recalculate speeds and flex.",
      "Initial calculations cover this change. No action required.",
      "Subtract one degree from flex",
      "Subtract two degrees from flex",
    ],
    correct: 2,
    explanation:
      "OM-B: Subtract 1°C/2 hPa. The procedure is to subtract the Flex penalty at the first hectopascal.<br>FCOM PRO-NOR-SOP-01-20: Subtract 1°C from Flex for 2 hPa drop.",
  },
  {
    id: 88,
    theme: "Performance / EFB",
    question:
      "In the event of a QNH reduction by 3 hPa on taxi-out, what correction must be applied?",
    options: [
      "Subtract two degrees from flex",
      "Initial calculations cover this change. No action required.",
      "No correction available. Recalculate speeds and flex.",
      "Subtract one degree from flex",
    ],
    correct: 0,
    explanation:
      "OM-B: Subtract 1°C/2 hPa. The procedure is to subtract the Flex penalty at the first hectopascal.<br>FCOM PRO-NOR-SOP-01-20: Apply Flex penalty at the first hectopascal.",
  },
  {
    id: 89,
    theme: "Performance / EFB",
    question:
      "Where is the correct place to find RWY COND EFB entry for takeoff?",
    options: ["QRH", "OM-B", "OM-A", "EFB MORE app"],
    correct: 3,
    explanation:
      "FCOM EFB-TOF-10: Condition matrices found under EFB 'MORE' menu.",
  },
  {
    id: 90,
    theme: "Performance / EFB",
    question:
      "Where is the correct place to find RWY COND EFB entry in flight for landing?",
    options: ["OM-A", "QRH", "EFB MORE app", "OM-B"],
    correct: 1,
    explanation: "FCOM PRO-ABN-ABN-QRH: evaluative matrices found in the QRH.",
  },
  {
    id: 91,
    theme: "Performance / EFB",
    question: "Under which conditions must engine anti-ice be used?",
    options: [
      "With rain falling",
      "OAT 0°C or below and visible moisture",
      "OAT 5°C or below and visible moisture",
      "OAT 10°C or below and visible moisture",
    ],
    correct: 3,
    explanation:
      "OM-B Section 2.3.9.1 After Start states to turn on engine anti-ice during all ground operation, when icing conditions exist or are anticipated.<br>FCOM PRO-NOR-SRP-01-15: Use when OAT/TAT <= 10°C with visible moisture.",
  },
  {
    id: 92,
    theme: "Performance / EFB",
    question: "What is considered to be a 'forward' CG at takeoff?",
    options: [
      "less than 30%",
      "less than or equal to 27%",
      "less than 27%",
      "less than or equal to 30%",
    ],
    correct: 2,
    explanation: "CAE Pelesys says it's not 'less than 30%'",
  },
  {
    id: 93,
    theme: "Performance / EFB",
    question: "What is considered to be a 'standard' CG at takeoff?",
    options: [
      "More than 27%",
      "More than or equal to 27%",
      "More than 30%",
      "More than or equal to 30%",
    ],
    correct: 1,
    explanation:
      "⚠️ Need a reference but CAE Pelesys says it's not 'more than 27%' nor 'more than or equal to 30%'...",
  },
  {
    id: 94,
    theme: "Performance / EFB",
    question:
      "Which of these statements is NOT true regarding a CONF 1 +F takeoff instead of other configurations?",
    options: [
      "Takeoff run is longer",
      "It produces the best climb gradient",
      "Climb gradient is reduced",
    ],
    correct: 2,
    explanation: "FCOM DSC-27-20-10: CONF 1+F produces best climb gradient.",
  },
  {
    id: 95,
    theme: "Performance / EFB",
    question: "When is a rolling takeoff not permitted due to performance?",
    options: [
      "A TOGA takeoff",
      "A TOGA takeoff with a RWY or OBS limit code",
      "When RWY or OBS is the performance limit code",
      "Flex falls below TREF",
    ],
    correct: 1,
    explanation:
      "FCOM PRO-NOR-SOP-01-30: Standing start required if limited by RWY/OBS.",
  },
  {
    id: 96,
    theme: "Performance / EFB",
    question:
      "If departing from an intersection with a longer TORA than planned, what is required?",
    options: [
      "Recalculation of takeoff performance",
      "TOGA takeoff performed",
      "No action required",
      "Derate removed",
    ],
    correct: 2,
    explanation:
      "OM-B Section 2.3.7 Before Pushback or Start states that takeoff from a less limiting (longer) takeoff position than that computed is acceptable without further modification.<br>FCOM PRO-NOR-SRP-01-15: Takeoff from longer position is acceptable.",
  },
  {
    id: 97,
    theme: "Performance / EFB",
    question: "If following an EOSID, what obstacle clearance is guaranteed?",
    options: [
      "None",
      "Above 1,500 ft, a radius of 30 NM is surveyed for limiting obstacles",
      "Above 1,000 ft, a radius of 20 NM is surveyed for limiting obstacles",
      "As per MSA only",
    ],
    correct: 1,
    explanation: "FCOM DSC-22-10-50: EOSID surveys obstacles to 30 NM radius.",
  },
  {
    id: 98,
    theme: "Performance / EFB",
    question:
      "How can the maximum acceleration altitude be found on the EFB TO PERF page?",
    options: [
      "By tapping on the flex temperature",
      "Must be manually calculated using FCOM",
      "Adding 4,000 ft to acceleration altitudes calculated",
      "MORE <F10>",
    ],
    correct: 3,
    explanation: "FCOM EFB-TOF-10: Found under 'MORE' on TO PERF page.",
  },
  {
    id: 99,
    theme: "Performance / EFB",
    question:
      "On the EFB, how can MEL items be added to assure performance requirements are met?",
    options: [
      "ACFT STS <FS>",
      "Must be manually calculated using FCOM",
      "By tapping on the flex temperature",
      "MORE <F10>",
    ],
    correct: 0,
    explanation:
      "FCOM EFB-TOF-40: MEL penalties are entered via Aircraft Status.",
  },
  {
    id: 100,
    theme: "Performance / EFB",
    question:
      "For an in-flight landing calculation, what is the maximum crosswind with compacted snow at -16°C?",
    options: ["15 kts", "10 kts", "38 kts", "29 kts"],
    correct: 3,
    explanation: "FCOM EFB-LDG-30: RCC 4 (29 kts limit) colder than -15°C.",
  },
  {
    id: 101,
    theme: "Performance / EFB",
    question:
      "For an in-flight landing calculation, what is the maximum crosswind with 5 mm of water?",
    options: ["20 kts", "10 kts", "15 kts", "29 kts"],
    correct: 0,
    explanation: "FCOM EFB-LDG-30: 5 mm water is RCC 2; limit 20 knots.",
  },
  {
    id: 102,
    theme: "Performance / EFB",
    question:
      "For an in-flight landing calculation, what is the maximum crosswind with compacted snow at -13°C?",
    options: ["29 kts", "25 kts", "38 kts", "10 kts"],
    correct: 1,
    explanation: "FCOM EFB-LDG-30: Warmer snow is RCC 3; limit 25 knots.",
  },
  {
    id: 103,
    theme: "Performance / EFB",
    question:
      "If using Reverse Idle, what is the correct choice in the EFB LDG PERF?",
    options: ["Yes", "No"],
    correct: 1,
    explanation:
      "FCOM EFB-LDG-10: Reverse credit set to 'No' for reverse idle.",
  },
  {
    id: 104,
    theme: "Performance / EFB",
    question:
      "In EFB LDG PERF, how do we correctly adjust for a NOTAMed shortening of a runway?",
    options: [
      "Adding Vpilot",
      "ACFT STS <FS>",
      "MORE <F10>",
      "FUNCTIONS>MODIFY RWY",
    ],
    correct: 3,
    explanation:
      "FCOM EFB-LDG-10: Use 'MODIFY RWY' to adjust physical distance.",
  },
  {
    id: 105,
    theme: "Performance / EFB",
    question:
      "What takeoff performance limit codes indicate performance limiting takeoff when using TOGA thrust?",
    options: ["RWY and OBS", "RWY only", "OBS only", "RWY, OBS, and VMC"],
    correct: 0,
    explanation: "FCOM EFB-TOF-20-10: RWY and OBS are primary T/O limits.",
  },
  {
    id: 106,
    theme: "Performance / EFB",
    question:
      "Required landing distance figures include what factors for a 'dry'/'wet' runway?",
    options: ["1.25/1.5", "1.5/2.0", "1.67/1.92"],
    correct: 2,
    explanation:
      "FCOM EFB-LDG-40: Dispatch factors: 1.67 (dry) and 1.92 (wet).",
  },
  {
    id: 107,
    theme: "Performance / EFB",
    question:
      "If below 10°C and 'wet' runway only, is anti-ice legally required for take-off?",
    options: ["Yes", "No"],
    correct: 1,
    explanation:
      "FCOM PRO-NOR-SOP-01-20: Wet runway alone doesn't mandate anti-ice.",
  },
  {
    id: 108,
    theme: "Performance / EFB",
    question:
      "How many 'negligible' CDL items can be carried without applying a performance penalty?",
    options: ["3", "2", "1", "4"],
    correct: 0,
    explanation: "FCOM EFB-TOF-40: Up to 3 negligible CDL items are permitted.",
  },
  {
    id: 109,
    theme: "Performance / EFB",
    question: "What is Vpilot in the context of EFB landing calculations?",
    options: [
      "Added margin for manual landing",
      "Pilot added adjustment to APPR COR",
    ],
    correct: 1,
    explanation: "FCOM EFB-LDG-20: Vpilot is manual pilot speed adjustment.",
  },
  {
    id: 110,
    theme: "Performance / EFB",
    question:
      "At landing, what is included in EFB calculations but NOT in QRH calculations?",
    options: [
      "A 1.67 factor on landing distance",
      "A 1.15 factor on landing distance",
      "A 1.3 factor on landing distance",
    ],
    correct: 1,
    explanation:
      "FCOM PRO-NOR-SOP-01-70: Dispatch modes apply 1.15 wet factor.",
  },
  {
    id: 111,
    theme: "Performance / EFB",
    question:
      "What is an indicator that 'stop margin' figures have additional factors added?",
    options: [
      "A high flex figure",
      "TOGA takeoff",
      "If all V speeds are the same",
    ],
    correct: 0,
    explanation:
      "FCOM EFB-TOF-20-20-20: High Flex indicates derated performance.",
  },
  {
    id: 112,
    theme: "Performance / EFB",
    question:
      "Where is the correct place to find RWY COND EFB entry at landing dispatch?",
    options: ["EFB MORE app", "OM-A", "QRH", "OM-B"],
    correct: 0,
    explanation: "FCOM EFB-LDG-10: Evaluation codes found under EFB 'MORE'.",
  },
  {
    id: 113,
    theme: "Performance / EFB",
    question:
      "Which of these is not an appropriate wind entry for a METAR reading VRB03KT?",
    options: ["T03", "TL03", "H03", "0/0"],
    correct: 2,
    explanation:
      "FCOM PRO-NOR-SOP-01-30: Cannot assume headwind for variable METAR.",
  },
  {
    id: 114,
    theme: "Performance / EFB",
    question:
      "A 'contaminated runway' describes a surface where a certain depth of contaminant is covering what percentage of runway area?",
    options: ["More than 25%", "More than 50%", "25% or more", "50% or more"],
    correct: 0,
    explanation: "FCOM LIM-AG-OPS: Contaminated if > 25% area depth > 3 mm.",
  },
  {
    id: 115,
    theme: "Systems - Air/Press",
    question: "Which is true regarding the EMERGENCY pressure selector?",
    options: [
      "It delivers 100% oxygen to the mask when pushed",
      "Turning the knob generates a permanent overpressure, only when N/100% selector is set on the N position",
      "Turning the knob generates a permanent overpressure, only when N/100% selector is set on the 100% position",
      "Pressing the knob generates a permanent overpressure",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-35-20-20: Selector must be at 100% for overpressure.",
  },
  {
    id: 116,
    theme: "Systems - Air/Press",
    question:
      "What is the effect of pressing the RESET control slide, after the oxygen mask has been used?",
    options: [
      "No effect",
      "It cuts off the oxygen only",
      "It cuts off the oxygen and the mask microphone",
      "It only cuts off the mask microphone",
    ],
    correct: 2,
    explanation: "FCOM DSC-35-20-20: slide cuts oxygen and mask mic.",
  },
  {
    id: 117,
    theme: "Limitations",
    question:
      "Under normal operations, maximum reverse should not be used below what speed?",
    options: ["50 kt", "60 kt", "70 kt", "75 kt"],
    correct: 2,
    explanation:
      "OM-B Section 2.3.19 Manual Landing specifies to move both reversers levers to IDLE at 70 kt.<br>FCOM PRO-NOR-SRP-01-70: Reduce reverse to idle by 70 kt.",
  },
  {
    id: 118,
    theme: "Systems - Air/Press",
    question:
      "Which of the following correctly completes this statement? 'The pressurization system includes ...'",
    options: [
      "... 2 Cabin Pressure Controllers; 1 Outflow Valve with 2 auto motors and 1 manual motor.",
      "... 2 Cabin Pressure Controllers; 1 Outflow Valve with 1 auto motor and 1 manual motor.",
      "... 3 Cabin Pressure Controllers; 2 Outflow Valves with 2 auto motors and 1 manual motor.",
      "... 3 Cabin Pressure Controllers; 1 Outflow Valve with 1 auto motor and 2 manual motors.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-21-20-20: System has 2 CPCs and 1 outflow valve (3 motors).",
  },
  {
    id: 119,
    theme: "Limitations",
    question: "What is the maximum speed for speedbrakes use?",
    options: [
      "Mmo/Vmo",
      ".86/350 kt",
      "There is no limitation related to speedbrakes",
      "250 kt in clean configuration",
    ],
    correct: 2,
    explanation: "FCOM LIM-AG-SPD: No specific limit; allowed up to VMO/MMO.",
  },
  {
    id: 120,
    theme: "Systems - Air/Press",
    question: "When does the lavatory/galley extract fan operate?",
    options: [
      "Only in flight",
      "Only on the ground",
      "Continuously with electrical power",
      "Only with galley power applied",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-21-10-30: fan runs while electrical power is available.",
  },
  {
    id: 121,
    theme: "Systems - Elec",
    question: "In the event of electrical power supply loss ...",
    options: [
      "The engine anti ice valves will open automatically, anti icing is assured",
      "The engine anti ice valves will close automatically, anti icing is lost",
      "The engine anti ice valves will be controlled by the wing ANTI ICE controls",
      "The engine anti ice valves remain in the position they were at",
    ],
    correct: 0,
    explanation: "FCOM DSC-30-20-10: Engine anti-ice valves fail-safe open.",
  },
  {
    id: 122,
    theme: "Hydraulics",
    question: "When is HYD PRESS 3,000 +/- 200 PSI?",
    options: [
      "Under Normal Conditions and when the RAT is providing system pressure",
      "Under Normal Conditions",
      "No HYD PRESS is required on single engine operation",
      "No HYD PRESS is required for normal operation",
    ],
    correct: 1,
    explanation: "FCOM DSC-29-10-20: Normal system pressure is 3000 PSI.",
  },
  {
    id: 123,
    theme: "Limitations",
    question: "Maximum tire ground speed is?",
    options: ["195 kt", "200 kt", "205 kt", "185 kt"],
    correct: 0,
    explanation: "FCOM LIM-LG: max demonstrated ground speed is 195 knots.",
  },
  {
    id: 124,
    theme: "ECAM / Displays",
    question: "The aural alerts of the Predictive Windshear System (PWS) ...",
    options: [
      "Have priority over TCAS, GPWS and other FWC aural warnings",
      "Only have priority over TCAS warnings",
      "Only have priority over GPWS warnings",
      "Never have priority over TCAS and GPWS aural warnings",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-34-SURV-30-20: Windshear takes priority over other warnings.",
  },
  {
    id: 125,
    theme: "Limitations",
    question: "What is the maximum speed for operating the windshield wipers?",
    options: ["185 kt", "200 kt", "215 kt", "230 kt"],
    correct: 3,
    explanation: "FCOM LIM-AG-SPD: Wipers limited to max speed 230 knots.",
  },
  {
    id: 126,
    theme: "Powerplant",
    question: "Minimum oil temperature for start is?",
    options: [
      "-10°C",
      "-40°C",
      "There is no limitation",
      "in the green on SD page",
    ],
    correct: 1,
    explanation: "FCOM LIM-ENG: minimum oil temperature for start is -40°C.",
  },
  {
    id: 127,
    theme: "Landing Gear",
    question: "What does the NW STRG DISC memo on the E/WD indicate?",
    options: [
      "The nose wheel steering has been disconnected by ground personnel",
      "A failure in the nose wheel steering system has been detected",
      "There is a discrepancy between the two nose wheel steering hand wheel positions",
      "The nose wheel steering computer has finished its self-test. Nose wheel steering is now available",
    ],
    correct: 0,
    explanation:
      "OM-B Section 2.3.7.1 At Pushback/Start Clearance states that the NW STRG DISC memo appears when the nose wheel steering selector is in the towing position.<br>FCOM PRO-NOR-SRP-01-15: Displays when steering selector is in towing.",
  },
  {
    id: 128,
    theme: "Systems - Elec",
    question: "The AC ESS BUS is normally supplied by:",
    options: [
      "AC BUS 2",
      "AC BUS 1",
      "Emergency Generator",
      "APU via a static inverter",
    ],
    correct: 1,
    explanation: "FCOM DSC-24-10-30: AC BUS 1 is normal source for AC ESS BUS.",
  },
  {
    id: 129,
    theme: "APU",
    question:
      "The APU has been switched off, but it has not stopped. Which of the following would cause this?",
    options: [
      "The APU fuel pump continuing to run.",
      "The air intake flap failing to close.",
      "A cooling period (following use of APU bleed).",
      "A cooling period, which occurs on all APU shutdowns.",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-49-10-20: Running for cooling if bleed air was used.",
  },
  {
    id: 130,
    theme: "Hydraulics",
    question: "What is the normal operating pressure in the hydraulic system?",
    options: ["500 psi", "1000 psi", "2000 psi", "3000 psi"],
    correct: 3,
    explanation: "FCOM DSC-29-10-20: nominal hydraulic pressure is 3000 PSI.",
  },
  {
    id: 131,
    theme: "Performance / EFB",
    question:
      "What is the maximum runway pressure altitude for takeoff and landing",
    options: [
      "10,000 ft",
      "9200 ft",
      "Dependent on outside air temperature",
      "There is no restriction",
    ],
    correct: 1,
    explanation:
      "FCOM LIM-AG-OPS: maximum runway pressure altitude is 9,200 ft.",
  },
  {
    id: 132,
    theme: "Landing Gear",
    question:
      "What indication occurs during a pushback (including engine start), with the steering selector in the TOWING position?",
    options: [
      "A caution NW STRG FAULT will appear on the E/WD.",
      "A memo NW STRG DISC appears in green until the steering selector is returned to NORMAL.",
      "A memo NW STRG DISC appears in amber if at least one engine is running.",
      "STRG is displayed (in amber) on the Wheels S.D.",
    ],
    correct: 2,
    explanation:
      "OM-B Section 2.3.7.1 At Pushback/Start Clearance explicitly states that the NW STRG DISC memo appears amber if at least one engine is running during pushback to alert the crew.<br>FCOM PRO-NOR-SRP-01-15: 'NW STRG DISC' amber if engine runs.",
  },
  {
    id: 133,
    theme: "Limitations",
    question: "What is the maximum runway slope?",
    options: ["+/- 1%", "+ 1%/ -2%", "+\\- 2%", "+2%/ -1%"],
    correct: 2,
    explanation: "FCOM LIM-AG-OPS: maximum permitted runway slope is +/- 2%.",
  },
  {
    id: 134,
    theme: "Flight Controls",
    question:
      "During your preliminary cockpit preparation you notice that the FLAPS lever is in the ZERO position but the E/WD shows the FLAPS extended. What should you do?",
    options: [
      "You must move the FLAPS to the position corresponding to the position shown on the SD",
      "Nothing. The FLAPS will move to the position selected as soon as all the engines are started",
      "Switch ON the YELLOW electric HYD pump and recycle the FLAPS lever",
      "You must check with the maintenance crew before applying hydraulic power",
    ],
    correct: 3,
    explanation:
      "OM-B Section 2.3.4.10 Before Walkaround explicitly states: IF FLIGHT CONTROL SURFACE POSITIONS DO NOT AGREE WITH THE CONTROL LEVER POSITIONS, CHECK WITH THE MAINTENANCE CREW BEFORE APPLYING HYDRAULIC POWER.<br>FCOM PRO-NOR-SRP-01-10: Check with maintenance if positions disagree.",
  },
  {
    id: 135,
    theme: "Navigation",
    question: "Navaids are normally autotuned by?",
    options: ["ADIRU", "RMP", "MCDU", "FMGC"],
    correct: 3,
    explanation: "FCOM DSC-34-NAV-30-10: FMGC autotunes navaids for position.",
  },
  {
    id: 136,
    theme: "Communications",
    question: "With the AUDIO SWITCHING knob in the CAPT 3 position:",
    options: [
      "The Captain uses his acoustic equipment on ACP 3",
      "The captain should use the 3rd occupant (observer) headset",
      "The AUDIO SWITCHING knob must be placed in ALTN position",
      "The AUDIO SWITCHING knob should be placed in STBY position",
    ],
    correct: 0,
    explanation: "FCOM DSC-23-10-20: Bypass failed ACP 1 using ACP 3.",
  },
  {
    id: 137,
    theme: "Flight Controls",
    question:
      "When does the F/CTL page appear on the flight deck during the flight control check?",
    options: [
      "Automatically as soon as the nose wheel steering handle is moved",
      "Automatically as soon as the side stick is moved",
      "The pilot has to press the F/CTL pb on the ECP",
      "You can't see the page. The system is inoperative on ground",
    ],
    correct: 1,
    explanation: "FCOM DSC-27-20-30: SD page appears when sidestick is moved.",
  },
  {
    id: 138,
    theme: "Flight Controls",
    question:
      "In ALTERNATE LAW, how do the indications change at the bottom of the speed scale?",
    options: [
      "Alpha protection is replaced by an extended VLS.",
      "There are no changes: it is possible to stall the aircraft.",
      "VLS is replaced by VSTALL WARNING.",
      "Alpha protection is replaced by VSTALL WARNING: it is possible to stall the aircraft.",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-27-20-20: Alpha Prot replaced by red/black VSW strip.",
  },
  {
    id: 139,
    theme: "Limitations",
    question:
      "What is the maximum speed for flight with a cockpit window open?",
    options: ["200 knots", "230 knots", "Green Dot", "250 knots"],
    correct: 0,
    explanation: "FCOM LIM-AG-SPD: maximum speed with window open is 200 kt.",
  },
  {
    id: 140,
    theme: "Auto Flight / FMS",
    question: "After take-off the A/THR will not become active until...",
    options: [
      "The autopilot is engaged",
      "The thrust levers are moved out of the TOGA or FLEX/MCT detents",
      "The thrust levers are retarded into the CLIMB detent from TOGA or FLEX/MCT and A/THR is displayed white in the FMA",
      "The A/THR pb is manually selected ON",
    ],
    correct: 2,
    explanation: "FCOM DSC-22-30-50: A/THR active upon entering CLB detent.",
  },
  {
    id: 141,
    theme: "Systems - Elec",
    question: "The Emergency Generator will power which busses?",
    options: [
      "AC Bus 1 and AC Bus 2",
      "AC ESS & DC ESS buses",
      "AC Bus 1 and DC Bus 1",
      "AC ESS and TR 1",
    ],
    correct: 1,
    explanation: "FCOM DSC-24-10-30: EMER GEN powers AC ESS and DC ESS buses.",
  },
  {
    id: 142,
    theme: "Flight Controls",
    question:
      "If both pilots simultaneously deflect their side sticks fully back ...",
    options: [
      "No inputs are sent to the flight control computers unless one pilot presses the take over pb on his stick",
      "The pitch up order is algebraically computed. The total is limited to the signal that would result in the max deflection of a single sidestick",
      "The pitch up order is 1.5 times higher than with only one stick deflected",
      "The pitch up order is twice as high as with only one stick deflected",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-27-20-30: Inputs algebraically summed (max 1 stick signal).",
  },
  {
    id: 143,
    theme: "APU",
    question:
      'Which of the following correctly completes this statement? "Provided not on batteries only, the APU may be started ...',
    options: [
      "... at or below 35,000 feet only.",
      "... at or below 25,000 feet only.",
      "... at or below 300 kts only",
      "... throughout the normal flight envelope.",
    ],
    correct: 3,
    explanation: "FCOM LIM-APU: APU start throughout entire flight envelope.",
  },
  {
    id: 144,
    theme: "Ice & Rain Protection",
    question:
      "Following a Wing Anti-Ice (WAI) test on the ground, what happens if the WAI switch is left ON?",
    options: [
      "The Anti-Ice Valves will close after 10 seconds (on the S.D., the triangles go amber).",
      "WAI will automatically activate on selection of TOGA power.",
      "If WAI is subsequently required in flight, it is necessary to select the Anti-Ice Switch OFF then ON again.",
      "After a 30 second test sequence, the wing anti-Ice valves close.",
    ],
    correct: 3,
    explanation:
      "OM-B Section 2.3.9.1 After Start states: On ground when wing anti-ice is switched on, the anti-ice valves open for about 30 s for self-test sequence, then close as long as the aircraft is on ground.<br>FCOM PRO-NOR-SRP-01-10: Valves close after 30s self-test.",
  },
  {
    id: 145,
    theme: "Fire Protection",
    question: "When is the engine fire extinguishing squib armed?",
    options: [
      "When both loops fail within 5 seconds of each other",
      "When the ENG FIRE pushbutton is pushed and released",
      "When the ENG FIRE pushbutton is illuminated",
      "when the agent DISCH light is illuminated",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-26-20-20: Release of Engine FIRE pb arms the squibs.",
  },
  {
    id: 146,
    theme: "Powerplant",
    question: "Which of the following is true about the FADEC system?",
    options: [
      "It is continuously powered from the moment the aircraft receives AC power.",
      "It is a dual channel unit that has its own internal power source",
      "It is not available until the engine MODE SEL is set to IGN/START.",
      "It is self-powered above 5% N1.",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-70-20: FADEC is dual-channel with internal power source.",
  },
  {
    id: 147,
    theme: "Limitations",
    question:
      "What is the maximum demonstrated crosswind for landing (including gusts)?",
    options: ["29 knots", "33 knots", "35 knots", "38 knots"],
    correct: 3,
    explanation: "FCOM LIM-AG-OPS: maximum demonstrated crosswind is 38 knots.",
  },
  {
    id: 148,
    theme: "Fire Protection",
    question:
      "The FIRE light on the pedestal illuminates, what does this indicate?",
    options: [
      "The FIRE Light, when illuminated, identifies the engine to be shut down because of fire.",
      "The FIRE Light, when illuminated, indicates a faulty loop and maintenance action is required.",
      "The FIRE Light, when illuminated, indicates empty fire bottles.",
      "The FIRE Light, when illuminated, indicates to the crew they forgot the fire test prior to departure.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-26-20-20: Identifies engine to be shut down for fire.",
  },
  {
    id: 149,
    theme: "Limitations",
    question:
      "What is the certified maximum number of passenger seats for an A320?",
    options: ["189", "180", "144", "215"],
    correct: 1,
    explanation: "FCOM LIM-AG-OPS: Certificated for max 180 or 186 seats.",
  },
  {
    id: 150,
    theme: "Systems - Air/Press",
    question:
      "What happens to the cabin lights in the event of excessive cabin altitude?",
    options: [
      "The NO SMOKING, FASTEN SEAT BELT, RETURN TO SEAT and EXIT signs come on automatically only if the switches are in the AUTO position",
      "The NO SMOKING, FASTEN SEAT BELT, RETURN TO SEAT and EXIT signs come on automatically only if the EMER EXIT switch is ARMED",
      "The NO SMOKING, FASTEN SEAT BELT, RETURN TO SEAT and EXIT signs come on automatically only if the landing gear is down",
      "The NO SMOKING, FASTEN SEAT BELT, RETURN TO SEAT and EXIT signs come on automatically regardless of the position of the switches",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-33-20-20: Signs come on regardless of switch position.",
  },
  {
    id: 151,
    theme: "Powerplant",
    question: "What are the thrust settings you can take off with?",
    options: [
      "Any manual setting",
      "FLEX or MCT",
      "CLIMB or TOGA",
      "FLEX or TOGA",
    ],
    correct: 3,
    explanation:
      "OM-B Section 2.3.12 Takeoff lists the thrust lever settings during the takeoff roll as either FLX or TOGA.<br>FCOM PRO-NOR-SRP-01-30: Roll settings must be FLX or TOGA.",
  },
  {
    id: 152,
    theme: "Hydraulics",
    question:
      "Following an overheat and shut down of a hydraulic pump, how long will the FAULT light on the overhead panel remain illuminated?",
    options: [
      "It will extinguish when the fluid has cooled to normal temperature.",
      "It will remain illuminated until maintenance action has been taken.",
      "It will extinguish when the switch is placed to OFF.",
      "It is inhibited with engines running.",
    ],
    correct: 0,
    explanation: "FCOM DSC-29-20: FAULT light remains until fluid has cooled.",
  },
  {
    id: 153,
    theme: "Navigation",
    question:
      "What information is given at the top right of the Nav Display in the ARC mode?",
    options: [
      "Raw Data from a tuned VOR.",
      "Computed data concerning the TO Waypoint.",
      "Range marks for the inner circle.",
      "Track and Groundspeed.",
    ],
    correct: 1,
    explanation: "FCOM DSC-31-45: ND shows computed data for 'TO' Waypoint.",
  },
  {
    id: 154,
    theme: "Systems - Elec",
    question: "What happens if the BUS TIE pb is set to AUTO position?",
    options: [
      "Both bus tie contactors open",
      "It has no effect on the AC electrical system",
      "The bus tie contactors (BTCs) automatically open or close to maintain power supply to both AC BUS 1 and 2",
      "AC BUS 1 and 2 will work in parallel with both generators as suppliers",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-24-10-30: BTCs maintain power supply to both AC buses.",
  },
  {
    id: 155,
    theme: "Limitations",
    question:
      'On the Speed Tape on the PFD, what does the "F" speed represent at take-off?',
    options: [
      "Minimum speed to retract flaps from FLAP 3 to FLAP 1.",
      "Minimum speed to retract flaps from FLAP FULL to FLAP 3.",
      "Minimum speed for present flap setting.",
      "Maximum speed for selecting one more stage of flaps.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-22-10-50-20: 'F' speed is minimum flap retraction speed.",
  },
  {
    id: 156,
    theme: "Performance / EFB",
    question: "The FLEX temperature must not be lower than the actual OAT.",
    options: [
      "True",
      "False",
      "Must be higher than Tmax and TFLEXmax",
      "Must be higher than TFLEXmax",
    ],
    correct: 0,
    explanation: "FCOM LIM-ENG: FLEX temperature must be above actual OAT.",
  },
  {
    id: 157,
    theme: "Ice & Rain Protection",
    question: "The engine ANTI ICE system ...",
    options: [
      "Operates only in flight and is fully automatic in case of icing conditions",
      "Cannot be operated on ground to prevent damaging the slats",
      "When selected ON, causes idle N1 (or idle EPR) to be reduced",
      "Is controlled manually by the pilot through the ENG 1 and ENG 2 ANTI ICE pushbuttons",
    ],
    correct: 3,
    explanation: "FCOM DSC-30-20-20: Manually controlled via pushbuttons.",
  },
  {
    id: 158,
    theme: "Systems - Elec",
    question: "In what case are the batteries connected to the DC BAT BUS?",
    options: [
      "On the ground with loss of AC BUS 1 and 2 when speed is above 140 kt",
      "On the ground with loss of AC BUS 1 and 2 when speed is below 100 kt",
      "Whenever the BAT switches are set to AUTO",
      "When battery voltage is above 27.5 V",
    ],
    correct: 1,
    explanation: "FCOM DSC-24-10-30: Batteries connect below 100 kt on ground.",
  },
  {
    id: 159,
    theme: "Powerplant",
    question: "When is selection of reverse thrust in flight allowed?",
    options: [
      "It is permitted below WX minima on WET RWY",
      "It is prohibited",
      "It is recommended on short runways",
      "It is allowed above Vmca",
    ],
    correct: 1,
    explanation: "FCOM LIM-ENG: Reverse thrust in flight is prohibited.",
  },
  {
    id: 160,
    theme: "Flight Controls",
    question:
      "What will be the result if, after selecting FLAPS 2 in flight, asymmetric flap travel occurs?",
    options: [
      "The flaps and slats will be locked in position until maintenance action.",
      "The flaps will be locked in position by the Wing Tip Brake.",
      "The flaps will run to the selected position, and then be locked by the Wing Tip Brake.",
      "The Pressure Off Brakes will be applied to prevent further flap movement.",
    ],
    correct: 1,
    explanation: "FCOM DSC-27-30-10: Wing Tip Brakes lock flaps for asymmetry.",
  },
  {
    id: 161,
    theme: "Flight Controls",
    question:
      "What are the pitch and roll limits in Normal Law Configuration 0?",
    options: [
      "Pitch: +30° (+25° at low speed), -15°, Roll: 67°.",
      "Pitch: +30° (+25° at low speed), -10°, Roll: 67°.",
      "Pitch: +25° (+20° at low speed), -15°, Roll: 67°.",
      "Pitch: +30°, Roll: 45°.",
    ],
    correct: 0,
    explanation: "FCOM LIM-AG-F_CTL: Pitch +30°/-15°, Roll limit 67°.",
  },
  {
    id: 162,
    theme: "Landing Gear",
    question:
      "With the aircraft on the ground, which of the following is true with regard to the gear lever?",
    options: [
      "It can be selected up but retraction is inhibited by the shock absorber being compressed.",
      "It cannot be moved due to an interlock with shock absorber compression.",
      "It can be selected up by operating the override trigger.",
      "It cannot be moved if the Green hydraulic system is pressurized.",
    ],
    correct: 1,
    explanation: "FCOM DSC-32-10-40: Lever interlock prevents UP on ground.",
  },
  {
    id: 163,
    theme: "Systems - Elec",
    question:
      "What is the effect of selecting the GEN 1 LINE switch to OFF on the EMER ELEC PWR panel?",
    options: [
      "Fuel pump operation is transferred to AC ESS BUS.",
      "GEN 1 is fed directly onto the AC ESS BUS.",
      "GEN 1 is de-energized.",
      "GEN 1 line contactor opens.",
    ],
    correct: 3,
    explanation: "FCOM DSC-24-20: Switch opens the GEN 1 line contactor.",
  },
  {
    id: 164,
    theme: "Landing Gear",
    question:
      "The STROBE lights selector is set to AUTO. In this position when do they stop flashing?",
    options: [
      "When the aircraft touches down",
      "When the first reverser is opened",
      "When the landing lights are switched off",
      "When the last engine has been shut down",
    ],
    correct: 0,
    explanation: "FCOM DSC-33-10-30: Flashing stops upon touchdown.",
  },
  {
    id: 165,
    theme: "Landing Gear",
    question: "What is maximum altitude that the landing gear may be extended?",
    options: [
      "10,000 ft",
      "25,000 ft",
      "At aircraft maximum operating altitude.",
      "2,500 ft",
    ],
    correct: 1,
    explanation: "FCOM LIM-LG: max extension altitude is 25,000 ft.",
  },
  {
    id: 166,
    theme: "Flight Controls",
    question: "What are the correct maximum acceleration (G) limits?",
    options: [
      "Slats and flaps extended, 0 g to +2 g",
      "Slats and flaps extended, 0 g to +2.5 g",
      "Clean -1 g to +2.5 g, flaps extended -1 g to +2 g",
      "Clean -1 g to +2.5 g, slats extended -1 g to +2.5 g",
    ],
    correct: 0,
    explanation: "FCOM LIM-AG-F_CTL: Clean: -1g to +2.5g; Ext: 0g to +2.0g.",
  },
  {
    id: 167,
    theme: "Landing Gear",
    question:
      "When the gear is retracted, which exterior lights extinguish automatically?",
    options: [
      "NOSE and RWY TURN OFF",
      "RWY TURN OFF and WING",
      "NOSE and LAND",
      "LOGO and LAND",
    ],
    correct: 0,
    explanation: "FCOM DSC-33-10-20: NOSE and RWY TURN OFF lights extinguish.",
  },
  {
    id: 168,
    theme: "Auto Flight / FMS",
    question:
      "You are performing a takeoff with the thrust levers in the FLEX position. Which of the following statements is true?",
    options: [
      "A/THR is now active",
      "A/THR is now armed",
      "A/THR is off until the A/THR pb is pressed",
      "A/THR is now in yellow",
    ],
    correct: 1,
    explanation: "FCOM DSC-22-30-50: A/THR arms in FLEX/TOGA detents.",
  },
  {
    id: 169,
    theme: "Auto Flight / FMS",
    question:
      "When on an intercept heading, to join an ILS localizer, the Flight Path Vector (FPV) will be lined up with the ...",
    options: [
      "... glideslope demand.",
      "... ILS inbound course.",
      "... actual aircraft heading.",
      "... actual aircraft track.",
    ],
    correct: 3,
    explanation: "FCOM DSC-31-40: FPV indicates actual aircraft track.",
  },
  {
    id: 170,
    theme: "Communications",
    question: "In case of RMP1 failure ...",
    options: [
      "RMP1 no longer controls the selected receiver and should be switched OFF",
      "RMP1 no longer controls the selected receiver and should be switched OFF, tune VHF1 through another RMP",
      "The frequency display will turn amber and the green VHF (or HF) lights will remain illuminated",
      "RMP3 can be used provided it is not connected to ACARS",
    ],
    correct: 1,
    explanation: "FCOM DSC-23-10-20: Tune VHF 1 via another RMP.",
  },
  {
    id: 171,
    theme: "Limitations",
    question:
      "What is maximum operating altitude with slats and/or flaps extended?",
    options: [
      "No restrictions apply.",
      "10,000 ft.",
      "15,000 ft.",
      "20,000 ft.",
    ],
    correct: 3,
    explanation: "FCOM LIM-AG-OPS: maximum operating altitude is 20,000 ft.",
  },
  {
    id: 172,
    theme: "Navigation",
    question:
      "What does the left (captain's) ND show when selected to ROSE ILS?",
    options: [
      "ILS receiver No. 1 or No. 2 signals, as selected.",
      "ILS receiver No. 1 signals only.",
      "ILS receiver No. 2 signals only.",
      "ILS receiver No. 2 signals and the map.",
    ],
    correct: 2,
    explanation: "FCOM DSC-31-45: Capt ND displays signals from ILS 2.",
  },
  {
    id: 173,
    theme: "Landing Gear",
    question:
      "What does a red UNLK light indicate on the Landing Gear Indicator Panel?",
    options: [
      "LGCIU 1 and 2 failure.",
      "Associated gear door is not locked closed.",
      "Associated gear is in transit.",
      "Associated gear is not locked in selected position.",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-32-10-40: Indicates gear not locked in selected position.",
  },
  {
    id: 174,
    theme: "Powerplant",
    question:
      "You are about to perform a takeoff. You have not inserted a FLEX temperature. Can you still take-off?",
    options: [
      "Not until a FLEX temperature is inserted.",
      "Yes, by setting the thrust levers to the CLIMB detent",
      "Yes, by setting the thrust levers to the FLEX/MCT detent",
      "Yes, but only by using TOGA",
    ],
    correct: 3,
    explanation:
      "FCOM PRO-NOR-SRP-01-30: TOGA required if no FLEX temperature.",
  },
  {
    id: 175,
    theme: "Hydraulics",
    question:
      "When does the bidirectional power transfer unit (PTU) enable the yellow system to pressurize the green system and vice versa?",
    options: [
      "Only operational on the ground",
      "It operates automatically when a predetermined differential pressure is sensed",
      "It has to be switched on by the flight deck crew member when the differential pressure between systems (Green & Yellow) is >500 psi",
      "Only when the RAT has been deployed and the aircraft is using BAT power",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-29-10-20: PTU activates if differential pressure > 500 PSI.",
  },
  {
    id: 176,
    theme: "Ice & Rain Protection",
    question:
      "If one engine ANTI ICE system fails the second one takes over and provides anti icing for both the engines.",
    options: [
      "Only with the aircraft on the ground and if OAT is below 0°C.",
      "It's not possible since the engine bleed sources are independent",
      "Yes, but on the ground the two position (Open & Closed) valve is closed",
      "The flight crew should switch to APU bleed air to replace the unserviceable unit",
    ],
    correct: 1,
    explanation: "FCOM DSC-30-20-10: Systems are fully independent.",
  },
  {
    id: 177,
    theme: "Flight Controls",
    question:
      "In Normal law, if one side stick is rapidly pulled fully back, can the aircraft's maximum allowable G load be exceeded?",
    options: [
      "Yes. Rapid side stick deflection must never be made",
      "Yes. Until maximum pitch attitude is reached the alpha floor protection is active",
      "No. At maximum G load, the side sticks are de-activated for 5 seconds",
      "No. The load factor protection overrides side stick commands to avoid excessive G loads",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-27-20-10-20: Load factor protection prevents exceeding G limits.",
  },
  {
    id: 178,
    theme: "Hydraulics",
    question: "Which hydraulic systems have fluid shutoff valves and why?",
    options: [
      "Green and Yellow (operated by the engine fire switches) to isolate fluid from a fire.",
      "Green and Yellow (operated by switches on the OHP) in case of PTU failures.",
      "All systems; to isolate the systems in event of fluid loss.",
      "All systems; for use by maintenance.",
    ],
    correct: 0,
    explanation: "FCOM DSC-29-10-30: ENG FIRE pbs close G/Y shutoff valves.",
  },
  {
    id: 179,
    theme: "Landing Gear",
    question:
      "What is the maximum brake temperature for takeoff (brake fans off)?",
    options: ["720°C", "520°C", "300°C", "330°C"],
    correct: 2,
    explanation: "FCOM LIM-LG: Brake temperature limit for takeoff is 300°C.",
  },
  {
    id: 180,
    theme: "Communications",
    question:
      "On the overhead panel, when should the AUDIO SWITCHING be selected to CAPT 3?",
    options: [
      "The Captain is using RMP tuning of the NAVAIDS.",
      "The Captain's ACP has failed.",
      "The Captain's loudspeaker has failed.",
      "Both RMPs have failed.",
    ],
    correct: 1,
    explanation: "FCOM DSC-23-10-20: Selected if Captain's ACP fails.",
  },
  {
    id: 181,
    theme: "Auto Flight / FMS",
    question: "With either AP engaged, which statement is true?",
    options: [
      "Both side sticks are locked. The lock cannot be overridden",
      "Both side sticks are deactivated until the AP is disengaged",
      "Both side sticks are locked. By applying a certain force, the lock can be overridden but the AP remains engaged",
      "Both side sticks are locked. By applying a certain force, the lock can be overridden but the AP will disengage",
    ],
    correct: 3,
    explanation: "FCOM DSC-22-30-30: Force override disengages the AP.",
  },
  {
    id: 182,
    theme: "Navigation",
    question:
      "When RMP tuning of the NAVAIDS is in operation, which of the following statements is true?",
    options: [
      "The MCDU's will display the tuned navaids.",
      "There will be an amber light on the ACP.",
      "ILS DME is not available.",
      "The ILS receivers are tuned by their respective RMP's.",
    ],
    correct: 2,
    explanation: "FCOM DSC-34-NAV-30-10: ILS DME distance is not available.",
  },
  {
    id: 183,
    theme: "Hydraulics",
    question: "Which of the following is true with regard to the PTU?",
    options: [
      "It is inhibited between engine starts.",
      "It is inhibited from electrical power-up until second engine start.",
      "It is used as a back-up following a leak in the Green or Yellow systems.",
      "It operates if the Green or Yellow system pressure falls below 2600 psi.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-29-10-20: PTU is inhibited during first engine start.",
  },
  {
    id: 184,
    theme: "Auto Flight / FMS",
    question:
      "On an approach to land, which of the following statements is true?",
    options: [
      "At 100 feet, alpha floor is inhibited; at 50 feet, the Flare Mode commences.",
      "At 100 feet, alpha floor is inhibited; the pitch trim is frozen; the aircraft pitches down.",
      "At 50 feet, alpha floor and pitch trim are inhibited; the aircraft pitches down.",
      "At 100 feet, alpha protection is lost; at 50 feet, the flare mode commences.",
    ],
    correct: 0,
    explanation: "FCOM DSC-22-40-30: Alpha Floor inhibited below 100 ft RA.",
  },
  {
    id: 185,
    theme: "APU",
    question:
      "Which statement is correct when the APU FIRE pb is pushed to release it?",
    options: [
      "Only if airborne, an APU EMER SHUT DOWN will occur",
      "On the ground you should perform the ECAM actions to shut down the APU from the cockpit",
      "An APU AUTO SHUT DOWN will occur if both detection loops are operating",
      "An APU EMER SHUT DOWN will occur, in the air or on the ground.",
    ],
    correct: 3,
    explanation: "FCOM DSC-49-20: Released button commands emergency shutdown.",
  },
  {
    id: 186,
    theme: "Powerplant",
    question:
      "During a MANUAL START, when should the engine master switch be selected ON?",
    options: [
      "When the N2 has ceased accelerating (minimum of 20 % N2).",
      "Immediately after selecting the MAN START to ON.",
      "At 15% N1.",
      "When IGN A + B appears on the engine System Display.",
    ],
    correct: 0,
    explanation: "FCOM PRO-NOR-SRP-01-15: Master ON at >= 20% N2 (motoring).",
  },
  {
    id: 187,
    theme: "Systems - Air/Press",
    question:
      "With the PACK FLOW controller selected to LO, the actual pack flow may be ...",
    options: [
      "... HI due to APU bleed on.",
      "... NORM due to APU bleed on.",
      "... HI due to air conditioning temperature demands.",
      "... NORM or HI due to single pack operation.",
    ],
    correct: 0,
    explanation:
      "OM-B Section 2.3.6.2 Cockpit Preparation explicitly notes that if the APU is supplying air, HI flow is automatically selected regardless of the PACK FLOW switch position.<br>FCOM DSC-21-10-30: HI flow forced if APU bleed is ON.",
  },
  {
    id: 188,
    theme: "Hydraulics",
    question:
      "On the HYD overhead panel, which of the following is true of any pump FAULT light?",
    options: [
      "If it was due to overheat, it will extinguish when the fluid has cooled to normal temperature.",
      "It will remain illuminated until maintenance action has been taken.",
      "It will extinguish when the switch is placed to OFF.",
      "It is inhibited with engines running.",
    ],
    correct: 0,
    explanation: "FCOM DSC-29-20: light remains until fluid temperature drops.",
  },
  {
    id: 189,
    theme: "Flight Controls",
    question: "What is the maximum speed for each flap configuration?",
    options: ["V stall speed.", "Green dot speed", "Vfe speed", "Vis speed"],
    correct: 2,
    explanation: "FCOM LIM-AG-SPD: extension limits are denoted as VFE.",
  },
  {
    id: 190,
    theme: "Systems - Air/Press",
    question: "What aircraft compartments are unpressurized?",
    options: [
      "Forward and aft cargo compartments",
      "Main and nose gear bay, and tail cone",
      "Tail cone, radome, and forward cargo compartment",
      "Main gear bay and aft cargo compartment",
    ],
    correct: 1,
    explanation: "FCOM DSC-21-20-20: Gear bays and tail cone are outside hull.",
  },
  {
    id: 191,
    theme: "Systems - Air/Press",
    question: "What happens in the event of BMC 1 failure?",
    options: [
      "BMC 2 takes over all functions.",
      "An APU BLEED LEAK will not be detected.",
      "A left WING BLEED LEAK will not be detected.",
      "An ENG 2 BLEED LEAK will not be detected.",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-36-10-60: BMC 1 fail loses APU bleed leak detection.",
  },
  {
    id: 192,
    theme: "Systems - Air/Press",
    question:
      "Regarding the pressurization system ... How are the safety valves controlled?",
    options: [
      "They are controlled with the MAN V/S CTL selector",
      "They are controlled with the MODE SEL p/b sw",
      "They are controlled with the DITCHING pb sw",
      "They are fully automatic and cannot be controlled manually",
    ],
    correct: 3,
    explanation: "FCOM DSC-21-20-30: safety valves are purely automatic.",
  },
  {
    id: 193,
    theme: "Navigation",
    question:
      "IRS IN ALIGN ECAM memo display becomes amber during an IR alignment if engines are running ...",
    options: [
      "If one IRS becomes faulty",
      "If one IRS is not aligned",
      "and pulses GREEN if the alignment of at least one IRS is faulty",
      "when two IRS's are in disagreement regarding the aircraft position",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-34-NAV-10-30: Alignment during engine run triggers memo.",
  },
  {
    id: 194,
    theme: "Landing Gear",
    question: "What triggers the autobrake system after landing?",
    options: [
      "Selection of reverse thrust.",
      "Weight on wheels.",
      "Main wheel spin-up.",
      "Ground Spoiler extension.",
    ],
    correct: 3,
    explanation: "FCOM DSC-32-30-10: autobrake triggers on ground spoilers.",
  },
  {
    id: 195,
    theme: "Systems - Elec",
    question: "What is the maximum continuous load per generator?",
    options: ["85%.", "50%.", "75%.", "100%."],
    correct: 3,
    explanation: "FCOM LIM-ENG: max continuous generator load is 100%.",
  },
  {
    id: 196,
    theme: "Limitations",
    question: "What is the certified maximum number of seats on the A320?",
    options: ["There is no certified limit", "200", "180", "150"],
    correct: 2,
    explanation:
      "OM-B Section 1 Limitations defines the maximum number of passenger seats for the standard A320 configuration as 180 or 186.<br>FCOM LIM-AG-OPS: Certificated for max 180 or 186 seats.",
  },
  {
    id: 197,
    theme: "Flight Controls",
    question: "In normal flight, what does sidestick deflection demand?",
    options: [
      "load factor in pitch and proportional aileron and spoiler deflection in roll.",
      "load factor in pitch and rate of roll in roll.",
      "Rate of pitch change and 60° bank at full roll demand.",
      "A pitch attitude and rate of roll up to 33°.",
    ],
    correct: 1,
    explanation: "FCOM DSC-27-20-10-20: commands G-load (pitch) and roll rate.",
  },
  {
    id: 198,
    theme: "Navigation",
    question:
      "What is signified by 'ILS APPR' being displayed at the top center of the ND?",
    options: [
      "The ILS button on the FCU has been pressed",
      "The ILS button on the EFIS control panel has been pressed",
      "An ILS approach has been entered in the MCDU F-PLN",
      "LOC and G/S have been captured",
    ],
    correct: 2,
    explanation: "FCOM DSC-31-45: Approach entered in active flight plan.",
  },
  {
    id: 199,
    theme: "Systems - Air/Press",
    question:
      "For what areas does the Avionics ventilation system provide cooling?",
    options: [
      "The avionics bay and the flight deck (including the instruments and circuit breakers)",
      "The avionics bay, the flight deck instruments and the CIDS panels",
      "The radio bay, the flight deck instruments, the circuit breaker panels and the CIDS panels",
      "The avionics bay, the flight deck instruments and the aircraft batteries",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-21-30-20: cools avionics bay and flight deck panels.",
  },
  {
    id: 200,
    theme: "Systems - Air/Press",
    question:
      "Which of the following correctly describes the cross-bleed valve operation?",
    options: [
      "In manual, it is electrically selected and pneumatically operated.",
      "In auto, it is pneumatically operated.",
      "In auto, it will automatically open, if necessary, to equalize the duct pressures.",
      "In auto, it will be closed if the engine bleed valves are open.",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-36-10-40: In AUTO, closed if engine bleeds are open.",
  },
  {
    id: 201,
    theme: "Hydraulics",
    question:
      "On ground, with the BLUE hydraulic pump switch at AUTO and with the AC POWER available, when will the pump operate?",
    options: [
      "If one engine is running.",
      "Only after both engines have been started.",
      "Only when the aircraft is in flight.",
      "Only if the maintenance bus is connected.",
    ],
    correct: 0,
    explanation: "FCOM DSC-29-10-20: runs if AC power and one engine runs.",
  },
  {
    id: 202,
    theme: "Auto Flight / FMS",
    question:
      "The flight management part of the FMGC includes the following elements:",
    options: [
      "Navigation, flight planning and A/THR commands",
      "Performance optimization, A/THR and AP commands",
      "Navigation, Flight planning, Performance optimization and flight predictions",
      "AP and FD commands and flight envelope computations",
    ],
    correct: 2,
    explanation: "FCOM DSC-22-20-10-10: handles Nav, Plan, Perf, Predictions.",
  },
  {
    id: 203,
    theme: "Powerplant",
    question:
      "Is it permissible to use reverse thrust to power back on the ground?",
    options: [
      "Yes, but only in an uncongested area",
      "No, unless it is on a downslope",
      "No, it is prohibited",
      "Yes, if no push back tug is available",
    ],
    correct: 2,
    explanation: "FCOM LIM-ENG: Power back with reverse is prohibited.",
  },
  {
    id: 204,
    theme: "APU",
    question:
      "What is the maximum altitude for APU single pack bleed air operation?",
    options: ["39,100 ft", "30,000 ft", "22,500 ft", "15,000 ft"],
    correct: 2,
    explanation: "FCOM LIM-APU: 1 pack limit is 22,500 ft.",
  },
  {
    id: 205,
    theme: "Performance / EFB",
    question: "Which of the following defines Icing conditions?",
    options: [
      "Before T/O: OAT 15°C or below, contaminated runway.",
      "In flight: TAT 10°C down to SAT minus 30°C.",
      "In flight: SAT 10°C or below.",
      "Before T/O: OAT 10°C or below, visible moisture, visibility less than 1 mile.",
    ],
    correct: 3,
    explanation: "FCOM PRO-NOR-SUP-ADVWXR: OAT <= 10°C + moisture on ground.",
  },
  {
    id: 206,
    theme: "Navigation",
    question: "How is a rapid IRS alignment carried out?",
    options: [
      "On all transit stops by recycling the IR selectors OFF/ON.",
      "If on the ground set the IR Rotary Selectors to OFF then back to NAV within 5 seconds.",
      "If on the ground set the IR Rotary Selectors to OFF then back to NAV after more than 5 seconds.",
      "On all transit stops, by recycling the NAV and ADR switches OFF/ON.",
    ],
    correct: 1,
    explanation: "FCOM DSC-34-NAV-10-20: Recycle IR within 5s.",
  },
  {
    id: 207,
    theme: "Landing Gear",
    question:
      "After takeoff, you retract the landing gear and get this ECAM caution: SHOCK ABSORBER FAULT. What does it mean?",
    options: [
      "The right main LG leg shortening mechanism has failed and the LG will not retract",
      "One shock absorber not extended when airborne",
      "The right main LG lengthening mechanism has failed and that leg will not retract",
      "The right main LG lengthening mechanism must be reset using the reset position on the LDG GEAR GRVTY EXTN sw",
    ],
    correct: 1,
    explanation: "FCOM PRO-ABN-LG: absorber not extended upon airborne.",
  },
  {
    id: 208,
    theme: "APU",
    question:
      "The APU may be started and operated, even if the LOW OIL LEVEL ECAM advisory is displayed.",
    options: [
      "True",
      "False",
      "The APU doesn't need OIL below FL 100",
      "The APU doesn't need OIL below FL 200",
    ],
    correct: 0,
    explanation: "FCOM DSC-49-30: permitted with low oil advisory.",
  },
  {
    id: 209,
    theme: "Powerplant",
    question: "When does the ECAM E/WD memo REFUELG appear?",
    options: [
      "When the END Light illuminates steady green.",
      "When the refuel hose is connected to the coupling.",
      "When the MODE SELECT switch is placed to REFUEL",
      "When the refueling control panel door is open.",
    ],
    correct: 3,
    explanation: "FCOM DSC-28-20: occurs when refuel control door is open.",
  },
  {
    id: 210,
    theme: "Systems - Air/Press",
    question:
      "What is the purpose of the safety valves in the pressurization system?",
    options: [
      "To protect against excessive cabin V/S in manual mode",
      "To protect against water ingress in the event of ditching",
      "To protect against excessive cabin altitude",
      "To protect against the cabin differential pressure from going too high or too low",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-21-20-20: Prevents excessive positive/negative pressure.",
  },
  {
    id: 211,
    theme: "Auto Flight / FMS",
    question: "Under what conditions will the Autopilot disconnect?",
    options: [
      "Bank Angle exceeds 45°, at Vmo / Mmo, if the speed reaches Alpha Prot +1°",
      "Bank Angle exceeds 45°, when High Speed Protection becomes active, if the speed reaches Alpha Prot",
      "Bank Angle exceeds 33°, when High Speed Protection becomes active, if the speed reaches Alpha Prot +1°",
      "Bank Angle exceeds 45°, when High Speed Protection becomes active, if the speed reaches Alpha Prot +1°",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-22-30-30: Disconnects if Bank > 45° or High Speed active.",
  },
  {
    id: 212,
    theme: "APU",
    question: "APU air bleed extraction for wing anti-ice is permitted.",
    options: [
      "False",
      "True",
      "Only in winter time",
      "Only if OAT is below ISA at sea level",
    ],
    correct: 0,
    explanation: "FCOM LIM-APU: APU bleed for WAI is prohibited.",
  },
  {
    id: 213,
    theme: "APU",
    question: "What occurs when the APU MASTER switch is selected to ON?",
    options: [
      "The APU air intake flap opens and the starter motor engages immediately.",
      "The APU air intake flap opens and the starter motor engages when the flap is fully open.",
      "The APU fuel pump will operate.",
      "The APU air intake flap opens.",
    ],
    correct: 3,
    explanation: "FCOM DSC-49-10-20: Switch ON opens the air intake flap.",
  },
  {
    id: 214,
    theme: "Flight Controls",
    question:
      "If a spoiler has failed, how does the system compensate for undesirable yaw?",
    options: [
      "Automatic rudder trim.",
      "The symmetrical spoiler on the other wing is inhibited.",
      "F.A.C. commands.",
      "ELAC turn coordination commands.",
    ],
    correct: 1,
    explanation: "FCOM DSC-27-20-10-30: inhibit symmetrical opposite spoiler.",
  },
  {
    id: 215,
    theme: "Fire Protection",
    question: "Which of the following conditions will trigger a fire warning?",
    options: [
      "loops A and B failure within 7 seconds of each other (Engine)",
      "loops A and B failure within 7 seconds of each other (APU)",
      "Fire detection by Loops A and B together (Engine)",
      "loss or failure of a single loop A (Engine)",
    ],
    correct: 2,
    explanation: "FCOM DSC-26-20-10: simultaneous detection by Loops A and B.",
  },
  {
    id: 216,
    theme: "Communications",
    question: "How could you turn off RMP 1?",
    options: [
      "Via ON/OFF switch on RMP panel.",
      "Via switching panel on glare shield.",
      "Via circuit breaker.",
      "It will switch off automatically if on batteries.",
    ],
    correct: 0,
    explanation: "FCOM DSC-23-10-20: each RMP has a dedicated ON/OFF switch.",
  },
  {
    id: 217,
    theme: "Navigation",
    question:
      "What could be the cause if, during a pre-flight check, the IRS ALIGN lights are seen to be flashing?",
    options: [
      "The IRS is using battery power.",
      "Loss of all functions except ATT and HDG.",
      "Failure to switch on the associated ADR.",
      "The IRS is awaiting a position entry.",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-34-NAV-10-20: flashing means awaiting position entry.",
  },
  {
    id: 218,
    theme: "Hydraulics",
    question: "What is the correct statement about the RAT?",
    options: [
      "The RAT is able to pressurize the GREEN or the YELLOW systems",
      "The RAT will deploy automatically in the event of low pressure in the GREEN system",
      "The RAT will deploy automatically when AC bus 1 and 2 are both lost, airspeed above 100 kt",
      "The RAT can be stowed by the crew while they are airborne",
    ],
    correct: 2,
    explanation: "FCOM DSC-24-10-30: RAT deploys automatically if AC 1+2 lost.",
  },
  {
    id: 219,
    theme: "Landing Gear",
    question:
      "If both nosewheel steering handwheels are offset at the same time, which of the following is true?",
    options: [
      "The Captain's input will override the F/O's input.",
      "The pilot making the larger input has control.",
      "The input to the nosewheel steering is the sum of both signals.",
      "The first pilot to offset the handwheel has control.",
    ],
    correct: 2,
    explanation: "FCOM DSC-32-10-30: inputs from both tillers are summed.",
  },
  {
    id: 220,
    theme: "Systems - Air/Press",
    question:
      "Regarding the Avionics Ventilation system, which of the following statements is true?",
    options: [
      "The Extract Valve may be partially open when taxiing.",
      "The Inlet and Extract Valves may be open in flight.",
      "The Inlet and Extract Valves must both be open on the ground.",
      "The Inlet Valve should always be closed in flight.",
    ],
    correct: 3,
    explanation: "FCOM DSC-21-30-20: Inlet valve is always closed in flight.",
  },
  {
    id: 221,
    theme: "APU",
    question:
      "Which of the following statements is correct with regard to the APU?",
    options: [
      "APU auto shut down can only occur on the ground",
      "If bleed air has been used, when the APU MASTER SW is released an immediate APU shut-down will occur",
      "The APU will only shut down automatically if a fire is detected",
      "If the APU SHUT OFF p/b is pushed on the interphone panel under the nose fuselage, an emergency shut down will occur",
    ],
    correct: 3,
    explanation: "FCOM DSC-49-20: External pb allows emergency shutdown.",
  },
  {
    id: 222,
    theme: "Powerplant",
    question: "What does FADEC compute the thrust rating based on?",
    options: [
      "The measured thrust lever angle",
      "The gross weight and ambient air temperature",
      "Pilot modifications of the performance database",
      "MCDU PERF or PROG page inputs",
    ],
    correct: 0,
    explanation: "FCOM DSC-70-30-30: computed based on Thrust Lever Angle.",
  },
  {
    id: 223,
    theme: "Powerplant",
    question:
      "On the Engine Panel, what does an illuminated FAULT light indicate?",
    options: [
      "Abort of an AUTOMATIC START.",
      "A fault in the engine fire detection system.",
      "Engine fire extinguisher bottle pressure low.",
      "Failure of igniters A and B.",
    ],
    correct: 0,
    explanation: "FCOM DSC-70-90-20: indicates auto-start abort on panel.",
  },
  {
    id: 224,
    theme: "Flight Controls",
    question:
      "In Normal Law, what is the maximum bank angle you can reach with the side stick fully deflected?",
    options: ["There is no bank angle limitation", "33°", "67°", "50°"],
    correct: 2,
    explanation: "FCOM LIM-AG-F_CTL: bank angle limited to max 67°.",
  },
  {
    id: 225,
    theme: "Limitations",
    question:
      "Regarding cabin pressure, what are the maximum differential pressures?",
    options: [
      "+8.6 PSI, -1.0 PSI",
      "+8.5 PSI, -0.5 PSI",
      "+9 PSI, -1.0 PSI",
      "+8.06 PSI, -1.0 PSI",
    ],
    correct: 2,
    explanation: "FCOM LIM-AIR: Max +9.0 PSI and -1.0 PSI.",
  },
  {
    id: 226,
    theme: "Powerplant",
    question:
      "When is the FUEL USED indication (on the ECAM SD) reset to zero?",
    options: [
      "When the associated MASTER SW is selected OFF (on the ground only).",
      "When the associated MASTER SW is selected OFF (at any time).",
      "During associated engine start-up sequence (on the ground only).",
      "During associated engine start-up sequence (at any time).",
    ],
    correct: 2,
    explanation: "FCOM DSC-70-90-40: Reset during start-up on ground.",
  },
  {
    id: 227,
    theme: "Powerplant",
    question: "What is the minimum oil quantity for dispatch?",
    options: [
      "9.5 qt + 0.5 qt per hour estimated flight time",
      "12.0 qt",
      "15.0 qt",
      "10.6 qt",
    ],
    correct: 0,
    explanation:
      "OM-B Section 2.3.4.8 Aircraft Acceptance states to check that the oil quantity is at or above 9.5 qt + estimated consumption (average estimated consumption ~0.5 qt/h).<br>FCOM PRO-NOR-SRP-01-10: required 9.5 qt + 0.5 qt/h.",
  },
  {
    id: 228,
    theme: "Hydraulics",
    question:
      "In the event of a hydraulic system overheat, the affected system will be indicated by a ...",
    options: [
      "... FAULT light on the associated overhead panel pb.",
      "... FAULT light on the associated overhead panel pb after 30 seconds.",
      "... MASTER CAUTION on the MCDU.",
      "... FUEL memo on the E/WD.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-29-20: Pump/reservoir overheat triggers FAULT light.",
  },
  {
    id: 229,
    theme: "Fire Protection",
    question:
      "Which of the following lists the correct actions to be carried out when performing a BLOWDOWN bottle test?",
    options: [
      "All engine and APU fire warnings and a discharge light.",
      "The warnings only for the selected bottle.",
      "The cargo smoke detection and agent blowdown warnings.",
      "The discharge lights only.",
    ],
    correct: 1,
    explanation: "FCOM DSC-26-20-20: Test shows specific bottle indications.",
  },
  {
    id: 230,
    theme: "APU",
    question:
      "What is the maximum altitude for APU start using aircraft batteries only?",
    options: ["FL200", "FL100", "FL150", "FL250"],
    correct: 3,
    explanation: "FCOM LIM-APU: battery start permitted up to FL250.",
  },
  {
    id: 231,
    theme: "Systems - Air/Press",
    question: "After engine start, how can the flight crew reset the BMC?",
    options: [
      "By setting the BLEED pushbutton OFF then ON.",
      "By setting the affected BMC pushbutton on the overhead panel OFF then ON.",
      "By setting the BLEED pushbutton OFF.",
      "It can only be reset by maintenance action.",
    ],
    correct: 3,
    explanation: "FCOM DSC-36-10-60: BMC hard fault requires maintenance.",
  },
  {
    id: 232,
    theme: "Hydraulics",
    question:
      'Which of the following correctly completes the statement? "In the event of a loss of the green system, the alternate braking is powered by the yellow system and ...',
    options: [
      "... is not affected by loss of anti-skid.",
      "... the accumulator is pressurized.",
      "... is available when the Yellow electric pump is on.",
      "... must be armed on the overhead panel.",
    ],
    correct: 1,
    explanation: "FCOM DSC-32-30-10: uses Yellow system and accumulator.",
  },
  {
    id: 233,
    theme: "Systems - Air/Press",
    question: "What is the normal position of the PACK FLOW switch?",
    options: [
      "Hi for all operations",
      "NORM for all operations",
      "LO if the aircraft is below 33,000 ft and passenger occupancy is less than 138",
      "NORM for take-off, HI for climb and LO for cruise.",
    ],
    correct: 1,
    explanation:
      "OM-B Section 2.3.6.2 Cockpit Preparation explicitly instructs to select NORM for all other normal operating cases.<br>FCOM PRO-NOR-SRP-01-10: select NORM for typical operation.",
  },
  {
    id: 234,
    theme: "Flight Controls",
    question:
      'Which of the following correctly completes this statement? "The aircraft rudder travel is limited as a function of ...',
    options: [
      "... airspeed.",
      "... altitude.",
      "... radio height.",
      "... flight phase.",
    ],
    correct: 0,
    explanation: "FCOM DSC-22-40-20: RTLU limits rudder based on airspeed.",
  },
  {
    id: 235,
    theme: "Systems - Air/Press",
    question:
      'Which of the following correctly completes this statement? "There are ...',
    options: [
      "... two Air Conditioning Units on the A320.",
      "... three Air Conditioning Units on the A320.",
      "... two Air Conditioning Units on the A320 and a ram air supply.",
      "... two Air Conditioning Units on the A320 and two additional emergency ram air inlets.",
    ],
    correct: 3,
    explanation: "FCOM DSC-21-10-10: Two packs plus emergency ram air inlet.",
  },
  {
    id: 236,
    theme: "Auto Flight / FMS",
    question: "When are the PFD and ND decluttered?",
    options: [
      "The PFD when passing 150 feet RA and the ND when passing 1500 feet RA.",
      "The PFD when passing 30 feet RA and the ND when passing 80 knots.",
      "The PFD when passing 30 feet RA and the ND when passing 1500 feet RA.",
      "The PFD when passing 1500 feet RA and the ND when passing 30 feet RA.",
    ],
    correct: 1,
    explanation: "FCOM DSC-31-10: declutter at 80 kt (ND) and 30 ft RA (PFD).",
  },
  {
    id: 237,
    theme: "Hydraulics",
    question:
      "In the event of a complete loss of braking, which of the following lists the correct actions to be taken?",
    options: [
      "Use of the Yellow hydraulic system, then the accumulator.",
      "Use of the Yellow system only.",
      "Apply full brake pedal force.",
      "Use of the accumulator only.",
    ],
    correct: 0,
    explanation: "FCOM PRO-ABN-BRAKES: uses Yellow then accumulator pressure.",
  },
  {
    id: 238,
    theme: "Systems - Elec",
    question: "What is the normal power source for the IRS's?",
    options: [
      "AC Bus 1 and AC Bus 2",
      "DC Bus 1 and DC Bus 2",
      "DC Bat Bus and AC ESS Bus",
      "DC Bat Bus only",
    ],
    correct: 0,
    explanation: "FCOM DSC-24-10-30: Normal power source is the AC buses.",
  },
  {
    id: 239,
    theme: "Systems - Air/Press",
    question:
      "What do you have to do to obtain 100% oxygen when using the oxygen mask?",
    options: [
      "Move the FLOW SELECTOR to the 100% position.",
      "Move the N/100% selector to the 100% position.",
      "Push the emergency test button.",
      "Move the N/100% selector to the 100% position and press the emergency test button.",
    ],
    correct: 1,
    explanation: "FCOM DSC-35-20-20: Set N/100% selector to 100% position.",
  },
  {
    id: 240,
    theme: "Powerplant",
    question: "In a fuel leak scenario, the fuel transfer system ...",
    options: [
      "... will automatically start transferring fuel.",
      "... has to be manually activated.",
      "... should be selected off.",
      "... is automatically deactivated.",
    ],
    correct: 3,
    explanation: "FCOM PRO-ABN-FUEL: transfers are automatically inhibited.",
  },
  {
    id: 241,
    theme: "APU",
    question: "When does the APU bleed valve close automatically?",
    options: [
      "When the APU is shut down.",
      "When the landing gear is selected down.",
      "When APU  is below 50%.",
      "When the APU bleed air pressure is sufficient.",
    ],
    correct: 0,
    explanation: "FCOM DSC-36-10-30: valve closes during APU shutdown.",
  },
  {
    id: 242,
    theme: "Auto Flight / FMS",
    question:
      "When the aircraft is in alternate or direct law, what are the normal color of the PFD FPV, FD and FMA indications?",
    options: [
      "FPV and FD in green; FMA in amber.",
      "FPV and FD in green; FMA in red.",
      "FPV in magenta; FD in green; FMA in amber.",
      "FPV in amber; FD and FMA in green.",
    ],
    correct: 2,
    explanation: "FCOM DSC-31-40: FMA shows amber box for degraded laws.",
  },
  {
    id: 243,
    theme: "ECAM / Displays",
    question: "When does the ECAM warning display the status page?",
    options: [
      "Immediately following engine shutdown.",
      "Immediately following engine start-up.",
      "On selection of the APU.",
      "When ground power is connected.",
    ],
    correct: 0,
    explanation: "FCOM DSC-31-10: Status auto-displays after engine shutdown.",
  },
  {
    id: 244,
    theme: "Powerplant",
    question:
      "On take-off, when the thrust levers are set to the FLEX detent, which of the following thrust modes will be displayed on the FMA?",
    options: ["MAN THR", "MAN FLEX", "THR CLB", "THR FLX"],
    correct: 1,
    explanation: "FCOM DSC-22-30-80: MAN FLEX displayed in thrust column.",
  },
  {
    id: 245,
    theme: "Powerplant",
    question: "What is the meaning of the white arc on the N1 indication?",
    options: [
      "Thrust command for active mode",
      "Thrust demand for active mode",
      "Position of the thrust levers",
      "Limitation on the N1 value for all modes",
    ],
    correct: 2,
    explanation: "FCOM DSC-70-90-40: Indicates Thrust Lever Angle position.",
  },
  {
    id: 246,
    theme: "Flight Controls",
    question: "When are the speed brakes inhibited in flight?",
    options: [
      "Flaps in config 2",
      "Thrust levers above idle",
      "SEC 1 and 3 fail",
      "SEC 1 and 2 fail",
    ],
    correct: 2,
    explanation: "FCOM DSC-27-20-10: inhibited if SEC 1 and 3 fail.",
  },
  {
    id: 247,
    theme: "Systems - Air/Press",
    question: "How is a pack overheat indicated?",
    options: [
      "By an amber FAULT light on the AIR COND panel",
      "By an amber fault light on the COND SD page",
      "By an ECAM alert",
      "By a red fault light on the AIR COND panel",
    ],
    correct: 0,
    explanation: "FCOM DSC-21-10-50: amber FAULT on PACK pushbutton.",
  },
  {
    id: 248,
    theme: "Flight Controls",
    question: 'What do you understand by the term "Normal Law"?',
    options: [
      "Pitch attitude, load factor and low speed stabilities are the main protection features",
      "Load factor, attitude, high speed, high angle of attack and bank angle protections",
      "Maximum operating speed limitations, minimum operating speed limitations, and minimum descent rate limitations",
      "Load factor, pitch angle, alpha floor, high speed and bank angle protections",
    ],
    correct: 1,
    explanation: "FCOM DSC-27-20-10: Load, pitch, bank, and speed protections.",
  },
  {
    id: 249,
    theme: "Navigation",
    question:
      "After IRS realignment, the aircraft's position is automatically updated by ...",
    options: ["GPS only.", "FMGC only.", "DME only.", "GPIRS."],
    correct: 3,
    explanation: "FCOM DSC-22-20-10: Hybrid GPIRS provides update.",
  },
  {
    id: 250,
    theme: "ECAM / Displays",
    question:
      "What happens when the Evacuation Command pushbutton switch is pressed?",
    options: [
      "An aural alert sounds in the cockpit only.",
      "The emergency evacuation signal sounds throughout the aircraft.",
      "An aural alert sounds in the cabin only.",
      "A signal is sent to the flight attendant panel.",
    ],
    correct: 3,
    explanation: "FCOM DSC-23-40-10: cockpit buzzer sounds; signal to cabin.",
  },
  {
    id: 251,
    theme: "Flight Controls",
    question:
      "Which of the following is the correct statement? The Side Stick Take Over pushbutton ...",
    options: [
      "... must be used by the Captain when using the rudder pedals.",
      "... disengages the other stick, when pressed.",
      "... engages the other stick, when pressed.",
      "... must be used in the event of a failure of the autopilot.",
    ],
    correct: 1,
    explanation:
      "OM-B Section 2.3.1.6 Taking Over the Flight Controls explicitly states: If a take-over becomes necessary during flight, the PM must press the sidestick priority push-button, keeping it pressed until the transfer of control is clearly established.<br>FCOM PRO-NOR-SOP-01-10: sidestick button disengages other stick.",
  },
  {
    id: 252,
    theme: "APU",
    question:
      "What is the maximum altitude for APU two-pack bleed air operation?",
    options: ["15,000 ft", "20,000 ft", "22,500 ft", "18,000 ft"],
    correct: 0,
    explanation: "FCOM LIM-APU: 2 pack operation limit is 15,000 ft.",
  },
  {
    id: 253,
    theme: "Powerplant",
    question:
      "At what temperature do the engine bleed valves close automatically?",
    options: ["100°C", "200°C", "85°C", "185°C"],
    correct: 1,
    explanation: "FCOM DSC-36-10-20: Valves close at threshold (~200°C).",
  },
  {
    id: 254,
    theme: "Flight Controls",
    question:
      "If the slats and/or flaps are not in the expected configuration ...",
    options: [
      "... a warning will be activated if the other pilot's side-stick is deflected.",
      "... the ECAM will present an advisory.",
      "... an audible warning will be activated.",
      "... the aircraft will automatically enter ALTERNATE LAW.",
    ],
    correct: 0,
    explanation: "FCOM DSC-31-15: Triggered ECAM alerts for mismatch.",
  },
  {
    id: 255,
    theme: "Flight Controls",
    question: "When is the side-stick priority indication seen?",
    options: [
      "When there is simultaneous input to the side-sticks.",
      "When there is an out-of-trim condition.",
      "When the autopilot is engaged.",
      "When the aircraft is in ALTERNATE LAW.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-27-20-30: Priority lights flash upon simultaneous inputs.",
  },
  {
    id: 256,
    theme: "Landing Gear",
    question: "What is the maximum altitude for landing gear operation?",
    options: ["25,000 ft", "22,500 ft", "20,000 ft", "15,000 ft"],
    correct: 0,
    explanation: "FCOM LIM-LG: max operating altitude is 25,000 ft.",
  },
  {
    id: 257,
    theme: "Flight Controls",
    question: "When an ELAC fails, what happens to the THS?",
    options: [
      "THS is frozen.",
      "THS reverts to a mechanical standby.",
      "THS reverts to direct pitch control.",
      "THS remains active.",
    ],
    correct: 2,
    explanation: "FCOM DSC-27-20-20: THS reverts to SEC or manual trim.",
  },
  {
    id: 258,
    theme: "Hydraulics",
    question: "What is the function of the Ram Air Turbine (RAT)?",
    options: [
      "To provide AC power during an emergency.",
      "To provide hydraulic pressure during an emergency.",
      "To provide bleed air during an emergency.",
      "To provide essential electrical power in the event of an emergency.",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-29-10-20: provides essential Blue hydraulic pressure.",
  },
  {
    id: 259,
    theme: "APU",
    question: "What is the maximum altitude for APU bleed air extraction?",
    options: ["30,000 ft", "20,000 ft", "25,000 ft", "22,500 ft"],
    correct: 1,
    explanation: "FCOM LIM-APU: bleed extraction limit is 20,000 ft.",
  },
  {
    id: 260,
    theme: "Powerplant",
    question: "On the fuel control panel, when will the transfer valves open?",
    options: [
      "When the outer wing tanks are full.",
      "When the inner wing tanks are empty.",
      "When the inner wing tank fuel level decreases to 1,650 kg.",
      "When the outer wing tanks are empty.",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-28-10-80: Transfer valves open at inner low level (~750kg).",
  },
  {
    id: 261,
    theme: "Limitations",
    question: "What are the pitch and roll limits in Normal Law?",
    options: [
      "Pitch: +20° (+10° at low speed), -15°, Roll: 45°.",
      "Pitch: +30° (+25° at low speed), -15°, Roll: 67°.",
      "Pitch: +25° (+20° at low speed), -15°, Roll: 45°.",
      "Pitch: +30°, Roll: 45°.",
    ],
    correct: 1,
    explanation:
      "FCOM LIM-AG-F_CTL: Normal Law pitch limits are 30° UP / 15° DOWN, and bank is limited to 67°.",
  },
  {
    id: 262,
    theme: "Hydraulics",
    question: "Which hydraulic system operates the landing gear?",
    options: [
      "Green system.",
      "Blue system.",
      "Yellow system.",
      "Blue and Yellow systems.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-32-10-20: The Green hydraulic system powers landing gear extension and retraction.",
  },
  {
    id: 263,
    theme: "Flight Controls",
    question: "If the sidestick priority indication shows green only ...",
    options: [
      "... the other side-stick has been disengaged.",
      "... the autopilot is engaged.",
      "... both side-sticks are neutral.",
      "... both side-sticks are active.",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-27-20-30: Green arrow confirms priority is taken, locking the opposite stick.",
  },
  {
    id: 264,
    theme: "ECAM / Displays",
    question:
      "What will the ECAM display when you disconnect the engine generators?",
    options: [
      "A caution for each generator.",
      "A failure warning for the affected system.",
      "An electrical system schematic.",
      "A general electrical failure.",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-31-15: Fault in main generators triggers caution and displays ELEC SD page.",
  },
  {
    id: 265,
    theme: "Systems - Air/Press",
    question: "How can the flight crew select manual pressurization?",
    options: [
      "By placing the DITCHING pushbutton to ON.",
      "By placing the MODE SEL pushbutton to MAN.",
      "By placing the CABIN PRESS MODE SEL pushbutton to MAN.",
      "By placing the MODE SEL pushbutton to AUTO.",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-21-20-40: MODE SEL to MAN allows toggle-switch control of the outflow valve.",
  },
  {
    id: 266,
    theme: "Flight Controls",
    question: "When will the aircraft automatically enter ALTERNATE LAW?",
    options: [
      "When multiple system failures occur.",
      "When the autopilot is engaged.",
      "When the aircraft descends below 1,500 ft.",
      "When the side-sticks are deflected simultaneously.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-27-20-20: Law degrades following multiple flight control or sensor failures.",
  },
  {
    id: 267,
    theme: "Flight Controls",
    question: "When does the Flight Augmentation Computer (FAC) become active?",
    options: [
      "Only during manual flight.",
      "Only when the autopilot is engaged.",
      "Only during flight on autopilot and manual flight.",
      "Only during manual flight and with the autopilot engaged.",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-22-40-20: FACs provide continuous yaw damping regardless of AP engagement.",
  },
  {
    id: 268,
    theme: "Systems - Air/Press",
    question: "What happens when the DITCHING pushbutton is selected ON?",
    options: [
      "All valves below the water line are closed.",
      "The aircraft enters ditching mode.",
      "The fuel transfer valves are opened.",
      "All cabin outflow valves are closed.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-21-20-40: Sealing action closes all valves below the waterline.",
  },
  {
    id: 269,
    theme: "Flight Controls",
    question:
      "What happens to the speed brake panels when the aircraft descends below 10,000 ft?",
    options: [
      "They automatically retract.",
      "They remain in the selected position.",
      "They automatically extend.",
      "They retract to the half-speed position.",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-27-20-10: Panels remain deployed as commanded; they do not auto-retract strictly by altitude.",
  },
  {
    id: 270,
    theme: "Landing Gear",
    question:
      "When the landing gear is up, what happens to the T.O. CONFIG TEST pushbutton?",
    options: [
      "The T.O. CONFIG TEST pushbutton is inhibited.",
      "The T.O. CONFIG TEST pushbutton remains active.",
      "The T.O. CONFIG TEST pushbutton must be pressed to reset the system.",
      "The T.O. CONFIG TEST pushbutton is automatically reset.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-31-30: CONFIG test is a ground-only function (phases 2 to 3) and inhibited in flight (from phase 4).",
  },
  {
    id: 271,
    theme: "Hydraulics",
    question: "What happens when the RAT MAN ON pushbutton is pressed?",
    options: [
      "The RAT is manually deployed.",
      "The RAT is electrically armed.",
      "The RAT is automatically deployed.",
      "The RAT is locked in the stowed position.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-29-20: RAT MAN ON manually deploys the turbine to pressurize Blue system.",
  },
  {
    id: 272,
    theme: "Powerplant",
    question:
      'Which of the following correctly completes the statement? "The engine control system is designed to ...',
    options: [
      "... provide automatic start-up only.",
      "... provide automatic start-up and shut down.",
      "... provide manual start-up and automatic shut down.",
      "... provide automatic start-up and manual shut down.",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-70-20: FADEC manages start sequences and secures engine upon shutdown.",
  },
  {
    id: 273,
    theme: "Systems - Air/Press",
    question: "How many valves does the aircraft pressurization system have?",
    options: ["Two", "Three", "Four", "Five"],
    correct: 3,
    explanation:
      "FCOM DSC-21-20-20: Pressurization comprises 1 Outflow and 2 Safety valves (test bank defines 5).",
  },
  {
    id: 274,
    theme: "Hydraulics",
    question:
      "What happens to the RAT if the aircraft speed drops below 140 kt?",
    options: [
      "The RAT is automatically retracted.",
      "The RAT is manually retracted.",
      "The RAT is electrically disconnected.",
      "The RAT can no longer power the aircraft systems.",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-24-10-30: RAT stalls below ~140 kt, losing power generation capability.",
  },
  {
    id: 275,
    theme: "Systems - Air/Press",
    question: "How is an automatic pressurization system fault indicated?",
    options: [
      "By an amber fault light on the overhead panel.",
      "By a red warning on the ECAM.",
      "By an advisory on the ECAM.",
      "By an alert on the MCDU.",
    ],
    correct: 1,
    explanation:
      "FCOM PRO-ABN-CAB_PR: Auto-pressurization failures generate ECAM alerts.",
  },
  {
    id: 276,
    theme: "Flight Controls",
    question: "What is the role of the spoiler panels?",
    options: [
      "They are used for roll control and ground spoilers.",
      "They are used for roll control only.",
      "They are used as speed brakes only.",
      "They are used as ground spoilers only.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-27-10-20: Spoilers assist roll, act as speed brakes, and ground spoilers.",
  },
  {
    id: 277,
    theme: "Flight Controls",
    question: "What happens to the spoilers during an automatic landing?",
    options: [
      "They are automatically retracted.",
      "They are automatically extended on touchdown.",
      "They remain in the selected position.",
      "They are manually extended.",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-27-20-10: Spoilers extend automatically upon main wheel touchdown.",
  },
  {
    id: 278,
    theme: "ECAM / Displays",
    question: "When are the ECAM status and recall pages displayed?",
    options: [
      "Immediately following an engine failure.",
      "Immediately following an engine shutdown.",
      "When ground power is connected.",
      "When the aircraft reaches cruising altitude.",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-31-10: Status page auto-displays after ground engine shutdown.",
  },
  {
    id: 279,
    theme: "Powerplant",
    question: "When does the FUEL USED indication reset to zero?",
    options: [
      "When the associated MASTER SW is selected OFF.",
      "During the associated engine shutdown sequence.",
      "During the associated engine start-up sequence.",
      "When the aircraft reaches cruising altitude.",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-70-90-40: Reset occurs automatically on ground during next start sequence.",
  },
  {
    id: 280,
    theme: "Systems - Air/Press",
    question: "What is the purpose of the oxygen system?",
    options: [
      "To provide supplemental oxygen for the crew and passengers.",
      "To provide oxygen for the engines.",
      "To pressurize the cabin.",
      "To provide emergency oxygen for the crew only.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-35-10: Provides vital supplemental oxygen during depressurization.",
  },
  {
    id: 281,
    theme: "Hydraulics",
    question: "What happens to the aircraft systems when the RAT is deployed?",
    options: [
      "The aircraft systems are powered by the main battery.",
      "The aircraft systems are powered by the RAT and the main battery.",
      "The aircraft systems are powered by the RAT only.",
      "The aircraft systems are powered by the RAT and the emergency generator.",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-24-10-30: RAT drives Blue hyd system, which powers EMER GEN.",
  },
  {
    id: 282,
    theme: "Flight Controls",
    question: "What happens to the rudder when the aircraft is in direct law?",
    options: [
      "The rudder remains in the last commanded position.",
      "The rudder is controlled by the autopilot.",
      "The rudder is manually controlled by the flight crew.",
      "The rudder is automatically centered.",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-27-20-20: Yaw damping lost; crew must coordinate turns manually.",
  },
  {
    id: 283,
    theme: "Systems - Elec",
    question: "What is the function of the emergency electrical configuration?",
    options: [
      "To provide power to the essential systems during an emergency.",
      "To provide power to the essential systems when both engine-driven generators are inoperative.",
      "To provide power to the essential systems when the aircraft is on the ground.",
      "To provide power to the essential systems during an electrical failure.",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-24-10-30: Sustains essential systems when all main AC generators fail.",
  },
  {
    id: 284,
    theme: "Flight Controls",
    question: "When do the speed brakes automatically retract?",
    options: [
      "When the aircraft reaches 10,000 ft.",
      "When the aircraft is in the landing configuration.",
      "When the thrust levers are advanced.",
      "When the autopilot is engaged.",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-27-20-10: Advancing levers above MCT detent retracts speedbrakes.",
  },
  {
    id: 285,
    theme: "ECAM / Displays",
    question:
      "When does the T.O. CONFIG TEST pushbutton inhibit the take-off configuration warnings?",
    options: [
      "When the aircraft is on the ground.",
      "When the aircraft is in flight.",
      "When the aircraft reaches 100 knots.",
      "Never.",
    ],
    correct: 3,
    explanation:
      "⚠️ Manually changed the answer from the bank because it is wrong. The T.O. CONFIG TEST pb does not inhibit any warnings, on the contrary it triggers them if the T.O. config is good.<br>FCOM DSC-31-15: Test simulates takeoff power on ground to check config.",
  },
  {
    id: 286,
    theme: "Landing Gear",
    question:
      "What happens to the landing gear when the LGCIU detects a fault?",
    options: [
      "The landing gear remains in the last selected position.",
      "The landing gear automatically extends.",
      "The landing gear automatically retracts.",
      "The landing gear is manually controlled by the flight crew.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-32-10-20: LGCIU fails safe; gear status frozen; ECAM directs crew.",
  },
  {
    id: 287,
    theme: "Flight Controls",
    question: "What is the role of the FACs in the flight control system?",
    options: [
      "To provide flight envelope protection and rudder control.",
      "To provide pitch and roll control.",
      "To provide automatic landing capabilities.",
      "To provide autopilot and autothrust functions.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-22-40-20: FACs compute flight envelope and handle rudder control.",
  },
  {
    id: 288,
    theme: "Systems - Elec",
    question:
      "What happens to the aircraft's electrical system when the emergency generator is operating?",
    options: [
      "The essential busses are powered by the emergency generator.",
      "All aircraft systems are powered by the emergency generator.",
      "The main battery powers the essential busses.",
      "The RAT powers the essential busses.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-24-10-30: EMER GEN prioritized power to AC/DC ESS buses.",
  },
  {
    id: 289,
    theme: "APU",
    question:
      "What is the maximum altitude for APU start using battery power only?",
    options: ["20,000 ft", "25,000 ft", "30,000 ft", "35,000 ft"],
    correct: 1,
    explanation:
      "FCOM LIM-APU: APU battery start allowed up to FL250 (25,000 ft).",
  },
  {
    id: 290,
    theme: "Systems - Air/Press",
    question: "What happens when the MODE SEL pushbutton is selected to MAN?",
    options: [
      "The pressurization system operates automatically.",
      "The pressurization system operates manually.",
      "The cabin outflow valves close automatically.",
      "The cabin outflow valves open automatically.",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-21-20-40: MAN mode allows manual toggle control of outflow valve.",
  },
  {
    id: 291,
    theme: "Hydraulics",
    question: "What happens when the RAT is manually deployed?",
    options: [
      "The aircraft systems are powered by the main battery.",
      "The aircraft systems are powered by the RAT and the emergency generator.",
      "The aircraft systems are powered by the RAT only.",
      "The aircraft systems are powered by the emergency generator only.",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-29-10-20: Manual deployment pressurizes Blue hyd system to power EMER GEN.",
  },
  {
    id: 292,
    theme: "Systems - Air/Press",
    question: "What is the limiting factor for opening the Ram Air Valve?",
    options: [
      "Aircraft altitude at or below 10,000 ft.",
      "Cabin differential pressure is lower than 1 PSI.",
      "Aircraft speed at or below 300 kt.",
      "Aircraft must be fully depressurized.",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-21-20-40: Valve inhibited if differential pressure > 1 PSI.",
  },
  {
    id: 293,
    theme: "Landing Gear",
    question:
      "The nosewheel steering tillers can turn the nosewheel up to how many degrees?",
    options: ["75°", "65°", "78°", "70°"],
    correct: 0,
    explanation:
      "FCOM DSC-32-10-40: Tillers (handwheels) provide steer angle up to +/- 75°.",
  },
  {
    id: 294,
    theme: "Landing Gear",
    question:
      "In order to perform a L/G gravity extension of the landing gear, what must the crew do?",
    options: [
      "Turn the gear crank counter-clockwise for 3 turns.",
      "Turn the gear crank clockwise for 2 turns.",
      "Turn the gear crank clockwise for 3 turns.",
      "Turn the gear crank counter-clockwise for 2 turns.",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-32-10-40: Pull handle and rotate clockwise 3 full turns.",
  },
  {
    id: 295,
    theme: "Landing Gear",
    question:
      "There are two triangles for each gear on the ECAM WHEEL page. What do they represent?",
    options: [
      "Each triangle represents one wheel on the gear",
      "Each triangle represents the gear position detected by one of the two LGCIUs",
      "Each triangle represents one of the braking systems available for that gear",
      "The front triangle indicates the position of that gear and the back triangle indicates the status of the brakes of that gear",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-32-10-40: Left triangle from LGCIU 1; right from LGCIU 2.",
  },
  {
    id: 296,
    theme: "Systems - Air/Press",
    question:
      "Which of the following conditions will cause the cabin signs and lighting to illuminate?",
    options: [
      "Above 11,300 feet (approx.) cabin altitude, regardless of the SEAT BELTS and NO SMOKING switch positions.",
      "Above 11,300 feet (approx.) cabin altitude, provided the EMER EXIT LT switch is at ARM or ON.",
      "Above 11,300 feet (approx.) cabin altitude, provided the EMER EXIT LT switch is at ARM.",
      "If the cabin altitude exceeds 14,000 feet.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-33-20-20: Automatic signs occur above approx 11,300 ft cabin altitude.",
  },
  {
    id: 297,
    theme: "Powerplant",
    question:
      "What is important to remember to avoid damaging the IDG disconnection mechanism?",
    options: [
      "You must push the IDG pb until the GEN FAULT light comes on and then for at least 3 more seconds",
      "You must push the IDG pb for a maximum of 10 seconds",
      "You push the IDG pb for at least 10 seconds to ensure the disconnection",
      "You push the IDG pb until the GEN FAULT light comes on, but only for a maximum of 3 seconds",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-24-20: IDG disconnect button must not be held > 3 seconds.",
  },
  {
    id: 298,
    theme: "Powerplant",
    question: "During a manual start, what function does the FADEC perform?",
    options: [
      "Passive monitoring of the start sequence, to close the start valve and cut off the ignition on the ground",
      "To control the start sequence and take corrective action in case of failure or malfunction",
      "The FADEC does not perform any function during a manual start and all actions have to be carried out by the pilots",
      "The FADEC does not work until idle is reached",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-70-20: FADEC passively monitors and auto-closes start valve at ~50% N2.",
  },
  {
    id: 299,
    theme: "Flight Controls",
    question: "Under what circumstances will MECHANICAL BACK-UP occur?",
    options: [
      "Loss of all flight control computers: aircraft is controlled using stabilizer and rudder.",
      "Loss of all flight control computers: aircraft is controlled using elevator and rudder.",
      "Loss of G and Y hydraulics: aircraft is controlled using stabilizer and rudder.",
      "Loss of all hydraulics.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-27-20-20: Occurs with loss of all five ELAC/SEC computers.",
  },
  {
    id: 300,
    theme: "Performance / EFB",
    question:
      "In the MEL 'Remarks or Exceptions' column, what is signified by (O)?",
    options: [
      "Aircraft may be flown back to base for rectification.",
      "An operational procedure must be carried out.",
      "A procedure to be carried out by maintenance.",
      "Dispatch is not allowed.",
    ],
    correct: 1,
    explanation:
      "FCOM PRO-ABN-ABN-00: '(O)' requires an Operational procedure by crew.",
  },
  {
    id: 301,
    theme: "Flight Controls",
    question: "Which surfaces of the aircraft are anti-iced?",
    options: [
      "Outboard wing leading edge, stabilizer leading edge and engine air intake.",
      "Outboard wing leading edge, Fin leading edge and engine air intake.",
      "All of the wing leading edge and engine air intake.",
      "Three outboard slats on each wing and engine air intake.",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-30-10-10: Engine cowls and the three outboard slats (3, 4, 5).",
  },
  {
    id: 302,
    theme: "Ice & Rain Protection",
    question:
      "Which slats in each wing can be heated with hot air from the pneumatic system?",
    options: [
      "The three inboard slats (1-2-3)",
      "The three outboard slats (3-4-5)",
      "The even slats (2-4)",
      "All slats are anti-iced",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-30-20-10: Three outboard slats (3, 4, 5) are anti-iced.",
  },
  {
    id: 303,
    theme: "Flight Controls",
    question:
      "Which of the following correctly completes the statement? 'VFE NEXT is...",
    options: [
      "...an amber equal sign showing the VFE corresponding to the next flap lever position.",
      "...the minimum speed for the present configuration.",
      "...the minimum FLAP/SLAT retraction speed.",
      "...the maximum speed for the present configuration.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-22-10-50-30: Displayed as an amber '=' on the speed scale.",
  },
  {
    id: 304,
    theme: "Powerplant",
    question:
      "Once opened, when do the fuel transfer valves close automatically?",
    options: [
      "During the next refueling",
      "When fuel transfer is complete",
      "When the engines are shut down",
      "Manually closed by the refueler",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-28-10-80: Transfer valves close only upon next ground refueling.",
  },
  {
    id: 305,
    theme: "Flight Controls",
    question:
      "The control surfaces are electrically controlled, but are there any that have a mechanical backup?",
    options: [
      "Yes, the elevators and ailerons",
      "Yes, the elevators and rudder",
      "Yes, the THS and rudder",
      "No, they all require some electrical power",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-27-10-20: THS and Rudder have cable-driven mechanical backup.",
  },
  {
    id: 306,
    theme: "Auto Flight / FMS",
    question: "After T/O, when does SRS (FMA) change to CLB?",
    options: [
      "When the thrust levers are placed in the climb detent.",
      "After SLAT retraction.",
      "When passing acceleration altitude.",
      "When passing thrust reduction altitude.",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-22-30-40-20: Transition to CLB mode at programmed Acceleration Altitude.",
  },
  {
    id: 307,
    theme: "Auto Flight / FMS",
    question: "Regarding the FMA: A/THR in white means it is...",
    options: ["Disconnected", "Armed", "Active", "Off"],
    correct: 2,
    explanation:
      "FCOM DSC-22-30-80-20: White color signifies an Active guidance mode.",
  },
  {
    id: 308,
    theme: "Flight Controls",
    question:
      "In alpha protection, what does the movement of the sidestick between neutral and fully aft control?",
    options: [
      "Angle of Attack (Alpha).",
      "Altitude.",
      "Airspeed.",
      "LOAD FACTOR (G).",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-27-20-10-20: Sidestick commands specific Angle of Attack up to Alpha Max.",
  },
  {
    id: 309,
    theme: "Powerplant",
    question:
      "With all the tanks full and the MODE SEL in AUTO, which of the following is correct?",
    options: [
      "The center tank pumps will stop when the slats are extended.",
      "The center tank pumps will stop when the flaps are extended.",
      "All pumps will run continuously.",
      "The wing pumps will stop when the slats are extended.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-28-10-30: Center pumps auto-stop when slats are extended.",
  },
  {
    id: 310,
    theme: "Auto Flight / FMS",
    question: "Approximately how long do the ADIRS take for a full alignment?",
    options: ["1 minute", "3 minutes", "7 minutes", "10 minutes"],
    correct: 3,
    explanation:
      "FCOM DSC-34-NAV-10-10: Full IRS alignment takes approx 10 minutes.",
  },
  {
    id: 311,
    theme: "Powerplant",
    question:
      "During an engine start sequence there is a grey background on N2 indication which disappears at a certain N2 value. What does this indicate?",
    options: [
      "The igniters are no longer being powered",
      "The start valve air pressure has dropped",
      "The start sequence has finished and all engine parameters have stabilized",
      "There is a start fault and a dry crank is in progress",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-70-90-40: Removal of grey highlight signals start completion at idle.",
  },
  {
    id: 312,
    theme: "Flight Controls",
    question:
      "At take off (or go around), what is the minimum speed at which the slats may be retracted from CONF 1+F to CONF 0?",
    options: ["F speed", "S speed", "Green dot speed", "Vls speed"],
    correct: 1,
    explanation:
      "FCOM DSC-22-10-50-20: 'S' speed is minimum speed for slat retraction.",
  },
  {
    id: 313,
    theme: "Communications",
    question: "Which of the following can be tuned by RMP No. 1?",
    options: [
      "Any radio communication equipment and any onside radio navigation receivers.",
      "Any radio communication equipment only.",
      "Associated radio navigation equipment, and dedicated radio communication equipment.",
      "VHF 1 and HF 1 only.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-23-10-20: RMPs tune all COM radios and on-side Nav receivers.",
  },
  {
    id: 314,
    theme: "ECAM / Displays",
    question:
      "Which of the following color codings is correct for the pushbutton switches?",
    options: [
      "AMBER - immediate action: BLUE - temporary operation.",
      "GREEN - temporary operation: WHITE - abnormal position.",
      "WHITE - temporary operation: GREEN - normal operation.",
      "RED - immediate action",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-31-05-10: Red indicates immediate action requirement.",
  },
  {
    id: 315,
    theme: "Powerplant",
    question:
      "What does an amber line across the last two digits of the fuel quantity on the fuel page mean?",
    options: [
      "There is no fuel in that tank",
      "The fuel in that tank is unusable",
      "That engine is shut down",
      "The fuel quantity indication is inaccurate",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-28-20: Dashes signify sensing inaccuracy for that tank.",
  },
  {
    id: 316,
    theme: "APU",
    question:
      "It is the first flight of the day. Before performing the APU fire test, you have to check that...",
    options: [
      "The APU FIRE pb is in and guarded, and the AGENT light is illuminated",
      "The APU FIRE pb is in and guarded, and the APU is running",
      "The red disk APU fire overpressure indicator is not visible on the outside of the aircraft",
      "The APU FIRE pb is in and guarded, and the AGENT light is out",
    ],
    correct: 3,
    explanation:
      "OM-B Section 2.3.4.3 APU Fire Test explicitly instructs to check that the APU FIRE pb-sw is IN and GUARDED, and that the AGENT lights are OFF before pressing the test button.<br>FCOM PRO-NOR-SRP-01-10: APU FIRE pb IN and AGENT lights OFF before test.",
  },
  {
    id: 317,
    theme: "Flight Controls",
    question:
      "The flight maneuvering load acceleration limits in clean configuration are -1 g to +2.5 g",
    options: ["False", "True", "Only in Alternate Law", "Only in Direct Law"],
    correct: 1,
    explanation:
      "FCOM LIM-AG-F_CTL: Structurally limited to -1g to +2.5g (clean config).",
  },
  {
    id: 318,
    theme: "Flight Controls",
    question:
      "A-LOCK (alpha lock) is annunciated below the Slat/Flap indicator on the E/WD. Which of the following would cause this condition, and how would you recover?",
    options: [
      "Flaps are locked in Config 1. To retract Flaps, reduce angle of attack.",
      "Slats and Flaps are locked in Config 1. To retract Slats and Flaps, recycle the Flap lever.",
      "Slats are locked in Config 1 due to high angle of attack. To retract slats, recycle the Flap lever.",
      "Slats are locked in Config 1 due to high angle of attack. To retract the slats, reduce the angle of attack.",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-27-20-30: Slat retraction inhibited at high AoA; reduce AoA to recover.",
  },
  {
    id: 319,
    theme: "ECAM / Displays",
    question: "Regarding the PFD, which of the following statements is true?",
    options: [
      "The bottom left corner of the PFD displays the MACH number at all times.",
      "On the IAS, a split magenta triangle indicates a managed climb.",
      "Selected heading can be displayed as a triangle or digits.",
      "An excessive rate of descent will cause the IVSI to go RED.",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-31-40: Heading shown as blue triangle or digits if off-scale.",
  },
  {
    id: 320,
    theme: "Auto Flight / FMS",
    question:
      "What is the standard way for the flight crew to disengage the autopilot?",
    options: [
      "By pressing the takeover pb on the sidestick",
      "By using the AP pb on the FCU",
      "By moving a side stick beyond a given threshold",
      "By applying excessive force to the pitch trim wheel",
    ],
    correct: 0,
    explanation:
      "FCOM PRO-NOR-SOP-01: Standard disconnect via instinctive sidestick pb.",
  },
  {
    id: 321,
    theme: "ECAM / Displays",
    question: "On ECAM SD, what does an amber door indication mean?",
    options: [
      "The door is fully open",
      "The door is fully closed",
      "The door is not locked",
      "The door is inoperative",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-31-20: Amber signifies door is open or not properly locked.",
  },
  {
    id: 322,
    theme: "Powerplant",
    question: "What is the minimum fuel quantity for takeoff?",
    options: ["2,400 kg", "1,500 kg", "15,400 kg", "There is no limitation"],
    correct: 1,
    explanation:
      "FCOM LIM-FUEL: 1,500 kg minimum required to prevent maneuver-induced starvation.",
  },
  {
    id: 323,
    theme: "ECAM / Displays",
    question:
      "When approaching to land, with FLAPS 3 on a fully serviceable aircraft, what is the correct action on the GPWS panel?",
    options: [
      "Switch OFF the SYS switch.",
      "Switch ON the G/S MODE switch.",
      "Switch ON the LDG FLAP 3 switch.",
      "Switch ON the FLAP MODE switch.",
    ],
    correct: 2,
    explanation:
      "FCOM PRO-NOR-SRP-01-70: LDG FLAP 3 switch prevents nuisance warnings in CONF 3.",
  },
  {
    id: 324,
    theme: "Systems - Air/Press",
    question:
      "Which of the following correctly completes this statement? 'The MAN V/S CTL switch on the CABIN PRESS panel is...",
    options: [
      "...operative at all times, and controls the outflow valve.",
      "...operative in the MAN pressurization mode: -hold up to OPEN the outflow valve.",
      "...operative in the MAN pressurization mode: -hold up to OPEN the safety valve.",
      "...inoperative if the DITCHING switch is ON.",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-21-20-40: Controls outflow valve manually when MODE SEL is MAN.",
  },
  {
    id: 325,
    theme: "Hydraulics",
    question:
      "From which HYD system is the BRAKE & ACCU PRESS indicator (Triple BRAKE indicator located on the center instrument panel) indicating pressure?",
    options: ["Green", "Yellow", "Blue", "Amber"],
    correct: 1,
    explanation:
      "FCOM DSC-32-30-20: Digital/analog triple gauge shows Yellow system pressure.",
  },
  {
    id: 326,
    theme: "Limitations",
    question:
      "What is the maximum speed for selecting the gear down (Vlo extension)?",
    options: ["220 kt", "250 kt", "280 kt", "Green Dot"],
    correct: 1,
    explanation:
      "FCOM LIM-AG-SPD: Maximum speed for gear extension (VLO) is 250 kt.",
  },
  {
    id: 327,
    theme: "APU",
    question:
      "What is the maximum APU rotor speed (% N on ECAM) above which the APU shuts down automatically?",
    options: ["100 %.", "117 %.", "107 %.", "97 %."],
    correct: 2,
    explanation:
      "FCOM DSC-49-30: Automatic overspeed shutdown triggers above 107% N.",
  },
  {
    id: 328,
    theme: "Flight Controls",
    question:
      "The message F/CTL FLAPS LOCKED appears on the E/WD. What does it mean?",
    options: [
      "Non alignment between 2 flaps has been detected and the flaps are locked in their present position",
      "To reduce stress on the wings during turbulence, the flap movement has been slowed down by the WING TIP BRK",
      "Due to a fault with a flap, the WING TIP BRK has locked it so that the remaining flaps will continue to operate",
      "Due to a fault, a hydraulic device has locked the flaps and slats at their present position",
    ],
    correct: 0,
    explanation:
      "FCOM PRO-ABN-F_CTL: Wing Tip Brakes lock flaps for asymmetry or runaway.",
  },
  {
    id: 329,
    theme: "ECAM / Displays",
    question:
      "When set to TA/RA, the TCAS system provides traffic and resolution advice with regard to:",
    options: [
      "All other aircraft",
      "Only other transponding aircraft",
      "Only other aircraft on the same ATC frequency",
      "Only other aircraft with the same transponder code",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-34-SURV-10-10: TCAS advisories require an operating transponder on targets.",
  },
  {
    id: 330,
    theme: "Systems - Elec",
    question:
      "What is the function of the GEN 1 LINE pb located on the EMER ELEC PWR panel?",
    options: [
      "It inhibits the RAT to allow the slats to extend for landing",
      "GEN 1 line contactor opens. The AC BUS 1 is supplied from GEN 2 through bus tie contactors. This is used during the smoke drill",
      "It allows the RAT to be manually extended",
      "It allows the ILS and the slats/flaps to be connected to the APU battery for the approach",
    ],
    correct: 1,
    explanation:
      "FCOM PRO-ABN-SMOKE: Isolates GEN 1 from AC buses (Smoke procedures).",
  },
  {
    id: 331,
    theme: "Systems - Air/Press",
    question:
      "The lavatory and galley areas are ventilated using re-circulated cabin air. How is the system switched on?",
    options: [
      "By selecting VENT EXTRACT on the VENTILATION panel",
      "The extraction fan runs continuously when electric power is available",
      "The system is fully automatic, and the fan runs whenever the aircraft is pressurized",
      "The system is fully automatic and is controlled by a weight-on wheels micro-switch on the gear",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-21-30-50: Fan runs automatically with electrical power.",
  },
  {
    id: 332,
    theme: "Limitations",
    question: "What is the maximum speed for FLAP 3?",
    options: ["177 knots", "185 knots", "200 knots", "205 knots"],
    correct: 1,
    explanation: "FCOM LIM-AG-SPD: VFE for CONF 3 is 185 kt.",
  },
  {
    id: 333,
    theme: "Fire Protection",
    question:
      "With reference to the engine fire system, which statement is correct?",
    options: [
      "All engines have a single fire protection loop",
      "Each engine is equipped with two fire bottles",
      "Each engine has a single fire bottle which is also connected to the other engine",
      "Each fire warning is only shown on the FIRE panel",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-26-20-10: Each engine utilizes 2 Halon fire bottles.",
  },
  {
    id: 334,
    theme: "Systems - Air/Press",
    question:
      "What happens in the event of failure of a cabin pressure controller?",
    options: [
      "An automatic transfer occurs to the other controller.",
      "Transfer is through manual control.",
      "The pilots must manually select landing elevation.",
      "An emergency descent must be initiated.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-21-20-30: Standby CPC automatically takes over active control.",
  },
  {
    id: 335,
    theme: "Powerplant",
    question: "Regarding an Auto Start, which of the following is correct?",
    options: [
      "Loss of the N2 grey (highlight) background signifies start valve closure.",
      "Eng 2 normally uses igniter B.",
      "Loss of the N2 grey (highlight) background signifies end of the start sequence.",
      "Putting the MODE SEL to START closes the bleed valve.",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-70-90-40: Disappearance of grey box marks idle reaching/start end.",
  },
  {
    id: 336,
    theme: "Ice & Rain Protection",
    question:
      "What is the default situation if electrical control to the Wing Anti-Ice and Engine Anti-Ice is lost?",
    options: [
      "Wing Anti-Ice OFF, Engine Anti-Ice ON.",
      "Wing Anti-Ice ON, Engine Anti-Ice OFF.",
      "Both ON.",
      "Both OFF.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-30-10-10: Engines fail OPEN (Safe); Wings fail CLOSED (Protect structure).",
  },
  {
    id: 337,
    theme: "Auto Flight / FMS",
    question:
      "At the beginning of the takeoff roll, what will be the condition of the A/THR?",
    options: [
      "ACTIVE at 1500 feet AGL.",
      "ACTIVE on selection of TOGA or FLX power.",
      "ARMED on selection of TOGA or FLX power.",
      "ARMED at 80 kts.",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-22-30-50-30: A/THR arms (Blue FMA) upon FLX or TOGA selection.",
  },
  {
    id: 338,
    theme: "Systems - Elec",
    question:
      "In the event of an AC BUS 1 fault, how could the AC ESS BUS be powered?",
    options: [
      "It cannot be powered.",
      "It can be powered from AC BUS 2.",
      "It must be powered by the APU.",
      "It will be powered by the emergency generator.",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-24-10-30-30: AC BUS 2 supplies AC ESS via AC ESS FEED pb.",
  },
  {
    id: 339,
    theme: "Auto Flight / FMS",
    question: "What is true about SRS during the takeoff phase?",
    options: [
      "SRS mode will provide guidance to maintain V2 + 10 kts (minimum) as a speed reference up to the acceleration altitude",
      "SRS mode is available up to 1500 ft AGL",
      "SRS mode will not engage if TOGA is available",
      "SRS mode is not available",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-22-30-40-20: SRS mode guides pitch for V2 + 10 kt minimum.",
  },
  {
    id: 340,
    theme: "Flight Controls",
    question: "What happens in the event of SFCC 1 total failure?",
    options: [
      "SLATS will be inoperative.",
      "FLAPS will be inoperative.",
      "SLATS and FLAPS will be locked by the Wing Tip Brake.",
      "SLATS and FLAPS will operate at half speed.",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-27-10-20: Loss of 1 SFCC halves surface actuation speed.",
  },
  {
    id: 341,
    theme: "Performance / EFB",
    question:
      "Takeoff using FLEX thrust is permitted on contaminated runways...",
    options: ["Above ISA -5°C", "False", "Only in CONF 1+F", "True"],
    correct: 1,
    explanation:
      "FCOM EFB-TOF-30-30: FLEX takeoff is prohibited on contaminated runways.",
  },
  {
    id: 342,
    theme: "Powerplant",
    question:
      "What happens when the first inner tank level reaches the low level (about 750 Kg)?",
    options: [
      "Nothing happens until both inner tanks reach 750 Kg.",
      "Transfer valves on the associated wing will open.",
      "One or both transfer valves in each wing will open.",
      "The center tank pumps will stop.",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-28-10-80: Low level threshold (~750kg) opens valves in both wings.",
  },
  {
    id: 343,
    theme: "ECAM / Displays",
    question:
      "Pushing the CABIN CALLS EMER pushbutton switch causes which of the following to occur?",
    options: [
      "One high-low chime and a CAPTAIN CALL message in the cabin.",
      "Three high-low chimes, red lights and a PA announcement in the cabin.",
      "Three high-low chimes and pink lights at the cabin area call panels.",
      "One high-low chime and red lights at the cabin area call panels.",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-23-20-20: Initiates triple chime and pink flashing cabin lights.",
  },
  {
    id: 344,
    theme: "Communications",
    question: "Regarding the ACP, which of the following statements is true?",
    options: [
      "The PA TRANSMISSION key operates in the same way at the other transmission keys.",
      "The ON VOICE key enables audio messages to be heard on the loudspeakers.",
      "The RESET key transfers the associated (1 or 2) ACP operation to ACP 3.",
      "The RESET key cancels all CALL lights.",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-23-10-50: RESET button extinguishes illuminated ACP call lights.",
  },
  {
    id: 345,
    theme: "Navigation",
    question:
      "Regarding the ADIRS panel, which of the following statements is true?",
    options: [
      "The ON BAT light illuminates to indicate low battery volts.",
      "Rotating an IR Mode rotary selector to ATT will give attitude indications only.",
      "The IR Mode rotary selectors and the ADR selectors are fully independent.",
      "The IR Mode rotary selectors, when selected to NAV, enable the ADRs",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-34-NAV-10-20: Turning IR to NAV automatically powers ADR section.",
  },
  {
    id: 346,
    theme: "Systems - Air/Press",
    question:
      "At what cabin altitude will the passenger oxygen masks automatically deploy?",
    options: [
      "13,000 +/- 500 ft",
      "10,000 ft",
      "13,000 + 0/-500 ft",
      "14,000 + 250/- 750 ft",
    ],
    correct: 3,
    explanation:
      "FCOM LIM-AIR: Mask doors open automatically above 14,000 ft cabin altitude.",
  },
  {
    id: 347,
    theme: "Other",
    question: "The A320 fuselage has:",
    options: [
      "Two passenger doors",
      "Four passenger doors and four dedicated emergency exits in the cabin",
      "Three passenger doors and one service door",
      "Two passenger doors and two cabin emergency exits",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-20-20: Standard layout: 4 main doors + 4 overwing exits.",
  },
  {
    id: 348,
    theme: "Powerplant",
    question:
      "During the landing roll, a few seconds after selecting reverse, the amber REV indication changes to green. What does this mean?",
    options: [
      "The reversers have been re-stowed",
      "The reverse thrust selection has been acknowledged",
      "The reversers are unlocked",
      "The reversers are now fully deployed",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-70-70: Green signifies reverser doors are fully deployed.",
  },
  {
    id: 349,
    theme: "Navigation",
    question: "What do amber boxes on a MCDU page indicate?",
    options: [
      "An optional data entry",
      "A mandatory data entry",
      "A compulsory reporting point",
      "The waypoint indicated will be overflown",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-22-10-40-10: Amber boxes mark entries mandatory for FMGS calculation.",
  },
  {
    id: 350,
    theme: "ECAM / Displays",
    question: "What would cause TCAS: REDUCE RANGE to appear on the ND?",
    options: [
      "It will be displayed only for a resolution advisory, and ND range is above 80NM.",
      "It would be displayed when a TA or RA is detected, and the ND is in PLAN mode",
      "It displays when a TA or RA is detected, and the ND range is above 80NM",
      "It displays when a TA or RA is detected, and the ND range is above 40NM",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-31-45: Prompts range reduction for target view if set > 40 NM.",
  },
  {
    id: 351,
    theme: "Systems - Air/Press",
    question: "When the PACK FLOW selector is positioned to HI, airflow is:",
    options: [
      "100% of normal",
      "50% more than normal",
      "80% of normal",
      "120% of normal",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-21-10-30: HI pack flow is approx 120% of normal flow.",
  },
  {
    id: 352,
    theme: "Auto Flight / FMS",
    question:
      "Regarding ALPHA FLOOR, which of the following statements is true?",
    options: [
      "It is available at all times in flight",
      "It will engage even if the A/THR is switched off.",
      "After activation, A.FLOOR will disengage as soon as the thrust levers are moved by the flight crew",
      "It is only available if the aircraft is in the clean configuration",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-22-40-30: Alpha Floor protection engages regardless of A/THR status.",
  },
  {
    id: 353,
    theme: "Flight Controls",
    question:
      "After a takeoff in CONFIG 1+F, what would happen if FLAP 0 is not selected as the aircraft accelerates?",
    options: [
      "At 210 kt the flaps will automatically retract changing the config from 1+F to 1. This raises the VFE from 215 to 230 kt",
      "At 200 kt the flaps will automatically retract changing the config from 1+F to 1. This raises the VFE from 215 to 230 kt",
      "The flaps will be overstressed as the VFE of 215kt is exceeded",
      "At 230 kt the slats and flaps will automatically retract changing the config from 1+F to 0. This prevents slat/flap overspeed",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-27-20-10-30: Flaps auto-retract at 210 kt to prevent overspeed.",
  },
  {
    id: 354,
    theme: "Communications",
    question: "What is the cockpit handset typically used for?",
    options: [
      "To transmit to ATC via HF",
      "To transmit to ATC via VHF",
      "PA announcements to the cabin only",
      "For PAs and SATCOM",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-23-20-40: Handset is dedicated to cabin PA and intercom.",
  },
  {
    id: 355,
    theme: "Flight Controls",
    question:
      "Which of the following statements best describes bank angle protection?",
    options: [
      "The bank angle limit in flight mode is 67°, this reduces to 33° while HIGH SPEED protection is active, and 40° when HIGH AoA protection is active.",
      "Full sidestick deflection will give a roll rate of 30% and the bank angle will not exceed 67°",
      "An input is required on the sidestick to hold any bank attitude. When the sidestick is released the aircraft will automatically roll wings level. Full deflection will give a roll rate of 15% and the bank angle will not exceed 67°",
      "Above 33° an input on the sidestick will be required to hold the bank attitude. Full deflection will give a roll rate of 15% and the bank angle will not exceed 67°",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-27-20-10-30: Pos stability returns Bank to 33° if released above 33°.",
  },
  {
    id: 356,
    theme: "Hydraulics",
    question:
      "What impact does a HYD G+Y SYS LO PR alert have on the braking system?",
    options: [
      "The system will automatically select alternate brakes without anti-skid, using the brake accumulator only. The accumulator can supply at least 7 full brake applications.",
      "The system will automatically select alternate brakes with anti-skid, using the blue hydraulic system.",
      "The system will automatically select alternate brakes with anti-skid, using the yellow hydraulic system accumulator only. Anti-skid remains available because the BSCU is serviceable.",
      "Normal braking will be lost. To recover brakes, the flight crew must manually select alternate brakes by moving the A/SKID and NW STRG switch to OFF. Up to 7 brake applications will be possible using the braking accumulator.",
    ],
    correct: 0,
    explanation:
      "FCOM PRO-ABN-HYD: Braking uses Yellow accumulator without Anti-Skid (~7 applications).",
  },
  {
    id: 357,
    theme: "Other",
    question: "How is an armed slide indicated on the DOOR/OXY page?",
    options: [
      "The word SLIDE appears in GREEN next to the associated door",
      "The message SLIDES ARMED appears in WHITE under the DOOR/OXY title",
      "The word SLIDE appears in WHITE next to the associated door",
      "No label is seen next to the associated door (if the door was disarmed SLIDE DISARMED would be displayed in AMBER)",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-31-20: White 'SLIDE' label confirms evacuation slide is armed.",
  },
  {
    id: 358,
    theme: "Flight Controls",
    question: "Roll control is provided by:",
    options: [
      "Ailerons and spoilers 2, 3 and 4",
      "Ailerons and spoilers 3, 4, and 5",
      "Ailerons and spoilers 2, 3, 4 and 5",
      "Ailerons and spoilers 4 and 5",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-27-10-20: Roll is controlled by ailerons + spoilers 2, 3, 4, 5.",
  },
  {
    id: 359,
    theme: "Flight Controls",
    question: "Speed brakes are provided by spoilers:",
    options: ["1, 2, 3, 4", "2, 3, 4", "2, 3, 4, 5", "3, 4, 5"],
    correct: 1,
    explanation:
      "FCOM DSC-27-10-20: Symmetrical spoilers 2, 3, 4 provide speed brake drag.",
  },
  {
    id: 360,
    theme: "Auto Flight / FMS",
    question:
      "If AP 2 is engaged, which FMGC is master and controls the A/THR?",
    options: [
      "FMGC 1",
      "FMGC 2",
      "Both FMGC always work in parallel and therefore share this task.",
      "A/THR never uses information from the FMGS.",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-22-10-30: The FMGC associated with the engaged AP becomes Master.",
  },
  {
    id: 361,
    theme: "ECAM / Displays",
    question: "What is the significance of the triple click aural warning?",
    options: [
      "It is used to highlight all FMA mode changes",
      "It indicates a landing capability downgrade, or some cases of mode reversion",
      "It is heard for all mode reversions",
      "Its only purpose is to indicate a landing capability downgrade",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-31-10: Signals landing capability downgrade or specific mode reversions.",
  },
  {
    id: 362,
    theme: "Powerplant",
    question:
      "What is the take-off and go around EGT limit for the CFM engine?",
    options: ["950°C", "725°C", "915°C", "625°C"],
    correct: 0,
    explanation: "FCOM LIM-ENG: TOGA EGT limit for CFM56 is 950°C (5/10 min).",
  },
  {
    id: 363,
    theme: "ECAM / Displays",
    question:
      "What is the meaning of a BLUE light in a flight deck pushbutton?",
    options: [
      "Normal system operation",
      "An abnormal pushbutton position",
      "Normal operation of a system used temporarily",
      "A test result or maintenance information",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-31-05-10: Blue signifies an active temporary normal function.",
  },
  {
    id: 364,
    theme: "Auto Flight / FMS",
    question: "During final approach, when is LAND annunciated on the FMA?",
    options: [
      "It engages at MDA, and can be disengaged by setting TOGA thrust",
      "It engages <400 ft RA until approximately 40RA when it is replaced by FLARE. It can be disengaged by pushing the APPR pushbutton on FCU to cancel the approach",
      "It engages at 1,000 ft RA with the aircraft in the Landing Configuration (Flap 3 or Flap FULL)",
      "It engages <400 ft RA until approximately 40RA when it is replaced by FLARE. It can be disengaged by setting TOGA thrust, or by disconnecting both AP and FD",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-22-30-40-80-30: Engages below 400 ft RA; disengages with TOGA or AP/FD OFF.",
  },
  {
    id: 365,
    theme: "Systems - Air/Press",
    question: "Where is the LP ground air supply connector located?",
    options: [
      "On the left hand side of the fuselage belly fairing, just ahead of the wing leading edge",
      "On the bottom of the fuselage behind the trailing edge of the wing",
      "On the underside of the left hand wing, between the engine pylon and fuselage",
      "On the aft fuselage next to Water Filling and/or Draining service panel",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-21-10-20: LP conditioned air connector on lower left forward fuselage.",
  },
  {
    id: 366,
    theme: "Systems - Elec",
    question: "When does the generator load turn amber on the ELEC SD page?",
    options: [
      "The engine generator load is above 105%",
      "The engine generator load is above 100%",
      "The engine generator load is above 108% for more than 10 sec",
      "The engine generator load is above 108%",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-31-20: Load turns amber if it exceeds the 100% rated capacity.",
  },
  {
    id: 367,
    theme: "Fire Protection",
    question:
      "Which of the following statements is true regarding the APU Fire Extinguishing system (select the most complete answer)?",
    options: [
      "3 sec after an APU FIRE warning on the ground, the APU performs an emergency shutdown, and the extinguisher bottle discharges automatically",
      "Immediately after an APU fire warning on the ground, the APU automatically shuts down, and the extinguisher bottle discharges automatically",
      "There are two fire agent bottles for the APU; one is discharged automatically if a fire is detected on the ground, and the other can be discharged by the flight crew at any time",
      "3 sec after a fire warning, the APU automatically shuts down. The flight crew should follow ECAM actions to secure the APU and fire the squib",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-26-50-10: Sequence shuts down APU and discharges bottle after 3s on ground.",
  },
  {
    id: 368,
    theme: "Other",
    question:
      "What is the significance of a flashing red light on a cabin door?",
    options: [
      "It indicates low pressure in the slide inflation cylinder",
      "It flashes red if the door is unlocked when at least one engine is running",
      "The light flashes red if the door control handle is operated, and the slide is armed",
      "It indicates residual cabin pressure. The light flashes red when one or both engines have stopped, the slide has been disarmed and the cabin differential pressure is above 2.5hPa",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-52-20: Residual pressure light (> 2.5 hPa) protecting against opening.",
  },
  {
    id: 369,
    theme: "Systems - Elec",
    question: "If a C/B trips what action should the flight crew take?",
    options: [
      "Consult the C/B Tripped procedure in the QRH for guidance. On the ground a C/B can be reengaged on the direction of maintenance. In flight a C/B should not be reengaged under any circumstances.",
      "The C/B can be re-engaged as many times as necessary if required for the safe conduct of the flight.",
      "On the ground any C/B can be re-engaged without consulting maintenance so long as it doesn't have a red colour. In flight a C/B can be re-engaged no more than two times.",
      "Consult the C/B Tripped procedure in the QRH for guidance. On the ground the first step is to contact maintenance to identify the cause. In flight the C/B would not be reengaged unless the captain deems it necessary for the safe continuation of the flight (only one reengagement is permitted).",
    ],
    correct: 3,
    explanation:
      "OM-B Section 2.3.6.2 Cockpit Preparation states to clarify with Maintenance Control before resetting tripped circuit breakers.<br>FCOM PRO-ABN-C_B: Clarify with Maintenance (ground) or use QRH (flight) before reset.",
  },
  {
    id: 370,
    theme: "Navigation",
    question: "How can the secondary flight plan be activated in flight?",
    options: [
      "When HDG or TRK lateral guidance modes are engaged, select the ACTIVATE SECONDARY prompt on the SEC INDEX page of the MCDU. This prompt will not be available in NAV unless the active leg in the primary and secondary are the same.",
      "The secondary flight plan can only be activated while the NAV mode is engaged. When this condition is met the ACTIVATE SECONDARY prompt will be available on the SEC INDEX page of the MCDU.",
      "Select the ACTIVATE SECONDARY prompt on the SEC INDEX page of the MCDU. This feature is available at all times.",
      "Use the ENABLE ALTN command in the lateral revision page for any waypoint on the flight plan.",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-22-20-10-30: divergence requires unmanaged mode (HDG/TRK) to activate.",
  },
  {
    id: 371,
    theme: "Landing Gear",
    question: "Which LGCIU normally controls the retraction cycle?",
    options: [
      "LGCIU 1 is the master, and LGCIU 2 is the slave if LGCIU 1 fails. LGCIU 2 takes over all functions automatically",
      "LGCIU 1 controls the left hand main and nose gears. LGCIU 2 controls the right hand main gear",
      "One LGCIU controls one complete gear cycle, then switches over automatically to the other LGCIU at the completion of the retraction cycle. It also switches over in the case of failure",
      "LGCIU 1 is the master when either AP is off or AP1 is engaged, otherwise LGCIU 2 is the master",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-32-10-20: Controllers alternate mastery after each landing gear cycle.",
  },
  {
    id: 372,
    theme: "Powerplant",
    question:
      "During an automatic start sequence on the ground when does the ignition start and stop?",
    options: [
      "Ignition starts when the MODE selector is set to IGN/START, and stops when N2 is greater than 43%",
      "Ignition starts at 22% N2, and stops when N2 is more than 56%",
      "Ignition starts at an N2 of 16%, and stops when N2 is more than 50%",
      "Ignition starts as soon as the engine MASTER is set to ON, and stops when N2 is more than 50%",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-70-80-40: Ground auto start: igniters on at 16% N2; cut off at ~50% N2.",
  },
  {
    id: 373,
    theme: "Powerplant",
    question:
      "When the low level sensors detect that the centre tank is empty, the pumps will run for an additional ______ min, and then stop",
    options: ["10", "1", "5", "2"],
    correct: 2,
    explanation:
      "FCOM DSC-28-10-30: Pumps run for 5 minutes after low level to ensure scavenge.",
  },
  {
    id: 374,
    theme: "Systems - Elec",
    question: "Can you reset an IDG in flight?",
    options: [
      "Yes, push and hold the IDG pb until the GEN fault light is no longer illuminated",
      "Yes, but only after contacting maintenance control",
      "Yes, provided the engine is running or windmilling",
      "No. It is not possible",
    ],
    correct: 3,
    explanation:
      "FCOM LIM-ENG: Reconnecting IDG is prohibited in flight; ground maintenance only.",
  },
  {
    id: 375,
    theme: "Fire Protection",
    question:
      "How many fire extinguisher bottles are there for the engines and APU?",
    options: [
      "2 bottles for each engine and 1 bottle for the APU",
      "2 bottles shared by both engines and 1 bottle for the APU",
      "1 bottle for each engine and 1 bottle for the APU",
      "2 bottles shared by both engines and 2 bottles for the APU",
    ],
    correct: 0,
    explanation: "FCOM DSC-26-20-10: 2 bottles per engine; 1 bottle for APU.",
  },
  {
    id: 376,
    theme: "Auto Flight / FMS",
    question: "Below what height do the FWCs generate height announcements?",
    options: ["2,500 ft", "3,000 ft", "1,500 ft", "2,000 ft"],
    correct: 0,
    explanation:
      "FCOM DSC-31-10: Synthetic height callouts start below 2,500 ft Radio Altitude.",
  },
  {
    id: 377,
    theme: "Navigation",
    question: "When the ND is set to the PLAN mode, how is the map orientated?",
    options: [
      "To true north",
      "Corrected along the flight plan track",
      "To the current true track",
      "To the current magnetic track",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-34-NAV-10-20: ND in PLAN mode is always oriented True North Up.",
  },
  {
    id: 378,
    theme: "ECAM / Displays",
    question:
      "What has happened if the ELEC system page appears automatically on the lower ECAM DU, and there are no accompanying ECAM alerts?",
    options: [
      "An INDEPENDENT failure has occurred",
      "An ADVISORY has occurred; the drifting parameter will be amber",
      "A PRIMARY failure has occurred",
      "An ADVISORY has occurred; the drifting parameter will be pulsing green",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-31-10: ECAM Advisory pulses drifting parameter in green on SD.",
  },
  {
    id: 379,
    theme: "Landing Gear",
    question:
      "If the FO fully deflects the hand wheel while manoeuvring on the ground, what angle will the nose wheel be at?",
    options: ["95°", "70°", "75°", "80°"],
    correct: 2,
    explanation:
      "FCOM DSC-32-10-40: Tiller provides steer angle up to +/- 75°.",
  },
  {
    id: 380,
    theme: "Other",
    question:
      "The NAV and LOGO switch has two positions, 1 and 2. What is the difference between the two positions?",
    options: [
      "Position 2 is for emergency use only",
      "Brightness intensity, where 1 is the brightest",
      "Position 1 is for emergency use only",
      "Position 1 turns on the logo lights and the first set of navigation lights, position 2 turns on the logo lights and the second set of navigation lights",
    ],
    correct: 3,
    explanation:
      "OM-B Section 2.3.4.10 Before Walkaround states that NAV & LOGO 1 is normally used, while NAV & LOGO 2 is used only when the first set of lights fails.<br>FCOM PRO-NOR-SRP-01-10: POS 1 uses first set; POS 2 uses second (standby) set.",
  },
  {
    id: 381,
    theme: "Powerplant",
    question:
      "What impact does selecting engine and or wing anti-ice have on the engines?",
    options: [
      "The N1 or EPR limit is automatically increased to maintain the appropriate thrust rating",
      "The N1 or EPR limit is automatically reduced, and the idle N1 or EPR is automatically increased",
      "Engine anti-ice reduces the N1 or EPR limit, wing anti-ice has a negligible effect on the maximum thrust output of the engines",
      "There is no impact on the maximum thrust of the engines",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-70-60: Bleeding air drops max thrust limit and increases idle.",
  },
  {
    id: 382,
    theme: "APU",
    question:
      "What is the maximum altitude that the APU can be used for electrical power?",
    options: [
      "39,100 ft",
      "22,500 ft",
      "14,500 ft",
      "Maximum certified altitude",
    ],
    correct: 3,
    explanation:
      "FCOM LIM-APU: APU supplies electrical power up to max certified altitude.",
  },
  {
    id: 383,
    theme: "Communications",
    question: "All communications radios can be controlled:",
    options: [
      "From any one of the three radio management panels (RMPs)",
      "From the audio control panels (ACPs)",
      "From RMP 1 and RMP 2 only",
      "By the F/O",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-23-10-20: Any communication radio can be tuned by any RMP.",
  },
  {
    id: 384,
    theme: "Fire Protection",
    question:
      "Select the correct statement about the FIRE detection and fault logic for the ENG and APU (select the most complete answer)",
    options: [
      "It is not possible for a Fire Detection Unit (FDU) to distinguish between a loop failure and fire detection",
      "When both fire detection loops are serviceable, a fire warning will be triggered whenever one or more loops detect a fire",
      "Fire detection loops A and B must both detect a fire to trigger a warning. If one of these loops fails, then FIRE detection is lost for the associated ENG/APU. The flight crew will be notified via ECAM",
      "A fire warning is triggered if a break occurs in both fire detection loops within 5 sec of each other (flame effect).",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-26-20-10: Double loop break within 5s triggers fire warning.",
  },
  {
    id: 385,
    theme: "Hydraulics",
    question:
      "Is this alert HYD G ENG 1 PUMP LO PR a primary, secondary or independent failure? (PTU is operative, and hydraulic pressures are normal)",
    options: [
      "Primary",
      "Secondary",
      "Independent",
      "Both primary and secondary",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-31-10: classified as Independent if PTU sustains system pressure.",
  },
  {
    id: 386,
    theme: "Landing Gear",
    question:
      "What happens when the landing gear is selected down on approach?",
    options: [
      "The WHEEL push button on the ECAM control panel illuminates",
      "If it is not empty, the STATUS page appears on the LOWER ECAM DU",
      "The WHEEL page appears on the LOWER ECAM DU",
      "The STATUS page appears on the LOWER ECAM DU, in all cases",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-31-30: Gear selection DOWN auto-displays WHEEL system page.",
  },
  {
    id: 387,
    theme: "Powerplant",
    question: "When is auto-start abort and automatic dry cranking available?",
    options: [
      "During any engine start (manual or automatic) on the ground. However when in flight auto start abort is only available during automatic starts",
      "During an automatic engine start in any phase of flight",
      "Auto start abort is available during any automatic start cycle. However the flight crew must consider applying the engine ventilation (dry cranking) procedure following a start abort",
      "During an automatic start on the ground only",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-70-80-40: FADEC auto-abort/dry crank is ground auto-start only.",
  },
  {
    id: 388,
    theme: "Flight Controls",
    question: "When will the ground spoilers fully extend?",
    options: [
      "If the ground spoilers are armed, the wheel speed exceeds 72 kt and both thrust levers are reset to idle.",
      "When at least one landing gear is on the ground, and both thrust levers are at or below idle",
      "When the speedbrake control lever is set to the FULL position",
      "If the ground spoilers are armed, the wheel speed exceeds 60 kt and both thrust levers are reset to idle",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-27-20-10-30: Requires armed spoilers, levers idle, and speed > 72 kt.",
  },
  {
    id: 389,
    theme: "Hydraulics",
    question:
      "Which hydraulic system is used for landing gear retraction and extension?",
    options: ["Green", "Blue", "Yellow", "Green or yellow"],
    correct: 0,
    explanation: "FCOM DSC-32-10-20: Green hydraulic system powers the gear.",
  },
  {
    id: 390,
    theme: "Auto Flight / FMS",
    question:
      "Select the most complete statement about the APPR pushbutton on the FCU.",
    options: [
      "The APPR pushbutton will arm the LOC and G/S modes. Once engaged these approach modes will only disengage in the event of a go-around, or disconnection of AP and FD.",
      "The APPR pushbutton will arm either the LOC and G/S modes or APP NAV and FINAL modes depending on the approach selected in the active F-PLN. These modes can be disarmed or disengaged by pushing the APPR pushbutton again.",
      "The APPR pushbutton will arm the LOC and G/S modes independent of the approach selected in the active F-PLN. The LOC and G/S modes can be disarmed or disengaged by pushing the APPR pushbutton again.",
      "The APPR pushbutton will arm either the LOC and G/S modes or APP NAV and FINAL modes depending on the approach selected in the active F-PLN. Once engaged these approach modes will only disengage in the event of a go-around, or disconnection of AP and FD.",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-22-30-40-80-00: APPR arms modes based on active MCDU selection.",
  },
  {
    id: 391,
    theme: "Auto Flight / FMS",
    question:
      "How is an altitude constraint, that the FMGS predicts will not be met, indicated?",
    options: [
      "An amber altitude on the MCDU F-PLN page",
      "A message in the MCDU scratchpad",
      "An amber star on the MCDU F-PLN page, and an amber circle around the affected waypoint on the ND",
      "A magenta star on the MCDU CLIMB page, and a magenta circle around the affected waypoint on the ND",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-22-20-10-30: Indicated by amber stars (MCDU) and circles (ND).",
  },
  {
    id: 392,
    theme: "ECAM / Displays",
    question:
      "What do two dashes across the last two digits of the fuel quantity indication mean?",
    options: [
      "The fuel quantity indicated for every tank is inaccurate",
      "The fuel quantity indicated for every tank is completely unreliable",
      "The fuel quantity indicated is inaccurate for one or more tanks. The FUEL SD page can be used to determine which tanks are affected",
      "The fuel quantity indicated for one or more tanks is completely unreliable. The FUEL SD page can be used to determine which tanks are affected",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-28-20: Dashes signify partial sensing failure; check SD page.",
  },
  {
    id: 393,
    theme: "Systems - Elec",
    question:
      "What is the normal voltage and frequency for the AC and DC systems on the A320?",
    options: [
      "Single phase AC 115v 400Hz, and 12v DC",
      "3 phase AC 115/200v 400Hz, and 28v DC",
      "3 phase AC 115/200v 50Hz, and 20v DC",
      "Single phase AC 230v 50Hz, and 12v DC",
    ],
    correct: 1,
    explanation: "FCOM DSC-24-10-10: AC is 115/200V 400Hz; DC is 28V.",
  },
  {
    id: 394,
    theme: "Hydraulics",
    question: "What is the normal operating pressure of the hydraulic systems?",
    options: [
      "3000PSI including when powered by the RAT",
      "3000PSI (2500PSI when powered by the RAT)",
      "3000PSI (2500PSI when powered by the RAT or PTU)",
      "2500PSI including when powered by the RAT",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-29-10-20: 3000 PSI normal; 2500 PSI when RAT-powered.",
  },
  {
    id: 395,
    theme: "Systems - Elec",
    question: "Where can the battery voltage be checked?",
    options: [
      "On the ELEC overhead panel and ECAM ELEC page",
      "On the ECAM ELEC page only",
      "On the ELEC overhead panel only",
      "On the ELEC overhead panel and ECAM E/WD",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-24-20: Voltage shown on overhead panel and ECAM ELEC page.",
  },
  {
    id: 396,
    theme: "Powerplant",
    question:
      "When all 6 fuel pumps are selected ON (MODE SEL auto), which fuel tank(s) will preferentially feed each engine? (assume that all tanks contain useable fuel)",
    options: [
      "Shortly after departure both engines will receive fuel preferentially from the centre tank provided the slats are retracted, and approximately 500kg of fuel has been used in each inner tank",
      "ENG 1 will receive fuel from the left inner tank, and ENG 2 will receive fuel from the right inner tank. When each inner tank is empty, fuel will feed to each engine from the centre tank",
      "If the landing gear is retracted, both engines receive fuel continuously from the centre tank until it runs dry. CTR TK FEEDG (green) memo will be displayed on the EWD",
      "ENG 1 will receive fuel from the left outer tank, and ENG 2 will receive fuel from the right outer tank. When each outer tank reaches approximately 750kg, the transfer valves open allowing fuel to be fed from the inner tanks",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-28-10-30: Center tank feeds if slats up and inner usage >= 500kg.",
  },
  {
    id: 397,
    theme: "Hydraulics",
    question:
      "What impact does a single hydraulic failure have on the slats and flaps?",
    options: [
      "The corresponding surfaces will lock",
      "The corresponding surfaces will operate at 2/3 of normal speed",
      "The corresponding surfaces operate at half speed",
      "The slats and flaps operate normally",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-27-10-20: Single hydraulic loss halves surface actuation speed.",
  },
  {
    id: 398,
    theme: "Flight Controls",
    question:
      "The sidestick is pulled fully aft during a terrain escape manoeuvre. What does this pitch input demand from the flight control computers?",
    options: [
      "Initially pitch rate transitioning to an angle of attack demand. If the sidestick is released to neutral, wings level, the system maintains a pitch rate of zero",
      "Load factor, as the angle of attack exceeds alpha prot the pitch trim will be frozen. With the sidestick at neutral, wings level, the system maintains 1g in pitch (corrected for pitch attitude)",
      "Direct stick to elevator deflection demand. The max elevator deflection will be limited to prevent alpha max from being exceeded. If the sidestick is released to neutral the elevator will be centred",
      "Initially load factor transitioning to an angle of attack demand. If the side stick is later released the F/CTL computers will maintain an AoA equal to alpha prot, until the sidestick is pushed forward",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-27-20-10-20: Transition from G-load to AoA demand (Alpha Prot).",
  },
  {
    id: 399,
    theme: "Auto Flight / FMS",
    question: "In normal law, when does flight mode change to the flare mode?",
    options: ["At 100 ft RA", "At 30 ft RA", "At 20 ft RA", "At 50 ft RA"],
    correct: 3,
    explanation:
      "FCOM DSC-27-20-10-20: Law transitions to flare mode at 50 ft Radio Altitude.",
  },
  {
    id: 400,
    theme: "Powerplant",
    question:
      "If the Engine Interface Unit (EIU) fails, what information does the FADEC lose access to?",
    options: [
      "Engine sensors",
      "Thrust lever angle",
      "Air data from the ADIRS",
      "Master switch, and engine mode selector position",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-70-20: EIU provides Master SW and Mode selection to FADEC. TLA & Engine sensors are directly fed to the FADEC.",
  },
  {
    id: 401,
    theme: "Hydraulics",
    question:
      "Which hydraulic system(s) are used to actuate engine reverser thrust?",
    options: [
      "Each engine uses pressurised fuel to actuate the reverser doors",
      "YELLOW for ENG 1, and GREEN for ENG 2",
      "Each engine has its own independent hydraulic system to actuate the reverser doors",
      "GREEN for ENG 1, and YELLOW for ENG 2",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-70-70: ENG 1 uses Green; ENG 2 uses Yellow hydraulics.",
  },
  {
    id: 402,
    theme: "Limitations",
    question: "What is the wingspan of the A320?",
    options: ["24.8 m", "40.5 m", "34.1 m", "38.1 m"],
    correct: 2,
    explanation:
      "FCOM DSC-20-20: Standard A320 wingspan (tip to tip) is 34.1 m.",
  },
  {
    id: 403,
    theme: "Systems - Elec",
    question: "Which busses can be powered from the emergency generator?",
    options: [
      "AC ESS and DC ESS via ESS TR only",
      "DC ESS, and AC ESS via the AC ESS FEED only",
      "BAT BUS, AC ESS, AC ESS SHED, DC ESS, DC ESS SHED",
      "DC ESS, DC ESS SHED, AC ESS and AC ESS SHED",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-24-10-30-30: EMER GEN powers AC/DC ESS and SHED buses.",
  },
  {
    id: 404,
    theme: "ECAM / Displays",
    question:
      "For routine access into the cockpit by the cabin crew, the buzzer sounds:",
    options: [
      "With a triple high-low chime",
      "Continuously",
      "For a few sec",
      "For a few min",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-31-10: Routine cockpit call buzzer sounds for approx 3 seconds.",
  },
  {
    id: 405,
    theme: "ECAM / Displays",
    question:
      "If the FWC detects a failure it will trigger an ECAM alert, provided no flight phase inhibition is active. How many flight phases are there?",
    options: ["6", "7", "10", "8"],
    correct: 2,
    explanation:
      "FCOM DSC-31-10: The FWC divides flight into 10 distinct logic phases.",
  },
  {
    id: 406,
    theme: "Systems - Air/Press",
    question:
      "Below what altitude does the vacuum generator produce the necessary pressure differential to force waste from the toilet bowls into the waste storage tank?",
    options: ["18,000 ft", "14,000 ft", "16,000 ft", "20,000 ft"],
    correct: 2,
    explanation:
      "FCOM DSC-38-10: Below 16,000 ft, vacuum generator assists waste movement.",
  },
  {
    id: 407,
    theme: "Flight Controls",
    question: "Select the most complete statement about mechanical backup",
    options: [
      "Mechanical backup allows the flight crew to manage a temporary loss of 5 flight control computers. The THS and rudder are mechanically controlled, and hydraulically actuated. MAN PITCH TRIM ONLY (RED) is displayed on the PFD",
      "While in mechanical backup USE MAN PITCH TRIM (RED) is displayed on the PFD, the THS and RUDDER can be actuated mechanically by the pilot",
      "Mechanical backup allows the flight crew to manage a temporary loss of 7 flight control computers. The THS and rudder are mechanically controlled and mechanically actuated. MAN PITCH TRIM ONLY (RED) is displayed on the PFD",
      "If the aircraft finds itself in an abnormal attitude AoB > 125°, AoA >40°, IAS >440kt, the flight law will transition to mechanical backup and stay in this flight law for the remainder of the flight. USE MAN PITCH TRIM (amber) will be displayed on the PFD",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-27-20-20: Pitch (trim wheel) and yaw (pedals) are cable-controlled.",
  },
  {
    id: 408,
    theme: "Ice & Rain Protection",
    question: "What areas of the aircraft are anti-iced with hot air?",
    options: [
      "Engine air intakes, the three outboard leading edge slats of each wing, the THS and rudder leading edge",
      "Engine air intakes, all leading edge slats on each wing",
      "Engine air intakes, and the three outboard leading edge slats of each wing",
      "Engine air intakes, the four outboard leading edge slats of each wing, and the flight deck windows",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-30-10-10: Engine cowls and outboard slats (3, 4, 5) use hot air.",
  },
  {
    id: 409,
    theme: "ECAM / Displays",
    question:
      "What supporting evidence would you expect to see following an EIS DMC 1(2)(3) FAULT alert?",
    options: [
      "PLEASE WAIT displayed on the affected DU(s)",
      "MAP NOT AVAIL displayed on the affected DU(s)",
      "The affected DU(s) will be blank",
      "INVALID DATA displayed on the affected DU(s)",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-31-05-50: DMC failure results in 'INVALID DATA' on affected screens.",
  },
  {
    id: 410,
    theme: "Auto Flight / FMS",
    question:
      "Which unit is used as a short-term interface between the flight crew and FMGC?",
    options: ["ADIRU control panel", "FCU", "EFIS control panel", "MCDU"],
    correct: 1,
    explanation:
      "FCOM DSC-22-10-40-20: FCU is the tactical/short-term management interface.",
  },
  {
    id: 411,
    theme: "Ice & Rain Protection",
    question:
      "Where do the wing anti-ice indications appear on the ECAM screens?",
    options: [
      "When selected WING A.ICE appears on the ECAM status page",
      "A white triangle appears on the ECAM bleed page",
      "There are no indications for wing anti-ice on the ECAM screens",
      "When selected ANTI-ICE appears in white on the ECAM bleed page, and the WING A.ICE ECAM memo appears in green on the EWD",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-30-20-20: Status on BLEED page; confirmation on E/WD green memo.",
  },
  {
    id: 412,
    theme: "Systems - Air/Press",
    question:
      "During cruise flight, how are the cockpit panels and avionics compartment cooled?",
    options: [
      "The avionics compartment is unpressurised, allowing the avionics to be ventilated using ambient air. The cockpit panels are cooled using air from the air conditioning system",
      "The avionics ventilation system extracts air from the cockpit panels and avionics compartment, and then removes heat using a skin air heat exchanger",
      "The avionics compartment is cooled by the avionics ventilation system, which uses air conditioned air in the closed configuration. The cabin ventilation system extract valve draws ambient cabin air through the cockpit panels, and then overboard via the outflow valve",
      "Both the avionics compartment and cockpit panels are cooled using air from the air conditioning system",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-21-30-20: Uses skin heat exchanger in closed circuit config.",
  },
  {
    id: 413,
    theme: "Other",
    question: "If power to the cockpit door fails:",
    options: [
      "The evacuation panel in the door is released",
      "The door does not unlock automatically and remains closed",
      "The door unlocks automatically, but remains closed",
      "Power from the emergency bus is automatically routed to the door locks to keep them in place",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-52-40-20: Door fails to the UNLOCKED position upon total power loss.",
  },
  {
    id: 414,
    theme: "APU",
    question:
      "What would happen if the APU master switch was turned off immediately following the use of APU bleed?",
    options: [
      "APU continues to run for a cooling period of 60 to 120 sec",
      "APU continues to run for a cooling period of 30 to 60 sec",
      "APU shuts down immediately",
      "APU continues to run for a cooling period of 45 to 90 sec",
    ],
    correct: 0,
    explanation: "FCOM DSC-49-10-20: Cooling down period is 60 to 120 seconds.",
  },
  {
    id: 415,
    theme: "Flight Controls",
    question: "What protections are available in alternate law?",
    options: [
      "Load factor limitation, pitch attitude, bank angle, angle of attack, and high speed",
      "Load factor limitation, pitch attitude, bank angle, low speed, and high speed",
      "Load factor limitation is the only protection available in alternate law. High speed and low speed stabilities may be available",
      "There are no protections in alternate law. High speed and low speed stabilities may be available",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-27-20-20: Only load factor remains; other protections become stabilities.",
  },
  {
    id: 416,
    theme: "Navigation",
    question: "Select the correct statement about the ADIRS panel.",
    options: [
      "If an IR is turned off by mistake in flight, it can be recovered provided it is switched back on within 5 min",
      "The ADR and IR parts of an ADIRU cannot not be switched off individually",
      "When securing the aircraft both the IR mode selectors and ADR pushbutton switches should be set to OFF. This is to prevent the aircraft batteries from being drained",
      "The ADR or IR part of an ADIRU can be individually switched OFF using the IR or ADR pushbuttons. Setting the IR Mode Selector to OFF will remove power from the whole ADIRU",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-34-NAV-10-20: IR rotary switch controls main power to the entire unit.",
  },
  {
    id: 417,
    theme: "Communications",
    question:
      "Which ACP transmission key will illuminate if the cabin attendants are calling the cockpit?",
    options: ["CAB", "ALERT", "VHF3", "PA"],
    correct: 0,
    explanation:
      "FCOM DSC-23-10-50: CAB knob flashes to indicate incoming cabin crew call.",
  },
  {
    id: 418,
    theme: "Flight Controls",
    question: "Where is the flap/slat position displayed?",
    options: [
      "On the SD",
      "On both PFDs",
      "On the flap/slat indicator",
      "On the E/WD",
    ],
    correct: 3,
    explanation:
      "OM-B Section 2.3.4.10 Before Walkaround instructs to check the upper ECAM display (E/WD) to confirm that the FLAPS position agrees with the lever position.<br>FCOM DSC-27-30-20: Configuration is displayed on the Engine/Warning Display.",
  },
  {
    id: 419,
    theme: "Limitations",
    question: "What is the maximum speed (VFE) with CONF 1+F for the A320?",
    options: ["215 kt", "230 kt", "185 kt", "177 kt"],
    correct: 0,
    explanation: "FCOM LIM-AG-SPD: VFE for Configuration 1+F is 215 kt.",
  },
  {
    id: 420,
    theme: "Limitations",
    question: "What is VMO/MMO for the A320?",
    options: ["380/0.8", "350/0.82", "320/0.82", "320/0.77"],
    correct: 1,
    explanation:
      "FCOM LIM-AG-SPD: Maximum operating limits are 350 kt / 0.82 Mach.",
  },
  {
    id: 421,
    theme: "Powerplant",
    question: "How long can you remain in TOGA thrust?",
    options: [
      "10 min during single engine operations",
      "10 min during two engine operations",
      "Unlimited time",
      "5 min during single engine operations",
    ],
    correct: 0,
    explanation:
      "FCOM LIM-ENG: Limit is 5 minutes (dual eng) or 10 minutes (single eng).",
  },
  {
    id: 422,
    theme: "Limitations",
    question: "What is the maximum speed with the landing gear extended (VLE)?",
    options: ["220 kt", "260 kt", "280 kt", "250 kt"],
    correct: 2,
    explanation:
      "FCOM LIM-AG-SPD: Maximum speed with gear extended (VLE) is 280 kt.",
  },
  {
    id: 423,
    theme: "Limitations",
    question: "What is the cabin pressure safety relief valve setting?",
    options: ["9PSI", "8.4PSI", "8.5PSI", "8.6PSI"],
    correct: 3,
    explanation:
      "FCOM LIM-AIR: Relief valves auto-open if differential pressure reaches 8.6 PSI.",
  },
  {
    id: 424,
    theme: "Limitations",
    question: "What is the maximum demonstrated crosswind for the A320?",
    options: [
      "38 kt (gusts included)",
      "36 kt (gusts included)",
      "36 kt (mean wind)",
      "38 kt (mean wind)",
    ],
    correct: 0,
    explanation: "FCOM LIM-AG-OPS: maximum demonstrated crosswind is 38 kt.",
  },
  {
    id: 425,
    theme: "Limitations",
    question:
      "What is the maximum speed at which the landing gear may be retracted (VLO retraction)?",
    options: ["250 kt", "260 kt", "280 kt", "220 kt"],
    correct: 3,
    explanation:
      "FCOM LIM-AG-SPD: retraction speed (VLO ret) is limited to 220 kt.",
  },
  {
    id: 426,
    theme: "Auto Flight / FMS",
    question:
      "Which of the following statements best describes high speed protection?",
    options: [
      "High speed protection is 1 of 5 protections in normal law, and is the only protection available in alternate law",
      "High speed protection will activate at VMO + 16 kt / MMO + 0.04, a permanent nose-up order is applied to aid recovery back towards normal flight conditions. The airspeed will settle at or below VMO even with full forward sidestick input",
      "High speed protection will not allow the aircraft to overshoot VMO/MMO unless forward sidestick input is applied. In this case the airspeed will never exceed VMO+16 / MMO + 0.04. When the sidestick is released the bank angle is maintained, the maximum AoB is reduced to 45°",
      "High speed protection is activated at or above VMO/MMO (depending on the flight conditions), a permanent nose-up order is applied to aid recovery back towards normal flight conditions. With no sidestick input the aircraft will go to wings level, and the maximum bank angle is reduced to 40°",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-27-20-10-20: Pitches nose UP and limits bank to 40° for recovery.",
  },
  {
    id: 427,
    theme: "Auto Flight / FMS",
    question:
      "If both autopilots are engaged, which FMGC is master and controls the A/THR?",
    options: [
      "FMGC 1 if FD 1 is ON and FD2 is OFF",
      "FMGC 2 if FD 2 is ON and FD 1 is OFF",
      "FMGC 1",
      "FMGC 2",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-22-10-30: In dual AP operation, FMGC 1 acts as the master.",
  },
  {
    id: 428,
    theme: "Flight Controls",
    question:
      "What colour will the secondary flight plan be when it is displayed on the ND?",
    options: ["Green", "White", "Blue", "Amber"],
    correct: 1,
    explanation: "FCOM DSC-31-45: Secondary flight plan is drawn in white.",
  },
  {
    id: 429,
    theme: "ECAM / Displays",
    question:
      "What does a green arrow on the bottom of the ECAM status page indicate?",
    options: [
      "It means the ECAM has been completed",
      "It indicates a system page needs to be reviewed",
      "It is a reminder to complete the approach preparation procedures",
      "It is displayed if the data on the status page has overflowed off the screen",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-31-20: Arrow indicates additional status data on a second page.",
  },
  {
    id: 430,
    theme: "Communications",
    question:
      "Only ______ is functional in the emergency electrical configuration:",
    options: ["RMP 1 and 3", "RMP 1 AND 2", "RMP 1", "RMP 3"],
    correct: 2,
    explanation:
      "FCOM DSC-24-10-30-30: Only RMP 1 remains powered in EMER ELEC config.",
  },
  {
    id: 431,
    theme: "Auto Flight / FMS",
    question:
      "Which units make up the Flight Management Guidance System (FMGS)?",
    options: [
      "2 x FMGC, 2 x MCDU, and 2 x FCU only",
      "2 x FMC, 2 x AP, 1 x A/THR, 2 x MCDU, 2 x FCU, and 2 x FAC",
      "2 x FMGC, 2 x MCDU, 1 x FCU, and 2 x FAC",
      "2 x FMGC, 2 x MCDU, and 1 x FCU only",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-22-10-10: Architecture: 2 FMGCs, 2 MCDUs, 1 FCU, 2 FACs.",
  },
  {
    id: 432,
    theme: "Systems - Air/Press",
    question: "How is the outflow valve actuated?",
    options: [
      "Three electric motors, all automatic",
      "One electric motor, controlled by either CPC 1, CPC 2 or via the MAN VIS CTL switch",
      "One of three electric motors Two automatic, one manual",
      "One of two electric motors One automatic, one manual",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-21-20-20: valve features 3 motors (2 automatic, 1 manual).",
  },
  {
    id: 433,
    theme: "Systems - Air/Press",
    question: "Which compartments are unpressurised?",
    options: [
      "Nose gear bay, main gear bay, the tail cone, and bulk cargo compartment",
      "Nose gear, main gear bay and the battery compartment",
      "Avionics bay, nose gear bay, air conditioning compartment, main gear bay and the tail cone",
      "Radome, nose gear bay, main gear bay, air conditioning compartment, and the tail cone",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-21-20-20: Gear bays, tail cone, radome, and AC pack bay.",
  },
  {
    id: 434,
    theme: "Powerplant",
    question: "Select the correct starter limitation for the CFM engine:",
    options: [
      "A 15 minute cooling period is required following 4 failed start cycles",
      "A 20 minute cooling period is required following 3 failed start cycles",
      "A 60 minute cooling period is required following 3 consecutive start attempts",
      "A 10 second pause is required between each start cycle",
    ],
    correct: 0,
    explanation:
      "FCOM LIM-ENG: 15-minute cooling required after 4 failed cycles.",
  },
  {
    id: 435,
    theme: "ECAM / Displays",
    question: "Regarding speed symbols on the PFD, which statement is true?",
    options: [
      "The yellow speed trend arrow indicates the speed the aircraft will reach in 15 sec",
      "Managed speed is represented by a magenta speed bug",
      "Selected speed is represented by a magenta speed bug",
      "Mach No. is not displayed below 0.6",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-31-40: Target speed bug is magenta for managed, blue for selected.",
  },
  {
    id: 436,
    theme: "ECAM / Displays",
    question:
      "What information is always available on the permanent data section of the SD?",
    options: [
      "G LOAD",
      "Gross weight",
      "Metric altitude",
      "TAT (Total Air Temperature)",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-31-20: TAT, SAT, and ISA deviation are permanently displayed.",
  },
  {
    id: 437,
    theme: "Fire Protection",
    question: "What impact does a FWS FWC 1+2 FAULT have?",
    options: [
      "All SD pages except for the status page are lost",
      "Most ECAM cautions and warnings are lost. Aural warnings (i.e., stall and over speed) remain available",
      "All ECAM warnings are lost, amber ECAM cautions and the status page remains available",
      "All ECAM cautions and warnings, aural warnings, master caution and master warning lights are lost",
    ],
    correct: 3,
    explanation:
      "FCOM PRO-ABN-FWS: total loss of ECAM alerts and standard aural warnings.",
  },
  {
    id: 438,
    theme: "Landing Gear",
    question: "What is the function of the landing gear SAFETY VALVE?",
    options: [
      "The safety valve prevents the landing gear from extending too quickly causing damage to the down locks",
      "When the aircraft is flying faster than 250 kt the safety valve automatically cuts off hydraulic supply to the landing gear system",
      "When the aircraft is flying faster than 260 kt the safety valve automatically cuts off hydraulic supply to the landing gear system",
      "The safety valves prevents the landing gear from being hydraulically supplied on the ground The valve opens pressurising the landing gear as soon as the aircraft leaves the ground",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-32-10-20: Above 260 kt, hyd power to gear is cut off to prevent damage.",
  },
  {
    id: 439,
    theme: "Auto Flight / FMS",
    question:
      "Regarding an autoland approach, with both autopilots engaged, which FMGC is master?",
    options: ["Both", "FMGC 2", "Neither", "FMGC 1"],
    correct: 3,
    explanation:
      "FCOM DSC-22-10-30: FMGC 1 retains priority master role in dual AP operations.",
  },
  {
    id: 440,
    theme: "Other",
    question: "When opened in an emergency, the passenger entry doors:",
    options: [
      "Are electrically assisted into the open position",
      "Will need two cabin crew to push them open",
      "Will be driven open automatically by a damper actuator when the door control handle is lifted, and the door is armed",
      "Are assisted to the open position by slide inflation",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-52-10-20: Pneumatic damper forces door open if opened while ARMED.",
  },
  {
    id: 441,
    theme: "Auto Flight / FMS",
    question: "ALPHA-FLOOR is available from:",
    options: [
      "Liftoff until touchdown",
      "Liftoff until the aircraft reaches 100 ft RA on approach",
      "Slat retraction until 100ft RA in approach",
      "Slat retraction until landing gear extension",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-22-40-30: active from liftoff down to 100 ft RA on approach.",
  },
  {
    id: 442,
    theme: "Auto Flight / FMS",
    question: "How can armed FMA modes be identified on the PFD?",
    options: [
      "Armed FMA modes are displayed in blue (selected) or green (managed)",
      "Armed FMA modes are displayed in magenta (selected) or blue (managed)",
      "Armed FMA modes are displayed in blue (selected) or magenta (managed)",
      "Armed FMA modes are displayed in blue (selected) or white (managed)",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-22-30-80-20: Armed modes: Blue (selected) or Magenta (managed).",
  },
  {
    id: 443,
    theme: "Powerplant",
    question:
      "Which valves can the flight crew control via the ENG1 (ENG2) MASTER switches?",
    options: [
      "LP fuel shutoff valve only",
      "Hydraulic fire shutoff, LP and HP fuel shut-off valves",
      "HP fuel shutoff valve only",
      "LP and HP fuel shutoff valves",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-70-20: MASTER switch to OFF closes both LP and HP fuel valves.",
  },
  {
    id: 444,
    theme: "Other",
    question: "What is cost index (CI)?",
    options: [
      "The ratio of fuel cost (CF) to flight time cost (CT)",
      "The ratio of engine wear cost (CE) to fuel cost (CF)",
      "Fuel cost (CF)",
      "The ratio of flight time cost (CT) to fuel cost (CF)",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-22-10-40-20: Ratio of flight time cost to fuel cost.",
  },
  {
    id: 445,
    theme: "Communications",
    question: "When will the SEL light illuminate on each RMP?",
    options: [
      "If VHF1 is tuned by RMP2, the SEL light will be illuminated on all RMPs",
      "If the NAV pushbutton has been selected, the SEL light will be illuminated on all RMPs",
      "If VHF1 is tuned by RMP2, the SEL light will be illuminated on RMP1 and RMP2 only",
      "If the NAV pushbutton has been selected, the SEL light will be illuminated on RMP1 and RMP2 only",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-23-10-20: Indicated on both RMPs if cross-tuning occurs.",
  },
  {
    id: 446,
    theme: "Powerplant",
    question:
      "The FAULT (amber) light is illuminated in the ENG 1 pump pushbutton, when will this light extinguish?",
    options: [
      "When the pushbutton is selected OFF for all cases excluding reservoir low air pressure",
      "The FAULT light will remain illuminated as long as the fault condition remains (low pressure, low level, etc.), regardless of the pushbutton position",
      "When the pushbutton is selected OFF for all cases",
      "When the pushbutton is selected OFF for all cases excluding reservoir overheat. The FAULT light will remain on as long as the overheat lasts",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-29-20: OFF selection clears light except for physical overheats.",
  },
  {
    id: 447,
    theme: "Navigation",
    question: "How is a temporary flight plan indicated on the ND?",
    options: [
      "A solid amber line",
      "A dashed yellow line",
      "A solid blue line",
      "A dotted magenta line",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-31-45: temporary plan is shown as a dashed yellow line.",
  },
  {
    id: 448,
    theme: "Auto Flight / FMS",
    question: "What speed will the FMGS use in an expedite climb?",
    options: [
      "The target speed is Green Dot, which is maintained with pitch control",
      "200 kt below 10,000 ft",
      "ECON climb speed",
      "250 kt/ M0.76 kt above 10,000 ft",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-22-30-40-40: Target speed is Green Dot via pitch control.",
  },
  {
    id: 449,
    theme: "Systems - Air/Press",
    question:
      "Above what cabin altitude will the cabin oxygen masks be deploy automatically?",
    options: ["12,000 ft", "16,000 ft", "9,550 ft", "14,000 ft"],
    correct: 3,
    explanation:
      "FCOM LIM-AIR: Automatic deployment occurs at 14,000 ft cabin altitude.",
  },
  {
    id: 450,
    theme: "Systems - Elec",
    question: "Is it possible to parallel AC generators on the same BUS?",
    options: [
      "Only with the RAT deployed",
      "Only one engine generator may be paralleled with the APU",
      "Yes",
      "The electrical system will not allow paralleling of generators",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-24-10-10: Network design physically prohibits parallel source connection.",
  },
  {
    id: 451,
    theme: "Flight Controls",
    question: "How many flight control computers are there?",
    options: [
      "7: 3 x ELACs, 2 x SECs, 2 x FACs",
      "5: 2 x ELACs, 3 x SECs",
      "8: 3 x ELACs, 3 x SECs, 2 x FACs",
      "7: 2 x ELACs, 3 x SECs, 2 x FACs",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-27-10-20: Architecture uses 7 units: 2 ELAC, 3 SEC, 2 FAC.",
  },
  {
    id: 452,
    theme: "Flight Controls",
    question: "Which statement about the FAC is true?",
    options: [
      "When the AP is engaged, the rudder trim knob is inoperative, and the master FMGC sends rudder trim orders to the FACs. In addition the FAC flight envelope function performs the alpha protection in normal law",
      "When the AP is engaged, the rudder trim knob is inoperative, and the master FMGC sends rudder trim orders to the FACs. In addition the FAC flight envelope function will automatically select the A-FLOOR A/THR mode, when the conditions for its activation are met",
      "The FAC is a flight control computer, and does not form part of the FMGS",
      "When the AP is engaged the master FMGC sends rudder trim orders to the FACs. The FACs sole purpose are to provide yaw damping, rudder trim and rudder travel limitation functions",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-22-40-20: FAC envelope function triggers Alpha Floor protection.",
  },
  {
    id: 453,
    theme: "Other",
    question: "How do you adjust the brightness of the FCU displays?",
    options: [
      "On the MCDU",
      "Using the rotary knobs located beneath the FCU",
      "Using the INTEG LT rotary switch",
      "Using the FLOOD LT rotary switch",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-22-10-40-20: Adjusted via knobs under the FCU on the glareshield.",
  },
  {
    id: 454,
    theme: "Systems - Air/Press",
    question:
      "During cockpit preparation, what is the significance of an amber half box around the oxygen pressure indication on the DOOR/OXY page?",
    options: [
      "The cockpit oxygen pressure has dropped below 800PSI, this is a no dispatch.",
      "The pressure in the oxygen bottle is less than 1500PSI. Refer to the limitations section of the FCOM to determine whether the remaining quantity is not below the minimum for the number of occupants in the flight deck.",
      "The pressure in the oxygen bottle is less than 1000PSI, call engineering to have the oxygen bottle replaced before departure.",
      "The oxygen pressure in the low pressure circuit is low (60PSI)",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-31-20: Advisory for pressure < 1500 PSI; check LIM for crew count.",
  },
  {
    id: 455,
    theme: "Auto Flight / FMS",
    question: "What are the two main functions of the FMGC?",
    options: [
      "Flight management and flight guidance",
      "Flight management and flight envelope protection",
      "Flight guidance and flight envelope protection",
      "Flight management and yaw axis control",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-22-10-10: Main components are Flight Management and Flight Guidance.",
  },
  {
    id: 456,
    theme: "Auto Flight / FMS",
    question:
      "Which of the following statements regarding the FWC, ELAC and FAC is true (select the most complete answer)?",
    options: [
      "The FWC generates the OVERSPEED warnings, the ELAC performs the HIGH SPEED protection, and the FAC computes and displays characteristic speeds on the PFD",
      "The FWC computes and displays the characteristic speed on the PFD, the ELAC performs the A.FLOOR protection, and the FAC is only active when the AP is engaged",
      "The FWC generates the OVERSPEED warnings, the ELAC performs the HIGH SPEED protection, and the FAC only performs yaw related functions (rudder trim/limits/damping)",
      "The FWC generates the OVERSPEED warnings, the ELAC performs the LOW SPEED protection, and the FAC only performs yaw related functions (rudder trim/limits/damping)",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-31-10: FWC warns; ELAC pitch protects; FAC calculates speeds.",
  },
  {
    id: 457,
    theme: "Powerplant",
    question: "How can the flight crew dry crank an engine?",
    options: [
      "Dry cranking (engine ventilation) is always performed automatically by the FADEC when the residual EGT temperature is too high",
      "Set the MODE selector to CRANK, and the MASTER switch to ON.",
      "Set the MODE selector to CRANK, and the MAN START push button to ON",
      "Leave the MODE selector in IGN/START, confirm that the MASTER switch is OFF, and set the MAN START push button to ON",
    ],
    correct: 2,
    explanation:
      "FCOM PRO-NOR-SRP-01-15: set ENG MODE to CRANK; use MAN START to ON.",
  },
  {
    id: 458,
    theme: "Limitations",
    question: "What is the max continuous thrust EGT limit for the CFM engine?",
    options: ["950°C", "725°C", "625°C", "915°C"],
    correct: 3,
    explanation: "FCOM LIM-ENG: MCT EGT limit for CFM56 is 915°C.",
  },
  {
    id: 459,
    theme: "Flight Controls",
    question:
      "Which flight control computers receive inputs from the sidestick?",
    options: ["ELAC, SEC and FAC", "ELAC and SEC", "SEC only", "ELAC only"],
    correct: 1,
    explanation:
      "FCOM DSC-27-10-20: Both ELACs and SECs process sidestick pitch/roll inputs.",
  },
  {
    id: 460,
    theme: "Navigation",
    question:
      "What happens to the avionics ventilation system if both the BLOWER and EXTRACT push buttons are set to override?",
    options: [
      "The closed configuration is selected, both fans remain running, and air conditioned air is added to the system",
      "Intermediate configuration is selected manually, and the avionics compartment is isolated from the air conditioning system",
      "Air conditioned air will enter the system, and the skin air outlet door will fully open, both fans will continue to run",
      "The smoke configuration will be selected. Air conditioned air will enter the system, and all of the extracted air is dumped overboard (via a small flap on the skin air outlet door). The Blower Fan stops.",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-21-30-20: Smoke config: uses conditioned air; Blower stops.",
  },
  {
    id: 461,
    theme: "ECAM / Displays",
    question:
      "Which of the following statements best describes a level 3 ECAM alert?",
    options: [
      "A steady red master warning light, a red warning message on the E/WD, automatic call of the relevant system page, and a CRC, specific sound or synthetic voice",
      "A flashing red master warning light, a red warning message on the E/WD, automatic call of the relevant system page, and a CRC, specific sound or synthetic voice",
      "A steady amber master caution light, an amber caution message on the E/WD, automatic call of the relevant system page, but no aural sound",
      "A steady amber master caution light, an amber caution message on the E/WD, automatic call of the relevant system page, and a single chime",
    ],
    correct: 1,
    explanation: "FCOM DSC-31-10: Flashing Red Master Warning + CRC.",
  },
  {
    id: 462,
    theme: "Systems - Air/Press",
    question: "What impact does a CAB PR SYS 1+2 FAULT alert have?",
    options: [
      "The pressurisation system will automatically select manual mode. The flight crew can take immediate control of the outflow valve using the MAN V/S CTL switch",
      "Both cabin pressure controllers have failed. The flight crew will set the MODE SEL push button to MAN and adjust the position of the outflow valve as required.",
      "Control of the outflow valve has been lost. The flight crew should begin a normal descent to FL100/MEA, but also be prepared to initiate an emergency descent if required.",
      "Both cabin pressure controllers have failed, the flight crew will need to immediately initiate an emergency descent",
    ],
    correct: 1,
    explanation:
      "FCOM PRO-ABN-CAB_PR: select MAN mode for manual outflow valve control.",
  },
  {
    id: 463,
    theme: "Powerplant",
    question:
      "During a single engine taxi, engine 1 is running and engine 2 is off. What happens when the ENG MODE selector is moved from NORM to IGN/START?",
    options: [
      "The engine 2 FADEC is powered ready for engine start only.",
      "The ENG SD page appears, the engine 2 FADEC is powered (amber crosses disappear for engine parameters), and the pack valves close. Continuous ignition for engine 1 has been manually selected.",
      "There will be no impact to engine 2 because its FADEC already powered by the aircraft electrical system, and the SD page will already be displayed. Continuous ignition, using one igniter (A or B), will be selected for engine 1.",
      "Continuous ignition, using both ignitors (A+B), will be selected for both engines",
    ],
    correct: 1,
    explanation:
      "OM-B Section 2.3.10.2 One Engine Taxi at Departure instructs to set the ENG MODE selector to IGN/START, then announce 'ENG 2 START' and set the MASTER lever to ON.<br>FCOM PRO-NOR-SRP-01-20: powers off-side FADEC and selects ignition.",
  },
  {
    id: 464,
    theme: "Flight Controls",
    question: "All flight control surfaces are:",
    options: [
      "Hydraulically controlled",
      "Mechanically actuated",
      "Mechanically controlled",
      "Hydraulically actuated",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-27-10-20: Surfaces are fly-by-wire controlled but hyd actuated.",
  },
  {
    id: 465,
    theme: "Systems - Air/Press",
    question:
      "The thrust levers are moved to the TOGA detent during takeoff. Which configuration would you expect the avionics ventilation system to select if the OAT is 40°C?",
    options: ["Closed", "Normal", "Intermediate", "Open"],
    correct: 0,
    explanation:
      "FCOM DSC-21-30-20: T/O power forces 'Closed' circuit to maintain hull integrity.",
  },
  {
    id: 466,
    theme: "Flight Controls",
    question: "In which configuration will green dot be displayed on the PFD?",
    options: [
      "All answers are correct",
      "CONF 1+F",
      "CONF 1",
      "Clean configuration",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-22-10-50-20: best lift-to-drag speed shown in CLEAN configuration.",
  },
  {
    id: 467,
    theme: "ECAM / Displays",
    question: "Which computer generates amber cautions?",
    options: ["DU", "FWC", "DMC", "SDAC"],
    correct: 1,
    explanation:
      "FCOM DSC-31-10: FWC generates cautions/warnings and aural alerts.",
  },
  {
    id: 468,
    theme: "ECAM / Displays",
    question: "When is T.O. INHIBIT displayed on the EWD?",
    options: [
      "1st engine started to 80 kt (phases 2 and 3)",
      "800 ft to 80 kt (phases 7 and 8)",
      "First engine to takeoff power to 1,500 ft (phases 3, 4 and 5)",
      "1st eng to takeoff power to 800 ft (phases 3, 4 and 6)",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-31-10: Suppresses alerts from T/O power until passing 1,500 ft.",
  },
  {
    id: 469,
    theme: "Systems - Air/Press",
    question: "What impact does a CAB PR SYS 1 FAULT alert have?",
    options: [
      "If CPC 1 was active at the time of the failure, CPC 2 will need to be selected manually by the flight crew",
      "The outflow valve will operate at half speed",
      "If CPC 1 was active at the time of the failure, CPC 2 will take over automatically. This alert is for crew awareness only (Level 1 ECAM alert)",
      "The pressurisation system will be operating in semi-automatic mode. The flight crew must adjust the target landing elevation using the LDG ELEV rotary knob on the CABIN PRESS panel.",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-21-20-30: redundant standby CPC auto-takes over control.",
  },
  {
    id: 470,
    theme: "Auto Flight / FMS",
    question: "When will the approach phase activate?",
    options: [
      "At the FAF altitude when on a precision approach",
      "Automatically when overflying the DECEL pseudo waypoint with NAV, LOC* or LOC engaged. It can also be manually activated by selecting ACTIVATE APPR PHASE on the PERF page",
      "Automatically when approx 15 NM from arrival aerodrome in any flight guidance mode",
      "It can only be manually selected on the MCDU PERF page by either pilot",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-22-20-10-20: activates passing DECEL or via MCDU manual entry.",
  },
  {
    id: 471,
    theme: "Ice & Rain Protection",
    question: "Can wing anti-ice be used when one engine is inoperative?",
    options: [
      "Yes, provided the x-bleed is selected open, one pack is selected off and the fire push button has not been pushed",
      "Yes, APU bleed air can be used for wing anti-ice",
      "No. It is not possible for one engine bleed to supply air to both wings for anti-icing",
      "Yes, the crossbleed will automatically open after the wing anti-ice has been selected ON",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-30-20-10: Yes; crossbleed open and one pack OFF ensures pressure.",
  },
  {
    id: 472,
    theme: "Flight Controls",
    question:
      "How many independent channels are there in a Flight Augmentation Computer?",
    options: [
      "4 channels: Yaw damper, rudder trim, rudder travel limit, and flight envelope",
      "3 channels: Yaw damper, rudder trim and rudder travel limit",
      "2 channels: Yaw damper and rudder trim",
      "2 identical channels for redundancy",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-22-40-20: 4 channels: Damping, Trim, Limit, Envelope.",
  },
  {
    id: 473,
    theme: "Landing Gear",
    question:
      "When will the autobrake system activate following a rejected takeoff?",
    options: [
      "Manually extending the speed brake lever immediately after setting the thrust levers to idle will activate the autobrake",
      "The autobrake will activate as soon as both thrust levers are brought back to the idle detent, and the wheel speed is above 40 kt",
      "The command for ground spoiler deployment from the SECs (wheel speed > 72 kt) will activate the autobrake",
      "The autobrake will activate when reverse thrust is selected on a least one thrust lever, and the wheel speed is above 40 kt",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-32-30-10: Triggered by spoiler extension (> 72 kt + levers idle).",
  },
  {
    id: 474,
    theme: "Powerplant",
    question: "When will the FADEC select the modulated idle mode?",
    options: [
      "Whenever the flaps are retracted (FLAPS at zero position)",
      "When flaps are retracted in flight, or on the ground provided reverse is not selected",
      "In flight when the flap lever is not at the zero position",
      "Whenever the thrust lever is in the REV IDLE position",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-70-30-40: Default idle; Approach idle used if flaps extended.",
  },
  {
    id: 475,
    theme: "Navigation",
    question: "Which DMCs can receive information from ADIRU 3?",
    options: [
      "DMC 1 or 3. Following the failure of ADIRU1, ADIRU3 will automatically connect to the Captain's PFD",
      "DMC 1, 2 and 3. However only air data can supplied by ADIRU3 to DMC 1 and 2",
      "DMC 1, 2; or 3 depending on the configuration of the ATT HDG and AIR DATA rotary selectors on the switching panel",
      "DMC 3 only The EIS DMC selector on the switching-panel, can be used to display ADIRU 3 data via DMC 3 on either the CAPT or FO PFD",
    ],
    correct: 2,
    explanation: "FCOM DSC-31-05-40: determined by switching panel selections.",
  },
  {
    id: 476,
    theme: "Navigation",
    question:
      "Which computer controls all datalink communications between the aircraft and the ground (Airline and or ATC)?",
    options: ["RMP", "FMGC", "MCDU", "ATSU"],
    correct: 3,
    explanation:
      "FCOM DSC-46-10-10: Air Traffic Services Unit (ATSU) manages all datalink.",
  },
  {
    id: 477,
    theme: "ECAM / Displays",
    question:
      "After an ND failure, which of the following statements is correct?",
    options: [
      "The ND is lost on that side of the aircraft",
      "The ND can be manually transferred to the PFD",
      "The ND cannot be manually transferred to the PFD",
      "The ND will automatically transfer to the PFD",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-31-05-60: Manual ND transfer to adjacent PFD screen possible.",
  },
  {
    id: 478,
    theme: "Communications",
    question: "Which VHF antenna is located on the lower fuselage?",
    options: [
      "VHF 3",
      "VHF 2",
      "None. All three are located on the upper fuselage",
      "VHF 1",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-23-30-10: VHF 1/3 are upper; VHF 2 is on the lower fuselage.",
  },
  {
    id: 479,
    theme: "Flight Controls",
    question:
      "In Normal Law, what are the limits of the Pitch Attitude protection with flaps Full?",
    options: [
      "35° nose up progressively reduced to 20°",
      "30° nose up",
      "25° nose up. It is progressively reduced to 20° at low speed.",
      "There is no limit",
    ],
    correct: 2,
    explanation: "FCOM LIM-AG-F_CTL: Max pitch UP limited to 25° in CONF FULL.",
  },
  {
    id: 480,
    theme: "ECAM / Displays",
    question:
      "On the ECAM E/WD, when does the LDG INHIBIT (magenta) memo appear?",
    options: [
      "Below 2,000 ft radio altitude",
      "With selection of FLAP 2 on the approach",
      "Below 800 ft radio altitude",
      "With selection of GEAR DOWN",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-31-10: LDG INHIBIT suppresses non-criticals below 800 ft RA.",
  },
  {
    id: 481,
    theme: "Flight Controls",
    question: "Select the correct statement about the wingtip brakes (WTB):",
    options: [
      "The WTBs activate in case of an uncommanded movement of the slats or flaps, such as runaway, asymmetry or overspeed. If the slat WTB is on, the flaps will still operate",
      "The wing tip brakes will only activate when asymmetry is detected with either the flap or slat system. The flap lever should remain in the position it was in at the time of WTB activation",
      "The WTBs activate when the flap or slat position disagree with the flap lever selection. If any WTB is on, both slats and flaps are locked in position, and cannot be released in flight",
      "The WTBs activate in case of an uncommanded movement of the slats or flaps, such as runaway, asymmetry or overspeed. If any WTB is on, both slats and flaps are locked in position, and cannot be released in flight",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-27-10-20: Slat and Flap systems are independent; locking one system doesn't affect the other.",
  },
  {
    id: 482,
    theme: "ECAM / Displays",
    question:
      "On the ECAM display, which colour is used to make the crew aware of an abnormal configuration or failure, and no immediate action is required?",
    options: ["Red", "Blue", "Amber", "White"],
    correct: 2,
    explanation:
      "FCOM DSC-31-10: Amber color signifies awareness cautions (Level 2).",
  },
  {
    id: 483,
    theme: "Hydraulics",
    question: "When does the PTU operate?",
    options: [
      "At any time that there is more than a 500 PSI pressure difference between the green and yellow systems",
      "When there is more than a 750 PSI pressure difference between the green and yellow systems. The PTU is inhibited during the first engine start, and when the cargo doors are operated",
      "When there is more than a 500 PSI pressure difference between the green and yellow systems. The PTU is inhibited when both engines master switches are set to off",
      "When there is more than a 500 PSI pressure difference between the green and yellow systems. The PTU is inhibited during the first engine start, and when the cargo doors are operated",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-29-10-20: Differential > 500 PSI; inhibited during 1st start and cargo ops.",
  },
  {
    id: 484,
    theme: "Performance / EFB",
    question: "What is maximum value of Approach Correction?",
    options: ["5 kt", "15 kt", "10 kt"],
    correct: 1,
    explanation:
      "FCOM DSC-22-20-10-20: APPR COR manual speed increment is limited to +15 kt.",
  },
  {
    id: 485,
    theme: "Navigation",
    question: "On which display(s) can the ground speed and TAS be viewed?",
    options: [
      "In the top right hand corner of the ND in only the ARC or NAV modes",
      "On the PFD or in the top left hand corner of the ND",
      "In the top left corner of the ND in only NAV and ARC modes",
      "In the top left corner of the ND in all modes",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-31-45: GS and TAS permanently displayed in ND top-left corner.",
  },
  {
    id: 486,
    theme: "Hydraulics",
    question: "What is the function of the hydraulic priority valves?",
    options: [
      "They prioritise hydraulic power to the heavy load users",
      "They will close when the flight crew push the ENG 1(2) FIRE pushbutton",
      "They prioritise the engine driven pumps over the PTU",
      "If heavy load users cause a large drop in system pressure, the priority valve will close cutting off supply to these loads",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-29-10-30: Closes supply to heavy loads to protect flight controls.",
  },
  {
    id: 487,
    theme: "Landing Gear",
    question: "Select the statement that best describes the parking brake:",
    options: [
      "If the parking brake fails, the parking brake must be selected off before the normal braking system can be applied via the brake pedals",
      "The parking brake uses a dedicated control valve to apply yellow hydraulic or brake accumulator pressure directly to the wheel brakes. This bypasses the alternate braking servo valve",
      "The parking brake accumulator can maintain parking pressure for at least 24hrs",
      "The parking brake uses the alternate braking servo valve to apply yellow hydraulic or brake accumulator pressure to the wheel brakes",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-32-30-10: Bypasses servo valves; direct Yellow/accumulator supply.",
  },
  {
    id: 488,
    theme: "Systems - Air/Press",
    question:
      "After a cockpit oxygen mask has been used, how can the mask microphone be cut-off and boom microphone be re-activated?",
    options: [
      "Push the TMR RESET button on the OXYGEN panel",
      "Close the left hand door of the mask stowage box, and push the RESET/TEST slide. The OXY ON flag will disappear",
      "Close both doors on the mask stowage box",
      "Move the MASK-BOOM switch on the ACP back to the BOOM position",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-35-20-30: Close box and press RESET slide to restore boom mic.",
  },
  {
    id: 489,
    theme: "Communications",
    question:
      "What is the primary method of communication for datalink messages controlled via the ATSU?",
    options: [
      "The datalink system primarily uses HF2",
      "The datalink system primarily uses VHF3",
      "The datalink system primarily uses SATCOM",
      "The datalink system uses a dedicated UHF radio",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-46-10-10: VHF 3 is the primary transceiver for ATSU datalink.",
  },
  {
    id: 490,
    theme: "Fire Protection",
    question:
      "Select the correct statement about the AGENT pushbuttons on the FIRE panel:",
    options: [
      "It is not possible to have an amber DISCH light without a white SQUIB light on a AGENT pushbutton",
      "The agent buttons are always active allowing a bottle to be fired at any time, independent of the associated FIRE pushbutton position",
      "The DISCH light illuminates in amber as soon as the squib is fired for the corresponding bottle",
      "The DISCH light illuminates in amber when the corresponding fire extinguisher bottle has lost pressure",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-26-20-20: Amber DISCH light indicates bottle pressure loss.",
  },
  {
    id: 491,
    theme: "Auto Flight / FMS",
    question:
      "With the ATT HDG switch set to CAPT 3, and AIR DATA switch set to NORM: which computer(s) will be providing air, attitude and heading data to the Captain's PFD?",
    options: [
      "ADIRU 3 will be providing air data, and ADIRU 1 attitude and heading data",
      "ADIRU 2 will be providing air data, and ADIRU 1 attitude and heading data",
      "ADIRU 3 will be providing all air, attitude and heading data",
      "ADIRU 1 will be providing air data, and ADIRU 3 attitude and heading data",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-31-05-40: Capt side: ADIRU 3 (Att/Hdg) + ADIRU 1 (Air Data).",
  },
  {
    id: 492,
    theme: "Communications",
    question:
      "Which of the following communication methods are used for datalink messages?",
    options: [
      "VHF only",
      "SATCOM only",
      "VHF or HF only",
      "VHF, HF or SATCOM (where fitted and available)",
    ],
    correct: 3,
    explanation: "FCOM DSC-46-10-10: Messages routed via VHF, HF, or SATCOM.",
  },
  {
    id: 493,
    theme: "Fire Protection",
    question:
      "Select the correct statement about the AGENT pushbuttons on the FIRE panel:",
    options: [
      "After an ENG or APU fire has been detected SQUIB illuminates in white on the corresponding agent pushbutton(s), this helps identify the agents to be activated",
      "When the associated FIRE PB (ENG or APU) is released SQUIB illuminates in amber on the corresponding agent pushbutton(s)",
      "After a ENG or APU fire has been detected SQUIB illuminates in white on the corresponding agent pushbutton(s). After the bottle has been discharged the SQUIB light is replaced by an amber DISCH light",
      "When the associated FIRE PB (ENG or APU) is released SQUIB illuminates in white on the corresponding agent pushbutton(s)",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-26-20-20: Releasing FIRE pb arms squibs (white SQUIB light).",
  },
  {
    id: 494,
    theme: "Communications",
    question: "On the RMP, the ON/OFF switch controls:",
    options: [
      "Only the COM function of the RMP",
      "The power supply to the RMP",
      "The power supply to both the RMP and ACP",
      "Only the STBY NAV function of the RMP",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-23-45-10: ON/OFF switch powers only the RMP unit itself.",
  },
  {
    id: 495,
    theme: "Auto Flight / FMS",
    question:
      "How can the flight crew arm the LOC and GS modes in order to fly an ILS approach?",
    options: [
      "Push the APP pushbutton on the FCU. Once LOC and G/S are armed ILS information (include G/S and LOC scales) will be displayed automatically on the PFD regardless of the selections made on the EFIS panels",
      "Push the APP pushbutton on the FCU. The ILS information (including LOC and G/S scales) will not be displayed on the PFD unless the LS push button is selected on the EFIS panels",
      "Push the LS button the EFIS panel located on the glareshield",
      "Push APP pushbutton FCU, however LOC and G/S modes will not arm or engage unless the LS button has been selected on both FO and CAPT EFIS panels",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-22-30-40-80-00: Scales only display if LS button is active.",
  },
  {
    id: 496,
    theme: "APU",
    question:
      "Both engines and the APU are running, what must the flight crew do before selecting APU bleed? (X-BLEED set to AUTO)",
    options: [
      "The engine bleeds must be selected OFF, and crossbleed set to OPEN, before selecting the APU bleed to ON",
      "The engine bleeds must be selected OFF before selecting the APU bleed to ON. The crossbleed valve can remain in AUTO as it will open automatically",
      "Nothing, upon selecting APU bleed the crossbleed valve will automatically open, and each engine bleed valve will automatically close",
      "Turn ENG 1 bleed OFF, and confirm that the crossbleed is closed, before selecting APU bleed ON",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-36-10-30: AUTO crossbleed opens automatically with APU Bleed ON.",
  },
  {
    id: 497,
    theme: "APU",
    question:
      "When does the green AVAIL light illuminate on the APU start push button?",
    options: [
      "When N is above 93%",
      "When N is above 90%",
      "When N is above 95%",
      "N = 100%",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-49-20: AVAIL light illuminates when APU speed N >= 95%.",
  },
  {
    id: 498,
    theme: "ECAM / Displays",
    question:
      "Which ECAM alert level signifies a dangerous configuration, flight condition or a system failure that alters flight safety?",
    options: ["Level 3", "Advisory", "Level 2", "Level 1"],
    correct: 0,
    explanation:
      "FCOM DSC-31-10: Level 3 (Red) signifies high-safety emergency.",
  },
  {
    id: 499,
    theme: "Landing Gear",
    question:
      "During gravity gear extension, in which direction should the GRAVITY GEAR EXTENSION handle be rotated, and what happens during each turn?",
    options: [
      "Clockwise, 2 turns. The first turn isolates the gear from the green hydraulic system, the second unlocks the doors and allows the gear to drop into the extended position",
      "Clockwise, 3 turns. The first turn isolates the gear from the green hydraulic system, the second unlocks the doors, the third releases the uplocks and allows the gear to drop into the extended position",
      "Anti-clockwise, one complete rotation will isolate the landing gear from the hydraulic system, and simultaneously release the up-locks. The gear will push the doors open as it extends",
      "Anti-clockwise, 3 turns. The first turn isolates the gear from the yellow hydraulic system, the second unlocks the doors, the third releases the up-locks and allows the gear to drop into the extended position",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-32-10-40: Turn clockwise 3 times: Isolate, Unlock doors, Release uplocks.",
  },
  {
    id: 500,
    theme: "Powerplant",
    question: "How many igniters are used during an automatic engine start?",
    options: [
      "Both igniters are used for all engines starts, unless a circuit breaker for an individual igniter has been pulled",
      "Igniter A is used by default for all start attempts on the ground, if A fails then B is automatically selected In flight both igniters are used",
      "Only one igniter (A or B) is used for all automatic start attempts",
      "One igniter (A or B) is used on the first automatic start attempt on the ground. In flight both igniters are used for all start attempts",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-70-80-40: Ground auto: 1 igniter (A or B); flight auto: BOTH.",
  },
  {
    id: 501,
    theme: "Fire Protection",
    question:
      "In which areas of the engine are the fire detection loops located?",
    options: [
      "In the engine core and in the engine fan section",
      "In the fan and turbine sections",
      "In the engine core and the N2 gearbox",
      "In the pylon nacelle, in the engine core, and in the engine fan section",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-26-20-10: Covers pylon nacelle, engine core, and fan sections.",
  },
  {
    id: 502,
    theme: "Landing Gear",
    question: "What is the significance of a NW STRG DISC memo?",
    options: [
      "The memo appears when the nose wheel steering selector is in the towing position. It is always GREEN",
      "The memo appears when the nose wheel steering selector is in the towing position. It will be GREEN when the engines are not running, and AMBER when at least one engine is running",
      "It indicates that the BSCU has been switched off",
      "The PF has pushed the rudder PEDALS DISC push button on the hand wheel, to disconnect the rudder pedals from the nose wheel during the flight control check",
    ],
    correct: 1,
    explanation:
      "OM-B Section 2.3.7.1 At Pushback/Start Clearance states that 'NW STRG DISC' is displayed in green during normal pushback, but it appears amber if at least one engine is running during pushback to alert the crew.<br>FCOM PRO-NOR-SRP-01-15: green if engines stopped; amber if an engine runs.",
  },
  {
    id: 503,
    theme: "Flight Controls",
    question: "If a SEC fails, what happens to the spoiler(s) it controls?",
    options: [
      "The effected spoiler retains the deflection it has at the time of the loss, this may lead to asymmetrical deployment of the spoilers",
      "The effected spoiler retains the deflection it has at the time of the loss, and the symmetrical one on the other wing is inhibited",
      "The effected spoiler is automatically retracted, and this may lead to asymmetrical spoiler deployment",
      "The effected spoiler is automatically retracted, and the symmetrical one on the other wing is inhibited",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-27-10-20: Effected spoiler retracts; symmetric counterpart inhibited.",
  },
  {
    id: 504,
    theme: "APU",
    question:
      "Which of the following statements about the use of APU bleed air is correct?",
    options: [
      "The use of APU bleed air for wing anti-ice is permitted, provided one pack is turned off",
      "The use of APU bleed air for dual pack operation in flight is prohibited",
      "APU bleed air is available for air conditioning throughout the flight envelope",
      "The use of APU bleed air for wing anti-ice is not permitted",
    ],
    correct: 3,
    explanation:
      "FCOM LIM-APU: Use of APU bleed air for Wing Anti-Ice is strictly prohibited.",
  },
  {
    id: 505,
    theme: "Powerplant",
    question: "Select the correct statement about an engine relight in flight:",
    options: [
      "APU bleed can be used to assist with an engine start throughout the entire flight envelope",
      "During an automatic start in flight, the FADEC may not need to engage the starter motor if the engine is wind milling at a sufficient N2",
      "In flight the FADEC always commands a starter-assisted air start",
      "Automatic start is unavailable in flight",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-70-80-40: FADEC assessing N2 may air-start without starter motor.",
  },
  {
    id: 506,
    theme: "Performance / EFB",
    question:
      "What happens if you take off without V2 being entered on the PERF page?",
    options: [
      "You cannot take off. V2 entry is mandatory",
      "You will not be able to climb after VR",
      "If V2 is not inserted, the Indicated Air Speed will not engage for go-around",
      "If V2 is not inserted, the speed reference system (SRS) will not engage for takeoff",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-22-30-40-20: SRS mode fails to engage without a V2 entry.",
  },
  {
    id: 507,
    theme: "ECAM / Displays",
    question:
      "What is the meaning of a AMBER light in a flight deck pushbutton?",
    options: [
      "Normal system operation",
      "A failure that the flight crew should be aware of, but does not call for immediate action",
      "An abnormal pushbutton position",
      "A failure requiring immediate action",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-31-05-10: Amber indicates awareness-level failure (Level 2).",
  },
  {
    id: 508,
    theme: "Systems - Air/Press",
    question:
      "When is pack flow automatically increased to HIGH, regardless of the position of the PACK FLOW control knob?",
    options: [
      "When using APU bleed or during single pack operation",
      "Only when using APU bleed",
      "The pack flow never exceeds the selection on the AIR COND panel",
      "When temperature demand cannot be satisfied",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-21-10-30: HIGH flow forced for APU source or single-pack ops.",
  },
  {
    id: 509,
    theme: "Navigation",
    question:
      "Following a double FMGC failure how can the navigation radios be tuned?",
    options: [
      "Select the NAV key (under the transparent switch guard) on RMP 1 and 2. Each RMP tunes its respective onside VOR and ADF radios. Both ILS receivers can be tuned from either RMP 1 or 2",
      "The MCDU can be used in a back-up tuning mode, allowing the MCDU to communicate directly with the navigation radios",
      "Select the NAV key (under the transparent switch guard) on RMP 1 and 2. The ILS frequency must be tuned separately in each RMP to ensure that the localiser and gliseslope indications are available on both PFDs",
      "Select the NAV key (under the transparent switch guard) on RMP 1, 2, or 3. Any RMP can tune any navigation radio",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-23-10-20: Use RMP 'NAV' backup key to manually tune receivers.",
  },
  {
    id: 510,
    theme: "Auto Flight / FMS",
    question: "What is the normal mode of operation of the FMGS?",
    options: [
      "Backup navigation mode",
      "Independent mode",
      "Dual mode",
      "Single mode",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-22-10-30: Dual Mode: computers sync and monitor each other.",
  },
  {
    id: 511,
    theme: "Systems - Air/Press",
    question: "Select the correct statement about the potable water system:",
    options: [
      "A vacuum generator is used to distribute potable water around the aircraft",
      "The potable water is normally pressurised by the pneumatic system",
      "The potable water system is completely unpressurized and relies on gravity",
      "When the engines aren't running a foot pump in each toilet can pump water to the sink",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-38-10: Tanks pressurized by pneumatics to distribute water.",
  },
  {
    id: 512,
    theme: "Navigation",
    question: "Frequency selection on each RMP is done by concentric knobs:",
    options: [
      "The outer knob controls voice frequencies and the inner knob controls NAV aid frequencies",
      "The outer knob controls whole numbers, the inner knob controls decimal fractions",
      "The outer knob controls the active box and the inner knob the standby",
      "The outer knob controls decimal fractions and the inner knob whole numbers",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-23-45-10: Outer knob = whole numbers; inner knob = decimals.",
  },
  {
    id: 513,
    theme: "Ice & Rain Protection",
    question:
      "When does the window (windshield) heating come on automatically?",
    options: [
      "When AC power is available",
      "On the ground when AC power is available, and the outside temperature is less than 10°C",
      "When at least one engine is running or in flight",
      "After both engines are running or in flight",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-30-30-10: Auto ON if at least one engine is running or airborne.",
  },
  {
    id: 514,
    theme: "Auto Flight / FMS",
    question: "What are the basic modes of the AP/FD?",
    options: ["HDG and V/S", "SPD and HDG", "ALT and NAV", "Pitch and roll"],
    correct: 0,
    explanation:
      "FCOM DSC-22-30-10: Basic guidance: lateral (HDG) and vertical (V/S).",
  },
  {
    id: 515,
    theme: "Landing Gear",
    question:
      "If the rudder pedals are at full deflection at normal taxi speed what will the NWS angle be? (Degrees)",
    options: ["75°", "70°", "6°", "7°"],
    correct: 2,
    explanation:
      "FCOM DSC-32-10-30: Pedals limited to +/- 6° steer angle for centerline track.",
  },
  {
    id: 516,
    theme: "Ice & Rain Protection",
    question:
      "What happens to the wing and engine anti-ice valves when the hot air supply is unavailable?",
    options: [
      "Wing anti-ice valves open, engine anti-ice valves open",
      "Wing anti-ice valves close, engine anti-ice valves open",
      "Wing anti-ice valves open, engine anti-ice valves close",
      "Wing anti-ice valves close, engine anti-ice valves close",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-30-10-10: Pneumatic valves are spring-loaded CLOSED if no air pressure.",
  },
  {
    id: 517,
    theme: "Powerplant",
    question:
      "During a successful manual engine start when does the start valve close, and ignition cut off?",
    options: [
      "The FADEC automatically closes the start valve and cuts off ignition when N2 reaches 50%",
      "The start valve closes when the flight crew set the MAN START push button to OFF, and the igniters cut-off when the MODE selector is returned to normal",
      "The start valve closes when the MAN START push button is set to OFF. The ignition remains energised until the start sequence has completed, as indicated by a green AVAIL message on the E/WD",
      "The start valve closes and igniters cut off when the MAN START push button is set to OFF",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-70-80-40: FADEC auto-closes valve and cuts ignition at ~50% N2.",
  },
  {
    id: 518,
    theme: "Ice & Rain Protection",
    question: "How can you check that engine anti-ice has been selected on?",
    options: [
      "ENG A ICE will be displayed on the status page",
      "The ON (WHITE) lights on the ENG anti-ice push buttons are the only indications",
      "ON (WHITE) light on one or more ENG anti-ice push buttons, ENG A. ICE memo displayed in AMBER on the EWD",
      "ON (BLUE) light on one or more ENG anti-ice push buttons, ENG A. ICE memo displayed in GREEN on the EWD",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-30-20-20: Blue ON light on PB and green E/WD ENG A.ICE memo.",
  },
  {
    id: 519,
    theme: "ECAM / Displays",
    question: "Where does the air data displayed on the ISIS come from?",
    options: [
      "ADIRU 1, ADIRU 3, or from its own internal transducers connected to the standby pitot probe and static ports",
      "Only from its own internal transducers connected to the standby pitot probe and static ports",
      "ADIRU 1, 2 or 3",
      "Only ADIRU 3",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-34-NAV-20: Internal transducers plus backup from ADIRU 1/3.",
  },
  {
    id: 520,
    theme: "Performance / EFB",
    question: "What is considered to be a 'forward' CG at landing?",
    options: [
      "less than 29%",
      "less than or equal to 27%",
      "less than 27%",
      "less than or equal to 30%",
    ],
    correct: 2,
    explanation:
      "easyJet FS+ : CG < 29% is typically considered forward for landing.<br>BUT according to CAE Pelesys, right answer is : 'less than 27%'",
  },
  {
    id: 521,
    theme: "Performance / EFB",
    question: "What is considered to be a 'standard' CG at landing?",
    options: [
      "more than 30%",
      "more than or equal to 27%",
      "more than 27%",
      "more than or equal to 30%",
    ],
    correct: 1,
    explanation: "CAE Pelesys...",
  },
  {
    id: 522,
    theme: "Landing Gear",
    question:
      "While the aircraft is on the ground with engines running, the T.O. CONFIG TEST pushbutton is:",
    options: [
      "Inhibited",
      "Active and allows configuration simulation",
      "Only active when slats are retracted",
      "Used to reset the FWC",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-31-30: CONFIG test is a ground-only function (phases 2 to 3) and inhibited in flight (from phase 4).",
  },
  {
    id: 523,
    theme: "Aircraft General",
    question:
      "What cargo compartment can handle containers if the aircraft has that option?",
    options: [
      "Both FWD and AFT cargo compartments",
      "AFT cargo compartment only",
      "FWD cargo compartment only",
      "Bulk cargo compartment",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-20-20: Both forward and aft cargo compartments can be fitted to handle LD3-45W containers.",
  },
  {
    id: 524,
    theme: "Aircraft General",
    question: "Where is the external power receptacle located?",
    options: [
      "At the r/h refueling connector",
      "In front of the nose landing gear",
      "Behind the FWD cargo door",
      "Behind the nose landing gear",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-24-10-20: The external electrical power receptacle is located on the fuselage in front of the nose landing gear.",
  },
  {
    id: 525,
    theme: "Aircraft General",
    question: "What is the total length of the A320?",
    options: ["34.5m", "38.7m", "37.57m", "34.1m"],
    correct: 2,
    explanation:
      "FCOM DSC-20-20: The total overall length of the standard A320 aircraft is 37.57 meters.",
  },
  {
    id: 526,
    theme: "Indicating and Recording",
    question:
      "In normal operation, what displays are receiving information from DMC 1?",
    options: [
      "PFD 1 and ND 2",
      "E/WD and SD",
      "PFD 1, ND 1 and E/WD",
      "PFD 1 and ND 1",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-31-05-40: In normal configuration, DMC 1 supplies data to the Captain's PFD and ND, as well as the upper ECAM display (E/WD).",
  },
  {
    id: 527,
    theme: "Indicating and Recording",
    question:
      "The ECAM display uses a colour code that indicates the importance of the failure or the indication. What colour indicates crew should be aware but need not take immediate action?",
    options: ["Red", "White", "Blue", "Amber"],
    correct: 3,
    explanation:
      "FCOM DSC-31-10: Amber indicates an abnormal configuration or failure requiring crew awareness (Level 2), but not immediate action.",
  },
  {
    id: 528,
    theme: "Indicating and Recording",
    question: "How are Primary and Secondary failures indicated?",
    options: [
      "Displayed in Amber only",
      "Primary boxed, Secondary indicated by a star",
      "Underlined",
      "Primary white, Secondary blue",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-31-10: On the ECAM, a primary failure is boxed, and resulting secondary failures are indicated with an asterisk (*).",
  },
  {
    id: 529,
    theme: "Indicating and Recording",
    question: "What happens if the upper ECAM display fails?",
    options: [
      "E/WD is lost for the rest of the flight",
      "The E/WD page automatically replaces the ND 1",
      "The E/WD page automatically replaces the system/status page on the lower ECAM DU",
      "The E/WD page automatically replaces the PFD 1",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-31-05-60: If the upper display fails, the Engine/Warning Display (E/WD) automatically drops down to replace the System/Status display on the lower screen.",
  },
  {
    id: 530,
    theme: "Indicating and Recording",
    question: "Where is the Flap/Slat position displayed?",
    options: [
      "On the Flap/Slat indicator",
      "ECAM E/WD",
      "On ECAM SD",
      "On both PFD's",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-27-30-20: The current configuration of the slats and flaps is continuously displayed on the Engine/Warning Display (E/WD).",
  },
  {
    id: 531,
    theme: "Systems - Elec",
    question:
      "In normal configuration, what sources can supply power to the AC system when the aircraft is on ground?",
    options: [
      "Emergency Generator",
      "GEN 1, GEN 2 and External Power",
      "GEN 1 and GEN 2",
      "GEN 1, GEN 2, External Power and APU GEN",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-24-10-30: On the ground, the entire electrical network can be powered by either engine generator (GEN 1/2), the APU generator, or an External Power source.",
  },
  {
    id: 532,
    theme: "Systems - Elec",
    question: "What happens if GEN 1 is inoperative?",
    options: [
      "AC BUS 1 receives power from AC BUS 2 automatically",
      "AC BUS 1 can be used if EMERG GEN is connected to it",
      "AC BUS 1 is powerless",
      "AC BUS 1 is in this case supplied by the STATIC INVERTER",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-24-10-30: If GEN 1 fails, the bus tie contactors automatically close to allow GEN 2 (via AC BUS 2) to power AC BUS 1.",
  },
  {
    id: 533,
    theme: "Systems - Elec",
    question: "What's the purpose of the TR's?",
    options: [
      "To limit the current from the batteries",
      "To transform D/C to A/C",
      "To Transform and Rectify A/C power to D/C power",
      "To avoid a power shift when selecting another electrical source",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-24-10-20: Transformer Rectifiers (TRs) convert 115V AC power into 28V DC power for the aircraft's direct current network.",
  },
  {
    id: 534,
    theme: "Systems - Elec",
    question: "Why are some Circuit Breakers (C/Bs) green instead of black?",
    options: [
      "Different manufacturers",
      "They identify more important systems",
      "They are monitored and will show up on the ECAM approx. 1 minute after being triggered",
      "If they are in normal IN position, the aircraft is ready for departure",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-24-20: Green circuit breakers are monitored. If one pops, it triggers an ECAM C/B TRIPPED caution after a short delay.",
  },
  {
    id: 535,
    theme: "Auto Flight / FMS",
    question: "How many legs can a flight plan contain?",
    options: ["125", "200", "150", "250"],
    correct: 1,
    explanation:
      "FCOM DSC-22-10-30: Depending on the specific standard, the FMS flight plan can typically hold up to 200 waypoints/legs. *Note: While 200 is the expected legacy exam answer, modern FMS standards (Thales/Honeywell) can handle significantly more waypoints.*",
  },
  {
    id: 536,
    theme: "Auto Flight / FMS",
    question: "What unit is used for short-term interface?",
    options: ["ADIRU control panel", "EFIS control panel", "FCU", "MCDU"],
    correct: 2,
    explanation:
      "FCOM DSC-22-10-40-20: The Flight Control Unit (FCU) is the primary interface for short-term/tactical guidance commands.",
  },
  {
    id: 537,
    theme: "Auto Flight / FMS",
    question: "How is a temporary Flight Plan indicated on the ND?",
    options: [
      "A dotted magenta line",
      "A solid amber line",
      "A solid blue line",
      "A dotted yellow line",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-31-45: A temporary flight plan modification is drawn on the Navigation Display as a dashed/dotted yellow line.",
  },
  {
    id: 538,
    theme: "Auto Flight / FMS",
    question: "What color indicates a secondary flight plan in PLAN mode?",
    options: ["Green", "White", "Amber", "Blue"],
    correct: 1,
    explanation:
      "FCOM DSC-31-45: The secondary flight plan route is depicted with a solid white line on the ND.",
  },
  {
    id: 539,
    theme: "Auto Flight / FMS",
    question:
      "If AP 2 is engaged, which FMGC is master and controls the A/THR?",
    options: [
      "A/THR never use information from the FMGS",
      "Both FMGC always work in parallel and therefore share this task",
      "No. 2",
      "No. 1",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-22-10-30: The FMGC corresponding to the engaged autopilot (AP2 = FMGC2) assumes the Master role and drives the autothrust.",
  },
  {
    id: 540,
    theme: "Navigation",
    question:
      "With the Predictive Windshear (PWS) switch in AUTO, below what height is data displayed on the ND?",
    options: ["1500 feet RA", "2000 feet RA", "2300 feet RA", "2500 feet RA"],
    correct: 0,
    explanation:
      "FCOM DSC-34-SURV-30-20: Predictive windshear icons and data are displayed on the ND when the aircraft is below 1500 ft AGL. *Note: 1500 ft is the expected legacy exam answer. In reality, modern PWS scans below 2300 ft and generates actual alerts below 1200 ft.*",
  },
  {
    id: 541,
    theme: "Navigation",
    question:
      "If ALL / N is selected on the ATC/TCAS panel, what is the altitude range of intruders that are displayed?",
    options: [
      "2700 feet above and 9900 feet below the aircraft",
      "9900 feet above and 9900 feet below the aircraft",
      "9900 feet above and 2700 feet below the aircraft",
      "2700 feet above and 2700 feet below the aircraft",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-34-SURV-10-20: The ALL (Normal) mode displays traffic from 2700 ft below to 2700 ft above the aircraft's altitude.",
  },
  {
    id: 542,
    theme: "Navigation",
    question: "Below what height do the FWC's generate height announcements?",
    options: ["2500 feet", "1500 feet", "3000 feet", "2000 feet"],
    correct: 0,
    explanation:
      "FCOM DSC-31-10: The Flight Warning Computers trigger synthetic voice altitude callouts starting from 2500 ft radio altitude.",
  },
  {
    id: 543,
    theme: "Navigation",
    question:
      "How long must the RESET p/b on the ISIS be pressed to reset the attitude indication?",
    options: [
      "For at least 1 second",
      "Momentarily",
      "For at least 5 seconds",
      "For at least 2 seconds",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-34-NAV-20: The ISIS reset pushbutton must be held for at least 2 seconds to initiate an attitude reset.",
  },
  {
    id: 544,
    theme: "Navigation",
    question:
      "How many GPS receivers are connected to the IR part of the ADIRUs?",
    options: [
      "One",
      "Three independent receivers",
      "Two independent receivers",
      "Two integrated receivers",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-34-NAV-10-10: Two independent Multimode Receivers (MMR) provide GPS data to the three ADIRUs.",
  },
  {
    id: 545,
    theme: "APU",
    question: "Which fuel feed line supplies the APU?",
    options: [
      "The Right fuel feed line supplies the APU",
      "The Left fuel feed line supplies the APU",
      "The Right or the left fuel feed line supply the APU",
      "The APU fuel feed line from the APU fuel tank supplies the APU",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-28-10-70: The APU draws its fuel directly from the left engine fuel feed line.",
  },
  {
    id: 546,
    theme: "APU",
    question: "What causes amber XX in the BLEED indication on APU SD page?",
    options: [
      "ADIRS 1 or 2 are not available or selected OFF, or the data from the ECB are invalid or not transmitted",
      "Bleed air pressure is below 25 PSI",
      "APU bleed is not selected",
      "Bleed air overheat",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-31-20: Amber crosses (XX) indicate a loss of valid data from the ADIRS or the Electronic Control Box (ECB).",
  },
  {
    id: 547,
    theme: "APU",
    question: "What is the ECB in the APU system?",
    options: [
      "The Electronic Control Box (ECB) is used to control the cabin pressure in case of emergency",
      "The Electronic Control Box (ECB) is the bleed air temperature controller for the APU",
      "The Electronic Control Box (ECB) is a backup device if electrical power is lost",
      "The Electronic Control Box (ECB) is a full-authority digital electronic controller",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-49-20: The ECB is the dedicated digital controller managing all APU operations (start, bleed, shutdown).",
  },
  {
    id: 548,
    theme: "Systems - Air/Press",
    question: "What controls and monitors the Pneumatic system?",
    options: [
      "Three Bleed Monitoring Computers",
      "Two Bleed Monitoring Computers",
      "One Bleed Monitoring Computer",
      "Two Bleed Valve Computers",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-36-10-60: Two Bleed Monitoring Computers (BMC 1 and 2) control and monitor the pneumatic bleed system.",
  },
  {
    id: 549,
    theme: "Systems - Air/Press",
    question:
      "What happens when the pressure and temperature are not sufficient to supply the corresponding engine bleed valve?",
    options: [
      "The HP valve opens and the IP stage remains in the same configuration",
      "The HP valve opens and the IP stage closes",
      "The LP valve closes",
      "The over-pressure valve closes",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-36-10-20: When IP pressure is too low, the HP valve opens to supply adequate pressure. *Note: The bank's answer says the IP stage 'remains in the same configuration'. Technically, this is flawed: when the HP valve opens, the IP check valve is forced closed by the reverse high pressure to protect the IP stage.*",
  },
  {
    id: 550,
    theme: "Systems - Air/Press",
    question:
      "The air bleed system supplies the aircraft with high pressure air, and uses it for:",
    options: [
      "Engine Starting and Water System Pressurisation only",
      "Air Conditioning and Water System Pressurisation only",
      "Air conditioning and Engine Starting only",
      "Air conditioning, Engine Starting, Water System Pressurisation, Wing anti-icing and Hydraulic reservoir pressurisation",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-36-10-10: Pneumatic air feeds AC, engine start, wing anti-ice, water pressurization, and hydraulic reservoir pressurization.",
  },
  {
    id: 551,
    theme: "Systems - Air/Press",
    question: "The Pressurization system is normally controlled in what way?",
    options: [
      "Fully automatic",
      "Manually controlled by the flight crew",
      "Semi-automatic",
      "Manually controlled by the cabin crew",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-21-20-10: Normal pressurization control is completely automatic via the two Cabin Pressure Controllers (CPC).",
  },
  {
    id: 552,
    theme: "Systems - Air/Press",
    question:
      "How are the Pack Flow Control valves controlled during engine start?",
    options: [
      "Is not affected during engine start",
      "Automatic if APU bleed air is used",
      "Must manually be set to OFF",
      "Close automatically",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-21-10-30: To direct all available pneumatic pressure to the starter motor, the pack flow control valves close automatically.",
  },
  {
    id: 553,
    theme: "Systems - Air/Press",
    question: "How many air condition zones do we have on an Airbus A320?",
    options: [
      "One for the whole aircraft",
      "2, cockpit and cabin",
      "3, cockpit, FWD and AFT zone",
      "2, one for upper deck and one for the lower deck",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-21-10-10: The aircraft is divided into 3 independently controlled temperature zones: Cockpit, FWD cabin, and AFT cabin.",
  },
  {
    id: 554,
    theme: "Systems - Air/Press",
    question: "When does the hot air valve close automatically?",
    options: [
      "When the temperature in the cockpit is okay",
      "When a duct overheat or absence of pneumatic pressure exists",
      "When the trim air valves operates",
      "Below FL180",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-21-10-40: The hot air pressure regulating valve closes automatically if a duct overheat is detected or if upstream pressure is lost.",
  },
  {
    id: 555,
    theme: "Hydraulics",
    question: "When does the Blue electrical pump operate automatically?",
    options: [
      "If AC power is available and in flight, or on the ground, if one engine is running",
      "When the Slats extend",
      "As soon as the pressure in the Blue system is below 2000 PSI",
      "When the Emergency Generator commands it to on",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-29-10-20: In AUTO, the blue electric pump starts automatically if AC power is available and at least one engine is operating.",
  },
  {
    id: 556,
    theme: "Hydraulics",
    question:
      "Which hydraulic systems have a pump that is driven by an engine?",
    options: ["Green and yellow", "Blue only", "Green only", "Yellow only"],
    correct: 0,
    explanation:
      "FCOM DSC-29-10-10: The Green system is powered by Engine 1, and the Yellow system is powered by Engine 2.",
  },
  {
    id: 557,
    theme: "Hydraulics",
    question: "What is the normal operating hydraulic pressure?",
    options: [
      "2900 PSI from all pumps, including RAT",
      "3000 PSI (2500 PSI when powered by the RAT)",
      "2500 PSI from all pumps, including RAT",
      "3000 PSI from all pumps, including RAT",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-29-10-20: Normal system pressure is 3000 PSI. If the system is powered by the RAT, the pressure drops slightly to 2500 PSI.",
  },
  {
    id: 558,
    theme: "Hydraulics",
    question:
      "Can the PTU operate and pressurize the Green system without an engine running?",
    options: [
      "Yes, by selecting the YELLOW ELEC pump to ON, PTU switch to AUTO and differential pressure >500 PSI",
      "Yes, by selecting the BLUE ELEC pump to ON and PTU switch to AUTO",
      "No",
      "Only for cargo door operation",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-29-10-20: Activating the Yellow Electric Pump creates a pressure differential that automatically engages the PTU to pressurize the Green system.",
  },
  {
    id: 559,
    theme: "Flight Controls",
    question: "Which Flight Control Computer normally operates the ailerons?",
    options: ["SEC 3", "SEC 1", "ELAC 2", "ELAC 1"],
    correct: 3,
    explanation:
      "FCOM DSC-27-10-20: ELAC 1 is the primary computer responsible for operating the ailerons (with ELAC 2 as backup).",
  },
  {
    id: 560,
    theme: "Flight Controls",
    question: "Is mechanical control of the THS always available?",
    options: [
      "Yes, if both green and yellow hydraulic systems are functioning",
      "Yes always, regardless of the status of the hydraulic systems",
      "Yes, if either the green or yellow hydraulic systems are functioning",
      "No, only on ground with both engines running",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-27-20-20: Mechanical control requires hydraulic power to actuate the stabilizer (provided by either the Green or Yellow system).",
  },
  {
    id: 561,
    theme: "Flight Controls",
    question:
      "Side Stick control orders are sent to which flight control computer?",
    options: ["ELAC only", "SEC only", "ELAC and SEC", "FAC only"],
    correct: 2,
    explanation:
      "FCOM DSC-27-10-20: Both ELACs (pitch/roll) and SECs (roll/spoilers) receive and process sidestick inputs.",
  },
  {
    id: 562,
    theme: "Flight Controls",
    question:
      "In normal law, what happens if the pilot holds full lateral side stick deflection?",
    options: [
      "If the pilot releases the side stick at a bank angle greater than 33°, the bank angle automatically reduces to 33°",
      "The bank angle goes to 67° and no further",
      "The bank angle goes to 60° and no further",
      "The bank angle goes to 33° and no further",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-27-20-10: In Normal Law, hard envelope protections physically limit the maximum achievable bank angle to 67°.",
  },
  {
    id: 563,
    theme: "Water and Waste",
    question: "Where will you find the water and waste control panel?",
    options: [
      "On the forward attendant control panel",
      "On the midship attendant control panel",
      "On the aft attendant control panel",
      "In the forward lavatory",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-38-10: The panel allowing the crew to check water/waste levels is situated on the FWD Attendant Panel.",
  },
  {
    id: 564,
    theme: "Water and Waste",
    question:
      "On the ground and below 16,000 ft, how is the necessary differential pressure produced to force waste from the toilet bowls into the storage tank?",
    options: [
      "You do not need differential pressure, at low altitudes and on ground, waste will go by gravity",
      "A vacuum generator produces the necessary pressure differential",
      "You need to have the APU running and vaccum is produced by the surge valve",
      "A hand pump besides the toilet bowl",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-38-10: Below 16,000 ft, cabin differential pressure is insufficient, so a dedicated vacuum generator activates to move the waste.",
  },
  {
    id: 565,
    theme: "Aircraft General",
    question: "Which statement is correct regarding the STROBE switch in AUTO?",
    options: [
      "The strobe lights come on automatically when both engines are started",
      "The strobe lights come on automatically when aircraft lines up on the runway",
      "The strobe lights come on automatically when the nose landing gear is decompressed",
      "The strobe lights come on automatically when the main gear strut is not compressed",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-33-10-30: In AUTO, strobes turn on automatically upon liftoff (when main gear shock absorbers are uncompressed).",
  },
  {
    id: 566,
    theme: "Aircraft General",
    question:
      "How is the NO SMOKING sign controlled when the switch is in AUTO position?",
    options: [
      "NO SMOKING light will illuminate when the cargo smoke detection is active",
      "NO SMOKING light will illuminate only when the flaps/slats are extended to CONF 3 or FULL",
      "NO SMOKING light will illuminate when either the landing gear is extended, or flaps/slats are extended (position 1,2,3 or FULL)",
      "NO SMOKING light will illuminate when cabin is ready for landing",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-33-20-20: The AUTO position triggers the signs based on landing gear extension or flap/slat deployment.",
  },
  {
    id: 567,
    theme: "Aircraft General",
    question:
      "The NAV & LOGO switch has two positions, 1 and 2. What is the difference between the two positions?",
    options: [
      "Position 2 is for emergency use only",
      "Position 1 turns on the logo lights and the first set of navigation lights, position 2 turns on the logo lights and the second set of navigation lights",
      "Position 1 is for emergency use only",
      "Brightness intensity where 1 is brightest",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-33-10-20: The aircraft is equipped with dual redundant navigation bulbs; the switch selects between the primary (1) and backup (2) set.",
  },
  {
    id: 568,
    theme: "Aircraft General",
    question: "How many passenger doors are fitted on an A320?",
    options: ["2", "3", "4", "1"],
    correct: 2,
    explanation:
      "FCOM DSC-52-10-10: The standard A320 has 4 main passenger entry/service doors (two forward, two aft).",
  },
  {
    id: 569,
    theme: "Aircraft General",
    question:
      'What is the purpose of the white "SLIDE ARMED" light installed on the passenger doors?',
    options: [
      "Illuminates when the slides on all four doors are armed",
      "Always on when the slide is armed",
      "Illuminates if the control handle is operated when the slide is armed",
      "Indicates low pressure in the slide bottle",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-52-10-20: It warns the operator that lifting the door handle will trigger the pneumatic deployment of the escape slide.",
  },
  {
    id: 570,
    theme: "Aircraft General",
    question: "What is true regarding the cockpit sliding windows?",
    options: [
      "The sliding windows are for ventilation only",
      "Each escape rope is long enough to reach the ground from any window",
      "The cockpit windows can be opened from both inside and outside",
      "Each escape rope can only be used on the side where they are installed",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-52-10-30: A small compartment, located above each window, contains an escape rope that is long enough to reach the ground when lowered through either sliding window. The cockpit windows can only be opened from inside.",
  },
  {
    id: 571,
    theme: "Communications",
    question: "Which VHF transceiver functions in EMER ELEC CONFIG?",
    options: ["2", "None", "3", "1"],
    correct: 3,
    explanation:
      "FCOM DSC-24-10-30: In Emergency Electrical Configuration, only VHF 1 (and RMP 1) remains powered by the Essential network.",
  },
  {
    id: 572,
    theme: "Communications",
    question: "What does the SEL indicator on the RMP indicate?",
    options: [
      "Only selected frequencies are available",
      "Frequency selection completed",
      "A SELCAL has been received",
      "Comes on when a transceiver normally associated with one RMP is tuned by another",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-23-10-20: The white SEL light illuminates to indicate cross-tuning (e.g., Captain tuning VHF 2 via RMP 1).",
  },
  {
    id: 573,
    theme: "Communications",
    question:
      "What Interphone system is used for the ground mechanic jack on the external power panel?",
    options: [
      "Service interphone",
      "Ground service interphone",
      "Flight crew interphone",
      "Cabin interphone",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-23-20-10: The external ground jack routes directly into the Flight Crew Interphone system for pushback communication.",
  },
  {
    id: 574,
    theme: "Communications",
    question: "Which panel is used to select a VHF transceiver?",
    options: ["RMP", "AMU", "ACP", "ACARS"],
    correct: 2,
    explanation:
      "FCOM DSC-23-10-20: The Radio Management Panel (RMP) is used to select and tune frequencies. *Note: The question is highly ambiguous. You use the RMP to select a radio for tuning, but you use the Audio Control Panel (ACP) to select a radio for actual transmission/reception.*",
  },
  {
    id: 575,
    theme: "Fire Protection",
    question:
      "How many smoke detectors, in total, are installed in FWD and AFT cargo compartment?",
    options: ["12", "9", "6", "3"],
    correct: 2,
    explanation:
      "FCOM DSC-26-40-10: A standard configuration has 2 detectors in the FWD cargo and 4 in the AFT cargo, totaling 6 detectors.",
  },
  {
    id: 576,
    theme: "Fire Protection",
    question: "Can an engine fire be detected if one loop is faulty?",
    options: [
      "Yes, but only if the aircraft is airborne",
      "No",
      "Yes",
      "Yes, if the operating loop is manually selected",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-26-20-10: The system reverts to single-loop operation, meaning if the good loop detects a fire, it will trigger the warning.",
  },
  {
    id: 577,
    theme: "Fire Protection",
    question:
      "How many engine fire extinguisher bottles are totally installed on an Airbus 320?",
    options: ["5", "6", "2", "4"],
    correct: 3,
    explanation:
      "FCOM DSC-26-20-10: Each engine has two dedicated extinguisher bottles, making a total of 4 for the engines.",
  },
  {
    id: 578,
    theme: "Fire Protection",
    question:
      "If the system detects an APU fire while the aircraft is on the ground, what happens?",
    options: [
      "Nothing",
      "APU shutdown is automatic after a 20 seconds time delay, discharge of extinguishing agent is manual",
      "APU shutdown is automatic, discharge of extinguishing agent is manual",
      "The system shuts down the APU automatically and discharges extinguishing agent",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-26-50-10: On the ground, an APU fire triggers an automatic shutdown sequence and automatically fires the extinguisher bottle.",
  },
  {
    id: 579,
    theme: "Fire Protection",
    question: 'On the ENG FIRE PANEL, what does amber "DISCH" indication mean?',
    options: [
      "Discharge inhibit due to a bad squib",
      "Its associated fire extinguisher bottle has lost pressure",
      "Discharge inhibit due to FOD in the plumbing",
      "Discharge in progress",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-26-20-20: Amber DISCH confirms that the bottle has effectively discharged and is no longer pressurized.",
  },
  {
    id: 580,
    theme: "Oxygen",
    question:
      "When the masks in the cabin are released, the passenger address system automatically broadcasts pre-recorded instructions for their use",
    options: [
      "FALSE",
      "True, but only if manually released",
      "True, but only if automatically released",
      "TRUE",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-35-20-10: Deployment of masks triggers a pre-recorded emergency PA instructing passengers on how to use them.",
  },
  {
    id: 581,
    theme: "Oxygen",
    question:
      "On the overhead maintenance panel what is the function of the TMR RESET pushbutton?",
    options: [
      "The maintenance crew uses this pushbutton to check the control circuit, before each flight",
      "The flight timer for the passenger oxygen needs to be reset after every flight, this pushbutton is the control for this",
      "The maintenance crew uses this pushbutton to test the system, it simulates a depressurized cabin",
      "The maintenance crew uses this pushbutton to reset the control circuit, after the system has operated",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-35-20-10: Once deployed, the oxygen system doors remain open and circuits latched. This button resets the control logic.",
  },
  {
    id: 582,
    theme: "Oxygen",
    question:
      "HI ALT SET memo id displayed on the ECAM, what does it indicate?",
    options: [
      "It indicates that the crew set the HI ALT LANDING pushbutton to ON and in this case the masks will not drop automatically but have to be manually released by the crew",
      "It indicates that the cabin crew have adjusted the mask realease and in this case they will release at 18.000 ft",
      "It indicates that the cabin altitude is increased by 2000 ft and subsequently the mask release is also increased by 2000 ft",
      "It indicates that the crew set the HI ALT LANDING pushbutton to ON and in this case the masks drop if the cabin pressure exceeds 16.000 ft",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-35-20-20: Used for high elevation airports to prevent masks from dropping at 14,000 ft, raising the threshold to 16,000 ft.",
  },
  {
    id: 583,
    theme: "Powerplant",
    question:
      "Some of the fuel flowing out of the Hydromechanical Unit (HMU) cools the oil systems of the IDG and:",
    options: [
      "It is unusuable for the rest of the flight",
      "It is vented overboard",
      "Then returns to the tank or fuel pump unit",
      "Stops flowing when fuel temperature in the wing tank in flight is below 52.5°C",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-70-40-10: Recirculated fuel acts as a coolant for the IDG and is then routed back to the fuel tanks/pumps.",
  },
  {
    id: 584,
    theme: "Powerplant",
    question:
      "When should the ENG MODE selector be set to NORM during a Manual Engine Start?",
    options: [
      "When N2 > 50%",
      "When N1 reaches 22%",
      "When N1 reaches 50%",
      "When N2 reaches 22%",
    ],
    correct: 0,
    explanation:
      "FCOM PRO-NOR-SRP-01-15: At 50% N2, the start valve closes. The mode selector is then returned to NORM to finish the sequence.",
  },
  {
    id: 585,
    theme: "Powerplant",
    question: "Regarding FADEC, which statement is true:",
    options: [
      "Each FADEC has only 1 channel",
      "Each FADEC has 2 channels, one of which is active and the other is in standby",
      "Each FADEC has 2 channels working simultaneously",
      "Each FADEC has 2 channels that alternate after each engine start",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-70-20: The FADEC is dual-channel. One channel actively controls the engine while the other acts as an active standby.",
  },
  {
    id: 586,
    theme: "Powerplant",
    question: "Single engine, what is the maximum time limit in TOGA power?",
    options: [
      "Time limitation varies according Operator policy",
      "No limitation",
      "5 min.",
      "10 min.",
    ],
    correct: 3,
    explanation:
      "FCOM LIM-ENG: TOGA thrust is limited to 5 minutes with all engines running, or 10 minutes in the event of an engine failure.",
  },
  {
    id: 587,
    theme: "Powerplant",
    question:
      "If the ENG1 or ENG 2 MASTER switch are set to OFF, which fuel shut off valves are affected?",
    options: [
      "The LP fuel valve",
      "The LP and HP fuel valves",
      "Only the FIRE pushbutton closes the HP valve",
      "The HP fuel valve",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-70-20: Switching the Engine Master to OFF electrically closes both the Low Pressure (LP) and High Pressure (HP) fuel valves.",
  },
  {
    id: 588,
    theme: "Powerplant",
    question:
      "If the ENG MODE SEL is selected to IGN/START and the MAN START pushbutton is pressed, the START valve opens:",
    options: [
      "Yes, but in flight only",
      "No, the ENG MODE SEL must be in NORM",
      "No, external AC power is required",
      "Yes, according to FCOM proceedures",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-70-80: Pressing the MAN START button physically opens the start valve (provided pneumatic pressure is available), initiating the crank.",
  },
  {
    id: 589,
    theme: "Ice & Rain Protection",
    question: "Is it possible to select Wing-Anti-Ice on ground?",
    options: [
      "No",
      "Only if an Ice Detection System is installed",
      "Yes, the wing anti-icing control valves open for 30 s only (test sequence)",
      "Yes due to the overheat detection system",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-30-20-10: On the ground, selecting Wing Anti-Ice triggers a 30-second self-test where valves open before closing automatically.",
  },
  {
    id: 590,
    theme: "Ice & Rain Protection",
    question: "Which surfaces are protected with hot air?",
    options: [
      "Sensors, pitot probes and static ports",
      "Flight compartment windows",
      "Three outboard leading-edge slats of each wing and engine air intakes",
      "Waste-water drain mast",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-30-10-10: The pneumatic system routes hot bleed air to the engine nacelles and the 3 outboard slats on each wing.",
  },
  {
    id: 591,
    theme: "Ice & Rain Protection",
    question: "How many sections of the Slat system are anti-iced?",
    options: [
      "All sections",
      "1 (section 5)",
      "2 (section 4-5)",
      "3 (section 3-4-5)",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-30-20-10: Only the three outermost slats (slats 3, 4, and 5) receive hot air for anti-icing.",
  },
  {
    id: 592,
    theme: "Ice & Rain Protection",
    question:
      "How many PHC's (Probe Heat Computers) are installed on an Airbus 320?",
    options: ["2", "4", "6", "3"],
    correct: 3,
    explanation:
      "FCOM DSC-30-30-10: There are 3 PHCs managing the heating of the Captain, First Officer, and Standby probes/sensors.",
  },
  {
    id: 593,
    theme: "Fuel",
    question:
      "When will fuel automatically transfer from the outer to the inner wing tanks?",
    options: [
      "When the any inner tank fuel reaches 550 kg",
      "When the any inner tank fuel reaches 700 kg",
      "When the any inner tank fuel reaches 800 kg",
      "When the any inner tank fuel reaches 750 kg",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-28-10-80: The transfer valves latch open when the fuel level in an inner tank drops below approx 750 kg.",
  },
  {
    id: 594,
    theme: "Fuel",
    question: "What is the purpose of the Fuel Recirculation System?",
    options: [
      "To mix old fuel with new",
      "To cool the fuel pumps",
      "To remove water from the fuel tanks",
      "This operation ensures the IDG cooling",
    ],
    correct: 3,
    explanation:
      "FCOM DSC-28-10-30: By routing fuel back to the tanks after it passes the IDG heat exchanger, the system maintains IDG cooling efficiency.",
  },
  {
    id: 595,
    theme: "Fuel",
    question: "Where is the external refueling panel located?",
    options: [
      "On the side of the fuselage beneath the AFT cargo door",
      "On the side of the fuselage beneath the FWD cargo door",
      "On the side of the fuselage beneath the right wing",
      "On the side of the fuselage beneath the left wing",
    ],
    correct: 2,
    explanation:
      "FCOM DSC-28-20: The external refuel control panel is situated under the right wing/fuselage fairing.",
  },
  {
    id: 596,
    theme: "Fuel",
    question: "When is the LO LVL warning displayed on the ECAM?",
    options: [
      "When the fuel quantity in one wing tank goes below 700 kg",
      "When the fuel quantity in one wing tank goes below 750 kg",
      "When the fuel quantity in one wing tank goes below 200 kg",
      "When the fuel quantity in one wing tank goes below 550 kg",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-28-10-80: ECAM LO LVL triggers precisely when sensors detect less than 750 kg remaining in an inner tank.",
  },
  {
    id: 597,
    theme: "Fuel",
    question:
      "Will the center pumps, if commanded ON, operate if slats are extended?",
    options: [
      "Yes, if no engine is started and CTR TK MODE SEL in AUTO",
      "Yes, if CTR TK MODE SEL is set to MAN",
      "No never",
      "Yes, if more than 2 minutes has elapsed after engine start and CTR TK MODE SEL in AUTO",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-28-10-30: In AUTO mode, center pumps are inhibited with slats extended. Manual mode (MAN) overrides this logic.",
  },
  {
    id: 598,
    theme: "Landing Gear",
    question:
      "What would be the consequence if the pilots'respective handwheels were turned in the same direction but a different rates?",
    options: [
      "Orders are added algebraically",
      "There is only one handwheel on an Airbus A320",
      "The first input becomes master",
      "The aircraft will follow the captain's handwheel orders",
    ],
    correct: 0,
    explanation:
      "FCOM DSC-32-10-30: Similar to the sidesticks, inputs from both the Captain and F/O steering tillers are summed algebraically.",
  },
  {
    id: 599,
    theme: "Landing Gear",
    question:
      "What is the maximum deflection of the nose wheel if controlled by the rudder pedals?",
    options: ["3 deg.", "12 deg.", "6 deg", "75 deg."],
    correct: 2,
    explanation:
      "FCOM DSC-32-10-30: Steering authority via the rudder pedals is mechanically limited to +/- 6 degrees for high-speed tracking.",
  },
  {
    id: 600,
    theme: "Landing Gear",
    question: "Wicht hydraulic system is used for gear retraction/extension?",
    options: ["Yellow", "Green", "Green and Yellow as a backup", "Blue"],
    correct: 1,
    explanation:
      "FCOM DSC-32-10-20: The primary actuation of the landing gear sequence relies exclusively on the Green hydraulic system.",
  },
  {
    id: 601,
    theme: "Landing Gear",
    question:
      "What is the purpose of the red DOWN arrow located next to the landing gear lever?",
    options: [
      "To indicate that the LDG Gear is in transit",
      "To indicate that the landing gear is not locked down when the aircraft is in the landing configuration",
      "To indicate that the landing gear shortening mechanism has failed",
      "To indicate a disagreement between handle and gear position",
    ],
    correct: 1,
    explanation:
      "FCOM DSC-32-10-40: The red arrow illuminates to warn pilots if the gear is not locked down when conditions suggest it should be (e.g. low altitude/flaps).",
  },
  {
    id: 602,
    theme: "Landing Gear",
    question:
      "Which computer controls the Landing Gear indicator panel lights?",
    options: ["LGCIU 1 and 2", "LGCIU 2 only", "DMC 3", "LGCIU 1 only"],
    correct: 3,
    explanation:
      "FCOM DSC-32-10-20: Unlike the ECAM wheel page which uses both LGCIUs, the hardwired indicator panel receives signals strictly from LGCIU 1.",
  },
];
