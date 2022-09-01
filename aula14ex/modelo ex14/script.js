function verificar() {
    let num = document.getElementById('num')
    let tab = document.getElementById('tab')
    if(num.value.length == 0){
    alert('Digite um número')

    }
    else {
        let n = Number(num.value)
        let c = 0
        tab.innerHTML = ""
    for (c*n; c <= 100; c++) {
    let item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}`
    tab.appendChild(item)
        
    }


    }
}