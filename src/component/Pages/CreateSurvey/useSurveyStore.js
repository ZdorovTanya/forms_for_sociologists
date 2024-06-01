import { create } from 'zustand'

export const useSurveyStore = create((set) => ({
  surveyName: "",
  surveyDeadline: "unlimited",
  surveyMinTime: "",
  surveyAttemptCount: "",
  surveyAnonymous: "",
  surveyCountAnswers: "",
  changeSurveyName: (newName) => set({surveyName: newName}),
  changeSurveyDescription: (newDescription) => set({surveyDescription: newDescription}),
  changeSurveyTime: (newSurveyTime) => set({surveyTime: newSurveyTime}),
  changeSurveyDeadline: (newDeadLine) => set({surveyDeadline: newDeadLine}),
  changeSurveyMinTime: (newMinTime) => set({surveyMinTime: newMinTime}),
  changeSurveyAttemptCount: (newAttempt) => set({surveyAttemptCount: newAttempt}),
  changeSurveyAnonymous: (newAnonymous) => set({surveyAnonymous: newAnonymous}),
  changeSurveyCountAnswers: (newCountAnswers) => set({surveyCountAnswers: newCountAnswers}),
  changeSurveyCountAnswersLabel: (newSurveyCountAnswersLabel) => set({surveyCountAnswersLabel: newSurveyCountAnswersLabel}),
}))

