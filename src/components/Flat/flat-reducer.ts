import { Dispatch } from 'redux';
import {flatsAPI, FlatsType, FlatType} from "../../api/flats-api";

const initialState: Array<FlatType> = []


export const flatReducer = (state: Array<FlatType> = initialState, action: ActionsType): Array<FlatType> => {
    switch (action.type) {
        case "SET-IS-LIKE":
            return state.map(flat => flat.id === action.id ? { ...flat, like: action.isLike } : flat);
        case "SET-FLATS":
            return  action.flats;
        default:
            return state
    }
}

// actions
export const setIsLikeAC = (id: number, isLike: boolean) =>
    ({type: 'SET-IS-LIKE', id, isLike} as const)

export const setFlatsAC = (flats:  FlatsType) =>
    ({ type: 'SET-FLATS', flats } as const)

//thunks
export const fetchFlatsTC = () => (dispatch: Dispatch<ActionsType>) => {
    flatsAPI.getFlats()
        .then((res)=>{
            dispatch(setFlatsAC(res.data))
        })
        .catch((error) =>{
            console.log('some error occured')
        })
}

export const setIsLikeTC = (id: number, isLike: boolean) => (dispatch: Dispatch<ActionsType>) => {
    flatsAPI.setIsLike(id, isLike)
        .then((res)=>{
            dispatch(setIsLikeAC(id, isLike))
        })
        .catch((error) =>{
            console.log('some error occured')
        })
}

//types
export type InitialStateType = {
    flat: Array<FlatType>
    like?: boolean
}

type ActionsType =
    | ReturnType<typeof setIsLikeAC>
    | ReturnType<typeof setFlatsAC>
