import layout from "./layout"

export default function newlogin(): string {
    return layout(`
    <div class="login-container">
        <input class="user-name" type="text" placeholder="Enter Username" name="uname" required>

        <input class="password" type="password" placeholder="Enter Password" name="psw" required>
        
        <button class="login-button" type="submit">Login</button>
    
        <label class="remember-me-container">
            <input class="remember-me" type="checkbox" checked="checked" name="remember"> Remember me
        </label>
        <a class="forgot-link" href="">Forgotton password?</a>
    </div>
                
    `)
}