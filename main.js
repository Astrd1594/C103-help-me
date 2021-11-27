Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#cameraview');
function takepic(){
    Webcam.snap(function(datauri){
        document.getElementById("pic").innerHTML = '<img id="picimg" src="' + datauri + '"/>'
    });
}
console.log("ML5 Version: ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_lbHFjcuf/");
function modelLoaded(){
    console.log('Model loaded');
}
function check(){
    image = document.getElementById("picimg");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("objectname").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}