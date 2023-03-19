import React, { useRef, useState, useEffect } from "react";

function IntersectionObserverComponent({
  children,
  firstClassName,
  secondClassName,
}) {
  const myRef = useRef();
  const [elementVisible, setElementVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setElementVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={myRef}>
      <div className={elementVisible ? firstClassName : secondClassName}>
        {children}
      </div>
    </div>
  );
}

export default IntersectionObserverComponent;
