const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res
        .status(400)
        .json({ message: 'No categories found' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res
        .status(400)
        .json({
          message: 'No category found was found',
        });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newCategoryData = await Category.create(req.body);
    if (!newCategoryData) {
      res
        .status(400)
        .json({ message: 'No categories found' });
      return;
    }
    res.status(200).json(newCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async(req, res) => {
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then((updatedCategory) => {
      res.status(200).json(updatedCategory);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    res.json(categoryData);
    res.status(400).json(err);
});

module.exports = router;
