export default function Form() {
  return (
    <form action="">
      <div>
        <div className="mt-8 max-w-md">
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-white-700">Variance</span>
              <input
                type="text"
                className="mt-3
                block
                w-full
                rounded-md
                text-white
                hover: bg-green-800 font-medium transition
                border-transparent
                border border-green-600"
                placeholder=""
              />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-white-700">Curtosis</span>
              <input
                type="text"
                className="mt-3
                block
                w-full
                rounded-md
                text-white
                hover: bg-green-800 font-medium transition
                border-transparent
                border border-green-600"
                placeholder=""
              />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-white-700">Skewness</span>
              <input
                type="text"
                className="mt-3
                block
                w-full
                rounded-md
                text-white
                hover: bg-green-800 font-medium transition
                border-transparent
                border border-green-600"
                placeholder=""
              />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-white-700">Entropy</span>
              <input
                type="text"
                className="mt-3
                block
                w-full
                rounded-md
                text-white
                hover: bg-green-800 font-medium transition
                border-transparent
                border border-green-600"
                placeholder=""
              />
            </label>
          </div>
          <div className="mt-4">
            <button className="MT-2 bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded border border-green-600">
              Classificar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
