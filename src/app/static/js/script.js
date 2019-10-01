var $ = jQuery;
$(document).ready(function () {
    $(".datepicker").datepicker();

    $(".shopPrice .buttonEvents button.next").click(function () {
        $(".shopPrice ul.nav li.active").next().find("a").click();
    });

    $(".shopPrice .buttonEvents button.prev").click(function () {
        $(".shopPrice ul.nav li.active").prev().find("a").click();
    });

    $(".daysofweek li").click(function () {
        $(this).toggleClass("active");
    });


    $(".dropboxHead").click(function () {
        $(this).parent().addClass("active");
    })

    $("body").click(function (e) {
        $('.dropBoxSection').removeClass('active');
        if ($(e.target).parents('.dropBoxSection').hasClass("dropBoxSection")) {
            $(e.target).parents('.dropBoxSection').addClass('active');
        } else {
            $('.dropBoxSection').removeClass('active');
        }
    });

    $(".addDateBtn").click(function () {
        var from = $(".outbonffrom").val();
        var to = $(".outbonfto").val();
        var strDate = "";
        if (from == "") {

        } else {
            if (to == "") {
                strDate = "<span>From " + from + " <i class='fa fa-remove'></i></span>"
            } else {
                strDate = "<span>From " + from + " To " + to + " <i class='fa fa-remove'></i></span>"
            }

            $(".selectedDate").append(strDate);
        }
    })


    $(".addOriginDestination").click(function () {
        var origin = $(".originDestination").val().split(',');
        for (var i = 0; i < origin.length; i++) {
            var originStr = "";
            var originDest = origin[i].split('-');
            if (origin == "") {

            } else {
                if ($(".selectedOrigin span[id='" + origin + "']").length == 0) {
                    originStr = "<tr><td>" + originDest[0] + "</td><td>" + originDest[1] + "</td><td><i class='fa fa-remove'></i></td>";
                    $(".selectedOrigin table tbody").append(originStr);
                }
            }
        }

    })

    $("body").on("click", ".selectedOrigin tr td i", function () {
        $(this).parent().parent().remove();
    });

    $("body").on("click", ".selectedOrigin span i, .selectedDate span i", function () {
        $(this).parent().remove();
    });

    $(".addPreferredDateBtn").click(function () {
        var from = $(".PreferredDate").val();
        var strDate = "";
        if (from == "") {

        } else {
            strDate = "<span>" + from + " <i class='fa fa-remove'></i></span>";
            $(".selectedPreferredDate").append(strDate);
        }
    })


    $("body").on("click", ".selectedOrigin span i, .selectedDate span i", function () {
        $(this).parent().remove();
    });

    $("input[value='all']").click(function () {
        if ($(this).is(':checked')) {
            $(this).parent().parent().find("input[type='checkbox']").prop("checked", true);
        } else {
            $(this).parent().parent().find("input[type='checkbox']").prop("checked", false);
        }
    });

    $("#scheduledReportButton").click(function () {
        if ($(this).is(':checked')) {
            $("#ScheduledReport").addClass("active");
        } else {
            $("#ScheduledReport").removeClass("active");
        }
    });

    $(".durationDropdown").on("change", function () {
        var sel = "#" + $(this).val();
        $(sel).addClass("active").siblings().removeClass("active");
    });

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 1439,
        values: [0, 1439],
        slide: function (event, ui) {
            var hours1 = Math.floor(ui.values[0] / 60).toString();
            var minutes1 = (ui.values[0] - (hours1 * 60)).toString();;

            if (hours1.length == 1) {
                hours1 = '0' + hours1
            }
            if (minutes1.length == 1) minutes1 = '0' + minutes1;
            if (minutes1 == 0) minutes1 = '00';

            $('.slider-time').html(hours1 + ':' + minutes1);

            var hours2 = Math.floor(ui.values[1] / 60).toString();;
            var minutes2 = (ui.values[1] - (hours2 * 60)).toString();;

            if (hours2.length == 1) {
                hours2 = '0' + hours2
            }
            if (minutes2.length == 1) {
                minutes2 = '0' + minutes2
            }
            if (minutes2 == 0) {
                minutes2 = '00';
            }


            $('.slider-time2').html(hours2 + ':' + minutes2);
        }
    });
    $('.slider-time').html("0:00");
    $(".slider-time2").html("23:59");


    $("#slider-range2").slider({
        range: true,
        min: 0,
        max: 1439,
        values: [0, 1439],
        slide: function (event, ui) {
            var hours1 = Math.floor(ui.values[0] / 60).toString();
            var minutes1 = (ui.values[0] - (hours1 * 60)).toString();
            if (hours1.length == 1) {
                hours1 = '0' + hours1;
            }
            if (minutes1.length == 1) {
                minutes1 = '0' + minutes1;
            }
            if (minutes1 == 0) {
                minutes1 = '00';
            }

            $('.slider-time3').html(hours1 + ':' + minutes1);

            var hours2 = Math.floor(ui.values[1] / 60).toString();;
            var minutes2 = (ui.values[1] - (hours2 * 60)).toString();;

            if (hours2.length == 1) hours2 = '0' + hours2;
            if (minutes2.length == 1) {
                minutes2 = '0' + minutes2
            }
            if (minutes2 == 0) minutes2 = '00';


            $('.slider-time4').html(hours2 + ':' + minutes2);
        }
    });
    $('.slider-time3').html("0:00");
    $(".slider-time4").html("23:59");



});

$("#slider-range").slider({
    range: true,
    min: 0,
    max: 1440,
    step: 5,
    values: [540, 1020],
    slide: function (e, ui) {
        var hours1 = Math.floor(ui.values[0] / 60);
        var minutes1 = ui.values[0] - (hours1 * 60);
        if (hours1.length == 1) hours1 = '0' + hours1;
        if (minutes1.length == 1) minutes1 = '0' + minutes1;
        if (minutes1 == 0) minutes1 = '00';
        if (hours1 >= 12) {
            if (hours1 == 12) {
                hours1 = hours1;
                minutes1 = minutes1 + " PM";
            } else {
                hours1 = hours1 - 12;
                minutes1 = minutes1 + " PM";
            }
        } else {
            hours1 = hours1;
            minutes1 = minutes1 + " AM";
        }
        if (hours1 == 0) {
            hours1 = 12;
            minutes1 = minutes1;
        }



        $('.slider-time').html(hours1 + ':' + minutes1);

        var hours2 = Math.floor(ui.values[1] / 60);
        var minutes2 = ui.values[1] - (hours2 * 60);

        if (hours2.length == 1) hours2 = '0' + hours2;
        if (minutes2.length == 1) minutes2 = '0' + minutes2;
        if (minutes2 == 0) minutes2 = '00';
        if (hours2 >= 12) {
            if (hours2 == 12) {
                hours2 = hours2;
                minutes2 = minutes2 + " PM";
            } else if (hours2 == 24) {
                hours2 = 11;
                minutes2 = "59 PM";
            } else {
                hours2 = hours2 - 12;
                minutes2 = minutes2 + " PM";
            }
        } else {
            hours2 = hours2;
            minutes2 = minutes2 + " AM";
        }

        $('.slider-time2').html(hours2 + ':' + minutes2);

    }
});
