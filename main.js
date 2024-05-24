function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3-nDHwJen/model.json', modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);

        r= Math.round(Math.random()*255)
        g= Math.round(Math.random()*255)
        b= Math.round(Math.random()*255)
        document.getElementById("result_label").style.color="rgb("+ r +","+ g + ","+ b +")"

        document.getElementById("result_label").innerHTML= "Posso ouvir: " + results[0].label;
        document.getElementById("result_confidence").innerHTML= "Precisão: " + results[0].confidence.toFixed(0) * 100 + "%";

        if (results[0].label == "palmas"){
            document.getElementById("alien1").src="aliens-01.gif"
            document.getElementById("alien2").src="aliens-02.png"
            document.getElementById("alien3").src="aliens-03.png"
            document.getElementById("alien4").src="aliens-04.png"
        }

        if (results[0].label == "aaa"){
            document.getElementById("alien1").src="aliens-01.png"
            document.getElementById("alien2").src="aliens-02.gif"
            document.getElementById("alien3").src="aliens-03.png"
            document.getElementById("alien4").src="aliens-04.png"
        }

        if (results[0].label == "teclado"){
            document.getElementById("alien1").src="aliens-01.png"
            document.getElementById("alien2").src="aliens-02.png"
            document.getElementById("alien3").src="aliens-03.gif"
            document.getElementById("alien4").src="aliens-04.png"
        }

        if (results[0].label == "sopro"){
            document.getElementById("alien1").src="aliens-01.png"
            document.getElementById("alien2").src="aliens-02.png"
            document.getElementById("alien3").src="aliens-03.png"
            document.getElementById("alien4").src="aliens-04.gif"
        }

        if (results[0].label == "Background Noise"){
            document.getElementById("alien1").src="aliens-01.png"
            document.getElementById("alien2").src="aliens-02.png"
            document.getElementById("alien3").src="aliens-03.png"
            document.getElementById("alien4").src="aliens-04.png"
        }

    }

}
