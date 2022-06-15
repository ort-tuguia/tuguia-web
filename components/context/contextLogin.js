import { useReducer, useContext, createContext } from 'react'

const LoginStateContext = createContext()
const LoginDispatchContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return state + 1
        case 'DECREASE':
            return state - 1
        case 'INCREASE_BY':
            return state + action.payload
        default:
            throw new Error(`Unknown action: ${action.type}`)
    }
}

export const LoginProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <LoginDispatchContext.Provider value={dispatch}>
            <LoginStateContext.Provider value={state}>
                {children}
            </LoginStateContext.Provider>
        </LoginDispatchContext.Provider>
    )
}

export const useLogin = () => useContext(LoginStateContext)
export const useDispatchLogin = () => useContext(LoginDispatchContext)