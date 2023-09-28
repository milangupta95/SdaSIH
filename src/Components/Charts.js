import React from 'react'
import { mockData } from './mockData'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'
function Charts() {
  let dataForGender =
    [
      { x: "Male", y: 0 },
      { x: "Female", y: 0 }
    ]

  mockData.students.map((data) => {
    if (data.Gender === "Male") {
      dataForGender[0].y++;
    } else {
      dataForGender[1].y++;
    }
  });

  let dataForStandard = [
    { x: "1st", y: 0 },
    { x: "2nd", y: 0 },
    { x: "3rd", y: 0 },
    { x: "4th", y: 0 },
    { x: "5th", y: 0 },
    { x: "6th", y: 0 },
    { x: "7th", y: 0 },
    { x: "8th", y: 0 },
    { x: "9th", y: 0 },
    { x: "10th", y: 0 },
    { x: "11th", y: 0 },
    { x: "12th", y: 0 }
  ]

  mockData.students.map((data) => {
    let stan = "";
    for (let i = 0; i < data.Class.length; i++) {
      if (data.Class[i] >= '0' && data.Class[i] <= '9') {
        stan += data.Class[i];
      } else {
        break;
      }
    }
    console.log(stan);
    stan = (Number)(stan);
    dataForStandard[stan - 1].y++;
  })

  let dataForAgeBased = [
    { x: "0-5", y: 0 },
    { x: "5-10", y: 0 },
    { x: "10-15", y: 0 },
    { x: "15-20", y: 0 }
  ]

  mockData.students.map((data) => {
    if (data.Age >= 0 && data.Age < 5) {
      dataForAgeBased[0].y++;
    } else if (data.Age >= 5 && data.Age < 10) {
      dataForAgeBased[1].y++;
    } else if (data.Age >= 10 && data.Age < 15) {
      dataForAgeBased[2].y++;
    } else {
      dataForAgeBased[3].y++;
    }
  })

  let dataForDistrictBased = [
    {
      x: "Ahmedabad",
      y: 0
    },
    {
      x: "Kachchh",
      y : 0
    },
    {
      x : "Vadodara",
      y : 0
    }
  ]


  mockData.students.map((data) => {
    dataForDistrictBased[dataForDistrictBased.findIndex((dat) => {
      return (dat.x === data.District);
    })].y++;
  })

  return (
    <div className='w-full h-[100vh] py-4 space-y-4' id='charts'>
      <div className='flex items-center justify-between space-x-2'>
        <div className='w-fit h-fit rounded-lg p-2 shadow-sm'>
          <h1 className='text-xl font-bold'>Gender Based Visualization </h1>
          <VictoryPie
            animate={{
              duration: 2000
            }}
            style={{ labels: { fontSize: 10 } }}
            height={400}
            colorScale={["tomato", "orange"]}
            data={dataForGender}
          />
        </div>

        <div className='w-fit h-fit rounded-lg p-2 shadow-sm'>
          <h1 className='text-xl font-bold'>Standard Based Visualization </h1>
          <VictoryChart
            domainPadding={10}
            height={400}
            width={700}
          >
            <VictoryBar
              cornerRadius={{ top: 5 }}
              barWidth={10}
              style={{
                data: {
                  fill: ({ datum }) => datum.y < 5 ? "#16a34a"
                    : datum.y < 10 ? "#86efac" :
                      datum.y < 15 ? "#fca5a5" :
                        "#b91c1c"
                }
              }}
              data={dataForStandard}
            />
          </VictoryChart>
        </div>

      </div>
      <div className="flex items-center justify-between space-x-2">
        <div className='w-fit h-fit rounded-lg p-2 shadow-sm'>
          <h1 className='text-xl font-bold'>Age Based Visualization </h1>
          <VictoryPie
            animate={{
              duration: 2000
            }}
            style={{ labels: { fontSize: 10 } }}
            height={400}
            colorScale={["tomato", "orange", "green", "blue"]}
            data={dataForAgeBased}
          />
        </div>
        <div className='w-fit h-fit rounded-lg p-2 shadow-sm'>
          <h1 className='text-xl font-bold'>Location Based Visualization </h1>
          <VictoryChart
            domainPadding={10}
            height={400}
            width={700}
          >
            <VictoryBar
              cornerRadius={{ top: 5 }}
              barWidth={10}
              style={{
                data: {
                  fill: ({ datum }) => datum.y < 5 ? "#16a34a"
                    : datum.y < 10 ? "#86efac" :
                      datum.y < 15 ? "#fca5a5" :
                        "#b91c1c"
                }
              }}
              data={dataForDistrictBased}
            />
          </VictoryChart>
        </div>
      </div>

    </div>
  )
}

export default Charts