/*function nFactorielle(n) {
  debugger;
  if (n === 1 || n === 0) return 1;
  if (n < 0) return "error";

  return n * nFactorielle(n - 1);
}

console.log(nFactorielle(7))*/


/*function factorielleRecursive(n) {
  debugger;
  if (n === 0) {
    return 1;
  } else {
    return n * factorielleRecursive(n - 1);
  }
}

console.log(factorielleRecursive(9))*/


function factorielleIterative(n) {
    debugger;
    let resultat = 1;
    for (let i = 1; i <= n; i++) {
      resultat *= i;
    }
    return resultat;
  }
  
  console.log(factorielleIterative(8))