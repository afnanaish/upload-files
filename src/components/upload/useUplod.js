import { useState, useRef } from 'react';

const useUpload = () => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const onChangeFile = (event) => {
    const fileList = event.target.files;
    const newFiles = Array.from(fileList);
    setFiles(newFiles);
  };

  const onClickUplodeFiles = () => {
    fileInputRef.current.click();
  };

  return {
    files,
    fileInputRef,
    onChangeFile,
    onClickUplodeFiles
  };
};

export  {useUpload};
