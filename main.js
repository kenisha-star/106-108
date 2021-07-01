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