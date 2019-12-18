import * as fromDogReducer from './dog.reducer';
import * as fromDogAction from './../components/actions/dog.actions';


const deepFreeze = require('deep-freeze');


describe('dog reducer', () =>{

    it('should test the initial state', ()=>{
        const { defaultState } = fromDogReducer;
        const action = {type: ""}
        const state = fromDogReducer.dogReducer(undefined, action);

        deepFreeze(state);

        expect(state).toBe(defaultState);

    });

    it('should increment likes with 1 whene isInterested is tapped', ()=>{
        const { defaultState } = fromDogReducer;
        const action = {type: fromDogAction.INTERESTED};
        const state = fromDogReducer.dogReducer(defaultState, action) 

        
        expect(state).toEqual({likes: +1})
    });

    it('should decrement likes with 1 whene notInterested is tapped', ()=>{
        const { defaultState } = fromDogReducer;
        const action = {type: fromDogAction.NOTINTERESTED};
        const state = fromDogReducer.dogReducer(defaultState, action) 

        expect(state).toEqual({likes: -1})
    });
}); 