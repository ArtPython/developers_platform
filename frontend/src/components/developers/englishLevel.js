import React from "react";

function EnglishLevel({ level }) {
    return (
        <div onMouseDown={() => {
            level == 'A' ? alert('A level') :
                level == 'B' ? alert('B level') :
                    alert('C level')
        }}>
            Enslish
            <>
                {
                    level ?
                        <>
                            {
                                level == 'A' ? <>&#9989;</> :
                                    level == 'B' ? <>&#9989; &#9989;</> :
                                        <>&#9989; &#9989; &#9989;</>
                            }
                        </>
                        : <>&#10060;</>
                }
            </>
        </div >
    )
}

export default EnglishLevel;
