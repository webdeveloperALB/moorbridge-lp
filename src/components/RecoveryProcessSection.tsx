export default function RecoveryProcessSection() {
  return (
    <section className="mt-8 w-full">
      <div className="w-full bg-white py-16 px-12 flex items-center gap-12">
        
        {/* LEFT SIDE - IMAGE */}
        <div className="flex-1 flex justify-start pl-12">
          <img
            src="/png/Artboard 5.png"
            alt="Recovery Process"
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* RIGHT SIDE - WIDER COLUMN */}
        <div className="flex-[2] w-full">
          <h2 className="text-4xl md:text-5xl font-light text-[#172963] mb-8 leading-tight uppercase text-right">
            Swift and secure recovery<br />
            process
          </h2>

          <p className="block w-full max-w-full text-2xl text-[#464d51] font-light leading-relaxed text-right m-0">
            Understanding the urgency of accessing your funds,<br />
            Moorbridge offers a streamlined recovery process designed<br />
            for efficiency and security.<br />
            From initial consultation to the successful return of your<br />
            assets, we prioritise prompt action while maintaining the<br />
            highest standards of data protection.
          </p>
        </div>

      </div>
    </section>
  );
}
