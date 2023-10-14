import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData()

    console.log(coffee)
   const {_id,name,test,details,photo,quantity,category,supplier}=coffee
    const handleUpdateCoffee=event=>{
        event.preventDefault();
        const form =event.target 
        const name =form.name.value 
        const quantity =form.quantity.value 
        const supplier =form.supplier.value 
        const test = form.test.value 
        const category=form.category.value 
        const details=form.details.value 
        const photo=form.photo.value 

        const updatedCoffee ={ _id,name,quantity,supplier,test,category,details,photo}
        console.log(updatedCoffee)
        //send data to server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })
    }

    return (
        
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold text-center py-5">Update a Coffee</h2>
        <div>
            <h2>Update a copy :{name}</h2>
        </div>
        <form  onSubmit={handleUpdateCoffee}>
         {/* form name quantity row */}
        <div className="md:flex mb-8">
        
        <div className="form-control md:w-1/2">
    <label className="label">
    <span className="label-text">Coffee Name</span>
   </label>
   <label className="input-group">
    
    <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
   </label>
   </div >
        <div className="form-control md:w-1/2 ml-4">
    <label className="label">
    <span className="label-text">Available Quantity</span>
   </label>
   <label className="input-group">
    
    <input type="text" name="quantity" defaultValue={quantity}  placeholder="Available Quantity" className="input input-bordered w-full" />
   </label>
   </div>
        </div>
         {/* form supplier test row */}
        <div className="md:flex mb-8">
        
        <div className="form-control md:w-1/2">
    <label className="label">
    <span className="label-text">Supplier</span>
   </label>
   <label className="input-group">
    
    <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" />
   </label>
   </div >
        <div className="form-control md:w-1/2 ml-4">
    <label className="label">
    <span className="label-text">Test</span>
   </label>
   <label className="input-group">
    
    <input type="text" name="test"defaultValue={test} placeholder="Test" className="input input-bordered w-full" />
   </label>
   </div>
        </div>
         {/* form Category row */}
        <div className="md:flex mb-8">
        
        <div className="form-control md:w-1/2">
    <label className="label">
    <span className="label-text">Category</span>
   </label>
   <label className="input-group">
    
    <input type="text" name="category"defaultValue={category}  placeholder="Category" className="input input-bordered w-full" />
   </label>
   </div >
        <div className="form-control md:w-1/2 ml-4">
    <label className="label">
    <span className="label-text">Details</span>
   </label>
   <label className="input-group">
    
    <input type="text" name="details"defaultValue={details}  placeholder="  Details" className="input input-bordered w-full" />
   </label>
   </div>
        </div>
         {/* form photo  row */}
        <div className="md:flex mb-8">
        
        <div className="form-control w-full">
    <label className="label">
    <span className="label-text">photo</span>
   </label>
   <label className="input-group">
    
    <input type="text" name="photo"defaultValue={photo} placeholder="Photo url" className="input input-bordered w-full" />
   </label>
   </div >
       
        </div>
        <input type="submit" value="Update Coffee" className="btn btn-block" />
        </form>
        </div>
    );
};

export default UpdateCoffee;