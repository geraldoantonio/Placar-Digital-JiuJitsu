window.player1 = new Player('player1', 'Atleta 1');
window.player2 = new Player('player2', 'Atleta 2');
window.timer = new Timer();

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('[data-timer-start]');
  const configContent = document.querySelector('[data-config-content]');

  startButton.addEventListener('click', () => {
    configContent.classList.add('hide');

    if (timer.timeInSeconds() <= 0) {
      startButton.classList.add('hide');
      return
    }

    timer.toggle();
    startButton.innerHTML = timer.started ? 'Pausar' : 'Continuar';
  });

  document.querySelectorAll('input[type="range"]').forEach(input => {
    input.addEventListener('input', (e) => {
      const value = e.target.value;
      const id = e.target.id;

      document.querySelector('label[for="' + id + '"] > span').innerHTML = `${value} minutos`;
    });
  });
});