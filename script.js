const container = document.querySelector('.signup-container');
const inputs = document.querySelectorAll('input');
const logged = document.querySelector('.login-container');
const form = document.querySelector('form');
const log = document.querySelector('.log');
let btn2 = document.querySelector('.login-button');
const msg = document.querySelector('.msg');
const error = document.querySelector('.error');


const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn2.disabled = true;
inputs.forEach((input) => {
        input.addEventListener('change', (event) => {
                event.preventDefault();
                const email = document.getElementById('emails').value;
                const password = document.getElementById('passwords').value;
                if (email == "" || password == "") {
                        btn2.disabled = true;

                }
                else {
                        btn2.disabled = false;       
                }
                
        });
});

window.onload = () => {
        let btn = document.querySelector('#up');
        btn.disabled = true;
        inputs.forEach((input) => {
        
                input.addEventListener('change', (event) => {
                        
        
                        event.preventDefault();
                        let firstName = document.getElementById("first").value;
                        let lastName = document.getElementById('last').value;
                        let email = document.getElementById('email').value;
                        let password = document.getElementById('password').value;
                        let confirm = document.getElementById('confirmPassword').value;

                        if (firstName === "") {
                                btn.disabled = true;
                                error.innerHTML = `
                                                <h3>name cannot be empty</h3>`;
                                error.style.display = "block";
                        }
                        else if (lastName === "") {
                                btn.disabled = true;
                                error.innerHTML = `
                                                <h3>name cannot be empty</h3>`;
                                                error.style.display = "block";
                        }
                        else if (email === "" || !emailRegex.test(email)) {
                                btn.disabled = true;
                                error.innerHTML = `
                                                <h3>email invalid</h3>`;
                                                error.style.display = "block";
                        }
                        else if (password === "" || password.length < 8 || password !== confirm) {
                                btn.disabled = true;
                                error.innerHTML = `
                                                <h3>password should not  be less than 8 characters</h3>`;
                                                error.style.display = "block";
                        }
                        else if (confirm === "" || confirm.length < 3 || confirm !== password) {
                                btn.disabled = true;
                                error.innerHTML = `
                                                <h3>password should not  be less than 8 characters</h3>`;
                                                error.style.display = "block";
                        }
         
                        else {
                                btn.disabled = false;
                                error.style.display = "none";
                        }
                        
                });
        });
        
        btn.addEventListener('click', (event) => {
                event.preventDefault();
                setTimeout(alert('Loading...'),
                        2000);
                container.style.display = "none";
                
                console.log('clicked');
                logged.style.display = "block";
       
        });

}
log.addEventListener('click', (event) => {
        event.preventDefault();
        container.style.display = "none";
        logged.style.display = "block";
});
        
btn2.addEventListener('click', (event) => {
        event.preventDefault();
        logged.style.display = "none";
        msg.style.display= "block";
        console.log('clicked');
})

 
                       
