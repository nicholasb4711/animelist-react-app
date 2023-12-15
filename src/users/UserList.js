import * as client from "./client";
import '../anime/AnimeRow.css';
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { MdDiversity3 } from "react-icons/md";


function UserList() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => {
        fetchUsers();
    }, []);
    return <div className="" style={{background:'black'}}>
        <h2 style={{color:'white'}}>Users</h2>
        <div className="list-group">
            {users.map((user) => (
                <div style={{paddingTop:10}}>
                    <div className="anime-bubble" >
                <Link key={user._id}
                    to={`/users/${user._id}`}
                    className="list-group-item" style ={{background:'black', color: 'white'}}>
                    {user.username}
                </Link>
                </div>
                </div>
            ))}

        </div>
    </div>
}

export default UserList;