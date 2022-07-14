function CurrentManagerTeam({ managers }) {
    return (
        <div>
            {
                managers.length > 0 ?
                    <div>
                        {
                            managers.map(
                                manager =>
                                    <div>
                                        {manager.name}
                                        {manager.id}
                                    </div>
                            )
                        }
                    </div>
                    : <>no one manager on the project</>
            }
        </div>
    )
}

export default CurrentManagerTeam;
