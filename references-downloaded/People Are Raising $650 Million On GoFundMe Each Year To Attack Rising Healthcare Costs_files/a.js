var init = function() {
	var $ = function(i) {return document.getElementById(i)},
		currentFrame = 1, maxFrame = 2, animating = false, render, autoPlay,
		userAgent = navigator.userAgent || navigator.vendor || window.opera
	
	if ( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || ( userAgent.match( /Android/i ) ))
		$('shell').className = 'mob';

	autoPlay = setInterval(nextFrame, 100);
	nextFrame();

	function frameInit(id) {
		if (animating) return;
		animating = true;
		$('ctnr').className = 'f'+currentFrame+'a';
		currentFrame = id;
		setTimeout(function() {frameResolve(id);}, 250);
	}
	function frameResolve(id) {
		animating = false;
		$('ctnr').className = 'f'+id;
	}
	function nextFrame() {
		if (currentFrame<maxFrame) frameInit(currentFrame+1);
	}

	onExitHandler1 = function(e) {
		Enabler.exit('User_MKX|primary BroadExit_e');
		video1.pause();
		video1.currentTime = 0;
		document.getElementById("replay").style.display = "none";
		document.getElementById("play").style.display = "block";
		
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();
		return false;
	}
	onExitHandler2 = function(e){
		Enabler.exit('User_MKX|primary CTAExit_e');
		video1.pause();
		video1.currentTime = 0;
		document.getElementById("replay").style.display = "none";
		document.getElementById("play").style.display = "block";
		
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();
		return false;
	}
	$('clickthru').addEventListener('click', 	onExitHandler1, false);
	$('cta').addEventListener('click', 			onExitHandler2, false);
	$('cta').addEventListener('mouseover', 			onCtaRollon, false);
	$('cta').addEventListener('mouseleave', 			onCtaRolloff, false);
	$('vid').addEventListener('click', 			onExitHandler2, false);
	$('play').addEventListener('click', 			adVisible, false);
	$('replay').addEventListener('click', 			adVisible, false);

	$('ctnr').style.display = 'block';
};


var isVideoCompCreated = false,
	videoContainer,
	scriptsLoaded = false,
	imagesLoaded = false; 

//var logger = document.getElementById("logger");
function adVisible () {

	
	var video1 = document.getElementById('video1');
	document.getElementById("video1").style.display = "block";

	if (typeof(Enabler) != 'undefined') {
		Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
			studio.video.Reporter.attach('video_1', video1);
		});
	}
	
	video1.onplaying = function() {
		
		var textanimation_current = 0;
		var textanimation_duration = 1.25;
		var textanimation_starttimes = [0.5, 2.5, 4.5 ];
		animSyncStart = null;

		document.getElementById("play").style.display = "none";
		document.getElementById("replay").style.display = "none";
 

	};
	video1.onended = function() {

		document.getElementById("replay").style.display = "block";
		
	}
	video1.play();
}

function onCtaRollon(e) {
	e.preventDefault();
	e.stopPropagation();
	document.getElementById('ctaB').style.transform ="scaleY(2)";
}

function onCtaRolloff(e) {
	e.preventDefault();
	e.stopPropagation();
	document.getElementById('ctaB').style.transform ="scaleY(1)";
}
