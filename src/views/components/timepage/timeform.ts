export default function timeform(): string {
    return `
    <div class="form-container">
        <div class="time-container">
            <div class="start-time-container">
                <label for="start-time">Start time</label>
                <input type="time" class="timedrop" name="start"
                min="05:00" max="23:00" required>
            </div>
            <div class="end-time-container">
                <label for="end-time">End time</label>
                <input type="time" class="timedrop" name="end"
                min="05:00" max="23:00" required>
            </div>
        </div>
        <div class="break-container">  
            <label>Break?</label>
            <div class="switch-field">
                <input type="radio" id="radio-one" name="switch-one" value="yes" checked/>
                <label for="radio-one">Yes</label>
                <input type="radio" id="radio-two" name="switch-one" value="no" />
                <label for="radio-two">No</label>
            </div>
        </div>
        <div class="break-time-container">
            <label>Break time</label>
            <div class="break-time-subcontainer">
                <input type="time" class="timedrop" name="break-start"
                min="05:00" max="23:00" required>
    
                <label>to</label>
            
                <input type="time" class="timedrop" name="break-end"
                min="05:00" max="23:00" required>
            </div>
        </div>
        <div class="comments-container">
            <label for="example">Comments</label>
            <input id="example" type="text" name="text">
        </div>
        <button class="submit-button">Submit</button>
    
    </div>
    `
}