import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            gameStart : false,
            time: 60,
            level : 0,
            third : 0,
            second : 0,
            values : {
                v1 : 0,
                v2 : 0,
                v3 : 0,
                v4 : 0
            },
            score : 0,
            display_score : false,
            category : "No Category"
        };

        this.startTimer = this.startTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.ans_finder = this.ans_finder.bind(this)
    }

    startTimer() {
        this.setState({
            gameStart: true,
            time :59,
            level : 1,
            third : 21,
            second : 13,
            values : {
                v1 : 21,
                v2 : 28,
                v3 : 34,
                v4 : 32
            },
            score : 0,
            display_score : false,
            category : "No Category"
        })
        this.timer = setInterval(() => {
            this.setState({time: this.state.time - 1});
        if(this.state.time === 0 || this.state.level === 71)
            this.resetTimer();
        }, 1000);

    }

    category(){
        var cat;
        if(this.state.score<=5)
        cat = "Newbie";
        else{
            if(this.state.score<=20)
            cat = "Average";

            else{
                if(this.state.score<=40)
                cat = "Expert";
                else
                cat = "Grand Master";
            }
        }
        this.setState({category : cat});
    }

    async resetTimer() {
        await this.category();
        clearInterval(this.timer);
        this.setState({
            gameStart : false,
            time: 60,
            level : 0,
            third : 0,
            second : 0,
            values : {
                v1 : 0,
                v2 : 0,
                v3 : 0,
                v4 : 0},
            display_score : true
    })}
    

    async ans_finder(val){
        if(val === this.state.third && this.state.gameStart){
            var t = this.state.third;
            var s = this.state.second;
            await this.setState({
                level : this.state.level+1,
                third : t+s,
                second : t, 
                score : this.state.score+1
                })
            
            //Creating randomness in game
            let array =[this.state.third,0,0,0];
            for(var i=1;i<4;i++){
                var min=this.state.third-10; 
                var max=this.state.third+10;  
                var random = Math.floor(Math.random() * (+max - +min)) + +min; 
                array[i] = random;
                if(random === this.state.third)
                i--;
            }
            for (var ix = 3; ix > 0; ix--) {
                var j = Math.floor(Math.random() * (ix + 1));
                var temp = array[ix];
                array[ix] = array[j];
                array[j] = temp;
            }
            this.setState({
                values :{
                    v1 : array[0],
                    v2 : array[1],
                    v3 : array[2],
                    v4 : array[3]
                }})
        }
        else{
            await this.resetTimer();
        }
        return;
    }
        
    render(){

        let start = (this.state.time === 60) ?<button onClick={this.startTimer}>start</button> :null
        let end = (this.state.time === 60) ?null :<button onClick={this.resetTimer}>Quit</button>
        return(
        <div className="row game mt-5">
                <div className="col-12 col-md-2 offset-md-1 gamecol">
                    <h5>Time: {this.state.time} sec</h5>
                </div>
                <div className="col-12 col-md-6 gamecol">
                    {this.state.gameStart?
                        <h5 className="gamecol">The {this.state.level+8}th term of the fibonacci series is?</h5>
                        :<h5 className="gamecol">Let The Game Begin!</h5>}
                    <Button size="large" 
                        variant="outlined" 
                        onClick={async()=>await this.ans_finder(this.state.values.v1)}>
                        {this.state.values.v1}
                    </Button>
                    <Button size="large" 
                        variant="outlined" 
                        onClick={async()=>await this.ans_finder(this.state.values.v2)}>
                        {this.state.values.v2}
                    </Button>
                    <Button size="large" 
                        variant="outlined" 
                        onClick={async()=>await this.ans_finder(this.state.values.v3)}>
                        {this.state.values.v3}
                    </Button>
                    <Button size="large" 
                        variant="outlined" 
                        onClick={async()=>await this.ans_finder(this.state.values.v4)}>
                        {this.state.values.v4}
                    </Button>
                </div>
                <div className="col-12 col-md-2 offset-md-1 gamecol">
                    <h5>Level: {this.state.level}</h5>
                </div>
                <div className="col-12 gamecol">
                    {start}
                    {end}
                </div>
                {this.state.gameStart?
                    <div className="col-12 gamecol">
                        Ratio of   {this.state.level+8}/{this.state.level+7} th   term is <br/>
                        {parseFloat(this.state.third)/parseFloat(this.state.second)}
                    </div>
                :null}
                {this.state.gameStart?
                    <div className="col-12 gamecol">
                        <h3>Current Score : {this.state.level-1}</h3>
                    </div>
                :null}
                {this.state.display_score?
                    <div className="col-12 gamecol">
                        <h3>Final Score : {this.state.score}</h3>
                        <h5>Category : <span className="gold">{this.state.category}</span></h5>
                    </div>
                :null}
        </div>
    )}
}
export default Game;