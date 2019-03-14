
var $ = function(i) {return document.getElementById(i)},
	currentFrame = 1, maxFrame = 2, animating = false, render, autoPlay, feature = 1, maxFeature = 3,
	userAgent = navigator.userAgent || navigator.vendor || window.opera, 
	message = "MKX|B_banner";

if ( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || ( userAgent.match( /Android/i ) ))
	$('shell').className = 'mob';


function init() {
		onExitHandler1 = function(e) {

		Enabler.exit('User_MKX|B_banner _BroadExit_e');
		
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();
		return false;
	}
	onExitHandler2 = function(e){

		Enabler.exit('User_MKX|B_banner _CTA_e');
				
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();
		return false;
	}
	
	feature = 0;
	
	$('clickthru').addEventListener('click', 	onExitHandler1, false);
	$('cta').addEventListener('click', 			onExitHandler2, false);
	$('cta').addEventListener('mouseover', 			onCtaRollon, false);
	$('cta').addEventListener('mouseleave', 			onCtaRolloff, false);
	$('ctnr').style.display = 'block';
	
	TweenLite.to($('fogC'), 15, {x: 150, y: -20, scaleX: 1.75, autoAlpha: .8, rotation: .001});
	TweenLite.to($('fogC'), 2, {delay: 13, autoAlpha: .1});

	TweenLite.to($('copy1'), 1, {delay: .5, autoAlpha: 1});
	TweenLite.to($('feeling'), 1, {delay: 1.5, autoAlpha: 1});
	TweenLite.to($('cta'), 1, {delay: 2.5, autoAlpha: 1});

}



function onCtaRollon(e) {
	e.preventDefault();
	e.stopPropagation();
	$('ctaB').style.transform ="scaleY(2)";
}

function onCtaRolloff(e) {
	e.preventDefault();
	e.stopPropagation();
	$('ctaB').style.transform ="scaleY(1)";
}

init();