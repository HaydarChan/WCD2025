import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Define Product Type
interface Product {
  name: string;
  image: string;
  price: string;
  from: string;
  discount: string;
  store: string;
  place: string;
  ongkir: number;
}

const AddProductModal = ({ setProductList }: { setProductList: (param: Product[]) => void }) => {
  const [newProduct, setNewProduct] = useState<Product>({
    name: "",
    image: "",
    price: "",
    from: "",
    discount: "",
    store: "",
    place: "",
    ongkir: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // @ts-expect-error kayanya bener deh
    setProductList((prevList) => [...prevList, newProduct]);
    setNewProduct({
      name: "",
      image: "",
      price: "",
      from: "",
      discount: "",
      store: "",
      place: "",
      ongkir: 0,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-3xl bg-transparent shadow-none text-orange-400 hover:bg-transparent flex flex-col items-center justify-center text-center gap-1">
          <span>+</span>
          <span className="text-base">Add a Product</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a New Product</DialogTitle>
          <DialogDescription>Fill in the details below to add a new product.</DialogDescription>
        </DialogHeader>
        
        {/* Form */}
        <div className="grid gap-2 py-4">
          <Label>Name</Label>
          <Input name="name" value={newProduct.name} onChange={handleChange} placeholder="Product Name" />
          
          <Label>Image URL</Label>
          <Input name="image" value={newProduct.image} onChange={handleChange} placeholder="Image URL" />
          
          <Label>Price</Label>
          <Input name="price" value={newProduct.price} onChange={handleChange} placeholder="Price" />
          
          <Label>From</Label>
          <Input name="from" value={newProduct.from} onChange={handleChange} placeholder="Country of Origin" />
          
          <Label>Discount</Label>
          <Input name="discount" value={newProduct.discount} onChange={handleChange} placeholder="Discount (%)" />
          
          <Label>Store</Label>
          <Input name="store" value={newProduct.store} onChange={handleChange} placeholder="Store Name" />
          
          <Label>Place</Label>
          <Input name="place" value={newProduct.place} onChange={handleChange} placeholder="Location" />
          
          <Label>Ongkir</Label>
          <Input name="ongkir" value={newProduct.ongkir} onChange={handleChange} placeholder="Shipping Cost" />
        </div>
        
        <Button onClick={handleSubmit} className="w-full bg-orange-400 hover:bg-orange-500">
          Add Product
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
