import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNotes } from '../context/NotesContext';

const DeleteNotePage = () => {
  const { user } = useAuth();
  const { notes, deleteNote } = useNotes();
  const navigate = useNavigate();

  const [selectedNoteId, setSelectedNoteId] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Filter notes uploaded by the logged-in user
  const userNotes = notes.filter(note => note.uploadedBy === user?.id);

  const handleDelete = async (e) => {
    e.preventDefault();
    setError('');

    if (!selectedNoteId) {
      setError('Please select a note to delete.');
      return;
    }

    const confirmDelete = window.confirm('Are you sure you want to delete this note? This action cannot be undone.');
    if (!confirmDelete) return;

    setIsLoading(true);
    try {
      await deleteNote(selectedNoteId);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to delete note. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Delete Your Note</h1>
            <p className="text-gray-600">
              Select a note you want to remove permanently from your collection.
            </p>
          </div>

          <form onSubmit={handleDelete} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-2">
                Select Note to Delete *
              </label>
              <select
                id="note"
                value={selectedNoteId}
                onChange={(e) => setSelectedNoteId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="">-- Select a note --</option>
                {userNotes.length === 0 ? (
                  <option disabled>No notes found</option>
                ) : (
                  userNotes.map(note => (
                    <option key={note.id} value={note.id}>
                      {note.title} ({note.subject})
                    </option>
                  ))
                )}
              </select>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={isLoading || userNotes.length === 0}
                className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                {isLoading ? 'Deleting...' : (
                  <>
                    <Trash2 className="h-5 w-5" />
                    <span>Delete Note</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteNotePage;
