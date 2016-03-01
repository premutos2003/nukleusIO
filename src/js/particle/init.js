/**
 * Created by RonNegi on 01/03/16.
 */

(function($){
    $(function(){

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 149,
            "density": {
                "enable": true,
                "value_area": 1183.723797780518
            }
        },
        "color": {
            "value": "#78ff00"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.9540273080295628,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1.1369115594467707,
                "opacity_min": 0.9176500444106078,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 5,
                "size_min": 6.496637482552975,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 110,
            "color": "#ffffff",
            "opacity": 0.45697106350995864,
            "width": 2.4051108605787297
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 3768.007014906677,
                "rotateY": 3527.495928848804
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 121.8119527978683,
                "line_linked": {
                    "opacity": 0.6169665809768637
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
