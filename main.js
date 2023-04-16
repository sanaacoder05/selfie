var SpeechRecognition = window.webkitSpeechRecognition;
//api that converts speech to text
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {
    //on result holds all the values of speech converted to text

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
  
    console.log(Content);

      if(Content =="take my selfie")
      {
        console.log("taking selfie --- ");
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 10 seconds";
    //speak_data= document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    //utterThis - is a variable in which we will store the converted text to speech.
    //SpeechSynthesisUtterance - is the function of an API that will convert text to speech
    //We are using a new keyword because, for every next text, we want to convert that text to speech.
    

    synth.speak(utterThis);
    //speak() function is a predefined function of the API

    Webcam.attach(camera);

    setTimeout(function()
    
        {
            img_id="selfie1";
            take_snapshot();
            speak_data= "Taking your next Selfie in 10 seconds";
            var utterThis = new SpeechSynthesisUtterance (speak_data);
            synth.speak(utterThis);
        }, 5000);

        setTimeout(function()
    
        {
            img_id="selfie2";
            take_snapshot();
            speak_data= "Taking your next Selfie in 10 seconds";
            var utterThis = new SpeechSynthesisUtterance (speak_data);
            synth.speak(utterThis);
        }, 10000);

        setTimeout(function()
    
        {
            img_id="selfie3";
            take_snapshot();
            
        }, 150000);

    }
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,

});
function take_snapshot()
{
console.log(img_id);
Webcam.snap (function(data_uri) {
if(img_id=="selfie1"){
document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
}
if(img_id="selfie2"){
document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
}
if(img_id="selfie3"){
document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
}
});
}



