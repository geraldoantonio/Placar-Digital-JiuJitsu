document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.form-submit').addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    timer.reset();
    player1.reset();
    player2.reset();

    player1.setName(data.get('player1'));
    player2.setName(data.get('player2'));

    timer.stop();
    timer.setMinutes(data.get('timer'));

    modal.style.display = "none";
  });
});