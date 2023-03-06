//requirements to be a US senator:
    // you must be at least 30 years old
    // you have to have been a US citizen for at least 9 years
    // you must live in the state you want to represent

    let age = 61
    let usCitizenTime = 61
    let stateofResidence = 'Texas'
    let stateWantToRepresent = 'Georgia'

    if (age >= 30 && usCitizenTime >= 9 && stateofResidence == stateWantToRepresent) {
        console.log('You are eligibile to be a senator')
    } else {
        console.log('Sorry, you are not eligible')
    }

    // remember == will use type coersion so it would match a string '2' to a number input of 2
    // but === will require the same input and TYPE of input

    // THINGS JAVASCRIPT CONSIDERS FALSE:
    // undefined, null, false, 0, empty objects, empty lists
    if (false == 0) {
        console.log('the same!')
        // JS will say an empty string is equal to zero
        // an empty list is equal to zero
        // However JS will say undefiined is not the same
        // and an empty object is not the same
        // === would result in all not being the same
    } else {
        console.log('not the same!')
    }