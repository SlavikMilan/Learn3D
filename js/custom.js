(function() {
    'use strict';

    var initializeSlideshows = function() {
        var sliders = document.querySelectorAll('.testimonial-slider');

        sliders.forEach(function(slider) {
            var tnsSlider = tns({
                container: slider,
                items: 1,
                axis: "horizontal",
                controlsContainer: slider.parentElement.querySelector('.testimonial-nav'),
                swipeAngle: false,
                speed: 700,
                nav: true,
                controls: true,
                autoplay: false,
                autoplayHoverPause: true,
                autoplayTimeout: 3500,
                autoplayButtonOutput: false
            });
        });
    };

    var sitePlusMinus = function() {
        var quantityContainers = document.querySelectorAll('.quantity-container');

        function init() {
            quantityContainers.forEach(function(container) {
                createBindings(container);
            });
        }

        function createBindings(quantityContainer) {
            var quantityAmount = quantityContainer.querySelector('.quantity-amount');
            var increase = quantityContainer.querySelector('.increase');
            var decrease = quantityContainer.querySelector('.decrease');

            increase.addEventListener('click', function(e) {
                increaseValue(e, quantityAmount);
            });

            decrease.addEventListener('click', function(e) {
                decreaseValue(e, quantityAmount);
            });
        }

        function increaseValue(event, quantityAmount) {
            var value = parseInt(quantityAmount.value, 10) || 0;
            value++;
            quantityAmount.value = value;
        }

        function decreaseValue(event, quantityAmount) {
            var value = parseInt(quantityAmount.value, 10) || 0;
            if (value > 0) value--;
            quantityAmount.value = value;
        }

        init();
    };

    initializeSlideshows();
    sitePlusMinus();
})();