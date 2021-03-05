// import React, { useState, useEffect } from "react";
// import Axios from "axios";
// import { useParams } from "react-router-dom";
// import { Card, CardText, Container } from "reactstrap";

// export default function SpecificLaunch() {
//   let { id } = useParams();
//   const [specificRocketData, setSpecificRocketData] = useState([]);

//   // NEEDS TO RUN AFTER BUTTON IS CLICKED FOR SPECIFIC ROCKET
//   useEffect(() => {
//     Axios.get(`https://api.spacexdata.com/v4/rockets/${id}`)
//       .then((res) => {
//         console.log(res.data);
//         setSpecificRocketData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [id]);

//   return (
//     <div>
//       <Container className='mt-4'
//       >
//         <Card
//           style={{
//             backgroundColor: "#343435",
//           }}
//         >
//           <CardText tag='h3' style={{ color: "#FFF" }}>Name: {specificRocketData.name}</CardText>
//           <CardText tag='h3' style={{ color: "#FFF" }}>
//             Date: {specificRocketData.description}
//           </CardText>
//           <CardText tag='h3' style={{ color: "#FFF" }}>
//             Details: {specificRocketData.success_rate_pct}
//           </CardText>
//           <CardText tag='h3' style={{ color: "#FFF" }}>
//             Details: {specificRocketData.active}
//           </CardText>
//           <CardText tag='h3' style={{ color: "#FFF" }}>
//             Details: {specificRocketData.cost_per_launch}
//           </CardText>
//           <CardText tag='h3' style={{ color: "#FFF" }}>
//             Details: {specificRocketData.first_flight}
//           </CardText>
//           <CardText tag='h3' style={{ color: "#FFF" }}>{specificRocketData.id}</CardText>
//         </Card>
//       </Container>
//     </div>
//   );
// }
