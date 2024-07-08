// import React from "react";
// import MediaQuery from "react-responsive";

// import magnifiericon from "../../assets/search.svg";
// import sorticon from "../../../assets/sort.svg";

// export default class BlockContcol extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       current: 0,
//     };

//     this.buttonValues = ["name", "rating", "age"];
//     this.buttonNames = ["Имя", "Рейтинг", "Возраст"];
//     this.filterStudents = this.filterStudents.bind(this);
//     this.sortStudents = this.sortStudents.bind(this);
//   }

//   filterStudents(e) {
//     this.props.filterFunction(e.target.value);
//   }

//   sortStudents() {
//     this.setState((prevState) => {
//       let current = (prevState.current + 1) % 4;
//       this.props.sortFunction(this.buttonValues[current]);
//       return { current: current };
//     });
//   }

//   render() {
//     return (
//       <div className={"Filter"}>
//         <div className={"Search"}>
//           <img src={magnifiericon} alt={"magnifier"} className={"Magnifier"} />
//           <input
//             placeholder="Поиск по имени"
//             className={"SearchPlace"}
//             onChange={this.filterStudents}
//           />
//         </div>
//         <MediaQuery minDeviceWidth={981}>
//           <button className={"SortButton"} onClick={this.sortStudents}>
//             {this.buttonNames[this.state.current]}
//             <img src={sorticon} alt={"sorticon"} className={"SortIcon"} />
//           </button>
//         </MediaQuery>
//       </div>
//     );
//   }
// }
