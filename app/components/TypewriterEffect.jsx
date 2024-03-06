import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ types }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        if (index >= types.length) return;

        if (subIndex === types[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prevIndex) => (prevIndex + 1) % types.length);
            return;
        }

        const typingSpeed = reverse ? 75 : 150; // Speed up for deletion

        const typeTimeout = setTimeout(() => {
            setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
        }, typingSpeed);

        return () => clearTimeout(typeTimeout);

    }, [subIndex, index, reverse]);

    return (
        <span>
      {`${types[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
    </span>
    );
};

export default TypewriterEffect;
