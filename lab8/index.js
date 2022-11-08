setup = function(){
    $.ajax({
        url:"https://api.themoviedb.org/3/movie/top_rated?api_key=96871b776d98641185bbfa8afae68416&language=en-US",
        type: "GET",
        success: function(data){
            console.log(data)
            // for(i=0; i<data.results.length; i++){
            //     console.log(data.results[i].title);
            // }
            data.results.forEach((movie)=>{
                $('main').append(
                    `
                    <div>
                        ${movie.title}<br>
                        <p>${movie.overview}</p>
                        <img src='https://image.tmdb.org/t/p/w500${movie.poster_path}'>
                        <button get_path="${movie.poster_path}" class="backdropBtn">Get Backdrop Image</button>
                    </div>
                    `
                )
            })
        }
    })

    $('body').on('click', ".backdropBtn", function(){
        path = $(this).attr("get_path")
        $('aside').html(
            `
            <img src='https://image.tmdb.org/t/p/w500${path}'>
            `
        )
    })
}

$(document).ready(setup)