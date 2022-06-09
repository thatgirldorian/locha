//set up an event listener to test our web page
document.querySelector('form').addEventListener('submit', (event) => {
    //prevent form submission
    event.preventDefault();

    const { value } = document.querySelector('input')

    const header = document.querySelector('h1')

    //check if email is valid
    if (value.includes('@')) {
        header.innerHTML = "Looks great!"
    } else {
        header.innerHTML = "Invalid email."
    }
})


