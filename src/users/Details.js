import React from "react";
import { useParams } from "react-router-dom";
import * as client from "./client";
import { useEffect, useState } from "react";
import Header from "../Search/Search";
import Sidebar from "../Home/Sidebar";
import Body from "../Home/Body/Body"

function UserDetails() {
    const [user, setUser] = useState(null);
    const { id } = useParams();

    const fetchUser = async () => {
        try {
            const response = await client.findUserById(id);
            console.log(response);
            // Assuming the response is an array, take the first element
            const fetchedUser = response[0];
            setUser(fetchedUser);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    const updateUser = async () => {
        const status = await client.updateUser(id, user);
    }

    const deleteUser = async (id) => {
        const status = await client.deleteUser(id);
    }

    useEffect(() => {
        fetchUser();
    }, [id]);
    return (
        <div className="body">

            <Header />

            <h1>User Details</h1>

            {user && (

                <div>
                    <p>Username:
                        <input
                            type="text"
                            className="form-control"
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    </p>
                    <p>Email:<input
                        type="text"
                        className="form-control"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </p>
                    <p>First Name: <input
                        type="text"
                        className="form-control"
                        value={user.firstName}
                        onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                    </p>
                    <p>Last Name: <input
                        type="text"
                        className="form-control"
                        value={user.lastName}
                        onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                    </p>
                    <p>Role: {user.role}</p>
                    <button className="btn btn-primary" onClick={updateUser}>
                        Update
                    </button>
                    <button className="btn btn-primary" onClick={updateUser}>
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}

export default UserDetails;