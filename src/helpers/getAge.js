const dateBirth = '1996/11/04';

export const getAge = () => {
    const dateNow = new Date();
    const yearNow = parseInt(dateNow.getFullYear());
    const monthNow = parseInt(dateNow.getMonth() + 1);
    const dayNow = parseInt(dateNow.getDate());

    const yearBirth = parseInt(dateBirth.substring( 0, 4 ));
    const monthBirth = parseInt(dateBirth.substring( 5, 7 ));
    const dayBirth = parseInt(dateBirth.substring( 8, 10 ));

    let age = yearNow - yearBirth;

    if( monthNow < monthBirth )
        age--;
    else if( monthNow === monthBirth ){
        if( dayNow < dayBirth )
            age--;
    }

    return age;
}