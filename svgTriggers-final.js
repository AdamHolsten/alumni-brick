



    var loader = document.getElementsByClassName("discovery");

    function loadBMAnimationDiscovery(loader) {
        var animation = bodymovin.loadAnimation({
            container: loader,
            renderer: "svg",
            loop: false,
            autoplay: true,
            path: "https://pages.tcnj.edu/wp-content/themes/headway-tcnj-schools/js/discovery.json"
        });

    }

    for (var i = 0; i < loader.length; i++) {
        loadBMAnimationDiscovery(loader[i]);
    }


    var loader = document.getElementsByClassName("molecule");

    function loadBMAnimation(loader) {
        var animation = bodymovin.loadAnimation({
            container: loader,
            renderer: "svg",
            loop: true,
            autoplay: false,
            path: "https://pages.tcnj.edu/wp-content/themes/headway-tcnj-schools/js/molecule.json"
        });
        loader.addEventListener("mouseenter", function () {
            animation.play();
        });
        loader.addEventListener("mouseleave", function () {
            animation.pause();
        });
    }

    for (var i = 0; i < loader.length; i++) {
        loadBMAnimation(loader[i]);
    }


    var loaderFish = document.getElementsByClassName("fish");

    function loadBMAnimationFish(loaderFish) {
        var animation = bodymovin.loadAnimation({
            container: loaderFish,
            renderer: "svg",
            loop: true,
            autoplay: false,
            path: "https://pages.tcnj.edu/wp-content/themes/headway-tcnj-schools/js/fish.json"
        });
        loaderFish.addEventListener("mouseenter", function () {
            animation.play();
        });
        loaderFish.addEventListener("mouseleave", function () {
            animation.pause();
        });
    }

    for (var i = 0; i < loaderFish.length; i++) {
        loadBMAnimationFish(loaderFish[i]);
    }



    var loaderScales = document.getElementsByClassName("scales");

    function loadBMAnimationScales(loaderScales) {
        var animation = bodymovin.loadAnimation({
            container: loaderScales,
            renderer: "svg",
            loop: true,
            autoplay: false,
            path: "https://pages.tcnj.edu/wp-content/themes/headway-tcnj-schools/js/scales.json"
        });
        loaderScales.addEventListener("mouseenter", function () {
            animation.play();
        });
        loaderScales.addEventListener("mouseleave", function () {
            animation.pause();
        });
    }

    for (var i = 0; i < loaderScales.length; i++) {
        loadBMAnimationScales(loaderScales[i]);
    }



    var anim;
var elem = document.getElementById('bodymovin')
var animData = {
    container: elem,
    renderer: 'svg',
    loop: false,
    autoplay: false,   /*MAKE SURE THIS IS FALSE*/
    rendererSettings: {
        progressiveLoad:false
    },
    path: 'https://pages.tcnj.edu/wp-content/themes/headway-tcnj-schools/js/bodymovin.json',
    name: 'myAnimation',
};
anim = bodymovin.loadAnimation(animData);




$(function() {
    $('#bottom-in-view-example').waypoint(function(direction) {
    console.log('waypoint reached!');
	  
    // Target this element and run the up or down animation respectively
		
		if (direction === 'down') {
            anim.play();   /*THIS IS WHERE WE PLAY THE ANIMATION*/

		} else if (direction === 'up') {  
            anim.play();   /*THIS IS WHERE WE PLAY THE ANIMATION*/

		}
	}, 
		
	{ offset: "0%" })
		
});


// var waypoint = new Waypoint({
//     element: document.getElementById('bottom-in-view-example'),
//     handler: function(direction) {
//     anim.play();   /*THIS IS WHERE WE PLAY THE ANIMATION*/
//     },
//       offset: 'bottom-in-view' /* string defined in waypoint.js See documentation for more presets */
//    })
   