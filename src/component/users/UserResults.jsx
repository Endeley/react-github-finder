import React from 'react';
import { useEffect } from 'react';

//

const UserResults = () => {
    const fetchUsers = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                    'X-GitHub-Api-Version': '2022-11-28',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h4>UserResults</h4>
        </div>
    );
};
export default UserResults;
