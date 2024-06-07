import { forwardRef } from 'react'

const SurveyField = forwardRef(({ question, ...rest }, ref) => {
  return (
    <div className="flex flex-col">
      <h3 className="px-6 py-3 bg-emerald-100 rounded-t-xl">{question.text}</h3>
      {question.type === 'text' && (
        <div className="rounded-b-xl bg-white focus-within:bg-emerald-600 duration-500">
          <textarea {...rest} ref={ref} className="w-full px-4 pt-2 resize-none bg-white"></textarea>
        </div>
      )}
    </div>
  )
})

export default SurveyField
