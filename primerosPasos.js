// puzzle 2. Hacemos avanzar el pájaro para atrapar al cerdito

moveForward();
moveForward();
moveForward();

// puzzle 3 hacemos avanzar el pájaro, giro a la derecha y un nuevo avance para llegar al cerdito

moveForward();
moveForward();
turnRight();
moveForward();

// puzzle 4 hacemos que el pájaro se mueva, gire a la izquierda, avance, gire a la derecha y avance...

moveForward();
turnLeft();
moveForward();
turnRight();
moveForward();

// puzzle 5, seguimos avanzando y haciendo giros a izquierda y derecha para alcanzar al cerdo

turnRight();
moveForward();
turnLeft();
moveForward();
moveForward();
moveForward();
turnLeft();
moveForward();

// puzzle 6. Creamos nuestra primera función para avanzar 5 pasos usando "2 bloques"

for (var count = 0; count < 5; count++) {
  moveForward();
}

// puzzle 7 primero hacemos que gire a la derecha y luego volvemos a usar la "funcion" para avanzar 5 pasos

turnRight();
for (var count = 0; count < 5; count++) {
  moveForward();
}

// puzzle 8 vamos a encadenar la "avanzar" con un giro a la izquierda
for (var count = 0; count < 4; count++) {
  moveForward();
}
turnLeft();
for (var count2 = 0; count2 < 5; count2++) {
  moveForward();
}

//puzzle 9 resolvemos repitiendo la función que incluye "avanze y giro", nos indican que se puede resolver usando solo 4 bloques

for (var count = 0; count < 2; count++) {
  moveForward();
  moveForward();
  turnRight();
}
for (var count2 = 0; count2 < 2; count2++) {
  moveForward();
}

// puzzle 10 utilizamos la función avanzar "mientras no termine"

while (notFinished()) {
  moveForward();
}

// puzzle 11 utilizamos la función avanzar y girar hasta llegar al cerdito

while (notFinished()) {
  moveForward();
  moveForward();
  turnLeft();
}

// puzzle 12 Aparece un zombie hambriento que come girasoles, nos pide que lo ayudemos a llegar con 5 bloques

while (notFinished()) {
  moveForward();
  turnLeft();
  moveForward();
  turnRight();
}

// al completar este puzzle recibimos nuestro primer trofeo. Vamos a por el siguiente reto

// puzzle 13 seguimos con las funciones "mientras no termine" y avanza evitando las plantas carnívoras

while (notFinished()) {
  turnRight();
  moveForward();
  turnLeft();
  moveForward();
}

// puzzle 14 Empezamos a ejecutar funciones "avanzar mientras no termine" y a tomar decisiones "if" hay camino a la izquierda

while (notFinished()) {
  moveForward();
  if (isPathLeft()) {
    turnLeft();
  }
}

// puzzle 15 resolvemos y recibimos nuestro segundo trofeo, ahora ya conocemos el bucle "while" y la estructura de control "if"

while (notFinished()) {
  moveForward();
  if (isPathRight()) {
    turnRight();
  }
}

// puzzle 16 similar al anterior, seguimos alimentando al zombie a base de girasoles, integrando bucle "while" y el "if"

while (notFinished()) {
  moveForward();
  if (isPathLeft()) {
    turnLeft();
  }
}

// puzzle 17 tanto el "while" como el "if" son estructuras de control que nos permiten ahorrar código

while (notFinished()) {
  moveForward();
  if (isPathRight()) {
    turnRight();
  }
}

// puzzle 18 recibimos otro trofeo, mientras seguimos familiarizándonos con las estructuras de control y los bucles

while (notFinished()) {
  if (isPathForward()) {
    moveForward();
  } else {
    turnLeft();
  }
}

// puzzle 19 lo completamos y recibimos otro trofeo, seguimos alimentando al zombie que cada vez llega más rápido a su "ensalada de girasol"

while (notFinished()) {
  if (isPathForward()) {
    moveForward();
  } else {
    turnRight();
  }
}

// puzzle 20 completamos la etapa 1 y recibimos nuestro trofeo

while (notFinished()) {
  if (isPathForward()) {
    moveForward();
  } else {
    if (isPathRight()) {
      turnRight();
    } else {
      turnLeft();
    }
  }
}


/* puzzle 21, ahora somos unos artistas, en el código empiezan a aparecer los parámetros de las funciones que usamos, 
*  de modo que podemos indicar los espacios que avanzamos y los grados del giro */

moveForward(100);
turnRight(90);
moveForward(100);

/*puzzle 22, dibujamos un cuadrado dando a cada línea un color, aunque podríamos haber pintado todas las líneas iguales*/

penColour('#228b22');
moveForward(100);
turnRight(90);
penColour('#ff0000');
moveForward(100);
turnRight(90);
penColour('#0000cd');
moveForward(100);
turnRight(90);
penColour('#ffff00');
moveForward(100);

// puzzle 23 dibujamos un cuadrado usando la repetición en la función (pintamos todas las líneas de negro)

for (var count = 0; count < 4; count++) {
  moveForward(100);
  turnRight(90);
}

// puzzle 24, ahora se nos pide dibujar un triángulo, hemos de colocar el ángulo de giro en la repetición (120)

for (var count = 0; count < 3; count++) {
  penColour(colour_random());
  moveForward(100);
  turnRight(120);
}

// recibimos un nuevo trofeo

//  puzzle 25, se nos propone dibujar un sobre (triángulo dentro de cuadrado) con los elementos que hemos aprendido hasta ahora

for (var count = 0; count < 3; count++) {
  moveForward(100);
  turnRight(120);
}
for (var count2 = 0; count2 < 4; count2++) {
  moveForward(100);
  turnRight(90);
}

// puzzle 27, seguimos trabajando con los bucles y los giros

for (var count = 0; count < 3; count++) {
  moveForward(100);
  turnRight(120);
}
turnLeft(90);
for (var count2 = 0; count2 < 4; count2++) {
  moveForward(100);
  turnLeft(90);
}

// puzzle 28 ahora dibujamos unas "gafas", seguimos trabajando las funciones anteriores

penColour('#228b22');
for (var count = 0; count < 4; count++) {
  turnRight(90);
  moveForward(100);
}
turnLeft(90);
moveForward(50);
for (var count2 = 0; count2 < 4; count2++) {
  moveForward(100);
  turnLeft(90);
}

// puzzle 29 completamos el siguiente puzzle con una repetición de 8 veces la función que pinta y devuelve al artista a la posición central

for (var count = 0; count < 8; count++) {
  penColour(colour_random());
  moveForward(100);
  moveBackward(100);
  turnRight(45);
}

// puzzle 30 obviamente la instrucción debe ejecutarse 360 veces, correspondientes a los grados de la circunferencia

for (var count = 0; count < 360; count++) {
  moveForward(1);
  turnRight(1);
}

// puzzle 31, dibujo libre

for (var count = 0; count < 540; count++) {
  moveForward(1);
  turnRight(1);
}
moveForward(100);
for (var count2 = 0; count2 < 5; count2++) {
  moveForward(100);
  moveBackward(100);
  turnLeft(45);
}
penColour('#ffffff');
moveForward(40);
turnRight(30);
penColour('#ff0000');
for (var count3 = 0; count3 < 4; count3++) {
  turnLeft(90);
  moveForward(100);
  moveBackward(100);
  turnRight(45);
}


//puzzle 32, se nos pide un triángulo de 100px de lado

for (var count = 0; count < 3; count++) {
  moveForward(100);
  turnRight(120);
}

// puzzle 33, ahora se nos pide que dibujemos 2 triángulos unidos por uno de sus vértices

penColour(colour_random());
for (var count = 0; count < 3; count++) {
  moveForward(100);
  turnRight(120);
}
turnLeft(210);
penColour(colour_random());
for (var count2 = 0; count2 < 3; count2++) {
  moveForward(100);
  turnLeft(120);
}

// puzzle 34, se nos propone dibujar una flor

penColour(colour_random());
for (var count2 = 0; count2 < 4; count2++) {
  for (var count = 0; count < 3; count++) {
    moveForward(100);
    turnRight(120);
  }
  turnRight(90);
}

// puzzle 35, seguimos con la propuesta de ayudar al artista en sus dibujos, usamos bucles de repetción

for (var count2 = 0; count2 < 10; count2++) {
  penColour(colour_random());
  for (var count = 0; count < 3; count++) {
    moveForward(100);
    turnRight(120);
  }
  turnRight(36);
}

// puzzle 36, necesitaremos giros de 10º para completar este dibujo

for (var count2 = 0; count2 < 36; count2++) {
  penColour(colour_random());
  for (var count = 0; count < 3; count++) {
    moveForward(100);
    turnRight(120);
  }
  turnRight(10);
}

// puzzle 37, se nos propone dibujar un cuadrado de 20px de lado, usando 3 bloques

for (var count = 0; count < 4; count++) {
  moveForward(20);
  turnRight(90);
}

// puzzle 38, dibujamos una escalera con 10 cuadrados de 20px de lado

penColour(colour_random());
for (var count2 = 0; count2 < 10; count2++) {
  for (var count = 0; count < 4; count++) {
    moveForward(20);
    turnRight(90);
  }
  moveForward(20);
}

// puzzle 39, completamos un cuadrado que tiene por lado la escalera del puzzle anterior

for (var count3 = 0; count3 < 4; count3++) {
  for (var count2 = 0; count2 < 10; count2++) {
    penColour(colour_random());
    for (var count = 0; count < 4; count++) {
      moveForward(20);
      turnRight(90);
    }
    moveForward(20);
  }
  turnRight(90);
}

// puzzle 40, dibujamos una punta de lanza,

for (var count3 = 0; count3 < 4; count3++) {
  for (var count2 = 0; count2 < 10; count2++) {
    penColour(colour_random());
    for (var count = 0; count < 4; count++) {
      moveForward(20);
      turnRight(90);
    }
    moveForward(20);
  }
  turnRight(80);
}

// puzzle 41, completamos otra figura con las escaleras, dos pentágonos solapados

for (var count3 = 0; count3 < 9; count3++) {
  for (var count2 = 0; count2 < 10; count2++) {
    penColour(colour_random());
    for (var count = 0; count < 4; count++) {
      moveForward(20);
      turnRight(90);
    }
    moveForward(20);
  }
  turnRight(80);
}

// puzzle 42 nos proponen un dibujo libre a partir del puzzle anterior

for (var count3 = 0; count3 < 18; count3++) {
  for (var count2 = 0; count2 < 10; count2++) {
    penColour(colour_random());
    for (var count = 0; count < 4; count++) {
      moveForward(20);
      turnRight(90);
    }
    moveForward(20);
  }
  turnRight(50);
}

/* puzzle 43, ahora nos convertimos en agricultores, 
y seguimos familiarizándonos con el código JavaScript aprendemos dig() función para eliminar*/

moveForward();
moveForward();
moveForward();
moveForward();
dig();

// puzzle 44, ganamos nuestro trofeo y aprendemos sobre la función llenar (fill)

moveForward();
fill();
fill();

// puzzle 45, ahora usamos el bucle para repetir 10 veces la función dig()

moveForward();
for (var count = 0; count < 10; count++) {
  dig();
}

// puzzle 46, avanzamos y eliminamos en un cuadrado de nuestro huerto

for (var count = 0; count < 4; count++) {
  moveForward();
  dig();
  turnLeft();
}

// puzzles 47 y 48 seguimos ayudando a nuestra granjera, aprendemos a usar el bucle "while"

for (var count = 0; count < 5; count++) {
  while (pilePresent()) {
      dig();
    moveForward();
  }
}

// puzzle 49, ganamos nuestro trofeo y llenamos el agujero del sembrado

turnRight();
moveForward();
while (holePresent()) {
  fill();
}

// puzzle 50, avanzar y llenar

while (isPathForward()) {
  moveForward();
  while (holePresent()) {
      fill();
  }
}

// puzzle 50, avanzamos y eliminamos las pilas "while" las tenemos delante

for (var count = 0; count < 4; count++) {
  moveForward();
  while (pilePresent()) {
      dig();
  }
}
turnLeft();
for (var count2 = 0; count2 < 5; count2++) {
  moveForward();
  while (pilePresent()) {
      dig();
  }
}

// puzzle 51, completamos el puzzle y obtenemos 2 trofeos

while (isPathForward()) {
  moveForward();
  if (pilePresent()) {
    dig();
  }
}

// puzzle 52, continuamos con los bucles y estructuras de control

while (isPathForward()) {
  moveForward();
  if (pilePresent()) {
    dig();
  }
  if (holePresent()) {
    fill();
  }
}

// puzzle 53, ahora el zombie se nos vuelve artista, vemos que la interfice está organizada de modo similar a cualquier IDE

penColour('#ff0000');
for (var count = 0; count < 4; count++) {
  moveForward(100);
  turnRight(90);
}

// puzzle 54, nuestro zombie artista empieza a utilizar las funciones para dibujar, en este puzle un cuadrado de 50x50

// draw_a_square
for (var count = 0; count < 4; count++) {
  moveForward((50));
  turnRight(90);
}

//puzzle 54, seguimos trabajando con funciones y bucles para dibujar 3 cuadrados que se tocan por un vértice

penColour(colour_random());
for (var count2 = 0; count2 < 3; count2++) {
  // draw_a_square
  for (var count = 0; count < 4; count++) {
    moveForward((100));
    turnRight(90);
  }
  turnRight(120);
}

// puzzle 55, combinamos nuevamente una estructura de control y un bucle para llenar la pantalla de cuadrados

for (var count2 = 0; count2 < 36; count2++) {
  penColour(colour_random());
  // draw_a_square
  for (var count = 0; count < 4; count++) {
    moveForward((100));
    turnRight(90);
  }
  turnRight(10);
}

// puzzle 56, seguimos ayudando al zombie artista mientras avanzamos en JS


// draw_a_square
for (var count = 0; count < 4; count++) {
  moveForward((50));
  turnRight(90);
}
moveForward(60);
turnRight(90);
// draw_a_square
for (var count2 = 0; count2 < 4; count2++) {
  moveForward((60));
  turnRight(90);
}
turnLeft(90);
moveForward(10);
turnRight(90);
// draw_a_square
for (var count3 = 0; count3 < 4; count3++) {
  moveForward((70));
  turnRight(90);
}
turnLeft(90);
moveForward(10);
turnRight(90);
// draw_a_square
for (var count4 = 0; count4 < 4; count4++) {
  moveForward((80));
  turnRight(90);
}
turnLeft(90);
moveForward(10);
turnRight(90);
// draw_a_square
for (var count5 = 0; count5 < 4; count5++) {
  moveForward((90));
  turnRight(90);
}


// puzzle 57, recibimos otro trofeo, ahora estamos introduciendo el elemento contador en nuestro código

var contador;

for (contador = 50; contador <= 90; contador += 10) {
  // draw_a_square
  for (var count = 0; count < 4; count++) {
    moveForward((contador));
    turnRight(90);
  }
}

// puzzle 58, 


