import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { X } from "lucide-react";

const VideoDropzone = ({ onFileChange, value, error, initialPreview }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        onFileChange(file);
      }
    },
    [onFileChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "video/mp4": [".mp4"],
      "video/mpeg": [".mpeg"],
      "video/webm": [".webm"],
    },
    maxFiles: 1,
    maxSize: 100000000,
  });

  const removeFile = () => {
    onFileChange(null);
  };

  return (
    <div className="w-full">
      {(initialPreview || value) && (
        <div className="mt-2 mb-4">
          {value ? (
            <video
              src={URL.createObjectURL(value)}
              controls
              className="h-40 w-full object-contain rounded-md"
            />
          ) : initialPreview ? (
            <video
              src={initialPreview}
              controls
              className="h-40 w-full object-contain rounded-md"
            />
          ) : null}
        </div>
      )}

      <div
        {...getRootProps()}
        className={`border-2 h-24 flex justify-center items-center border-dashed rounded-md p-4 text-center cursor-pointer ${
          isDragActive ? "border-indigo-500 bg-indigo-50" : "border-gray-300"
        } ${error ? "border-red-500" : ""}`}
      >
        <input {...getInputProps()} />
        {value ? (
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300 truncate">
              {value.name}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeFile();
              }}
              className="text-red-500 hover:text-red-700"
            >
              <X size={20} />
            </button>
          </div>
        ) : isDragActive ? (
          <p className="text-indigo-500">Drop the video here...</p>
        ) : (
          <p className="text-gray-700 dark:text-gray-200">
            Drag & drop a video here, or click to select one
          </p>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default VideoDropzone;