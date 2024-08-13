// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { getApps, initializeApp } = require('firebase/app');
const { readFileSync } = require('node:fs');

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default (req, res) => {
  const firebaseApps = getApps();
  if (!firebaseApps.length) {
    initializeApp(firebaseConfig);
  }

  // Parse the request here and upload it on the firebase storage
  res.status(200).json({ name: 'Hello, world!' });
};
