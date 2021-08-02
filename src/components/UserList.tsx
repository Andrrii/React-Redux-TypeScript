import React, { useEffect } from 'react';
import { UserActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList:React.FC = () => {

    const state = useTypedSelector(state => state.user) // Берем дані із стану

    const {fetchUsers} = UserActions()

    useEffect(() => {
        fetchUsers()
    },[])

    if(state.loading) {
        return <h1>Loading...</h1>
    }

    if(state.error){
        return <h1>{state.error}</h1>
    }
    
    return (
        <div>
            {state.users.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};

export default UserList;