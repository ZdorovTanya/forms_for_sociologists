import React from 'react'
import { Link } from 'react-router-dom'

export const SurveyCard = ({ survey }) => {
  return (
    <Link to={`link/${survey.id}`} className="w-80 rounded-lg h-min bg-white">
      <img
        src={survey.wallpaper_url || 'https://picsum.photos/320/200'}
        alt="Survey cover"
        className="rounded-t-lg rounded-b-none w-80 h-50 bg-emerald-400"
      />
      <p className="text-lg font-semibold text-gray-500 px-4 py-3">{survey.name}</p>
      <div className="h-px bg-gray-200" />
      <p className="text-sm text-gray-700 p-4">{survey.description}</p>
    </Link>
  )
}
