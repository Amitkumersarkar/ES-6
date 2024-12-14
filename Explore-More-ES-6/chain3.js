// Nested objects in js to access data
const user = {
    ip: 2103283,
    name: 'Amrita Sarkar',
    city: 'Dhaka',
    address: {
        section: 'Mirpur-6',
        roadNo: 5,
        block: 'Ta',
        institution: {
            uniName: 'BUBT',
            dept: 'CSE'
        }
    }
}
console.log(user.ip, user.name, user.city);
console.log(user.address.section, user.address.roadNo, user.address.block);
console.log(user.address.institution.uniName, user.address.institution.dept);