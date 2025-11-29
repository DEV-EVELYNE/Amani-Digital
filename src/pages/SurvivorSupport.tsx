import React from 'react';
import SurvivorSupportChat from '../components/SurvivorSupportChat';

const supportCards = [
  {
    title: 'Solutions for Survivors',
    description: 'Access immediate resources and actionable steps to take if you are experiencing digital harm. We provide guides on reporting, evidence collection, and finding professional help.',
    iconUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e5395cc7-8609-4a6c-88e6-48d2edf54690/support-solutions-icon-kjq6tq2-1764404193483.webp',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-800',
  },
  {
    title: 'Preventing Abuse',
    description: 'Learn how to recognize and prevent online abuse. Our resources offer practical tips for creating safer online environments for yourself and your community.',
    iconUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e5395cc7-8609-4a6c-88e6-48d2edf54690/preventing-abuse-icon-i9fgxmo-1764404200562.webp',
    bgColor: 'bg-teal-100',
    textColor: 'text-teal-800',
  },
  {
    title: 'Securing Your Identity',
    description: 'Strengthen your digital security with our expert guides. Learn to protect your personal information, manage privacy settings, and secure your accounts against unauthorized access.',
    iconUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e5395cc7-8609-4a6c-88e6-48d2edf54690/securing-identity-icon-s72pekz-1764404206875.webp',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-800',
  },
  {
    title: 'Healthier Digital Interactions',
    description: 'Discover strategies for fostering positive and respectful online communication. We provide tools for conflict resolution and promoting empathy in digital spaces.',
    iconUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e5395cc7-8609-4a6c-88e6-48d2edf54690/healthier-interactions-icon-zw5u3fw-1764404212827.webp',
    bgColor: 'bg-coral-100',
    textColor: 'text-coral-800',
  },
];

const SurvivorSupportCard = ({ title, description, iconUrl, bgColor, textColor }) => (
  <div className={`rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 duration-300 ${bgColor}`}>
    <img src={iconUrl} alt={`${title} icon`} className="h-24 w-24 mb-6" />
    <h3 className={`text-2xl font-bold mb-3 ${textColor}`}>{title}</h3>
    <p className={`text-base ${textColor} opacity-90`}>{description}</p>
  </div>
);

export default function SurvivorSupport() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Survivor Support Hub</h1>
          <p className="text-lg text-gray-600">
            A safe space designed with empathy. Find clear, actionable steps and resources to help you navigate and heal from digital harm.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportCards.map((card) => (
            <SurvivorSupportCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-24">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Need Immediate Assistance?</h2>
                <p className="text-lg text-gray-600">
                    Use our confidential chat to ask questions and get immediate, automated guidance based on our resources. Your privacy is our priority.
                </p>
            </div>
            <SurvivorSupportChat />
        </div>
      </div>
    </div>
  );
}