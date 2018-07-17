# generator-generator

> AST Code Generator implemented several different ways with and without ES generators.

### Results

> Tested on 2017 MacBook Pro (2.8 GHz Intel Core i7) using Node v10.4.0

```
node perf.js
```

```txt
generateFlat: 81.656ms
a + b + c + d + e + e + f;
g + h + i + j + k + l + m;

generateFlatLinkedList: 25.049ms
a + b + c + d + e + e + f;
g + h + i + j + k + l + m;

generateRecursively: 11.592ms
a + b + c + d + e + e + f;
g + h + i + j + k + l + m;

generateWithGeneratorRecursively: 154.451ms
a + b + c + d + e + e + f;
g + h + i + j + k + l + m;

generateWithGeneratorIterativelyWithArray: 82.886ms
a + b + c + d + e + e + f;
g + h + i + j + k + l + m;

generateWithGeneratorIterativelyWithLinkedList: 79.688ms
a + b + c + d + e + e + f;
g + h + i + j + k + l + m;

generateRecursivelyWithGenerator: 94.951ms
a + b + c + d + e + e + f;
g + h + i + j + k + l + m;
```
