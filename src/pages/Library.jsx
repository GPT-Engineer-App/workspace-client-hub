import { Button } from "@/components/ui/button";
import { useState } from "react";

const Library = () => {
  const [files, setFiles] = useState([]);

  const handleUpload = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleDelete = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Library</h1>
      <div className="mb-6">
        <input type="file" multiple onChange={handleUpload} />
      </div>
      <div className="space-y-4">
        {files.map((file, index) => (
          <div key={index} className="flex items-center justify-between">
            <span>{file.name}</span>
            <Button variant="destructive" onClick={() => handleDelete(file.name)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;