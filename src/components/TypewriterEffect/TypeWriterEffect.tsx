/*
 * TypeWriterEffect.tsx
 * Author: Evan Kirkiles
 * Created on: Thu Oct 20 2022
 * © 2022 Yale Experiment Programmers' Organization
 */
import s from './TypeWriterEffect.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';

type TypeWriterEffectProps = {
  text: string;
  className?: string;
  typeSpeed?: number;
  startDelay?: number;
};

const TypeWriterEffect: React.FC<TypeWriterEffectProps> =
  function TypeWriterEffect({
    text: fullText,
    className,
    typeSpeed = 120,
    startDelay = 300,
  }) {
    // refs
    const textRef = useRef(null);

    // statefuls
    const [text, setText] = useState<string>('');
    const [blink, setBlink] = useState<boolean>(false);
    const [showCursor, setShowCursor] = useState<boolean>(false);

    // animation function
    const animation = useCallback(
      async (str: string) => {
        const textArr = str.trim().split('');
        setBlink(false);
        let _text = '';

        for (let char = 0; char < textArr.length; char++) {
          await new Promise((res) => setTimeout(res, typeSpeed));
          _text += textArr[char];
          setText(_text);
        }
        setBlink(true);
      },
      [setBlink, typeSpeed]
    );

    // begin animation on mount
    useEffect(() => {
      animation(fullText);
    }, [fullText, animation]);

    return (
      <div ref={textRef} className={className}>
        {'> '}
        {text}
        <div className={s.typewriter_pointer}>|</div>
      </div>
    );
  };

export default TypeWriterEffect;
