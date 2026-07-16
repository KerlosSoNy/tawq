'use client'
import { useEffect } from 'react';

export default function ConsoleSilencer() {
  useEffect(() => {
      document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
      });
      document.addEventListener('contextmenu', function(event:any) {
        if (event.target.tagName === 'IMG') {
          event.preventDefault();
        }
      });
      document.addEventListener('keydown', function (e) {
          if (
              e.keyCode === 123 || // F12
              (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
              (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
              (e.ctrlKey && e.keyCode === 85) // Ctrl+U
          ) {
              e.preventDefault();
          }
      });
      console.log = () => {};
      console.warn = () => {};
      console.info = () => {};
      console.debug = () => {};
      console.error = () => {};
  }, []);
  return null;
}