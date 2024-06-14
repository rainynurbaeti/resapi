import React from 'react'

export default function Table(props) {
    const data =[
        {
          nama :'hujan',
          rombel:'pplg x 4',
          rayon :'cic 3'
        },
        {
          nama :'hujan rintik ',
          rombel:'pplg x 5',
          rayon :'cic 5'
        },
      ];
  return (
    <>
    <table border={"1px solid black"}>
        <thead>
        <tr>{
            props.title.map((val, i) =>(
                <td>{val}</td>
            ))
        }
            {/* <td>no</td>
            <td>nama</td>
            <td>rombel</td>
            <td>rayon</td> */}
        </tr>
        </thead>
        <tbody>
            {props.data}
        </tbody>
    </table>
    </>
  )
}
