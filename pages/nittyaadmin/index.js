// pages/admin/dashboard.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  AiOutlineProfile,
  AiOutlineLock
} from 'react-icons/ai';
import { IoMdAdd, IoMdHome } from 'react-icons/io';
import { IoBagCheckOutline } from 'react-icons/io5';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dashboard from '@/Components/Admin/Dashboard';
import AddReview from '@/Components/Admin/AddReview';
import AllReview from '@/Components/Admin/AllReview';
import ChangePassword from '@/Components/Admin/ChangePassword';
import AddUser from '@/Components/Admin/AddUser';
import AllUsers from '@/Components/Admin/AllUsers';

const menuItems = [
  { key: 'dashboard', label: 'Dashboard', icon: <IoMdHome /> },
  { key: 'addreview', label: 'Add Review', icon: <IoMdAdd /> },
  { key: 'allreview', label: 'All Review', icon: <AiOutlineProfile /> },
  { key: 'changepassword', label: 'Change Password', icon: <IoBagCheckOutline /> },
  { key: 'adduser', label: 'Add Users', icon: <AiOutlineLock /> },
  { key: 'alluser', label: 'All Users', icon: <AiOutlineLock /> }
];

export default function Index() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem('myuser');
    setUser(null);
    router.push('/');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard': return <Dashboard />;
      case 'addreview': return <AddReview />;
      case 'allreview': return <AllReview />;
      case 'changepassword': return <ChangePassword />;
      case 'adduser': return <AddUser />;
      case 'alluser': return <AllUsers />;
      default: return <div>Unknown Section</div>;
    }
  };

  useEffect(() => {
    const verifyToken = async () => {
      const tokenData = localStorage.getItem('myuser');

      if (!tokenData) {
        toast.error('Unauthorized access. Please log in.', {
          position: 'top-center',
          autoClose: 5000
        });
        router.push('/');
        return;
      }

      const { token } = JSON.parse(tokenData);

      try {
        const res = await fetch('/api/admin/verify-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });

        const data = await res.json();

        if (data.success) {
          setUser(data.user);
          toast.success(`Welcome ${data.user.name}!`, { autoClose: 3000 });
          setLoading(false);
        } else {
          router.push('/');
        }
      } catch (err) {
        console.error('Token verification failed:', err);
        router.push('/');
      }
    };

    verifyToken();
  }, [router]);

  if (loading) return <div className="text-center mt-10 text-lg">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 mt-4 md:mt-12">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        theme="light"
        toastClassName="shadow-lg rounded-lg"
        progressClassName="bg-[#2d9155]"
      />

      <div className="flex flex-col md:flex-row gap-6 p-6 max-w-7xl mx-auto">
        {/* Sidebar - Sticky on larger screens */}
        <aside className="md:w-1/4 md:sticky md:top-6 md:self-start">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            {/* Sidebar Header */}
            <div className="p-5 bg-gradient-to-r from-[#2d9155] to-[#1a6938] text-white">
              <h2 className="text-xl font-bold">Dashboard Menu</h2>
              <p className="text-sm opacity-90">Manage your account</p>
            </div>

            {/* Menu Items */}
            <ul className="p-4 space-y-2">
              {menuItems.map(({ key, label, icon }) => (
                <li key={key}>
                  <button
                    className={`w-full flex items-center py-3 px-4 rounded-lg transition-all duration-200 
                  ${activeSection === key
                        ? 'text-[#2d9155] bg-green-50 font-semibold shadow-sm'
                        : 'text-gray-600 hover:text-[#2d9155] hover:bg-green-50'}
                `}
                    onClick={() => setActiveSection(key)}
                  >
                    <span className={`text-xl ${activeSection === key ? 'text-[#2d9155]' : 'text-gray-400'}`}>
                      {icon}
                    </span>
                    <span className="ml-3">{label}</span>
                    {activeSection === key && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-[#2d9155]"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="md:w-3/4 flex-1">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            {/* Content Header */}
            <div className="p-5 border-b border-gray-100 md:hidden">
              <h1 className="text-2xl font-bold text-gray-800">
                {menuItems.find(item => item.key === activeSection)?.label}
              </h1>
            </div>

            {/* Dynamic Content */}
            <div className="p-6">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
