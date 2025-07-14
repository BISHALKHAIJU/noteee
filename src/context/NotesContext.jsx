import React, { createContext, useContext, useState, useEffect } from 'react';

const NotesContext = createContext(undefined);

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem('noteNestNotes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const addNote = (note) => {
    const newNote = {
      ...note,
      id: Date.now().toString(),
      uploadDate: new Date().toISOString().split('T')[0]
    };
    
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem('noteNestNotes', JSON.stringify(updatedNotes));
  };

  const getPublicNotes = () => {
    return notes.filter(note => note.isPublic);
  };

  const getUserNotes = (userId) => {
    return notes.filter(note => note.uploadedBy === userId);
  };

  const searchNotes = (query, subject) => {
    return notes.filter(note => {
      const matchesQuery = query === '' || 
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.description.toLowerCase().includes(query.toLowerCase());
      
      const matchesSubject = !subject || subject === 'All' || note.subject === subject;
      
      return matchesQuery && matchesSubject && note.isPublic;
    });
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, getPublicNotes, getUserNotes, searchNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
