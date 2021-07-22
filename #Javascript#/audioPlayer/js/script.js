var audioList = new Array("music/[Magia_Record].mp3", "music/Cossack_Lullaby.mp3", "music/Nippon_Egao.mp3", "music/Nyanpasu.mp3", "music/Yume_wo_Minai.mp3");
var index = 0;
var playState = false;
var audio = new Audio(audioList[0]);

for (var i = 0; i < 3; i++)
{
  document.querySelectorAll(".animePlayer")[i].addEventListener("click", function()
  {
    var text = this.innerHTML;
    audioPlay(text);
  });
}

function audioPlay(text)
{
  switch (text)
  {
    case "previous":
      index--;
      if (index < 0)
        index = 4;
      if (typeof(audio) == "object")
      {
        audio.pause();
        audio = null;
      }
      audio = new Audio(audioList[index]);
      audio.play();
      playState = true;
      break;
  
    case "play/pause":
      if (playState)
      {
        audio.pause();
        playState = !playState;
      } else
      {
        audio.play();
        playState = !playState;
      }
      break;
  
    case "next":
      index++;
      if (index > 4)
        index = 0;
      if(typeof(audio) == "object")
      {
        audio.pause();
        audio = null;
      }
      audio = new Audio(audioList[index]);
      audio.play();
      playState = true;
      break;
  }
}