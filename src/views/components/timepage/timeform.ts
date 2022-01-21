export default function timeform(): string {
    return `
    <div class="form-container">
        <div class="time-container">
            <div class="start-time-container">
                <label for="start-time">Start time:</label>
                <input type="time" class="timedrop" name="start"
                min="05:00" max="23:00" required>
            </div>
            <div class="end-time-container">
                <label for="end-time">End time:</label>
                <input type="time" class="timedrop" name="end"
                min="05:00" max="23:00" required>
            </div>
        </div>
        <div class="break-container">  
            <form class="breakbutton-container">
                <p1>Did you take a break?</p1>
                <div class="switch-field">
                    <input type="radio" id="radio-one" name="switch-one" value="yes" checked/>
                    <label for="radio-one">Yes</label>
                    <input type="radio" id="radio-two" name="switch-one" value="no" />
                    <label for="radio-two">No</label>
                </div>
            </form>
        </div>
        <div class="break-time-container">
        <label for="break-start">Break start time:</label>
        <input type="time" class="timedrop" name="break-start"
        min="05:00" max="23:00" required>
    
        <label for="break-end">Break end time:</label>
        <input type="time" class="timedrop" name="break-end"
        min="05:00" max="23:00" required>
        </div>
        <form class="comments-container">
            <div>
                <label for="example">Comments</label>
                <input id="example" type="text" name="text">
            </div>
            
        </form>
        <button class="submit-button">Submit</button>
    
    </div>
    `
}