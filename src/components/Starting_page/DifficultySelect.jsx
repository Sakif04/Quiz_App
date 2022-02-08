export default function DifficultySelect(){
    return(
    <> 
        <label for="trivia_difficulty" >Select Difficulty: </label>
        <select name="trivia_difficulty" className="form-control">
            <option value="any">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
    </>       
    )
}