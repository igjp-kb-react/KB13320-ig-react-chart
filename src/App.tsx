import React from 'react';
import './App.css';
import { 
  IgrLegendModule, 
  IgrDataChartCoreModule, 
  IgrDataChartCategoryCoreModule, 
  IgrDataChartCategoryModule, 
  IgrDataChartInteractivityModule, 
  IgrDataChartVerticalCategoryModule, 
  IgrDataChartAnnotationModule,
  IgrDataChartExtendedAxesModule,
  IgrDataChart, 
  IgrNumericYAxis, 
  IgrCategoryXAxis, 
  IgrLineSeries} from 'igniteui-react-charts';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartInteractivityModule,
    IgrDataChartVerticalCategoryModule,
    IgrDataChartAnnotationModule,
    IgrDataChartExtendedAxesModule
];
mods.forEach((m) => m.register());

function App() {
  const chartRef = React.useRef<IgrDataChart>(null);
  let data : any[] = [
    { Label: "test1", MyValue: 3 },
    { Label: "test2", MyValue: 8},
    { Label: "test3", MyValue: 2 }
  ];
  
  React.useEffect(() => {
  }, []);
 
  return (
    <div className="App">
       <IgrDataChart height="500px" width="900px" ref={chartRef} computedPlotAreaMarginMode="Series">
        <IgrCategoryXAxis name="xAxis" dataSource={data} label="Label">
        </IgrCategoryXAxis>
        <IgrNumericYAxis
          name="yAxis" minimumValue={0} maximumValue={10}>
        </IgrNumericYAxis>
        <IgrLineSeries
          name="LineSeries1"
          xAxisName="xAxis"
          yAxisName="yAxis"
          valueMemberPath="MyValue"
          dataSource={data}>
        </IgrLineSeries>
      </IgrDataChart> 
    </div>
  );
}

export default App;
