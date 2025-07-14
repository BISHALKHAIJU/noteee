import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Share2, Download, Users } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-purple-100 via-pink-100 to-pink-200 text-gray-800">
      
      
      <section className="relative py-28 px-4 text-center">
        <div className="max-w-7xl mx-auto animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              NoteNest
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6">
            Store. Share. Study Smarter.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            A powerful platform for students to share, discover, and access class notes.
            Collaborate and never miss out on essential materials again.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/signup"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transform transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-50 transition shadow-md"
            >
              Log In
            </Link>
          </div>
        </div>
      </section>

      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose NoteNest?</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Streamline your study process with our comprehensive note-sharing platform.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-white" />,
                title: 'Organized Storage',
                color: 'from-purple-400 to-purple-600',
                description: 'Keep all your notes organized by subject and easily accessible whenever you need them.'
              },
              {
                icon: <Share2 className="h-8 w-8 text-white" />,
                title: 'Easy Sharing',
                color: 'from-pink-400 to-pink-600',
                description: 'Share notes with classmates or keep them private. Help others and build your reputation.'
              },
              {
                icon: <Download className="h-8 w-8 text-white" />,
                title: 'Quick Downloads',
                color: 'from-indigo-400 to-indigo-600',
                description: 'Download notes instantly in PDF format. Study offline without worries.'
              },
              {
                icon: <Users className="h-8 w-8 text-white" />,
                title: 'Community Learning',
                color: 'from-fuchsia-400 to-fuchsia-600',
                description: 'Join a student community that supports success through shared knowledge.'
              },
              {
                icon: <BookOpen className="h-8 w-8 text-white" />,
                title: 'Subject Organization',
                color: 'from-rose-400 to-rose-600',
                description: 'Search and filter notes by subject for fast access to the right material.'
              },
              {
                icon: <Share2 className="h-8 w-8 text-white" />,
                title: 'Privacy Control',
                color: 'from-violet-400 to-violet-600',
                description: 'Choose who sees your notes. Share with the world or keep it private.'
              },
            ].map(({ icon, title, color, description }, i) => (
              <div
                key={i}
                className={`bg-white/30 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition`}
              >
                <div className={`bg-gradient-to-br ${color} p-3 rounded-lg w-fit mb-4 shadow-md`}>
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Study Experience?
          </h2>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto mb-8">
            Join thousands of students already using NoteNest to study smarter—not harder.
          </p>
          <Link
            to="/signup"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-50 transition shadow-lg hover:shadow-2xl"
          >
            Start Sharing Today
          </Link>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
