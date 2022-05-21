/*Ejercicio: Divisores

• Implemente un método llamado cantidadDeDivisores que
reciba un número entero y devuelva la cantidad de divisores
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,
16, por lo que la respuesta debería ser 5
• Re-utilice el método esMultiplo implementado para el ejercicio
anterior*/

function esMultiplo(num1: number, num2: number): boolean {
  return num1 % num2 === 0;
}

function cantidadDeDivisores(num: number): number {
  let contador = 0;
  for (let i = 1; i <= num; i++) {
    if (esMultiplo(num, i)) {
      contador++;
    }
  }
  return contador;
}

console.log(cantidadDeDivisores(0));
