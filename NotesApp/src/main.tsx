import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Home from './pages/home'
import PersonalNotes from './pages/personalNotes'
import SchoolNotes from './pages/schoolNotes'
import WorkNotes from './pages/workNotes'



const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personalNotes" element={<PersonalNotes />} />
        <Route path="/schoolNotes" element={<SchoolNotes />} />
        <Route path="/workNotes" element={<WorkNotes />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
export default rootElement;