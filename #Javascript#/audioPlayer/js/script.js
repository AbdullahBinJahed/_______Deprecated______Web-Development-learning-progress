var audioList = new Array("[Magia_Record]", "Cossack_Lullaby", "Nippon_Egao", "Nyanpasu", "Yume_wo_Minai");
var index = 0;
var playState = false;
var audio = new Audio("music/" + audioList[0] + ".mp3");

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
      audio = new Audio("music/" + audioList[index] + ".mp3");
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
      audio = new Audio("music/" + audioList[index] + ".mp3");
      audio.play();
      playState = true;
      break;
  }
}