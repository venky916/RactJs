const Shimmer = ()=>{
    return(
        <div className="flex flex-wrap">
            {
                Array(12).fill('').map((e, index) => {
                    return (
                        <div key={index} className="h-48 w-48 m-3 bg-grey "></div>
                    );
                })
            }
        </div>
    )
}

export default Shimmer
