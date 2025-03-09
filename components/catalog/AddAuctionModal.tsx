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

// Define Auction Item Type
interface AuctionItem {
  name: string;
  image: string;
  openBid: string;
  currentBid: string;
  timeLeft: number;
  store: string;
  place: string;
  ongkir: number;
}

const AddAuctionModal = ({ setAuctionList }: { setAuctionList: (param: AuctionItem[]) => void }) => {
  const [newAuction, setNewAuction] = useState<AuctionItem>({
    name: "",
    image: "",
    openBid: "",
    currentBid: "",
    timeLeft: 0,
    store: "",
    place: "",
    ongkir: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAuction({ ...newAuction, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // @ts-ignore
    setAuctionList((prevList: AuctionItem[]) => [...prevList, newAuction]);
    setNewAuction({
      name: "",
      image: "",
      openBid: "",
      currentBid: "",
      timeLeft: 0,
      store: "",
      place: "",
      ongkir: 0,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-3xl bg-transparent shadow-none text-orange-500 hover:bg-transparent flex flex-col items-center justify-center text-center gap-1">
          <span>+</span>
          <span className="text-base">Create Auction</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a New Auction</DialogTitle>
          <DialogDescription>Fill in the details below to start an auction.</DialogDescription>
        </DialogHeader>
        
        {/* Form */}
        <div className="grid gap-2 py-4">
          <Label>Item Name</Label>
          <Input name="name" value={newAuction.name} onChange={handleChange} placeholder="Item Name" />
          
          <Label>Image URL</Label>
          <Input name="image" value={newAuction.image} onChange={handleChange} placeholder="Image URL" />
          
          <Label>Opening Bid</Label>
          <Input name="openBid" value={newAuction.openBid} onChange={handleChange} placeholder="Starting Price" />
          
          <Label>Current Bid</Label>
          <Input name="currentBid" value={newAuction.currentBid} onChange={handleChange} placeholder="Current Highest Bid" />
          
          <Label>Time Left (seconds)</Label>
          <Input name="timeLeft" type="number" value={newAuction.timeLeft} onChange={handleChange} placeholder="Time Left in Seconds" />
          
          <Label>Store</Label>
          <Input name="store" value={newAuction.store} onChange={handleChange} placeholder="Store Name" />
          
          <Label>Place</Label>
          <Input name="place" value={newAuction.place} onChange={handleChange} placeholder="Location" />
          
          <Label>Shipping Cost (Ongkir)</Label>
          <Input name="ongkir" type="number" value={newAuction.ongkir} onChange={handleChange} placeholder="Shipping Cost" />
        </div>
        
        <Button onClick={handleSubmit} className="w-full bg-orange-500 hover:bg-orange-600">
          Start Auction
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddAuctionModal;
