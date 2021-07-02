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
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/usnQD0v1Y/model.json",modelloaded);
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
        
        document.getElementById("e2_name").innerHTML=results[1].label;
        if (results[0].label == "victory") {
          document.getElementById("e_emoji").innerHTML="&#9996;";
        }
        if (results[0].label == "amazing") {
          document.getElementById("e_emoji").innerHTML="&#128076;";
        }
        if (results[0].label == "best") {
          document.getElementById("e_emoji").innerHTML="&#128077;";
        }

        if (results[1].label == "victory") {
          document.getElementById("e2_emoji").innerHTML="&#9996;";
        }
        if (results[1].label == "amazing") {
          document.getElementById("e2_emoji").innerHTML="&#128076;";
        }
        if (results[1].label == "best") {
          document.getElementById("e2_emoji").innerHTML="&#128077;";
        }
    }
}
