function playSound({audio, soundVolume = 1}) {
  const myAudio = new Audio(audio);
  myAudio.volume = soundVolume;
  myAudio.play();
}

export default playSound;
