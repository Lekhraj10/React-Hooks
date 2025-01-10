import { createContext } from "react";

export const AppContext = createContext(0);

const ContextProvider = (props) => {

    const phone = "+977 9812345678"
    const name = "Raaj Thapa"

    return (
        <AppContext.Provider value={{name, phone}}>
            {props.children}
        </AppContext.Provider>
    )
}
export default ContextProvider