import { useState } from "react";
import { Note } from "./Note";

export const NoteField = () => {
  const [note, setNote] = useState<string>("");
  const [notes, setNotes] = useState<string[]>([]);

  const handleSaveNote = () => {
    setNotes([...notes, note]);
    setNote("");
  };

  return (
    <div className="max-w-[50%] flex items-center justify-between flex-col gap-3">
      <div className="h-52 max-h-[50%] w-full overflow-y-auto">
        <div className="flex flex-col gap-2">
          {notes.map((note, index) => (
            <Note key={index} text={note} />
          ))}
        </div>
      </div>
      <textarea
        className="border-2 border-black w-full  py-1 px-3 resize overflow-auto rounded-md"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md"
        onClick={handleSaveNote}
      >
        Save Note
      </button>
    </div>
  );
};
