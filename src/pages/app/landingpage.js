import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Card } from "../../components";
import { Landingpagenav } from "../../widgets"
import { Carousel } from "react-bootstrap";
import {Movieplayer} from "../../pages";
import { HomeAlone, GodFather, SoundofMusic } from "../../assets";
import "./app.css";
const Landingpage = () => {

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

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        
    };


    return (
        <>
            <Landingpagenav />

            <section className="intro-section">
                <div className="overlay">
                    <div className="overlay-content">
                        <h1>Relive Your Childhood</h1>
                        <h4>Through Movies</h4>
                        <button>Get Started</button>
                    </div>
                </div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-500"
                            src={HomeAlone}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={GodFather}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={SoundofMusic}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
            <section>
                <Card 
                isLoading={isLoading} 
                movies={movies} 
                // toggleMovieModal={toggleMovieModal}  
                // setMovieModal={setMovieModal}
                // movieModal={movieModal}
                />
                <Movieplayer movies={movies}/>
            </section>

        </>
    )
}

export { Landingpage }
