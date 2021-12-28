var setA503 = false;
var setNAUF = false;
var setB1 = false;
var setB2 = false;
var setC1 = false;
var setC2 = false;
var setZFA503C2 = false;
var setZFA503C1 = false;
var stateW1 = true;

var pressed503 = false;
var pressedBUeUe = false;
var pressedA503 = false;
var pressedBUeTh = false;
var pressedGLS32 = false;
var pressedBUeGo = false;
var pressedB2 = false;
var pressedGLS2 = false;
var pressedBVNZ = false;
var pressedC2 = false;
var pressedGLS92 = false;
var pressedA509 = false;
var pressedBUeUn = false;
var pressedBUeGom = false;
var pressedBUeOb = false;
var pressed509 = false;
var pressedBUeOb = false;
var pressedB1 = false;
var pressedGLS1 = false;
var pressedC1 = false;
var pressedNAUF = false;

window.onload = () => {

document.getElementById("button503").style.borderStyle = "outset";
document.getElementById("buttonBUeUe").style.borderStyle = "outset";
document.getElementById("buttonA503").style.borderStyle = "outset";
document.getElementById("buttonBUeTh").style.borderStyle = "outset";
document.getElementById("buttonGLS32").style.borderStyle = "outset";
document.getElementById("buttonBUeGo").style.borderStyle = "outset";
document.getElementById("buttonB2").style.borderStyle = "outset";
document.getElementById("buttonGLS2").style.borderStyle = "outset";
document.getElementById("buttonBVNZ").style.borderStyle = "outset";
document.getElementById("buttonC2").style.borderStyle = "outset";
document.getElementById("buttonGLS92").style.borderStyle = "outset";
document.getElementById("buttonA509").style.borderStyle = "outset";
document.getElementById("buttonBUeUn").style.borderStyle = "outset";
document.getElementById("buttonBUeGom").style.borderStyle = "outset";
document.getElementById("buttonBUeOb").style.borderStyle = "outset";
document.getElementById("button509").style.borderStyle = "outset";
document.getElementById("buttonBUeOb").style.borderStyle = "outset";
document.getElementById("buttonB1").style.borderStyle = "outset";
document.getElementById("buttonGLS1").style.borderStyle = "outset";
document.getElementById("buttonC1").style.borderStyle = "outset"; /* Nr. 20 */

document.getElementById("W11l").style.background = "white";
document.getElementById("W21r").style.background = "white";

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

  
function signal_A503() {
  
  if(pressedA503 == false){
    setA503 = true;
    pressedA503 = true;
    document.getElementById("buttonA503").style.borderStyle = "inset";}

  else if(pressedA503 == true){
    document.getElementById("buttonA503").style.borderStyle = "outset";
    pressedA503 = false;
    setA503 = false;
  }

}
 

function N_AUF(){

  if(pressedNAUF == false){
    setNAUF = true;
    pressedNAUF = true;
    document.getElementById("buttonNAUF").style.borderStyle = "inset";
  
  }
  else if(pressedNAUF == true){
      document.getElementById("buttonNAUF").style.borderStyle = "outset";
      pressedNAUF = false;
      setNAUF = false;
  }

  console.log (pressedNAUF);
}

function signal_B1() {
  
  if(pressedB1 == false){
    setB1 = true;
    pressedB1 = true;
    document.getElementById("buttonB1").style.borderStyle = "inset";}

  else if(pressedB1 == true){
    document.getElementById("buttonB1").style.borderStyle = "outset";
    pressedB1 = false;
    setB1 = false;
  }

}

function signal_B2() {
  
  if(pressedB2 == false){
    setB2 = true;
    pressedB2 = true;
    document.getElementById("buttonB2").style.borderStyle = "inset";}

  else if(pressedB2 == true){
    document.getElementById("buttonB2").style.borderStyle = "outset";
    pressedB2 = false;
    setB2 = false;
  }

}

function signal_C1() {
  
  if(pressedC1 == false){
    setC1 = true;
    pressedC1 = true;
    document.getElementById("buttonC1").style.borderStyle = "inset";
  
    if(setA503 == true & setZFA503C2 == false){
     
      set_ZFA503C1(true);
      document.getElementById("buttonC1").style.borderStyle = "outset";
      document.getElementById("buttonA503").style.borderStyle = "outset";
      setA503 = false;
      pressedC1 = false;
      setC1 = false;
      pressedA503 = false;
      setZFA503C1 = true;
    }
  
  }

  else if(pressedC1 == true){
    document.getElementById("buttonC1").style.borderStyle = "outset";
    pressedC1 = false;
    setC1 = false;
  }

  if(setNAUF == true){
    
    set_ZFA503C1(false);
    document.getElementById("buttonC1").style.borderStyle = "outset";
    document.getElementById("buttonNAUF").style.borderStyle = "outset";
    pressedC1 = false;
    setC1 = false;
    pressedNAUF = false;
    setNAUF = false;
    setZFA503C1 = false;

  }

}


function signal_C2(){
  if(pressedC2 == false){
    pressedC2 = true;
    setC2 = true;
    document.getElementById("buttonC2").style.borderStyle = "inset";

    if(setA503 == true & setZFA503C1 == false){
     
      set_ZFA503C2(true);
      document.getElementById("buttonC2").style.borderStyle = "outset";
      document.getElementById("buttonA503").style.borderStyle = "outset";
      setA503 = false;
      pressedC2 = false;
      setC2 = false;
      pressedA503 = false;
      setZFA503C2 = true;
    }
  }
  else if(pressedC2 == true){
    pressedC2 = false;
    setC2 = false;
    document.getElementById("buttonC2").style.borderStyle = "outset";

  }

  if(setNAUF == true){
    
    set_ZFA503C2(false);
    document.getElementById("buttonC2").style.borderStyle = "outset";
    document.getElementById("buttonNAUF").style.borderStyle = "outset";
    pressedC2 = false;
    setC2 = false;
    pressedNAUF = false;
    setNAUF = false;
    setZFA503C2 = false;

  }

}


function set_ZFA503C2(setZF){

  if(setZF == true){

    let colorFahrs = "white"
    document.getElementById("31G1").style.background = colorFahrs;
    document.getElementById("31G2").style.background = colorFahrs;
    document.getElementById("31G3").style.background = colorFahrs;
    document.getElementById("BUeTh1").style.background = colorFahrs;
    document.getElementById("BUeTh2").style.background = colorFahrs;
    document.getElementById("32G1").style.background = colorFahrs;
    document.getElementById("32G2").style.background = colorFahrs;
    document.getElementById("BUeGo1").style.background = colorFahrs;
    document.getElementById("BUeGo2").style.background = colorFahrs;
    document.getElementById("32G1").style.background = colorFahrs;
    document.getElementById("32G2").style.background = colorFahrs;
    document.getElementById("2G1").style.background = colorFahrs;
    document.getElementById("2G2").style.background = colorFahrs;
    document.getElementById("2G3").style.background = colorFahrs;
    document.getElementById("2G4").style.background = colorFahrs;
    document.getElementById("W12l").style.background = colorFahrs;
    document.getElementById("2G5").style.background = colorFahrs;
    document.getElementById("2G6").style.background = colorFahrs;
    document.getElementById("2G7").style.background = colorFahrs;

    if(stateW1 == false){
    set_W1(true);
    }

  }
  else if(setZF == false){

    let colorFahrs = "#4b4b4b"
    document.getElementById("31G1").style.background = colorFahrs;
    document.getElementById("31G2").style.background = colorFahrs;
    document.getElementById("31G3").style.background = colorFahrs;
    document.getElementById("BUeTh1").style.background = colorFahrs;
    document.getElementById("BUeTh2").style.background = colorFahrs;
    document.getElementById("32G1").style.background = colorFahrs;
    document.getElementById("32G2").style.background = colorFahrs;
    document.getElementById("BUeGo1").style.background = colorFahrs;
    document.getElementById("BUeGo2").style.background = colorFahrs;
    document.getElementById("32G1").style.background = colorFahrs;
    document.getElementById("32G2").style.background = colorFahrs;
    document.getElementById("2G1").style.background = colorFahrs;
    document.getElementById("2G2").style.background = colorFahrs;
    document.getElementById("2G3").style.background = colorFahrs;
    document.getElementById("2G4").style.background = colorFahrs;
    document.getElementById("W12l").style.background = colorFahrs;
    document.getElementById("2G5").style.background = colorFahrs;
    document.getElementById("2G6").style.background = colorFahrs;
    document.getElementById("2G7").style.background = colorFahrs;

    
  }

}

function set_ZFA503C1(setZF){

  if(setZF == true){

    let colorFahrs = "white"
    document.getElementById("31G1").style.background = colorFahrs;
    document.getElementById("31G2").style.background = colorFahrs;
    document.getElementById("31G3").style.background = colorFahrs;
    document.getElementById("BUeTh1").style.background = colorFahrs;
    document.getElementById("BUeTh2").style.background = colorFahrs;
    document.getElementById("32G1").style.background = colorFahrs;
    document.getElementById("32G2").style.background = colorFahrs;
    document.getElementById("BUeGo1").style.background = colorFahrs;
    document.getElementById("BUeGo2").style.background = colorFahrs;
    document.getElementById("32G1").style.background = colorFahrs;
    document.getElementById("32G2").style.background = colorFahrs;
    document.getElementById("W12r").style.background = colorFahrs;
    document.getElementById("1G1").style.background = colorFahrs;
    document.getElementById("1G2").style.background = colorFahrs;
    document.getElementById("1G3").style.background = colorFahrs;
    document.getElementById("1G4").style.background = colorFahrs;
    document.getElementById("1G5").style.background = colorFahrs;
    document.getElementById("1G6").style.background = colorFahrs;
    document.getElementById("1G7").style.background = colorFahrs;
    document.getElementById("1G8").style.background = colorFahrs;

    if(stateW1 == true){
    set_W1(false);
    Zugfahrstrasse();
    }
    
  }
  else if(setZF == false){

    let colorFahrs = "#4b4b4b"
    document.getElementById("31G1").style.background = colorFahrs;
    document.getElementById("31G2").style.background = colorFahrs;
    document.getElementById("31G3").style.background = colorFahrs;
    document.getElementById("BUeTh1").style.background = colorFahrs;
    document.getElementById("BUeTh2").style.background = colorFahrs;
    document.getElementById("32G1").style.background = colorFahrs;
    document.getElementById("32G2").style.background = colorFahrs;
    document.getElementById("BUeGo1").style.background = colorFahrs;
    document.getElementById("BUeGo2").style.background = colorFahrs;
    document.getElementById("32G1").style.background = colorFahrs;
    document.getElementById("32G2").style.background = colorFahrs;
    document.getElementById("W12r").style.background = colorFahrs;
    document.getElementById("1G1").style.background = colorFahrs;
    document.getElementById("1G2").style.background = colorFahrs;
    document.getElementById("1G3").style.background = colorFahrs;
    document.getElementById("1G4").style.background = colorFahrs;
    document.getElementById("1G5").style.background = colorFahrs;
    document.getElementById("1G6").style.background = colorFahrs;
    document.getElementById("1G7").style.background = colorFahrs;
    document.getElementById("1G8").style.background = colorFahrs;

  }


}


async function set_W1(setW1){

  let colorFahrs1 = "white"
  let colorFahrs2 = "#4b4b4b"

  if(setW1 == false){
    stateW1 = false;
   
    await sleep(1000)
    document.getElementById("W11l").style.background = colorFahrs2
    await sleep(1000)
    document.getElementById("W11l").style.background = colorFahrs1;
    await sleep(1000)
    document.getElementById("W11l").style.background = colorFahrs2; 
    await sleep(1000)
    document.getElementById("W11l").style.background = colorFahrs1;
    await sleep(1000)
    document.getElementById("W11l").style.background = colorFahrs2;

    document.getElementById("W11r").style.background = colorFahrs1;

  }
  else if(setW1 == true){
    stateW1 = true;

    await sleep(1000)
    document.getElementById("W11r").style.background = colorFahrs2
    await sleep(1000)
    document.getElementById("W11r").style.background = colorFahrs1;
    await sleep(1000)
    document.getElementById("W11r").style.background = colorFahrs2; 
    await sleep(1000)
    document.getElementById("W11r").style.background = colorFahrs1;
    await sleep(1000)
    document.getElementById("W11r").style.background = colorFahrs2;

    document.getElementById("W11l").style.background = colorFahrs1;
  }


}


async function Zugfahrstrasse(){

  let colorFahrs1 = "#e37c07"
  let colorFahrs2 = "#4b4b4b"


    await sleep(1000)
    document.getElementById("Zugfahrstrasse").style.background = colorFahrs2
    await sleep(1000)
    document.getElementById("Zugfahrstrasse").style.background = colorFahrs1;
    await sleep(1000)
    document.getElementById("Zugfahrstrasse").style.background = colorFahrs2; 
    await sleep(1000)
    document.getElementById("Zugfahrstrasse").style.background = colorFahrs1;
    await sleep(1000)
    document.getElementById("Zugfahrstrasse").style.background = colorFahrs2;

    document.getElementById("Zugfahrstrasse").style.background = colorFahrs1;



}