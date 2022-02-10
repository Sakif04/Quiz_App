export default function TriviaType(){
    
    return(
    <>
    <label htmlFor="trivia_type">Select Type: </label>
    <select name="trivia_type" className="form-control">&gt;
        <option value="any">Any Type</option>
        <option value="multiple">Multiple Choice</option>
        <option value="boolean">True / False</option>
    </select>
    </>

    )
}