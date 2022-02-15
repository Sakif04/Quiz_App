
import SelectField from "./SelectField";
import UseData from "../../hooks/useData";
export default function Category(options,label){
    
    const {response}= UseData({url:'api_category.php'});
  
    return(
    <>
    { response?
        <SelectField label='Select Category' options={response.trivia_categories}/>:""}
    </>
    
)
}