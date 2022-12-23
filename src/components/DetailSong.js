import React, { useContext } from "react";
import { Songs } from "../Context";
function DetailSong() {
    const {song} = useContext(Songs)
    return ( 
        <div className="col-span-1 p-3">

            <h2 className="text-cyan-500 font-bold">Now Playing</h2>
            <p className="text-neutral-400 text-2xl">{song.name}</p>
            <div className="flex mt-16 justify-center">
                <img className="w-64" src={song.links.images[0].url} alt={song.name} />
            </div>
            <div className="flex justify-evenly mt-4 items-center text-white">
                <img className="w-16 rounded-full" src={song.links.images[1].url} alt="avatar" />
                <span className="text-2xl">{song.author}</span>
            </div>
            
        </div>
     );
}

export default DetailSong;