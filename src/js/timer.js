function Timer(minute = 0, renderElementSelector = '[data-show-timer]', countdownSoundSelector = '[data-countdown-sound]') {
  this.minute = minute;
  this.started = false;

  this.timeInSeconds = () => {
    return this.minute * 60;
  }

  this.setMinutes = (minute) => {
    this.minute = minute;
    this.stop();
    this.render();
  }

  this.toggle = () => { this.started ? this.stop() : this.start(); }

  this.start = () => {
    this.started = true;

    this.interval = setInterval(() => {
      if (this.timeInSeconds() >= 1) {
        this.minute = (this.timeInSeconds() - 1) / 60;
      } else {
        this.minute = 0;
        clearInterval(this.interval);
      }

      this.countSoundPlayer(this.timeInSeconds() <= 4)

      this.render();
    }, 1000);
  }

  this.stop = () => {
    this.started = false;
    this.countSoundPlayer(false)

    clearInterval(this.interval);
  }

  this.reset = () => {
    this.minute = 0;
    this.render();
  }

  this.timer_format = () => {
    const minutes = Math.floor(this.timeInSeconds() / 60);
    const seconds = this.timeInSeconds() % 60;

    return `${minutes.toFixed(0).padStart(2, '0')}:${seconds.toFixed(0).padStart(2, '0')}`;
  }

  this.render = () => {
    const element = document.querySelector(renderElementSelector)

    if (element) { element.innerHTML = this.timer_format() }
  }

  this.countSoundPlayer = (play = true) => {
    const audioPlayer = document.querySelector(countdownSoundSelector);

    if (play) {
      audioPlayer.paused && audioPlayer.play();
    } else {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    }
  }
}