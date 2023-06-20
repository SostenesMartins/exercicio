const btn = document.querySelector('.btn')
btn.addEventListener('click', enviar)

function enviar() {
    const data = new Date().getFullYear()
    const ano = parseInt(document.querySelector('#input1').value)
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const res = document.querySelector('.text')

    let imagem = ''
    const idade = data - ano

    if (ano > data) {
        alert('Ano invalido!!, Digite o ano correto!!')
        return
    }

    if (idade <= 3 && sexo === "Masculino") {
        imagem = 'assets/bebeM.jpg'
    } else if (idade <= 3 && sexo === "Feminino") {
        imagem = 'assets/bebeF.jpg'
    } else if (idade <= 11 && sexo === "Masculino") {
        imagem = 'assets/criancaM.jpg'
    } else if (idade <= 11 && sexo === "Feminino") {
        imagem = 'assets/criancaF.jpg'
    } else if (idade <= 19 && sexo === "Masculino") {
        imagem = 'assets/adolecenteM.jpg'
    } else if (idade <= 19 && sexo === "Feminino") {
        imagem = 'assets/adolecenteF.jpg'
    } else if (idade <= 59 && sexo === "Masculino") {
        imagem = 'assets/adultoM.jpg'
    } else if (idade <= 59 && sexo === "Feminino") {
        imagem = 'assets/adultaF.jpg'
    } else if (idade <= 95 && sexo === "Masculino") {
        imagem = 'assets/idosoM.jpg'
    } else if (idade <= 95 && sexo === "Feminino") {
        imagem = 'assets/idosoF.jpg'
    } else {
        alert('Error!!')
        return
    }

    const photo = document.querySelector('.photos')
    photo.src = imagem

    res.innerHTML = `Tem a idade de ${idade} anos, E do gênero ${sexo}` 

}
