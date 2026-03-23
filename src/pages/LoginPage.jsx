import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../store/actions/clientActions';
import { Loader2 } from 'lucide-react';

export default function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: { rememberMe: true } // Kullanıcı kolaylığı için varsayılan true
  });

  const onSubmit = (data) => {
    // Formdaki bilgileri alıp az önce yazdığımız Thunk'a fırlatıyoruz
    const credentials = { email: data.email, password: data.password };
    dispatch(loginUser(credentials, data.rememberMe, history));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-50 py-20 px-4 min-h-[60vh]">
      <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          
          {/* EMAIL */}
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

          {/* PASSWORD (Kanban sadece email validasyonu istemiş, o yüzden düz bıraktık) */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-slate-700">Password</label>
            <input 
              type="password" 
              className="border border-gray-300 p-3 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <span className="text-red-500 text-xs font-bold">{errors.password.message}</span>}
          </div>

          {/* REMEMBER ME */}
          <div className="flex items-center gap-2 mt-1">
            <input 
              type="checkbox" 
              id="remember"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              {...register("rememberMe")}
            />
            <label htmlFor="remember" className="text-sm font-bold text-gray-500 cursor-pointer">
              Remember me
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="mt-4 bg-[#23A6F0] text-white font-bold py-3 px-4 rounded text-sm hover:bg-blue-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}