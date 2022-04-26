# cor-technical-test
Oferta Laboral para COR, Satrtup de Silicon valley

### Developer: Emilio Gonzales

Se hicieron varias pruebas con diferentes Arrays, estas pruebas se pueden encontrar dentro del código (archivo: app.js) entre las líneas 77 al 99.

Actualmente, la función está seteada con el Array del problema: ['chair', 'racket', 'touch', 'height', 'tunic']

### Enunciado del problema
```
Dada una lista de palabras, determine si las palabras se pueden encadenar para formar un
círculo. Una palabra X se puede colocar delante de otra palabra Y en un círculo si el último
carácter de X es el mismo que el primer carácter de Y.
```

### Input
```
['chair', 'racket', 'touch', 'height', 'tunic']
```

### Output
```
chair --> racket --> touch --> height --> tunic --> chair

Se genera un archivo TXT (resultado.txt) con el siguiente contenido:
chair
racket
touch
height
tunic
```

### Ejecutar la función
```
node app.js
```