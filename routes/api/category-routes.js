const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const locationData = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const [updatedRows] = await Category.update(
      { category_name: req.body.category_name },
      { where: { id: req.params.id } }
    );
    if (updatedRows === 1) {
      res.status(200).json({ message: 'Category Updated', status: 'success' });
    } else {
      res.status(404).json({ message: 'Category not found', status: 'error' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred', status: 'error' });
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedRows = await Category.destroy({
      where: { id: req.params.id }
    });
    if (deletedRows === 1) {
      res.status(200).json({ message: 'Category Deleted', status: 'success' });
    } else {
      res.status(404).json({ message: 'Category not found', status: 'error' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred', status: 'error' });
  }
});

module.exports = router;
