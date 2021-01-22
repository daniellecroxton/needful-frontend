export default function fetchUsers(action) {

        fetch('http://localhost:3000/api/v1/users')
        .then(res => res.json())
        .then(data => console.log(data))
        

}

