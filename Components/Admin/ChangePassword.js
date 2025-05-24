import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePassword = () => {
  const [user, setUser] = useState({ value: null })
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [npassword, setNpassword] = useState('');

  const router = useRouter()
  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem('myuser'))
    if (!myuser) {
      router.push('/')
    }
    if (myuser && myuser.token) {
      setUser(myuser);
    }
  }, [router.query])

  const handlePasswordSubmit = async () => {
    let res;
    if (npassword == cpassword) {
      let data = { token: user.token, password, cpassword, npassword };
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatepassword`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      res = await a.json()
    }
    else {
      res = { success: false }
    }

    if (res.success) {
      toast.success("Successfully Updated Password", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      toast.error("Error Updated Password", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    setPassword('');
    setCpassword('');
    setNpassword('');
  }

  const handleChange = async (e) => {
    if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
    else if (e.target.name == 'cpassword') {
      setCpassword(e.target.value)
    }
    else if (e.target.name == 'npassword') {
      setNpassword(e.target.value)
    }
  }

  return (
    <section>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden mx-auto">
        {/* Header Section */}
        <div className="bg-[#2d9155] p-6 text-center">
          <div className="flex justify-center">
            <img className="h-22 w-auto mix-blend-color-burn" src="/nittya_logo.png" alt="Nittya Nutrition" />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-white">
            Update Password
          </h2>
        </div>

        {/* Form Section */}
        <div className="px-8 py-8 sm:p-10">
          <form className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Current Password</label>
              <input type="password" onChange={handleChange} value={password} id="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" required="" />
            </div>
            <div>
              <label htmlFor="npassword" className="block text-sm font-medium text-gray-700">New Password</label>
              <input onChange={handleChange} value={npassword} type="password" id="npassword" name="npassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" required="" />
            </div>
            <div>
              <label htmlFor="cpassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input onChange={handleChange} value={cpassword} type="password" id="cpassword" name="cpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" required="" />
            </div>
            <button onClick={handlePasswordSubmit} className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-[#2d9155] hover:bg-[#1a6938] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2d9155] transition-colors duration-300">Update Password</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ChangePassword