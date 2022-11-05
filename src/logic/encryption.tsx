//Tipado de la funcion
type TSEncryption = (phrase : string, key: number) => string;
type TSlet = string;


const Encryption: TSEncryption = (phrase : string, key: number) =>  {
    /* Rotacion de alfabeto  */

    let word, rotation, result : TSlet = '';
    let alphabet: TSlet = 'a1bc2de3fg4hi5jk6lm7no8pq9rs0tuvwxyz';

    /* Rotacion de alfabeto  */

    /*
        La "key" indica la cantidad de posiciones que rotan las letras
        del alfabeto, usando "slice(-key)" obtendremos los ultimos valores
        del alfabeto segun el numero de la "key".

        Usando la logica "rotation += alphabet.slice(0, alphabet.length - key);"
        podemos agregar los ultimos valores del alfabeto al principio.

        El metodo "slice(init, end)" permite copiar un array, extrayendo los valores que le indiquemos.
        Con "init" indicamos el indice donde empieza la extraccion y "end" indicamos el final de la extracion.
    */

    rotation = alphabet.slice(-key);
    rotation += alphabet.slice(0, alphabet.length - key);

    /* Cifrar la frase  */

    for (let i = 0; i < phrase.length; i++) {
        //Almacenar cada letra de la frase en un arraglo de caracteres
        word = phrase[i];

        //Verificar si existen espacios, si no, realizar cambio de letras.
        word === ' ' ? word = '' : word = rotation[alphabet.indexOf(word)];

        /*
            La logica "rotation[alphabet.indexOf(word)];" obtiene la letra del alfabeto rotado,
            con "alphabet.indexOf(word)" devuelve el indice donde se encuentra la letra de nuestro
            alfabeto original, en "rototarion" obtedremos la letra que se encuentra en esa posicion
            cambiando asi la de la frase por la nueva letra del alfabeto rotado.
        */

        /*
            Verificar que existan caracteres validos en el alfabeto.
        */
        word === undefined ? result = '*Characters only' : result += word;
        result[0] === "*" ? result = '*Characters only' : result;
    }

    //Retornamos la frase encriptada;
    return result;
}

export default Encryption;