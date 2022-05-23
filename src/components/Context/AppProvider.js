import React, {useContext, useMemo, useState} from "react";

import {AuthContext} from "./AuthProvider";
import useFirestore from "../Hooks/useFirestore";




export const AppContext = React.createContext();
 function AppProvider({childrent}) {

     const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
     const {user: {uid} } = useContext(AuthContext);
    const roomsCondition = useMemo(() => {
        return {
            fieldName : 'members',
            operator: 'array-contains',
            compareValue: uid
        }
    },[uid])
    const rooms = useFirestore('rooms',roomsCondition);
    return (
        <AppContext.Provider value={{ rooms,isAddRoomVisible, setIsAddRoomVisible}}>
            {childrent}
        </AppContext.Provider>
    )
}
export default AppProvider