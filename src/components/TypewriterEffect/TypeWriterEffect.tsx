/*
 * TypeWriterEffect.tsx
 * Author: Evan Kirkiles
 * Created on: Thu Oct 20 2022
 * © 2022 Yale Experiment Programmers' Organization
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';

type TypeWriterEffectProps = {
  text: string | string[];
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
    const [text, setText] = useState<string[]>(['']);

    // animation function
    const animation = useCallback(
      async (strs: string[]) => {
        const _text: string[] = [];
        for (let i = 0; i < strs.length; i++) {
          _text.push('');
          await new Promise((res) => setTimeout(res, startDelay));
          const textArr = strs[i].trim().split('');

          for (let char = 0; char < textArr.length; char++) {
            await new Promise((res) => setTimeout(res, typeSpeed));
            _text[i] += textArr[char];
            setText([..._text]);
          }
        }
      },
      [startDelay, typeSpeed]
    );

    // begin animation on mount
    useEffect(() => {
      if (typeof fullText !== 'string') {
        animation(fullText);
      } else {
        animation([fullText]);
      }
    }, [fullText, animation]);

    return (
      <div ref={textRef} className={className}>
        {text.map((txt, i) => (
          <React.Fragment key={i}>
            {`[yepo@WuTsai ~]$ ${txt}`}
            {i !== text.length - 1 ? <br /> : null}
          </React.Fragment>
        ))}
        <div className="TypewriterEffect__pointer">|</div>
      </div>
    );
  };

export default TypeWriterEffect;
