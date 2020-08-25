import React, { Component } from "react";
import CustomCard from "./render-card";
import Button from '@material-ui/core/Button';

function RenderCard({items}){
    //for randomizing the display of cards
    for (var i = items.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = items[i];
        items[i] = items[j];
        items[j] = temp;
    }
       const allitems = items.map( (item) =>{
            return(
                <div  key= {item.id} className="col-6 col-md-3 colcus">
                <CustomCard item ={item}/>
                </div>
            );
        })
        return allitems;
}

class Application extends Component{
    constructor(props){
        super(props);
        if(this.props.preserveState)
        this.state = this.props.preserveState;
        else{ 
        this.state = {
            Architecture : true,
            Music : true,
            Cinema : true,
            Nature : true,
            Logo : true,
            Space : true,
            Art : true,
        };
    }
        this.CheckAllTrue = this.CheckAllTrue.bind(this);
        this.CheckAllFalse = this.CheckAllFalse.bind(this);
    }

    CheckAllTrue(){
        if(this.state.Architecture &&
            this.state.Music &&
            this.state.Nature &&
            this.state.Logo  &&
            this.state.Space &&
            this.state.Art &&
            this.state.Cinema){
                this.setState({
                    Architecture : false,
                    Music : false,
                    Cinema : false,
                    Nature : false,
                    Logo : false,
                    Space : false,
                    Art : false,
                });
            }
    }

    CheckAllFalse(){
        if(this.state.Architecture === false &&
            this.state.Music === false &&
            this.state.Nature === false &&
            this.state.Logo === false &&
            this.state.Space === false &&
            this.state.Art === false &&
            this.state.Cinema === false){
                this.setState({
                    Architecture : true,
                    Music : true,
                    Cinema : true,
                    Nature : true,
                    Logo : true,
                    Space : true,
                    Art : true,
                })
            }
    }

    async manage_onClick(category){
        await this.CheckAllTrue();
        if(category === "Architecture")
        await this.setState({Architecture : !this.state.Architecture});
        if(category === "Music")
        await this.setState({Music : !this.state.Music});
        if(category === "Nature")
        await this.setState({Nature : !this.state.Nature});
        if(category === "Art")
        await this.setState({Art : !this.state.Art});
        if(category === "Cinematography")
        await this.setState({Cinema : !this.state.Cinema});
        if(category === "Logo")
        await this.setState({Logo : !this.state.Logo});
        if(category === "Astronomy")
        await this.setState({Space : !this.state.Space});
        await this.CheckAllFalse();
        this.props.sendState(this.state);
    }

    render() {
        return (
            <div className="heightset">
                <div className="row Cardrow">
                    <div className="col col-md-8 offset-md-2 application-col">
                        <Button color="secondary" size="medium" 
                            onClick={()=>this.manage_onClick("Architecture")} 
                            variant= {this.state.Architecture?"outlined":null}>Architecture
                        </Button>
                        <Button color="secondary" size="medium"
                            onClick={()=>this.manage_onClick("Music")}  
                            variant= {this.state.Music?"outlined":null}>Music
                        </Button>
                        <Button color="secondary" size="medium"
                            onClick={()=>this.manage_onClick("Nature")}
                            variant= {this.state.Nature?"outlined":null}>Nature
                        </Button>
                        <Button color="secondary" size="medium"
                            onClick={()=>this.manage_onClick("Art")}  
                            variant= {this.state.Art?"outlined":null}>Art
                        </Button>
                        <Button color="secondary" size="medium"
                            onClick={()=>this.manage_onClick("Cinematography")} 
                            variant= {this.state.Cinema?"outlined":null}>Cinematography
                        </Button>
                        <Button color="secondary" size="medium"
                            onClick={()=>this.manage_onClick("Logo")}  
                            variant= {this.state.Logo?"outlined":null}>Logos
                        </Button>
                        <Button color="secondary" size="medium"
                            onClick={()=>this.manage_onClick("Astronomy")}  
                            variant= {this.state.Space?"outlined":null}>Astronomy
                        </Button>
                    </div>
                </div>

                <div className="row Cardrow">
                    {this.state.Architecture ? <RenderCard items ={this.props.Architecture}/> : null}
                    {this.state.Music ? <RenderCard items ={this.props.Music}/> : null}
                    {this.state.Cinema ? <RenderCard items ={this.props.Cinema}/> : null}
                    {this.state.Nature ? <RenderCard items ={this.props.Nature}/> : null}
                    {this.state.Logo ? <RenderCard items ={this.props.Logo}/> : null}
                    {this.state.Space ? <RenderCard items ={this.props.Space}/> : null}
                    {this.state.Art ? <RenderCard items ={this.props.Art}/> : null}
                </div>
            </div>   
        );
    }
}

export default Application;