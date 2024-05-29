import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any=> { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                const newState = [...state]
                return newState.sort((a: UserType, b: UserType) => a.name.localeCompare(b.name))

            } else if (action.payload === 'down') {
                const newState = [...state]
                return newState.sort((a: UserType, b: UserType) => b.name.localeCompare(a.name))

            }
            return state;

        }

        case 'check': {
            return state.filter(people=>people.age>=action.payload)
        }
        default:
            return state
    }
}
