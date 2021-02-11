
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Landingpagenav } from "../../widgets";
import { Card } from "../../components"
import axios from "axios";



const Movieplayer = (props) => {

    const { state } = useLocation();

    useEffect(() => {
        console.log(state);
    });

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            const result = await axios(`https://rewind-test.herokuapp.com/movies`)
            console.log(result.data.message);

            setMovies(result.data.message);
            setIsLoading(false);
        }
        fetchMovies();
    }, [])



    return (
        <>
            <Landingpagenav />
            <section className="movie-player-container">
                <video
                src={state?.movie}
                controls
                >
                    playnow abeg
                </video>
                <div className="control-ft">
                    {state?.description}
                </div>
            </section>
            <section>
            <Card 
                isLoading={isLoading} 
                movies={movies} 
            />
            </section>
        </>
    )
}

export { Movieplayer }
