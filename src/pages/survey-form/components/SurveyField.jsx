import { forwardRef } from 'react'

const SurveyField = forwardRef(({ question, ...rest }, ref) => {
  return (
    <div className="flex flex-col">
      <h3 className="px-6 py-3 bg-emerald-100 rounded-t-xl">{question.text}</h3>
      {(question.type === 'text' || question.type === 'textarea' || question.type === 'email') && (
        <div className="rounded-b-xl bg-white focus-within:bg-emerald-600 duration-500">
          <textarea
            {...rest} 
            ref={ref}
            id={question.number}
            className="w-full px-4 pt-2 resize-none bg-white"
          ></textarea>
        </div>
      )}
      {(question.type === 'radio' || question.type === 'checkbox') && Boolean(question.subform.length) && (
        <div className="rounded-b-xl bg-white focus-within:bg-emerald-600 duration-500 pb-2">
          <div className="flex flex-col gap-y-1 py-2 px-6 bg-white">
            {question.subform.map((option) => (
              <div key={option.number} className="flex gap-x-3">
                <input
                  {...rest}
                  type={question.type}
                  id={`${question.number}-${option.number}`}
                  value={option.text}
                  ref={ref}
                  className="accent-emerald-600"
                />
                <label
                  htmlFor={`${question.number}-${option.number}`}
                  className="w-full text-sm font-medium text-gray-700"
                >
                  {option.text}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
      {question.type === 'date' && (
        <div className="rounded-b-xl bg-white focus-within:bg-emerald-600 duration-500 pb-2">
          <div className="bg-white w-full py-2 px-6">
            <input {...rest} type="date" id={question.number} ref={ref} className="" />
          </div>
        </div>
      )}
      {question.type === 'scale' && (
        <div className="rounded-b-xl bg-white focus-within:bg-emerald-600 duration-500 pb-2">
          <div className="bg-white w-full py-2 px-6">
            <input {...rest} type="range" id={question.number} ref={ref} className="accent-emerald-600" />
          </div>
        </div>
      )}
    </div>
  )
})

export default SurveyField
