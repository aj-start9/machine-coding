'use client'
import { useEffect, useRef, useState } from "react"
import { FaEllipsis } from "react-icons/fa6"

const ToDoCrud = () => {

    const [clickId, setClickId] = useState("")

    const [allJobs, setAllJobs] = useState([{
        title: "shjdcvhjsc jsh hjs vhjs dh",
        type: 'todo',
        jobNo: 'PROD-1'
    },
    {
        title: "ns is v sd hs dvhj ",
        type: 'todo',
        jobNo: 'PROD-2'
    },
    {
        title: "ndcb398v37rv83r8v",
        type: 'todo',
        jobNo: 'PROD-3'
    },
    {
        title: "kjQKJbwejbswvjs hj shd vh",
        type: 'todo',
        jobNo: 'PROD-4'
    },
    {
        title: "kjQKJbwejbswvjs hj shd vh",
        type: 'progress',
        jobNo: 'PROD-5'
    },
    {
        title: "kjQKJbwejbswvjs hj shd vh",
        type: 'done',
        jobNo: 'PROD-6'
    }])



    useEffect(() => {
        let idElement: any = document?.getElementById(clickId)
        if (idElement) {
            document.body.addEventListener('click', (e: any) => {
                if (!idElement?.contains(e.target)) {
                    setClickId('')
                    idElement = ""
                }
            })
        }
    })

    const getList = (jobNo: string) => {
        const Lists = [
            { name: "To Do", type: "todo" },
            { name: "Progress", type: 'progress' },
            { name: 'Done', type: 'done' }
        ]

        return (
            <div>
                {
                    Lists.map((list: any) => {
                        return (
                            <div onClick={() => {
                                const copyAllJobs = JSON.parse(JSON.stringify(allJobs))
                                copyAllJobs.forEach((job: any, index: number) => {
                                    if (job?.jobNo === jobNo) {
                                        copyAllJobs[index].type = list?.type
                                    }
                                })
                                setAllJobs(copyAllJobs)
                                setClickId("")
                            }} className="p-1 hover:bg-sky-300">{list?.name}</div>
                        )
                    })
                }
            </div>
        )
    }

    const renderTodoList = (type: string) => {
        const todoArray = allJobs.filter((itm: any) => itm?.type === type)

        return (
            <div className="flex flex-col gap-y-2 pb-5">
                {
                    todoArray.map((itm: any, index) => {
                        const id = `popover${itm?.jobNo}`
                        return (
                            <div className="flex justify-between border border-black rounded-sm w-[90%] mx-auto p-1">
                                <div>
                                    <div>{itm?.title}</div>
                                    <div>{itm?.jobNo}</div>
                                </div>
                                <div id={id} className="w-5 h-5 bg-neutral-200 cursor-pointer flex items-center justify-center rounded-sm relative rounded-sm">
                                    <div onClick={(e: any) => setClickId(clickId === id ? "" : id)}>
                                        <FaEllipsis />
                                    </div>
                                    {
                                        clickId === id ?
                                            <div className="absolute top-5 right-0 w-30 min-h-20 z-10 rounded-sm bg-neutral-200 shadow-md overflow-hidden">
                                                {getList(itm?.jobNo)}
                                            </div> : null}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className="w-[80%] mx-auto text-black">
            <div className="p-2 border border-grey rounded-sm w-24 text-center cursor-pointer">Create</div>
            <div className="w-full min-h-48 flex mx-auto">
                <div className="border w-1/3 border-solid border-black mt-10 min-h-48">
                    <div className="text-center text-md text-black font-bold mb-5">Todo</div>
                    {
                        renderTodoList('todo')
                    }
                </div>
                <div className="border w-1/3 border-solid border-black mt-10 min-h-48 border-x-transparent mt-10">
                    <div className="text-center text-md text-black font-bold mb-5">Progress</div>
                    {
                        renderTodoList('progress')
                    }
                </div>
                <div className="border w-1/3 border-solid border-black mt-10 min-h-48 mt-10">
                    <div className="text-center text-md text-black font-bold mb-5">Done</div>
                    {
                        renderTodoList('done')
                    }
                </div>
            </div>
        </div>
    )
}

export default ToDoCrud