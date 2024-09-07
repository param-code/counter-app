import {useState, useRef} from 'react';

export const Count = ()=>{
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);
    function Start(){
            if(intervalRef.current === null){
                intervalRef.current = setInterval(()=>{
                    setCount(pre => pre+1);
                },1000);
            }
    }
    function Stop(){
        if(intervalRef.current !== null){
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }
    function Add(){
        const c = document.createElement('h1');
        c.setAttribute('class', 'text-7xl my-6 font-mono font-bold slashed-zero bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl');
        c.innerHTML = 'Counter' + count;
        document.getElementById('add').appendChild(c);
    }
    function Reset(){
        setCount(0);
        Stop();
    }
    return (
        <div className={'flex h-96 items-center justify-center flex-col mt-6'}>
            <h2 className={'text-7xl font-mono font-bold slashed-zero bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl'}>Counter {count}</h2>
            <div>
                <button onClick={Start}
                        className={'hover:scale-110 m-3 text-2xl size-20 p-2 bg-gray-900 text-sky-400 rounded-3xl'}>Start
                </button>
                <button onClick={Stop}
                        className={'hover:scale-110 m-3 text-2xl size-20 p-2 bg-gray-900 text-sky-400 rounded-3xl'}
                        style={{margin: 20}}>Stop
                </button>
                <button onClick={Add}
                        className={'hover:scale-110 m-3 text-2xl size-20 p-2 bg-gray-800 text-orange-300 rounded-xl'}
                        style={{margin: 20}}>Lap
                </button>
                <button onClick={Reset}
                        className={'hover:scale-110 m-3 text-2xl size-20 p-2 bg-gray-900 text-red-400 rounded-xl'}
                        style={{margin: 20}}>Reset
                </button>
            </div>
            <div id={'add'}>
            </div>
        </div>
    )
}