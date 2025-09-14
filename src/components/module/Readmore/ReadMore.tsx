    import React, { useState } from 'react';

    interface ReadMoreTextProps {
      text: string;
      maxLength?: number;
    }

    const ReadMoreText: React.FC<ReadMoreTextProps> = ({ text, maxLength = 150 }) => {
      const [showFullText, setShowFullText] = useState(false);

      const truncatedText = text.slice(0, maxLength);
      const isLongText = text.length > maxLength;

      const toggleShowFullText = () => {
        setShowFullText(!showFullText);
      };

      return (
        <div>
          <p>
            {showFullText || !isLongText ? text : `${truncatedText}`}
            {isLongText && (
              <button onClick={toggleShowFullText} className='mr-3 font-bold text-[#182A20] underline hover:text-red transition-all duration-200 ease-in cursor-pointer'>
                {showFullText ? 'نمایش کمتر' : 'نمایش بیشتر '}
              </button>
            )}
          </p>
        </div>
      );
    };

    export default ReadMoreText;
