import { Twitter, Facebook, Instagram, Linkedin, Phone, MapPin, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center w-full bg-white">

      {/* hero */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <h5 className="font-bold text-slate-800 text-sm tracking-wide">CONTACT US</h5>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Get in touch <br className="hidden lg:block" /> today!
            </h1>
            <p className="text-gray-500 max-w-sm text-sm lg:text-base">
              We know how large objects will act, but things on a small scale just do not act that way.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-bold text-slate-800 text-lg lg:text-xl">Phone ; +451 215 215</p>
              <p className="font-bold text-slate-800 text-lg lg:text-xl">Fax : +451 215 215</p>
            </div>
            <div className="flex items-center gap-6 mt-4 text-slate-800">
              <Twitter className="w-7 h-7 cursor-pointer hover:text-[#23A6F0] transition-colors" />
              <Facebook className="w-7 h-7 cursor-pointer hover:text-[#23A6F0] transition-colors" />
              <Instagram className="w-7 h-7 cursor-pointer hover:text-[#23A6F0] transition-colors" />
              <Linkedin className="w-7 h-7 cursor-pointer hover:text-[#23A6F0] transition-colors" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src="/Contact/family.png" 
              alt="Family shopping" 
              className="w-full max-w-md lg:max-w-full h-auto object-contain" 
            />
          </div>
        </div>
      </section>

      {/* kartlar */}
      <section className="w-full bg-gray-50 py-20 flex flex-col items-center">
        <div className="text-center mb-16 px-4">
          <h6 className="text-sm font-bold text-slate-800 mb-4 tracking-wide">VISIT OUR OFFICE</h6>
          <h2 className="text-4xl font-bold text-slate-800 max-w-lg mx-auto leading-tight">
            We help small businesses with big ideas
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-7xl mx-auto px-4 gap-8 lg:gap-0 mt-8">

          <div className="flex flex-col items-center text-center bg-white px-8 py-16 shadow-lg w-full max-w-[320px]">
            <Phone className="w-16 h-16 text-[#23A6F0] mb-6" />
            <p className="font-bold text-sm text-slate-800">georgia.young@example.com</p>
            <p className="font-bold text-sm text-slate-800 mb-4">georgia.young@ple.com</p>
            <p className="font-bold text-slate-800 mb-4">Get Support</p>
            <button className="border border-[#23A6F0] text-[#23A6F0] rounded-full px-6 py-3 font-bold hover:bg-[#23A6F0] hover:text-white transition-colors">
              Submit Request
            </button>
          </div>

        
          <div className="flex flex-col items-center text-center bg-[#252B42] text-white px-8 py-20 shadow-2xl w-full max-w-[320px] lg:scale-110 z-10 relative">
            <MapPin className="w-16 h-16 text-[#23A6F0] mb-6" />
            <p className="font-bold text-sm">georgia.young@example.com</p>
            <p className="font-bold text-sm mb-4">georgia.young@ple.com</p>
            <p className="font-bold mb-4">Get Support</p>
            <button className="border border-[#23A6F0] text-[#23A6F0] rounded-full px-6 py-3 font-bold hover:bg-[#23A6F0] hover:text-white transition-colors">
              Submit Request
            </button>
          </div>

          <div className="flex flex-col items-center text-center bg-white px-8 py-16 shadow-lg w-full max-w-[320px]">
            <Mail className="w-16 h-16 text-[#23A6F0] mb-6" />
            <p className="font-bold text-sm text-slate-800">georgia.young@example.com</p>
            <p className="font-bold text-sm text-slate-800 mb-4">georgia.young@ple.com</p>
            <p className="font-bold text-slate-800 mb-4">Get Support</p>
            <button className="border border-[#23A6F0] text-[#23A6F0] rounded-full px-6 py-3 font-bold hover:bg-[#23A6F0] hover:text-white transition-colors">
              Submit Request
            </button>
          </div>

        </div>
      </section>

      {/* talk*/}
      <section className="w-full bg-white py-20 flex flex-col items-center text-center px-4">
        <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src="/Contact/Arrow 2.png" 
              alt="Arrow" 
                className="-translate-y-10"

            />
          </div>
        <h5 className="font-bold text-slate-800 mb-4 tracking-wide">WE CAN'T WAIT TO MEET YOU</h5>
        <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-8">Let's Talk</h1>
        <button className="bg-[#23A6F0] hover:bg-blue-500 text-white font-bold py-4 px-10 rounded transition-colors shadow-md">
          Try it free now
        </button>
      </section>

    </div>
  );
}