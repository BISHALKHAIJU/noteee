import React from 'react';
import { BookOpen, Users, Share2, Download, Globe, Lock, Upload } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-pink-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About NoteNest</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Empowering students to share knowledge and collaborate through seamless note sharing.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              NoteNest helps students collaborate by sharing notes and learning materials easily.
              We believe that knowledge should be accessible to everyone, and that students learn best
              when they can share their insights and perspectives with each other.
            </p>
            <div className="flex justify-center">
              <div className="flex items-center space-x-2 text-blue-600">
                <BookOpen className="h-6 w-6" />
                <span className="text-lg font-semibold">Store. Share. Study Smarter.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">How NoteNest Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              icon: <Upload className="h-8 w-8 text-blue-600" />, bg: 'bg-blue-100', title: 'Upload Notes',
              desc: 'Easily upload your study notes in PDF format with detailed descriptions and subject categorization.'
            }, {
              icon: <Share2 className="h-8 w-8 text-green-600" />, bg: 'bg-green-100', title: 'Share Knowledge',
              desc: 'Choose to make your notes public to help others or keep them private for personal use.'
            }, {
              icon: <Download className="h-8 w-8 text-purple-600" />, bg: 'bg-purple-100', title: 'Download & Study',
              desc: 'Access and download notes from fellow students to enhance your learning experience.'
            }].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className={`${item.bg} p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[{
              icon: <Globe className="h-6 w-6 text-blue-600 mr-3" />, title: 'Public & Private Notes',
              desc: 'Control your note visibility. Share publicly to help the community or keep notes private for personal study.'
            }, {
              icon: <BookOpen className="h-6 w-6 text-green-600 mr-3" />, title: 'Subject Organization',
              desc: 'Organize notes by subject and use powerful search and filter tools to find exactly what you need.'
            }, {
              icon: <Users className="h-6 w-6 text-purple-600 mr-3" />, title: 'Community Driven',
              desc: 'Join a community of students helping each other succeed through collaborative learning.'
            }, {
              icon: <Lock className="h-6 w-6 text-red-600 mr-3" />, title: 'Secure & Reliable',
              desc: 'Your notes are stored securely with user authentication and privacy controls you can trust.'
            }].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow p-6">
                <div className="flex items-center mb-4">{feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Join thousands of students already using NoteNest to improve their studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Create Account
            </a>
            <a
              href="/all-notes"
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Browse Notes
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
