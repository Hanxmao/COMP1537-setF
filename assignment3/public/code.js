let receivedArray

function setup() {
    $('#nameBtn').click(function () {
        $("#result").html('')
        $("#table").html(`
        <tr>
            <th>ID</th><th>Name</th><th>Date of birth</th><th>Loves</th><th>Weight</th><th>Gender</th><th>Vampires</th><th>Vaccines</th>
        </tr>
        `)
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
            }
        })
    })

    $('#weightBtn').click(function () {
        $("#result").html('')
        $("#table").html(`
        <tr>
            <th>ID</th><th>Name</th><th>Date of birth</th><th>Loves</th><th>Weight</th><th>Gender</th><th>Vampires</th><th>Vaccines</th>
        </tr>
        `)
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
            }
        })
    })

    $('#foodBtn').click(function () {
        $("#result").html('')
        $("#table").html(`
        <tr>
            <th>ID</th><th>Name</th><th>Date of birth</th><th>Loves</th><th>Weight</th><th>Gender</th><th>Vampires</th><th>Vaccines</th>
        </tr>
        `)
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
            }
        })
    })

    $('#filterBtn').click(function () {
        $("#result").html('')
        $("#table").html('')
        if ($('#nameFilter').is(':checked') && $('#weightFilter').is(':checked')) {
            $("#table").html(`<tr><th>Name</th><th>Weight</th></tr>`)
            $("#table").html(`        
            <tr>
                <th>Name</th><th>Weight</th>
            </tr>`)
            receivedArray.forEach(unicorn => {
                $("#table").append(`
                    <tr>
                        <td>${unicorn.name}</td><td>${unicorn.weight}</td>
                    </tr>
                    `)

            });
        }
        else if ($('#nameFilter').is(':checked')) {
            $("#table").html(`<tr><th>Name</th></tr>`)
            $("#table").html(`        
            <tr>
                <th>Name</th>
            </tr>`)
            receivedArray.forEach(unicorn => {
                $("#table").append(`
                <tr>
                    <td>${unicorn.name}</td>
                </tr>
                `)
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
            });
        }
        else {
            $("#table").html(`
            <tr>
                <th>ID</th><th>Name</th><th>Date of birth</th><th>Loves</th><th>Weight</th><th>Gender</th><th>Vampires</th><th>Vaccines</th>
            </tr>
            `)
            receivedArray.forEach(function (item) {
                console.log(item);
                $("#table").append(`
                <tr>
                    <td>${item._id}</td><td>${item.name}</td><td>${(item.dob).slice(0, 10)}</td><td>${item.loves}</td><td>${item.weight}</td><td>${item.gender}</td><td>${item.vampires}</td><td>${item.vaccines}</td>
                </tr>
                `)
            })
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


