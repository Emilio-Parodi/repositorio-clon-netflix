import react from "react";
import './FeaturedMovie.css';
import { AiOutlinePlus } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";

export default ({item}) => {
   
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    
    for(let i = 0; i < item.genres.length; i++) {
        genres.push(item.genres[i].name);
    };
    
    let description = item.overview;
    if(description.length > 200) {
        description = description.substring(0, 200) + '...';
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featuredVertical">
                    <div className="featuredHorizontal">
                        <div className="featuredName">{item.original_name}</div>
                        <div className="featuredInfos">
                            <div className="featuredPoints">{item.vote_average} puntos</div>
                            <div className="featuredYear">{firstDate.getFullYear()}</div>
                            <div className="featuredSeasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                        </div>
                        <div className="featuredDescription">{description}</div>
                        <div className="featuredButtons">
                            <a href={`/watch/${item.id}`} className="featuredWatchButton"> <BsPlay/> Reproducir</a>
                            <a href={`/list/add/${item.id}`} className="featuredMyListButton"><AiOutlinePlus /> Mas información</a>
                        </div>
                        <div className="featuredGenres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                    </div>
            </div>
        </section>
    );
}

