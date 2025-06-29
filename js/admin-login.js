// Admin Login Script
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorElement = document.getElementById('login-error');
        
        // Validar credenciales
        if ((username === 'Anderson' && password === '1504') || 
            (username === 'Adrian' && password === '7532')) {
            
            // Guardar en sessionStorage
            sessionStorage.setItem('adminLoggedIn', 'true');
            sessionStorage.setItem('adminUsername', username);
            
            // Redirigir al panel correspondiente
            if (username === 'Anderson') {
                window.location.href = 'admin1.html';
            } else {
                window.location.href = 'admin2.html';
            }
        } else {
            errorElement.textContent = 'Usuario o contraseña incorrectos';
        }
    });
});