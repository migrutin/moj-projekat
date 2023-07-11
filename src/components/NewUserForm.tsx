import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import face from '../img/face.png'
import gmail from '../img/gmail.png'
import cell from '../img/cell.png'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface RegistrationObject {
    email: string;
    password: string;
}

function NewUserForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


   
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let registrationObject: RegistrationObject = { email, password };
    console.log(registrationObject);
    if (validation()) {
      const emailExists = await checkEmail(email);
      if (emailExists) {
        toast.warning('Email already exists');
      } else {
        registerUser(registrationObject);
      }
    }
  };

    const registerUser = (registrationObject: RegistrationObject) => {
        fetch('http://localhost:3600/users', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(registrationObject),
        })
          .then((res) => {
            toast.success('Registered successfully');
            navigate('/login');
          })
          .catch((err) => {
            toast.error('Failed:' + err.message);
          });
      };


    const checkEmail = async (email:string) => {
        try {
            const respons = await fetch(`http://localhost:3600/users?email=${email}`);
            const responsJson = await respons.json();
            return responsJson.length > 0;
            
        } catch (error) {
            console.error('Error', error);
            return false;
        }
    }

    const validation = () => {
        let result = true;
        if (email === '' || email === null) {
            result = false;
            toast.warning('Enter enter email')
        }

        if (password === '' || password === null) {
            result = false;
            toast.warning('Please enter password');
        }


        return result;
    }


    return (
        <div className='bg-gray-100 sm:h-screen sm:w-full sm:flex sm:items-center sm:justify-center'>
            <form className='registration-form' onSubmit={handleSubmit}>
                <h1 className='text-xl'>Napravite svoj Gigatron nalog</h1>
                <div className='flex'>
                    <h3 className='text-sm'>Već imate Gigatron nalog?</h3>
                    <Link to='/login' className='forgotten-password'>Prijavi se</Link>
                </div>

                <div className='mt-3'>
                    <label>Email adresa *</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" className='email-input' />

                </div>

                <div className='mt-3'>
                    <label>Lozinka*</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" className='email-input' />
                    <a href='#' className='forgotten-password'>Zaboravili ste lozinku?</a>

                </div>

                <button className='sign-in-button'> Registrujte se

                </button>

                <p className='options'>Odaberite drugu opciju za prijavu</p>

                <div className='other-options space-x-2'>
                    <button className='icon-button '>
                        <img src={face} alt="" className='icon-img' />
                    </button>
                    <button className='icon-button '>
                        <img src={gmail} alt="" className='icon-img' />
                    </button>
                    <button className='icon-button '>
                        <img src={cell} alt="" className='icon-img' />
                    </button>

                </div>

                <div className='bottom-square'>
                    <p>Kupovinom kao registrovani kupac ostvarujete pravo na Gigatron bodove koji vam donose i do 50% popusta pri sledećoj kupovini.</p>
                </div>

            </form>
            <ToastContainer />
        </div>
    )
}

export default NewUserForm