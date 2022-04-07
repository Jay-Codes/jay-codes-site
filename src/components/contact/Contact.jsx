import React, {useContext} from 'react'
import './style.css'
import PhoneIcon from '../../img/phone.png'
import EmailIcon from '../../img/email.png'
import AddressIcon from '../../img/address.png'
import { useRef ,useState } from 'react'
import emailjs from '@emailjs/browser'
import { ThemeContext } from '../../Context'
const Left = ()=> (
    <div className='c-left'>
        <h1 className="c-title"> Let's Discuss Your Project</h1>
        <div className="c-info">
            <InfoItem image={PhoneIcon} info="+255 756 755 710 / +27 66 089 4935"/>
            <InfoItem image={EmailIcon} info="josephjchuchu@gmail.com" />
            <InfoItem image={AddressIcon} info="Dont have an office yet :(  "/>
        </div>
    </div>
)
const Right= ({formRef})=> {
    const [done ,setDone] = useState(false)
    const handleSubmit = (event,formRef) =>{
        event.preventDefault()
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, 
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
            formRef.current, 
            process.env.REACT_APP_EMAILJS_USER_ID)
          .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
          });
    }
    const ThankYou = () => (
        <h1 className='thankyou'>
            Thank You Will Get Back To You Soon !!!
        </h1>
    )
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    return(
        <div className='c-right'>
            <p className="c-desc">
                <b>What’s your story?</b> Get in touch. Always available for
                freelancing if the right project comes along. me.
            </p>
            { done ? <ThankYou/> :
            <form ref={formRef} onSubmit={(e)=>{handleSubmit(e,formRef)}}>
                <input style={{backgroundColor:darkMode && '#333' ,color:darkMode && 'white'}} type="text" placeholder='Name' name='user_name' />
                <input style={{backgroundColor:darkMode && '#333' ,color:darkMode && 'white'}} type="text" placeholder='Subject' name='user_subject' />
                <input style={{backgroundColor:darkMode && '#333' ,color:darkMode && 'white'}} type="text" placeholder='Email' name='user_email' />
                <textarea style={{backgroundColor:darkMode && '#333' ,color:darkMode && 'white'}} name="message" cols="30" rows="10" placeholder='Message'/>
                <button>Send</button>
            </form>
            }
        </div>
        )
    }

const InfoItem = ({image , info})=> {
    return (
        <div className="c-info-item">
            <img 
                src = {image}
                className='c-icon'
            />
            {info}
        </div>
    )
}

const Contact = () => {
    const formRef = useRef()
    
  return (
    <div className='c'>
         <div className="c-bg"></div>
         <div className="c-wrapper">
             <Left/>
             <Right formRef={formRef}/>
         </div>
    </div>
  )
}

function copyToClipBoard(event) {
    alert('ho')
    /* Get the text field */
    var copyText = event.target;
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }
export default Contact