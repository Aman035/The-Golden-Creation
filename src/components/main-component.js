import React  ,{useState,useEffect} from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Header from "./header-component";
import Footer from "./footer-component";
import Home from "./home-component";
import Application from "./application-component";
import Explore from "./explore-component";
import Architecture from "../shared/architecture";
import Nature from "../shared/nature";
import Logo from "../shared/logo";
import Space from "../shared/space";
import Art from "../shared/art";
import Music from "../shared/music";
import Cinema from "../shared/cinematography";
import ItemDetail from "./itemdetails-component";
import LoadingComp from "./loading-component";
function Main(){

    const [Loading,setLoading]=useState(true);

    useEffect(() => {
        setTimeout(()=>setLoading(false), 3000);
      });

    //saving state of applications when switching to details page
    let preserveState = null;
    function SetpreservedState(getstate){
        preserveState = getstate;
    }

        
    const Detail = ({match})=>{
        if(match.params.category === "Architecture")
            return <ItemDetail item = {Architecture.filter( item =>item.id.toString() === match.params.id)[0]}/>
        if(match.params.category === "Music")
           return <ItemDetail item = {Music.filter( item =>item.id.toString() === match.params.id)[0]}/>
        if(match.params.category === "Logo")
            return <ItemDetail item = {Logo.filter( item =>item.id.toString() === match.params.id)[0]}/>
        if(match.params.category === "Art")
            return <ItemDetail item = {Art.filter( item =>item.id.toString() === match.params.id)[0]}/>
        if(match.params.category === "Astronomy")
            return <ItemDetail item = {Space.filter( item =>item.id.toString() === match.params.id)[0]}/>
        if(match.params.category === "Nature")
            return <ItemDetail item = {Nature.filter( item =>item.id.toString() === match.params.id)[0]}/>
        if(match.params.category === "Cinematography")
            return <ItemDetail item = {Cinema.filter( item =>item.id.toString() === match.params.id)[0]}/>
    }
        

    return(

        Loading?<LoadingComp/>:
        <div>
            <Header/> 
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path = "/applications/:category/:id"  component={Detail} />
                    <Route path="/applications" component={() =><Application
                        Architecture = {Architecture}
                        Nature = {Nature} 
                        Logo = {Logo} 
                        Space = {Space} 
                        Art = {Art} 
                        Music = {Music}
                        Cinema = {Cinema}
                        preserveState = {preserveState}
                        sendState = {SetpreservedState}
                        />} />
                    <Route path="/explore" component ={Explore} />
                    <Redirect to="/home" />
                </Switch>
            <Footer/>
        </div>
    );
            
}
export default Main;