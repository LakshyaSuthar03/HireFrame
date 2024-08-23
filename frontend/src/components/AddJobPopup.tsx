import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "./Button";
import axios from "axios";
import { backend } from "../../config.json";
import { useParams } from "react-router-dom";

type AddJobPopupProps = {
  closeAddJobPopupState: (open: boolean) => void;
};

const AddJobPopup = ({ closeAddJobPopupState }: AddJobPopupProps) => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [requirements, setRequirements] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [expRange, setExpRange] = useState<string>("");
  const [salRange, setSalRange] = useState<string>("");
  const { id } = useParams();

  const handleAddJob = () => {
    axios
      .post(`${backend}/job/create`, {
        layout_id: id,
        title: title,
        description: desc,
        requirements: requirements,
        location: location,
        experience_range: expRange,
        salary_range: salRange,
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          alert("Job added successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-3/5 h-max px-3 py-2">
      <div
        className="absolute top-0 right-0 mt-3 mr-3 cursor-pointer"
        onClick={() => closeAddJobPopupState(false)}
      >
        <IoCloseOutline />
      </div>
      <div>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Title"
            className="w-full border-2 pl-3 pr-3 py-1 rounded-md focus:outline-none placeholder:text-sm"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="relative w-full mt-2">
          <textarea
            name="description"
            placeholder="Description"
            className="w-full border-2 pl-3 pr-3 py-1 rounded-md focus:outline-none placeholder:text-sm h-24 resize-none"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="relative w-full mt-2">
          <textarea
            name="requirements"
            placeholder="Requirements"
            className="w-full border-2 pl-3 pr-3 py-1 rounded-md focus:outline-none placeholder:text-sm h-24 resize-none"
            onChange={(e) => setRequirements(e.target.value)}
          ></textarea>
        </div>
        <div className="relative w-full mt-2">
          <input
            type="text"
            placeholder="Location"
            className="w-full border-2 pl-3 pr-3 py-1 rounded-md focus:outline-none placeholder:text-sm"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="relative w-full mt-2">
          <input
            type="text"
            placeholder="Experience"
            className="w-full border-2 pl-3 pr-3 py-1 rounded-md focus:outline-none placeholder:text-sm"
            onChange={(e) => setExpRange(e.target.value)}
          />
        </div>
        <div className="relative w-full mt-2">
          <input
            type="text"
            placeholder="Salary"
            className="w-full border-2 pl-3 pr-3 py-1 rounded-md focus:outline-none placeholder:text-sm"
            onChange={(e) => setSalRange(e.target.value)}
          />
        </div>
        <div onClick={handleAddJob}>
          <Button text="Add Job" icon="+" />
        </div>
      </div>
    </div>
  );
};

export default AddJobPopup;
