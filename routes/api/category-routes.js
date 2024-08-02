const router = require('express').Router();
const { Category, Product } = require('../../models');

// Route GET /api/categories to show all categories and associcated products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      order: [['id', 'ASC']],
      include: [{ model: Product }]
    });
    
    if (!categoryData) {
      res.status(404).json({ message: 'No category found in the db' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Route GET /api/categories/:id to show an id specified category and associcated products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Route POST /api/categories/ to create a category and return the whole json
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// Route PUT /api/categories/:id to update an id specified category
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    });

    if (categoryData[0] === 0) {
      throw new Error("message: 'No category found with that id or error in req.body!'");
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// Route DELETE /api/categories/:id to remove a category with the specific
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
