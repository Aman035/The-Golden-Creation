import React from "react";
import {FadeTransform,Fade} from 'react-animation-components';
function Home()
{
    return (
        <div>
            <div className = "jumbotron container-fluid justify-content-between bg-black">
                <h1 className="header">The <span className="gold">Golden</span> Ratio</h1>
                <FadeTransform in 
                transformProps={{
                  exitTransform: 'scale(0.5) translateY(-50%)'
                  }}>
                    <video src='/assets/video/2.mp4' autoPlay={true} loop={true} className="customvideo" muted={true}/>
                </FadeTransform>
                <h4 className="subHeading">I Exist Everywhere....</h4>
            </div>
            <div className="row  homerow">
                <div className ="col-12 col-md-4 offset-md-1">
                    <Fade in>
                        <video src='/assets/video/1.mp4' autoPlay={true} loop={true} className="customvideo2" muted={true}/>
                    </Fade>
                </div>
                <div className="col-12 col-md-6">
                    <h3 className="itemtitle">What is <span className="gold">Golden</span> Ratio?</h3>
                    <h5>The golden ratio, also known as the divine proportion, golden mean, or golden section, in mathematics, the irrational number (1 + Square root of√5)/2, which is approximately equal to 1.618.It is denoted ϕ or τ.</h5>
                </div>
            </div>
            <div className="row  homerow">
                <div className ="col-12 col-md-4 offset-md-1 order-md-last">
                    <img height="300px" src='/assets/images/homepage/1.png' alt="golden face"/>
                </div>
                <div className="col-12 col-md-6 offset-md-1">
                    <h3 className="itemtitle">Significance</h3>
                    <h5>The <span className="gold">golden</span> ratio is sometimes called the "divine proportion," because of its frequency in the natural world. The number of petals on a flower, for instance, will often be a Fibonacci number. The seeds of sunflowers and pine cones twist in opposing spirals of Fibonacci numbers. Even the sides of an unpeeled banana will usually be a Fibonacci number—and the number of ridges on a peeled banana will usually be a larger Fibonacci number.</h5>
                </div>
            </div> 
            <div className="row  homerow">
                <div className ="col-12 col-md-4 offset-md-1">
                    <img src='/assets/images/homepage/5.png' alt="golden maths" width="80%"/>
                    <img  width="80%" src='/assets/images/homepage/2.png' alt="golden maths" />
                </div>
                <div className="col-12 col-md-6">
                    <h3 className="itemtitle">Mathematical Explanation</h3>
                    <h5>In mathematics, two quantities are in the <span className="gold">golden</span> ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities.</h5>
                    <img width="100%" src="assets/images/homepage/6.png" alt="img" />
                    <p className="align"><i>--Wikipedia</i></p>
                </div>
            </div> 
            <div className="row homerow">
                <div className ="col-12 col-md-4 offset-md-1 order-md-last">
                    <img className="customvideo2" src='/assets/images/homepage/4.gif' alt="golden history"/>
                </div>
                <div className="col-12 col-md-6 offset-md-1">
                    <h3 className="itemtitle">History</h3>
                    <h5>Ancient Greek mathematicians first studied what we now call the <span className="gold">golden</span> ratio, because of its frequent appearance in geometry.According to one story, 5th-century BC mathematician Hippasus discovered that the <span className="gold">golden</span> ratio was neither a whole number nor a fraction (an irrational number), surprising Pythagoreans.</h5>
                    <p><i>--Wikipedia</i></p>
                </div>
            </div>           
        </div>

    );

}
export default Home;