function contar() {
    let inicio = document.getElementById('numin')
    let fim = document.getElementById('numfim')
    let passo = document.getElementById('numpasso')
    let res = document.getElementById('res')
    if (passo.value.length == 0 || inicio.value.length == 0 || fim.value.length == 0 ) {
        window.alert('Contagem Impossível')
    } else { 
        res.innerHTML = "Contando: "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value) 
        if (i<f) { 
       for (let c = i;c <= f; c += p ) {
        res.innerHTML += `${c}\u{1F449}`}
    } else {
    for (let c = i;c >= f; c -= p ) {
    res.innerHTML += `${c}\u{1F449}`}


    } res.innerHTML += `\u{F13C1}`
}
}   
