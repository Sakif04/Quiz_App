import SelectField from "./SelectField";
export default function TriviaType(){
    const type_options=[
        { id: "multiple", name: "Multiple Choise" },
        { id: "boolean", name: "True/False" },
      ];
    
    return(
    
    <SelectField label="Select Type" options={type_options}></SelectField>

    )
}