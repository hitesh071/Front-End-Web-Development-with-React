import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';
import {baseURL} from '../shared/baseURL';
import { actionTypes } from 'react-redux-form';
import { Comments } from './comments';


export const addComment =(comment)=>({
    type: ActionTypes.ADD_COMMENT,
    payload :comment
    
});

export const postComment = (dishId,rating,author,comment) =>(dispatch)=>{
    const newComment={
        dishId : dishId,
        rating:rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();
    return fetch(baseURL+'comments',{
        method: 'POST',
        body : JSON.stringify(newComment),
        headers:{
            'content-Type':'application/json'
        },
        credentials : 'same-origin'
    })
        .then(response =>{
            if(response.ok){
                return response;
            }
            else{
                var error=new Error('Error '+response.status+': '+response.statusText);
                error.response=response;
                throw error;
            }
        },error=>{
            var errmess= new Error(error.message);
            throw errmess;
        })
        .then(response=>response.json())
        .then(response =>dispatch(addComment(response)))
        .catch(error => {console.log('Post Comments ',error.message)});
        
}

export const fetchDishes = () => (dispatch) =>{
    dispatch(dishesLoading(true));

    return fetch(baseURL+'dishes')
        .then(response =>{
            if(response.ok){
                return response;
            }
            else{
                var error=new Error('Error '+response.status+': '+response.statusText);
                error.response=response;
                throw error;
            }
        },error=>{
            var errmess= new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(dishes=> dispatch(addDishes(dishes)))
        .catch(error =>dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () =>({
    type : ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errMess) =>({
    type : ActionTypes.DISHES_FAILED,
    payload: errMess
});

export const addDishes =(dishes) =>({
    type : ActionTypes.ADD_DISHES,
    payload : dishes
});

export const fetchComments = () => (dispatch) =>{
    
    return fetch(baseURL+'comments')
        .then(response =>{
            if(response.ok){
                return response;
            }
            else{
                var error=new Error('Error '+response.status+': '+response.statusText);
                error.response=response;
                throw error;
            }
        },error=>{
            var errmess= new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(comments=> dispatch(addComments(comments)))
        .catch(error=>dispatch(commentsFailed(error.message)));
}
export const commentsFailed = (errMess) =>({
    type :ActionTypes.COMMENTS_FAILED,
    payload:errMess
});

export const addComments=(comments) =>({
    type: ActionTypes.ADD_COMMENTS,
    payload : comments
});

export const fetchPromos = ()=>(dispatch)=>{
    dispatch(promosLoading(true));
    return fetch(baseURL+'promotions')
        .then(response =>{
            if(response.ok){
                return response;
            }
            else{
                var error=new Error('Error '+response.status+': '+response.statusText);
                error.response=response;
                throw error;
            }
            },error=>{
                var errmess= new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error=>dispatch(promosFailed(error.message)));
    }

export const promosLoading =() =>({
    type:ActionTypes.PROMOS_LOADING
});

export const promosFailed =(errMess) =>({
    type: ActionTypes.PROMOS_FAILED,
    payload : errMess
});

export const addPromos = (promos) =>({
    type: ActionTypes.ADD_PROMOS,
    payload : promos
});

export const fetchLeaders = () => (dispatch) =>{
    dispatch(leadersLoading(true));
    return fetch(baseURL+'leaders')
        .then(response =>{
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error '+response.status+': '+response.statusText);
                error.response=response;
                throw error;
            }
        },error=>{
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then(response=>response.json())
        .then(leaders=>dispatch(addLeaders(leaders)))
        .catch(error=>dispatch(leadersFailed(error.message)));
}

export const leadersLoading = ()=>({
    type : ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errMess) =>({
    type: ActionTypes.LEADERS_FAILED,
    payload: errMess
});

export const addLeaders = (leaders) =>({
    type : ActionTypes.ADD_LEADERS,
    payload : leaders
});

export const addFeedback = (feedback) =>({
    type : ActionTypes.ADD_FEEDBACK,
    payload : feedback
});

export const postFeedback = (values) =>(dispatch)=>{
    let newValues={...values};
    newValues.date=new Date().toISOString();
    return fetch(baseURL+'feedback',{
        method:'POST',
        body : JSON.stringify(newValues),
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
    })
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error= new Error('Error '+response.status+' : '+response.statusText);
                error.response=response;
                throw error;
            }
        },error=>{
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then(response=>response.json())
        .then(response=>alert(dispatch(addFeedback(response))))
        .catch(error=>{console.log('Post Feedback ',error.message)});



}