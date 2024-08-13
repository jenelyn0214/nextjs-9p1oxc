import Head from 'next/head';
import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [borderColor, setBorderColor] = useState('#eeeeee');
  const dropZoneRef = useRef(null);

  const handleDragEnter = (e) => {
    setBorderColor('#00e676');
  };

  const handleDragLeave = (e) => {
    const rect = dropZoneRef.current.getBoundingClientRect();
    const inDropZone =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (!inDropZone) {
      setBorderColor('#2196f3');
    } else {
      setBorderColor('#00e676');
    }
  };

  const handleDrop = (e) => {
    setBorderColor('#eeeeee');
    const files = e.dataTransfer.files;
    console.log(files);
  };

  const handleClick = () => {
    setBorderColor('#2196f3');
    document.getElementById('fileInput').click();
  };

  const handleOutsideClick = (event) => {
    if (dropZoneRef.current && !dropZoneRef.current.contains(event.target)) {
      setBorderColor('#eeeeee');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>LUMOS Code Interview</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello!</h1>

        <h2 className={styles.uploadTitle}>Upload your files here</h2>

        <div>
          <div
            ref={dropZoneRef}
            onClick={handleClick}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDragLeave}
            className={styles.fileUpload}
            style={{
              border: `2px dashed ${borderColor}`,
            }}
          >
            <p>Drag 'n' drop some files here, or click to select files</p>
            <input
              accept="image/*"
              id="fileInput"
              multiple
              type="file"
              style={{ display: 'none' }}
              tabindex="-1"
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created by&nbsp;<b>LUMOS</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
