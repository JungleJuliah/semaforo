import React, {useEffect, useState} from "react" 

export const Semaforo = () => {
    const colors= ["red", "yellow", "green"];
    let [selected, setSelected] = useState (undefined)
    let [currentIndex, setCurrentIndex]= useState (undefined)
    let [intervalId, setIntervalId] = useState ()

    return (
        <div className="app">
            <div className="trafficTop bg-black justify-content-center mx-auto my-0 p2" style={{width: "50px", height:"100px"}}></div>
            <div className="conatainer bg-black justify-content-center mx-auto my-0 pt-3 mb-5 p2 rounded" style={{width: "200px", height:"350px"}}>
                <div 
                    className={"rounded-circle mx-auto my-0 bg-danger border border-2"} 
                    // onClick={(event)=> {
                    //     setSelected(selected == "red" 
                    //         ? undefined
                    //         :"red"
                    //     );
                    // }}
                        onClick={(event)=> {
                            setCurrentIndex(currentIndex== 0
                                ? undefined
                                : 0
                                );
                        }}
                    style={{width: "100px", height:"100px",
                    // boxShadow: selected== "red" 
                        boxShadow: currentIndex == 0 
                        ? "0 0 20px 20px red"
                        : ""
                    }}></div>
                <div 
                    className={"rounded-circle mx-auto my-2 bg-warning border border-2"}
                    // onClick={(event)=> { 
                    //     setSelected(selected == "yellow"
                    //     ? undefined
                    //     : "yellow"
                    //     );
                    // }}
                    onClick={(event)=> { 
                        setCurrentIndex(currentIndex == 1
                        ? undefined
                        : 1
                        );
                    }}
                    style={{width: "100px", height:"100px",
                    // boxShadow: selected== "yellow" 
                        boxShadow: currentIndex== 1 
                        ? "0 0 20px 20px yellow"
                        : ""
                    }}></div>
                <div 
                    className={"rounded-circle mx-auto my-2 bg-success border border-2"}
                    // onClick={(event)=> {
                    //     setSelected(selected== "green"
                    //     ? undefined
                    //     : "green"
                    //     );
                    // }}
                    onClick={(event)=> {
                        setCurrentIndex(currentIndex== 2
                        ? undefined
                        : 2
                        );
                    }}
                    style={{width: "100px", height:"100px",
                    // boxShadow: selected== "green" 
                        boxShadow: currentIndex== 2
                        ? "0 0 20px 20px green"
                        : ""
                    }}></div>
            </div>
            <div className="d-flex justify-content-center my-2">
            <button type="button" className="btn btn-success btn-lg me-1" 
                onClick={(event) => { 
                    if (intervalId == undefined){
                    const id = setInterval (()=>{
                    setCurrentIndex((previousIndex)=>{
                        if (previousIndex <2){
                            return previousIndex+1
                        }
                        else {
                            return 0 
                        };
                    })
                    // if (currentIndex < 2){
                    //     setCurrentIndex (currentIndex +1)
                    // }
                    // else {setCurrentIndex(0)}
                },3000);
                // esto es para guardar el id del intervalo y poderlo apagar despues
                setIntervalId(id)}
                else {
                    clearInterval (intervalId)
                    setIntervalId(undefined)
                }
                }}>Que comience el trásito!</button>
            </div>    

        </div>
    )
}