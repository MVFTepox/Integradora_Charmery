<template>
    <div class="card">
        <div class="card-body">
            <h2>inicio de sesion</h2>
            <div class="form-floating mb-3">
                <input type="email" class="form-control border-none" id="floatingInput"
                    placeholder="name@example.com" />
                <label for="floatingInput">Correo Electronico</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Contraseña</label>
            </div>
            <div class="form-check mt-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">Recordarme</label>
            </div>
            <div class="d-grid gap-2 mt-3">
                <RouterLink to="/" class="btn btninit">Iniciar sesion</RouterLink>
            </div>
            <p class="text-center text-muted mt-3">
                <i class="bi bi-caret-right-fill"></i>O<i class="bi bi-caret-left-fill"></i>
            </p>
            <div class="d-grid gap-2 mb-3">
                <a class="btn iform" href="#"><i class="bi bi-google"></i> Iniciar sesion con Google</a>
            </div>
            <p><a href="#">Olvide mi contraseña</a></p>
            <p><a href="#">Registrarse</a></p>
        </div>
    </div>
</template>