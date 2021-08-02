import React from 'react';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList:React.FC = () => {


    const state = useTypedSelector(state => state.user) // Берем дані із стану
    console.log(state);
    
    return (
        <div>
            
        </div>
    );
};

export default UserList;