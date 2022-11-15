var currentPage = 1
var pageSize = 3

const display = function(){
    $('#contentArea').empty()
    $.ajax({
        url:"https://api.themoviedb.org/3/movie/top_rated?api_key=96871b776d98641185bbfa8afae68416&language=en-US",
        type: "GET",
        success: function(data){
            // console.log(data)
            // for(i=0; i<data.results.length; i++){
            //     console.log(data.results[i].title);
            // }
            startIndex = (currentPage - 1) * pageSize
            endIndex = startIndex + pageSize
            for(i = startIndex; i < endIndex; i++ ){
                $('#contentArea').append(
                    `
                    <div>
                        ${data.results[i].title}<br>
                        <p>${data.results[i].overview}</p>
                        <img src='https://image.tmdb.org/t/p/w500${data.results[i].poster_path}'>
                        <button get_path="${data.results[i].poster_path}" class="backdropBtn">Get Backdrop Image</button>
                    </div>
                    `
                )
            }
        }
    })
}

setup = function(){
    $('select').change(()=>{
        console.log( $("select option:selected").val());
        pageSize = Number($("select option:selected").val())
        
        display()
    }) 
}

display()

$('body').on('click', ".backdropBtn", function(){
    path = $(this).attr("get_path")
    $('aside').html(
        `
        <img src='https://image.tmdb.org/t/p/w500${path}'>
        `
    )
})


$(document).ready(setup)