import React, { useEffect, useRef } from "react";

const { tableau } = window;

function TableauEmbed(){
    const ref = useRef(null);


    function initViz() {
        var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/Week2_John_Mah/Sheet1";
        return new tableau.Viz(containerDiv, url, {
            width: "40%",
            height: "40vh"
        });
    }

    useEffect(() => {initViz();}, []);

    return (
      <div>
        <div ref={ref}></div>
      </div>  
    );
}

export default TableauEmbed;