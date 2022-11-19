let currentPage = 1
let pageSize = 3

const display = function(){
    $('#contentArea').empty()
    let searchTerm = $('#searchTerm').val()
    $.ajax({
        url:`https://api.themoviedb.org/3/search/movie?api_key=96871b776d98641185bbfa8afae68416&language=en-US&query=${searchTerm}&page=1&include_adult=false`,
        type: "GET",
        success: function(data){

            $("#buttonArea").append('<button id="first" value="1">First</button>')
            for(i = 1; i<= Math.ceil(data.results.length / pageSize); i++){
                $("#buttonArea").append(`<button id="${i}">${i}</button>`)
            }
            $("#buttonArea").append('<button id="last">Last</button>')


            startIndex = (currentPage - 1) * pageSize
            endIndex = startIndex + pageSize
            for(i = startIndex; i < endIndex; i++ ){
                $('#contentArea').append(
                    `
                    <div>
                        <p>#${i}</p>
                        <p>Title: ${data.results[i].title}</p>
                        <p>Description: ${data.results[i].overview}</p>
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
        // console.log( $("select option:selected").val());
        pageSize = Number($("select option:selected").val())
        display()
        
    }) 
    $('#searchBtn').click(()=>{
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
}






$(document).ready(setup)