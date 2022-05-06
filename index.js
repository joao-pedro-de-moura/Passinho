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
    var saida = document.getElementById("saida")  
    var entrada = document.getElementById("entrada").value
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
         if (valor == "codificar"){
            var vazio = ""
            for (var i = 0; i < entrada.length; i++){
                var key = parseInt(chave.value)
                var entradinha =  (entrada[i].charCodeAt() + key -65 )% 26
                vazio += String.fromCharCode(entradinha + 65) 
          
            }
            return saida.innerText = vazio
        }
        if (valor == "decodificar"){
            var vazio = ""
            for (var i = 0; i < entrada.length; i++){
                var key = parseInt(chave.value)
                var entradinha =  (entrada[i].charCodeAt() - key - 65 )% 26
                vazio += String.fromCharCode(entradinha + 65 + 26)  
          
            }
            return saida.innerText = vazio
        }
    }
    
})







//           var decod = (entradinha + chave)
//           vazio += string.FromCharCode(decod)
//          }
//        saida.innerText = decod
//      }
// })



 // var cezinha = entrada.value.slice('')
        // for (var i =0  ;i < cezinha.length; i++)
        // var cezar = ((+chave.value) + ((cezinha[i].charCodeAt(0)) - 65) % 26)
        //     console.log(cezar);