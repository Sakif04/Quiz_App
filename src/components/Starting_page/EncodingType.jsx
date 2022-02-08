export default function EncodingType(){
    
    return(
        <>
            <label for="trivia_encode">Select Encoding: </label>
            <select name="trivia_encode" className="form-control">&gt;
                <option value="default">Default Encoding</option>
                <option value="urlLegacy">Legacy URL Encoding</option>
                <option value="url3986">URL Encoding (RFC 3986)</option>
                <option value="base64">Base64 Encoding</option>
            </select>
        </>
    )

}