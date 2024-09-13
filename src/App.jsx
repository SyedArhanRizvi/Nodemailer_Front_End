import { useState } from 'react'
import './App.css'
import axios from "axios"
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast'
function App() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const emailHandler = async (e) =>{
    e.preventDefault();
    try {
      const res = await axios.post("https://backe-end-nodemailer.onrender.com/emailSend", {name, mail, phone, msg});
      console.log(res)
      if(res.data.success == true) {
        toast.success("Email has been send successfully");
      }
      
    } catch (error) {
      console.log("We cant fetch your api due to this error ", error);
      
    }
  }
  return (
    <>   
     <section className='body'>
    <div className="title"><h1>Fill the all form fields..</h1></div>
    <div className="main">
      <form onSubmit={emailHandler}>
      <input type="text" placeholder='Enter Your Name here...' name='name' onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder='Enter Your mail here...'name='mail' onChange={(e) => setMail(e.target.value)}/>
      <input type="text" placeholder='Enter Your Phone here...'name='phone' onChange={(e) => setPhone(e.target.value)}/>
      <input type="text" placeholder='Enter Your message here...'name='msg' onChange={(e) => setMsg(e.target.value)}/>
      <input type="submit" value={"Submit"} className='btn'/>
      </form>

    </div>

    </section>
    <Toaster/>
    </>

  )
}

export default App
