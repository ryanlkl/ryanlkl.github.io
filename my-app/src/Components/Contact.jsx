export default function Contact() {
    return (
        <div>
            <form class="questions">
                <fieldset class="fs">
                    <legend class="form">Queries/Requests</legend>

                    <div class="firstname">
                        <label for="firstname">First Name:</label><br />
                        <input type="text" name="firstname" />
                    </div>

                    <div class="lastname">
                        <label for="lastname">Last Name:</label><br/>
                        <input type="text" id="lastname" name="lastname"/>
                    </div>

                    <div class="email">
                        <label for="email">Email:</label><br/>
                        <input type="email" id="email" name="email"/>
                    </div>

                    <div class="options">
                        <label for="options">What service do you require?</label><br/>
                        <select id="options">
                            <option value="videoediting">Video Editing</option>
                            <option value="web">Web Development</option>
                            <option value="query">Query</option>
                            <option value="feedback">Feedback</option>
                        </select>
                    </div>

                    <div class="summary">
                        <p for="summary">Reasons for submitting this form:</p>
                        <textarea id="summary" name="summary" rows="15" cols="100"></textarea>
                    </div>

                    <div class="submit">
                        <button id="submit">Submit</button>
                    </div>



                </fieldset>
            </form>
        </div>
    )
}
