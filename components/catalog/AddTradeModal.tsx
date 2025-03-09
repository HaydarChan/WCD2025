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

// Define Trade Item Type
interface TradeItem {
  name: string;
  image: string;
  store: string;
  place: string;
  status: string;
}

const AddTradeModal = ({ setTradeList }: { setTradeList: (param: TradeItem[]) => void }) => {
  const [newTrade, setNewTrade] = useState<TradeItem>({
    name: "",
    image: "",
    store: "",
    place: "",
    status: "pending",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTrade({ ...newTrade, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // @ts-ignore
    setTradeList((prevList: TradeItem[]) => [...prevList, newTrade]);
    setNewTrade({
      name: "",
      image: "",
      store: "",
      place: "",
      status: "pending",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-3xl bg-transparent shadow-none text-orange-400 hover:bg-transparent flex flex-col items-center justify-center text-center gap-1">
          <span>+</span>
          <span className="text-base">Offer Trade</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Offer a Trade</DialogTitle>
          <DialogDescription>Fill in the details below to offer a trade.</DialogDescription>
        </DialogHeader>
        
        {/* Form */}
        <div className="grid gap-2 py-4">
          <Label>Item Name</Label>
          <Input name="name" value={newTrade.name} onChange={handleChange} placeholder="Item Name" />
          
          <Label>Image URL</Label>
          <Input name="image" value={newTrade.image} onChange={handleChange} placeholder="Image URL" />
          
          <Label>Store</Label>
          <Input name="store" value={newTrade.store} onChange={handleChange} placeholder="Store Name" />
          
          <Label>Place</Label>
          <Input name="place" value={newTrade.place} onChange={handleChange} placeholder="Marketplace / Location" />
        </div>
        
        <Button onClick={handleSubmit} className="w-full bg-orange-400 hover:bg-orange-500">
          Offer Trade
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddTradeModal;
