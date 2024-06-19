import React,{createContext,useContext,useReducer}  from 'react';

export const DataLayerContext=createContext();
export const  DataLayer=({initialState,Reducer,children})=>(
    <DataLayerContext.Provider value={useReducer(Reducer,initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue=()=>useContext(DataLayerContext);