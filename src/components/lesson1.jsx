import React, { useState } from "react"

function Lesson1Chile ({subCount, name}) {
    console.log(name + '渲染了')
    return (
        <div style={{border: '1px solid green', margin: '10px'}}>
            子组件计数器：{subCount}
        </div>
    )
}

const MemoLession1Child = React.memo(Lesson1Chile)

export default function Lesson1 () {
    const [fatherCount, setFatherCount] = useState(0)
    const [subCount, setSubCount] = useState(0)
    console.log('父组件渲染了')
    return (
        <div style={{border: '1px solid red', width: '500px', margin: '0 auto'}}>
            <button onClick={() => setFatherCount(fatherCount+1)}>计算父组件</button>
            <button onClick={() => setSubCount(subCount+1)}>计算子组件</button>
            <div>父组件计数器：{fatherCount}</div>
            <Lesson1Chile subCount={subCount} name="子组件1"/>
            <MemoLession1Child subCount={subCount} name="子组件2"/>
        </div>
    )
}