// admin-login.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Mostrar loading
        const loginContainer = document.querySelector('.login-container');
        const loadingIndicator = document.getElementById('loading-indicator');
        const submitButton = loginForm.querySelector('button[type="submit"]');
        
        loginContainer.classList.add('loading');
        submitButton.disabled = true;
        loadingIndicator.style.display = 'flex';
        errorMsg.textContent = '';

        try {
            const result = await auth.signInWithEmailAndPassword(email, password);
            const user = result.user;

            const docRef = db.collection("users").doc(user.email);
            const docSnap = await docRef.get();

            if (docSnap.exists) {
            const role = docSnap.data().role;
            localStorage.setItem("userEmail", user.email);
            localStorage.setItem("userRole", role);

            if (role === "admin") {
                window.location.href = "admin1.html";
            } else if (role === "limited") {
                window.location.href = "admin2.html";
            } else {
                errorMsg.textContent = "Rol desconocido.";
            }
            } else {
            errorMsg.textContent = "No se encontró el rol del usuario.";
            }
        } catch (err) {
            console.error(err);
            errorMsg.textContent = "Correo o contraseña incorrectos.";
        } finally {
            loginContainer.classList.remove('loading');
            submitButton.disabled = false;
            loadingIndicator.style.display = 'none';
        }
        });
});

