import React, { useState } from 'react';
import face from '../img/face.png';
import gmail from '../img/gmail.png';
import cell from '../img/cell.png';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const ProceedLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validation()) {
        console.log('aaaa')
        fetch('http://localhost:3600/users').then((res) => {
            return res.json();
        }).then((resp)=> {
            const user = resp.find((user:any) => user.email===email);
           if(user){
            navigate('/')
           } else {
            toast.error('Pogrešan e-mail ili lozinka');
          }
           
            

        }).catch((err) => {
            toast.error('Login failed due to: ' + err.message)
        })
   
    }
  };

  const validation = () => {
    let result = true;
    if (email === '' || email === null) {
      result = false;
      toast.warning('Please enter email');
    }

    if (password === '' || password === null) {
      result = false;
      toast.warning('Please enter password');
    }

    return result;
  };

  return (
    <div className='bg-gray-100 sm:h-screen sm:w-full sm:flex sm:items-center sm:justify-center'>
      <form onSubmit={ProceedLogin} className='registration-form'>
        <h1 className='text-xl'>Vaš Gigatron nalog</h1>
        <div className='flex'>
          <h3 className='text-sm'>Nemate Gigatron nalog?</h3>
          <Link to='/sign-up' className='forgotten-password ml-1'>
            Registrujte se brzo i lako
          </Link>
        </div>

        <div className='mt-3'>
          <label>Email adresa *</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type='email' className='email-input' />
        </div>

        <div className='mt-3'>
          <label>Lozinka*</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type='password' className='email-input' />
          <a href='#' className='forgotten-password'>
            Zaboravili ste lozinku?
          </a>
        </div>

        <button type='submit' className='sign-in-button'>
          Prijavite se
        </button>

        <p className='options'>Odaberite drugu opciju za prijavu</p>

        <div className='other-options space-x-2'>
          <button className='icon-button'>
            <img src={face} alt='' className='icon-img' />
          </button>
          <button className='icon-button'>
            <img src={gmail} alt='' className='icon-img' />
          </button>
          <button className='icon-button'>
            <img src={cell} alt='' className='icon-img' />
          </button>
        </div>

        <div className='bottom-square'>
          <p>Kupovinom kao registrovani kupac ostvarujete pravo na Gigatron bodove koji vam donose i do 50% popusta pri sledećoj kupovini.</p>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}

export default SignInForm;
