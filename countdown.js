function countdown(duration, display = null, format = "s") {
  var timer = duration;
  var result = "";
  var timeinterval = setInterval(function () {
    var hours = Math.floor(timer / 3600);
    var minutes = Math.floor((timer % 3600) / 60);
    var seconds = timer % 60;

    //Anteponiendo un 0 a los minutos si son menos de 10 
    hours = minutes < 10 ? '0' + hours : hours;

    //Anteponiendo un 0 a los minutos si son menos de 10 
    minutes = minutes < 10 ? '0' + minutes : minutes;

    //Anteponiendo un 0 a los segundos si son menos de 10 
    seconds = seconds < 10 ? '0' + seconds : seconds;

    for (let i = 0; i < format.length; i++) {
      switch (format.charAt(i).toLowerCase()) {
        case "h":
          result += hours;
          break;
        case "m":
          result += minutes;
          break;
        case "s":
          result += seconds;
          break;
      }
      result += ":"
    }
    result = result.slice(0, -1);

    display.empty().html(result);

    if (--timer < 0) {
      clearInterval(timeinterval);
    }
  }, 1000);
}
