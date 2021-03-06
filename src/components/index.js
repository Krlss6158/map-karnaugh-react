import logo from '../assets/logo.png';

export const Header = () => {
    return (
        <div className='w-full py-2 space-x-2 flex flex-row items-end border-b text-gray-600'>
            <img width={40} height={40} src={logo} className='rounded-lg' />
            <small className='font-bold'>Sistema de Control de Riego</small>
        </div>
    );
}

export const Input = ({
    placeholder,
    onChange,
    value,
    state,
    KeyUp
}) => {
    return (
        <input onKeyUp={KeyUp} type='text' disabled={state.length == 7} placeholder={state.length < 7 ? placeholder : 'Solo se pueden como máximo 7 estados.'} className='w-full max-w-md px-5 py-2 focus:outline-none rounded-md bg-slate-50 '
            maxLength={25} onChange={onChange} value={value} autoFocus />
    );
}

export const ButtonAdd = ({ onClick, state }) => {
    return (
        <button disabled={state.length == 7} onClick={onClick} className='px-5 py-2 font-semibold rounded-md w-36 add'>Agregar</button>
    );
}

export const ButtonCal = ({ onClick, state }) => {
    return (
        state.length > 3 ?
            <button onClick={onClick} className='px-5 py-2 font-semibold rounded-md text-white max-w-min'>Calcular</button>
            : <small>Necesitas al menos 7 estados para poder calcular.</small>
    );
}

export const Tags = ({ letter, text, onClick, children, mykey }) => {
    return (
        <div className='relative w-40 border flex flex-col justify-center items-center rounded-md p-5 mr-2 mt-2'>
            {
                mykey != 0 && <p onClick={onClick} className='absolute top-1 right-3 rotate-45 cursor-pointer hover:text-red-600'>+</p>
            }
            <p className="font-semibold truncate w-32 text-center">{text}</p>
            <small>Denominación: {letter}</small>
            {children}
        </div>
    );
}

export const Checked = ({ onClick, checked }) => {
    return (
        <input onClick={onClick} type="checkbox" checked={checked} onChange={() => { }} className='mt-2 cursor-pointer' />
    );
}

export const Table = ({ head, body, className }) => {
    return (
        <table className={`flex flex-col w-full text-center ${className}`}>
            <thead className='table table-fixed w-full text-gray-600'>
                <tr>
                    {
                        head.map((e) => <th className='p-1' key={e.letter}>{e.letter}</th>)
                    }
                    <th>R</th>
                </tr>
            </thead>
            <tbody className='max-h-72 overflow-auto '>
                {
                    body.map((row, rowkey) => {
                        return (/* ${row.slice(-1)[0] && 'truthTable'} */
                            <tr className={`border w-full table table-fixed`} key={rowkey}>
                                {
                                    row.map((col, colkey) =>
                                        <th className={`${row.slice(-1)[0] && 'truthTable'} p-1 font-normal `} key={colkey}>{col ? '1' : '0'}</th>
                                    )
                                }
                            </tr>
                        )
                    }
                    )
                }
            </tbody>
        </table>
    );
}

export const TableKarnaugh = ({ head, body, headbody, letters }) => {
    return (
        <div className='text-gray-600 flex flex-col w-full'>

            <div className='flex flex-row w-full text-center'>
                <small className='m-auto'>
                    {
                        `${letters.slice(letters.length / 2, letters.length).map((e) => e)}/${letters.slice(0, letters.length / 2).map((e) => e)}`.replaceAll(',', '')
                    }
                </small>
                {
                    head.map((e, index) => <div className='m-auto font-bold w-full' key={index}>{e.map((x) => x ? '1' : '0')}</div>)
                }
            </div>

            {/* <thead className='bg-gray-200 table table-fixed w-full'>
                <tr>
                    <th>
                        {
                            `${letters.slice(letters.length / 2, letters.length).map((e) => e)}/${letters.slice(0, letters.length / 2).map((e) => e)}`.replaceAll(',', '')
                        }
                    </th>
                    {
                        head.map((e, index) => <th key={index}>{e.map((x) => x ? '1' : '0')}</th>)
                    }
                </tr>
            </thead> */}
            <div className='max-h-72 overflow-auto bodyTruthTable'>
                {
                    body.map((row, rowkey) => {
                        return (
                            <div className={`w-full flex flex-row text-center`} key={rowkey}>
                                {
                                    row.map((col, colkey) => {
                                        {/* <th className={`${colkey && col && 'truthTable'} p-1`} key={colkey}>{!colkey ? col.map((e) => e ? '1' : '0') : col ? '1' : '0'}</th> */ }
                                        return (
                                            <div className={`${colkey && col && ''} p-1 m-auto ${!colkey ? 'font-bold' : 'border w-full'}`} key={colkey}>{!colkey ? col.map((e) => e ? '1' : '0') : col ? '1' : '0'}</div>
                                        )
                                    }
                                    )
                                }
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    );
}