import foodModel from "../models/foodModel.js";
import fs from 'fs';

// Add food item
const addFood = async (req, res) => {
    try {
        // Check if image file is uploaded
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image is required" });
        }

        // Validate required fields
        const { name, description, price, category } = req.body;
        if (!name || !description || !price || !category) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Construct the food object
        let image_filename = req.file.filename;
        const food = new foodModel({
            name,
            description,
            price,
            category,
            image: image_filename
        });

        // Save the food item to the database
        await food.save();
        return res.status(201).json({ success: true, message: "Food Added", food });
    } catch (error) {
        console.error("Error adding food:", error);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
};

//add food list
const listFood = async (req,res)=>{
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods});
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Server Error"})
    }
}

//remove food items

const removeFood = async (req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food item removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Server Error"})
    }
}

export { addFood, listFood ,removeFood};
