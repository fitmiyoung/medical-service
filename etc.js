// $(".m-sub-1").html("<a href="sub_2_upload.html"><i class="fa fa-picture-o" aria-hidden="true"></i>세포 명시야 현미경 영상</a>");
// $(".m-sub-2").html("<a href="sub_1_upload.html"><i class="fa fa-picture-o" aria-hidden="true"></i>세포 형광 현미경 영상</a>");
// $(".m-sub-3").html("<a href="sub_3_upload.html"><i class="fa fa-picture-o" aria-hidden="true"></i>유전체 데이터</a>");
// $(".m-sub-4").html("<a href="sub_5_upload.html"><i class="fa fa-picture-o" aria-hidden="true"></i>의료 영상 데이터(MRI)</a>");
// $(".m-sub-5").html("<a href="sub_4_upload.html"><i class="fa fa-picture-o" aria-hidden="true"></i>의료 영상 판독문</a>");


$(".m-sub-1").html("세포 명시야 현미경 영상").contents().wrap('<a href="sub_2_upload.html" class="fa fa-picture-o"></a>');
$(".m-sub-2").html("세포 형광 현미경 영상").contents().wrap('<a href="sub_1_upload.html" class=""></a>').addClass("fa fa-picture-o");
$(".m-sub-3").html("유전체 데이터").contents().wrap('<a href="sub_3_upload.html" class="fa fa-picture-o"></a>');
$(".m-sub-4").html("의료 영상 데이터 (MRI)").contents().wrap('<a href="sub_5_upload.html" class="fa fa-picture-o"></a>');
$(".m-sub-5").html("의료 영상 판독문").contents().wrap('<a href="sub_4_upload.html" class="fa fa-picture-o"></a>');




$(function() {
    $('input[name="birthdate"]').daterangepicker(
    {
        singleDatePicker: true,
        showDropdowns: true,
        "locale": {
        "format": "YYYY/MM/DD",
        "daysOfWeek": [
            "일",
            "월",
            "화",
            "수",
            "목",
            "금",
            "토"
        ],
        "monthNames": [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월"
        ],
        "firstDay": 1
    },
    "startDate": "2018/01/01",
    "endDate": "1920/01/01"

    }, 
    function(start, end, label) {
        var years = moment().diff(start, 'years');
    });
});



