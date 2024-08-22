import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { Download } from "lucide-react";
import { Upload } from "lucide-react";

const Form: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto my-5 w-full">
      <div className="grid gap-4 mx-10">
        <div className="flex w-full">
          <div className="text-3xl font-bold">Frontend.</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full px-10 mt-5 gap-5">
        <div className="flex gap-5">
          <div className="w-full">
            <Button className="col-span-1">
              <Plus className="mr-2 h-4 w-4" />
              Tambah
            </Button>
          </div>
          <div className="flex gap-5">
            <Button className="bg-gray-400 text-black">
              <Download className="mr-2 h-4 w-4" />
              Import
            </Button>
            <Button className="bg-gray-400 text-black">
              <Upload className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        <div className="flex gap-5 w-full flex-col sm:flex-row">
          <div className="xl:w-[70%] w-full">
            <Input type="text" placeholder="Search" />
          </div>
          <div className="xl:w-[30%] w-full">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="2020" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
