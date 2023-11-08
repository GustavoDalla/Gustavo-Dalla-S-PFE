function verifica() {
    var img = document.getElementById('img')
    var txt = document.getElementById('txt')
    var radio = document.getElementsByName('radio')
    var idade = document.getElementById('idade').value
    tudo.style.display = "block";
    img.style.display = "block";
    if (radio[0].checked) {
        if (idade <= 12) {
            txt.innerHTML = `Voce e uma criança com ${idade} anos`
            img.src = "img/criançam.png"
        } else if (idade > 12 && idade < 18) {
            txt.innerHTML = `Voce e um adolescente com ${idade} anos`
            img.src = "img/adolescente.png"
        } else if (idade >= 18 && idade < 60) {
            txt.innerHTML = `Voce e um adulto com ${idade} anos`
            img.src = "img/adulto.png"
        } else if (idade >= 60) {
            txt.innerHTML = `Voce e um idoso com ${idade} anos`
            img.src = "img/idoso.png"
        }
    } else if (radio[1].checked) {
        if (idade <= 12) {
            txt.innerHTML = `Voce e uma criança com ${idade} anos`
            img.src = "img/criança.png"
        } else if (idade > 12 && idade < 18) {
            txt.innerHTML = `Voce e uma adolescente com ${idade} anos`
            img.src = "img/adolescente.png"
        } else if (idade >= 18 && idade < 60) {
            txt.innerHTML = `Voce e uma adulta com ${idade} anos`
            img.src = "img/adulta.png"
        } else if (idade >= 60) {
            txt.innerHTML = `Voce e uma idosa com ${idade} anos`
            img.src = "img/idosa.png"
        }
    }
}