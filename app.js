const brain = require('brain.js'); // Define training data
const trainingData = [
// { input: { 'Arsenal': 1, 'Chelsea': 0 }, output: { 'Arsenal': 1 } },
// { input: { 'Arsenal': 0, 'Chelsea': 1 }, output: { 'Chelsea': 1 } },
// { input: { 'Arsenal': 1, 'Liverpool': 0 }, output: { 'Arsenal': 1 } },
// { input: { 'Arsenal': 0, 'Liverpool': 1 }, output: { 'Liverpool': 1 } },
// { input: { 'Chelsea': 1, 'Liverpool': 0 }, output: { 'Chelsea': 1 } },
// { input: { 'Chelsea': 0, 'Liverpool': 1 }, output: { 'Liverpool': 1 } },
// { input: { 'ManchesterCity': 0, 'ManchesterUnited': 1 }, output: { 'ManchesterUnited': 1 } },
// { input: { 'Arsenal': 0, 'ManchesterUnited': 1 }, output: { 'ManchesterUnited': 1 } },
{input: { HullCity: 1, QPR: 0 }, output: {HullCity: 1} },
{input: { HullCity: 0.5, Sunderland: 0.5 }, output: {Tie: 1} },
{input: { HullCity: 0, Chelsea: 1 }, output: {Chelsea: 1} },
{input: { HullCity: 1, Liverpool: 0 }, output: {HullCity: 1} },
{input: { HullCity: 0, Arsenal: 1 }, output: {HullCity: 1} },
{input: { HullCity: 0, Burnley: 1 }, output: {Burnley: 1} },
{input: { HullCity: 0.5, ManchesterUnited: 0.5 }, output: {Tie: 1} },
{input: { LeicesterCity: 0.5, Everton: 0.5 }, output: {Tie: 1} },
{input: { LeicesterCity: 0.5, Arsenal: 0.5 }, output: {Tie: 1} },
{input: { LeicesterCity: 1, ManchesterUnited: 0 }, output: {LeicesterCity: 1} },
{input: { LeicesterCity: 0.5, Burnley: 0.5 }, output: {Tie: 1} },
{input: { LeicesterCity: 0, WestBrom: 1 }, output: {WestBrom: 1} },
{input: { LeicesterCity: 0.5, Sunderland: 0.5 }, output: {Tie: 1} },
{input: { LeicesterCity: 0, Liverpool: 1 }, output: {Liverpool: 1} },
{input: { LeicesterCity: 0, ManchesterCity: 1 }, output: {ManchesterCity: 1} },
{input: { LeicesterCity: 0, Tottenham: 1 }, output: {Tottenham: 1} },
{input: { LeicesterCity: 1, AstonVilla: 0 }, output: {LeicesterCity: 1} },
{input: { LeicesterCity: 0, StokeCity: 1 }, output: {StokeCity: 1} },
{input: { LeicesterCity: 0, CrystalPalace: 1 }, output: {CrystalPalace: 1} },
{input: { LeicesterCity: 0.5, HullCity: 0.5 }, output: {Tie: 1} },
{input: { LeicesterCity: 1, WestHam: 0 }, output: {LeicesterCity: 1} },
{input: { LeicesterCity: 1, Swansea: 0 }, output: {LeicesterCity: 1} },
{input: { LeicesterCity: 0, Chelsea: 1 }, output: {Chelsea: 1} },
{input: { LeicesterCity: 1, Newcastle: 0 }, output: {LeicesterCity: 1} },
{input: { LeicesterCity: 1, Southampton: 0 }, output: {LeicesterCity: 1} },
{input: { LeicesterCity: 1, QPR: 0 }, output: {LeicesterCity: 1} },
{input: { Liverpool: 1, Southampton: 0 }, output: {Liverpool: 1} },
{input: { Liverpool: 0, AstonVilla: 1 }, output: {AstonVilla: 1} },
{input: { Liverpool: 0.5, Everton: 0.5 }, output: {Tie: 1} },
{input: { Liverpool: 1, WestBrom: 0 }, output: {Liverpool: 1} },
{input: { Liverpool: 0.5, HullCity: 0.5 }, output: {Tie: 1} },
{input: { Liverpool: 0, Chelsea: 1 }, output: {Chelsea: 1} },
{input: { Liverpool: 1, StokeCity: 0 }, output: {Liverpool: 1} },
{input: { Liverpool: 0.5, Sunderland: 0.5 }, output: {Tie: 1} },
{input: { Liverpool: 0.5, Arsenal: 0.5 }, output: {Tie: 1} },
{input: { Liverpool: 1, Swansea: 0 }, output: {Liverpool: 1} },
{input: { Liverpool: 0.5, LeicesterCity: 0.5 }, output: {Tie: 1} },
{input: { Liverpool: 1, WestHam: 0 }, output: {Liverpool: 1} },
{input: { Liverpool: 1, Tottenham: 0 }, output: {Liverpool: 1} },
{input: { Liverpool: 1, ManchesterCity: 0 }, output: {Liverpool: 1} },
{input: { Liverpool: 1, Burnley: 0 }, output: {Liverpool: 1} },
{input: { Liverpool: 0, ManchesterUnited: 1 }, output: {ManchesterUnited: 1} },
{input: { Liverpool: 1, Newcastle: 0 }, output: {Liverpool: 1} },
{input: { Liverpool: 1, QPR: 0 }, output: {Liverpool: 1} },
{input: { Liverpool: 0, CrystalPalace: 1 }, output: {CrystalPalace: 1} },
{input: { ManchesterCity: 1, Liverpool: 0 }, output: {ManchesterCity: 1} },
{input: { ManchesterCity: 0, StokeCity: 1 }, output: {StokeCity: 1} },
{input: { ManchesterCity: 0.5, Chelsea: 0.5 }, output: {Tie: 1} },
{input: { ManchesterCity: 1, Tottenham: 0 }, output: {ManchesterCity: 1} },
{input: { ManchesterCity: 1, ManchesterUnited: 0 }, output: {ManchesterCity: 1} },
{input: { ManchesterCity: 1, Swansea: 0 }, output: {ManchesterCity: 1} },
{input: { ManchesterCity: 1, Everton: 0 }, output: {ManchesterCity: 1} },
{input: { ManchesterCity: 1, CrystalPalace: 0 }, output: {ManchesterCity: 1} },
{input: { ManchesterCity: 0.5, Burnley: 0.5 }, output: {Tie: 1} },
{input: { ManchesterCity: 1, Sunderland: 0 }, output: {ManchesterCity: 1} },
{input: { ManchesterCity: 0, Arsenal: 1 }, output: {Arsenal: 1} },
{input: { ManchesterCity: 0.5, HullCity: 0.5 }, output: {Tie: 1} },
{input: { ManchesterCity: 1, Newcastle: 0 }, output: {ManchesterCity: 1} },
{input: { ManchesterCity: 1, LeicesterCity: 0 }, output: {ManchesterCity: 1} },
{input: { ManchesterCity: 1, WestBrom: 0 }, output: {ManchesterCity: 1} },
{input: { ManchesterCity: 1, WestHam: 0 }, output: {ManchesterCity: 1} },
{input: { ManchesterCity: 1, AstonVilla: 0 }, output: {ManchesterCity: 1} },
{input: { ManchesterCity: 1, QPR: 0 }, output: {ManchesterCity: 1} },
{input: { ManchesterCity: 1, Southampton: 0 }, output: {ManchesterCity: 1} },
{input: { ManchesterUnited: 0, Swansea: 1 }, output: {Swansea: 1} },
{input: { ManchesterUnited: 1, QPR: 0 }, output: {ManchesterUnited: 1} },
{input: { ManchesterUnited: 1, WestHam: 0 }, output: {ManchesterUnited: 1} },
{input: { ManchesterUnited: 1, Everton: 0 }, output: {ManchesterUnited: 1} },
{input: { ManchesterUnited: 0.5, Chelsea: 0.5 }, output: {Tie: 1} },
{input: { ManchesterUnited: 1, CrystalPalace: 0 }, output: {ManchesterUnited: 1} },
{input: { ManchesterUnited: 1, HullCity: 0 }, output: {ManchesterUnited: 1} },
{input: { ManchesterUnited: 1, StokeCity: 0 }, output: {ManchesterUnited: 1} },
{input: { ManchesterUnited: 1, Liverpool: 0 }, output: {ManchesterUnited: 1} },
{input: { ManchesterUnited: 1, Newcastle: 0 }, output: {ManchesterUnited: 1} },
{input: { ManchesterUnited: 0, Southampton: 1 }, output: {Southampton: 1} },
{input: { ManchesterUnited: 1, LeicesterCity: 0 }, output: {ManchesterUnited: 1} },
{input: { ManchesterUnited: 1, Burnley: 0 }, output: {ManchesterUnited: 1} },
{input: { ManchesterUnited: 1, Sunderland: 0 }, output: {ManchesterUnited: 1} },
{input: { ManchesterUnited: 1, Tottenham: 0 }, output: {ManchesterUnited: 1} },
{input: { ManchesterUnited: 1, AstonVilla: 0 }, output: {ManchesterUnited: 1} },
{input: { ManchesterUnited: 1, ManchesterCity: 0 }, output: {ManchesterUnited: 1} },
{input: { ManchesterUnited: 0, WestBrom: 1 }, output: {WestBrom: 1} },
{input: { ManchesterUnited: 0.5, Arsenal: 0.5 }, output: {Tie: 1} },
{input: { Newcastle: 0, ManchesterCity: 1 }, output: {ManchesterCity: 1} },
{input: { Newcastle: 0.5, CrystalPalace: 0.5 }, output: {Tie: 1} },
{input: { Newcastle: 0.5, HullCity: 0.5 }, output: {Tie: 1} },
{input: { Newcastle: 1, LeicesterCity: 0 }, output: {Newcastle: 1} },
{input: { Newcastle: 1, Liverpool: 0 }, output: {Newcastle: 1} },
{input: { Newcastle: 1, QPR: 0 }, output: {Newcastle: 1} },
{input: { Newcastle: 1, Chelsea: 0 }, output: {Newcastle: 1} },
{input: { Newcastle: 0, Sunderland: 1 }, output: {Sunderland: 1} },
{input: { Newcastle: 1, Everton: 0 }, output: {Newcastle: 1} },
{input: { Newcastle: 0.5, Burnley: 0.5 }, output: {Tie: 1} },
{input: { Newcastle: 0, Southampton: 1 }, output: {Southampton: 1} },
{input: { Newcastle: 0.5, StokeCity: 0.5 }, output: {Tie: 1} },
{input: { Newcastle: 1, AstonVilla: 0 }, output: {Newcastle: 1} },
{input: { Newcastle: 0, ManchesterUnited: 1 }, output: {ManchesterUnited: 1} },
{input: { Newcastle: 0, Arsenal: 1 }, output: {Arsenal: 1} },
{input: { Newcastle: 0, Tottenham: 1 }, output: {Newcastle: 1} },
{input: { Newcastle: 0, Swansea: 1 }, output: {Swansea: 1} },
{input: { Newcastle: 0.5, WestBrom: 0.5 }, output: {Tie: 1} },
{input: { Newcastle: 1, WestHam: 0 }, output: {Newcastle: 1} },
{input: { QPR: 0, HullCity: 1 }, output: {HullCity: 1} },
{input: { QPR: 1, Sunderland: 0 }, output: {QPR: 1} },
{input: { QPR: 0.5, StokeCity: 0.5 }, output: {Tie: 1} },
{input: { QPR: 0, Liverpool: 1 }, output: {Liverpool: 1} },
{input: { QPR: 1, AstonVilla: 0 }, output: {QPR: 1} },
{input: { QPR: 0.5, ManchesterCity: 0.5 }, output: {Tie: 1} },
{input: { QPR: 1, LeicesterCity: 0 }, output: {QPR: 1} },
{input: { QPR: 1, Burnley: 0 }, output: {QPR: 1} },
{input: { QPR: 1, WestBrom: 0 }, output: {QPR: 1} },
{input: { QPR: 0.5, CrystalPalace: 0.5 }, output: {Tie: 1} },
{input: { QPR: 0.5, Swansea: 0.5 }, output: {Tie: 1} },
{input: { QPR: 0, ManchesterUnited: 1 }, output: {ManchesterUnited: 1} },
{input: { QPR: 0, Southampton: 1 }, output: {Southampton: 1} },
{input: { QPR: 0, Arsenal: 1 }, output: {Arsenal: 1} },
{input: { QPR: 0, Tottenham: 1 }, output: {Tottenham: 1} },
{input: { QPR: 0, Everton: 1 }, output: {Everton: 1} },
{input: { QPR: 0, Chelsea: 1 }, output: {Chelsea: 1} },
{input: { QPR: 0.5, WestHam: 0.5 }, output: {Tie: 1} },
{input: { QPR: 1, Newcastle: 0 }, output: {QPR: 1} },
{input: { Southampton: 0.5, WestBrom: 0.5 }, output: {Tie: 1} },
{input: { Southampton: 1, Newcastle: 0 }, output: {Southampton: 1} },
{input: { Southampton: 1, QPR: 0 }, output: {Southampton: 1} },
{input: { Southampton: 1, Sunderland: 0 }, output: {Southampton: 1} },
{input: { Southampton: 1, StokeCity: 0 }, output: {Southampton: 1} },
{input: { Southampton: 1, LeicesterCity: 0 }, output: {Southampton: 1} },
{input: { Southampton: 0, ManchesterCity: 1 }, output: {ManchesterCity: 1} },
{input: { Southampton: 0, ManchesterUnited: 1 }, output: {ManchesterUnited: 1} },
{input: { Southampton: 1, Everton: 0 }, output: {Southampton: 1} },
{input: { Southampton: 0.5, Chelsea: 0.5 }, output: {Tie: 1} },
{input: { Southampton: 1, Arsenal: 0 }, output: {Southampton: 1} },
{input: { Southampton: 0, Swansea: 1 }, output: {Swansea: 1} },
{input: { Southampton: 0.5, WestHam: 0.5 }, output: {Tie: 1} },
{input: { Southampton: 0, Liverpool: 1 }, output: {Liverpool: 1} },
{input: { Southampton: 1, CrystalPalace: 0 }, output: {Southampton: 1} },
{input: { Southampton: 1, Burnley: 0 }, output: {Southampton: 1} },
{input: { Southampton: 1, Hull: 0 }, output: {Southampton: 1} },
{input: { Southampton: 0.5, Tottenham: 0.5 }, output: {Tie: 1} },
{input: { Southampton: 1, AstonVilla: 0 }, output: {Southampton: 1} },
{input: { StokeCity: 0, AstonVilla: 1 }, output: {AstonVilla: 1} },
{input: { StokeCity: 0, LeicesterCity: 1 }, output: {LeicesterCity: 1} },
{input: { StokeCity: 1, Newcastle: 0 }, output: {StokeCity: 1} },
{input: { StokeCity: 1, Swansea: 0 }, output: {StokeCity: 1} },
{input: { StokeCity: 0.5, WestHam: 0.5 }, output: {Tie: 1} },
{input: { StokeCity: 0, Burnley: 1 }, output: {Burnley: 1} },
{input: { StokeCity: 1, Arsenal: 0 }, output: {StokeCity: 1} },
{input: { StokeCity: 0, Chelsea: 1 }, output: {Chelsea: 1} },
{input: { StokeCity: 1, WestBrom: 0 }, output: {StokeCity: 1} },
{input: { StokeCity: 0.5, ManchesterUnited: 0.5 }, output: {Tie: 1} },
{input: { StokeCity: 1, QPR: 0 }, output: {StokeCity: 1} },
{input: { StokeCity: 0, ManchesterCity: 1 }, output: {ManchesterCity: 1} },
{input: { StokeCity: 1, HullCity: 0 }, output: {StokeCity: 1} },
{input: { StokeCity: 1, Everton: 0 }, output: {StokeCity: 1} },
{input: { StokeCity: 0, CrystalPalace: 1 }, output: {CrystalPalace: 1} },
{input: { StokeCity: 1, Southampton: 0 }, output: {StokeCity: 1} },
{input: { StokeCity: 0.5, Sunderland: 0.5 }, output: {Tie: 1} },
{input: { StokeCity: 1, Tottenham: 0 }, output: {StokeCity: 1} },
{input: { StokeCity: 1, Liverpool: 0 }, output: {StokeCity: 1} },
{input: { Sunderland: 0.5, ManchesterUnited: 0.5 }, output: {Tie: 1} },
{input: { Sunderland: 0.5, Tottenham: 0.5 }, output: {Tie: 1} },
{input: { Sunderland: 0.5, Swansea: 0.5 }, output: {Tie: 1} },
{input: { Sunderland: 1, StokeCity: 0 }, output: {Sunderland: 1} },
{input: { Sunderland: 0, Arsenal: 1 }, output: {Arsenal: 1} },
{input: { Sunderland: 0.5, Everton: 0.5 }, output: {Tie: 1} },
{input: { Sunderland: 0.5, Chelsea: 0.5 }, output: {Tie: 1} },
{input: { Sunderland: 0, ManchesterCity: 1 }, output: {ManchesterCity: 1} },
{input: { Sunderland: 0.5, WestHam: 0.5 }, output: {Tie: 1} },
{input: { Sunderland: 0, HullCity: 1 }, output: {HullCity: 1} },
{input: { Sunderland: 0, Liverpool: 1 }, output: {Liverpool: 1} },
{input: { Sunderland: 1, Burnley: 0 }, output: {Sunderland: 1} },
{input: { Sunderland: 0, QPR: 1 }, output: {QPR: 1} },
{input: { Sunderland: 0.5, WestBrom: 0.5 }, output: {Tie: 1} },
{input: { Sunderland: 0, AstonVilla: 1 }, output: {AstonVilla: 1} },
{input: { Sunderland: 1, Newcastle: 0 }, output: {Sunderland: 1} },
{input: { Sunderland: 0, CrystalPalace: 1 }, output: {CrystalPalace: 1} },
{input: { Sunderland: 1, Southampton: 0 }, output: {Sunderland: 1} },
{input: { Sunderland: 0.5, LeicesterCity: 0.5 }, output: {Tie: 1} },
{input: { Swansea: 1, Burnley: 0 }, output: {Swansea: 1} },
{input: { Swansea: 1, WestBrom: 0 }, output: {Swansea: 1} },
{input: { Swansea: 0, Southampton: 1 }, output: {Southampton: 1} },
{input: { Swansea: 0.5, Newcastle: 0.5 }, output: {Tie: 1} },
{input: { Swansea: 1, LeicesterCity: 0 }, output: {Swansea: 1} },
{input: { Swansea: 1, Arsenal: 0 }, output: {Swansea: 1} },
{input: { Swansea: 0.5, CrystalPalace: 0.5 }, output: {Tie: 1} },
{input: { Swansea: 1, QPR: 0 }, output: {Swansea: 1} },
{input: { Swansea: 0, Tottenham: 1 }, output: {Tottenham: 1} },
{input: { Swansea: 1, AstonVilla: 0 }, output: {Swansea: 1} },
{input: { Swansea: 0.5, WestHam: 0.5 }, output: {Tie: 1} },
{input: { Swansea: 0, Chelsea: 1 }, output: {Chelsea: 1} },
{input: { Swansea: 0.5, Sunderland: 0.5 }, output: {Tie: 1} },
{input: { Swansea: 1, ManchesterUnited: 0 }, output: {Swansea: 1} },
{input: { Swansea: 0, Liverpool: 1 }, output: {Liverpool: 1} },
{input: { Swansea: 1, HullCity: 0 }, output: {Swansea: 1} },
{input: { Swansea: 0.5, Everton: 0.5 }, output: {Tie: 1} },
{input: { Swansea: 1, StokeCity: 0 }, output: {Swansea: 1} },
{input: { Swansea: 0, ManchesterCity: 1 }, output: {ManchesterCity: 1} },
{input: { Tottenham: 1, QPR: 0 }, output: {Tottenham: 1} },
{input: { Tottenham: 0, Liverpool: 1 }, output: {Liverpool: 1} },
{input: { Tottenham: 0, WestBrom: 1 }, output: {WestBrom: 1} },
{input: { Tottenham: 1, Southampton: 0 }, output: {Tottenham: 1} },
{input: { Tottenham: 0, Newcastle: 1 }, output: {Newcastle: 1} },
{input: { Tottenham: 0, StokeCity: 1 }, output: {StokeCity: 1} },
{input: { Tottenham: 1, Everton: 0 }, output: {Tottenham: 1} },
{input: { Tottenham: 0.5, CrystalPalace: 0.5 }, output: {CrystalPalace: 1} },
{input: { Tottenham: 1, Burnley: 0 }, output: {Tottenham: 1} },
{input: { Tottenham: 0.5, ManchesterUnited: 0.5 }, output: {Tie: 1} },
{input: { Tottenham: 1, Chelsea: 0 }, output: {Tottenham: 1} },
{input: { Tottenham: 1, Sunderland: 0 }, output: {Tottenham: 1} },
{input: { Tottenham: 1, Arsenal: 0 }, output: {Tottenham: 1} },
{input: { Tottenham: 0.5, WestHam: 0.5 }, output: {Tie: 1} },
{input: { Tottenham: 1, Swansea: 0 }, output: {Tottenham: 1} },
{input: { Tottenham: 1, LeicesterCity: 0 }, output: {Tottenham: 1} },
{input: { Tottenham: 0, AstonVilla: 1 }, output: {AstonVilla: 1} },
{input: { Tottenham: 0, ManchesterCity: 1 }, output: {ManchesterCity: 1} },
{input: { Tottenham: 1, HullCity: 0 }, output: {Tottenham: 1} },
{input: { WestBrom: 0.5, Sunderland: 0.5 }, output: {Tie: 1} },
{input: { WestBrom: 0, Everton: 1 }, output: {Everton: 1} },
{input: { WestBrom: 1, Burnley: 0 }, output: {WestBrom: 1} },
{input: { WestBrom: 0.5, ManchesterUnited: 0.5 }, output: {Tie: 1} },
{input: { WestBrom: 0.5, CrystalPalace: 0.5 }, output: {Tie: 1} },
{input: { WestBrom: 0, Newcastle: 1 }, output: {Newcastle: 1} },
{input: { WestBrom: 0, Arsenal: 1 }, output: {Arsenal: 1} },
{input: { WestBrom: 0, WestHam: 1 }, output: {WestHam: 1} },
{input: { WestBrom: 1, AstonVilla: 0 }, output: {WestBrom: 1} },
{input: { WestBrom: 0, ManchesterCity: 1 }, output: {ManchesterCity: 1} },
{input: { WestBrom: 1, HullCity: 0 }, output: {WestBrom: 1} },
{input: { WestBrom: 0, Tottenham: 1 }, output: {Tottenham: 1} },
{input: { WestBrom: 1, Swansea: 0 }, output: {WestBrom: 1} },
{input: { WestBrom: 1, Southampton: 0 }, output: {WestBrom: 1} },
{input: { WestBrom: 1, StokeCity: 0 }, output: {WestBrom: 1} },
{input: { WestBrom: 0, QPR: 1 }, output: {QPR: 1} },
{input: { WestBrom: 0, LeicesterCity: 1 }, output: {LeicesterCity: 1} },
{input: { WestBrom: 0.5, Liverpool: 0.5 }, output: {Liverpool: 1} },
{input: { WestBrom: 1, Chelsea: 0 }, output: {WestBrom: 1} },
{input: { WestHam: 0.5, Tottenham: 0.5 }, output: {Tie: 1} },
{input: { WestHam: 0, Southampton: 1 }, output: {Southampton: 1} },
{input: { WestHam: 1, Liverpool: 0 }, output: {WestHam: 1} },
{input: { WestHam: 0.5, QPR: 0.5 }, output: {Tie: 1} },
{input: { WestHam: 0.5, ManchesterCity: 0.5 }, output: {Tie: 1} },
{input: { WestHam: 0, AstonVilla: 1 }, output: {Newcastle: 1} },
{input: { WestHam: 0, Newcastle: 1 }, output: {Arsenal: 1} },
{input: { WestHam: 0, Swansea: 1 }, output: {WestHam: 1} },
{input: { WestHam: 1, LeicesterCity: 0 }, output: {WestHam: 1} },
{input: { WestHam: 0, Arsenal: 1 }, output: {Arsenal: 1} },
{input: { WestHam: 1, WestBrom: 0 }, output: {WestHam: 1} },
{input: { WestHam: 0, HullCity: 1 }, output: {HullCity: 1} },
{input: { WestHam: 1, ManchesterUnited: 0 }, output: {WestHam: 1} },
{input: { WestHam: 1, CrystalPalace: 0 }, output: {WestHam: 1} },
{input: { WestHam: 1, Chelsea: 0 }, output: {WestHam: 1} },
{input: { WestHam: 0, Sunderland: 1 }, output: {Sunderland: 1} },
{input: { WestHam: 0, StokeCity: 1 }, output: {StokeCity: 1} },
{input: { WestHam: 0.5, Burnley: 0.5 }, output: {Tie: 1} },
{input: { WestHam: 1, Everton: 0 }, output: {WestHam: 1} },

//season 2019-2022


// ...more data
];// Create a neural network
const net = new brain.NeuralNetwork();// Train the neural network
net.train(trainingData);// Make a prediction
const queryInput = { Arsenal: 1, Chelsea: 0 };


const queryOutput = net.run(queryInput);

console.log(queryOutput); // { 'Arsenal': 0.999 }