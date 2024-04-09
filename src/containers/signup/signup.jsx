import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
// import PandaLogo from "../../assets/pandalogo.png";
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/slices/auth.slice';

const SignupPage = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const gotoSignup = () => {
    navigation('/login')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[4].value === e.target[5].value) {
      if (!e.target[3].value) {
        toast.error("Please Select the Role");
        return;
      }


      let payload = {
        firstname: e.target[0].value,
        lastname: e.target[1].value,
        username: `${e.target[0].value} ${e.target[1].value}`,
        phone: e.target[2].value,
        email: e.target[3].value,
        password: e.target[4].value,
      }

      dispatch(addUser({
        data: payload
      })).then(() => {
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";
        e.target[4].value = "";
        gotoSignup();
      })

    } else {
      toast.error("Password Didn't Match");
    }
  }

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img className="mx-auto h-20 w-auto" src={PandaLogo} alt="Panda Logo" /> */}
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-2" onSubmit={handleSubmit} >
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">Firstname</label>
            <div className="mt-1">
              <input id="firstname" name="firstname" type="text" autoComplete="off" required className="block w-full rounded-md border-0 px-2 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">Lastname</label>
            <div className="mt-1">
              <input id="lastname" name="lastname" type="text" autoComplete="off" required className="block w-full rounded-md border-0 px-2 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
            <div className="mt-1">
              <input id="phone" name="phone" type="text" autoComplete="off" required className="block w-full rounded-md border-0 px-2 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-1">
              <input id="email" name="email" type="email" autoComplete="off" required className="block w-full rounded-md border-0 px-2 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div className="mt-1">
              <input id="password" name="password" type="password" autoComplete="off" required className="block w-full rounded-md border-0 px-2 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
            <div className="mt-1">
              <input id="confirmpassword" name="confirmpassword" type="password" autoComplete="off" required className="block w-full rounded-md border-0 px-2 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600">Sign up</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?
          <span className="font-semibold leading-6 text-violet-600 hover:text-violet-500 cursor-pointer" onClick={gotoSignup}> Back to Login</span>
        </p>
      </div>
    </div>
  )
}

export default SignupPage