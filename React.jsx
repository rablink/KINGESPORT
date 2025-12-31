import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Trophy, 
  Calendar, 
  Gamepad2, 
  ChevronRight, 
  Instagram, 
  Youtube, 
  Twitter, 
  Menu, 
  X,
  Zap,
  ShieldCheck,
  Award,
  User
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('utama');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Placeholder image function for consistency
  const getAvatar = (seed) => `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=fbbf24&top=shortHair,shaggyMullet,longHairCurvy,shortWaved&accessories=wayfarers,prescription01&clothing=shirt,hoodie&clothingColor=000000`;

  const management = [
    { role: "FOUNDER", name: "M.IPAN", img: getAvatar("ipan"), color: "from-yellow-400 to-yellow-600" },
    { role: "GENERAL MANAGER", name: "DONI", img: getAvatar("doni"), color: "from-yellow-500 to-yellow-700" },
    { role: "COACH", name: "TAMA", img: getAvatar("tama"), color: "from-blue-500 to-blue-700" },
    { role: "DESIGN GRAFIS", name: "FIRMAN", img: getAvatar("firman"), color: "from-gray-500 to-gray-700" },
    { role: "SOSIAL MEDIA", name: "ARUMI", img: getAvatar("arumi"), color: "from-pink-500 to-pink-700" },
    { role: "TRIALS", name: "IBNU", img: getAvatar("ibnu"), color: "from-green-500 to-green-700" }
  ];

  const managers = [
    { title: "MANAGER 1: M.IPAN", teams: "KING 444 PRIDE, KING KUNYO, KING EMPIRE", img: getAvatar("ipan") },
    { title: "MANAGER 2: CICI", teams: "KING GAMING, KING FAMILY", img: getAvatar("cici") },
    { title: "MANAGER 3: FIRMAN", teams: "KING WIZARD, KING TODAK, KING BADUT, KING COBRA", img: getAvatar("firman") }
  ];

  const rosters = {
    utama: {
      title: "DIVISI UTAMA",
      players: [
        { role: "Jungler", name: "PRINSS969 X 444", img: getAvatar("p1") },
        { role: "Gold Lane", name: "epos senn 123", img: getAvatar("p2") },
        { role: "Exp Lane", name: "ReyX444", img: getAvatar("p3") },
        { role: "Roamer", name: "FRANZ X 777", img: getAvatar("p4") },
        { role: "Mid Lane", name: "SHIRO X 777", img: getAvatar("p5") },
        { role: "CADANGAN", name: "AISKA X 777", img: getAvatar("p6"), isSub: true }
      ]
    },
    div1: {
      title: "DIVISI 1",
      players: [
        { role: "Jungler", name: "Adit | Akeensi", img: getAvatar("d1p1") },
        { role: "Exp Lane", name: "dhedy (Al_Rex)", img: getAvatar("d1p2") },
        { role: "Mid Lane", name: "Marsel / Aswan", img: getAvatar("d1p3") },
        { role: "Gold Lane", name: "Kaisar/Nepturn", img: getAvatar("d1p4") },
        { role: "Roamer (C)", name: "Alwi | KPI AL", img: getAvatar("d1p5") }
      ]
    },
    div2: {
      title: "DIVISI 2",
      players: [
        { role: "Jungler (C)", name: "Arif | Sutsuripftzy", img: getAvatar("d2p1") },
        { role: "Exp Lane", name: "Rio | EL BRINAAAA", img: getAvatar("d2p2") },
        { role: "Mid Lane", name: "Viking | Zetsu", img: getAvatar("d2p3") },
        { role: "Gold Lane", name: "Murfi | séaorion", img: getAvatar("d2p4") },
        { role: "Roamer", name: "Raden | GIBSS...", img: getAvatar("d2p5") },
        { role: "CADANGAN", name: "Fahri l", img: getAvatar("d2p6"), isSub: true }
      ]
    },
    div3: {
      title: "DIVISI 3",
      players: [
        { role: "Jungler", name: "Natsuki Subaru", img: getAvatar("d3p1") },
        { role: "Gold Lane", name: "Rehan the steadfast", img: getAvatar("d3p2") },
        { role: "Mid Lane (C)", name: "Tirtayyy", img: getAvatar("d3p3") },
        { role: "Exp Lane", name: "Natsuki sobaru", img: getAvatar("d3p4") },
        { role: "Roamer", name: "Cexzuy", img: getAvatar("d3p5") },
        { role: "CADANGAN", name: "π√KarlTzy√π", img: getAvatar("d3p6"), isSub: true }
      ]
    },
    div4: {
      title: "DIVISI 4",
      players: [
        { role: "Squad", name: "Priaidaman99AZ", img: getAvatar("d4p1") },
        { role: "Squad", name: "Gerra.", img: getAvatar("d4p2") },
        { role: "Squad", name: "RADEN", img: getAvatar("d4p3") },
        { role: "Squad", name: "Draven ft Claude", img: getAvatar("d4p4") },
        { role: "Squad", name: "XEESOXEE", img: getAvatar("d4p5") },
        { role: "Squad", name: "Overtoo", img: getAvatar("d4p6") },
        { role: "Squad", name: "Jago 1%", img: getAvatar("d4p7") }
      ]
    },
    div5: {
      title: "DIVISI 5",
      players: [
        { role: "Gold Lane", name: "Raditya | renzznocounter", img: getAvatar("d5p1") },
        { role: "Gold Lane", name: "Deni | Nnyy", img: getAvatar("d5p2") },
        { role: "Jungler", name: "Ketut | Satoru", img: getAvatar("d5p3") },
        { role: "Exp Lane", name: "Ibeth | إلهام", img: getAvatar("d5p4") },
        { role: "Roamer (C)", name: "Ardian | XD.ID", img: getAvatar("d5p5") },
        { role: "Mid Lane", name: "Dwi | SwiftSon", img: getAvatar("d5p6") }
      ]
    },
    div6: {
      title: "DIVISI 6",
      players: [
        { role: "Jungler", name: "RYAN", img: getAvatar("d6p1") },
        { role: "Gold Lane", name: "★ F R A N S ★", img: getAvatar("d6p2") },
        { role: "Mid Lane", name: "Who's see?", img: getAvatar("d6p3") },
        { role: "Exp Lane", name: "Amelia@02", img: getAvatar("d6p4") },
        { role: "Roamer", name: "ZMB®KING™", img: getAvatar("d6p5") },
        { role: "CADANGAN", name: "Dyy. Niaa", img: getAvatar("d6p6"), isSub: true }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-lg py-4 border-b border-yellow-500/50' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
              <Zap className="text-black fill-current" />
            </div>
            <span className="text-2xl font-black tracking-tighter italic text-yellow-500">KING ESPORT</span>
          </div>

          <div className="hidden md:flex gap-8 font-bold text-xs uppercase tracking-widest">
            {['Home', 'Management', 'Roster', 'Tournament', 'Recruitment'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-yellow-500 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button className="md:hidden text-yellow-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
            alt="Esport Stage"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1 bg-yellow-500 text-black text-[10px] font-black tracking-[0.3em] mb-6 rounded-sm uppercase">
            The Golden Dynasty
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black italic tracking-tighter mb-4 leading-none">
            KING<br /><span className="text-yellow-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.6)]">ESPORT</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-base uppercase tracking-widest mb-10 font-bold">
            Dominasi • Loyalitas • Kemenangan
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#tournament" className="px-10 py-4 bg-yellow-500 text-black font-black uppercase tracking-tighter flex items-center gap-2 hover:bg-white transition-all transform hover:-translate-y-1">
              DAFTAR TURNAMEN S5 <ChevronRight size={20} />
            </a>
            <a href="#recruitment" className="px-10 py-4 border-2 border-yellow-500 text-yellow-500 font-black uppercase tracking-tighter hover:bg-yellow-500 hover:text-black transition-all transform hover:-translate-y-1">
              OPEN RECRUITMENT
            </a>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section id="management" className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-yellow-500 font-black tracking-[0.5em] text-xs mb-4 uppercase">The Core Leadership</h2>
            <h3 className="text-5xl md:text-6xl font-black italic uppercase">STAFF <span className="text-yellow-500">&</span> MANAGEMENT</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {management.map((staff, idx) => (
              <div key={idx} className="group relative bg-zinc-900/50 border border-zinc-800 p-8 hover:border-yellow-500/50 transition-all duration-500">
                <div className="relative z-10">
                  <div className="w-24 h-24 mb-6 relative overflow-hidden rounded-lg bg-black border border-yellow-500/30 group-hover:border-yellow-500 transition-colors">
                    <img src={staff.img} alt={staff.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <p className="text-xs font-black text-yellow-500 mb-1 tracking-widest uppercase">{staff.role}</p>
                  <h4 className="text-3xl font-black mb-4 group-hover:text-yellow-500 transition-colors">{staff.name}</h4>
                  <div className="flex items-center gap-3">
                     <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Verified Staff</span>
                     <ShieldCheck size={16} className="text-yellow-500" />
                  </div>
                </div>
                <div className={`absolute top-0 right-0 w-1.5 h-full bg-gradient-to-b ${staff.color} opacity-20 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            ))}
          </div>

          {/* Detailed Managers Info */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {managers.map((m, idx) => (
              <div key={idx} className="bg-zinc-900 border-l-4 border-yellow-500 p-8 flex gap-6 items-center group">
                <img src={m.img} className="w-16 h-16 rounded-sm bg-black border border-zinc-800 group-hover:border-yellow-500 transition-colors" />
                <div>
                  <h5 className="text-white font-black text-sm mb-1 uppercase tracking-tighter">{m.title}</h5>
                  <p className="text-gray-500 text-xs leading-relaxed font-medium uppercase tracking-tighter">{m.teams}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roster Section */}
      <section id="roster" className="py-32 bg-black relative">
        <div className="absolute inset-0 bg-yellow-500/[0.02] pointer-events-none"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-yellow-500 font-black tracking-[0.5em] text-xs mb-4 uppercase">Elite Warriors</h2>
            <h3 className="text-5xl md:text-6xl font-black italic uppercase mb-12">PLAYER <span className="text-yellow-500">LIST</span></h3>
            
            {/* Divisi Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {Object.keys(rosters).map((key) => (
                <button 
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-8 py-3 font-black text-xs uppercase tracking-[0.2em] transition-all border ${activeTab === key ? 'bg-yellow-500 text-black border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.4)]' : 'text-gray-500 border-zinc-900 hover:border-yellow-500'}`}
                >
                  {key === 'utama' ? 'UTAMA' : key.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rosters[activeTab].players.map((player, idx) => (
              <div key={idx} className={`group relative bg-zinc-900/30 border ${player.isSub ? 'border-zinc-800 border-dashed' : 'border-zinc-900'} hover:border-yellow-500/60 transition-all duration-500 p-1`}>
                <div className="bg-zinc-950 p-6 relative overflow-hidden">
                  {/* Card Glow Background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-3xl group-hover:bg-yellow-500/10 transition-colors"></div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-40 h-40 mb-6 relative group-hover:scale-105 transition-transform duration-500">
                        {/* Frame */}
                        <div className="absolute inset-0 border-2 border-yellow-500/20 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                        <div className="absolute inset-2 border border-yellow-500/40 -rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                        
                        <img 
                          src={player.img} 
                          className="w-full h-full object-cover rounded-full relative z-10 bg-zinc-900 border-4 border-black" 
                          alt={player.name} 
                        />
                        {/* Role Icon Overlay */}
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center z-20 text-black border-4 border-black">
                            {player.isSub ? <Award size={18} /> : <Gamepad2 size={18} />}
                        </div>
                    </div>
                    
                    <div className="relative z-10">
                        <span className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.3em] mb-2 block">{player.role}</span>
                        <h4 className="text-xl font-black text-white italic group-hover:text-yellow-500 transition-colors uppercase tracking-tight">{player.name}</h4>
                        <div className="mt-4 flex justify-center gap-1">
                            <div className="w-1 h-1 bg-yellow-500"></div>
                            <div className="w-6 h-1 bg-yellow-500/30 group-hover:bg-yellow-500 transition-colors"></div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Info */}
      <section id="tournament" className="py-32 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="relative border-4 border-yellow-500 p-10 md:p-20 overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-colors"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <div className="flex items-center gap-4 text-yellow-500 mb-8">
                  <div className="p-3 bg-yellow-500/10 border border-yellow-500 rounded-lg">
                    <Trophy size={40} />
                  </div>
                  <div>
                    <h4 className="font-black text-sm tracking-[0.3em] uppercase opacity-60">Esport Presents</h4>
                    <h5 className="font-black text-2xl italic tracking-tighter">THE BATTLE OF KINGS</h5>
                  </div>
                </div>
                
                <h3 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-8">
                  MLBB COMMUNITY<br />
                  <span className="text-yellow-500 text-6xl md:text-9xl drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">SEASON 5</span>
                </h3>
                
                <div className="grid grid-cols-2 gap-6 mb-12">
                   <div className="bg-white/5 p-4 rounded-sm border border-white/10">
                      <p className="text-[10px] font-black text-yellow-500 uppercase mb-1">Status</p>
                      <p className="font-black text-white text-lg">PENDAFTARAN BUKA</p>
                   </div>
                   <div className="bg-white/5 p-4 rounded-sm border border-white/10">
                      <p className="text-[10px] font-black text-yellow-500 uppercase mb-1">Total Prize Pool</p>
                      <p className="font-black text-white text-lg italic">COMMUNITY CUP</p>
                   </div>
                </div>

                <button className="px-12 py-5 bg-yellow-500 text-black font-black text-lg uppercase tracking-tighter hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                  DAFTAR SEKARANG
                </button>
              </div>

              <div className="space-y-4">
                 <div className="bg-black/80 border border-yellow-500/30 p-8">
                    <h4 className="font-black text-yellow-500 mb-6 uppercase tracking-widest text-center border-b border-yellow-500/20 pb-4">Schedule & Timeline</h4>
                    <div className="space-y-6">
                        {[
                          { label: "Technical Meeting", val: "Coming Soon", active: true },
                          { label: "Group Stage", val: "TBA", active: false },
                          { label: "Grand Final", val: "TBA", active: false }
                        ].map((item, i) => (
                          <div key={i} className="flex justify-between items-center group/item">
                            <span className="font-black text-xs uppercase text-gray-400 group-hover/item:text-white transition-colors">{item.label}</span>
                            <span className={`text-xs font-black uppercase px-2 py-1 ${item.active ? 'bg-yellow-500 text-black' : 'text-zinc-600'}`}>{item.val}</span>
                          </div>
                        ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment */}
      <section id="recruitment" className="py-32 bg-black border-y border-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-yellow-500 font-black text-sm tracking-[0.4em] mb-4 uppercase">Join Our Ranks</h3>
            <h4 className="text-6xl md:text-8xl font-black italic uppercase mb-12">OPEN <span className="text-yellow-500">TRIALS</span></h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
               {[
                 { title: "High Rank", desc: "Minimal Mythic Glory / Immortal" },
                 { title: "Discipline", desc: "Siap mengikuti jadwal latihan tim" },
                 { title: "Loyalty", desc: "Memiliki loyalitas tinggi pada tim" }
               ].map((item, i) => (
                 <div key={i} className="bg-zinc-950 p-8 border border-zinc-900 hover:border-yellow-500 transition-all">
                    <Zap className="mx-auto text-yellow-500 mb-4" size={32} />
                    <h5 className="font-black text-white uppercase mb-2 italic">{item.title}</h5>
                    <p className="text-xs text-gray-500 font-bold uppercase">{item.desc}</p>
                 </div>
               ))}
            </div>

            <div className="bg-yellow-500 p-8 flex flex-col md:flex-row items-center justify-between gap-6 group cursor-pointer hover:bg-white transition-colors">
               <div className="text-left">
                  <h5 className="text-black font-black text-2xl italic tracking-tighter uppercase">Siap Untuk Bergabung?</h5>
                  <p className="text-black/60 font-black text-xs uppercase tracking-widest">Hubungi Admin Trials: IBNU</p>
               </div>
               <div className="w-16 h-16 bg-black text-yellow-500 rounded-full flex items-center justify-center group-hover:translate-x-4 transition-transform">
                  <ChevronRight size={32} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                <div className="w-10 h-10 bg-yellow-500 rounded flex items-center justify-center">
                  <Zap className="text-black" size={24} />
                </div>
                <span className="text-3xl font-black italic text-yellow-500 tracking-tighter">KING ESPORT</span>
              </div>
              <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em] max-w-xs">
                Membangun Legenda, Meraih Tahta. <br />King Esport © 2025
              </p>
            </div>

            <div className="flex gap-4">
               {[Instagram, Youtube, Twitter].map((Icon, i) => (
                 <a key={i} href="#" className="w-14 h-14 bg-zinc-900 flex items-center justify-center text-gray-500 hover:text-yellow-500 border border-zinc-800 hover:border-yellow-500 transition-all rounded-sm transform hover:-rotate-12">
                   <Icon size={24} />
                 </a>
               ))}
            </div>

            <div className="text-center md:text-right">
               <p className="text-[10px] font-black text-gray-700 uppercase tracking-widest mb-2 italic">Official Community Team</p>
               <div className="flex items-center gap-2 justify-center md:justify-end">
                  <span className="text-xs font-black text-white">ADMIN DESIGN GRAFIS: FIRMAN</span>
                  <div className="w-2 h-2 bg-yellow-500"></div>
               </div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
