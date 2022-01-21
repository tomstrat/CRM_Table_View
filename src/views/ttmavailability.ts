import layout from "./layout"

export default function ttmavailability(): string {
    return layout(`
    <form class="breakbutton-container">
    <p1>Did you take a break?</p1>
    <div class="switch-field">
        <input type="radio" id="radio-one" name="switch-one" value="yes" checked/>
        <label for="radio-one">Yes</label>
        <input type="radio" id="radio-two" name="switch-one" value="no" />
        <label for="radio-two">No</label>
    </div>
</form>
    `)
}