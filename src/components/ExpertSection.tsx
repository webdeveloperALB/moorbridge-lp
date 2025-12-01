export default function ExpertSection() {
  return (
    <section className="mt-8">
      <div className="flex">
        <div className="w-[97%] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-16 px-12 pl-16 flex items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-light text-[#172963] mb-8 leading-tight uppercase">
              Expert cryptocurrency<br />
              recovery solutions
            </h2>

            <p className="text-xl text-[#464d51] font-light leading-relaxed normal-case">
              At Moorbridge, our seasoned professionals specialise<br />
              in retrieving lost or inaccessible cryptocurrencies.<br />
              Utilising advanced blockchain analysis and recovery<br />
              techniques, we have a proven track record of<br />
              successfully restoring digital assets for our clients.
            </p>
          </div>

          <div className="flex-1 flex justify-end pr-12">
            <img
              src="/svg/1.svg"
              alt="Cryptocurrency Security"
              className="w-full max-w-sm object-contain"
            />
          </div>
        </div>

        <div className="w-[3%] bg-white"></div>
      </div>
    </section>
  );
}
