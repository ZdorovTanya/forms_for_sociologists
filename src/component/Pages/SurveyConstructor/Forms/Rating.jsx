import { useEffect } from "react"
import { useSurveyConstructorStore } from "../useSurveyConstructorStore"
import { useId } from "react"
import { Container } from "../UI/Container"
import { Number } from "../UI/Number"

export const Rating = ({form}) => {
    const initialId = useId()
    const addFormId = useSurveyConstructorStore((state) => state.addFormId)

    useEffect(() => {
        addFormId(initialId, form)
    }, [])

    return (
        <Container id={form.id} name={form.name} required={form.required} question={form.question} isOneSubForm={true}>
            
            <div className="flex">
                {form.subForms.map((subForm, index) => {
                    return (
                        <div key={`${form.name}${index}`} className="w-full flex items-center">
                            <p>{subForm.name}</p>
                            <Number parentId={form.id} form={subForm} index={index}/>
                            
                        </div>
                        
                    )
                })}
                
            </div>
           
        </Container>
    )
}