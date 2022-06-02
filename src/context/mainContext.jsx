import React, { createContext,   useState } from "react";

export const MainContext = createContext()

export const MainProvider =({children})=>{
    const [openDetailView, setOpenDetailView] = useState(false)







return (<MainContext.Provider value={{openDetailView, setOpenDetailView}}>
    {children}
    </MainContext.Provider>)
}


