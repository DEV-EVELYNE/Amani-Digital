import { Lock, Fingerprint, ShieldAlert, Wrench } from 'lucide-react';

const SafetyTools = () => {
  const tools = [
    {
      icon: <Lock className="w-12 h-12 text-blue-600" />,
      title: 'Strong Password & 2FA',
      description: 'Your first line of defense. Use a password manager to create and store unique, complex passwords for every account. Enable Two-Factor Authentication (2FA) wherever possible to add a critical layer of security.',
      link: 'https://safety.google/intl/en_us/authentication/',
      linkText: 'Improve password security'
    },
    {
      icon: <Fingerprint className="w-12 h-12 text-teal-500" />,
      title: 'Manage Your Digital Footprint',
      description: 'Regularly review your privacy settings on social media and other online accounts. Be mindful of what you share and with whom. A smaller digital footprint is harder to target. We guide you through auditing your public presence.',
      link: 'https://ssd.eff.org/en/module/your-security-plan',
      linkText: 'Audit your privacy settings'
    },
    {
      icon: <ShieldAlert className="w-12 h-12 text-red-500" />,
      title: 'Recognize & Avoid Phishing Scams',
      description: 'Learn to spot malicious emails, texts, and messages designed to steal your information. We provide examples of common scams and teach you the red flags to look for, such as urgent requests and suspicious links.',
      link: 'https://www.consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams',
      linkText: 'Learn to spot phishing'
    },
    {
      icon: <Wrench className="w-12 h-12 text-orange-500" />,
      title: 'Essential Security Software',
      description: 'From Virtual Private Networks (VPNs) that anonymize your connection to reliable antivirus software, using the right tools can significantly enhance your digital safety. Explore our curated list of recommended tools.',
      link: 'https://www.pcmag.com/categories/security',
      linkText: 'Explore recommended tools'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Your Digital Safety Toolkit</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Practical tools and guides to help you secure your digital identity and navigate the online world with confidence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start">
                <div className="mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{tool.title}</h3>
                <p className="text-gray-600 flex-grow mb-4">{tool.description}</p>
                <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                  {tool.linkText} &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SafetyTools;
