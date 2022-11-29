let receivedArray

function setup(){
    $('#nameBtn').click(function(){
        $.ajax({
            url:'http://localhost:8000/getUnicornByNameRoute',
            type: "POST",
            data: {unicornNameReq: $('#unicornNameInHTML').val()},
            success: function(data){
                console.log(data);
                receivedArray = data
                $("#result").html(JSON.stringify(data))
            }
        })
    })

    $("#nameFilter").change(function(){
        if($(this).prop("checked")){
            console.log('checked');
        }else{
            console.log("unchecked");
        }
    })
}

$(document).ready(setup)