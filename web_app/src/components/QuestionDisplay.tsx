import React from 'react';

interface Props {
  question: string;
  isLoading?: boolean;
}

const QuestionDisplay: React.FC<Props> = ({ question, isLoading }) => {
  const playTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(question);
      utterance.lang = 'ko-KR';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div style={{
      background: '#f8f9fc',
      padding: '30px',
      borderRadius: '12px',
      margin: '20px 0',
      minHeight: '150px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderLeft: '5px solid #667eea'
    }}>
      <div style={{ width: '100%' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '15px',
          color: '#667eea',
          fontWeight: '600'
        }}>
          🎤 면접관 질문
          {!isLoading && (
            <button
              onClick={playTextToSpeech}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.2rem',
                marginLeft: 'auto'
              }}
              title="질문 듣기"
            >
              🔊
            </button>
          )}
        </div>
        {isLoading ? (
          <div style={{ textAlign: 'center', color: '#666', fontSize: '1.2rem' }}>
            다음 질문을 준비하고 있습니다...
          </div>
        ) : (
          <div style={{
            fontSize: '1.4rem',
            lineHeight: '1.6',
            color: '#333',
            textAlign: 'center',
            margin: '0',
            fontWeight: '500'
          }}>
            {question}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionDisplay;