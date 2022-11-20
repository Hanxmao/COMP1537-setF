var currentPage = 1
let pageSize = 3
let pageNumber = null
var results = null



const display = function(){
    console.log(results);
    $('#contentArea').empty()
    startIndex = (currentPage - 1) * pageSize
    endIndex = startIndex + pageSize
    for(i = startIndex; i < endIndex; i++ ){
        $('#contentArea').append(
            `
            <div>
            <p>#${i + 1}</p>
            <p>Title: ${results[i].title}</p>
            <p>Description: ${results[i].overview}</p>
            <img src='https://image.tmdb.org/t/p/w500${results[i].poster_path}'>
            <button get_path="${results[i].poster_path}" class="backdropBtn">Get Backdrop Image</button>
            </div>
            `
            )
        }

   
    }
    
const addButton = function(){
    $('#buttonArea').empty()
    for(i = 1; i<= Math.ceil(results.length / pageSize); i++){
        $("#buttonArea").append(`<button value="${i}" id="${i}">${i}</button>`)
        $('body').on('click', `#${i}`, function(){
            currentPage = Number($(this).val())
            $('#prev').show()
            $('#next').show()
            display()
            console.log(currentPage);   
        })
    }
}

setup = function(){
    $.ajax({
        url:`https://api.themoviedb.org/3/search/movie?api_key=96871b776d98641185bbfa8afae68416&language=en-US&query=${$('#searchTerm').val()}&page=1&include_adult=false`,
        type: "GET",
        success: function(data){
            results = data.results
        }
    })
    $('#searchBtn').click(()=>{
        let searchTerm = $('#searchTerm').val()
        $.ajax({
            url:`https://api.themoviedb.org/3/search/movie?api_key=96871b776d98641185bbfa8afae68416&language=en-US&query=${searchTerm}&page=1&include_adult=false`,
            type: "GET",
            success: function(data){
                results = data.results
                addButton()
            }
        })
        
        $('#first').show()
        $('#last').show()

        display()
        $('body').on('click', ".backdropBtn", function(){
            path = $(this).attr("get_path")
            console.log(path)
            $('aside').html(
                `
                <img src='https://image.tmdb.org/t/p/w500${path}'>
                `
            )
        })
    })

    $('select').change(()=>{
        // console.log( $("select option:selected").val());
        pageSize = Number($("select option:selected").val())
        addButton()
        display()
        
    }) 

    $("#first").click(()=>{
        currentPage = 1
        display()
        console.log(currentPage);
    })
    $("#prev").click(()=>{
        if(currentPage > 1){
            currentPage -= 1
            display()
            console.log(currentPage);
        }
    })
    $("#next").click(()=>{
        if(currentPage < Math.ceil(results.length / pageSize)){
            currentPage += 1
            display()
            console.log(currentPage);
        }
    })
    $("#last").click(()=>{
        currentPage = Math.ceil(results.length / pageSize)
        display()
        console.log(currentPage);
    })

}






$(document).ready(setup)