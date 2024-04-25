import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Certificate() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-3 border border-gray-200 p-1 rounded-full text-sm hover:bg-gray-100 group">
        <span className="bg-primary py-0.5 px-2 rounded-full text-white group-hover:bg-[#0b3558]">
          New
        </span>
        <p> ISO-27001 Certification</p>
        <ArrowRight size={16} className="text-gray-500" />
      </div>
      <h3 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold text-[#0b3558] my-5">
        Built to keep your organization secure
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/7CgfGSU35z1d8KW50Z7RVf/bb21b5143c829f1ba5c466b75e08f1cd/Security-SOC.svg"
          alt="img1"
        />
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/438lMrSBKgnTeDLKMLKEoF/0593e9259a470e8c6d7527b61b4d2e42/Security-DSS.svg"
          alt="img2"
        />
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/5HqO62N0euqpUsf15k6OwT/be8fb24f0fc5c78b5797483daa3ad8ed/Security-GDPR.svg"
          alt="img2"
        />
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/JhVmIAFIySgktxYelNuwK/b479e76d350bde3b62394e7ee86952e1/Security-CCPA.svg"
          alt="img2"
        />
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/78FV1ztfCpTrnX8th78JP0/2cc579fd4fa57adc6856a3022ad7bebe/Security-Star.svg"
          alt="img2"
        />
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/4dQ1GKECtZ2SMn9R44eySA/0b663a82cbc8c24fe4d6805c02d9a7a0/Sercurity-ISO_27001.svg"
          alt="img2"
        />
      </div>
      <p className="leading-7 my-6 text-lg text-center text-muted-foreground">
        Keep your scheduling data secure with enterprise-grade admin management,
        security <br /> integrations, data governance, compliance audits, and
        privacy protections.
      </p>
      <Link
        to="/sale"
        className="text-primary text-lg tracking-normal leading-none flex justify-center items-center gap-3 hover:text-black hover:gap-5 transition-all duration-300 font-semibold"
      >
        Learn more
        <ArrowRight className="mt-1" />
      </Link>
    </div>
  );
}

export default Certificate;
