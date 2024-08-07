const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Route GET /api/tags to show all tags and associcated products
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      order: [['id', 'ASC']],
      include: [{ model: ProductTag, model: Product}]
    });
    
    if (!tagData) {
      res.status(404).json({ message: 'No tag found in the db' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Route GET /api/tags/:id to show an id specified  tag and associcated products
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, model: Product }]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Route POST /api/tags/ to create a tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// Route PUT /api/tags/:id to update an id specified  tag
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    });

    if (tagData[0] === 0) {
      throw new Error("message: 'No tag found with that id or error in req.body!'");
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// Route DELETE /api/tags/:id to remove an id specified tag
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
