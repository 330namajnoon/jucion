import { useState , useEffect} from "react";
import AppContext from "../contexts/app";
import axios from "axios";
import Game from "./game/Game";
export default function App() {
    const url = "http://localhost:4000";
    useEffect(()=> {
        axios.post(`${url}/niveles`,{}).then((r)=> {
            setNiveles(r.data);
        })
    },[])
    const [niveles,setNiveles] = useState();
    const [nivel,setNivel] = useState(1);
    return(
        <AppContext.Provider  >
            <div>
                {niveles && (
                <Game nivel={niveles[nivel-1]} />
                )}
            </div>
        </AppContext.Provider>
    );
}