import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './component/Pages/Home'
import Login from './component/Pages/Login/Login'
import User from './component/Pages/Account/User'
import SignInSignUp from './component/Pages/SignInSignUp/SignInSignUp'
import NewForm from './component/Pages/Form/component/NewForm/NewForm.jsx'
import AllTeam from './component/Pages/Account/AllTeam.jsx'
import OneTeam from './component/Pages/Account/OneTeam.jsx'
import NewTeam from './component/Pages/Account/NewTeam.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import AddPartisipiant from './component/Pages/Account/add/AddPartisipiant.jsx'
import UserSettings from './component/Pages/Account/UserSettings.jsx'
import OneGroup from './component/Pages/Account/group/OneGroup.jsx'
import NewGroup from './component/Pages/Account/group/NewGroup.jsx'
import { CreateSurvey } from './component/Pages/CreateSurvey/CreateSurvey.jsx'
import { SurveyConstructor } from './component/Pages/SurveyConstructor/SurveyConstructor.jsx'
import SurveyHome from './component/Pages/SurveyConstructor/SurveyHome.jsx'
import SurveyResult from './component/Pages/SurveyConstructor/Result/SurveyResult.jsx'
import SurveyLink from './component/Pages/SurveyConstructor/Link/SurveyLink.jsx'
import SurveyForm from './pages/survey-form'
import SurveysList from './pages/surveys-list'

function App() {
  return (
    <GoogleOAuthProvider clientId="562414104950-urcdjp4vr1j0jn4ditgum8i6678g2r5p.apps.googleusercontent.com">
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="signInUp" element={<SignInSignUp />}></Route>

            <Route path="form" element={<Login />}></Route>
            <Route path="user" element={<User />}></Route>
            <Route path="userSettings" element={<UserSettings />}></Route>

            <Route path="newForm" element={<NewForm />}></Route>
            <Route path="allTeam" element={<AllTeam />}></Route>
            <Route path="oneTeam" element={<OneTeam />}></Route>
            <Route path="newTeam" element={<NewTeam />}></Route>
            <Route path="addPart" element={<AddPartisipiant />}></Route>
            <Route path="oneGroup" element={<OneGroup />}></Route>
            <Route path="newGroup" element={<NewGroup />}></Route>

            <Route path="survey" element={<CreateSurvey />}></Route>
            <Route path="surveys" element={<SurveyHome />}></Route>
            <Route path="surveys/content/1" element={<SurveyConstructor />}></Route>
            <Route path="surveys/result" element={<SurveyResult />}></Route>
            <Route path="surveys/link" element={<SurveyLink />}></Route>
            <Route path="surveys/link/:id" element={<SurveyForm />}></Route>
            {/* <Route path="surveys" element={<SurveysList />}></Route> */}
          </Routes>
        </Router>
      </div>
    </GoogleOAuthProvider>
  )
}

export default App
