const contactModal = document.getElementById("contactModal");
const contactForm = document.getElementById("contactForm");

// Abrir formulário
function abrirFormulario() {
    contactModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// Fechar formulário
function fecharFormulario() {
    contactModal.classList.remove("active");
    document.body.style.overflow = "";
}

// Fechar clicando fora do formulário
contactModal.addEventListener("click", function (event) {
    if (event.target === contactModal) {
        fecharFormulario();
    }
});

// Fechar apertando ESC
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        fecharFormulario();
    }
});

// Enviar formulário
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const servico = document.getElementById("servico").value;
    const orcamento = document.getElementById("orcamento").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto =
        `Olá AI Nexus!%0A%0A` +
        `*Nova solicitação de projeto*%0A%0A` +
        `👤 Nome: ${nome}%0A` +
        `📧 Email: ${email}%0A` +
        `📱 Telefone: ${telefone}%0A` +
        `🛠️ Serviço: ${servico}%0A` +
        `💰 Orçamento: ${orcamento} CVE%0A%0A` +
        `📝 Projeto:%0A${mensagem}`;

    // COLOQUE AQUI O SEU NÚMERO DE WHATSAPP
    const numeroWhatsApp = "238SEUNUMERO";

    window.open(
        `https://wa.me/${numeroWhatsApp}?text=${texto}`,
        "_blank"
    );

    contactForm.reset();
    fecharFormulario();
});