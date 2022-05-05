var selecionar = document.querySelector("#select")
var chave = document.querySelector("#chaveDiv")
selecionar.addEventListener("change",function(e){
    if (selecionar.value == "2"){
        chave.style = "display: flex"
    } else {
        chave.style = "display: none"
    }
    
})
var  btn = document.getElementById("btn")
var entrada = document.getElementById("entrada")
var select = document.getElementById("select")
var saida = document.getElementById("saida")  
var radio = document.getElementsByName("radio")   



// radio.addEventListener('change',function(){
// if (valor == "codificar"){
//     btn.innerText = ("codificar")
// }
//     else if (valor == "decodificar"){
//         btn.innerText = ("decodificar")
//     }
// })
btn.addEventListener('click',function(){
    event.preventDefault()
    var valor =  document.querySelector('input[name=codificar]:checked').value
    var chave = document.getElementById("chave")
     if (select.value == "1"){
        if (valor == "codificar"){
           
        saida.innerText = (btoa(entrada.value))
        }
        else if (valor == "decodificar"){
           
            saida.innerText = (atob(entrada.value))
        }
       
     }
     else if (select.value == "2"){
         
        var cezinha = entrada.value.split('')
        var cezar = ((+chave.value) + ((+cezinha.charCodeAt(0)) - 65) % 26)
            console.log(cezar);
          
    }
})



