const textAreaEnter = document.getElementById("dataenter");
const textAreaCopy = document.getElementById("datacopy");
const btnEncriptar = document.getElementById("btn-encode");
const btnDesencriptar = document.getElementById("btn-decode");
const btnCopiar = document.getElementById("btn-copy");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const vowels = {
    a : "ai",
    e : "enter",
    i : "imes",
    o : "ober",
    u : "ufat"
}

const v = Object.keys(vowels);

function encode(){
    let arreglo = textAreaEnter.value;
    let arr = arreglo.split("");
    for(let i = 0; i < arr.length; i++){
        if(vowels.hasOwnProperty(arr[i]))
            arr[i]=vowels[arr[i]];
    }
    textAreaCopy.value = arr.join("");
}

function decode(){
    let arreglo = textAreaEnter.value;
    for(const property in vowels){
        var regexp=new RegExp(vowels[property], "gi");
        if(property == "a"){
            arreglo = arreglo.replace(regexp, "a");
        }
        if(property == "e"){
            arreglo = arreglo.replace(regexp, "e");
        }
        if(property == "i"){
            arreglo = arreglo.replace(regexp, "i");
        }
        if(property == "o"){
            arreglo = arreglo.replace(regexp, "o");
        }
        if(property == "u"){
            arreglo = arreglo.replace(regexp, "u");
        }
    }
    textAreaCopy.value = arreglo;
}

btnEncriptar.addEventListener("click", ()=>{
    if(textAreaEnter.value){
        textAreaCopy.style.display = "block";
        btnCopiar.style.display = "block";
        encode();
    }
});

btnDesencriptar.addEventListener("click", ()=>{
    if(textAreaEnter.value){
        textAreaCopy.style.display = "block";
        btnCopiar.style.display = "block";
        decode();
    }
});

btnCopiar.addEventListener("click", ()=>{
    navigator.clipboard.writeText(textAreaCopy.value);
});