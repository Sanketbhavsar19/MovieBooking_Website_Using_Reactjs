import React, { useEffect, useState } from "react"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {

    const [searchInput,setSearchInput] = useState("");
    const [searchResults,setSearchResults] = useState([]);

    const handleSearchInputChange =(e) => {
        setSearchInput(e.target.value);

    };

    useEffect(() => {
        if(searchInput){
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${searchInput}&page=1`)
            .then(res => res.json())
            .then((data) => setSearchResults(data.results));
        }else{
             setSearchResults([]);
        }

    },[searchInput]);


    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="pngwing.com.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
            <div className="headerRight">
                <input 
                      type="text"
                      placeholder="Search for a Movie...."
                      value={searchInput}
                      onChange={handleSearchInputChange}
                      className="searchBar"

                      />

                      {searchInput &&(
                        <div className="searchResults">
                            {searchResults.length>0?(
                                searchResults.map((movie) =>(
                                    <Link to={`/movie/${movie.id}`}key={movie.id} className="searchResultItem">
                                        {movie.title}
                                    </Link>
                                ))
                            ):(
                                <div className="noResults">No results found</div>
                                
                            )}
                            </div>
                      )}
            </div>
        </div>
    );
}

export default Header;