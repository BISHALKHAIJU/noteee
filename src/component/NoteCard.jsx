import React from 'react';
import { Download, FileText, Calendar, User } from 'lucide-react';

const NoteCard = ({ note, showUploader }) => {
  const handleDownload = () => {
    if (note.fileUrl) {
      const link = document.createElement('a');
      link.href = note.fileUrl;
      link.setAttribute('download', note.fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('Download URL not found!');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col h-full">
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{note.title}</h3>
        </div>
        {!note.isPublic && (
          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Private</span>
        )}
      </div>

      
      <p className="text-gray-600 mb-4 line-clamp-3">{note.description}</p>

      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{note.subject}</span>
      </div>

      
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          {showUploader && (
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{note.uploaderName}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{note.uploadDate}</span>
          </div>
        </div>
      </div>

    
      <div className="mt-auto pt-4 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <span className="text-xs sm:text-sm text-gray-600 truncate">{note.fileName}</span>
        
        <div>
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 shadow-sm"
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
