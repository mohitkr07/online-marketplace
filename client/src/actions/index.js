export const storeSearchRes = (dataArray) => {
    return {
        type: 'ADD_SEARCHRES',
        payload: dataArray,
    }
}