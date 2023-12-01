// Importando elementos do HTML
const pedraElement = Document.querySelector("button[name=pedra]")
const papelElement = Document.querySelector("button[name=papel]")
const tesouraElement = Document.querySelector("button[name=tesoura]")
const jogadorElement = Document.querySelector("img[name=jogador]")
const score1Element = Document.querySelector("#score1")
const score2Element = Document.querySelector("#score2")
const resultElement = Document.querySelector("p[name=result]")
// Itens do jogo
// Sendo 0 = Pedra, 1 = Papel e 2 = Tesoura
const itens = ["pedra", "papel", "tesoura"]

let contadorJogador = 0
let contadorPc = 0

// Função para alterar o score
function alterarScore () {
    score1Element.innerHTML = ${contadorJogador}
    score2Element.innerHTML = ${contadorPc}
}

// Adicionando eventos de click
papelElement.addEventListener("click", () =>{
    var bot = Math.floor (Math.random() * 3)
    jogadorElement.src = 'images/icon-paper.svg'
    switch(bot) {
   
        case 0: 
        botElement.src = 'images/icon-rock.svg'
        resultElement.innerHTML = "resultado: Você venceu!!! :D"
        contadorJogador++
            break
        case 1:
            botElement.src = 'images/icon-paper.svg'
            resultElement.innerHTML = "Resultado: EMPATE... :("
            break
        case 2:
            botElement.src = 'images/icon-scissors.svg'
            resultElement.innerHTML = "Resultado: Voce perdeu... D:"
            break

            
    }
    alterarScore()
})
tesouraElement.addEventListener("click", () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'images/icon-scissors.vsg'
    switch(bot){
        case 0:
            botElement.src = 'images/icon-paper.svg'
            resultElement.innerHTML = "Resultado: Você venceu!!! :D"
             contadorJogador++
         break
         case 1:
                botElement.src = 'images/icon-rock.svg'
                resultElement.innerHTML = "Resultado: Voce Perdeu... D:"
    break
         case 2:
                    botElement.src ='images/icon-scissors.svg'
                    resultElement.innerHTML = "Resultado: EMPATE... :( "
    break
}
alterarScore()
    pedraElement.addEventListener("click", () =>{
        var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'images/icon-rock.vsg'
    switch(bot) {
        case 0:
            botElement.src ='images/icon-rock.svg'
             resultElement.innerHTML = "Resultado: EMPATE... :( "
            break
         case 1:
         botElement.src = 'images/icon-paper.svg'
                resultElement.innerHTML = "Resultado: Voce Perdeu... D:"
          break

         case 2:
                botElement.src = 'images/icon-scissors.svg'
            resultElement.innerHTML = "Resultado: Voce venceu!!! :D"
             contadorJogador++
             break
            
            }
            alterarScore()
        } )