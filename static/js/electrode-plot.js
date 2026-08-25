
// data describing the different data points
const csvData = `
  ,x,y,z,foundation_training,peers_evaluation,frc_eeg_evaluation
AF1,-0.018471700,0.079904100,0.032752000,false,true,false
AF10,0.050435200,0.063869800,-0.048005000,false,true,false
AF2,0.019820300,0.080301900,0.032764000,false,true,false
AF3,-0.033700700,0.076837100,0.021227000,true,true,true
AF4,0.035712300,0.077725900,0.021956000,true,true,true
AF5,-0.045430700,0.072862200,0.005978000,false,true,false
AF6,0.046584300,0.073807800,0.006034000,false,true,false
AF7,-0.054839700,0.068572200,-0.010590000,true,true,false
AF8,0.055743300,0.069656800,-0.010755000,true,true,false
AF9,-0.048970800,0.064087200,-0.047683000,false,true,false
AFZ,0.000231300,0.080771000,0.035417000,true,true,false
C1,-0.036158000,-0.009983900,0.089752000,true,true,false
C2,0.037672000,-0.009624100,0.088412000,true,true,false
C3,-0.065358100,-0.011631700,0.064358000,true,true,false
C4,0.067117900,-0.010900300,0.063580000,true,true,false
C5,-0.080280100,-0.013759700,0.029160000,true,true,false
C6,0.083455900,-0.012776300,0.029208000,true,true,false
CP1,-0.035513100,-0.047291900,0.091315000,true,true,false
CP2,0.038383800,-0.047073100,0.090695000,true,true,false
CP3,-0.063556200,-0.047008800,0.065624000,true,true,false
CP4,0.066611800,-0.046637200,0.065580000,true,true,false
CP5,-0.079592200,-0.046550700,0.030949000,true,true,false
CP6,0.083321800,-0.046101300,0.031206000,true,true,false
CPZ,0.000385800,-0.047318000,0.099432000,true,true,false
CZ,0.000400900,-0.009167000,0.100244000,true,false,false
F1,-0.027495800,0.056931100,0.060342000,true,true,false
F10,0.072114100,0.042066700,-0.050452000,false,true,false
F2,0.029514200,0.057601900,0.059540000,true,true,false
F3,-0.050243800,0.053111200,0.042192000,true,true,true
F4,0.051836200,0.054304800,0.040814000,true,true,true
F5,-0.064465800,0.048035300,0.016921000,true,true,false
F6,0.067914200,0.049829700,0.016367000,true,true,false
F7,-0.070262900,0.042474300,-0.011420000,true,true,true
F8,0.073043100,0.044421700,-0.012000000,true,true,true
F9,-0.070101900,0.041652300,-0.049952000,false,true,false
FC1,-0.034061900,0.026011100,0.079987000,true,true,false
FC2,0.034784100,0.026437900,0.078808000,true,true,false
FC3,-0.060181900,0.022716200,0.055544000,true,true,false
FC4,0.062293100,0.023722800,0.055630000,true,true,false
FC5,-0.077214900,0.018643300,0.024460000,true,true,true
FC6,0.079534100,0.019935700,0.024438000,true,true,true
FCZ,0.000376100,0.027390000,0.088668000,false,true,false
FP1,-0.029436700,0.083917100,-0.006990000,true,true,false
FP2,0.029872300,0.084895900,-0.007080000,true,true,false
FPZ,0.000112300,0.088247000,-0.001713000,false,true,false
FT10,0.084113100,0.014364700,-0.050538000,true,true,false
FT7,-0.080775000,0.014120300,-0.011135000,true,true,false
FT8,0.081815100,0.015416700,-0.011330000,true,true,false
FT9,-0.084075900,0.014567300,-0.050429000,true,true,false
FZ,0.000312200,0.058512000,0.066462000,true,true,false
IZ,0.000004500,-0.118565000,-0.023078000,false,true,false
O1,-0.029413400,-0.112449000,0.008839000,true,true,true
O10,0.029741600,-0.114260003,-0.029255999,false,true,false
O2,0.029842600,-0.112156000,0.008800000,true,true,true
O9,-0.029818401,-0.114569999,-0.029216001,false,true,false
OZ,0.000107600,-0.114892000,0.014657000,true,true,false
P1,-0.028620300,-0.080524900,0.075436000,true,true,false
P10,0.073894700,-0.074390300,-0.041220000,false,true,false
P2,0.031919700,-0.080487100,0.076716000,true,true,false
P3,-0.053007300,-0.078787800,0.055940000,true,true,false
P4,0.055666700,-0.078560200,0.056561000,true,true,false
P5,-0.067272300,-0.076290700,0.028382000,true,true,false
P6,0.067887700,-0.075904300,0.028091000,true,true,false
P7,-0.072434300,-0.073452700,-0.002487000,true,true,true
P8,0.073055700,-0.073068300,-0.002540000,true,true,true
P9,-0.073009300,-0.073765700,-0.040998000,false,true,false
PO1,-0.018972400,-0.101768000,0.046536000,false,true,false
PO10,0.054987600,-0.098091100,-0.035541000,true,true,false
PO2,0.019877600,-0.101793000,0.046393000,false,true,false
PO3,-0.036511400,-0.100852900,0.037167000,true,true,false
PO4,0.036781600,-0.100849100,0.036397000,true,true,false
PO5,-0.048424400,-0.099340800,0.021599000,false,true,false
PO6,0.049819600,-0.099446100,0.021727000,false,true,false
PO7,-0.054840400,-0.097527900,0.002792000,true,true,false
PO8,0.055666600,-0.097625100,0.002730000,true,true,false
PO9,-0.054910400,-0.098044800,-0.035465000,true,true,false
POZ,0.000215600,-0.102178000,0.050608000,true,true,false
PZ,0.000324700,-0.081115000,0.082615000,true,true,false
T10,0.085559900,-0.016361300,-0.048271000,false,true,false
T3,-0.084161100,-0.016018700,-0.009346000,true,true,false
T4,0.085079900,-0.015020300,-0.009490000,true,true,false
T5,-0.072434300,-0.073452700,-0.002487000,true,true,false
T6,0.073055700,-0.073068300,-0.002540000,true,true,false
T7,-0.084161100,-0.016018700,-0.009346000,true,true,true
T8,0.085079900,-0.015020300,-0.009490000,true,true,true
T9,-0.085894100,-0.015828700,-0.048283000,false,true,false
TP10,0.086161800,-0.047035300,-0.045869000,true,true,false
TP7,-0.084830200,-0.046021700,-0.007056000,true,true,false
TP8,0.085548800,-0.045545300,-0.007130000,true,true,false
TP9,-0.085619200,-0.046514700,-0.045707000,true,true,false

`;

// use generatePlot when the HTML structure is built
document.addEventListener('DOMContentLoaded', generatePlot);

function generatePlot() {

   // process the data by removing whitespaces, splitting the csv in rows and defining the column hedaers
   const lines = csvData.trim().split(/\r?\n/);
   const headers = lines[0].split(',');

   // define columns based on their headlines rather than their position
   const xCol = headers.indexOf('x');
   const yCol = headers.indexOf('y');
   const zCol = headers.indexOf('z');
   const trainingCol = headers.indexOf('foundation_training');
   const testColPeers = headers.indexOf('peers_evaluation');

   // define possible groups
   const groups = {

     foundationTraining: {
       name: 'channels present in foundation training',
       x: [], y: [], z: [], text: []
     },
     peersEvaluation: {
       name: 'unseen channels during training',
       x: [], y: [], z: [], text: []
     },
   };

   for (let i = 1; i < lines.length; i++) {
     const row = lines[i].split(',');

     // string comparison as row[...] contains strings
     const training = row[trainingCol] === 'true';
     const peersEvaluation = row[testColPeers] === 'true';

     // make reassignment of groups possible with 'let' instead of 'const'
     let group;

     // assign groups to the channels prioritizing the training variable
     if (training) {
       group = groups.foundationTraining;

     } else if (peersEvaluation) {
       group = groups.peersEvaluation;

     } else {
       continue;
     }

     // store float representation of coordinates
     group.x.push(parseFloat(row[xCol]));
     group.y.push(parseFloat(row[yCol]));
     group.z.push(parseFloat(row[zCol]));
     group.text.push(row[0]);
   }

   // generate plot trace
   const plotTraces = Object.values(groups)
     .filter(group => group.x.length > 0)
     .map(group => ({
       x: group.x,
       y: group.y,
       z: group.z,
       text: group.text,

       // make interaction with the plot possible
       hovertemplate:
       '<b>%{text}</b><br>' +
       'x: %{x:.8f}<br>' +
       'y: %{y:.8f}<br>' +
       'z: %{z:.8f}' +
       '<extra>%{fullData.name}</extra>',

       // define plot and data points
       mode: 'markers',
       type: 'scatter3d',
       name: group.name,
       marker: {
         size: 7,


       }
     }));

   const layout = {
     legend: {
       orientation: 'h',
       y: -0.15
     },
     scene: {
       xaxis: { title: 'X' },
       yaxis: { title: 'Y' },
       zaxis: { title: 'Z' }
     },
     margin: { l: 0, r: 0, b: 0, t: 40 }
   };

   // generate plot
   Plotly.newPlot('plotter', plotTraces, layout, {
     responsive: true
   });
}