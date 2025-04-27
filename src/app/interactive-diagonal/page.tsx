'use client'

import { useEffect, useState } from "react"

const InteractveDiagonal = () => {
    const [data, setData] = useState<any>([])

    useEffect(() => {
        const array = new Array(8)
        for (let i = 0; i < array.length; i++) {
            array[i] = (new Array(8).fill({
                isFile: false
            }))
        }
        setData(array)
    }, [])

    const handleClickBox = (rowIndex: number, columnIndex: number) => {
        const copyData = JSON.parse(JSON.stringify(data))
        copyData.forEach((rowData: any, dataRowIndex: number) => {
            rowData.forEach((rowColumn: any, dataColumnIndex: number) => {
                if(Math.abs(rowIndex - dataRowIndex) === Math.abs(columnIndex - dataColumnIndex)) {
                    copyData[dataRowIndex][dataColumnIndex].isFile = true
                    if(rowIndex === dataRowIndex && columnIndex === dataColumnIndex) {
                        copyData[dataRowIndex][dataColumnIndex].isOriginal = true
                    }
                }
                else {
                    copyData[dataRowIndex][dataColumnIndex] = {
                        isFile: false,
                        isOriginal: false
                    }
                }
            })
        })
        setData(copyData)
    }

    return (
        <div className="bg-white p-10 w-max">
            <div className="border border border-black">
                {
                    data?.map((row: any, rowIndex: number) => {
                        return (
                            <div className="flex" key={rowIndex}>
                                {
                                    row.map((column: any, columnIndex: number) => {
                                        return (
                                            <div onClick={() => handleClickBox(rowIndex, columnIndex)} className={`w-20 h-20 border border-black ${column?.isFile ? "bg-black": ""} ${column?.isOriginal ? "bg-red-200": ""}`}>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InteractveDiagonal