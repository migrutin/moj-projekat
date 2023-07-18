import React from 'react'

const Preporuke = () => {
    return (
        <div>
            <div>
                <h1 className='preporuke-h'>Preporučujemo za Vas</h1>
                <div className='preporuke-div h-full pt-auto flex  space-x-3'>


                    <div className="bg-yellow-200 preporuke-square justify-between flex ">

                        <div className="flex flex-col ml-4">
                            <h2 className="font-semibold">1</h2>

                        </div>


                    </div>

                    <div className="bg-blue-200 preporuke-square justify-between flex">

                        <div className="flex flex-col ml-4">
                            <h2 className="font-semibold">2</h2>

                        </div>


                    </div>

                    <div className="bg-green-200 preporuke-square justify-between flex ">

                        <div className="flex flex-col ml-4 ">
                            <h2 className="font-semibold ">3</h2>

                        </div>

                    </div>

                    <div className="bg-purple-200 preporuke-square justify-between flex ">
                        <div className="flex flex-col mr-2">
                            <h2 className="font-semibold ml-2">4</h2>

                        </div>



                    </div>




                </div>
            </div>
        </div>
    )
}

export default Preporuke