const Product = require("../models/product.model");
const ApiFeature = require("../utils/api-features.utils");

class ProductController {
  #_productModel;

  constructor() {
    this.#_productModel = Product;
  }

  getAllProducts = async (req, res) => {
    const query = { ...req.query };

    // GET ALL FILTERED PRODUCTS COUNT
    const allResults = await new ApiFeature(this.#_productModel.find(), query)
      .filter()
      .sort("price")
      .limitFields()
      .getQuery()
      .countDocuments();

    // EXECUTE QUERY
    const allProducts = await new ApiFeature(this.#_productModel.find(), query)
      .filter()
      .sort("price")
      .limitFields()
      .paginate()
      .getQuery();

    res.send({
      message: "success",
      page: req.query?.page || 0,
      limit: req.query?.limit || 10,
      results: allResults,
      data: allProducts,
    });
  };
}

module.exports = new ProductController();
