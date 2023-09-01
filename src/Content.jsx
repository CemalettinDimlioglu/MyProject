 import "./Content.css"
 import img from "./img/3.png"
 const content = ()=>{
     const style ={
          backgroundColor: "blue", color: "yellow"
     }
     return (
       <div>
         <h1 style={{ backgroundColor: "red", color: "white" }}>
           bu bir içerik mi? be ya{" "}
         </h1>
         <h2 style={style}>Content</h2>
         <p className="içerik">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
           repellendus harum tempore impedit quisquam et rerum dolorum quos.
           Facilis tenetur praesentium, alias ducimus quo quae?
         </p>
         <img src={img} alt="" style={{ width: "60%" }} />
         <img
           src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSAGPbjEEPCpSnwvmura8ARSyCJg-otGamF2T17JFpTkGgqZuGJzGxpMY606YpQyGnk"
           alt=""
           style={{ width: "50%" }}
         />
       </div>
     );
}
export default content