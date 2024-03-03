$(document).ready(function() {
    var currentJose = 0;
    var numImagesJose = 6;

    $('.left-arrow').on('click', function() {
        if (currentJose > 0) {
            currentJose = currentJose - 1;
        } else {
            currentJose = numImagesJose - 3;
        }
        $("#carruselJose").animate({"left": -($('#product_'+currentJose).position().left)}, 600);
        return false;
    });

    $('.right-arrow').on('click', function() {
        if (numImagesJose > currentJose + 3) {
            currentJose = currentJose + 1;
        } else {
            currentJose = 0;
        }
        $("#carruselJose").animate({"left": -($('#product_'+currentJose).position().left)}, 600);
        return false;
    });


    var currentJuanGabriel = 0;
    var numImagesJuanGabriel = 6;

    $('.left-arrow').on('click', function() {
        if (currentJuanGabriel > 0) {
            currentJuanGabriel = currentJuanGabriel - 1;
        } else {
            currentJuanGabriel = numImagesJuanGabriel - 3;
        }
        $("#carruselJuanGabriel").animate({"left": -($('#product_'+currentJuanGabriel).position().left)}, 600);
        return false;
    });

    $('.right-arrow').on('click', function() {
        if (numImagesJuanGabriel > currentJuanGabriel + 3) {
            currentJuanGabriel = currentJuanGabriel + 1;
        } else {
            currentJuanGabriel = 0;
        }
        $("#carruselJuanGabriel").animate({"left": -($('#product_'+currentJuanGabriel).position().left)}, 600);
        return false;
    });

});

$(document).ready(function() {
    var currentJulioJaramillo = 0;
    var numImagesJulioJaramillo = 6;

    $('.left-arrow-julio').on('click', function() {
        if (currentJulioJaramillo > 0) {
            currentJulioJaramillo = currentJulioJaramillo - 1;
        } else {
            currentJulioJaramillo = numImagesJulioJaramillo - 3;
        }
        $("#carruselJulioJaramillo").animate({"left": -($('#product_'+currentJulioJaramillo).position().left)}, 600);
        return false;
    });

    $('.right-arrow-julio').on('click', function() {
        if (numImagesJulioJaramillo > currentJulioJaramillo + 3) {
            currentJulioJaramillo = currentJulioJaramillo + 1;
        } else {
            currentJulioJaramillo = 0;
        }
        $("#carruselJulioJaramillo").animate({"left": -($('#product_'+currentJulioJaramillo).position().left)}, 600);
        return false;
    });

    var currentPedroInfante = 0;
    var numImagesPedroInfante = 6;

    $('.left-arrow-pedro').on('click', function() {
        if (currentPedroInfante > 0) {
            currentPedroInfante = currentPedroInfante - 1;
        } else {
            currentPedroInfante = numImagesPedroInfante - 3;
        }
        $("#carruselPedroInfante").animate({"left": -($('#product_'+currentPedroInfante).position().left)}, 600);
        return false;
    });

    $('.right-arrow-pedro').on('click', function() {
        if (numImagesPedroInfante > currentPedroInfante + 3) {
            currentPedroInfante = currentPedroInfante + 1;
        } else {
            currentPedroInfante = 0;
        }
        $("#carruselPedroInfante").animate({"left": -($('#product_'+currentPedroInfante).position().left)}, 600);
        return false;
    });

});