import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDropzone } from "react-dropzone";

const Library = () => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  const handleDelete = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Library</h1>
      <div
        {...getRootProps()}
        className={`p-6 border-2 border-dashed rounded-lg mb-6 ${
          isDragActive ? "border-blue-500" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {files.map((file, index) => (
          <Card key={index} className="relative">
            <CardHeader>
              <CardTitle>{file.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
              <Button
                variant="destructive"
                onClick={() => handleDelete(file.name)}
                className="absolute top-2 right-2"
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Library;