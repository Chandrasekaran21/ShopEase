import bcrypt from 'bcrypt';

const users = [
    {
        name:"Admin user",
        email:"admin123@gmail.com",
        password:bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name:"Chandru",
        email:"chandru@gmail.com",
        password:bcrypt.hashSync("123456", 10),
        isAdmin: false
    },
    {
        name:"Sekar",
        email:bcrypt.hashSync("123456", 10),
        password:"12345",
        isAdmin: false
    }
]

export default users;