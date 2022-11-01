declare const useDocCopy: (
  message: any,
  text?: any,
) => {
  setContent: import('react').Dispatch<any>;
  setCopy: () => void;
};
export default useDocCopy;
