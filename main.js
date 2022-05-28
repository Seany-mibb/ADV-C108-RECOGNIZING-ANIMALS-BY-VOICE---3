function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/E5MeU6ft5/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults)
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        ear = document.getElementById("ear").style.visibility = "hidden";
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_sound_name").innerHTML = "Detected : " + results[0].label;
        document.getElementById("result_sound_accuracy").innerHTML = "Accuracy : " + (results[0].confidence*100).toFixed(2) + " % ";
        document.getElementById("result_sound_name").style.color = "rgb(" + r + ","+g+","+b+")";
        document.getElementById("result_sound_accuracy").style.color = "rgb(" + r + ","+g+","+b+")";
        
        img1 = document.getElementById("animal1");
        img2 = document.getElementById("animal2");
        img3 = document.getElementById("animal3");   
        img4 = document.getElementById("animal4");

        if(results[0].label == "Meow")
        {
            img1.style.visibility = 'visible';
            img2.style.visibility = 'hidden';
            img3.style.visibility = 'hidden';
            img4.style.visibility = 'hidden';
        }
        else if(results[0].label == "Moo")
        {
            img1.style.visibility = 'hidden';
            img2.style.visibility = 'visible';
            img3.style.visibility = 'hidden';
            img4.style.visibility = 'hidden';
        }
        else if(results[0].label == "Roar")
        {
            img1.style.visibility = 'hidden';
            img2.style.visibility = 'hidden';
            img3.style.visibility = 'visible';
            img4.style.visibility = 'hidden';
        }
        else
        {
            img1.style.visibility = 'hidden';
            img2.style.visibility = 'hidden';
            img3.style.visibility = 'hidden';
            img4.style.visibility = 'visible';
        }
    }
}