import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

function GetProjects() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [isFormFilled,setIsFormFilled] = useState(false);
    const [isValidEmail,setIsValidEmail] = useState(true);
    const navigate = useNavigate();

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setName(e.target.value)
        }else if(e.target.name === 'email'){
            setIsValidEmail(false);
            const email = e.target.value;
            const validateEmail = (email) => {
                return String(email)
                  .toLowerCase()
                  .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  );
              };
            if(validateEmail(email)){
                setIsValidEmail(true)
                setEmail(email)
            }
        }
        if(name && email){
            setIsFormFilled(true)
        }
        else{
            setIsFormFilled(false)
        }
    }

    const hadnleSubmit = (e) => {
        e.preventDefault();
        if(!isFormFilled){
            return;
        }
        navigate('/form-submitted');
    }
  return (
    <>
        <nav className='flex justify-between mx-4 my-4 py-4 px-4'>
            <img className='brand w-2/12 py-4 px-6' src='/logo.svg' alt="logo"/>
            <img className='close-icon w-1/12 py-4 px-6 cursor-pointer' src="/Cross-Icon.svg" alt="Cross Icon" />
        </nav>
        <section className='w-[40vw] block mx-auto h-[80vh]'>
            <div className='text-center'>
                <div className='font-CoveredByYourGrace text-3xl text-[#2DA950]'>Registration Form</div>
                <div className='font-Manrope text-center text-5xl font-semibold mt-5'>Start Your Success Journey Here!</div>
            </div>
            <div className="mt-14">
                <form className='block w-3/5 mx-auto'>
                    <input className='my-4 block p-5 rounded-full w-full bg-[#EFEFEF] focus:outline-[#537FF1] focus:bg-[#537FF1]/10' type="text"  name='name' id='name' placeholder='Enter Your Name' onChange={(e)=>{handleChange(e)}}/>
                    <input className='my-4 block p-5 rounded-full w-full bg-[#EFEFEF] focus:outline-[#537FF1] focus:bg-[#537FF1]/10' type="email" name='email' id='email' placeholder='Enter Your Email' onChange={(e)=>{handleChange(e)}}/>
                    {!isValidEmail && <div className='text-red-600'><span className='rounded-full px-2 py-0 bg-red-600 text-white'>!</span> Enter a valid Email Address</div>}
                    {isFormFilled === true && isValidEmail ? <button className='my-6 p-5 rounded-full w-full bg-[#1C1C1C] text-white' type="submit" onClick={(e)=>{hadnleSubmit(e)}}>Submit</button>:<button className='my-6 p-5 rounded-full w-full bg-[#454444]/40 text-white' type="submit" disabled>Submit</button>}
                </form>
            </div>
        </section>
    </>
  )
}

export default GetProjects