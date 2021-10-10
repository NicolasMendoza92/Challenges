


import FormLogin from '../Components/FormLogin';

export default function Login(props) {
    // lo dejamos aca desescturcturado y el useState lo elevo a App. 
    const {users, setUsers } =props; 
    return (
        <>
            <FormLogin users={users} setUsers={setUsers}/>
        </>
    );
}
