import { types } from "../types/types";


const initialState = {
    items: [],
    activeItem: null
}

export const warehouseReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.warehouseLoaded:
            return {
                ...state,
                items: [...action.payload]
            }

        case types.warehouseAddItem:
            return {
                ...state,
                items: [...state.items, action.payload],
                activeItem: null
            }

        case types.warehouseUpdateItem:
            return {
                ...state,
                items: state.items.map(item => (item.code === action.payload.code) ? action.payload : item),
            }

        case types.warehouseRemoveItem:
            return {
                ...state,
                items: state.items.filter(item => item.code !== state.activeItem.code),
                activeItem: null
            }

        case types.warehouseSetActiveItem:
            return {
                ...state,
                activeItem: action.payload
            }

        case types.warehouseRemoveActiveItem:
            return {
                ...state,
                activeItem: null
            }

        default:
            return state;
    }

}