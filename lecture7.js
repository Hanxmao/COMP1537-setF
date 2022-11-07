function buttonHandler(){
    {"#result"}
}

function successHandler(data){
    console.log(data);
    $('#weatherBtn').click(buttonHandler)
}

function setup(){
    city = $("#city").val()
    
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=213ee75587b56dc61c5b437c5c61b670&unit=metric`,
        type: "GET",
        success: successHandler
    })
}


$(document).ready(setup)