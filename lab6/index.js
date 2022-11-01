
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
        <span style="background-color:tomato">
            ${result}
            <button class='hide_button'> Hide </button>
        </span>
        `
        $('#history').append(result_color + '<br>')
    })

    $('#minus').click(()=>{
        result = `Result of ${a} - ${b} = ${a - b}`
        $('#result').html(result)
        result_color = 
        `
        <span style="background-color:green">
            ${result}
            <button class='hide_button'> Hide </button>
        </span>
        `
        $('#history').append(result_color + '<br>')
    })

    $('#times').click(()=>{
        result = `Result of ${a} * ${b} = ${a * b}`
        $('#result').html(result)
        result_color = 
        `
        <span style="background-color:blue">
            ${result}
            <button class='hide_button'> Hide </button>
        </span>
        `
        $('#history').append(result_color + '<br>')
    })

    $('#divide').click(()=>{
        result = `Result of ${a} / ${b} = ${a / b}`
        $('#result').html(result)
        result_color = 
        `
        <span style="background-color:yellow">
            ${result}
            <button class='hide_button'> Hide </button>
        </span>
        `
        $('#history').append(result_color + '<br>')
    })

    $('body').on('click', '.hide_button', hideBtnHandler)
    
}



$('document').ready(setup)