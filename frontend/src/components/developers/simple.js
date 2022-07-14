import React from "react";

function SimpleFrameworksEst({ smt }) {

    return (
        <>
            <h onMouseDown={() => {
                smt[0].mark == 1 ? alert('junior') :
                    smt[0].mark == 2 ? alert('junior +') :
                        smt[0].mark == 3 ? alert('middle') :
                            smt[0].mark == 4 ? alert('middle +') :
                                smt[0].mark == 5 ? alert('senior') :
                                    alert('need estimate')
            }}>
                <h>
                    {smt.length > 0 ?
                        <>
                            {
                                smt[0].mark == 1 ? <>&#9989;</> :
                                    smt[0].mark == 2 ? <>&#9989; &#9989;</> :
                                        smt[0].mark == 3 ? <>&#9989; &#9989; &#9989;</> :
                                            smt[0].mark == 4 ? <>&#9989; &#9989; &#9989; &#9989;</>
                                                : <>&#9989; &#9989; &#9989; &#9989; &#9989;</>
                            }
                        </>
                        : <>&#10060;</>
                    }
                </h>
            </h>
        </>
    )
}

export default SimpleFrameworksEst;