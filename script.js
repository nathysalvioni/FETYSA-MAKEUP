document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling para os links da navegação
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight, // Ajusta para a altura do cabeçalho fixo
                    behavior: 'smooth'
                });
            }
        });
    });

    // Lógica para o formulário de cadastro
    const cadastroForm = document.getElementById('cadastroForm');
    const mensagemCadastro = document.getElementById('mensagemCadastro');

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio padrão do formulário

            // Coleta os dados do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const dataNascimento = document.getElementById('dataNascimento').value;

            // Simula o envio dos dados (em um cenário real, você enviaria para um servidor)
            console.log('Dados do Cadastro:', { nome, email, telefone, dataNascimento });

            // Exibe uma mensagem de sucesso
            mensagemCadastro.textContent = `Obrigado pelo seu cadastro, ${nome}! Em breve você receberá novidades e ofertas exclusivas no seu e-mail.`;
            mensagemCadastro.style.color = 'var(--primary-pink)'; // Garante que a mensagem seja visível

            // Limpa o formulário
            cadastroForm.reset();

            // Opcional: Esconde a mensagem após alguns segundos
            setTimeout(() => {
                mensagemCadastro.textContent = '';
            }, 7000);
        });
    }

    // Você pode adicionar mais funcionalidades JavaScript aqui, como:
    // - Carrossel de produtos em destaque
    // - Validação de formulário mais robusta
    // - Efeitos de animação ao scroll
});