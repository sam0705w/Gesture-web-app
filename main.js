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

function cam(){
    var img=document.getElementById("capture_img")
    classifier.classify(img,gotResults)
    }
    function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else if(results){
        console.log(results)
        document.getElementById("result_emotion_name").innerHTML=results[0].label
        prediction_1=results[0].label
        ttos()
        if(prediction_1=="ok"){
    document.getElementById("emo").innerHTML="&#128076;"
        }
    
        
        if(prediction_1=="thumbs up"){
            document.getElementById("emo").innerHTML="&#128077;"
        }
    
    
        if(prediction_1=="peace"){
            document.getElementById("emo").innerHTML="&#9996;"
        }

    }
    }
