import { useState } from "react";

function Admin() {
    const [users, setUsers] = useState([]);

    const sortPerField = (field) => {
        setUsers([...users].sort((a, b) => {
            const fieldA = a[field].toLowerCase();
            const fieldB = b[field].toLowerCase();

            if (fieldA < fieldB) return -1;
            if (fieldA > fieldB) return 1;
            return 0;
        }));
    }

    const toggleUserActivation = (userId) => {
        const user = users.find(({ id }) => id === userId);
        if (!user) return;

        user.isActive = !user.isActive;

        setUsers([...users]);
    }

    const toggleUserAdmin = (userId) => {
        const user = users.find(({ id }) => id === userId);
        if (!user) return;

        user.isAdmin = !user.isAdmin;

        setUsers([...users]);
    }

    return (
        <div>
            <h1>Admin</h1>
        </div>
    );
}

export default Admin;