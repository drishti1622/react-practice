import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";

function App() {
  const [length, setLength] = useState(18);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    //usecallback for optimization ,memorize krta h mtlb cache m store 
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$&*%";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 31);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    //useeffect for password m thdi si bhi ched chad h to use dubara call krdo
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className=" w-full max-w-xl mx-auto shadow-md rounded-lg px-4 my-8 text-black bg-white ">
          <h1 className="text-3xl text-center text-yellow-600 my-3">
            Password Generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 bg-gray-400"
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="outline-none bg-pink-700 hover:bg-pink-500 text-white px-3 py-0.5 shrink-0"
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-5">
            <div className="flex items-center gap-x-2 my-3 font-bold text-lg">
              <input
                type="range"
                min={6}
                max={30}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length : {length}</label>
            </div>
            <div className="flex items-center gap-x-1 my-3 font-bold text-lg">
              <input
                type="checkbox"
                id="numberInput"
                defaultChecked={numAllowed}
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1 my-3 font-bold text-lg">
              <input
                type="checkbox"
                id="charInput"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="charInput">SpecialCharacters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
