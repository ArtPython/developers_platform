function CurrentQATeam({ qas }) {
    return (
        <div>
            {
                qas.length > 0 ?
                    <div>
                        {
                            qas.map(
                                manager =>
                                    <div>
                                        {manager.name}
                                        {manager.id}
                                    </div>
                            )
                        }
                    </div>
                    : <>no one qa on the project</>
            }
        </div>
    )
}

export default CurrentQATeam;
