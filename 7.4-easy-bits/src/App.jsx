
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from './atoms'
import { useMemo } from 'react';

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

  //useMemo
  const totalNotifications=useMemo(()=>{
    return networkNotificationCount+messaginNotificationCount+jobsNotificationCount+notificationAtomCount;
  },[networkNotificationCount,messaginNotificationCount,jobsNotificationCount,notificationAtomCount]);
  return (
  <>
  <button>Home</button>
  <button>My Network ({networkNotificationCount >= 100? "99+":networkNotificationCount})</button>
  <button>Jobs ({jobsNotificationCount})</button>
  <button>Notifications ({notificationAtomCount})</button>
  <button>Messaging ({messaginNotificationCount})</button>
  <button>Me ({totalNotifications})</button>
  </>
  )
}

export default App
