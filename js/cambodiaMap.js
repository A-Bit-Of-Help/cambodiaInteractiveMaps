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

    $('[data-hover="KompongLeaeng"]')
        .mouseenter(function () {
            $('#KH-4').css({ stroke: '#f8f9fa', fill: '#000' });
        })
        .mouseleave(function () {
            $('#KH-4').css({ stroke: 'none', fill: '#a5ce3b' });
        });

    $('[data-hover="TaingKork"]')
        .mouseenter(function () {
            $('#KH-6').css({ stroke: '#f8f9fa', fill: '#000' });
        })
        .mouseleave(function () {
            $('#KH-6').css({ stroke: 'none', fill: '#a5ce3b' });
        });

    $('[data-hover="SiemReap"]')
        .mouseenter(function () {
            $('#KH-17').css({ stroke: '#f8f9fa', fill: '#000' });
            $('#province-SiemReap').css('stroke', '#f8f9fa');
        })
        .mouseleave(function () {
            $('#KH-17').css({ stroke: 'none', fill: '#a5ce3b' });
            $('#province-SiemReap').css('stroke', 'none');
        });

    $('[data-hover="Kralanh"]')
        .mouseenter(function () {
            $('#KH-17').css({ stroke: '#f8f9fa', fill: '#000' });
            $('#province-Kralanh').css('stroke', '#f8f9fa');
        })
        .mouseleave(function () {
            $('#KH-17').css({ stroke: 'none', fill: '#a5ce3b' });
            $('#province-Kralanh').css('stroke', 'none');
        });

    $('[data-hover="SreiSnam"]')
        .mouseenter(function () {
            $('#KH-17').css({ stroke: '#f8f9fa', fill: '#000' });
            $('#province-SreiSnam').css('stroke', '#f8f9fa');
        })
        .mouseleave(function () {
            $('#KH-17').css({ stroke: 'none', fill: '#a5ce3b' });
            $('#province-SreiSnam').css('stroke', 'none');
        });

    $('[data-hover="Varin"]')
        .mouseenter(function () {
            $('#KH-17').css({ stroke: '#f8f9fa', fill: '#000' });
            $('#province-Varin').css('stroke', '#f8f9fa');
        })
        .mouseleave(function () {
            $('#KH-17').css({ stroke: 'none', fill: '#a5ce3b' });
            $('#province-Varin').css('stroke', 'none');
        });
});

// FOR TEST ONLY
document.getElementById('area-switch').addEventListener('click', (e) => {
    const areas = [...document.querySelectorAll('.area-test')];
    areas.forEach((area) => area.classList.toggle('kaput'));
    e.target.classList.toggle('off');
});

document.getElementById('pin-switch').addEventListener('click', (e) => {
    const pinss = [...document.querySelectorAll('.pin-test')];
    pinss.forEach((pin) => pin.classList.toggle('kaput'));
    e.target.classList.toggle('off');
});
