const Product = require("../Schema/productSchema.js");

//route controller for get all products

const getProducts = async (req, res) => {
  try 
  {
    const { page, limit } = req.params;
    if (page && limit) {
      const skip = Number(page) * Number(limit);
      const data = await Product.find({}).limit(Number(limit)).skip(skip);
      if (data) {
        res.status(200).json({ length: data.length, data: data });
      }
    }
  } 
  catch (err) 
  {
    res.status(404).json({ message: err.message});
  }
};


//route controllers for posting a new product

const postProduct = async (req, res) => {
  const { name, description, category, price, image } = req.body;
  try{
        if(name.trim()!=='' && category && price>0)
        {
        const data = await Product(req.body)
        await data.save();
        res.status(200).json({ message: data });
         }
  }
    catch(err){
    res.status(404).json({ message: err.message });
    }

};




module.exports = { getProducts, postProduct };
