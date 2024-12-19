import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = "03912b0b0ed403c0f6b1eda27bd2636f";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    // console.log(data.image[0]);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    
    if(res.data.success){
      const product = {
        name: data.name,
        category: undefined,
        price: data.price,
        image: res.data.data.display_url,
        rating: undefined,
        description: data.description
      };

      const productRes = await axiosSecure.post('/products',product);
      console.log(productRes.data);
      if(productRes.data.insertedId){
        // show success alart
        Swal.fire({
          title: `${data.name}`,
          text: "You clicked the button!",
          icon: "success"
        });
        
      }
    }
  };

  return (
    <div className="py-20 ">
      <h1 className="pb-5 text-2xl text-white font-semibold text-center">
        Add New Product
      </h1>

      <div className="space-y-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center space-y-2"
        >
          <input
            {...register("name")}
            type="text"
            name="name"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs"
          />{" "}
          <input
            {...register("price")}
            type="number"
            name="price"
            placeholder="price"
            className="input input-bordered w-full max-w-xs"
          />
          {/* product image file */}
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
          {/* description text box */}
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered w-80"
            placeholder="Products description.."
          ></textarea>
          <button className="btn btn-accent">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
