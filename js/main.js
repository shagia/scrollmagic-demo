/* globals ScrollMagic, TweenMax, Power4, SlowMo*/

var controller = new ScrollMagic.Controller();


var headerAnimation = TweenMax.staggerFromTo('.lady-pos', 1, {"top":"40%", width: "60%"}, {"top":"60%", width: "30%"}, 3);
var bottlesAnimation = TweenMax.staggerFromTo('.opaScrollSep', 1, { autoAlpha:0}, { autoAlpha:1}, 3);
var mirrorAnimation = TweenMax.staggerFromTo('.mirror-img', 2, {autoAlpha:0, ease: SlowMo.ease.config(0.5, 0.4, false)}, {autoAlpha:1, ease: SlowMo.ease.config(0.5, 0.4, false)}, 3)
var stopAnimation = TweenMax.staggerFromTo(['.stop-back-1','.stop-back-2'], 1, {autoAlpha:0, ease:SlowMo.ease.config(0.5, 0.4, false)}, {autoAlpha:1, ease:SlowMo.ease.config(0.5, 0.4, false)}, 0.5)


var sceneOpen = new ScrollMagic.Scene({
		duration: 200,
		offset: 0,
		reverse: true,
    triggerElement: ".trigger-start",
	})
.setTween(headerAnimation)
.setPin(".waves-header")
.addTo(controller);

var bottlesScene = new ScrollMagic.Scene({
		triggerElement: '.bottles-container',
		duration: 200,
		offset: 0,
		// triggerHook: "onEnter",
		reverse: true
})
.setTween(bottlesAnimation)
.addTo(controller);

var mirrorScene = new ScrollMagic.Scene({
		triggerElement: '.mirror-base',
		// triggerHook: "onEnter",
		duration: 400,
		reverse: true,
		offset: 0,
	})
  // .addIndicators() // add indicators (requires plugin)
	.setClassToggle("#split-r", "mirror-fixed")
	.setTween(mirrorAnimation)
	.addTo(controller);

var sceneStopIt = new ScrollMagic.Scene({
		triggerElement: "#sceneStop",
		duration: 0,
		offset: 100,
		triggerHook: "onEnter",
		reverse: true,
	})

	sceneStopIt.setTween(stopAnimation);
	sceneStopIt.addTo(controller);

// var headerAnimation = TweenMax.staggerFromTo('.lady-pos', 1, {"top":"40%", width: "60%"}, {"top":"60%", width: "30%"}, 3);


// var sceneOpen = new ScrollMagic.Scene({
// 		duration: 150,
// 		offset: 0,
// 		reverse: true,
//     triggerElement: ".trigger-start",
// 	})
// .setTween(headerAnimation)
// .setPin(".waves-header")
// .addTo(controller);