"use strict";

describe("Conceptos básicos: variables", () => {
    it("Usaremos let para definir variables", () => {
        let name = "Frodo";
        // cambia el valor de la variable
        name = 'Elrond';
        expect(name).to.equal("Elrond");
    });

    it("Usaremos const para definir constantes", () => {
        // "name" es constante, no se puede reasignar
        // Cambia su valor
        const name = "Bilbo";

        expect(name).to.equal("Bilbo");
    });

    it("No usaremos var para definir variables", () => {
        // utiliza let en lugar de "var" para definir variables
        let country = "Gondor";

        expect(country).to.equal("Gondor");
    });
});

describe("Números en Javascript", () => {
    it("Permite definir números y realizar operaciones", () => {
        const n = 7;
        const result = 100 + n;
        expect(result).to.equal(107)
    });

    it("Los números pueden ser enteros o decimales", () => {
        const n = 30.64;
        expect(n).to.equal(30.64);
    })

    it("Puedes utilizar ++ para autoincrementar un número en 1 unidad", () => {
        let n = 6;
        // incrementa n usando el operador ++
        const result = 100 + ++n;
        expect(result).to.equal(107)
    });
    it("Puedes utilizar -- para decrementar un número en 1 unidad", () => {
        let n = 8;
        // decrementa n usando el operador --
        const result = 100 + --n;
        expect(result).to.equal(107)
    });
});

describe("Operaciones aritméticas", () => {
    it("Usando suma", () => {
        const a = 10;
        let b = 90;

        expect(a+b).to.equal(100);
    })
    it("Usando multiplicación", () => {
        const a = 10;
        let b = 1.3;
        expect(a*b).to.equal(13);
    })
    it("Usando división", () => {
        const a = 10;
        let b = 4;
        expect(a/b).to.equal(2.5);
    })
})

describe("Strings", () => {
    it("Los strings representan cadenas de texto", () => {
        let weapon = "hacha";
        let phrase = "Cuenta con mi " + weapon + "!";
        expect(phrase).to.equal("Cuenta con mi hacha!")
    });
});

describe("Booleanos", () => {
   it("un booleano puede tomar dos valores", () => {
        let b = false;
        expect(b).to.equal(false);
   }) 
});

describe('Comparaciones en Javascript', () => {
    it("usando ===", () => {
        const number = 20;
        //completa la asignación usando number y el comparador ===
        let expresion = number === 10;
        expect(expresion).to.equal(false)
    })

    it("usando !==", () => {
        const language = "Javascript";
        //completa la asignación usando language y el comparador !==
        let expresion = language !== 'Javascript'
        expect(expresion).to.equal(false)
    })
});

describe("condicionales en javascript", () => {
    it("completa el valor del resultado esperado (expected)", () => {

        let name = "Pepe";

        let result = "???";

        // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/length
        if (name.length === 6) {
        
            result = "OK"
        }

        // substituye ??? por el valor que tiene la variable "result"        
        expect(result === "???").to.be.true;
    })

    it("comparando cadenas (strings)", () => {

        let a = 'a';
        let b = 'b';
        let result;

        if (a < b) {
            result = '???';
        } else {
            result = 'charmander';
        }

        // substituye ??? por el valor que tiene la variable "result"        
        expect(result === "???").to.be.true;
    })

    it("Interpolación de cadenas (strings) (1)", () => {
        let n = "Piña";
        let m = "Pepperoni";
        let q = 14;
        let result;

        // https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Math#operadores_aritm%C3%A9ticos
        if (q % 5 === 0) {
            result = "Pizza con " + n;
        } else {
            result = "???";
        }

        // substituye ??? por el valor que tiene la variable "result"        
        expect(result === "???").to.be.true;
    })

    it("Interpolación de cadenas (strings) (2)", () => {
        let n = "Piña";
        let m = "Pepperoni";
        let q = 14;
        let result;

        // https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Math#operadores_aritm%C3%A9ticos
        if (q % 7 === 0) {
            result = `???`;
        } else {
            result = `Pizza con ${m}`;
        }

        // substituye ??? por el valor que tiene la variable "result"        
        expect(result === "???").to.be.true;
    })
})

describe('Algebra booleana', () => {
    it("Usando el operador AND (&&)", () => {
        const a = true;
        //completa la asignación de b
        const b = true;
        const expression = a && b;
        expect(expression).to.equal(true);
    })
    it("Usando el operador OR (||)", () => {
        const a = false;
        //completa la asignación de b
        const b = false;
        const expression = a || b;
        expect(expression).to.equal(false);
    })
})



describe("Funciones (I)", () => {

    function evenOrOdd(n) {
        // cambia el contenido de la función para hacer
        // pasar los tests
        if ((n % 2 ) === 0){
        return "even";
        } else {
            return "odd"
        }
    }

    function greeting(name) {
        // cambia el contenido de la función para hacer
        // pasar los tests
        return 'Hola, '+ name +'!';
        
    }

    it("Función que nos dice si un número es par (even) o impar (odd)", () => {
        expect(evenOrOdd(2)).to.equal("even")
        expect(evenOrOdd(13)).to.equal("odd")
    })

    it("Función que nos devuelve un saludo para cada nombre", () => {
        expect(greeting("Javi")).to.equal("Hola, Javi!")
        expect(greeting("gente")).to.equal("Hola, gente!")
        expect(greeting("Mary")).to.equal("Hola, Mary!")
    })
})

describe("Funciones (II)", () => {

    function f(a, b, c) {
        return b - a + 4 * c;
    }

    function g(n, m) {
        return `Son ${m} y ${n}`;
    }

    function h(name) {
        
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/length
        if (name.length <= 4) {
            return "too short";
        } else if (name.length < 7) {
            return "adecquate";
        } else if (name.length < 12) {
            return "long";
        } else {
            return "very long";
        }
    }

    it("Cuál es el resultado de invocar la función? (1)", () => {

        let result = f(10, 30, 2);


        // substituye "???" por el valor que tiene la variable "result"        
        expect(result === 28).to.be.true;
    })

    it("Cuál es el resultado de invocar la función? (2)", () => {

        let result = g("Cerebro", "Pinky");


        // substituye "???" por el valor que tiene la variable "result"        
        expect(result === "Son Pinky y Cerebro").to.be.true;
    })

    it("Cuál es el resultado de invocar la función? (3)", () => {

        // substituye "???" por el resultado en cada caso
        expect(h("khaleesi mother of dragons breaker of chains") === "very long").to.be.true;
        expect(h("sarah") === "adecquate").to.be.true;
        expect(h("bob") === "too short").to.be.true;
        expect(h("robertson") === "long").to.be.true;
    })

})

describe("Colecciones en JS: Array", () => {
    it("Pueden crearse usando [ ]", () => {

        // crea un array "a" usando los corchetes []
        let a = []; 
        expect(Array.isArray(a)).to.be.true;
    })
    it("Pueden crearse usando new Array", () => {

        // crea un array "a" usando el constructor "new"
        let a = new Array ();
        expect(Array.isArray(a)).to.be.true;
    })
    it("Pueden estar vacíos o contener elementos", () => {

        // crea un array que esté vacío y otro que no esté vacío
        let emptyArray = new Array ();
        let nonEmptyArray = [0, 1, 2];
        expect(emptyArray).to.be.empty;
        expect(nonEmptyArray).not.to.be.empty;
    })
    it("Tienen una longitud correspondiente que podemos conocer con la propiedad 'length'", () => {

        let list = [10, "foo", true, "pepe"];

        // completa la definición que falta usando la propiedad length

        expect(list.length).to.equal(4);
    })
    it("Nos permiten acceder a cada elemento del array", () => {

        let fruits = ["Piña", "Manzana", "Fresa", "Melón"]

        // sustituye "???" en cada caso para acceder al elemento correspondiente de la lista

        expect(fruits[0]).to.equal("Piña");
        expect(fruits[3]).to.equal("Melón");
    })
    it("Nos permiten modificar cada elemento", () => {

        let fruits = ["Piña", "Manzana", "Fresa", "Melón"]

        // Añade el código que permite modificar el elemento correspondiente
        fruits[1]='Pera';
        expect(fruits).to.have.same.members(["Piña", "Pera", "Fresa", "Melón"])
    })

    it("Podemos añadir elementos", () => {
        let fruits = ["Piña", "Manzana", "Fresa", "Melón"]

        // Añade el código que permite modificar la lista (incluyendo un elemento al final)
        fruits.push ('Pera');
        expect(fruits).to.have.same.members(["Piña", "Manzana", "Fresa", "Melón", "Pera"])
    })
})

describe("Ejemplos resueltos: Operaciones iterables", () => {
    it("map nos permite realizar operaciones elemento a elemento", () => {

        let list = [1,5,7,9,11,13];

        function multiplicarPor2(num) {
            return num * 2;
        }

        // utiliza la función map para aplicar la función multiplicarPor2 a los números de la lista
        // SOLUCIÓN: 
        list = list.map(multiplicarPor2);
        
        expect(list).to.have.same.members([2,10,14,18,22,26]);
    })
    it("map nos permite realizar operaciones elemento a elemento (2)", () => {

        let list = [1,5,7,9,11,13];

        // utiliza la función map para aplicar la función multiplicarPor2 a los números de la lista
        // SOLUCIÓN: 
        list = list.map( n => n*2 );
        
        expect(list).to.have.same.members([2,10,14,18,22,26]);
    })

    it("filter recorre la lista y se queda con los elementos que cumplen una condición", () => {

        let list = [1,2,3,4,5,6,7,8,9];

        function esPar(num) {
            // si el número es par (divisible por 2) devuelve true
            return num % 2 == 0;
        }

        // utiliza la función filter para quedarte sólo con los números pares
        // SOLUCIÓN: 
        list = list.filter( esPar );
        
        expect(list).to.have.same.members([2,4,6,8]);
    })

    it("filter recorre la lista y se queda con los elementos que cumplen una condición (2)", () => {

        let list = [1,2,3,4,5,6,7,8,9];

        // utiliza la función filter para quedarte sólo con los números pares
        // SOLUCIÓN: 
        list = list.filter( num => num % 2 == 0 );
        
        expect(list).to.have.same.members([2,4,6,8]);
    })

    it("some recorre los elementos de la lista y comprueba si ALGUNO cumple la condición", () => {

        let list = [1, 2 , -27, 13, 40, 95 , 82, 9];

        function menorQue0(num) {
            return num < 0;
        }

        // aplica la función some para verificar si alguno de los números de la lista es menor que 0
        // SOLUCIÓN:
        let condicion = list.some(menorQue0);        
        
        expect(condicion).to.equal(true);
    })

    it("every recorre los elementos de la lista y comprueba si ALGUNO cumple la condición", () => {

        let list = [1, 2 , -27, 13, 40, 95 , 82, 9];

        function menorQue0(num) {
            return num < 0;
        }

        // aplica la función some para verificar si alguno de los números de la lista es menor que 0
        // SOLUCIÓN:
        let condicion = list.some(menorQue0);    
        // SOLUCIÓN ALTERNATIVA:
        // let condición = list.some( n => n < 0 );    
        
        expect(condicion).to.equal(true);
    })
})

describe("Operaciones iterables", () => {
    it("map nos permite realizar operaciones elemento a elemento", () => {

        let list = [1,5,7,9,11,13];

        // utiliza la función map para aplicar los números de la lista
        list= list.map (n => --n);
        

        expect(list).to.have.same.members([0,4,6,8,10,12]);
    })

    it("map nos permite realizar operaciones elemento a elemento (2)", () => {

        let list = ["Pikachu", "Charmander", "Magikarp"];

        // utiliza la función map para aplicar los números de la lista y guardar la nueva lista en result
        let result = list.map(word => word+', te elijo a ti!')

        expect(result).to.have.same.members([
            "Pikachu, te elijo a ti!",
            "Charmander, te elijo a ti!",
            "Magikarp, te elijo a ti!"
        ]);
    })

    it("Buscando el planeta con Array.includes", () => {

        let knownExoplanets = [ "TOI-1298 b","TOI-132 b","TOI-1333 b","TOI-1338 b","TOI-1431 b","TOI-1444 b","TOI-1478 b","TOI-150.01","TOI-157 b","TOI-1601 b","TOI-163 b","TOI-1634 b","TOI-1685 b","TOI-169 b","TOI-172 b","TOI-1728 b","TOI-1749 b","TOI-1749 c"];

        // utiliza la función includes para comprobar si la lista de planetas contiene el planeta TOI-1634 b
        let result = knownExoplanets.includes('TOI-1634 b');
        
        expect(result).to.equal(true);        
    })

    it("filtrando planetas", () => {

        let knownExoplanets = [ "TOI-1298 b","TOI-132 b","TOI-1333 b","TOI-1338 b","TOI-1431 b","TOI-1444 b","TOI-1478 b","TOI-150.01","TOI-157 b","TOI-1601 b","TOI-163 b","TOI-1634 b","TOI-1685 b","TOI-169 b","TOI-172 b","TOI-1728 b","TOI-1749 b","TOI-1749 c"];

        // utiliza la función filter para quedarnos con los planetas que terminan por la letra c
        // puedes utilizar la función .endsWith para comprobar si un string termina por una letra
        // p.ej. "Hola".endsWith('a') devuelve true
        let result = knownExoplanets.filter( word => word.endsWith("c") );
        

        // todos los planetas de result terminan con la letra c
        expect(result.every( p => p.endsWith('c'))).to.equal(true);        
    })

    // Bonus: Escribe un test como los anteriores con algún ejemplo que utilice 
    // una lista alguna de las funciones que hemos visto, como map o filter.
    
})