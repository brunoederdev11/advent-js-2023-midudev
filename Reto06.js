function maxDistance(movements) {
    const recorrido = movements.split("");
    let contador = 0;
    let asterisco = 0;

    for (let i = 0; i < recorrido.length; i++) {
        if (recorrido[i] === ">") {
            contador++;
        } else if (recorrido[i] === "<") {
            contador--;
        } else {
            asterisco++;
        }
    }

    return Math.abs(contador) + asterisco;
}
