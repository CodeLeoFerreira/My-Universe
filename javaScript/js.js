window.alert('olá, pesso desculpas, mas está pagina ainda está em construção, por favor, volte mais tarde! :)');
// animação do texto sendo digitado
const titulo = 'My Universe'
const textoAnimado = document.getElementById('textoAnimado');
let i = 0;

function escreverTexto() {
    if (i < titulo.length) {
        textoAnimado.textContent += titulo.charAt(i);
        i++;
        setTimeout(escreverTexto, 200)
    }else if (i >= titulo.length) {
        setTimeout(() => {
            textoAnimado.textContent = '';
            i = 0;
            escreverTexto();
        }, 2000); // espera 2 segundos antes de reiniciar a animação
    }
}
escreverTexto()

    // botao voltar ao inicio
const botao = document.getElementById('botaovoltar')
botao.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
});
}

