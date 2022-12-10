let receivedArray

function setup() {
    $('#nameBtn').click(function () {
        $("#result").html('')
        $("#table").html('')
        $.ajax({
            url: 'http://localhost:8080/getUnicornByNameRoute',
            type: "POST",
            data: { unicornNameReq: $('#unicornName').val() },
            success: function (data) {
                console.log(data);
                receivedArray = data
                receivedArray.forEach(function (item) {
                    console.log(item);
                    $("#table").append(`
                    <tr>
                        <td>${item._id}</td><td>${item.name}</td><td>${(item.dob).slice(0, 10)}</td><td>${item.loves}</td><td>${item.weight}</td><td>${item.gender}</td><td>${item.vampires}</td><td>${item.vaccines}</td>
                    </tr>
                    `)
                })
                $("#result").html(`${JSON.stringify(receivedArray)}`)
            }
        })
    })

    $('#weightBtn').click(function () {
        $("#result").html('')
        $("#table").html('')
        $.ajax({
            url: 'http://localhost:8080/getUnicornByWeightRoute',
            type: "POST",
            data: { lowerWeight: $('#unicornLowerWeight').val(), higherWeight: $('#unicornHigherWeight').val() },
            success: function (data) {
                console.log(data);
                receivedArray = data
                receivedArray.forEach(function (item) {
                    console.log(item);
                    $("#table").append(`
                    <tr>
                        <td>${item._id}</td><td>${item.name}</td><td>${(item.dob).slice(0, 10)}</td><td>${item.loves}</td><td>${item.weight}</td><td>${item.gender}</td><td>${item.vampires}</td><td>${item.vaccines}</td>
                    </tr>
                    `)
                })
                $("#result").html(`${JSON.stringify(receivedArray)}`)
            }
        })
    })

    $('#foodBtn').click(function () {
        $("#result").html('')
        $("#table").html('')
        let foodCheck = []
        foodCheck.push($('#apple').is(':checked') ? "apple" : "none")
        foodCheck.push($('#carrot').is(':checked') ? "carrot" : "none")
        console.log(foodCheck);
        $.ajax({
            url: 'http://localhost:8080/getUnicornByFoodRoute',
            type: "POST",
            data: { foodCheck: foodCheck },
            success: function (data) {
                console.log(data);
                receivedArray = data
                receivedArray.forEach(function (item) {
                    console.log(item);
                    $("#table").append(`
                    <tr>
                        <td>${item._id}</td><td>${item.name}</td><td>${(item.dob).slice(0, 10)}</td><td>${item.loves}</td><td>${item.weight}</td><td>${item.gender}</td><td>${item.vampires}</td><td>${item.vaccines}</td>
                    </tr>
                    `)
                })
                $("#result").html(`${JSON.stringify(receivedArray)}`)
            }
        })
    })

    $('#filterBtn').click(function () {
        $("#result").html('')
        $("#table").html('')
        if ($('#nameFilter').is(':checked') && $('#weightFilter').is(':checked')) {
            $("#table").html(`<tr><th>Name</th><th>Weight</th></tr>`)
            receivedArray.forEach(unicorn => {
                $("#table").append(`
                    <tr>
                        <td>${unicorn.name}</td><td>${unicorn.weight}</td>
                    </tr>
                    `)
                $("#result").append(`<div>Name: ${JSON.stringify(unicorn["name"])} Weight: ${JSON.stringify(unicorn["weight"])}</div>`)
            });
        }
        else if ($('#nameFilter').is(':checked')) {
            $("#table").html(`<tr><th>Name</th></tr>`)
            receivedArray.forEach(unicorn => {
                $("#table").append(`
                <tr>
                    <td>${unicorn.name}</td>
                </tr>
                `)
                $("#result").append(`<div>Name: ${JSON.stringify(unicorn["name"])}</div>`)
            });
        }
        else if ($('#weightFilter').is(':checked')) {
            $("#table").html(`<tr><th>Weight</th></tr>`)
            receivedArray.forEach(unicorn => {
                $("#table").append(`
                <tr>
                    <td>${unicorn.weight}</td>
                </tr>
                `)
                $("#result").append(`<div>Weight: ${JSON.stringify(unicorn["weight"])}</div>`)
            });
        }
        else {
            $("#result").html(JSON.stringify(receivedArray))
        }
    })

    // $("#nameFilter").change(function(){
    //     if($(this).prop("checked")){
    //         $("#result").html(JSON.stringify(receivedArray[0]["name"]))
    //     }else{
    //          $("#result").html(JSON.stringify(receivedArray))
    //     }
    // })
}

$(document).ready(setup)


