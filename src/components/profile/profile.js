import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";


function Profile() {
    const {login} = useContext(UserContext)

    return(
        <div>
            {login? 'Dados do bundão' : 'Faça o login se você for um bundão'}
            
        </div>
    )
}

export default Profile