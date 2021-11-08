const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()

    const formElemens = event.currentTarget.elements;

    const email = formElemens.email.value;

    const password = formElemens.password.value;

    if (email === '' || password === '') {
        alert('все поля должны быть заполнены');
    } else {

        const formData = new FormData(event.currentTarget)

        const data = {}
        
        formData.forEach((value, name) => {
            data[name] = value;
        });
        
        console.log('data', data)
        
        form.reset();
    }
}