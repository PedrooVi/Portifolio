document.addEventListener('DOMContentLoaded', () => {
    // Pegando os itens da pagina com base no ID
    const formulario = document.getElementById('form-contato');
    const nome = document.getElementById('nome');
    const mensagem = document.getElementById('mensagem');
    const modalSucesso = document.getElementById('mensagem-sucesso');

    formulario.addEventListener('submit', (e)=> {
        e.preventDefault();

        let formularioValido = true;

        // Validacoes de campos
        if(nome.value.trim()=== ''){
            document.getElementById('erro-nome').style.display = 'block';
            nome.style.borderColor = '#ff6b6b'
            formularioValido =false;
        } else {
            document.getElementById('erro-nome').style.display ='none'
            nome.style.borderColor = 'transparent'
        }
        // Validadcao do campo de menssagem 
         if(mensagem.value.trim()=== ''){
            document.getElementById('erro-mensagem').style.display = 'block';
            mensagem.style.borderColor = '#ff6b6b'
            formularioValido = false;
        } else {
            document.getElementById('erro-mensagem').style.display ='none'
            mensagem.style.borderColor = 'transparent'
        }
       
        if(formularioValido){
            modalSucesso.style.display = 'block'
            const textoMensagem = `Olá Pedro! Meu nome é *${nome.value.trim()}*.${mensagem.value.trim()}`;
            const textoCodificado = encodeURIComponent(textoMensagem);

            const urlWhatsApp =`https://api.whatsapp.com/send?phone=5531981156288&text=${textoCodificado}`;

            setTimeout(() =>{
                window.open(urlWhatsApp, '_blank')
                formulario.reset()
                modalSucesso.style.display = 'none'
            }, 1000)
        }

    })
})