$(document).ready(function () {
    $('#SreiSnam').click(function () {
        $('#mSreiSnam').modal();
    });

    $('#Varin').click(function () {
        $('#mVarin').modal();
    });

    $('#SiemReap').click(function () {
        $('#mSiemRap').modal();
    });

    $('#KompongLeaeng').click(function () {
        $('#mKompongLeaeng').modal();
    });

    $('#Kralanh').click(function () {
        $('#mKralanh').modal();
    });

    $('#TaingKork').click(function () {
        $('#mTaingKork').modal();
    });
});

// window.addEventListener('DOMContentLoaded', () => {
//     const cityPins = document.querySelectorAll('[data-name="city"]');

//     function showPin(pin) {
//         pin.children[`pin${pin.id}`].classList.toggle('hide');
//         pin.children[`pin${pin.id}`].classList.toggle('show');
//     }

//     cityPins.forEach((pin) => {
//         pin.addEventListener('mouseenter', () => showPin(pin));
//         pin.addEventListener('mouseleave', () => showPin(pin));
//     });
// });
