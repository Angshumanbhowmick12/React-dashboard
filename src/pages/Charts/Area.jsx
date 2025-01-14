import React from 'react'
import { ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,SplineAreaSeries,DateTime,Legend} from '@syncfusion/ej2-react-charts'
import { areaCustomSeries,areaPrimaryXAxis,areaPrimaryYAxis } from '../../data/dummy'
import { useSateContext } from '../../contexts/ContextProvider'
import { ChartsHeader } from '../../components'
const Area = () => {
  const {currentMode}=useSateContext()
  return (
   <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
     < ChartsHeader category="Area" title="Inflation Rate in percentage"/>
    <div className='w-full'>
    <ChartComponent 
      id='charts'
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      chartArea={{border:{width:0}}}
      legendSettings={{ background: 'white' }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[SplineAreaSeries,DateTime,Legend]}/>
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item,index)=> <SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  </div>
  )
}

export default Area