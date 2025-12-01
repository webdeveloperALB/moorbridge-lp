export default function WhyChooseSection() {
  return (
    <section className="py-20 px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-8">
            <img
              src="/svg/3.svg"
              alt="Moorbidge Cyber"
              className="h-32 object-contain"
            />
          </div>

          <p className="text-2xl text-[#464d51] font-light max-w-5xl mx-auto normal-case">
            With years of experience in financial and digital asset recovery, Moorbridge is a trusted<br />
            leader in cryptocurrency retrieval.
          </p>
        </div>

        <div className="bg-[#172963] rounded-3xl p-16">
          <div className="grid grid-cols-3 gap-12">
            <div className="text-white">
              <h3 className="text-2xl font-normal mb-4 uppercase">Proven Success</h3>
              <p className="text-lg font-light leading-relaxed opacity-90 normal-case">
                We have successfully recovered crypto<br />
                for thousands of clients.
              </p>
            </div>

            <div className="text-white">
              <h3 className="text-2xl font-normal mb-4 uppercase">Fast & Secure</h3>
              <p className="text-lg font-light leading-relaxed opacity-90 normal-case">
                Our process is swift, encrypted,<br />
                and keeps your data protected.
              </p>
            </div>

            <div className="text-white">
              <h3 className="text-2xl font-normal mb-4 uppercase">No Win, No Fee</h3>
              <p className="text-lg font-light leading-relaxed opacity-90 normal-case">
                You won't pay anything unless we<br />
                successfully recover your funds.
              </p>
            </div>

            <div className="text-white">
              <h3 className="text-2xl font-normal mb-4 uppercase">Blockchain Experts</h3>
              <p className="text-lg font-light leading-relaxed opacity-90 normal-case">
                Our specialists use advanced tracing<br />
                to track lost crypto assets.
              </p>
            </div>

            <div className="text-white">
              <h3 className="text-2xl font-normal mb-4 uppercase">Legal & Ethical</h3>
              <p className="text-lg font-light leading-relaxed opacity-90 normal-case">
                We operate within legal frameworks<br />
                to ensure a safe recovery.
              </p>
            </div>

            <div className="text-white">
              <h3 className="text-2xl font-normal mb-4 uppercase">Est. 2016</h3>
              <p className="text-lg font-light leading-relaxed opacity-90 normal-case">
                Years of expertise in financial<br />
                and digital asset recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
