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
const vectorLenght = 1000000;
let vectorDesord = new Array(vectorLenght);


for (let i = 0; i < vectorDesord.length; i++) {
  vectorDesord[i] = new Array(2);
  vectorDesord[i][0] = Math.floor(Math.random() * vectorLenght);
  vectorDesord[i][1] = i + 1;
}

let vectorOrd = vectorDesord.map(vectorElement=>vectorElement.slice());
let vectorOrd2 = vectorDesord.map(vectorElement=>vectorElement.slice());

console.time();
vectorOrd = quicksort(vectorOrd);
console.timeEnd();

console.time();
vectorOrd2 = vectorOrd2.sort();
console.timeEnd();