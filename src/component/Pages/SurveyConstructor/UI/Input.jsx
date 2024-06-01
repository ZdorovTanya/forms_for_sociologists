import { useEffect, useId } from "react"
import { useSurveyConstructorStore } from "../useSurveyConstructorStore"
import { RxCross2 } from "react-icons/rx";

export const Input = ({parentId, form, index, isOneSubForm}) => {
    const initialId = useId()
    const addSubFormId = useSurveyConstructorStore((state) => state.addSubFormId)
    const changeSubFormName = useSurveyConstructorStore((state) => state.changeSubFormName)
    const removeSubForm = useSurveyConstructorStore((state) => state.removeSubForm)

    useEffect(() => {
        addSubFormId(initialId, parentId, form)
    }, [parentId])

    const handleChangeForm = (e) => {
        const value = e.target.value
        changeSubFormName(value, form.id, parentId)
    }

    const handleRemoveSubForm = () => {
        removeSubForm(form.id, parentId)
    }
 
    return (
        <div className="p-2 flex justify-between items-cente">
            <input className="" type="text" placeholder={`${form.name} ${!isOneSubForm ? index + 1 : ""}`} value={form.variants} onChange={handleChangeForm} />
            {!isOneSubForm && <button onClick={handleRemoveSubForm} className="text-white bg-red-700 leading-3 p-2 rounded-lg"><RxCross2 /></button>}
        </div>
    )
}