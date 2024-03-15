// let usuario = "arthur.floro2006@gmail.com"
// let senha = "arthur123"
// let telefone = "999082105"

function Logar() {
  

    let usuario = document.querySelector("#mail").value
    let senha = document.querySelector("#senha2").value 
    let telefone = document.querySelector("#telefone").value

    if (usuario === "arthur.floro2006@gmail.com" && senha === "arthur123" && telefone === "999082105" ) {
        alert("Cadastro concluído")
    } else {
        alert("Dados inválidos")
    }

}

// && document.getElementById("telefone")===telefone
// && document.getElementById("senha2") === senha