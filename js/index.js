const btnStart = document.querySelector("#start");
btnStart.addEventListener("click", startPress);
let spaceVer = true;
let shiftVer = false;

const btnStop = document.querySelector("#stop");
btnStop.addEventListener("click", stopPress);
const btnLap = document.querySelector("#lap");
btnLap.addEventListener("click", lapPress);
const btnCont = document.querySelector("#cont");
btnCont.addEventListener("click", contPress);
const btnRes = document.querySelector("#res");
btnRes.addEventListener("click", resPress);

const lblSpace=document.querySelector("#space");
const lblShift=document.querySelectorAll(".shift");
const lblTitulo=document.querySelectorAll(".titulo");


const lbldHora = document.querySelector("#dHora");
let dHora = lbldHora.innerHTML;
const lbluHora = document.querySelector("#uHora");
let uHora = lbluHora.innerHTML;
const lbldMin = document.querySelector("#dMin");
let dMin = lbldMin.innerHTML;
const lbluMin = document.querySelector("#uMin");
let uMin = lbluMin.innerHTML;
const lbldSeg = document.querySelector("#dSeg");
let dSeg = lbldSeg.innerHTML;
const lbluSeg = document.querySelector("#uSeg");
let uSeg = lbluSeg.innerHTML;
const lbldCent = document.querySelector("#dCent");
let dCent = lbldCent.innerHTML;
const lbluCent = document.querySelector("#uCent");
let uCent = lbluCent.innerHTML;

document.addEventListener("keyup", function(e){
    if (e.code === "Space"&&spaceVer===true) {
        startPress();
    }
    else if(e.code === "ShiftLeft"&&shiftVer){
        if(shiftVer===1){
            stopPress();
        }
        else{
            contPress();
        }
    }
    else if(e.code === "ShiftRight"&&shiftVer){
        if(shiftVer===1){
            lapPress();
        }
        else{
            resPress();
        }
    }
});

let intervaloTimer;
let intervalosStart;
let intervalosStop;
let intervalosLap;

function startPress(){
    intervaloTimer=setInterval(incuCent, 10);
    spaceVer=false;
    lblSpace.style.display="none";
    lblShift.forEach(lbl=>{
        lbl.style.display="block";
    });
    
    styleStart();  
    shiftVer=1; 
}
//inicio
let volta = 1;
let totuCent = 0;
let totdCent = 0;
let totuSeg = 0;
let totdSeg = 0;
let totuMin = 0;
let totdMin = 0;
let totuHora = 0;
let totdHora = 0;
let decr= false;

let titVer=false;
let scrollVer=true;


function lapPress(){

    if(titVer===false){
        lblTitulo.forEach(titulo=>{titulo.style.opacity=1;});
        titVer=true;
    }

    const lbltuCent = createLabel("sec", "tuCent", uCent);

    let paruCent = uCent - totuCent;
    if(paruCent<0){
        paruCent=10+paruCent;
        decr=true;
    }
    totuCent=uCent;

    const lbltdCent = createLabel("sec", "tdCent", dCent);
    
    let pardCent = dCent - totdCent;
    decr===true?pardCent--:pardCent=pardCent;
    if(pardCent<0){
        pardCent=10+pardCent;
        decr=true;
    }
    else{
        decr=false;
    }
    totdCent=dCent;

    const lbltuSeg = createLabel("sec", "tuSeg", uSeg);
    
    let paruSeg = uSeg - totuSeg;
    decr===true?paruSeg--:paruSeg=paruSeg;
    if(paruSeg<0){
        paruSeg=10+paruSeg;
        decr=true;
    }
    else{
        decr=false;
    }
    totuSeg=uSeg;

    const lbltdSeg = createLabel("sec", "tdSeg", dSeg);
    
    let pardSeg = dSeg - totdSeg;
    decr===true?pardSeg--:pardSeg=pardSeg;
    if(pardSeg<0){
        pardSeg=6+pardSeg;
        decr=true;
    }
    else{
        decr=false;
    }
    totdSeg=dSeg;
    
    const lbltuMin = createLabel("sec", "tuMin", uMin);
    
    let paruMin = uMin - totuMin;
    decr===true?paruMin--:paruMin=paruMin;
    if(paruMin<0){
        paruMin=10+paruMin;
        decr=true;
    }
    else{
        decr=false;
    }
    totuMin=uMin;

    const lbltdMin = createLabel("sec", "tdMin", dMin);

    let pardMin = dMin - totdMin;
    decr===true?pardMin--:pardMin=pardMin;
    if(pardMin<0){
        pardMin=6+pardMin;
        decr=true;
    }
    else{
        decr=false;
    }
    totdMin=dMin;
    
    const lbltuHora = createLabel("sec", "tuHora", uHora);

    let paruHora = uHora - totuHora;
    decr===true?paruHora--:paruHora=paruHora;
    if(paruHora<0){
        paruHora=10+paruHora;
        decr=true;
    }
    else{
        decr=false;
    }
    totuHora=uHora;
    
    const lbltdHora = createLabel("sec", "tdHora", dHora);
    
    let pardHora = dHora - totdHora;
    decr===true?pardHora--:pardHora=pardHora;
    if(pardHora<0){
        pardHora=10+pardHora;
        decr=true;
    }
    else{
        decr=false;
    }
    totdHora=dHora;
    

    const divParc = document.createElement("div");
    divParc.classList.add("parcial");

    const lblTemp1 = document.createElement("label");
    lblTemp1.classList.add("tempo");
    if(volta<10)
        lblTemp1.innerHTML="0"+volta++;
    else
        lblTemp1.innerHTML=volta++;

    const lblTemp2 = document.createElement("label");
    lblTemp2.classList.add("tempo");

    const lblpdHora = createLabel("sec", "pdHora", pardHora);
    const lblpuHora = createLabel("sec", "puHora", paruHora);
    const sep1 = createLabel("sec", "", ":");
    const sep2 = createLabel("sec", "", ":");
    const sep3 = createLabel("sec", "", ":");
    const sep4 = createLabel("sec", "", ":");
    const lblpdMin = createLabel("sec", "pdMin", pardMin);
    const lblpuMin = createLabel("sec", "puMin", paruMin);
    const lblpdSeg = createLabel("sec", "pdSeg", pardSeg);
    const lblpuSeg = createLabel("sec", "puSeg", paruSeg);
    const sep5 = createLabel("sec", "", ".");
    const sep6 = createLabel("sec", "", ".");
    const lblpdCent = createLabel("sec", "pdCent", pardCent);
    const lblpuCent = createLabel("sec", "puCent", paruCent);

    const lblTemp3 = document.createElement("label");
    lblTemp3.classList.add("tempo");

    


    lblTemp3.prepend(lbltuCent);
    lblTemp3.prepend(lbltdCent);
    lblTemp3.prepend(sep5);
    lblTemp3.prepend(lbltuSeg);
    lblTemp3.prepend(lbltdSeg);
    lblTemp3.prepend(sep1);
    lblTemp3.prepend(lbltuMin);
    lblTemp3.prepend(lbltdMin);
    lblTemp3.prepend(sep2);
    lblTemp3.prepend(lbltuHora);
    lblTemp3.prepend(lbltdHora);

    lblTemp2.prepend(lblpuCent);
    lblTemp2.prepend(lblpdCent);
    lblTemp2.prepend(sep6);
    lblTemp2.prepend(lblpuSeg);
    lblTemp2.prepend(lblpdSeg);
    lblTemp2.prepend(sep3);
    lblTemp2.prepend(lblpuMin);
    lblTemp2.prepend(lblpdMin);
    lblTemp2.prepend(sep4);
    lblTemp2.prepend(lblpuHora);
    lblTemp2.prepend(lblpdHora);

    const parcial = createLabel("parcial", "", "");
    parcial.prepend(lblTemp3);
    parcial.prepend(lblTemp2);
    parcial.prepend(lblTemp1);

    const tempos = document.querySelector("#tempos");

    tempos.prepend(parcial);

    if(tempos.scrollHeight>tempos.clientHeight&&scrollVer){
        document.querySelector("#parciais").style.width="40.5rem";
        document.querySelector("#titulos").style.marginRight="0.5rem";
        scrollVer=false;
    }

    tempos.scrollTop=0;

}

function createLabel(lblclass, lblid, lblinhtml){
    const lbl = document.createElement("label");
    lbl.classList.add(lblclass);
    lbl.setAttribute("id", lblid);
    lbl.innerHTML=lblinhtml;
    return lbl;
}
//fim
function stopPress(){
    clearInterval(intervaloTimer);
    styleStop();
    shiftVer = 2;
}

function contPress(){
    intervaloTimer=setInterval(incuCent, 10);
    styleCont();
    shiftVer = 1;
}

function resPress(){
    lblShift.forEach(lbl=>{
        lbl.style.display="none";
    });
    
    shiftVer=false;
    lbluCent.innerHTML="0";
    uCent=0;
    lbldCent.innerHTML="0";
    dCent=0;
    lbluSeg.innerHTML="0";
    uSeg=0;
    lbldSeg.innerHTML="0";
    dSeg=0;
    lbluMin.innerHTML="0";
    uMin=0;
    lbldMin.innerHTML="0";
    dMin=0;
    lbluHora.innerHTML="0";
    uHora=0;
    lbldHora.innerHTML="0";
    dHora=0;
    styleRes();
    spaceVer = true;
    volta = 1;
    totuCent = 0;
    totdCent = 0;
    totuSeg = 0;
    totdSeg = 0;
    totuMin = 0;
    totdMin = 0;
    totuHora = 0;
    totdHora = 0;
    decr= false;

}

function styleStart(){
    btnStart.disabled=true;
    btnStart.style.display='none';
    btnLap.disabled=false;
    btnStop.disabled=false;
    btnLap.style.display='block';
    btnStop.style.display='block';
    btnStart.style.opacity=0;
    lblSpace.style.opacity=0;
    intervalosStop=setInterval(showStop, 10);
    intervalosLap=setInterval(showLap, 10);
}

function styleStop(){
    btnStop.disabled=true;
    btnLap.disabled=true;
    btnStop.style.display='none';
    btnLap.style.display='none';
    btnCont.style.display='block';
    btnRes.style.display='block';
    btnCont.disabled=false;
    btnRes.disabled=false;
    btnStop.style.opacity=0;
    btnLap.style.opacity=0;
}

function styleCont(){
    btnCont.disabled=true;
    btnRes.disabled=true;
    btnCont.style.display='none';
    btnRes.style.display='none';
    btnLap.style.display='block';
    btnStop.style.display='block';
    btnLap.style.opacity=1;
    btnStop.style.opacity=1;
    btnLap.disabled=false;
    btnStop.disabled=false;
}

function styleRes(){
    lblTitulo.forEach(titulo=>{titulo.style.opacity=0;});
    titVer=false;
    btnCont.disabled=true;
    btnRes.disabled=true;
    btnCont.style.display='none';
    btnRes.style.display='none';
    btnStart.style.display='block';
    lblSpace.style.display='block';
    btnStart.disabled=false;
    const parcial = document.querySelectorAll('.parcial');
    parcial.forEach(parc => {
        parc.remove();
    });
    lblShift.forEach(lbl=>{
        lbl.style.opacity=0;
    });
    intervalosStart=setInterval(showStart, 10);
}

let oStop = 0;
function showStop(){
    if(oStop<1){
        oStop+=0.02;
        btnStop.style.opacity=oStop;
        lblShift.forEach(lbl=>{
            lbl.style.opacity=(oStop/4);
        });
    }
    else{
        clearInterval(intervalosStop);
        oStop = 0;
    }
}

let oLap = 0;
function showLap(){
    if(oLap<1){
        oLap+=0.02;
        btnLap.style.opacity=oLap;
    }
    else{
        clearInterval(intervalosLap);
        oLap = 0;
    }
}

let oStart = 0;
let oSpace = 0;
function showStart(){
    if(oStart<1){
        oStart+=0.02;
        oSpace=oStart/4;
        btnStart.style.opacity=oStart;
        lblSpace.style.opacity=oSpace;
    }
    else{
        clearInterval(intervalosStart);
        oStart = 0;
        oSpace = 0;
    }
}



function incuCent(){
    uCent < 9 ? uCent++ : uCent=0;
    lbluCent.innerHTML=uCent;
    if(uCent===0)
        incdCent();
}

function incdCent(){
    dCent < 9 ? dCent++ : dCent=0;
    lbldCent.innerHTML=dCent;
    if(dCent===0)
        incuSeg();
}

function incuSeg(){
    uSeg < 9 ? uSeg++ : uSeg=0;
    lbluSeg.innerHTML=uSeg;
    if(uSeg===0)
        incdSeg();
}

function incdSeg(){
    dSeg < 5 ? dSeg++ : dSeg=0;
    lbldSeg.innerHTML=dSeg;
    if(dSeg===0)
        incuMin();
}

function incuMin(){
    uMin < 9 ? uMin++ : uMin=0;
    lbluMin.innerHTML=uMin;
    if(uMin===0)
        incdMin();
}

function incdMin(){
    dMin < 5 ? dMin++ : dMin=0;
    lbldMin.innerHTML=dMin;
    if(dMin===0)
        incuHora();
}

function incuHora(){
    uHora < 9 ? uHora++ : uHora=0;
    lbluHora.innerHTML=uHora;
    if(uHora===0)
        incdHora();
}

function incdHora(){
    dHora++;
    lbldHora.innerHTML=dHora;
}