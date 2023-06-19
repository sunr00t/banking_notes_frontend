import React from 'react';
import { useState } from 'react';

export default function Form() {
  const [variance, setVariance] = useState(0);
  const [curtosis, setCurtosis] = useState(0);
  const [skewness, setSkewness] = useState(0);
  const [entropy, setEntropy] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { 
      variance,
      curtosis,
      skewness,
      entropy
    }
    console.log(payload)
    
    try {
      // Envie os dados do formulário para a API usando fetch
      const response = await fetch('/api/svm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log(response.json);
        ;
      } else {
        console.log('else');
        
      }
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="mt-8 max-w-md">
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-white-700">Variance</span>
              <input
                value={variance}
                onChange={e => setVariance(e.target.value)}
                type="number"
                className="mt-3
                block
                w-full
                rounded-md
                text-white
                hover: bg-green-800 font-medium transition
                border-transparent
                border border-green-600"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-white-700">Curtosis</span>
              <input
                value={curtosis}
                onChange={e => setCurtosis(e.target.value)}
                type="number"
                name="curtosis"
                className="mt-3
                block
                w-full
                rounded-md
                text-white
                hover: bg-green-800 font-medium transition
                border-transparent
                border border-green-600"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-white-700">Skewness</span>
              <input
                value={skewness}
                onChange={e => setSkewness(e.target.value)}
                type="number"
                name="skewness"
                className="mt-3
                block
                w-full
                rounded-md
                text-white
                hover: bg-green-800 font-medium transition
                border-transparent
                border border-green-600"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-white-700">Entropy</span>
              <input
                value={entropy}
                onChange={e => setEntropy(e.target.value)}
                type="number"
                name="entropy"
                className="mt-3
                block
                w-full
                rounded-md
                text-white
                hover: bg-green-800 font-medium transition
                border-transparent
                border border-green-600"
              />
            </label>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="mt-3
              bg-green-800 
              hover:bg-green-700 
              text-white 
              font-bold 
              py-2 px-4 
              rounded border 
              border-green-600"
            >
              Classificar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
