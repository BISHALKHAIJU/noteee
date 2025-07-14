import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, BookOpen, Users, FileText } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNotes } from '../context/NotesContext';
import NoteCard from '../component/NoteCard';

const Dashboard = () => {
  const { user } = useAuth();
  const { getUserNotes, getPublicNotes } = useNotes();

  const userNotes = getUserNotes(user?.id || '');
  const publicNotes = getPublicNotes().slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-pink-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 sm:p-10 mb-10 text-white shadow-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2">
            Welcome back, {user?.name} 👋
          </h1>
          <p className="text-pink-100 text-sm sm:text-base mb-5">
            Ready to share your knowledge or explore fresh notes?
          </p>
          <Link
            to="/upload"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold hover:bg-purple-50 hover:text-purple-700 transition-all shadow-md"
          >
            <Plus className="h-5 w-5" />
            <span>Share New Notes</span>
          </Link>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-12">
          {[
            {
              title: 'Your Notes',
              count: userNotes.length,
              icon: <FileText className="h-6 w-6 text-purple-600" />,
              bg: 'bg-purple-100',
            },
            {
              title: 'Public Notes',
              count: publicNotes.length,
              icon: <BookOpen className="h-6 w-6 text-pink-600" />,
              bg: 'bg-pink-100',
            },
            {
              title: 'Shared Notes',
              count: userNotes.filter(note => note.isPublic).length,
              icon: <Users className="h-6 w-6 text-fuchsia-600" />,
              bg: 'bg-fuchsia-100',
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-md hover:shadow-xl transition p-5 flex items-center"
            >
              <div className={`${stat.bg} p-3 rounded-xl shadow-inner`}>
                {stat.icon}
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-xl font-bold text-gray-900">{stat.count}</p>
              </div>
            </div>
          ))}
        </div>

        
        <section className="mb-12">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Your Notes</h2>
            <Link
              to="/upload"
              className="text-purple-600 hover:text-purple-800 font-medium text-sm sm:text-base transition"
            >
              + Add New Note
            </Link>
          </div>

          {userNotes.length === 0 ? (
            <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 text-center">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No notes yet</h3>
              <p className="text-gray-600 mb-6">Start your journey by uploading your first note.</p>
              <Link
                to="/upload"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition shadow-md"
              >
                <Plus className="h-5 w-5" />
                Upload Note
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {userNotes.map(note => (
                <NoteCard key={note.id} note={note} showUploader={false} />
              ))}
            </div>
          )}
        </section>

        <section>
          <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Recent Public Notes</h2>
            <Link
              to="/all-notes"
              className="text-purple-600 hover:text-purple-800 font-medium text-sm sm:text-base transition"
            >
              View All Notes →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {publicNotes.map(note => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
