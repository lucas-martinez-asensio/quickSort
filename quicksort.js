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

const vectorLength = 1000000;
let vectorMessy = new Array(vectorLength);

for (let i = 0; i < vectorMessy.length; i++) {
  vectorMessy[i] = new Array(2);
  vectorMessy[i][0] = Math.floor(Math.random() * vectorLength);
  vectorMessy[i][1] = i + 1;
}

let vectorOrdered = vectorMessy.map(vectorElement=>vectorElement.slice());
let vectorOrdered2 = vectorMessy.map(vectorElement=>vectorElement.slice());

//tiempo de ejecución quicksort
console.time();
vectorOrdered = quicksort(vectorOrdered);
console.timeEnd();

//tiempo de ejecución ordenamiento nativo
console.time();
vectorOrdered2 = vectorOrdered2.sort(([a], [z]) => a - z);
console.timeEnd();
