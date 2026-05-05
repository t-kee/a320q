const db = [
  {
    id: 1,
    theme: "Limitations",
    question: "What is the maximum wind speed for passenger door operation?",
    options: ["75 kt", "65 kt", "60 kt", "55 kt"],
    correct: 1,
    explanation:
      "FCOM: Maximum wind speed to operate passenger doors is 65 knots.",
  },
  {
    id: 2,
    theme: "Limitations",
    question: "What is the runway slope limitation for the A320?",
    options: ["± 3%", "± 5%", "± 2%", "± 1%"],
    correct: 2,
    explanation: "FCOM: The maximum runway slope is ± 2%.",
  },
  {
    id: 3,
    theme: "Limitations",
    question: "What is the maximum operating speed for the windshield wipers?",
    options: ["200 kt", "180 kt", "230 kt", "215 kt"],
    correct: 2,
    explanation: "FCOM: Wiper operation is limited to 230 kt.",
  },
  {
    id: 4,
    theme: "Limitations",
    question:
      "What is the maximum speed at which the landing gear may be extended (VLO extension)?",
    options: ["200 kt", "250 kt", "220 kt", "280 kt"],
    correct: 1,
    explanation: "FCOM: VLO extension is 250 kt (VLE is 280 kt).",
  },
  {
    id: 5,
    theme: "Limitations",
    question: "What is the maximum speed (VFE) with CONF FULL for the A320?",
    options: ["185 kt", "177 kt", "175 kt", "195 kt"],
    correct: 1,
    explanation: "FCOM: VFE in CONF FULL is 177 kt.",
  },
  {
    id: 6,
    theme: "Limitations",
    question:
      "What is the maximum indicated airspeed for opening a cockpit window in flight?",
    options: ["200 kt", "250 kt", "220 kt", "195 kt"],
    correct: 0,
    explanation: "FCOM: The maximum speed to open a cockpit window is 200 kt.",
  },
  {
    id: 7,
    theme: "Limitations",
    question: "Maximum reverse thrust should not be used below what airspeed?",
    options: ["60 kt", "70 kt", "100 kt", "80 kt"],
    correct: 1,
    explanation:
      "OM-B Section 2.3.19 Manual Landing requires both reversers levers to be set to IDLE at 70 kt. FCOM: To prevent FOD ingestion and compressor stall, reduce to reverse idle by 70 kt.",
  },
  {
    id: 8,
    theme: "Limitations",
    question:
      "What are the minimum and maximum cabin differential pressure limits?",
    options: [
      "-0.8 to 9.0 PSI",
      "-0.5 to 9.1 PSI",
      "0 to 9.0 PSI",
      "-0.4 to 9.0 PSI",
    ],
    correct: 3,
    explanation: "FCOM: Differential pressure limits are -0.4 PSI to +9.0 PSI.",
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
      "FCOM: Clean configuration is -1g to +2.5g. Slats/flaps extended is 0g to +2.0g.",
  },
  {
    id: 10,
    theme: "Limitations",
    question: "What is the maximum tyre speed?",
    options: ["195 kt", "200 kt", "210 kt", "185 kt"],
    correct: 0,
    explanation: "FCOM: The maximum tyre ground speed is 195 kt.",
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
      "FCOM: Never use LP ground conditioned air simultaneously with the packs to prevent valve damage.",
  },
  {
    id: 12,
    theme: "Performance / EFB",
    question: "What is the screen height for a wet runway?",
    options: ["10 ft", "25 ft", "15 ft", "30 ft"],
    correct: 2,
    explanation:
      "FCOM: The regulatory screen height reduces to 15 ft on a wet runway.",
  },
  {
    id: 13,
    theme: "Performance / EFB",
    question: "What is the screen height for a dry runway?",
    options: ["30 ft", "10 ft", "15 ft", "35 ft"],
    correct: 3,
    explanation: "FCOM: The standard screen height for a dry runway is 35 ft.",
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
      "EFB: Amber text alerts that the computed factored landing distance is greater than the available runway length (LDA).",
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
      "FCOM: A runway is contaminated when covered by more than 3 mm of standing water, slush, or snow.",
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
      "FCOM: A quick adjustment for a 1 hPa drop is to reduce the Flex Temp by 1°C.",
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
      "FCOM: Unexpected use of engine bleed requires a full recalculation as it significantly impacts performance.",
  },
  {
    id: 18,
    theme: "Performance / EFB",
    question:
      "What is the correct runway condition in EFB PERF for takeoff if the runway is damp?",
    options: ["Wet", "Dry", "Neither dry nor wet"],
    correct: 1,
    explanation:
      "Regulations: A damp runway (change of color but no standing water) is considered DRY for takeoff performance calculations.",
  },
  {
    id: 19,
    theme: "Performance / EFB",
    question:
      "For an in-flight landing calculation, what is the maximum crosswind with compacted snow at -10°C?",
    options: ["10 kts", "20 kts", "15 kts", "29 kts"],
    correct: 3,
    explanation:
      "RCAM: Compacted snow at -10°C correlates to RCC 4. The demonstrated max crosswind is 29 knots.",
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
      "EFB: Found on the final computations page or under the 'MORE' menu.",
  },
  {
    id: 21,
    theme: "Performance / EFB",
    question:
      "Engine anti-ice must be included in takeoff performance calculation if planned to be used below what altitude?",
    options: ["THR RED", "EOACC", "MSA", "ACC"],
    correct: 1,
    explanation:
      "FCOM: If anti-ice is required below the Engine Out Acceleration Altitude (EOACC), it must be factored into takeoff performance.",
  },
  {
    id: 22,
    theme: "Performance / EFB",
    question:
      "During a flex takeoff, the thrust reduction must not exceed _____ of flat-rated thrust.",
    options: ["25%", "20%", "No restrictions"],
    correct: 0,
    explanation:
      "FCOM: Flex thrust cannot be reduced by more than 25% of the maximum authorized thrust.",
  },
  {
    id: 23,
    theme: "Performance / EFB",
    question:
      "What is the standard operating procedure for the EOSID stop altitude?",
    options: ["SID stop altitude", "No procedure specified", "MHA", "MSA"],
    correct: 1,
    explanation:
      "SOP: There is no universal standard stop altitude for an EOSID; it is defined by company procedures.",
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
      "OM-B Section 2.3.4.9 Preliminary Performance Determination states that when the aircraft is dispatched under MEL/CDL deferred items which have an associated performance penalty, these shall be selected in FS+ so that the performance penalties are accounted for in the performance computation. EFB: A dedicated section (ACFT STS) allows the crew to input MEL/CDL performance penalties.",
  },
  {
    id: 25,
    theme: "Performance / EFB",
    question:
      "For sample aircraft G-EZGY, find the minimum control speed at landing – assume sea level, ISA conditions:",
    options: ["113 kt", "116 kt", "110 kt", "114 kt"],
    correct: 0,
    explanation: "EFB: Based on the specific VMCL data for this aircraft.",
  },
  {
    id: 26,
    theme: "Performance / EFB",
    question:
      "If a runway is wet and NOTAMed 'slippery when wet', what is the correct EFB to PERF input for RWY COND?",
    options: ['WATER 1/4"', "DRY", "ICY", "WET"],
    correct: 0,
    explanation:
      "SOP: The runway condition is artificially downgraded in the EFB for safety margins.",
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
      "EFB: The 'MODIFY RWY' function is used to manually shorten the TORA/TODA/LDA.",
  },
  {
    id: 28,
    theme: "Performance / EFB",
    question:
      "For an in-flight landing calculation, what is the appropriate EFB input for RWY COND with 5 mm of water on the runway?",
    options: ["3-Medium", "2-Medium to Poor", "5-Good", "6-Dry"],
    correct: 1,
    explanation:
      "RCAM: More than 3 mm of standing water corresponds to a Runway Condition Code (RWY CC) of 2.",
  },
  {
    id: 29,
    theme: "Performance / EFB",
    question:
      "For an in-flight landing calculation, what is the appropriate EFB input for RWY COND with 'Wet' runway?",
    options: ["6-Dry", "3-Medium", "4-Good to Medium", "5-Good"],
    correct: 3,
    explanation:
      "RCAM: A standard 'Wet' runway (less than 3 mm of water) has an RCC of 5.",
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
      "EFB: Optimum configuration iteratively tests flap settings to grant the highest Maximum Takeoff Weight (MTOW).",
  },
  {
    id: 31,
    theme: "Performance / EFB",
    question: "What is the TREF value for an Airbus A320-214?",
    options: ["ISA+29", "ISA", "ISA+15", "ISA+25"],
    correct: 0,
    explanation:
      "FCOM: For the CFM56-5B4 engines, the flat rating temperature (TREF) is ISA+29°C.",
  },
  {
    id: 32,
    theme: "Performance / EFB",
    question:
      "Which of these is an appropriate wind entry for a METAR reading VRB03KT?",
    options: ["TVRB", "TL03", "HD03", "0/0"],
    correct: 1,
    explanation:
      "EFB: 'TL03' stands for a 3-knot tailwind. It is standard to assume the worst-case scenario for variable winds.",
  },
  {
    id: 33,
    theme: "Performance / EFB",
    question:
      "What are the standard second and final segment gross climb gradients on takeoff?",
    options: ["2.4% and 1.2%", "1% and 2.2%", "2.4% and 4.8%"],
    correct: 0,
    explanation:
      "Regulations: Twin-engine aircraft must maintain a gross climb gradient of 2.4% in the second segment and 1.2% in the final segment.",
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
      "EFB: You can input a required Go-Around gradient in a dedicated box to override the standard gradient.",
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
      "FCOM: Priority is On-side Generator > External Power > APU > Off-side Generator.",
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
      "FCOM: The EMER GEN prioritizes the AC ESS BUS and DC ESS BUS (via the ESS TR).",
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
      "FCOM: The buses will split. GEN 1 powers its on-side AC BUS 1, and the APU takes over the unpowered AC BUS 2.",
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
      "FCOM: External power has priority over the APU. To use the APU, you must deselect the EXT PWR (turn off the blue ON light).",
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
      "FCOM (Smoke Drill): It separates GEN 1 from the main network, but it continues to directly power one fuel pump in each wing.",
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
      "FCOM: Located on the forward galley ceiling, it allows maintenance to power lights and sockets without energizing the whole aircraft.",
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
      "FCOM: ACSC 1 manages the cockpit zone (and Pack 1). ACSC 2 manages the FWD and AFT cabin zones (and Pack 2).",
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
      "FCOM: Each ACSC is dual-channel. The loss of one lane triggers an automatic switchover with no functional loss.",
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
      "FCOM: It seals the aircraft by closing all valves below the waterline to slow water ingress.",
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
      "FCOM: The Mixer collects air from these multiple sources before distributing it to the zones.",
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
      "FCOM: If the FMS elevation data is lost, the crew must manually set the destination elevation using the rotary knob.",
  },
  {
    id: 46,
    theme: "Systems - Air/Press",
    question:
      "On the ground, which configuration would you expect the avionics ventilation system to select if the OAT is 3°C on an overcast day?",
    options: ["Closed", "Intermediate", "Open"],
    correct: 0,
    explanation:
      "FCOM: The system selects the 'Closed' circuit configuration on the ground if the temperature is cold (typically < 12°C) to retain heat.",
  },
  {
    id: 47,
    theme: "Auto Flight / FMS",
    question:
      "Which of the following options contains only managed AP / FD modes?",
    options: [
      "NAV, LOC, G/S, RWY, RWY TRK, GA TRK, FLA",
      "NAV, APP NAV, LOC, RWY, RWY TRK, G/S, GA TRK, FLA",
      "NAV, HDG, LOC, RWY, RWY TRK",
    ],
    correct: 1,
    explanation:
      "FCOM: Managed modes are computed by the FMGS (trajectories) or rely on ground beams (ILS).",
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
      "FCOM: Expedite Climb aims for the maximum climb gradient, pitching for Green Dot speed in OP CLB.",
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
      "FCOM: Expedite Descent aims for the maximum sink rate, pitching down for VMO/MMO in OP DES.",
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
      "FCOM: Pulling a knob gives control to the crew, engaging an OPEN (selected) vertical mode.",
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
      "FCOM: Moving the levers to the CLB detent triggers the FMS phase transition to Climb.",
  },
  {
    id: 52,
    theme: "Auto Flight / FMS",
    question: "What are the basic modes of the AP / FD?",
    options: ["Pitch and roll", "HDG and V/S", "SPD and HDG"],
    correct: 1,
    explanation:
      "FCOM: Without higher-order modes, the system reverts to the basic modes: Heading (lateral) and Vertical Speed (vertical).",
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
      "FCOM: A Cost Index of 0 gives absolute priority to fuel savings, commanding the most fuel-efficient speed regardless of time.",
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
      "FCOM: Alpha Floor protection is active from liftoff down to 100 ft Radio Altitude on the approach.",
  },
  {
    id: 55,
    theme: "Auto Flight / FMS",
    question:
      "Which system/computer provides the reactive windshear detection function?",
    options: ["The weather radar", "ADIRU 1", "FAC"],
    correct: 2,
    explanation:
      "FCOM: The Flight Augmentation Computers (FAC) calculate aircraft energy to detect reactive windshear conditions.",
  },
  {
    id: 56,
    theme: "Auto Flight / FMS",
    question: "When the ND is set to the PLAN mode, how is the map oriented?",
    options: ["To aircraft heading", "To true north", "To magnetic north"],
    correct: 1,
    explanation:
      "FCOM: In PLAN mode, the map is always oriented True North Up.",
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
      "FCOM SOP: To prevent thrust surges, use the instinctive disconnect buttons on the levers or retard them to IDLE.",
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
      "FCOM: The INIT B page is locked after engine start. Subsequent changes must be made on the FUEL PRED page.",
  },
  {
    id: 59,
    theme: "Flight Controls",
    question:
      "Which C/Bs have red caps on them to prevent them from being reset?",
    options: ["FMGEC 1 and 2", "WTB's", "ELAC 1"],
    correct: 1,
    explanation:
      "FCOM: Wing Tip Brakes (WTB) lock the surfaces in case of asymmetry. Resetting their circuit breakers in flight is prohibited.",
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
      "FCOM: Alternate Law has no flare logic. Extending the landing gear triggers a downgrade to Direct Law for the landing.",
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
      "FCOM: Each Slat Flap Control Computer (SFCC) has one dedicated channel for Slats and one for Flaps.",
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
      "FCOM: Inputs are algebraically summed (up to the maximum limit of a single stick) and a 'DUAL INPUT' audio warning is triggered.",
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
      "FCOM: The Auto-Retract system brings the flaps (but not slats) up at 210 kt to prevent exceeding the VFE of 215 kt.",
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
      "FCOM: The Blue electric pump starts automatically if AC power is available and at least one engine is running.",
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
      "FCOM: The FAULT light illuminates to protect the system if an anomaly occurs in the Green or Yellow reservoirs.",
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
      "FCOM: The FADEC assesses the windmilling speed. If N2 is high enough, it introduces fuel and ignition without using the starter.",
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
    explanation:
      "FCOM: Reverser 1 is powered by the Green system; Reverser 2 is powered by the Yellow system.",
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
    explanation:
      "FCOM: It appears in amber while in transit, and turns green when the reverser doors are fully deployed.",
  },
  {
    id: 69,
    theme: "Powerplant",
    question: "Select the correct starter limitation for the CFM engines:",
    options: [
      "A 60 minute cooling period is required following 3 consecutive start attempts",
      "A 15 minute cooling period is required following 4 failed start cycles.",
      "A 20 minute cooling period is required...",
    ],
    correct: 1,
    explanation: "FCOM LIM-ENG: Specific limitation for CFM56 starters.",
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
    correct: 2,
    explanation:
      "FCOM: The EIU acts as the interface between the aircraft systems and the FADEC, passing data like the thrust lever angle.",
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
      "FCOM: 'Inaccurate' indicates a degradation in calculation, usually due to a failed fuel probe.",
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
      "FCOM: The transfer valves open automatically when the inner tank reaches the low-level threshold (approx. 750 kg), allowing outer tank fuel to flow in.",
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
      "FCOM: Triggered when the inner tank fuel quantity on the respective side drops below 750 kg.",
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
      "FCOM: Dashes indicate a partial system failure; the crew must check the FUEL system page for detailed status.",
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
      "FCOM: The valve is normally closed, with each engine feeding from its respective wing tank.",
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
      "FCOM: Level 3 signifies an emergency requiring immediate crew action, accompanied by a Continuous Repetitive Chime (CRC) and flashing red lights.",
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
      "FCOM: Whenever the Master Caution light illuminates, a corresponding amber text message appears on the E/WD to identify the fault.",
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
      "FCOM: Pressing and holding the 'ALL' button cycles through all system pages; release it to stop on the desired one.",
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
      "FCOM: With a failed upper display, the lower screen automatically shows the E/WD. Holding a system button temporarily replaces it with the requested system page.",
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
      "FCOM: The ECAM/ND transfer switch on the switching panel allows forcing the engine/warning display onto either the Captain's or First Officer's Navigation Display.",
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
      "FCOM: Passing below the Minimum Descent Altitude (MDA) entered in the FMS causes the altitude digits to turn amber.",
  },
  {
    id: 82,
    theme: "Performance / EFB",
    question:
      "If engine anti-ice is planned to be used during takeoff, until reaching which altitude should it be considered to be ON?",
    options: ["MSA", "ACC", "EOACC", "THRRED"],
    correct: 2,
    explanation:
      "FCOM: In takeoff performance calculations, anti-ice must be accounted for if its use is required below the Engine Out Acceleration Altitude (EOACC).",
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
    explanation:
      "FCOM SOP: Configurations 2 or 3 are usually preferred or required for contaminated runways to maximize lift and clearance. CONF 1+F is not a 'must'.",
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
      "EFB Interface: The ISA deviation is typically displayed right next to the Outside Air Temperature (OAT) entry field.",
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
      "SOP: Minor Last Minute Changes (LMCs) up to a certain threshold do not require a full performance recalculation.",
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
      "OM-B Section 2.3.10.5 Flex Temperature Corrections states that if Engine A/ICE is subsequently used for take-off, you must subtract 5°C from the Flex temperature. This correction does not require an EFB T/O performance re-computation and can be entered in the MCDU by the PM during taxi.",
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
      "OM-B: Subtract 1°C/2 hPa. The procedure is to subtract the Flex penalty at the first hectopascal.",
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
      "OM-B: Subtract 1°C/2 hPa. The procedure is to subtract the Flex penalty at the first hectopascal.",
  },
  {
    id: 89,
    theme: "Performance / EFB",
    question:
      "Where is the correct place to find RWY COND EFB entry for takeoff?",
    options: ["QRH", "OM-B", "OM-A", "EFB MORE app"],
    correct: 3,
    explanation:
      "EFB Interface: Specific runway condition matrices are often found under the 'MORE' or related supplementary pages on the EFB.",
  },
  {
    id: 90,
    theme: "Performance / EFB",
    question:
      "Where is the correct place to find RWY COND EFB entry in flight for landing?",
    options: ["OM-A", "QRH", "EFB MORE app", "OM-B"],
    correct: 1,
    explanation:
      "SOP: The Quick Reference Handbook (QRH) or the in-flight performance app contains the matrices needed to evaluate runway condition codes for landing.",
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
      "OM-B Section 2.3.9.1 After Start states to turn on engine anti-ice during all ground operation, when icing conditions exist or are anticipated. FCOM SOP: Engine anti-ice must be turned on during ground operations or flight when icing conditions exist (OAT/TAT 10°C or below with visible moisture).",
  },
  {
    id: 92,
    theme: "Performance / EFB",
    question: "What is considered to be a 'forward' CG at takeoff?",
    options: [
      "less than 29%",
      "less than or equal to 27%",
      "less than 27%",
      "less than or equal to 30%",
    ],
    correct: 0,
    explanation:
      "SOP: For generic A320 performance calculations, a CG less than 29% is often considered 'forward'.",
  },
  {
    id: 93,
    theme: "Performance / EFB",
    question: "What is considered to be a 'standard' CG at takeoff?",
    options: [
      "More than 27%",
      "More than or equal to 29%",
      "More than 30%",
      "More than or equal to 30%",
    ],
    correct: 1,
    explanation:
      "SOP: A CG equal to or greater than 29% allows for standard (or optimized) trim and performance assumptions.",
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
    explanation:
      "FCOM: CONF 1+F produces the best climb gradient (lowest drag for takeoff configs), so stating the climb gradient is reduced is NOT true.",
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
      "SOP: If the takeoff is limited by runway length (RWY) or obstacles (OBS) and TOGA is required, standing brakes must be applied to maximize available distance.",
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
      "OM-B Section 2.3.7 Before Pushback or Start states that takeoff from a less limiting (longer) takeoff position than that computed is acceptable without further modification.",
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
    explanation:
      "FCOM: Engine Out SIDs survey obstacles up to a specified radius, typically guaranteeing clearance above 1500 ft out to 30 NM depending on local terrain.",
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
    explanation:
      "EFB Interface: It is usually found under the 'MORE' options depending on the software version.",
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
      "EFB Interface: MEL and CDL penalties are inputted via the Aircraft Status (ACFT STS) section.",
  },
  {
    id: 100,
    theme: "Performance / EFB",
    question:
      "For an in-flight landing calculation, what is the maximum crosswind with compacted snow at -16°C?",
    options: ["15 kts", "10 kts", "38 kts", "29 kts"],
    correct: 3,
    explanation:
      "RCAM: Compacted snow at temperatures colder than -15°C often allows better friction, treating it as RCC 4 (29 kts limit).",
  },
  {
    id: 101,
    theme: "Performance / EFB",
    question:
      "For an in-flight landing calculation, what is the maximum crosswind with 5 mm of water?",
    options: ["20 kts", "10 kts", "15 kts", "29 kts"],
    correct: 0,
    explanation:
      "RCAM: 5 mm of standing water is an RCC 2 condition, which typically limits maximum crosswind to 20 knots.",
  },
  {
    id: 102,
    theme: "Performance / EFB",
    question:
      "For an in-flight landing calculation, what is the maximum crosswind with compacted snow at -13°C?",
    options: ["29 kts", "25 kts", "38 kts", "10 kts"],
    correct: 1,
    explanation:
      "RCAM: Compacted snow at warmer temperatures (like -13°C) may be more slippery, limiting the crosswind further depending on specific operator matrices.",
  },
  {
    id: 103,
    theme: "Performance / EFB",
    question:
      "If using Reverse Idle, what is the correct choice in the EFB LDG PERF?",
    options: ["Yes", "No"],
    correct: 1,
    explanation:
      "EFB: If only reverse idle is used, credit for reverse thrust should be set to 'No' for conservative performance calculations.",
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
      "EFB: The 'MODIFY RWY' function is used to manually shorten the TORA/TODA/LDA.",
  },
  {
    id: 105,
    theme: "Performance / EFB",
    question:
      "What takeoff performance limit codes indicate performance limiting takeoff when using TOGA thrust?",
    options: ["RWY and OBS", "RWY only", "OBS only", "RWY, OBS, and VMC"],
    correct: 0,
    explanation:
      "FCOM: Runway length and Obstacle clearance are the primary physical limitations that restrict maximum takeoff weight even with TOGA thrust.",
  },
  {
    id: 106,
    theme: "Performance / EFB",
    question:
      "Required landing distance figures include what factors for a 'dry'/'wet' runway?",
    options: ["1.25/1.5", "1.5/2.0", "1.67/1.92"],
    correct: 2,
    explanation:
      "Regulations: Dispatch landing distance is multiplied by 1.67 for dry runways, and an additional 1.15 factor is applied for wet runways (1.67 x 1.15 = 1.92).",
  },
  {
    id: 107,
    theme: "Performance / EFB",
    question:
      "If below 10°C and 'wet' runway only, is anti-ice legally required for take-off?",
    options: ["Yes", "No"],
    correct: 1,
    explanation:
      "SOP: A wet runway alone without visible moisture (like rain, fog, or standing water splashing into engines) does not mandate engine anti-ice.",
  },
  {
    id: 108,
    theme: "Performance / EFB",
    question:
      "How many 'negligible' CDL items can be carried without applying a performance penalty?",
    options: ["3", "2", "1", "4"],
    correct: 0,
    explanation:
      "SOP: Up to 3 negligible Configuration Deviation List (CDL) items can often be carried without stacking a performance penalty.",
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
    explanation:
      "EFB: Vpilot refers to a manual speed increment added by the pilot to the approach speed calculation.",
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
      "SOP: In-flight QRH calculations represent actual/unfactored distances, whereas EFB dispatch modes automatically apply regulatory safety margins (like the 1.15 wet factor).",
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
      "EFB: A high flex temperature generally indicates that the performance calculation is heavily derated, inherently retaining a significant real-world stop margin.",
  },
  {
    id: 112,
    theme: "Performance / EFB",
    question:
      "Where is the correct place to find RWY COND EFB entry at landing dispatch?",
    options: ["EFB MORE app", "OM-A", "QRH", "OM-B"],
    correct: 0,
    explanation:
      "EFB Interface: Specific runway condition matrices and inputs are often found under the 'MORE' or related supplementary pages on the EFB.",
  },
  {
    id: 113,
    theme: "Performance / EFB",
    question:
      "Which of these is not an appropriate wind entry for a METAR reading VRB03KT?",
    options: ["T03", "TL03", "H03", "0/0"],
    correct: 2,
    explanation:
      "SOP: Since the wind is variable, you cannot safely assume a headwind (H03). You must assume zero wind or a tailwind.",
  },
  {
    id: 114,
    theme: "Performance / EFB",
    question:
      "A 'contaminated runway' describes a surface where a certain depth of contaminant is covering what percentage of runway area?",
    options: ["More than 25%", "More than 50%", "25% or more", "50% or more"],
    correct: 0,
    explanation:
      "FCOM: A runway is defined as contaminated when more than 25% of the required surface area is covered by more than 3 mm of standing water, slush, or snow.",
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
      "FCOM: Turning the emergency knob provides a permanent overpressure to clear smoke, provided the main selector is on the 100% position.",
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
    explanation:
      "FCOM: Pressing the reset slide cuts off the oxygen flow and deactivates the mask microphone, reactivating the standard boom mic.",
  },
  {
    id: 117,
    theme: "Limitations",
    question:
      "Under normal operations, maximum reverse should not be used below what speed?",
    options: ["50 kt", "60 kt", "70 kt", "75 kt"],
    correct: 2,
    explanation:
      "OM-B Section 2.3.19 Manual Landing specifies to move both reversers levers to IDLE at 70 kt. FCOM SOP: Max reverse thrust should be reduced to idle by 70 knots to prevent engine compressor stalls and debris ingestion.",
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
      "FCOM: The system consists of two Cabin Pressure Controllers and a single outflow valve equipped with three motors (two automatic, one manual).",
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
    explanation:
      "FCOM: There is no dedicated VLE-style speed limitation for the speedbrakes; they can be deployed up to VMO/MMO.",
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
      "FCOM: The extract fan runs continuously as long as the aircraft has electrical power.",
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
    explanation:
      "FCOM: Engine anti-ice valves are fail-safe open. If power is lost, they open to ensure continuous ice protection.",
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
    explanation:
      "FCOM: Normal operating system pressure is 3000 PSI (+/- 200 PSI). The RAT provides slightly lower pressure.",
  },
  {
    id: 123,
    theme: "Limitations",
    question: "Maximum tire ground speed is?",
    options: ["195 kt", "200 kt", "205 kt", "185 kt"],
    correct: 0,
    explanation:
      "FCOM LIM: The maximum demonstrated tire speed on the ground is 195 knots.",
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
      "FCOM: Windshear alerts (including Predictive Windshear) are critical for survival and take absolute priority over TCAS and GPWS aural warnings.",
  },
  {
    id: 125,
    theme: "Limitations",
    question: "What is the maximum speed for operating the windshield wipers?",
    options: ["185 kt", "200 kt", "215 kt", "230 kt"],
    correct: 3,
    explanation:
      "FCOM LIM-WIPERS: Wiper operation is limited to a maximum speed of 230 knots.",
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
    explanation:
      "FCOM LIM-ENG: Minimum oil temperature before starting the engine is -40°C.",
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
      "OM-B Section 2.3.7.1 At Pushback/Start Clearance states that the NW STRG DISC memo appears when the nose wheel steering selector is in the towing position.",
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
    explanation:
      "FCOM: Under normal conditions, AC BUS 1 supplies the AC ESS BUS. (AC BUS 2 is the alternate).",
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
      "FCOM: If APU bleed air was recently used, the APU continues running for a cooling down period (usually 60 to 120 seconds) after being switched off.",
  },
  {
    id: 130,
    theme: "Hydraulics",
    question: "What is the normal operating pressure in the hydraulic system?",
    options: ["500 psi", "1000 psi", "2000 psi", "3000 psi"],
    correct: 3,
    explanation: "FCOM: The nominal hydraulic system pressure is 3000 PSI.",
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
      "FCOM LIM: Standard maximum runway pressure altitude is 9,200 ft (unless high-altitude modifications are installed).",
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
      "OM-B Section 2.3.7.1 At Pushback/Start Clearance explicitly states that the NW STRG DISC memo appears amber if at least one engine is running during pushback to alert the crew.",
  },
  {
    id: 133,
    theme: "Limitations",
    question: "What is the maximum runway slope?",
    options: ["+/- 1%", "+ 1%/ -2%", "+\\- 2%", "+2%/ -1%"],
    correct: 2,
    explanation: "FCOM LIM: The maximum permitted runway slope is +/- 2%.",
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
      "OM-B Section 2.3.4.10 Before Walkaround explicitly states: IF FLIGHT CONTROL SURFACE POSITIONS DO NOT AGREE WITH THE CONTROL LEVER POSITIONS, CHECK WITH THE MAINTENANCE CREW BEFORE APPLYING HYDRAULIC POWER.",
  },
  {
    id: 135,
    theme: "Navigation",
    question: "Navaids are normally autotuned by?",
    options: ["ADIRU", "RMP", "MCDU", "FMGC"],
    correct: 3,
    explanation:
      "FCOM: The Flight Management and Guidance Computer (FMGC) automatically tunes navaids for position updating.",
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
    explanation:
      "FCOM: This allows the Captain to bypass a failed Audio Control Panel (ACP 1) and use the 3rd (Observer's) ACP instead.",
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
    explanation:
      "FCOM: The Flight Controls ECAM page automatically pops up on the ground when either sidestick is moved to check control surfaces.",
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
      "FCOM: In Alternate Law, Alpha Prot is lost. The amber VLS band remains, followed directly by a red/black strip indicating Stall Warning (Vsw).",
  },
  {
    id: 139,
    theme: "Limitations",
    question:
      "What is the maximum speed for flight with a cockpit window open?",
    options: ["200 knots", "230 knots", "Green Dot", "250 knots"],
    correct: 0,
    explanation:
      "FCOM LIM: Maximum speed to open a cockpit window is 200 knots.",
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
    explanation:
      "FCOM: Autothrust transitions from armed to active when the thrust levers are moved into the CLB detent after takeoff.",
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
    explanation:
      "FCOM: The EMER GEN supplies the AC ESS BUS and the DC ESS BUS (via the ESS TR).",
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
      "FCOM: Inputs are algebraically summed but are limited to the maximum mechanical deflection of a single stick.",
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
    explanation:
      "FCOM: The APU can be started throughout the entire flight envelope up to the maximum certified altitude.",
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
      "OM-B Section 2.3.9.1 After Start states: On ground when wing anti-ice is switched on, the anti-ice valves open for about 30 s for self-test sequence, then close as long as the aircraft is on ground.",
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
      "FCOM: Pressing and releasing the Engine FIRE pb arms the fire extinguisher squibs (and closes associated valves/generators).",
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
      "FCOM: The FADEC is a dual-channel system powered by its own dedicated alternator once N2 reaches a sufficient speed.",
  },
  {
    id: 147,
    theme: "Limitations",
    question:
      "What is the maximum demonstrated crosswind for landing (including gusts)?",
    options: ["29 knots", "33 knots", "35 knots", "38 knots"],
    correct: 3,
    explanation:
      "FCOM LIM: Maximum demonstrated crosswind for takeoff and landing is 38 knots (including gusts).",
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
      "FCOM: The ENG FIRE light illuminates on the engine master panel when a fire is detected, prompting shutdown actions.",
  },
  {
    id: 149,
    theme: "Limitations",
    question:
      "What is the certified maximum number of passenger seats for an A320?",
    options: ["189", "180", "144", "215"],
    correct: 1,
    explanation:
      "OM-B Section 1 Limitations defines the maximum number of passenger seats as 180 for the A320-180Y configuration, and 186 for the A320-186Y.",
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
      "FCOM: If cabin altitude exceeds 14,000 ft, oxygen masks drop and cabin signs/lights illuminate automatically.",
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
      "OM-B Section 2.3.12 Takeoff lists the thrust lever settings during the takeoff roll as either FLX or TOGA.",
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
    explanation:
      "FCOM: An overheat FAULT light will only extinguish once the hydraulic fluid temperature has cooled down.",
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
    explanation:
      "FCOM: The top right corner of the Navigation Display in ARC or ROSE NAV mode shows data for the active 'TO' waypoint.",
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
      "FCOM: In AUTO, the Bus Tie Contactor automatically manages power routing to supply both AC buses from any available source.",
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
      "FCOM: 'F' speed indicates the minimum speed at which the flaps can be safely retracted.",
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
    explanation:
      "FCOM: True. The FLEX temperature must be higher than the actual Outside Air Temp (and TREF) to actively reduce thrust.",
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
    explanation:
      "FCOM: Controlled manually by the crew using the ENG ANTI ICE pushbuttons on the overhead panel.",
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
    explanation:
      "FCOM: If AC power is lost on the ground, batteries connect below 100 knots (or during APU start / in flight on emergency power).",
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
    explanation:
      "FCOM LIM: Selecting reverse thrust while in flight is strictly prohibited.",
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
    explanation:
      "FCOM: Wing Tip Brakes (WTB) physically lock the flaps to prevent further travel if asymmetry is detected.",
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
    explanation:
      "FCOM: Normal Law limits pitch to 30° nose up (less at low speeds), 15° nose down, and bank angle to 67°.",
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
    explanation:
      "FCOM: A mechanical interlock, triggered by shock absorber compression, prevents the lever from being moved UP on the ground.",
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
    explanation:
      "FCOM: It opens the line contactor to separate GEN 1 from the main AC buses, though it still supplies its dedicated fuel pumps directly.",
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
    explanation:
      "FCOM: In AUTO, strobe lights automatically shut off when the main gear shock absorbers are compressed upon touchdown.",
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
    explanation:
      "FCOM LIM: The maximum altitude for extending the landing gear is 25,000 ft.",
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
    explanation:
      "FCOM LIM: Limits are -1g to +2.5g in clean configuration, and 0g to +2.0g with slats/flaps extended.",
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
    explanation:
      "FCOM: Nose wheel and Runway Turnoff lights automatically extinguish when the landing gear is retracted.",
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
    explanation:
      "FCOM: Placing the thrust levers in the FLEX (or TOGA) detent arms the Autothrust system (displays in blue on the FMA).",
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
    explanation:
      "FCOM: The Flight Path Vector (Bird) indicates the actual trajectory/track the aircraft is flying.",
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
    explanation:
      "FCOM: If RMP 1 fails, its display goes blank, and VHF 1 can then be tuned via another RMP using audio switching.",
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
    explanation:
      "FCOM LIM: Maximum operating altitude with slats or flaps extended is 20,000 ft.",
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
    explanation:
      "FCOM: On the First Officer's side, ROSE ILS displays ILS 2 data, and on the Captain's side, it displays ILS 1 data.",
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
      "FCOM: A red UNLK light indicates the respective gear is not locked in its selected position.",
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
      "FCOM: If no FLEX temperature is entered in the MCDU, only a maximum thrust (TOGA) takeoff is allowed.",
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
      "FCOM: The Power Transfer Unit activates automatically if the pressure difference between Green and Yellow systems exceeds 500 PSI.",
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
    explanation:
      "FCOM: Each engine anti-ice system operates independently. The failure of one does not affect the other.",
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
      "FCOM: In Normal Law, the flight control computers provide structural load factor protection preventing excessive G loads.",
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
    explanation:
      "FCOM: The Engine Fire pushbuttons close the respective hydraulic fire shutoff valves (Green for ENG 1, Yellow for ENG 2).",
  },
  {
    id: 179,
    theme: "Landing Gear",
    question:
      "What is the maximum brake temperature for takeoff (brake fans off)?",
    options: ["720°C", "520°C", "300°C", "330°C"],
    correct: 2,
    explanation:
      "FCOM LIM: The maximum brake temperature before takeoff (assuming brake fans are off) is 300°C.",
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
    explanation:
      "FCOM: Switching to CAPT 3 allows the Captain to use the 3rd Audio Control Panel if their primary ACP fails.",
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
    explanation:
      "FCOM: Applying a sufficient force override on the sidestick will mechanically disengage the autopilot.",
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
    explanation:
      "FCOM: Tuning an ILS manually via the Radio Management Panel removes DME distance information from the PFD.",
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
      "FCOM: The PTU is inhibited during the first engine start to prevent spurious operations and tests itself during the second start.",
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
    explanation:
      "FCOM: Alpha Floor protection is automatically inhibited below 100 feet Radio Altitude.",
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
    explanation:
      "FCOM: Pressing the APU FIRE pushbutton always commands an immediate emergency shutdown of the APU.",
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
    explanation:
      "FCOM: During a manual engine start, the crew introduces fuel when N2 reaches at least 20% and max motoring speed.",
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
      "OM-B Section 2.3.6.2 Cockpit Preparation explicitly notes that if the APU is supplying air, HI flow is automatically selected regardless of the PACK FLOW switch position.",
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
    explanation:
      "FCOM: An overheat FAULT light will only extinguish once the system has sufficiently cooled down.",
  },
  {
    id: 189,
    theme: "Flight Controls",
    question: "What is the maximum speed for each flap configuration?",
    options: ["V stall speed.", "Green dot speed", "Vfe speed", "Vis speed"],
    correct: 2,
    explanation:
      "FCOM: Maximum flap/slat extension speeds are denoted as VFE (Velocity Flaps Extended).",
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
    explanation:
      "FCOM: The landing gear bays and the tail cone area are outside the pressurized hull.",
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
      "FCOM: If Bleed Monitoring Computer 1 fails, APU bleed leak detection capability is lost.",
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
    explanation:
      "FCOM: Safety valves operate automatically to protect the fuselage from excessive positive or negative differential pressure.",
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
      "FCOM: If an engine is started while an IRS is still aligning, it is considered an abnormal configuration and the memo turns amber.",
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
    explanation:
      "FCOM: Ground spoiler extension (triggered by wheel spin-up or weight on wheels and thrust levers idle) signals the autobrake to begin deceleration.",
  },
  {
    id: 195,
    theme: "Systems - Elec",
    question: "What is the maximum continuous load per generator?",
    options: ["85%.", "50%.", "75%.", "100%."],
    correct: 3,
    explanation:
      "FCOM LIM: Each main generator can operate continuously up to 100% of its rated capacity.",
  },
  {
    id: 196,
    theme: "Limitations",
    question: "What is the certified maximum number of seats on the A320?",
    options: ["There is no certified limit", "200", "180", "150"],
    correct: 2,
    explanation:
      "OM-B Section 1 Limitations defines the maximum number of passenger seats for the standard A320 configuration as 180 or 186.",
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
    explanation:
      "FCOM: The sidestick commands a load factor (G) in the pitch axis and a roll rate (degrees/sec) in the roll axis.",
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
    explanation:
      "FCOM: It indicates that an ILS approach has been selected and activated in the active flight plan of the MCDU.",
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
      "FCOM: The system blows cooling air through the flight deck instruments/panels and the avionics bay racks.",
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
      "FCOM: In AUTO, the crossbleed valve opens when the APU bleed is ON, and stays closed if the APU bleed is OFF (engine bleeds normal).",
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
    explanation:
      "FCOM: The Blue electric pump starts automatically if AC power is available and at least one engine is running.",
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
    explanation:
      "FCOM: Flight Management encompasses navigation, flight planning, performance optimization, and 4D predictions. (Guidance handles the AP/FD/ATHR).",
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
    explanation:
      "FCOM LIM: Using reverse thrust to back up the aircraft (power back) is prohibited.",
  },
  {
    id: 204,
    theme: "APU",
    question:
      "What is the maximum altitude for APU single pack bleed air operation?",
    options: ["39,100 ft", "30,000 ft", "22,500 ft", "15,000 ft"],
    correct: 2,
    explanation:
      "FCOM LIM: The APU can supply a single pack with bleed air up to 22,500 ft.",
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
    explanation:
      "FCOM SOP: Icing conditions on the ground exist when OAT is 10°C or below with visible moisture (e.g. visibility < 1 mile).",
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
    explanation:
      "FCOM: A rapid alignment (to zero out ground speed errors) is done by turning the IR selectors OFF and back to NAV within 5 seconds.",
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
    explanation:
      "FCOM: It indicates that at least one shock absorber did not mechanically extend upon liftoff.",
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
    explanation:
      "FCOM: An APU LOW OIL LEVEL advisory allows operation, but maintenance should be notified to add oil within a specific timeframe.",
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
    explanation:
      "FCOM: The REFUELG memo is triggered when the external refuel panel door is open.",
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
      "FCOM: Safety valves automatically prevent structural damage by relieving excessive positive or negative differential pressure.",
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
      "FCOM: AP disconnects if bank > 45°, high-speed protection activates, or if speed enters the Alpha Protection band (Alpha Prot + 1°).",
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
    explanation:
      "FCOM LIM: Using APU bleed air to supply the Wing Anti-Ice system is strictly prohibited.",
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
    explanation:
      "FCOM: Selecting the MASTER SW to ON powers the ECB and opens the air intake flap. Start only begins when the START pb is subsequently pressed.",
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
    explanation:
      "FCOM: To prevent asymmetric roll/yaw, if one spoiler fails, the corresponding spoiler on the opposite wing is automatically inhibited.",
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
    explanation:
      "FCOM: Under normal dual-loop operation, both Loop A and Loop B must detect a fire simultaneously to trigger the warning.",
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
    explanation:
      "FCOM: Each Radio Management Panel (RMP) has its own dedicated rotary ON/OFF switch.",
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
      "FCOM: Flashing ALIGN lights typically mean the system detects aircraft movement, a significant position error, or is awaiting initial position entry.",
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
    explanation:
      "FCOM: The RAT drops automatically to pressurize the Blue hydraulic system (and drive the emergency generator) if both main AC buses are lost above 100 kt.",
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
    explanation:
      "FCOM: Just like the sidesticks, inputs from both nosewheel steering tillers are algebraically summed.",
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
    explanation:
      "FCOM: In flight, to maintain cabin pressurization, the avionics ventilation system operates in the closed (or intermediate) configuration. The inlet valve is closed.",
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
    explanation:
      "FCOM: The external APU SHUT OFF pushbutton (on the nose gear intercom panel) allows ground crew to perform an emergency shutdown.",
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
    explanation:
      "FCOM: The FADEC computes the thrust rating limit corresponding to the physical detent the thrust lever is placed in (Thrust Lever Angle).",
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
    explanation:
      "FCOM: A FAULT light on the ENG master panel indicates an automatic start abort, a start valve fault, or a malfunction in the thrust control system.",
  },
  {
    id: 224,
    theme: "Flight Controls",
    question:
      "In Normal Law, what is the maximum bank angle you can reach with the side stick fully deflected?",
    options: ["There is no bank angle limitation", "33°", "67°", "50°"],
    correct: 2,
    explanation:
      "FCOM: Normal law bank angle protection prevents the aircraft from exceeding 67° of bank.",
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
    explanation:
      "FCOM LIM: The maximum positive differential pressure is +9.0 PSI, and maximum negative is -1.0 PSI (-0.4 PSI operational limit).",
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
    explanation:
      "FCOM: The fuel used counter resets to zero automatically on the ground during the next engine start sequence.",
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
      "OM-B Section 2.3.4.8 Aircraft Acceptance states to check that the oil quantity is at or above 9.5 qt + estimated consumption (average estimated consumption ~0.5 qt/h).",
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
      "FCOM: A hydraulic reservoir or pump overheat triggers a FAULT light on the respective hydraulic pump pushbutton.",
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
    explanation:
      "FCOM: Testing the squibs/bottles illuminates the specific discharge indications associated with that bottle.",
  },
  {
    id: 230,
    theme: "APU",
    question:
      "What is the maximum altitude for APU start using aircraft batteries only?",
    options: ["FL200", "FL100", "FL150", "FL250"],
    correct: 3,
    explanation:
      "FCOM LIM: The APU can be started on battery power up to FL250 (25,000 ft).",
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
    explanation:
      "FCOM: The Bleed Monitoring Computers (BMC) have no dedicated pushbuttons for crew reset in flight; a hard fault requires maintenance action on the ground.",
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
    explanation:
      "FCOM: Alternate braking is powered by the Yellow system. If Yellow pressure is also lost, the Yellow brake accumulator provides pressure for several brake applications.",
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
      "OM-B Section 2.3.6.2 Cockpit Preparation explicitly instructs to select NORM for all other normal operating cases.",
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
    explanation:
      "FCOM: The Rudder Travel Limitation Unit (RTLU) restricts maximum rudder deflection as airspeed increases to prevent structural damage.",
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
    explanation:
      "FCOM: The A320 has two packs (Air Conditioning Units) and an emergency ram air inlet for ventilation in case of dual pack failure.",
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
    explanation:
      "FCOM: Certain non-essential information is decluttered on the displays during critical flight phases (e.g., ND at 80 kt on takeoff, PFD below 30 ft RA on landing).",
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
    explanation:
      "FCOM: If normal braking (Green) is lost, alternate braking (Yellow) automatically takes over. If Yellow is lost, the brake accumulator is used.",
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
    explanation:
      "FCOM: The Inertial Reference Systems are normally powered by the AC buses. (They revert to DC backup if AC fails).",
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
    explanation:
      "FCOM: Pushing the N/100% selector to 100% forces the regulator to deliver pure oxygen instead of a mix of oxygen and cabin air.",
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
    explanation:
      "FCOM: If a fuel leak is suspected, crossfeed and fuel transfers must be managed carefully. Some automatic transfers are inhibited to prevent pumping fuel overboard.",
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
    explanation:
      "FCOM: The APU bleed valve automatically closes when an APU shutdown sequence is initiated or if an APU bleed leak is detected.",
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
    explanation:
      "FCOM: In degraded laws, the FMA displays an amber box indicating the degraded law, while basic guidance symbols retain standard colors.",
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
    explanation:
      "FCOM: The Status page automatically appears on the lower ECAM display after engine shutdown to review maintenance/inop systems.",
  },
  {
    id: 244,
    theme: "Powerplant",
    question:
      "On take-off, when the thrust levers are set to the FLEX detent, which of the following thrust modes will be displayed on the FMA?",
    options: ["MAN THR", "MAN FLEX", "THR CLB", "THR FLX"],
    correct: 1,
    explanation:
      "FCOM: The FMA will display MAN FLEX (followed by the selected flex temperature) in the thrust column.",
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
    explanation:
      "FCOM: The white circle/arc on the N1 gauge indicates the thrust limit corresponding to the physical position (TLA) of the thrust levers.",
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
    explanation:
      "FCOM: Speedbrakes are inhibited if thrust levers are > MCT, flaps in FULL (or CONF 3 for some MSNs), alpha floor activates, or if SEC 1 and 3 fail.",
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
    explanation:
      "FCOM: A compressor outlet overheat triggers an amber FAULT light on the associated PACK pushbutton and an ECAM caution.",
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
    explanation:
      "FCOM: Normal Law provides full flight envelope protection including load factor, pitch attitude, high speed, high AoA, and bank angle.",
  },
  {
    id: 249,
    theme: "Navigation",
    question:
      "After IRS realignment, the aircraft's position is automatically updated by ...",
    options: ["GPS only.", "FMGC only.", "DME only.", "GPIRS."],
    correct: 3,
    explanation:
      "FCOM: ADIRS uses a hybrid GPIRS (GPS + IRS) position which provides highly accurate continuous updating.",
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
    explanation:
      "FCOM: Pressing the EVAC command button in the cockpit triggers the evacuation horns in the cabin and alerts the flight attendants.",
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
      "OM-B Section 2.3.1.6 Taking Over the Flight Controls explicitly states: If a take-over becomes necessary during flight, the PM must press the sidestick priority push-button, keeping it pressed until the transfer of control is clearly established.",
  },
  {
    id: 252,
    theme: "APU",
    question:
      "What is the maximum altitude for APU two-pack bleed air operation?",
    options: ["15,000 ft", "20,000 ft", "22,500 ft", "18,000 ft"],
    correct: 0,
    explanation:
      "FCOM LIM: The APU can supply two packs with bleed air up to 15,000 ft.",
  },
  {
    id: 253,
    theme: "Powerplant",
    question:
      "At what temperature do the engine bleed valves close automatically?",
    options: ["100°C", "200°C", "85°C", "185°C"],
    correct: 1,
    explanation:
      "FCOM: To protect the pneumatic system, engine bleed valves close automatically if the downstream temperature exceeds a threshold (typically around 200°C).",
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
    explanation:
      "FCOM: A configuration mismatch or failure triggers ECAM alerts and alters speed tapes on the PFD.",
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
      "FCOM: The 'DUAL INPUT' audio warning and priority lights illuminate when both pilots move their sticks simultaneously.",
  },
  {
    id: 256,
    theme: "Landing Gear",
    question: "What is the maximum altitude for landing gear operation?",
    options: ["25,000 ft", "22,500 ft", "20,000 ft", "15,000 ft"],
    correct: 0,
    explanation:
      "FCOM LIM: The maximum altitude at which the landing gear may be extended or operated is 25,000 ft.",
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
    explanation:
      "FCOM: Pitch control is normally handled by the ELACs. If they fail, pitch control reverts to the SECs or mechanical trim (Direct Law).",
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
      "FCOM: The RAT drops into the slipstream to mechanically drive a hydraulic pump, which pressurizes the Blue system (and subsequently the EMER GEN).",
  },
  {
    id: 259,
    theme: "APU",
    question: "What is the maximum altitude for APU bleed air extraction?",
    options: ["30,000 ft", "20,000 ft", "25,000 ft", "22,500 ft"],
    correct: 1,
    explanation:
      "FCOM LIM: Bleed air extraction from the APU is limited to a maximum of 20,000 ft (for dual pack operation it is 15,000 ft, single pack is 22,500 ft). Note: Options may reflect older MSNs; typically 22,500ft is the absolute limit for 1 pack.",
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
      "FCOM: The transfer valves open automatically when inner tank fuel drops to the low level (approx 750kg). Note: Option text says 1,650 kg which might be an error in the original test bank, but 750kg is the standard.",
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
      "FCOM: Normal Law limits pitch to 30° nose up (less at low speeds), 15° nose down, and bank angle to 67°.",
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
      "FCOM: The Green hydraulic system powers landing gear extension and retraction.",
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
      "FCOM: A green arrow on the glare shield indicates that one pilot has taken priority and locked out the other stick.",
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
      "FCOM: A fault in a main generator triggers an ECAM caution and brings up the ELEC SD page.",
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
      "FCOM: Pressing the MODE SEL pushbutton to MAN on the cabin press panel allows manual control of the outflow valve.",
  },
  {
    id: 266,
    theme: "Flight Controls",
    question: "When will the aircraft automatically enter ALTERNATE LAW?",
    options: [
      "When multiple system failures occur.",
      "When the autopilot is disengaged.",
      "When the aircraft descends below 1,500 ft.",
      "When the side-sticks are deflected simultaneously.",
    ],
    correct: 0,
    explanation:
      "FCOM: Alternate law degrades from Normal Law following multiple flight control or sensor (ADIRS) failures.",
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
      "FCOM: The FACs continuously provide yaw damping, turn coordination, and flight envelope protections regardless of autopilot engagement.",
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
      "FCOM: It seals the aircraft by closing all valves below the waterline (outflow, pack flow, ram air) to slow water ingress.",
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
      "FCOM: Speedbrakes do not auto-retract strictly based on passing 10,000 ft. They remain deployed as commanded until retracted manually or inhibited (e.g. by FLAP FULL).",
  },
  {
    id: 270,
    theme: "Landing Gear",
    question:
      "When the landing gear is down, what happens to the T.O. CONFIG TEST pushbutton?",
    options: [
      "The T.O. CONFIG TEST pushbutton is inhibited.",
      "The T.O. CONFIG TEST pushbutton remains active.",
      "The T.O. CONFIG TEST pushbutton must be pressed to reset the system.",
      "The T.O. CONFIG TEST pushbutton is automatically reset.",
    ],
    correct: 0,
    explanation:
      "FCOM: The T.O. CONFIG test is a ground function to verify takeoff readiness and is not applicable in flight with gear down.",
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
      "FCOM: Pressing the RAT MAN ON pb manually deploys the Ram Air Turbine to pressurize the Blue hydraulic system.",
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
      "FCOM: The FADEC fully controls the automatic start sequence and secures the engine during an automatic or commanded shutdown.",
  },
  {
    id: 273,
    theme: "Systems - Air/Press",
    question: "How many valves does the aircraft pressurization system have?",
    options: ["Two", "Three", "Four", "Five"],
    correct: 3,
    explanation:
      "FCOM: The system includes 1 Outflow valve, 2 Safety valves, and various pneumatic conditioning valves. (Answers vary by exact system definition, test bank uses 5).",
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
      "FCOM: As airspeed decreases below approx 140 kt, the RAT stalls and can no longer generate sufficient power for the emergency generator.",
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
      "FCOM: A failure of the auto-pressurization system generates an ECAM caution/warning (Amber or Red depending on severity).",
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
      "FCOM: Spoilers perform multiple functions: roll assist, in-flight speed brakes, and ground spoilers for deceleration.",
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
      "FCOM: Provided they are armed (or reverse thrust is selected), ground spoilers automatically extend fully upon main wheel touchdown.",
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
      "FCOM: The Status page auto-displays after engine shutdown to review the aircraft's maintenance status.",
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
      "FCOM: The fuel used counter resets to zero automatically on the ground during the next engine start sequence.",
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
      "FCOM: The system provides life-sustaining oxygen to the flight deck, passengers, and portable units in case of depressurization.",
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
      "FCOM: The deployed RAT pressurizes the Blue hydraulic system, which in turn drives the Emergency Generator to power essential electrical buses.",
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
      "FCOM: In Direct Law, yaw damping and turn coordination are lost; the crew must manually coordinate turns using the rudder pedals.",
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
      "FCOM: The emergency electrical configuration ensures essential instruments and flight controls remain powered if all main AC generators fail.",
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
      "FCOM: If speedbrakes are deployed in flight, advancing the thrust levers above MCT (or Alpha Floor activation) will automatically retract them.",
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
      "When the aircraft is in the landing configuration.",
    ],
    correct: 0,
    explanation:
      "FCOM: The T.O. CONFIG test is a ground-only feature used to simulate takeoff power to check for configuration errors prior to the actual roll.",
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
      "FCOM: The LGCIU will fail safe; the gear will remain in its current state and ECAM warnings will prompt the crew to use gravity extension if needed.",
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
      "FCOM: The Flight Augmentation Computers calculate flight envelope limits (speeds) and control the rudder (yaw damper, turn coordination, trim).",
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
      "FCOM: The EMER GEN prioritizes supplying power only to the AC ESS and DC ESS buses to keep critical systems alive.",
  },
  {
    id: 289,
    theme: "APU",
    question:
      "What is the maximum altitude for APU start using battery power only?",
    options: ["20,000 ft", "25,000 ft", "30,000 ft", "35,000 ft"],
    correct: 1,
    explanation:
      "FCOM LIM: The APU can be started on battery power up to FL250 (25,000 ft).",
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
      "FCOM: Pressing the MODE SEL pushbutton to MAN on the cabin press panel allows manual toggle-switch control of the outflow valve.",
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
      "FCOM: Pressing RAT MAN ON deploys the RAT, pressurizing the Blue hydraulic system which drives the emergency generator.",
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
      "FCOM: The RAM AIR valve will not open if the differential pressure (Delta P) is greater than 1 PSI to prevent structural/valve damage.",
  },
  {
    id: 293,
    theme: "Landing Gear",
    question:
      "The nosewheel steering tillers can turn the nosewheel up to how many degrees?",
    options: ["75°", "65°", "78°", "70°"],
    correct: 0,
    explanation:
      "FCOM: Handwheels (tillers) can steer the nosewheel up to +/- 75 degrees for tight ground maneuvering.",
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
      "FCOM: Gravity extension requires pulling the handle out and turning it clockwise for 3 full turns to release the uplocks.",
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
      "FCOM: One triangle is fed by LGCIU 1 and the other by LGCIU 2, providing redundancy in gear position indication.",
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
      "FCOM: If cabin altitude exceeds approx 11,300 ft, passenger oxygen masks deploy and the FASTEN SEAT BELT / NO SMOKING signs illuminate automatically.",
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
      "FCOM SOP: Holding the IDG disconnect button for more than 3 seconds can physically damage the disconnect solenoid.",
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
      "FCOM: In manual start, the crew commands the valves, but the FADEC still passively monitors and will close the start valve at ~50% N2.",
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
      "FCOM: If all ELACs and SECs fail, pitch is controlled via the mechanical trim wheel (THS) and yaw via the mechanical rudder pedals.",
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
      "MEL: The '(O)' symbol means an Operational procedure must be completed by the flight crew prior to dispatch.",
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
      "FCOM: Engine cowls and the three outboard leading edge slats (slats 3, 4, 5) are anti-iced with hot bleed air.",
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
      "FCOM: The three outboard leading edge slats (slats 3, 4, 5) are anti-iced.",
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
      "FCOM: VFE NEXT is displayed as an amber '=' sign on the speed scale, indicating the maximum speed for the next flap/slat configuration.",
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
      "FCOM: The transfer valves latch open and will not close automatically until the next refueling operation is initiated.",
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
      "FCOM: The Trimmable Horizontal Stabilizer (THS) and the rudder are connected via physical cables to provide mechanical backup.",
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
      "FCOM: The Speed Reference System (SRS) pitch mode ends and automatically transitions to CLB when crossing the pre-programmed Acceleration Altitude.",
  },
  {
    id: 307,
    theme: "Auto Flight / FMS",
    question: "Regarding the FMA: A/THR in white means it is...",
    options: ["Disconnected", "Armed", "Active", "Off"],
    correct: 2,
    explanation:
      "FCOM: On the FMA, armed modes are in cyan (blue), and active modes are displayed in white (or green).",
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
      "FCOM: In Alpha Prot, the sidestick transitions from commanding G-load to commanding a specific Angle of Attack up to Alpha Max.",
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
      "FCOM: To prioritize feeding from the inner wing tanks during takeoff, the center tank pumps automatically shut off when slats are extended.",
  },
  {
    id: 310,
    theme: "Auto Flight / FMS",
    question: "Approximately how long do the ADIRS take for a full alignment?",
    options: ["1 minute", "3 minutes", "7 minutes", "10 minutes"],
    correct: 3,
    explanation:
      "FCOM: A full IRS alignment takes approximately 10 minutes (depending on latitude).",
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
      "FCOM: The grey box highlights the active start sequence and disappears when the start is complete and idle parameters are reached.",
  },
  {
    id: 312,
    theme: "Flight Controls",
    question:
      "At take off (or go around), what is the minimum speed at which the slats may be retracted from CONF 1+F to CONF 0?",
    options: ["F speed", "S speed", "Green dot speed", "Vls speed"],
    correct: 1,
    explanation:
      "FCOM: 'S' speed indicates the minimum speed at which the slats can be safely retracted to configuration clean (CONF 0).",
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
      "FCOM: Any RMP can tune any VHF/HF communication radio, as well as serve as a backup to tune its on-side navigation receivers.",
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
      "FCOM: In the dark-cockpit concept, Red requires immediate action, Amber requires awareness, White indicates an abnormal position, and Green indicates a temporary alternate function.",
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
      "FCOM: Amber dashes over the last two digits indicate an inaccuracy or partial failure of the quantity sensing system for that tank.",
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
      "OM-B Section 2.3.4.3 APU Fire Test explicitly instructs to check that the APU FIRE pb-sw is IN and GUARDED, and that the AGENT lights are OFF before pressing the test button.",
  },
  {
    id: 317,
    theme: "Flight Controls",
    question:
      "The flight maneuvering load acceleration limits in clean configuration are -1 g to +2.5 g",
    options: ["False", "True", "Only in Alternate Law", "Only in Direct Law"],
    correct: 1,
    explanation:
      "FCOM LIM: This is the correct structural G limit for the A320 in a clean configuration in Normal Law.",
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
      "FCOM: Alpha Lock prevents the slats from retracting from Config 1 to 0 if the Angle of Attack or airspeed is too low. Reducing AoA clears the lock.",
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
      "FCOM: A selected heading is shown as a blue triangle on the compass rose, or as digits if the heading bug is off-scale.",
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
      "FCOM SOP: The autopilot should be disengaged using the instinctive disconnect pushbutton on the sidestick to avoid triggering continuous warnings.",
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
      "FCOM: An amber door symbol on the ECAM DOOR/OXY page indicates that the door is either open or not properly locked.",
  },
  {
    id: 322,
    theme: "Powerplant",
    question: "What is the minimum fuel quantity for takeoff?",
    options: ["2,400 kg", "1,500 kg", "15,400 kg", "There is no limitation"],
    correct: 1,
    explanation:
      "FCOM LIM: A minimum of 1,500 kg of fuel is required for takeoff to prevent fuel starvation during aggressive maneuvers.",
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
      "FCOM SOP: If landing in Flap 3, the LDG FLAP 3 switch must be pressed to prevent nuisance GPWS 'TOO LOW FLAPS' warnings.",
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
      "FCOM: When MODE SEL is in MAN, holding the toggle switch UP manually opens the outflow valve, increasing cabin altitude.",
  },
  {
    id: 325,
    theme: "Hydraulics",
    question:
      "From which HYD system is the BRAKE & ACCU PRESS indicator (Triple BRAKE indicator located on the center instrument panel) indicating pressure?",
    options: ["Green", "Yellow", "Blue", "Amber"],
    correct: 1,
    explanation:
      "FCOM: The triple indicator on the center panel displays the pressure of the Yellow hydraulic system (accumulator and brake pressure).",
  },
  {
    id: 326,
    theme: "Limitations",
    question:
      "What is the maximum speed for selecting the gear down (Vlo extension)?",
    options: ["220 kt", "250 kt", "280 kt", "Green Dot"],
    correct: 1,
    explanation: "FCOM LIM-LG: VLO (extension) is 250 knots.",
  },
  {
    id: 327,
    theme: "APU",
    question:
      "What is the maximum APU rotor speed (% N on ECAM) above which the APU shuts down automatically?",
    options: ["100 %.", "117 %.", "107 %.", "97 %."],
    correct: 2,
    explanation:
      "FCOM: The APU Electronic Control Box (ECB) triggers an automatic overspeed shutdown if the rotor exceeds 107%.",
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
      "FCOM: It indicates the Wing Tip Brakes have arrested the flaps due to detected asymmetry or runaway.",
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
      "FCOM: TCAS can only detect and generate advisories against aircraft equipped with operating transponders.",
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
      "FCOM: Pressing it opens the GEN 1 line contactor, isolating it from the main network (used in Smoke procedures).",
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
      "FCOM: The extraction fan operates automatically and continuously as long as electrical power is supplied to the aircraft.",
  },
  {
    id: 332,
    theme: "Limitations",
    question: "What is the maximum speed for FLAP 3?",
    options: ["177 knots", "185 knots", "200 knots", "205 knots"],
    correct: 1,
    explanation: "FCOM LIM-FLAPS: VFE for Flap 3 configuration is 185 kt.",
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
      "FCOM: Each engine fire extinguishing system consists of two halon fire bottles.",
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
      "FCOM: The system has two identical Cabin Pressure Controllers (CPC). If one fails, the other automatically takes over.",
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
      "FCOM: The grey background on the N2 gauge disappears when the engine reaches idle, indicating the end of the start sequence.",
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
      "FCOM: Engine anti-ice valves fail to the OPEN position (safe in icing), while Wing anti-ice valves fail to the CLOSED position (prevent structural damage).",
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
      "FCOM: Pushing the thrust levers into the FLX or TOGA detent arms the Autothrust system (indicated in blue on FMA).",
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
      "FCOM: The AC ESS BUS can automatically or manually (via AC ESS FEED pb) be powered by AC BUS 2 if AC BUS 1 fails.",
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
      "FCOM: The Speed Reference System (SRS) provides pitch guidance to safely maintain a minimum of V2 + 10 kt during the initial climb.",
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
      "FCOM: Each SFCC controls one hydraulic motor for the slats and flaps. Losing one SFCC halves the actuation speed.",
  },
  {
    id: 341,
    theme: "Performance / EFB",
    question:
      "Takeoff using FLEX thrust is permitted on contaminated runways...",
    options: ["Above ISA -5°C", "False", "Only in CONF 1+F", "True"],
    correct: 1,
    explanation:
      "FCOM LIM: FLEX takeoff (reduced thrust) is strictly prohibited on contaminated runways.",
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
      "FCOM: Reaching the low-level threshold in an inner tank triggers the transfer valves in both wings to open automatically.",
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
      "FCOM: The emergency call initiates a distinctive triple high-low chime and pink flashing lights to immediately alert the cabin crew.",
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
      "FCOM: Pressing the RESET button on the Audio Control Panel extinguishes all illuminated call lights on that panel.",
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
      "FCOM: Supplying power to an ADIRU by turning the IR selector to NAV automatically arms and powers its associated Air Data Reference (ADR) section.",
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
      "FCOM: The passenger oxygen mask doors open automatically when cabin altitude exceeds 14,000 feet (+250/-750 ft).",
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
      "FCOM: The standard A320 has 4 main passenger/service doors and 4 overwing emergency exits.",
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
      "FCOM: The REV indicator is amber during transit and turns green when the reverser doors are fully deployed.",
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
      "FCOM: Amber boxes require a mandatory data entry by the flight crew before the FMS can perform its calculations.",
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
      "FCOM: If a TCAS alert is generated but the ND is set to a range greater than 40 NM, it prompts the crew to reduce the scale to properly view the traffic.",
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
      "FCOM: HI pack flow provides approximately 120% of the normal air flow rate.",
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
      "FCOM: Alpha Floor is an emergency protection that will engage and command TOGA thrust regardless of whether the Autothrust system was ON or OFF.",
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
      "FCOM: The Auto-Retract system brings the flaps (but not slats) up at 210 kt to prevent exceeding the VFE of 215 kt, shifting the configuration to 1 and raising the limit to 230 kt.",
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
      "FCOM: The handset is primarily dedicated to Passenger Announcements and intercom calls, while the boom mics are used for ATC.",
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
      "FCOM: In Normal Law, positive spiral stability returns the aircraft to 33° if the sidestick is released when bank is > 33°. Max bank is limited to 67°.",
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
      "FCOM: With both Green (Normal) and Yellow (Alternate) lost, braking relies entirely on the Yellow accumulator without Anti-Skid (limited to approx 7 applications).",
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
      "FCOM: A white 'SLIDE' indication next to the door symbol confirms that the evacuation slide for that door is armed.",
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
      "FCOM: Roll is controlled by the ailerons assisted by spoilers 2, 3, 4, and 5 on the descending wing.",
  },
  {
    id: 359,
    theme: "Flight Controls",
    question: "Speed brakes are provided by spoilers:",
    options: ["1, 2, 3, 4", "2, 3, 4", "2, 3, 4, 5", "3, 4, 5"],
    correct: 1,
    explanation:
      "FCOM: Spoilers 2, 3, and 4 are symmetrically deployed on both wings when speedbrakes are commanded.",
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
      "FCOM: The FMGC associated with the engaged autopilot becomes the master. If AP2 is engaged, FMGC 2 takes priority.",
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
      "FCOM: The triple click alerts the crew to an automatic downgrade of landing capability (e.g. CAT 3 to CAT 2) or specific mode reversions on the FMA.",
  },
  {
    id: 362,
    theme: "Powerplant",
    question:
      "What is the take-off and go around EGT limit for the CFM engine?",
    options: ["950°C", "725°C", "915°C", "625°C"],
    correct: 0,
    explanation:
      "FCOM LIM: The TOGA EGT limit for the CFM56 engine is 950°C for a maximum of 5 minutes (or 10 min single-engine).",
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
      "FCOM: Blue indicates a temporarily active system or an alternate normal configuration (e.g. ENG ANTI ICE ON).",
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
      "FCOM: LAND mode engages at 400 ft RA to lock the approach trajectory. It can only be disengaged by a go-around (TOGA) or completely turning off the AP/FDs.",
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
      "FCOM: The Low Pressure conditioned air connector is located on the lower left forward fuselage.",
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
      "FCOM: The generator load percentage turns amber on the SD if it exceeds 100% of its rated limit.",
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
      "FCOM: On the ground, the APU features an automatic fire protection sequence that secures the unit and discharges the bottle 3 seconds after fire detection.",
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
      "FCOM: The flashing red light is a residual pressure warning to protect the cabin crew from aggressively opening the door while the cabin is still slightly pressurized.",
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
      "OM-B Section 2.3.6.2 Cockpit Preparation states to clarify with Maintenance Control before resetting tripped circuit breakers.",
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
      "FCOM: Activating a secondary flight plan that diverges from the primary requires the aircraft to first be placed in an unmanaged lateral mode (HDG/TRK).",
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
      "FCOM: The Landing Gear Control and Interface Units alternate control roles automatically after each complete landing gear cycle.",
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
      "FCOM: In an automatic start, the FADEC turns the igniters on at 16% N2 and cuts them off automatically when the start is secured (~50% N2).",
  },
  {
    id: 373,
    theme: "Powerplant",
    question:
      "When the low level sensors detect that the centre tank is empty, the pumps will run for an additional ______ min, and then stop",
    options: ["10", "1", "5", "2"],
    correct: 2,
    explanation:
      "FCOM: The center tank pumps continue to run for 5 minutes after low level is detected to ensure all residual fuel is scavenged.",
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
      "FCOM LIM: Reconnecting an Integrated Drive Generator (IDG) can only be performed by maintenance personnel on the ground.",
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
    explanation:
      "FCOM: Each engine has two dedicated fire bottles, while the APU has a single dedicated fire bottle.",
  },
  {
    id: 376,
    theme: "Auto Flight / FMS",
    question: "Below what height do the FWCs generate height announcements?",
    options: ["2,500 ft", "3,000 ft", "1,500 ft", "2,000 ft"],
    correct: 0,
    explanation:
      "FCOM: The Flight Warning Computers trigger synthetic voice altitude callouts starting at 2,500 ft Radio Altitude on the approach.",
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
      "FCOM: In PLAN mode, the map is always oriented True North Up to allow easy review of the flight plan.",
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
      "FCOM: An ECAM advisory automatically displays a system page when a parameter drifts out of normal range; the parameter pulses green to draw attention without an audible alert.",
  },
  {
    id: 379,
    theme: "Landing Gear",
    question:
      "If the FO fully deflects the hand wheel while manoeuvring on the ground, what angle will the nose wheel be at?",
    options: ["95°", "70°", "75°", "80°"],
    correct: 2,
    explanation:
      "FCOM: Handwheels (tillers) can steer the nosewheel up to +/- 75 degrees for tight ground maneuvering.",
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
      "OM-B Section 2.3.4.10 Before Walkaround states that NAV & LOGO 1 is normally used, while NAV & LOGO 2 is used only when the first set of lights fails.",
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
      "FCOM: Bleeding hot air reduces the maximum available thrust (N1/EPR limit drops) while simultaneously forcing an increase in idle thrust to ensure pneumatic pressure is sufficient.",
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
      "FCOM LIM: The APU can provide electrical power up to the aircraft's maximum certified altitude (e.g. 39,100 / 39,800 ft).",
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
      "FCOM: Any of the 3 Radio Management Panels can tune any of the communication radios (VHF 1/2/3, HF 1/2).",
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
      "FCOM: If both loops break within 5 seconds of each other, the FDU interprets the rapid succession as a flame effect and triggers a fire warning.",
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
      "FCOM: Since the PTU is operative and maintains Green system pressure, no downstream systems are lost. It is an independent failure.",
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
      "FCOM: Selecting the landing gear down automatically brings up the WHEEL system page on the lower ECAM display.",
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
      "FCOM: Full FADEC protection (including auto-abort and dry cranking) is only available during an automatic start on the ground.",
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
      "FCOM: Automatic ground spoiler deployment requires the system to be armed, both levers at idle, and wheel speed > 72 kt.",
  },
  {
    id: 389,
    theme: "Hydraulics",
    question:
      "Which hydraulic system is used for landing gear retraction and extension?",
    options: ["Green", "Blue", "Yellow", "Green or yellow"],
    correct: 0,
    explanation:
      "FCOM: The Green hydraulic system powers landing gear extension and retraction.",
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
      "FCOM: Pushing APPR arms the approach mode relative to the FMS plan (ILS or Non-Precision), and pushing it again disarms it if needed.",
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
      "FCOM: A predicted missed constraint triggers an amber star next to the altitude on the MCDU and an amber circle on the Navigation Display.",
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
      "FCOM: Dashes indicate a partial system failure; the crew must check the FUEL system page for detailed status.",
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
    explanation:
      "FCOM: The aircraft electrical network is fundamentally a 3-phase 115/200V 400Hz AC system, which is transformed/rectified to a 28V DC system.",
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
      "FCOM: Normal pressure is 3000 PSI, but if the RAT is supplying the pressure, it drops to 2500 PSI.",
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
      "FCOM: Battery voltage is displayed digitally on the overhead ELEC panel, and also on the lower ECAM ELEC system page.",
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
      "FCOM: The center tank pumps override the wing pumps. They feed automatically once the slats are retracted and the inner tanks have depleted sufficiently (500kg).",
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
      "FCOM: Slats and flaps are powered by two hydraulic systems each. Losing one system halves the actuation speed.",
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
      "FCOM: Full aft stick transitions from G-load demand to Angle of Attack (AoA) demand, maintaining Alpha Max. Releasing the stick stabilizes at Alpha Prot.",
  },
  {
    id: 399,
    theme: "Auto Flight / FMS",
    question: "In normal law, when does flight mode change to the flare mode?",
    options: ["At 100 ft RA", "At 30 ft RA", "At 20 ft RA", "At 50 ft RA"],
    correct: 3,
    explanation:
      "FCOM: The Normal Law flight mode transitions into Flare Mode at 50 ft Radio Altitude, memorizing the pitch and inducing a slight nose-down to require pilot back-pressure.",
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
      "FCOM: The EIU acts as the interface between the aircraft systems and the FADEC, passing data such as the Master switch and engine mode selector positions.",
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
      "FCOM: Reverser 1 is powered by the Green system; Reverser 2 is powered by the Yellow system.",
  },
  {
    id: 402,
    theme: "Limitations",
    question: "What is the wingspan of the A320?",
    options: ["24.8 m", "40.5 m", "34.1 m", "38.1 m"],
    correct: 2,
    explanation:
      "FCOM: The standard wingspan of the A320 (with sharklets/wingtip fences) is 34.1 m.",
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
      "FCOM: The EMER GEN prioritizes both the Essential and Essential Shed buses (until RAT stall).",
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
      "FCOM: A routine call from the cabin triggers a buzzer in the cockpit that sounds for approximately 3 seconds.",
  },
  {
    id: 405,
    theme: "ECAM / Displays",
    question:
      "If the FWC detects a failure it will trigger an ECAM alert, provided no flight phase inhibition is active. How many flight phases are there?",
    options: ["6", "7", "10", "8"],
    correct: 2,
    explanation:
      "FCOM: The FWC divides the flight into 10 distinct flight phases for the purpose of inhibiting non-critical alerts at critical times.",
  },
  {
    id: 406,
    theme: "Systems - Air/Press",
    question:
      "Below what altitude does the vacuum generator produce the necessary pressure differential to force waste from the toilet bowls into the waste storage tank?",
    options: ["18,000 ft", "14,000 ft", "16,000 ft", "20,000 ft"],
    correct: 2,
    explanation:
      "FCOM: Below 16,000 ft, cabin differential pressure is insufficient, so a vacuum generator assists the waste system.",
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
      "FCOM: Mechanical backup requires manual trimming for pitch and pedals for yaw, allowing control while restoring computers. Actuation remains hydraulic.",
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
      "FCOM: Hot bleed air is supplied only to the engine cowls and the three outboard leading edge slats (3, 4, 5).",
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
      "FCOM: A failed Display Management Computer results in 'INVALID DATA' diagonal lines on the screens it was feeding.",
  },
  {
    id: 410,
    theme: "Auto Flight / FMS",
    question:
      "Which unit is used as a short-term interface between the flight crew and FMGC?",
    options: ["ADIRU control panel", "FCU", "EFIS control panel", "MCDU"],
    correct: 1,
    explanation:
      "FCOM: The Flight Control Unit (FCU) is the primary short-term (tactical) interface for heading, speed, and altitude interventions.",
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
      "FCOM: System status is shown on the BLEED page, while a green memo confirms selection on the Engine/Warning Display.",
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
      "FCOM: In flight, the closed circuit configuration circulates air and cools it via a skin heat exchanger to maintain pressurization.",
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
      "FCOM: The reinforced cockpit door is designed to fail safe (unlock automatically) if all electrical power to its locking mechanism is lost.",
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
    explanation:
      "FCOM: If APU bleed air was recently used, the APU continues running for a cooling down period (usually 60 to 120 seconds) after being switched off.",
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
      "FCOM: In Alternate Law, load factor protection remains. Pitch, bank, and Alpha protections are lost and replaced by simple stabilities.",
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
      "FCOM: The IR rotary switch controls primary power to the entire unit, while the ADR pb can isolate the air data portion.",
  },
  {
    id: 417,
    theme: "Communications",
    question:
      "Which ACP transmission key will illuminate if the cabin attendants are calling the cockpit?",
    options: ["CAB", "ALERT", "VHF3", "PA"],
    correct: 0,
    explanation:
      "FCOM: The CAB (Cabin) reception knob illuminates and flashes on the ACP to indicate an incoming call from the flight attendants.",
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
      "OM-B Section 2.3.4.10 Before Walkaround instructs to check the upper ECAM display (E/WD) to confirm that the FLAPS position agrees with the lever position.",
  },
  {
    id: 419,
    theme: "Limitations",
    question: "What is the maximum speed (VFE) with CONF 1+F for the A320?",
    options: ["215 kt", "230 kt", "185 kt", "177 kt"],
    correct: 0,
    explanation:
      "FCOM LIM: VFE for Configuration 1+F is 215 kt (for Configuration 1, it is 230 kt).",
  },
  {
    id: 420,
    theme: "Limitations",
    question: "What is VMO/MMO for the A320?",
    options: ["380/0.8", "350/0.82", "320/0.82", "320/0.77"],
    correct: 1,
    explanation:
      "FCOM LIM: The maximum operating speed / Mach number for the A320 is 350 kt / 0.82 Mach.",
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
      "FCOM LIM: TOGA thrust is limited to 5 minutes for all engines operating, or 10 minutes in case of an engine failure.",
  },
  {
    id: 422,
    theme: "Limitations",
    question: "What is the maximum speed with the landing gear extended (VLE)?",
    options: ["220 kt", "260 kt", "280 kt", "250 kt"],
    correct: 2,
    explanation:
      "FCOM LIM-LG: The maximum speed with the gear extended (VLE) is 280 knots.",
  },
  {
    id: 423,
    theme: "Limitations",
    question: "What is the cabin pressure safety relief valve setting?",
    options: ["9PSI", "8.4PSI", "8.5PSI", "8.6PSI"],
    correct: 3,
    explanation:
      "FCOM LIM: The safety relief valves are mechanically set to open if differential pressure reaches 8.6 PSI.",
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
    explanation:
      "FCOM LIM: Maximum demonstrated crosswind for takeoff and landing is 38 knots (including gusts).",
  },
  {
    id: 425,
    theme: "Limitations",
    question:
      "What is the maximum speed at which the landing gear may be retracted (VLO retraction)?",
    options: ["250 kt", "260 kt", "280 kt", "220 kt"],
    correct: 3,
    explanation:
      "FCOM LIM: The maximum speed for gear retraction (VLO ret) is 220 knots to ensure hydraulic power can overcome aerodynamic loads on the doors.",
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
      "High speed protection is activated at or above VMO/MMO (depending on the flight conditions), a permanent nose-up order is applied to aid recovery back towards normal flight conditions. With no sidestick input the aircraft will not to wings level, and the maximum bank angle is reduced to 40°",
    ],
    correct: 3,
    explanation:
      "FCOM: In Normal Law, high speed protection pitches the nose up automatically and reduces maximum allowable bank angle to 40° to aid recovery.",
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
      "FCOM: In dual AP operations (like an Autoland), FMGC 1 is the master by default.",
  },
  {
    id: 428,
    theme: "Flight Controls",
    question:
      "What colour will the secondary flight plan be when it is displayed on the ND?",
    options: ["Green", "White", "Blue", "Amber"],
    correct: 1,
    explanation:
      "FCOM: The active flight plan is drawn in green, whereas a secondary flight plan is drawn in white.",
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
      "FCOM: The green downward arrow alerts the crew that there is more status information to be viewed on a second page (overflow).",
  },
  {
    id: 430,
    theme: "Communications",
    question:
      "Only ______ is functional in the emergency electrical configuration:",
    options: ["RMP 1 and 3", "RMP 1 AND 2", "RMP 1", "RMP 3"],
    correct: 2,
    explanation:
      "FCOM: To shed load during emergency electrical configuration, only RMP 1 (and VHF 1) remains powered by the essential bus.",
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
      "FCOM: The FMGS architecture consists of 2 FMGCs, 2 MCDUs, 1 FCU, and 2 FACs.",
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
      "FCOM: The single outflow valve features 3 motors: two are controlled automatically by CPC 1 and 2, and one is controlled manually.",
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
      "FCOM: The landing gear bays, air conditioning compartment (belly fairing), radome, and tail cone are outside the pressurized hull.",
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
      "FCOM LIM: CFM56 limits require a 15-minute starter cooling period after 4 consecutive start cycles.",
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
      "FCOM: On the speed tape, magenta (triangle or digits) indicates a target speed managed by the FMGS.",
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
      "FCOM: TAT, SAT, and ISA deviation are permanently displayed at the bottom of the System Display.",
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
      "FCOM: A dual Flight Warning Computer failure results in the total loss of all ECAM alerts, master lights, and standard aural warnings.",
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
      "FCOM: Above 260 knots, a safety valve cuts off hydraulic power to the gear to prevent extension at damaging speeds.",
  },
  {
    id: 439,
    theme: "Auto Flight / FMS",
    question:
      "Regarding an autoland approach, with both autopilots engaged, which FMGC is master?",
    options: ["Both", "FMGC 2", "Neither", "FMGC 1"],
    correct: 3,
    explanation:
      "FCOM: In dual AP operations, FMGC 1 retains priority and acts as the master.",
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
      "FCOM: When a door is opened in the armed configuration, pneumatic assistance from a damper actuator forces it rapidly open.",
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
      "FCOM: Alpha Floor protection is active from liftoff down to 100 ft Radio Altitude on the approach.",
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
      "FCOM: On the FMA, modes armed via crew selection (FCU) are blue, and modes armed via FMGS (managed) are magenta.",
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
      "FCOM: Selecting the Engine Master switch to OFF closes both the Low Pressure and High Pressure fuel valves.",
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
      "FCOM: Cost Index is the ratio of flight time cost to fuel cost. CI=0 prioritizes minimum fuel burn.",
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
      "FCOM: The SEL indicator illuminates on both RMPs if a transceiver normally associated with one RMP is tuned by another.",
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
      "FCOM: Turning the pump OFF removes the fault light, except in the case of an overheat which must physically cool down first.",
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
      "FCOM: A temporary flight plan (awaiting pilot insertion/execution) is drawn as a dashed yellow line on the Navigation Display.",
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
      "FCOM: Expedite Climb aims for the maximum climb gradient, pitching for Green Dot speed in OP CLB.",
  },
  {
    id: 449,
    theme: "Systems - Air/Press",
    question:
      "Above what cabin altitude will the cabin oxygen masks be deploy automatically?",
    options: ["12,000 ft", "16,000 ft", "9,550 ft", "14,000 ft"],
    correct: 3,
    explanation:
      "FCOM: The passenger oxygen mask doors open automatically when cabin altitude exceeds 14,000 feet.",
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
      "FCOM: The A320 electrical network isolates sources. It physically prohibits paralleling generators to prevent frequency mismatch damage.",
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
      "FCOM: The architecture utilizes 7 computers: 2 Elevator Aileron Computers, 3 Spoiler Elevator Computers, and 2 Flight Augmentation Computers.",
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
      "FCOM: The FACs handle yaw functions, but their flight envelope sub-part is also responsible for triggering the Alpha Floor protection.",
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
      "FCOM: The FCU digit brightness is adjusted via small rotary knobs positioned directly underneath the unit on the glare shield.",
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
      "FCOM: The amber half-box is an advisory indicating pressure has dropped below 1500 PSI; dispatch is still possible provided the remaining pressure meets minimum requirements based on temperature and crew size.",
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
      "FCOM: Flight Management (Navigation, Planning, Performance) and Flight Guidance (Autopilot, Flight Director, Autothrust).",
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
      "FCOM: The FWC triggers the aural warning, the ELAC applies the nose-up pitch protection, and the FAC calculates the speed tape V-speeds.",
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
      "FCOM SOP: To perform a dry crank (e.g. to clear fuel or lower EGT), set the Mode selector to CRANK and press the manual start button.",
  },
  {
    id: 458,
    theme: "Limitations",
    question: "What is the max continuous thrust EGT limit for the CFM engine?",
    options: ["950°C", "725°C", "625°C", "915°C"],
    correct: 3,
    explanation:
      "FCOM LIM: The Maximum Continuous Thrust (MCT) EGT limit for the CFM56 engine is 915°C.",
  },
  {
    id: 459,
    theme: "Flight Controls",
    question:
      "Which flight control computers receive inputs from the sidestick?",
    options: ["ELAC, SEC and FAC", "ELAC and SEC", "SEC only", "ELAC only"],
    correct: 1,
    explanation:
      "FCOM: The ELACs and SECs directly receive and process pilot inputs from the sidesticks for pitch and roll.",
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
      "FCOM: Pushing both buttons to OVRD configures the system for smoke removal. Conditioned air is used, and the Blower fan stops.",
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
    explanation:
      "FCOM: A Level 3 alert indicates an emergency requiring immediate crew action. It is accompanied by a Continuous Repetitive Chime (CRC) and a flashing red Master Warning light.",
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
      "FCOM: Loss of both Cabin Pressure Controllers means automatic pressurization is lost. The crew must select MAN mode and manually control the outflow valve.",
  },
  {
    id: 463,
    theme: "Powerplant",
    question:
      "During a single engine taxi, engine 1 is running and engine 2 is off. What happens when the ENG MODE selector is moved from NORM to IGN/START?",
    options: [
      "The engine 2 FADEC is powered ready for engine start only.",
      "The ENG SD page appears, the engine 2 FADEC is powered (amber crosses disappear for engine parameters), and the pack valves close. Continuous ignition for engine 1 has been manually selected.",
      "There will be no impact to engine 2 because its FADEC is already powered by the aircraft electrical system, and the SD page will already be displayed. Continuous ignition, using one igniter (A or B), will be selected for engine 1.",
      "Continuous ignition, using both ignitors (A+B), will be selected for both engines",
    ],
    correct: 1,
    explanation:
      "OM-B Section 2.3.10.2 One Engine Taxi at Departure instructs to set the ENG MODE selector to IGN/START, then announce 'ENG 2 START' and set the MASTER lever to ON.",
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
      "FCOM: All flight control surfaces on the A320 are electrically controlled (fly-by-wire) and hydraulically actuated (with mechanical backup for the rudder and THS).",
  },
  {
    id: 465,
    theme: "Systems - Air/Press",
    question:
      "The thrust levers are moved to the TOGA detent during takeoff. Which configuration would you expect the avionics ventilation system to select if the OAT is 40°C?",
    options: ["Closed", "Normal", "Intermediate", "Open"],
    correct: 0,
    explanation:
      "FCOM: Even if the open configuration was active on the ground due to high OAT, applying takeoff power automatically switches the avionics ventilation to the closed configuration to ensure hull pressurization.",
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
      "FCOM: Green Dot speed is the engine-out operating speed in the clean configuration, representing the best lift-to-drag ratio speed.",
  },
  {
    id: 467,
    theme: "ECAM / Displays",
    question: "Which computer generates amber cautions?",
    options: ["DU", "FWC", "DMC", "SDAC"],
    correct: 1,
    explanation:
      "FCOM: Flight Warning Computers (FWCs) generate red warnings and amber cautions, as well as aural alerts.",
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
      "FCOM: T.O. INHIBIT suppresses non-critical warnings during the takeoff roll and initial climb, typically from applying takeoff power until 1,500 ft.",
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
      "FCOM: The system has two identical controllers. If the active one fails, the standby controller automatically takes over with no loss of system function.",
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
      "FCOM: The approach phase activates automatically passing the DECEL waypoint if NAV, LOC*, or LOC is engaged, or it can be manually activated via the MCDU PERF page.",
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
      "FCOM: Wing anti-ice can be supplied by a single engine if the crossbleed valve is opened and one pack is turned off to ensure sufficient bleed pressure.",
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
      "FCOM: The FAC performs 4 main functions (or channels of operation): Yaw damping, Rudder trim, Rudder Travel Limitation, and Flight Envelope computations.",
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
      "FCOM: During an RTO, the autobrake (if set to MAX) is triggered by the ground spoiler extension command, which occurs when wheel speed > 72 kt and thrust levers are at idle.",
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
      "FCOM: Modulated idle is the default idle mode. Approach idle is selected when flaps are extended (Config 1, 2, 3 or FULL) to allow rapid acceleration for go-around.",
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
    explanation:
      "FCOM: ADIRU 3 acts as the standby unit and can supply data to DMC 1, DMC 2, or DMC 3 depending on the selections made on the switching panel.",
  },
  {
    id: 476,
    theme: "Navigation",
    question:
      "Which computer controls all datalink communications between the aircraft and the ground (Airline and or ATC)?",
    options: ["RMP", "FMGC", "MCDU", "ATSU"],
    correct: 3,
    explanation:
      "FCOM: The Air Traffic Services Unit (ATSU) manages datalink communications, routing messages via VHF or SATCOM.",
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
      "FCOM: If an ND fails, its image can be manually transferred to the adjacent PFD screen using the PFD/ND transfer switch.",
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
      "FCOM: VHF 1 is on the upper fuselage, VHF 2 is on the lower fuselage, and VHF 3 (if installed) is on the upper fuselage.",
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
    explanation:
      "FCOM: Maximum pitch up is limited to 30° in config 0, 1, 2, and 3. It is reduced to 25° in config FULL, and further reduced at low speeds.",
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
      "FCOM: LDG INHIBIT appears below 800 ft RA to suppress non-essential warnings during the final approach and landing phase.",
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
      "FCOM: WTBs activate for asymmetry, overspeed, symmetrical runaway, or uncommanded movement. The slat and flap systems are independent; if slat WTBs activate, flaps can still operate, and vice versa.",
  },
  {
    id: 482,
    theme: "ECAM / Displays",
    question:
      "On the ECAM display, which colour is used to make the crew aware of an abnormal configuration or failure, and no immediate action is required?",
    options: ["Red", "Blue", "Amber", "White"],
    correct: 2,
    explanation:
      "FCOM: Amber is used for cautions indicating a failure that requires crew awareness but not immediate action.",
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
      "FCOM: The PTU operates automatically if the differential pressure exceeds 500 PSI. It is inhibited during the first engine start to prevent spurious operation, and when cargo doors operate.",
  },
  {
    id: 484,
    theme: "Performance / EFB",
    question: "What is maximum value of Approach Correction?",
    options: ["5 kt", "15 kt", "10 kt"],
    correct: 1,
    explanation:
      "FCOM: The maximum allowed approach speed correction (APPR COR) is generally limited to +15 knots (or 1/3 headwind + full gust depending on exact FMGC standard).",
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
      "FCOM: Ground Speed (GS) and True Airspeed (TAS) are continuously displayed in the top left corner of the Navigation Display across all modes.",
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
      "FCOM: Priority valves cut off hydraulic power to heavy load users (like landing gear or high-lift devices) to maintain pressure for essential flight controls if system pressure drops.",
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
      "FCOM: The parking brake bypasses the normal and alternate braking servo valves and directly applies Yellow system or accumulator pressure to the brakes.",
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
      "FCOM: Closing the stowage box door and pressing the RESET/TEST slide shuts off oxygen flow and switches the audio system back to the standard boom microphone.",
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
      "FCOM: VHF 3 is the primary transceiver dedicated to ACARS/datalink communications via the ATSU.",
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
      "FCOM: The amber DISCH light illuminates when the pressure switch detects that the fire extinguisher bottle has discharged/lost pressure.",
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
      "FCOM: Setting ATT HDG to CAPT 3 replaces the Captain's normal attitude/heading source (ADIRU 1) with ADIRU 3. Leaving AIR DATA in NORM keeps ADIRU 1 as the source for air data.",
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
    explanation:
      "FCOM: Depending on the aircraft equipment and location, datalink can be routed via VHF (primary), SATCOM (oceanic/remote), or HF.",
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
      "FCOM: Pressing and releasing the Engine or APU FIRE pushbutton arms the squibs, causing the SQUIB lights to illuminate white.",
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
      "FCOM: The ON/OFF switch on the Radio Management Panel powers the panel itself. The ACP (Audio Control Panel) is powered separately.",
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
      "FCOM: Pushing the APPR pb arms the modes, but the scales and deviations are only displayed on the PFD if the LS pushbuttons on the EFIS control panels are active.",
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
      "FCOM: In AUTO, the crossbleed valve automatically opens when the APU bleed is selected ON, and engine bleed valves close to prioritize APU bleed.",
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
      "FCOM: The APU is ready and the AVAIL light illuminates when the APU rotor speed (N) reaches 95%.",
  },
  {
    id: 498,
    theme: "ECAM / Displays",
    question:
      "Which ECAM alert level signifies a dangerous configuration, flight condition or a system failure that alters flight safety?",
    options: ["Level 3", "Advisory", "Level 2", "Level 1"],
    correct: 0,
    explanation:
      "FCOM: Level 3 (Red) alerts require immediate crew action as the aircraft is in a dangerous configuration or experiencing a severe failure.",
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
      "FCOM: The handle must be pulled and turned clockwise three times. This mechanically isolates the hydraulics, unlocks the doors, and releases the gear uplocks.",
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
      "FCOM: The FADEC alternates between igniter A and B for successive ground auto starts. In flight or for manual starts, both igniters operate simultaneously.",
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
      "FCOM: Engine fire detection loops cover three critical areas: the pylon nacelle, the engine core, and the fan section.",
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
      "OM-B Section 2.3.7.1 At Pushback/Start Clearance states that 'NW STRG DISC' is displayed in green during normal pushback, but it appears amber if at least one engine is running during pushback to alert the crew.",
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
      "FCOM: To prevent asymmetric roll or drag, the failed spoiler retracts, and its counterpart on the opposite wing is automatically inhibited by the system.",
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
      "FCOM LIM: Using APU bleed air to supply the Wing Anti-Ice system is strictly prohibited.",
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
      "FCOM: If the airspeed (and therefore N2 windmilling speed) is high enough, the FADEC will perform a windmilling start without using the starter motor.",
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
      "FCOM: The Speed Reference System (SRS) requires V2 to calculate its target pitch. Without V2 entered, SRS mode cannot arm or engage.",
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
      "FCOM: Amber (Level 2) indicates a fault or abnormal condition that requires crew awareness but not immediate action.",
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
      "FCOM: To ensure adequate flow, the system forces HIGH flow automatically when APU bleed is the source or if one pack is operating alone.",
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
      "FCOM: Pressing the NAV key on the RMP bypasses the failed FMGCs, allowing manual tuning of the navaids.",
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
      "FCOM: In Dual Mode, both FMGCs operate in sync, continuously exchanging data and monitoring each other.",
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
      "FCOM: Bleed air from the pneumatic system is used to pressurize the potable water tanks to push water to the galleys and lavatories.",
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
      "FCOM: Standard RMP tuning uses the outer knob for the whole MHz values and the inner knob for the kHz decimals.",
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
      "FCOM: Windshield heating turns on automatically at low power on the ground (if an engine is running) and shifts to normal power in flight.",
  },
  {
    id: 514,
    theme: "Auto Flight / FMS",
    question: "What are the basic modes of the AP/FD?",
    options: ["HDG and V/S", "SPD and HDG", "ALT and NAV", "Pitch and roll"],
    correct: 0,
    explanation:
      "FCOM: If higher-level managed modes fail or are disconnected, the AP/FD reverts to basic selected modes: HDG (lateral) and V/S (vertical).",
  },
  {
    id: 515,
    theme: "Landing Gear",
    question:
      "If the rudder pedals are at full deflection at normal taxi speed what will the NWS angle be? (Degrees)",
    options: ["75°", "70°", "6°", "7°"],
    correct: 2,
    explanation:
      "FCOM: Rudder pedals provide a maximum of +/- 6 degrees of nose wheel steering for centerline tracking during takeoff/landing.",
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
      "FCOM: Both the wing and engine anti-ice valves are pneumatically operated. Without pneumatic pressure (hot air), springs force the valves to the closed position.",
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
      "FCOM: Even in a manual start, the FADEC passively monitors and automatically closes the start valve and cuts ignition at ~50% N2.",
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
      "FCOM: Selecting engine anti-ice illuminates the blue ON light on the pushbutton and displays a green ENG A.ICE memo on the E/WD.",
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
      "FCOM: The Integrated Standby Instrument System uses its own transducers connected to the standby pitot/static probes, but can also receive data from ADIRU 1 or 3.",
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
    correct: 0,
    explanation:
      "SOP: Similar to takeoff, a CG less than 29% is typically considered a forward CG for performance calculation purposes.",
  },
];
