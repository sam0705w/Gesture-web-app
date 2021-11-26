var prediction_1=""


Webcam.set({
    width:350,
    height:455,
    image_format:"png",
    png_quality:90,
})
var webcam=document.getElementById("camera")

Webcam.attach("#webcam")

function capture(){
    Webcam.snap(function(data_uri){document.getElementById("result").innerHTML="<img src="+data_uri+">"})
}

function ttos(){
    var symth=window.speechSynthesis
    var text1= "The had gesture is "+prediction_1 
    var speech=new SpeechSynthesisUtterance(text1)
    symth.speak(speech)
}
console.log(ml5.version)
var classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WAJOU1cFZ/model.json",modelLoaded)

function modelLoaded(){
    console.log("modelLoaded")
}