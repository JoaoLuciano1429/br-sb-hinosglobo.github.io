function stopAllSounds() {
  // Seleciona todos os elementos de áudio
  const sounds = document.querySelectorAll("audio");

  // Pausa cada som e reinicia o tempo para o início
  sounds.forEach((sound) => {
    sound.pause();
    sound.currentTime = 0; // Reinicia o áudio para o começo
  });
}

document.getElementById("AMA").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Amazonas");
  ev.play();
});

document.getElementById("AMG").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("AmericaMG");
  ev.play();
});

document.getElementById("AVA").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Avai");
  ev.play();
});

document.getElementById("BFC").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("BotafogoSP");
  ev.play();
});
/*
document.getElementById("BRU").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Brusque");
  ev.play();
});
*/ /*
document.getElementById("CEA").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Ceara");
  ev.play();
});
*/
document.getElementById("CHA").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Chapecoense");
  ev.play();
});

document.getElementById("CFC").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Coritiba");
  ev.play();
});

document.getElementById("CRB").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("CR_Brasil");
  ev.play();
});

document.getElementById("GOI").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Goias");
  ev.play();
});

document.getElementById("NOV").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Novorizontino");
  ev.play();
});
/*
document.getElementById("GFC").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Guarani");
  ev.play();
});
*/ /*
document.getElementById("ITU").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Ituano");
  ev.play();
});
*/ /*
document.getElementById("MIR").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Mirassol");
  ev.play();
});
*/
document.getElementById("OPF").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("OperarioFerroviario");
  ev.play();
});

document.getElementById("PAY").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Paysandu");
  ev.play();
});
/*
document.getElementById("PON").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("PontePreta");
  ev.play();
});
*/ /*
document.getElementById("SAN").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Santos");
  ev.play();
});
*/ /*
document.getElementById("SPO").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("SportRecife");
  ev.play();
});
*/
document.getElementById("VIL").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("VilaNova");
  ev.play();
});

document.getElementById("CAP").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("AthleticoPR");
  ev.play();
});

document.getElementById("CUI").addEventListener("click", function (ev) {
  stopAllSounds();
  ev = document.getElementById("Cuiaba");
  ev.play();
});

document.getElementById("ACG").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("AtleticoGO");
  ev.play();
});

document.getElementById("CRI").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Criciuma");
  ev.play();
});

document.getElementById("ATH").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("AthleticClub");
  ev.play();
});

document.getElementById("FER").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Ferroviaria");
  ev.play();
});

document.getElementById("REM").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Remo");
  ev.play();
});

document.getElementById("VOL").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("VoltaRedonda");
  ev.play();
});
