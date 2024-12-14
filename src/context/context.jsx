const { createContext } = require("react");

const context = createContext()

function contextProvider({children}) {
    let data = "some data"

         <context.Provider value = { data } >
            {children}
        <context.Provider/>
}

export default context