// Add your code here
function submitData (nameInput, emailInput) {
    return fetch ('http://localhost:3000/users', {
        method : 'POST',        
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
        },
        body: JSON.stringify({
            name : nameInput,
            email : emailInput,
        })
    })
    .then(response => response.json())
    .then(data => appendData(data.id))
    .catch((error) => appendData(error.message));
}

function appendData(data) {
    const body = document.querySelector('body');
    body.append(data);
}