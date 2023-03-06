let user = {
    name: 'devin',
    password: 'devinagain',
    email: 'dev@dev.com',
    roles: ['programmer', 'student'],
    contact: {
        office: 'X2777',
        telephone: '6515555555'
    }
}

user.salary = 123
user.roles.push('server admin')
user.contact.location = 'Minneapolis'

console.log(user)
