function exibirMensagem() {
  console.log("Olá, mundo!")
}
exibirMensagem()

function exibirNome(nome) {
  console.log(`Olá, ${nome}!`)
}
exibirNome("Fernando")

function dobrarNumero(numero) {
  return numero * 2
}
dobrarNumero(5)

function mediaDosNumeros(n1, n2, n3) {
  return (n1 + n2 + n3) / 3
}
mediaDosNumeros(5, 6, 10)

function maiorNumero(n1, n2) {
  return n1 > n2 ? n1 : n2
}
maiorNumero(5, 20)

function multiplicarPorSiMesmo(numero) {
  return numero * numero
}
multiplicarPorSiMesmo(5)
