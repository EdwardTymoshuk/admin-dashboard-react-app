import React from 'react'
<<<<<<< HEAD

const SparkLine = () => {
    return (
        <div>
            
        </div>
=======
import {SparklineComponent, Inject, SparklineTooltip} from '@syncfusion/ej2-react-charts'

const SparkLine = ({id, height, width, color, data, type, currentColor}) => {
    return (
        <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{color: currentColor, width: 2}}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
        tooltipSettings={{
            visible: true,
            format:'${x} : data ${yval}',
            trackLineSettings: {
                visible: true
            }
        }}
        >
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
>>>>>>> d767f27fa0692b48942711f2b8fc259f877d5c4a
    )
}

export default SparkLine