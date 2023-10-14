import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee=event=>{
        event.preventDefault();
        const form =event.target 
        const name =form.name.value 
        const quantity =form.quantity.value 
        const supplier =form.supplier.value 
        const test = form.test.value 
        const category=form.category.value 
        const details=form.details.value 
        const photo=form.photo.value 

        const newCoffee ={ name,quantity,supplier,test,category,details,photo}
        console.log(newCoffee)
        //send data to server
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Added coffee',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold text-center py-5">Add a Coffee</h2>
        <form onSubmit={handleAddCoffee} >
         {/* form name quantity row */}
        <div className="md:flex mb-8">
        
        <div className="form-control md:w-1/2">
    <label className="label">
    <span className="label-text">Coffee Name</span>
   </label>
   <label className="input-group">
    
    <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
   </label>
   </div >
        <div className="form-control md:w-1/2 ml-4">
    <label className="label">
    <span className="label-text">Available Quantity</span>
   </label>
   <label className="input-group">
    
    <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
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
    
    <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
   </label>
   </div >
        <div className="form-control md:w-1/2 ml-4">
    <label className="label">
    <span className="label-text">Test</span>
   </label>
   <label className="input-group">
    
    <input type="text" name="test" placeholder="Test" className="input input-bordered w-full" />
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
    
    <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
   </label>
   </div >
        <div className="form-control md:w-1/2 ml-4">
    <label className="label">
    <span className="label-text">Details</span>
   </label>
   <label className="input-group">
    
    <input type="text" name="details" placeholder="  Details" className="input input-bordered w-full" />
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
    
    <input type="text" name="photo" placeholder="Photo url" className="input input-bordered w-full" />
   </label>
   </div >
       
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block" />
        </form>
        </div>
    );
};

export default AddCoffee;