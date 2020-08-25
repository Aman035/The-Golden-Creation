import React from 'react';
import {Card,CardImg,Breadcrumb,BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";
import { FadeTransform, Fade} from 'react-animation-components';

function ItemCard(props) {
  return (
    <div className="heightset">
        <div className="row secondary">
          <Breadcrumb>
              <BreadcrumbItem><Link to='/applications'>Applications</Link></BreadcrumbItem>
              <BreadcrumbItem>{props.item.name}</BreadcrumbItem>
          </Breadcrumb>
          <hr />
        </div>
        <div className="row itemrow">
          <div className ="col-10 col-md-3 offset-1 offset-md-2">
            <FadeTransform in 
              transformProps={{
                  exitTransform: 'scale(0.5) translateY(-50%)'
                  }}>
              <Card className="itemdetail">
                <CardImg top src={props.item.image} alt={props.item.name} className="customimg"/>
              </Card>
            </FadeTransform>
          </div>
          <div className="col-12 col-md-5 my-auto">
            <Fade in>
                <p>{props.item.category}</p>
                <h2 className="itemtitle">{props.item.name}</h2>
                {props.item.type?<h5>Type- {props.item.type}</h5>:null}
                {props.item.Artist?<h5>Artist- {props.item.Artist}</h5>:null}
                {props.item.builtin?<h5>Built in- {props.item.builtin}</h5>:null}
                <p>{props.item.description}</p>
            </Fade>
          </div>
        </div>
    </div>
  );
}
export default ItemCard;
