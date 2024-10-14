const { default: mongoose } = require('mongoose')

const componentSchema = new mongoose.Schema(
  {
    img: { type: String, trim: true, required: true },
    description: { type: String, required: false },
    title: { type: String, required: false },
    price: { type: Number, required: false }
  },
  {
    timestamps: true,
    collection: 'components'
  }
)

const Component = mongoose.model('components', componentSchema, 'components')
module.exports = Component
