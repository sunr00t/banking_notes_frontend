import React from "react";
import { useState } from "react";
import Accept from "./Accept";
import Wrong from "./Wrong";

export default function Form() {
	const [variance, setVariance] = useState("0.0000");
	const [curtosis, setCurtosis] = useState("0.0000");
	const [skewness, setSkewness] = useState("0.0000");
	const [entropy, setEntropy] = useState("0.0000");
	const [classification, setClassification] = useState(null);

	const handleSubmit = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		const payload = {
			variance,
			curtosis,
			skewness,
			entropy,
		};

		try {
			const config = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			};
			const response = await fetch("api/svm", config);
			const data = await response.json();
			setClassification(data.classification);
			console.log(data.classification);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="mt-8 max-w-md flex flex-col">
				<div className="variance">
					<label className="block text-white-700 text-lg">
						Variance
					</label>
					<input
						value={variance}
						onChange={e => setVariance(e.target.value)}
						type="number"
						className="my-3
                w-full
                rounded-md
                text-white
                bg-green-800
                hover:bg-green-900
                border border-green-600"
					/>
				</div>

				<div className="curtosis">
					<label className="text-white-700 text-lg">Curtosis</label>
					<input
						value={curtosis}
						onChange={e => setCurtosis(e.target.value)}
						type="number"
						name="curtosis"
						className="my-3
            w-full
            rounded-md
            text-white
            bg-green-800
            hover:bg-green-900
            border border-green-600"
					/>
				</div>

				<div className="skewness">
					<label className="text-white-700 text-lg">Skewness</label>
					<input
						value={skewness}
						onChange={e => setSkewness(e.target.value)}
						type="number"
						name="skewness"
						className="my-3
            w-full
            rounded-md
            text-white
            bg-green-800
            hover:bg-green-900
            border border-green-600"
					/>
				</div>

				<div className="entropy">
					<label className="text-white-700 text-lg">Entropy</label>
					<input
						value={entropy}
						onChange={e => setEntropy(e.target.value)}
						type="number"
						name="entropy"
						className="my-3
            w-full
            rounded-md
            text-white
            bg-green-800
            hover:bg-green-900
            border border-green-600"
					/>
				</div>

				<div className="mt-4">
					<button
						type="submit"
						className="mb-6
              bg-green-800 
              hover:bg-green-700 
              text-white 
              font-bold 
              py-2 px-4 
              rounded border 
              border-green-600
              text-lg"
					>
						Classificar
					</button>
				</div>
			</div>

			<div className="flex justify-center h-20">
				{classification !== null &&
					(classification ? <Accept /> : <Wrong />)}
			</div>
		</form>
	);
}
