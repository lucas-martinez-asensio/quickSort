# quickSort

Se define un elemento como pivote, a partir del cuál los restantes se disponen a cada lado del mismo los valores según si son mayores o menores a este pivote. 
Se repite el proceso hasta que los listados restantes poseen 1 o 0 elementos.

Implementado a modo de matriz, salvando el posicionamiento inicial de elemento.

A diferencia de métodos nativos de ordenamiento este algoritmo gracias a su complejidad logarítmica promedio de O(n log n) tiende a una mejora de 10x en relación a métodos nativos en casos de 1M de elementos.
