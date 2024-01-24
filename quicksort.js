function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }

    const pivot = array[0];

    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
      if (array[i][0] < pivot[0]) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }

    return quicksort(left).concat([pivot], quicksort(right));
  }
  let vectorDesord = [];
  
  for (let i = 0; i < 5; i++) {
    vectorDesord[i] = new Array(2);
    vectorDesord[i][0] = prompt("Ingresa un entero");
    vectorDesord[i][1] = i + 1;
  }

  vectorOrd = vectorDesord.map(vectorElement=>vectorElement.slice());

  vectorOrd = quicksort(vectorOrd);

  console.log("Vector Ordenado:", vectorOrd);
  console.log("Vector Desordenado:", vectorDesord);
