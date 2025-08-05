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

    // abrir modal
window.onload = () => { //depois que a pagina carregar abrir o modal
    document.getElementById('modal').style.opacity = '1';
}

    //botão de fechar o modal
const fecharModal = document.getElementById('fecharModal');
fecharModal.addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
})