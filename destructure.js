let student = {
    university: 'VTECH',
    year: 'Junior',
    GPA: 3.8,
    address: {
        address1: 'this 1',
        address2: 'this 2'
    }
}

let {university, gender = 'male', address: {address1}} = student

console.log(university, gender, address1)