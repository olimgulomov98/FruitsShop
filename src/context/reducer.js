export const reducer = (state, action)=>{
    switch(action.type){
        case 'add': 
            let selected = state.data.map((value) => value.id === action.payload.id && {...value, addtocart: true, quantity: 1})
            selected = selected.filter((value) => value && value)
            let added = [...state.products, ...selected]
            let reset = state.data.map((value) => value.id === action.payload.id ? selected[0] : value)
            return {...state, products: added, data: reset }

        case 'cancel':
            let cancel = state.data.filter(value => value.id === action.payload.id)
            let cancelChanged = cancel.map(value => value && {...value, addtocart: !value.addtocart})
            let newDatas = state.data.map(value => value.id === action.payload.id ? cancelChanged[0] : value)
            return{...state, data: newDatas }

        case 'basket': 
            return {...state, basket: !state.basket}

        case 'heart':
            let heart = state.data.filter(value => value.id === action.payload.id)
            let heartChanged = heart.map(value => value && {...value, like: !value.like})
            let newData = state.data.map(value => value.id === action.payload.id ? heartChanged[0] : value)
            let likeSelect = state.data.map((value) => value.id === action.payload.id && {...value})
            likeSelect = likeSelect.filter((value) => value && value)
            let likeAdd = [...state.likedProducts, ...likeSelect]
            return {...state, likedProducts: likeAdd, data: newData}
        
        case 'heartRed':
            let heartRed = state.data.filter(value => value.id === action.payload.id)
            let heartRedChanged = heartRed.map(value => value && {...value, like: !value.like})
            let newData1 = state.data.map(value => value.id === action.payload.id ? heartRedChanged[0] : value)
            return {...state, data: newData1}

        case 'save':
            let save = state.data.filter(value => value.id === action.payload.id)
            let saveChanged = save.map(value => value && {...value, save: !value.save})
            let NewData = state.data.map(value => value.id === action.payload.id ? saveChanged[0] : value)
            let saveSelect = state.data.map((value) => value.id === action.payload.id && {...value})
            saveSelect = saveSelect.filter((value) => value && value)
            let saveAdd = [...state.savedProducts, ...saveSelect]
            return {...state, savedProducts: saveAdd, data: NewData}
            
        case 'saveBlack':
            let saveBlack = state.data.filter(value => value.id === action.payload.id)
            let saveBlackChanged = saveBlack.map(value => value && {...value, save: !value.save})
            let NewData1 = state.data.map(value => value.id === action.payload.id ? saveBlackChanged[0] : value)
            return {...state, data: NewData1}

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
        
        case 'buy':
            let buy = 'no data'
            console.log(buy)
            return{...state}    

        default: return state.data
    }
}