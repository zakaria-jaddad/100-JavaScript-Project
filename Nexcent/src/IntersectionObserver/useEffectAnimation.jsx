import { useEffect } from "react";

const useEffectAnimation = ({ myRef, setIsElementVisible }) => {
  useEffect(() => {
    let oneTimeAnimationCounter = 0;

    const observer = new IntersectionObserver((entries) => {
      // this codition should be executed 2 times in the loading, and in scroll triggers
      if (oneTimeAnimationCounter < 2) {
        const entry = entries[0];
        setIsElementVisible(entry.isIntersecting);
        oneTimeAnimationCounter++;
      }
    });
    observer.observe(myRef.current);
  }, []);
};

export default useEffectAnimation;
