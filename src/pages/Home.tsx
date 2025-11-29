import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative">
      <section 
        className="relative bg-cover bg-center bg-no-repeat h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white px-4"
        style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/e5395cc7-8609-4a6c-88e6-48d2edf54690/hero-banner-dke7tdo-1764404188187.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
            Reclaiming Our Digital Spaces. Together.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Amani Digital is a sanctuary for survivors of online harassment, offering tools, support, and resources to build a safer digital world for women and girls.
          </p>
          <Link 
            to="/survivor-support"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg"
          >
            Find Support Now
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              We are dedicated to ending digital violence and creating a supportive ecosystem for survivors. Through education, resource sharing, and advocacy, we empower individuals to protect their digital identity and foster healthier online interactions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}