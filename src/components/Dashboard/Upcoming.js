import React from "react";


class Upcoming extends React.Component {
 state ={
   list :[
     {
      id:1, 
      header: 'Contract Renewal',
       date: 'July 15th',
       desc: 'lorem ipsum'
     },
     {
       id:2,
      header: 'Confirmations',
      date: 'July 4th',
      desc: 'lorem ipsum'
    },
    {
      id:3,
      header: 'Confirmations',
      date: 'August 8th',
      desc: 'lorem ipsum'
    },

   ]
 }

  render() {
    return (
      <div className="ui scrollUpcoming cards">
      
              { this.state.list.map((data)=>{
                return (
                  <div className="ui raised fluid teal card" key={data.id}>
                  <div className="content">
                  <div className="header">{data.header}</div>
                  <div className="meta">{data.date}</div>
                  <div className="description">{data.desc}</div>
                </div>
                <div className="extra content">
                  <span
                    className="left floated like"
                    
                  >
                    <i className="check icon"></i>
                    Completed
                  </span>
                  <span
                    className="right floated star"
                   
                  >
                    <i className="cancel icon"></i>
                    On Hold
                  </span>
                </div>
                </div>
                )
                
              })
              }
      </div>
    );
  }
}

export default Upcoming;
