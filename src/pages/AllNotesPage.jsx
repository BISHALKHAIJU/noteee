import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNotes } from '../context/NotesContext';
import NoteCard from '../component/NoteCard';

const AllNotesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [subjectQuery, setSubjectQuery] = useState('');
  const { searchNotes } = useNotes();

  const filteredNotes = searchNotes(searchQuery, subjectQuery || undefined);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-pink-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Discover Notes</h1>
          <p className="text-lg text-gray-600">
            Explore notes shared by your fellow students across all subjects
          </p>
        </div>

        
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 mb-10">
          <div className="flex flex-col lg:flex-row gap-4">
            
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search notes by title or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>

            
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type subject (e.g., Mathematics)"
                  value={subjectQuery}
                  onChange={(e) => setSubjectQuery(e.target.value)}
                  className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>
          </div>
        </div>

        
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredNotes.length} {filteredNotes.length === 1 ? 'note' : 'notes'} found
            {subjectQuery && ` in "${subjectQuery}"`}
          </p>
        </div>

        
        {filteredNotes.length === 0 ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No notes found</h3>
              <p className="text-gray-600">
                {searchQuery || subjectQuery
                  ? 'Try adjusting your search or subject filter'
                  : 'Be the first to share notes with the community!'}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllNotesPage;
