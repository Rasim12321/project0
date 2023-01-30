// первый параметр - редюсер (функция (состояние, action))
//action просто js объект с обязательным полем TYPE, и в него можно передать данные в поле payload
// action = {type : '', payload: '?'}
// state - объект/массив/примитив, с данными, СОСТОЯНИЕ НЕ МЕНЯЕТСЯ ПОЭТОМУ СОЗДАЕМ НОВЫЙ ОБЪЕКТ!
const defaultState = {cash: 0, }

export const cashReducer = (state=defaultState, action) => {
    switch (action.type){
        case 'ADD_CASH':
            return {...state, cash: state.cash + action.payload}
        case 'GET_CASH':
            return {...state, cash: state.cash - action.payload}

        default: return state
        // в любом случае возвращаем состояние, если его нет в case то возвращаем начальное
    }
}