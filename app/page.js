// Franco Aparicio
// 1009114897
// aparic14

export default function Home() {
  return (
    <div className="w-[1769px] h-[1151px] relative bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden">
      {/* Header Navigation */}
      <header className="flex items-center justify-between px-12 py-6">
        <nav className="flex space-x-8">
          <a className="text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']" href="#">
            Home
          </a>
          <a className="text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']" href="#">
            About
          </a>
          <a className="text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']" href="#">
            Gallery
          </a>
          <a className="text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']" href="#">
            Meme Info
          </a>
          <a className="text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']" href="#">
            Contact
          </a>
        </nav>
        <button className="bg-[#eaecd7] text-[#db4439] rounded-full px-4 py-2 text-base font-black font-['Inknut_Antiqua']">
          Learn More
        </button>
      </header>

      {/* Rotated Chill Guy Meme Image */}
      <div className="origin-top-left rotate-[-6.64deg] w-[543px] h-[500px] left-[900.69px] top-[226px] absolute">
        <div className="w-[543px] h-[590.40px] left-[88.69px] top-0 absolute" />
        <img
          className="w-[543px] h-[590.40px] left-[88.69px] top-[57.62px] absolute"
          src="Chill_guy.jpg"
          alt="Chill Guy Meme"
        />
      </div>

      {/* Main Headline */}
      <div className="w-[680px] left-[143px] top-[313px] absolute justify-start text-[#eaecd7] text-[110px] font-black font-['Inknut_Antiqua'] leading-[134.20px]">
        CHILL GUY MEME
      </div>

      {/* Tagline */}
      <div className="w-[680px] left-[148px] top-[740px] absolute justify-start text-[#eaecd7] text-[40px] font-semibold font-['Inknut_Antiqua'] leading-[48.80px]">
        Embrace the chill vibe.
      </div>

      {/* Footer */}
      <div className="w-[1804px] h-[102px] left-[-35px] top-[1049px] absolute bg-white" />
      <div className="left-[124px] top-[1063px] absolute justify-start text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">
        Chill Guy Meme :D
      </div>
      <div className="left-[459px] top-[1063px] absolute justify-start text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">
        Privacy Policy
      </div>
      <div className="left-[794px] top-[1063px] absolute justify-start text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">
        Terms of Service
      </div>
      <div className="left-[1129px] top-[1063px] absolute justify-start text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">
        Support
      </div>
      <div className="left-[1464px] top-[1063px] absolute justify-start text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">
        Follow Us
      </div>
    </div>
  );
}