
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



