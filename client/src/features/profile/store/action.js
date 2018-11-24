import  Api from '../../../api'
export const GET_RANDOM = 'GET_RANDOM';

const getRandomHandler = user =>({
    type: GET_RANDOM,
    user
})
export const getRandomUser = userType => dispatch => {
    dispatch({type: "GET_RANDOM_USER"});

    Api.endpoints.random(userType)
    .then( result => {
        console.log({result});
        dispatch(getRandomHandler(result.data))
    }).catch(error =>{
        console.log({error});
    })
}