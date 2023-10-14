
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({coffee,coffees, setCoffees}) => {
      
     const {_id,name,test,details,photo,quantity,supplier}=coffee
     
     const handleDelete = _id =>{
            console.log(_id)
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                
               fetch(`http://localhost:5000/coffee/${_id}`,{
                method:'DELETE',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(coffee)
               })
               .then(res=>res.json())
               .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                     Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
               const remaining =coffees.filter(cof => cof._id !== _id);
               setCoffees(remaining)
                }
               })
                }
              })
     }
    return (

       
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className="w-96 h-80 pr-5" src={photo} alt="Movie"/></figure>
  <div className="flex w-full justify-between pr-4">
    <div>
    <h2 className="card-title">
        Name:{name}
    </h2>
    <p>{quantity}</p>
    <p>{supplier}</p>
    <p>{test}</p>
    <p>{details}</p>
    </div>
    <div className="card-actions justify-end">
    <div className="btn-group btn-group-vertical space-y-4">
  <button className="btn btn-active">View</button>
  <Link to={`updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
  <button className="btn bg-red-400" onClick={()=>handleDelete(_id)}>X</button>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeeCard;