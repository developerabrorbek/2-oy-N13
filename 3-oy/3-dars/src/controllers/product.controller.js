const Product = require("../models/product.model");

class ProductController {
  #_productModel;

  constructor() {
    this.#_productModel = Product;
  }

  getAllProducts = async (req, res) => {
    let query = { ...req.query };

    const excludedQueries = ["limit", "page", "sort"];

    // Remove excluded fields from query
    excludedQueries.map((efl) => delete query[efl]);

    // Replacing query fields
    query = JSON.parse(
      JSON.stringify(query).replace(
        /\b(lt|lte|gt|gte)\b/g,
        (match) => `$${match}`
      )
    );

    let databaseQuery = this.#_productModel.find(query);

    // Pagination
    const limit = req.query?.limit || 10;
    const offset = req.query?.page ? (req.query.page - 1) * limit : 0;

    const allProducts = await databaseQuery
      .limit(limit)
      .skip(offset)

    // Sorting
    

    res.send({
      message: "success",
      page: req.query?.page || 0,
      limit,
      results: allProducts.length,
      data: allProducts,
    });
  };
}

module.exports = new ProductController();
