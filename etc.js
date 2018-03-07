//balloon click function
//z-index 11 이상으로만 올리면 됩니다. 현재 툴팁 디폴트 z-index는 10 입니다. 
function balloonFunction() {
    document.getElementById("show-tip").style.zIndex = "11";
}
// 찾아보기 custom design
    $(document).ready(function(){
        var fileTarget = $('.box_file .upload_hidden');

        fileTarget.on('change', function(){
            if(window.FileReader){
                var filename = $(this)[0].files[0].name;
            } else {
                var filename = $(this).val().split('/').pop().split('\\').pop();
            }

            $(this).siblings('.upload_name').val(filename);
        });
    });

// sub-menu
$(".m-sub-1").html("세포 명시야 현미경 영상").contents().wrap('<a href="sub_2_upload.html"> </a>');
$(".m-sub-2").html("세포 형광 현미경 영상").contents().wrap('<a href="sub_1_upload.html"></a>');
$(".m-sub-3").html("의료 영상 데이터 (MRI)").contents().wrap('<a href="sub_5_upload.html"></a>');
$(".m-sub-4").html("의료 영상 판독문").contents().wrap('<a href="sub_4_upload.html"></a>');
$(".m-sub-5").html("유전체 데이터").contents().wrap('<a href="sub_3_upload.html"></a>');




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



