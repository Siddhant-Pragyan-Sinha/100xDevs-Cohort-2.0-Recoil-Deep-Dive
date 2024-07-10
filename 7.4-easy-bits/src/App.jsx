
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from './atoms'

//RecoilRoot

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>  
}

function MainApp(){
  const networkNotificationCount=useRecoilValue(networkAtom);
  const[messaginNotificationCount,setMessagingNotificationCount]=useRecoilState(messagingAtom); // to retrieve value as well as alter the state
  const jobsNotificationCount=useRecoilValue(jobsAtom);
  const notificationAtomCount=useRecoilValue(notificationsAtom); //To retrieve just the value

  return (
  <>
  <button>Home</button>
  <button>My Network ({networkNotificationCount >= 100? "99+":networkNotificationCount})</button>
  <button>Jobs ({jobsNotificationCount})</button>
  <button>Notifications ({notificationAtomCount})</button>
  <button>Me</button>
  </>
  )
}

export default App
