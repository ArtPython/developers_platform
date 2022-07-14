import React from "react";
import UpdateDevToPro from "../../devToProject/devToProUpdate";

function Smt({ developer, st }) {
    return (
        <div>
            {developer.dev_to_dev.length > 0 ?
                <>
                    {developer.dev_to_dev.map(e =>
                        <>
                            {st == e.project ?
                                <>
                                    {e.stats ?
                                        <div>
                                            {/* <p>id is {e.id}</p>
                                            <p>developer is {e.developer}</p>
                                            <p>project is {e.project}</p>
                                            {e.stats ? <p>still on the project</p> : <p>close this one</p>} */}
                                            <UpdateDevToPro dev={e} />
                                            <hr/>
                                        </div>
                                        : <>left the project</>}
                                </>
                                : <></>
                            }
                        </>)}
                </>
                : <>no dev to projects</>}
        </div>
    )
}

export default Smt;