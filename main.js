Webcam.set({
    width:350,height:300,
    image_format:'png',png_quality:90
});
Webcam.attach("#camera");
function capture() {
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/usnQD0v1Y/",modelloaded);
function modelloaded() {
    console.log("model is loaded");
}
function image1() {
   i1=document.getElementById("captured_image");
   classifier.classify(i1,got_results);
}
function got_results(error,results) {
    if (error) {
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("e_name").innerHTML=results[0].label;
        
        document.getElementById("e2_name").innerHTML=results[0].label;
        if (results[0].label == "happy") {
          document.getElementById("e_emoji").innerHTML="&#128522;";
        }
        if (results[0].label == "sad") {
          document.getElementById("e_emoji").innerHTML="&#128532;";
        }
        if (results[0].label == "angry") {
          document.getElementById("e_emoji").innerHTML="&#128548;";
        }

        if (results[1].label == "happy") {
          document.getElementById("e2_emoji").innerHTML="&#128522;";
        }
        if (results[1].label == "sad") {
          document.getElementById("e2_emoji").innerHTML="&#128532;";
        }
        if (results[1].label == "angry") {
          document.getElementById("e2_emoji").innerHTML="&#128548;";
        }
    }
}
