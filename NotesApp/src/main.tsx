import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Home from './pages/home'
import PersonalNotes from './pages/personalNotes'
import SchoolNotes from './pages/schoolNotes'
import WorkNotes from './pages/workNotes'
import { AuthProvider } from './contextAPI/AuthContext'
import Login from './pages/login'
import Profile from './contextAPI/Profile'  
import './index.css'



const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement!).render(
  <Provider store={store}>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personalNotes" element={<PersonalNotes />} />
        <Route path="/schoolNotes" element={<SchoolNotes />} />
        <Route path="/workNotes" element={<WorkNotes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  </Provider>
);
export default rootElement;