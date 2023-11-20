const ADD = 'ADD_TO_CART'
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const DELETE = 'DELETE'
const CLEAR = 'CLEAR'
const SET = 'SET'


export const addAction = payload => ({type: ADD, payload});
export const incrementAction = payload => ({type: INCREMENT, payload});
export const decrementAction = payload => ({type: DECREMENT, payload});
export const deleteAction = payload => ({type: DELETE, payload});
export const clearAction = payload => ({type: CLEAR, payload});
export const setCountAction = payload => ({type: SET, payload});

const read = () => {
    return JSON.parse(localStorage.getItem('cart')) ?? []
 };
 
 const write = (data) => {
     localStorage.setItem('cart', JSON.stringify(data))
 };

const checkProduct = (state, payload) => {
    const target = state.find(el => el.id === +payload.id);
    if(!target){ 
        return [...state, {...payload, count: 1}];
    } else {
        target.count++; 
        return[...state];
    }
}




export const cartReducer = (state = read(), action) => {
    if(action.type === ADD){
        const newState =
        checkProduct(state, action.payload);
        write(newState)
        return newState;

    } else if (action.type === INCREMENT){
      const target = state.find(el => el.id === action.payload);
      if (target) {
        target.count++;
        const newState = [...state];
        write(newState);
        return newState;
      }
        
    } else if (action.type === DECREMENT){
        const target = state.find(el => el.id === action.payload);
        target.count--;
    if (target) {
        state = target.count === 0
                ? state.filter(el => el.id !== action.payload)
                : state
                write(state)
        const newState = [...state];
        write(newState);
        return newState;
        }

    } else if (action.type === SET){
        const target = state.find(el => el.id === action.payload.id);
    if (target) {
        target.count = action.payload.count;
        const newState = [...state];
        write(newState); 
        return newState;
    }

    } else if (action.type === DELETE){
        const newState = state.filter(el => el.id !== action.payload);
        write(newState); 
        return newState;

    } else if (action.type === CLEAR){
        const newState = [];
        write(newState); 
        return newState;
    
    } else {
        return state;
    }
  }



  