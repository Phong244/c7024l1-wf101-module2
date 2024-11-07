
const person = {
    firstName : 'John',
    lastName : 'Doe',
    age : 30,
    gender: 'male',
    occupation: 'developer',
    nationality: 'American',
    city: 'New York',
    hobbies: ['reading', 'travelling', 'photography'],
    language: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer University',
        university: 'Harvard University',
    }
};

const { firstName, gender, education: { degree }, language: [english] } = person;

const student = {
    firstName,
    gender,
    degree,
    english
};

console.log(student);