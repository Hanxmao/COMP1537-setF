let receivedArray

function hideBtnHandler(){
    console.log("clicked");
    console.log(this);
    if ($(this).next().attr("style") == "display:block"){
        // $(this).next().attr("style", "display:none")
    }else{
        $(this).next().attr("style", "display:block")
    }
    
    if($(this).html() == 'hide details'){
        $(this).html('show details')
    }else{
        $(this).html('hide details')
    }
    
    
}

function setup() {

    $('#gender').change(() => {
        gender = $("#gender option:selected").val()

        $.ajax({
            url: 'http://localhost:8000/getUnicornByGenderRoute',
            type: "POST",
            data: { gender: gender },
            success: function (data) {
                console.log(data);
                receivedArray = data
                result = "<ul>"
                receivedArray.forEach(function (item) {
                    result += `<li>${item.name}</li>`
                    result += "<button class='hide_button'> show details </button> "
                    result += `<ul style="display: none">`
                    result += `<li>dob: ${item.dob}</li>`
                    result += "<li>loves:<ul>"
                    item.loves.forEach(function (love) {          
                        result += `<li>${love}</li>`
                    })
                    result += "</ul></li>"
                    result += `<li>weight: ${item.weight}</li>`
                    result += "<li>gender:"
                    if (item.gender == 'm') {
                        result += " male"
                    }else if (item.gender == 'f') {
                        result += " female"
                    }
                    result += "</li>"
                    result += `<li>vampires: ${item.vampires}</li>`
                    result += "</ul>"
                })
                result += "</ul>"
                $("#result").html(result)
                

            }
        })
        
        $('body').on('click', '.hide_button', hideBtnHandler)
    })
}


$(document).ready(setup)



