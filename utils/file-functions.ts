const axios = require('axios');

export const uploadFile = async (files: any) => {
  const s3url = await fetch(`/api/upload-s3-image/?file=${files.name}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fileType: files.type }),
  }).then(res => res.json());

  //upload to s3
  const options = {
    headers: {
      'Content-Type': files.type,
      'Access-Control-Allow-Origin': '*',
    },
  };
  const response = await axios.put(s3url.url, files, options);
  return s3url;
};

export const deleteFile = async (file: any) => {
  const response = await fetch(`/api/delete-s3-image/?file=${file.filename}`, {
    method: 'GET',
  }).then(res => res.json());
};
