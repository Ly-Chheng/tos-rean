import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import InputError from "@/components/InputError";
import { X } from "lucide-react";

const ImageDropzone = ({
  onFileChange,
  value,
  error,
  initialPreview = null,
  maxFiles = 1,
  accept = {
    "image/png": [".png"],
    "image/jpeg": [".jpg", ".jpeg"],
    "application/pdf": [".pdf"],
  },
  onRemoveExisting,
}) => {
  const [previews, setPreviews] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [isRemoving, setIsRemoving] = useState(false);
  const [localInitialPreview, setLocalInitialPreview] = useState(initialPreview);

  useEffect(() => {
    setLocalInitialPreview(initialPreview);
  }, [initialPreview]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    maxFiles,
    maxSize: 50 * 1024 * 1024, // 50MB limit
    onDrop: (acceptedFiles, fileRejections) => {
      if (fileRejections.length > 0) {
        fileRejections.forEach((rejection) =>
          rejection.errors.forEach((error) =>
            console.error(`File ${rejection.file.name}: ${error.message}`)
          )
        );
      }
      const newFiles = maxFiles === 1 ? acceptedFiles.slice(0, 1) : acceptedFiles;
      const newPreviews = newFiles.map((file) => {
        if (file.type === "application/pdf") {
          return "/pdf-placeholder.png";
        }
        return URL.createObjectURL(file);
      });
      const newFileNames = newFiles.map((file) => file.name);

      if (maxFiles === 1) {
        setPreviews(newPreviews);
        setFileNames(newFileNames);
        setLocalInitialPreview(null);
        onFileChange(newFiles[0] || null);
      } else {
        const updatedFiles = value ? [...value, ...newFiles] : newFiles;
        const updatedPreviews = [
          ...(localInitialPreview || []),
          ...updatedFiles.map((file) =>
            file instanceof File
              ? file.type === "application/pdf"
                ? "/pdf-placeholder.png"
                : URL.createObjectURL(file)
              : file
          ),
        ];
        const updatedFileNames = [
          ...(localInitialPreview || []).map((url) => url.split("/").pop()),
          ...updatedFiles.map((file) => file.name || file.split("/").pop()),
        ];
        setPreviews(updatedPreviews);
        setFileNames(updatedFileNames);
        onFileChange(updatedFiles);
      }
    },
    onDragOver: (event) => event.preventDefault(),
    onDragEnter: (event) => event.preventDefault(),
  });

  useEffect(() => {
    if (isRemoving) return;

    let newPreviews = [];
    let newFileNames = [];

    if (localInitialPreview) {
      if (maxFiles === 1 && typeof localInitialPreview === "string") {
        newPreviews = [
          localInitialPreview.match(/\.pdf$/i) ? "/pdf-placeholder.png" : localInitialPreview,
        ];
        newFileNames = [localInitialPreview.split("/").pop()];
      } else if (Array.isArray(localInitialPreview) && localInitialPreview.length > 0) {
        newPreviews = localInitialPreview.map((url) =>
          url.match(/\.pdf$/i) ? "/pdf-placeholder.png" : url
        );
        newFileNames = localInitialPreview.map((url) => url.split("/").pop());
      }
    }

    if (value) {
      if (maxFiles === 1 && value instanceof File) {
        newPreviews = [
          value.type === "application/pdf" ? "/pdf-placeholder.png" : URL.createObjectURL(value),
        ];
        newFileNames = [value.name];
      } else if (maxFiles > 1 && Array.isArray(value) && value.length > 0) {
        const valuePreviews = value.map((file) =>
          file instanceof File
            ? file.type === "application/pdf"
              ? "/pdf-placeholder.png"
              : URL.createObjectURL(file)
            : file.match(/\.pdf$/i)
            ? "/pdf-placeholder.png"
            : file
        );
        const valueFileNames = value.map((file) => file.name || file.split("/").pop());
        newPreviews = [...newPreviews, ...valuePreviews];
        newFileNames = [...newFileNames, ...valueFileNames];
      }
    }

    setPreviews(newPreviews);
    setFileNames(newFileNames);
  }, [value, localInitialPreview, maxFiles, isRemoving]);

  useEffect(() => {
    return () => {
      previews.forEach((preview) => {
        if (preview && preview.startsWith("blob:")) {
          URL.revokeObjectURL(preview);
        }
      });
    };
  }, [previews]);

  const removeFile = (index, event) => {
    event.stopPropagation();
    setIsRemoving(true);

    const updatedPreviews = previews.filter((_, i) => i !== index);
    const updatedFileNames = fileNames.filter((_, i) => i !== index);

    let updatedFiles = maxFiles === 1 ? null : (Array.isArray(value) ? [...value] : []);

    if (index < (localInitialPreview?.length || 0)) {
      if (maxFiles === 1) {
        setLocalInitialPreview(null);
      } else {
        setLocalInitialPreview(localInitialPreview.filter((_, i) => i !== index));
      }
      if (onRemoveExisting) {
        const removedFile = previews[index].split("/").pop();
        onRemoveExisting(removedFile);
      }
    } else if (maxFiles > 1) {
      const valueIndex = index - (localInitialPreview?.length || 0);
      if (valueIndex >= 0 && Array.isArray(updatedFiles)) {
        updatedFiles = updatedFiles.filter((_, i) => i !== valueIndex);
      }
    }

    setPreviews(updatedPreviews);
    setFileNames(updatedFileNames);
    onFileChange(updatedFiles);

    if (previews[index]?.startsWith("blob:")) {
      URL.revokeObjectURL(previews[index]);
    }

    setTimeout(() => setIsRemoving(false), 0);
  };

  return (
    <div>
      <div
        {...getRootProps()}
        className={`mt-1 p-8 border-2 border-dashed rounded-md text-center ${
          isDragActive
            ? "border-emerald-500 bg-emerald-50"
            : "border-gray-300 dark:border-gray-600"
        }`}
      >
        <input {...getInputProps()} />
        {previews.length > 0 ? (
          <div
            className={`${
              maxFiles === 1
                ? "flex justify-center items-center"
                : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-start"
            }`}
          >
            {previews.map((preview, index) => (
              <div
                key={index}
                className={`relative w-full ${
                  maxFiles === 1 ? "max-w-xs mx-auto" : "max-w-full sm:max-w-[24rem]"
                } p-2`}
              >
                <img
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-auto max-h-40 object-contain rounded-md"
                />
                <p className="text-gray-700 dark:text-gray-200 mt-2 text-sm truncate max-w-full">
                  {fileNames[index]}
                </p>
                <button
                  type="button"
                  onClick={(event) => removeFile(index, event)}
                  className="absolute top-0 right-4 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                  aria-label="Remove file"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p className="text-gray-700 dark:text-gray-200">
              Drag & drop {maxFiles === 1 ? "a PDF or image" : "PDFs or images"} here, or click to select
            </p>
          </div>
        )}
      </div>
      {error && <InputError message={error} className="mt-2" />}
    </div>
  );
};

export default ImageDropzone;