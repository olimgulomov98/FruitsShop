export const reducer = (state, action)=>{
    switch(action.type){
        case 'add': 
            let selected = state.data.map((value) => value.id === action.payload.id && {...value, addtocart: true, quantity: 1})
            selected = selected.filter((value) => value && value)
            let added = [...state.products, ...selected]
            let reset = state.data.map((value) => value.id === action.payload.id ? selected[0] : value)
            return {...state, products: added, data: reset }

        case 'cancel':
            let select = state.data.map((value) => value.id === action.payload.id && {...value, addtocart: false})
            let rese = state.data.map((value) => value.id === action.payload.id ? state.data : value)
            console.log(rese)
            return{...state, data: select}

        case 'basket': 
            return {...state, basket: !state.basket}

        case 'heart':
            let heart = state.data.filter(value => value.id === action.payload.id)
            let heartChanged = heart.map(value => value && {...value, like: !value.like})
            let newData = state.data.map(value => value.id === action.payload.id ? heartChanged[0] : value)
            return {...state, data: newData}
            
        case 'delete':
            let resDel = state.products.filter((value) => value.id !== action.payload.userId)
            return{...state,products: resDel}    
        
        case 'plus' :
            let resPlus = state.products.map((value) => value.id === action.payload.id ? {...value, quantity: value.quantity + 1} : value)
            return {...state, products: resPlus}

        case 'minus' :
            let resMinus = state.products.map((value) => value.id === action.payload.id && value.quantity > 1 ? {...value, quantity: value.quantity - 1} : value)
            console.log(resMinus);
            return {...state, products: resMinus}
            
        default: return state.data
    }
}