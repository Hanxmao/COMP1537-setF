
function hideBtnHandler(){
    console.log(this)
    $(this).parent().remove()
}




setup = ()=>{
    $('button').click(()=>{
        a = Number($('#firstOperand').val())
        b = Number($('#secondOperand').val()) // the value here is before click
    })

    $('#plus').click(()=>{
        result = `Result of ${a} + ${b} = ${a + b}`
        $('#result').html(result)
        result_color = 
        `
        <div style="background-color:tomato">
            ${result}
            <button class='hide_button'> Hide </button>
        </div>
        `
        $('#history').append(result_color)
    })

    $('#minus').click(()=>{
        result = `Result of ${a} - ${b} = ${a - b}`
        $('#result').html(result)
        result_color = 
        `
        <div style="background-color:green">
            ${result}
            <button class='hide_button'> Hide </button>
        </div>
        `
        $('#history').append(result_color)
    })

    $('#times').click(()=>{
        result = `Result of ${a} * ${b} = ${a * b}`
        $('#result').html(result)
        result_color = 
        `
        <div style="background-color:blue">
            ${result}
            <button class='hide_button'> Hide </button>
        </div>
        `
        $('#history').append(result_color)
    })

    $('#divide').click(()=>{
        result = `Result of ${a} / ${b} = ${a / b}`
        $('#result').html(result)
        result_color = 
        `
        <div style="background-color:yellow">
            ${result}
            <button class='hide_button'> Hide </button>
        </div>
        `
        $('#history').append(result_color)
    })

    $('body').on('click', '.hide_button', hideBtnHandler)
    
}



$('document').ready(setup)