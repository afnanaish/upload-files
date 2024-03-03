import React from 'react';
import {useUpload} from './useUplod';

const Upload = () => {
  const { files, fileInputRef, onChangeFile, onClickUplodeFiles } = useUpload();

  return (
    <div>
      <button onClick={onClickUplodeFiles}>Upload Files</button>
      <input
        type="file"
        multiple
        ref={fileInputRef}
        onChange={onChangeFile}
        style={{ display: 'none' }}
      />
      <div>
        {files.length > 0 && (
          <div>
            <h2>Uploaded Files:</h2>
            <ul>
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
            <p>Total number of files: {files.length}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export {Upload};
