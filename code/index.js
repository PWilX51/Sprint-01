const textAreaEnter = document.getElementById("dataenter");
const textAreaCopy = document.getElementById("datacopy");
const btnEncriptar = document.getElementById("btn-encode");
const btnDesencriptar = document.getElementById("btn-decode");
const btnCopiar = document.getElementById("btn-copy");

btnEncriptar.addEventListener("click", () => {
    console.log("hola");
    if(textAreaEnter.value){
        textAreaCopy.style.display = "block";
        textAreaCopy.value = textAreaEnter.value;
        btnCopiar.style.display = "block";
    }
});

btnCopiar.addEventListener("click", ()=>{
    navigator.clipboard.writeText(textAreaEnter.value);
});