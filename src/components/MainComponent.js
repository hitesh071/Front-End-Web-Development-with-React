import React,{Component} from 'react';

import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import {DISHES} from '../shared/dishes';
import Contact from './ContactComponent';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';



class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes: DISHES,
      comments : COMMENTS,
      promotions : PROMOTIONS,
      leaders : LEADERS
      
    };
  }
  
  render(){
      const HomePage = () => {
          return(
              <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]} 
              promotion={this.state.promotions.filter((promotion)=> promotion.featured)[0]}
              leader={this.state.leaders.filter((leader)=> leader.featured)[0]}
              />
          );
      }

      const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishid,10))[0]} 
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishid,10))} />
        );
      };

    return (
      <div>
        <Header/>
        <Switch>
            <Route path='/home' component={HomePage}/>
            <Route path='/aboutus' component={()=> <About leaders={this.state.leaders}/>}/>
            <Route exact path ='/menu' component={()=> <Menu dishes={this.state.dishes}/> }/>
            <Route path ='/menu/:dishid' component={DishWithId}/>
            <Route exact path ='/contactus' component={Contact}/>
            <Redirect to ="/home"/>
        </Switch>
        
        <Footer/>
      </div>
    ); 
  }

}

export default Main;