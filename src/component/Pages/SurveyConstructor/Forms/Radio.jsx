import { useEffect } from "react"
import { useSurveyConstructorStore } from "../useSurveyConstructorStore"
import { useId } from "react"
import { Container } from "../UI/Container"
import { Input } from "../UI/Input"
 
export const Radio = ({form}) => {
    const initialId = useId()
    const addFormId = useSurveyConstructorStore((state) => state.addFormId)
    const addNewSubForm = useSurveyConstructorStore((state) => state.addNewSubForm)

    useEffect(() => {
        addFormId(initialId, form)
    }, [])

    const AddNewSubForm = () => {
        const newSubForm = {name: "Вариант", question: ""}
        addNewSubForm(form.id, newSubForm)
    }

    return (
        <Container id={form.id} name={form.name} required={form.required} question={form.question}>
            <div>
                {form.subForms.map((subForm, index) => {
                    return (
                        <Input key={`${form.name}${index}`} parentId={form.id} form={subForm} index={index} />
                    )
                })}
                <p onClick={AddNewSubForm} className="p-2 text-gray-400 hover:text-green-600 cursor-pointer">Добавить вариант</p>
            </div>
        </Container>
    )
}