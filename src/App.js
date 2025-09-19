import React, {useState,useEffect} from 'react';
import './App.css';
import UserCard from './UserCard';
import LoadingSpinner from './LoadingSpinner';

function App() {
  const [users, setUsers] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError]=useState(null);

  useEffect(() => {
    const fetchUsers = async() => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  },[]);

  const generateAvatarUrl = (username) => {
    return `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;
  };

  if(loading) {
    return (
      <div className="container-fluid">
        <LoadingSpinner />
      </div>
    );
  }

  if(error) {
    return (
      <div className='container-fluid'>
        <div className='alert alert-danger mt-4' role="alert">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className='container-fluid'>
      <div className='py-4'>
        <div className='row'>
          {users.map((user)=>(
            <UserCard 
              key={user.id} 
              user={user} 
              avatarUrl={generateAvatarUrl(user.username)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;