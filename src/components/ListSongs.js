import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";
function ListSongs() {
    const [idSong, setIdSong] = useState(0)
    const {DataSongs , handleSetSong, song } = useContext(Songs)

    const handleClick = (idSong)=> {
        setIdSong(idSong)
        handleSetSong(idSong)
    }
    useEffect(()=> {
        setIdSong(song.id)
    },[song])
    return ( 
        <div className="col-span-2 overflow-hidden overflow-y-auto">
            <table className="table-auto w-full relative ">
                <thead className="text-white relative z-0 ">
                    <tr className="h-12">
                        <th className="w-[10%] min-w-[30px]">#</th>
                        <th className="w-[60%] text-left">Title</th>
                        <th className="w-[20%] ">Author</th>
                        <th className="w-[10%]"><i className="fa fa-download"></i></th>
                    </tr>
                </thead>
                <tbody className="bg-slate-800 text-gray-400 ">
                    {DataSongs.map((song,index) => (
                        <tr key ={index} 
                            className={`h-12 hover:bg-slate-600 cursor-pointer ${idSong === song.id && 'text-cyan-400 bg-slate-600'}`}
                            onClick={()=>handleClick(song.id)}
                        >
                            <td className="text-center">{index + 1}</td>
                            <td>{song.name}</td>
                            <td className="text-center">{song.author}</td>
                            <td className="text-center hover:text-white"><a href={song.url}><i className="fa fa-download"></i></a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}

export default ListSongs;