import { ShieldCheck, Users, Heart, BookOpen } from 'lucide-react';

const PreventionResources = () => {
  const resources = [
    {
      icon: <BookOpen className="w-12 h-12 text-purple-600" />,
      title: 'Educate Yourself on Digital Abuse',
      description: 'Knowledge is the first step to prevention. Understand what constitutes digital abuse, from monitoring your online activity to sending harassing messages. Recognizing the signs protects you and others.',
      link: 'https://www.unwomen.org/en/what-we-do/ending-violence-against-women/faqs/virtual-and-digital-violence',
      linkText: 'Learn the signs'
    },
    {
      icon: <Heart className="w-12 h-12 text-pink-500" />,
      title: 'Promote Healthy Online Relationships',
      description: 'Foster relationships built on trust and respect, both online and off. Healthy digital communication involves respecting boundaries, privacy, and consent. Encourage open conversations about online interactions with friends and partners.',
      link: 'https://www.thehotline.org/resources/healthy-relationships/',
      linkText: 'Communication tips'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: 'Community and Bystander Intervention',
      description: 'If you see something, say something. Learn how to safely support someone who may be experiencing digital abuse. Your intervention can make a significant difference. Be an ally for safety and respect in online communities.',
      link: 'https://cyberbullying.org/bystander-intervention-in-cyberbullying',
      linkText: 'How to help others'
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-green-500" />,
      title: 'Set Digital Boundaries',
      description: 'You have the right to control your own digital space. This includes who can see your posts, who can contact you, and when you are available. Learn to set firm boundaries on social media and messaging apps.',
      link: 'https://www.digitalrightscharter.org/your-rights',
      linkText: 'Set your boundaries'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Empowerment Through Knowledge</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Actionable advice and resources to help you prevent digital abuse and foster a safer online environment for everyone.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start">
                <div className="mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{resource.title}</h3>
                <p className="text-gray-600 flex-grow mb-4">{resource.description}</p>
                <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 font-semibold hover:underline">
                  {resource.linkText} &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PreventionResources;
