const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    // Fecha todos os outros antes de abrir o clicado
    faqItems.forEach(el => {
      if (el !== item) el.classList.remove("active");
    });

    // Alterna ativo
    item.classList.toggle("active");
  });
});
