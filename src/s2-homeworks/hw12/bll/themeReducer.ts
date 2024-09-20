import {ThemesType} from "../HW12";

type InitStateType={
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':{
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

type ChangeThemeIdType=ReturnType<typeof changeThemeId>
type ActionType=ChangeThemeIdType
export const changeThemeId = (id: number)=> {
    return {
        type: 'SET_THEME_ID',
        id
    }as const
}

