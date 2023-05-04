
var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;

function showImage(){
	var op = 0.1;  // initial opacity
	// myImage.style.visibility = hidden;
	myImage.style.opacity = 0
	setTimeout(null, 100)
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	// myImage.style.visibility = visible;


	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}

	var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        myImage.style.opacity = op;
        myImage.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);

	setTimeout(showImage, 5000);
}

function play(){
	if (start.getDate() > 06 ){
		start = new Date(2023, 4, 06, 18, 00);
	}else{
		start = new Date(2023, 0, 24, 10, 00);

	}
	flag = 1 - flag;
	document.getElementById("typeDiv").style.opacity = flag;
	document.getElementById("imgTxt").style.opacity = 1 - flag;
	if(t == 0){
		//setTimeout(showImage, 1000);
		showImage()
	}
	t++;
}

function buttonFadeIn(){
	if(btnVal < 1){
		btnVal += 0.025;
		btn.style.opacity = btnVal;
	}
	else{
		clearInterval(buttonInterval);
		if(ok == 3){
			ok += 1;
		}
	}
}

function loadIamge(){
	document.getElementById("img").setAttribute("src",imageArray[0])
}

function event(){

	// showImageInterval = setInterval(preshowImage, 100);

	imgInterval = setInterval(function (){
		if(ok == 3){
			setTimeout(function(){buttonInterval = setInterval(buttonFadeIn, 50);}, 1500);
			clearInterval(imgInterval);
		}
	}, 50);
}

var showImageInterval;
var imgInterval;
var buttonInterval;

event();
