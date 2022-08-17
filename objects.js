var meanstack = {
    "company": "synergisticIt",
    "program": "Full Stack Java Track",
    "courses":[
        "AWS",
        "JAVA",
        "Databases",
        "NodeJS"
    ],
    "classSize": 20
}

var analyst = Object.create(meanstack)

analyst.company = "synergisticIt"
analyst.program = "Data Science Track"
analyst.courses = [
    'AWS',
    'Python',
    'Databases',
]
analyst.classSize = 50

console.log('analyst: ', analyst.__proto__)
console.log('analyst: ', analyst.__proto__.__proto__)
console.log('meanstalk: ', meanstack.__proto__)
