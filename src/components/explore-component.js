import React from 'react';
import Game from './game-component';
function Explore(){

    return (
        <div className="heightset">
            <h2 className="Exploreheading">Are you ready for the <span className = "gold">Golden</span> Challange !!!</h2>
            <div className="row m-0">
                <div className = "col-10 offset-1">
                    <h3>Prerequsite</h3>
                    <p><b>Fibonacci Series- </b>
                        It is a series in which each term is the sum
                        of the two preceding ones,starting from 0 and 1.
                     </p>
                    <p>The seires begins as - 0, 1, 1, 2, 3, 5, 8, 13, ...</p>
                    <p>The <span className="gold">Golden </span> 
                        ratio and Fibonacci series have a very special relation. 
                        When we take any two successive (one after the other) Fibonacci Numbers, 
                        their ratio is very close to the <span className="gold">Golden</span> Ratio.
                        For eg- 13/8 = 1.625 ~ Φ (1.618033988749895...).
                    </p>
                </div>
            </div>
            <div className="row mr-0 ml-0 mt-5">
                <div className = "col-10 offset-1">
                    <h3>Instructions</h3>
                    <p>As soon as you click the start button ,the game will begin and a 1 minute timer will start running.</p>
                    <p>The game starts from 9th term of fibonacci series (the term after 13) and consists of total 70 Levels.</p>
                    <p>At each level of game you need to select the correct term to clear the level.</p>
                    <p>At each level you can select a number unlimited no. of times till you get the correct answer.</p>
                    <p>Based on the no. of level cleared you would get the category as-</p>
                    <ul className="list-unstyled">
                        <li><b>Newbie</b> - 0 to 10</li>
                        <li><b>Average</b> - 11 to 25</li>
                        <li><b>Expert</b> - 26 to 50</li>
                        <li><b>Grand Master</b> - Above 50</li>
                    </ul>
                </div>
            </div>
            <Game/>
        </div>
    );

}

export default Explore;