import React from 'react';
import { useState } from 'react';
import Accept from './Accept';
import Wrong from './Wrong';

export default function Form() {
  const [variance, setVariance] = useState('0.0000');
  const [curtosis, setCurtosis] = useState('0.0000');
  const [skewness, setSkewness] = useState('0.0000');
  const [entropy, setEntropy] = useState('0.0000');
  const [classification, setClassification] = useState(null);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const payload = {
      variance,
      curtosis,
      skewness,
      entropy,
    };
    console.log(payload);

    try {
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      };
      const response = await fetch('api/svm', config);
      const data = await response.json();
      setClassification(data.classification);
      console.log(data.classification);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-8 max-w-md">
        <div className="grid grid-cols-1 gap-6 pb-4">
          <label className="block">
            <span className="text-white-700">Variance</span>
            <input
              value={variance}
              onChange={(e) => setVariance(e.target.value)}
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
        <div className="grid grid-cols-1 gap-6 pb-4">
          <label className="block">
            <span className="text-white-700">Curtosis</span>
            <input
              value={curtosis}
              onChange={(e) => setCurtosis(e.target.value)}
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
        <div className="grid grid-cols-1 gap-6 pb-4">
            <label className="block">
              <span className="text-white-700">Skewness</span>
              <input
                value={skewness}
                onChange={(e) => setSkewness(e.target.value)}
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
        <div className="grid grid-cols-1 gap-6 pb-4">
          <label className="block">
            <span className="text-white-700">Entropy</span>
            <input
              value={entropy}
              onChange={(e) => setEntropy(e.target.value)}
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
      <div className="flex justify-center">
        <div className={classification == 1 ? 'visible' : 'invisible'}>
          <Accept />
        </div>
        <div className={classification == 0 ? 'visible' : 'invisible'}>
          <Wrong />
        </div>
      </div>
    </form>
  );
}
