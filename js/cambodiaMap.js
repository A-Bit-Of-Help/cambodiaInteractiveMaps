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

    $('#KH-4').click(function () {
        $('#mKompongLeaeng').modal();
    });

    $('#Kralanh').click(function () {
        $('#mKralanh').modal();
    });

    $('#TaingKork').click(function () {
        $('#mTaingKork').modal();
    });

    $('#KH-6').click(function () {
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
            $('[data-name="province"]').css('stroke', '#f8f9fa');
        })
        .mouseleave(function () {
            $('#KH-17').css({ stroke: 'none', fill: '#a5ce3b' });
            $('[data-name="province"]').css('stroke', 'none');
        });
});
