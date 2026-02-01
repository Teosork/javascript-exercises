const findTheOldest = function(people){
    const currentYear = (new Date()).getFullYear();

    return people.reduce((oldest, person) =>{
    const deathYear = person.yearOfDeath ?? currentYear
    const agePerson = deathYear - person.yearOfBirth
    const deathYearOldest = oldest.yearOfDeath ?? currentYear
    const ageOldest = deathYearOldest - oldest.yearOfBirth
    if (agePerson > ageOldest) {
        return person;
    }else {
        return oldest;
    }
    }, people[0]);
}

// Do not edit below this line
module.exports = findTheOldest;
