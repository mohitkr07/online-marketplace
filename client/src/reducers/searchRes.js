const initialState = {
    products: "",
};

const storeRes = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SEARCHRES': return {
            products: [action.payload],
        }
        default: return state;
    }
}

export default storeRes