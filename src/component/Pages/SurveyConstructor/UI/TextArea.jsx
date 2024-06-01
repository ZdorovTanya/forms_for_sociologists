import { useEffect, useId } from "react"
import { useSurveyConstructorStore } from "../useSurveyConstructorStore"

export const TextArea = ({parentId, form, index, isOneSubForm}) => {
    const initialId = useId()
    const addSubFormId = useSurveyConstructorStore((state) => state.addSubFormId)
    const changeSubFormName = useSurveyConstructorStore((state) => state.changeSubFormName)

    useEffect(() => {
        addSubFormId(initialId, parentId, form)
    }, [parentId])

    const handleChangeForm = (e) => {
        const value = e.target.value
        changeSubFormName(value, form.id, parentId)
    }

    return (
        <div className="w-full p-2 justify-between items-center">
            {/* <p className="pb-2 text-xs text-gray-500">Текстовый блок используется для добавления пояснений и аннотаций в разные места опроса</p> */}
            <textarea className="w-full" placeholder={form.name} name={form.name} value={form.variants} onChange={handleChangeForm}></textarea>
        </div>
    )
}