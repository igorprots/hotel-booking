$(function () {



    $("#datepicker--in , #datepicker--out").datepicker({
        language: 'ru',
        autoclose: true,
        todayHighlight: true,
        clearBtn: true,
    });


    $('<div class="quantity-nav"><img class="quantity-button quantity-up" src="img/arrow-up.png" alt=""> <img class="quantity-button quantity-down" src="img/arrow-down.png" alt=""></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.on('click', (function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        }));

        btnDown.on('click', (function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        }));


    });

});