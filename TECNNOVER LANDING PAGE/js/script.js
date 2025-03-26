document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animate');

    function checkIfInView() {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('show');
            }
        });
    }

    // Otimização com debounce para evitar múltiplas execuções desnecessárias
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(checkIfInView, 50);
    });

    checkIfInView(); // Verifica na carga da página

    // Evento para os botões "Saiba mais"
    document.querySelectorAll('.service-card button, .team-member button').forEach(button => {
        button.addEventListener('click', function(e) {
            const destino = 'saiba-mais.html'; // Altere conforme necessário
            if (destino) {
                e.preventDefault();
                window.location.href = destino;
            }
        });
    });
});
