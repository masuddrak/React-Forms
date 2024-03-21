import { useState } from "react"

const useInputForm = (defaultValue) => {
    const [name, setName] = useState(defaultValue)
    const onChange = (value) => {

        setName(value.target.value)
    }
    return {name, onChange}
}
export default useInputForm