import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../api/axiosInstance';
import { Loader2 } from 'lucide-react';

export default function SignupPage() {
  const history = useHistory();
  const [roles, setRoles] = useState([]);
  
  const { 
    register, 
    handleSubmit, 
    watch, 
    setValue, 
    formState: { errors, isSubmitting } 
  } = useForm({
    defaultValues: { role_id: "" }
  });

  const selectedRoleId = watch("role_id");
  const password = watch("password"); 

  // rolleri al customer default
  useEffect(() => {
    api.get('/roles')
      .then(res => {
        setRoles(res.data);
        const customerRole = res.data.find(r => r.code === 'customer' || r.name?.toLowerCase() === 'customer');
        if (customerRole) {
          setValue("role_id", customerRole.id.toString());
        }
      })
      .catch(err => toast.error("Roller yüklenirken bir hata oluştu!"));
  }, [setValue]);

  const selectedRoleData = roles.find(r => r.id.toString() === selectedRoleId);
  const isStore = selectedRoleData && (selectedRoleData.code === 'store' || selectedRoleData.name?.toLowerCase() === 'store');

  // post işi
  const onSubmit = async (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id
    };

    if (isStore) {
      payload.store = {
        name: data.storeName,
        phone: data.storePhone,
        tax_no: data.storeTax,
        bank_account: data.storeBank
      };
    }

    //warning olayı
    try {
      await api.post('/signup', payload);
      
      toast.warning("You need to click link in email to activate your account!");
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      history.goBack();
      
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Sign up failed! Please check your information.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-gray-50 py-16 px-4 min-h-screen">
      <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Sign Up</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          
          {/* İSİM */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-slate-700">Name</label>
            <input 
              type="text" 
              className={`border p-3 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              {...register("name", { 
                required: "Name is required", 
                minLength: { value: 3, message: "Name must be at least 3 characters" } 
              })}
            />
            {errors.name && <span className="text-red-500 text-xs font-bold">{errors.name.message}</span>}
          </div>

          {/* EMAIL  */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-slate-700">Email</label>
            <input 
              type="email" 
              className={`border p-3 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              {...register("email", { 
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
              })}
            />
            {errors.email && <span className="text-red-500 text-xs font-bold">{errors.email.message}</span>}
          </div>

          {/* ŞİFRE  */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-slate-700">Password</label>
            <input 
              type="password" 
              className={`border p-3 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              {...register("password", { 
                required: "Password is required",
                pattern: { 
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/\\|`~]).{8,}$/, 
                  message: "Min 8 chars, needs number, lower, upper and special char" 
                }
              })}
            />
            {errors.password && <span className="text-red-500 text-xs font-bold">{errors.password.message}</span>}
          </div>

          {/* ŞİFRE ONAY */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-slate-700">Confirm Password</label>
            <input 
              type="password" 
              className={`border p-3 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              {...register("confirmPassword", { 
                required: "Please confirm your password",
                validate: value => value === password || "Passwords do not match"
              })}
            />
            {errors.confirmPassword && <span className="text-red-500 text-xs font-bold">{errors.confirmPassword.message}</span>}
          </div>

          {/* ROL  */}
          <div className="flex flex-col gap-1 mt-2">
            <label className="text-sm font-bold text-slate-700">Role</label>
            <select 
              className="border border-gray-300 p-3 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
              {...register("role_id", { required: "Role is required" })}
            >
              {roles.map(role => (
                <option key={role.id} value={role.id}>{role.name || role.code}</option>
              ))}
            </select>
          </div>

          {/* store seçilince çıkan alan */}
          {isStore && (
            <div className="bg-gray-100 p-4 rounded-md flex flex-col gap-4 mt-2 border border-gray-200">
              <h4 className="font-bold text-slate-800 text-sm mb-1">Store Details</h4>
              
              <div className="flex flex-col gap-1">
                <input 
                  type="text" placeholder="Store Name"
                  className="border border-gray-300 p-2 rounded text-sm"
                  {...register("storeName", { required: "Store Name is required", minLength: { value: 3, message: "Min 3 chars" } })}
                />
                {errors.storeName && <span className="text-red-500 text-xs font-bold">{errors.storeName.message}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <input 
                  type="text" placeholder="Store Phone (+905XXXXXXXXX)"
                  className="border border-gray-300 p-2 rounded text-sm"
                  {...register("storePhone", { 
                    required: "Store Phone is required",
                    pattern: { value: /^(\+90|0)?5\d{9}$/, message: "Valid TR Phone required" }
                  })}
                />
                {errors.storePhone && <span className="text-red-500 text-xs font-bold">{errors.storePhone.message}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <input 
                  type="text" placeholder="Tax ID (TXXXXVXXXXXX)"
                  className="border border-gray-300 p-2 rounded text-sm uppercase"
                  {...register("storeTax", { 
                    required: "Tax ID is required",
                    pattern: { value: /^T\d{4}V\d{6}$/i, message: "Must match pattern TXXXXVXXXXXX" }
                  })}
                />
                {errors.storeTax && <span className="text-red-500 text-xs font-bold">{errors.storeTax.message}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <input 
                  type="text" placeholder="Bank Account (TR IBAN)"
                  className="border border-gray-300 p-2 rounded text-sm uppercase"
                  {...register("storeBank", { 
                    required: "IBAN is required",
                    pattern: { value: /^TR\d{24}$/i, message: "Must be a valid TR IBAN" }
                  })}
                />
                {errors.storeBank && <span className="text-red-500 text-xs font-bold">{errors.storeBank.message}</span>}
              </div>
            </div>
          )}

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="mt-6 bg-[#23A6F0] text-white font-bold py-3 px-4 rounded text-sm hover:bg-blue-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign Up"}
          </button>

        </form>
      </div>
    </div>
  );
}