import { createContext } from "react";



export const AppContext=createContext();

export default function AppContextProvider({children}){
    let data=[];

   const value={
        data,
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}