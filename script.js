const audio=document.getElementById('audio');
const playBtn=document.getElementById('play');
const title=document.getElementById('title');
const progress=document.getElementById('progress');

document.querySelectorAll('.track').forEach(t=>{
  t.onclick=()=>{
    audio.src=t.dataset.src;
    title.textContent=t.textContent;
    audio.play();
    playBtn.textContent='⏸';
  }
});

playBtn.onclick=()=>{
  if(audio.paused){ audio.play(); playBtn.textContent='⏸'; }
  else{ audio.pause(); playBtn.textContent='▶'; }
};

audio.ontimeupdate=()=>{
  progress.value=(audio.currentTime/audio.duration)*100||0;
};

progress.oninput=()=>{
  audio.currentTime=(progress.value/100)*audio.duration;
};
