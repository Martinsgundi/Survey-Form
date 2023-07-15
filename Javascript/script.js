

const checkInput = ()=>{

    // Gets the user input
    const fullName = document.getElementById('name').value
    const address = document.getElementById('addr').value
    const email = document.getElementById('mail').value
    const phoneNumber = Number(document.getElementById('Number').value)
    const gender = document.querySelector(" input[name = 'gender-selection']:checked")
    const backgroundInfo = document.getElementById('B-info').value


    // Checks if all input fields are filled
    const form = document.getElementById('myForm');
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach( (input) => {
        if (!input.reportValidity()) {
        isValid = false;
        }
    });
   

    // Displays user inputs Or Alerts user to complete form
    if (!isValid || !backgroundInfo) {
        alert(`Please fill in all required fields and select an option.`)
    } else {
        document.querySelector('.confirmation-btns').style.display = 'flex'
        document.getElementById('details-check').style.display = 'block'

        const getDetails = document.getElementById('details-check')
        

        getDetails.innerHTML = `
       
        <h2> Please confirm your input </h2>

        <p> Name: <br> <span>${fullName}</span> </p> 

        <br>

        <p> Address: <br> <span>${address}</span> </p>

        <br>

        <p> E-mail: <br> <span>${email}</span> </p> 

        <br>

        <p> Phone-number: <br> <span>${phoneNumber}</span> </p> 

        <br>

        <p> Gender: <br> <span>${gender.value}</span> </p> 
        
        <br>

        <p id="b-info"> Background Information: <br> <span>${backgroundInfo}</span> </p> <br>

        </div>
        `

        document.querySelector('.head').style.display = 'none'
        document.querySelector ('.select-gender').style.display = 'none'
        document.getElementById ('B-info').style.display = "none"
        document.getElementById ('btn').style.display = "none"


        // Iterates through each elements to display none
        for (let i = 0; i < fieldset.length; i++) {
            fieldset[i].style.display = 'none';
        }

        for (let i = 0; i < legend.length; i++) {
            legend[i].style.display = 'none';
        }

        for (let i = 0; i < fieldset.length; i++) {
            label[i].style.display = 'none';
        }

        for (let i = 0; i < input.length; i++) {
            input[i].style.display = 'none';
        }
    }
};

const fieldset = document.getElementsByTagName ('fieldset')
const legend = document.getElementsByTagName ('legend')
const label = document.getElementsByTagName ('label')
const input = document.getElementsByTagName ('input')
const textarea = document.getElementsByTagName ('textarea')
 

// Takes user back to form for editing of inputs
document.getElementById('back').addEventListener('click', () => {

    document.querySelector('.head').style.display = 'flex'
    document.querySelector('.confirmation-btns').style.display = 'none'
    document.querySelector ('.select-gender').style.display = 'initial'
    document.getElementById ('B-info').style.display = "block"
    document.getElementById ('btn').style.display = "block"

    document.getElementById('details-check').style.display = 'none'

    // Iterates through each elements to display to user
    for (let i = 0; i < fieldset.length; i++) {
        fieldset[i].style.display = 'block';
    }

    for (let i = 0; i < legend.length; i++) {
        legend[i].style.display = 'initial';
    }

    for (let i = 0; i < fieldset.length; i++) {
        label[i].style.display = 'initial';
    }

    for (let i = 0; i < input.length; i++) {
        input[i].style.display = 'initial';
    } 
});


// Confirms user inputs
document.getElementById('confirm').addEventListener('click', () => {

    // Alerts user of saved inputs
    const fullName = document.getElementById('name').value
    alert(' Thank you for your time ' + fullName  + '. \n \n Your details has been saved sucessfully!' )

    window.location.reload(true); // Page reloads when alert's message is clicked
});