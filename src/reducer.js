export const initialState = {
    basket:[],
};

export const getBasketTotal = (basket) => basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state,action) => {

    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket, action.item],
            };
            
         case 'Remove_TO_BASKET':
            const index = state.basket.findIndex(basketitem => basketitem.title === action.title);      
            let newbasket = [...state.basket];

            if(index >= 0){
                newbasket.splice(index,1);
            }
            else{
                console.log("Remove basket button reducer.js ");
            }
            return{
                ...state,
                basket:newbasket,
            }
            default:
                return state;
    }
};
export default reducer;