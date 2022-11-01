import { useState, useCallback } from 'react';

const useDocCopy = (message: any, text?: any) => {
  const [content, setContent] = useState(text ?? '');

  return {
    setContent,
    setCopy: useCallback(() => {
      const textarea = document.createElement('textarea');
      document.body.appendChild(textarea);
      textarea.style.position = 'absolute';
      textarea.style.clip = 'rect(0 0 0 0)';
      textarea.value = content;

      textarea?.select?.();
      document.execCommand('copy');
      message?.success?.('复制成功');
      textarea?.remove?.();
    }, [content]),
  };
};

export default useDocCopy;
