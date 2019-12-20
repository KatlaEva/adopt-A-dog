import { DogLike } from './../models/DogLike';
import { Dog } from './../models/Dog';
import * as DogActions from '../components/actions/dog.actions'



export type Action = DogActions.All;

//Default state
export const defaultState: DogLike = {
    likes: 0
}

//Helper function to create new state object
const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

//Reducer function
export function dogReducer(state: DogLike = defaultState, action: Action) {
    console.log(action.type, state)

    switch (action.type) {

        case DogActions.INTERESTED:
            return newState(state, { likes: state.likes + 1});

        case DogActions.NOTINTERESTED:
            return newState(state, { likes: state.likes - 1});

        case DogActions.RESET:
            return defaultState;
        
        default: 
        return state;    
                    
    }


}




