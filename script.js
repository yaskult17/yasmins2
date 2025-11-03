document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const links = document.querySelectorAll('[data-tab]');
  const cards = document.querySelectorAll('.card');

  function showTab(tabName){
    // Oculta todas abas
    tabs.forEach(t => {
      t.classList.remove('active');
      t.style.opacity = 0;
      t.style.transform = 'translateX(50px)';
    });

    // Mostra aba selecionada
    const target = document.getElementById(tabName);
    if(target){
      target.classList.add('active');
      setTimeout(() => {
        target.style.opacity = 1;
        target.style.transform = 'translateX(0)';
      }, 50);
    }

    // Atualiza links ativos
    links.forEach(link => link.classList.remove('active'));
    links.forEach(link => { if(link.dataset.tab === tabName) link.classList.add('active'); });

    // Animação dos cards ao abrir aba menu
    if(tabName === 'menu'){
      const menuCards = document.querySelectorAll('#menu .card');
      menuCards.forEach((card, index) => {
        card.classList.remove('show');
        setTimeout(() => {
          card.classList.add('show');
        }, index * 150);
      });
    }
  }

  // Clique nos links
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      showTab(link.dataset.tab);
    });
  });

  // Formulário
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Mensagem enviada! 💖');
    form.reset();
  });
});