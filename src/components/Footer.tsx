import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {currentYear} Amani Digital. All Rights Reserved.</p>
        <p className="mt-2 text-sm text-gray-400">Working to make digital spaces safer for everyone.</p>
      </div>
    </footer>
  );
}