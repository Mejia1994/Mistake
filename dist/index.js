console.log(state());
/**
 * Al no pasar un 2do un ID como segundo parametro, toma un funcion que hace lo que se
 * explica en el siguiente caso.
 */

const bindValor = new bind('valor', function (valor) {
    console.log('valor : ', valor);
});

state(bindValor);


/**
 * el collback como 3er parametro es opcional y se ejecuta al cambiar el estado valor
 */

const bindValorState = new bind('valor', 'stater', function (valor) {
    console.log('el valor... ', valor);
});

state(bindValorState);
