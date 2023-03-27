> **Mistake**

- ##### Agregar o actualizar valores del estado.

```javascript
state({key: value});
```

- ##### Obtener el estado actual.

```javascript
let s = state();
```

- ##### Obtener un valor del estado.

```javascript
let key = state('key');
```

- ##### Deja una función a la escucha de cambios en el estado.

```javascript
state(function () {
    console.log('cambios en el estado.')
})
```
