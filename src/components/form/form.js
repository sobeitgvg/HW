import { useState } from "react/cjs/react.production.min"

export const Form = () =>{

    const [value, setValue] = useState('')

    const handleChange = (event) =>{
        setValue(event.target.value)
    }
return(
    <Form>
        <input type="text" value = {value} onChane = {handleChange}/>
    </Form>
)
}