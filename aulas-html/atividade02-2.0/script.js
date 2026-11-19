console.log('Sobrevivente conectado ao DOM!');

const cabecalho = document.querySelector('#btn-tema');

const boasVindas = document.querySelector('#boas-vindas');

const tituloSite = document.querySelector('header h1');

const listaBeneficios = document.querySelectorAll('ol li');

console.log(`Existem ${listaBeneficios.length} itens na lista de beneficios.`)

const campoNome = document.querySelector('input[type="text"]');
const campoEmail = document.querySelector('input[type="email"]');

tituloSite.textContent = 'The Walking Date 🧟'

const cite = document.querySelector('cite')

cite.innerHTML = '- <strong>Zezinho da Foice</strong>, Sobrevivete Nível 5'

const textoBoasVindas = document.querySelector('#boas-vindas h2').textContent

console.log(textoBoasVindas)

const aside = document.querySelector('aside')

aside.style.borderColor = 'var(--cor-sangue)'

aside.style.fontSize = '1.1rem';

const imagem = document.querySelector('img')

console.log(imagem.getAttribute('alt'))

imagem.setAttribute('alt','Casal de zumbis apaixonados caminhando ao pôr do sol')

campoNome.value = 'Sobrevivente anônimo'

const tbody = document.querySelector('tbody tr')

tbody.classList.add('destaque-infectado')

const aviso = document.createElement('p');

aviso.textContent = '⚠️ ALERTA DE HORDA: Encontros hoje apenas em zonas seguras!'

aviso.style.backgroundColor = '#FF0000'
aviso.style.color = 'white'
aviso.style.textAlign = 'center'
aviso.style.padding = '20px';
aviso.style.borderRadius = '10px';

const barraAlerta = document.querySelector('#barra-alerta')

barraAlerta.appendChild(aviso)

const novoBeneficio = document.createElement('li');
novoBeneficio.textContent = 'Seguro contra perda de membros durante o primeiro encontro.'

const olBeneficios = document.querySelector('#beneficio ol')

olBeneficios.appendChild(novoBeneficio)

const fecharAlerta = document.querySelector('#fechar-alerta')

fecharAlerta.addEventListener('click', function() {
    document.querySelector('#barra-alerta').remove()
})

const htmlRoot = document.documentElement;

btnTema.addEventListener('click', function() {
    if (htmlRoot.getAttribute('data-theme' === 'light')) {
        htmlRoot.removeAttribute('data-theme')
    }
    else {
        htmlRoot.setAttribute('data-theme','light')
    }
})



