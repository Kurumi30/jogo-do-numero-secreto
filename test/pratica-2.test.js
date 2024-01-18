function calcularIMC(altura, peso) {
  return peso / (altura * altura)
}
calcularIMC(1.60, 80)

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) return 1

  let fatorial = 1

  for (let i = 2; i <= numero; i++) {
    fatorial *= i
  }

  return fatorial
}
calcularFatorial(3)

function converterParaReal(valor) {
  let cotacao = 4.80

  return valor * cotacao
}
converterParaReal(200)

function areaEPerimetroDoRetangulo(altura, largura) {
  let area = altura * largura
  let perimetro = (altura * 2) + (largura * 2) // 2 * (altura + largura)

  return `A área do retângulo é ${area} e o perímetro é ${perimetro}`
}
areaEPerimetroDoRetangulo(2, 5)

function areaEPerimetroDoCirculo(raio) {
  let pi = 3.14 // Math.PI
  let perimetro = 2 * pi * raio
  let area = pi * raio * raio

  return `A área do círculo é ${area} e o perímetro é ${perimetro}`
}
areaEPerimetroDoCirculo(4)

function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i

    console.log(`${numero} x ${i} = ${resultado}`)
  }
}
tabuada(2)
