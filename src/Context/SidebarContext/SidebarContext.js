import { createContext, useReducer } from "react"

const INITIAL_STATE = {
    openSidebar: false
}
export const SidebarContext = createContext(INITIAL_STATE)

const SidebarReducer = ( state, action ) =>{
    switch( action.type){
        case "OPEN":
            return{
                openSidebar: true
            }
        case "CLOSE":
                return{
                    openSidebar: false
                }
        default :
        return state
    }
}

export const SidebarContextProvider = ( {children} ) =>{
    const [ state, dispatch ] = useReducer(SidebarReducer, INITIAL_STATE)

    return(
        <SidebarContext.Provider value={{ openSidebar: state.openSidebar , dispatch}}>
            {children}
        </SidebarContext.Provider>
    )
}