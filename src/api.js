const getImagePaths = (images, category) => {
  return images.keys().map(filePath => `${process.env.PUBLIC_URL}/public-assets/${category}/${filePath.replace('./', '')}`)
}

export const getProductData = () => {
  // need to pass literals into require.context, no dynamic variables
  const lookerImages = require.context('../public/public-assets/looker', true, /\.(png|jpeg|jpg)$/)
  const charmerImages = require.context('../public/public-assets/charmer', true, /\.(png|jpeg|jpg)$/)
  const senserImages = require.context('../public/public-assets/senser', true, /\.(png|jpeg|jpg)$/)
  const inspectorImages = require.context('../public/public-assets/inspector', true, /\.(png|jpeg|jpg)$/)
  const explorerImages = require.context('../public/public-assets/explorer', true, /\.(png|jpeg|jpg)$/)
  const thinkerImages = require.context('../public/public-assets/thinker', true, /\.(png|jpeg|jpg)$/)

  return [
    {
      header: 'The Looker Play Kit',
      description: 'Sensitive to light and sound, your newborn is already becoming aware of their new world. This Play Kit helps them build new brain connections with high-contrast images and black and white sensory mittens.',
      age: '0-12',
      images: getImagePaths(lookerImages, 'looker')
    },
    {
      header: 'The Charmer Play Kit',
      description: 'Your baby may start to recognize your face—cooing at you, smiling, and delighting everyone they meet. This Play Kit is designed to let your baby explore with their mouth, eyes, and hands as their personality emerges and their social awareness grows.',
      age: '3-4',
      images: getImagePaths(charmerImages, 'charmer')
    },
    {
      header: 'The Senser Play Kit',
      description: 'Your baby may be tasting, mouthing, and feeling everything they can get their hands on right now. This Play Kit helps your baby investigate their world around them, while working on getting themself closer to what looks and sounds exciting to them.',
      age: '5-6',
      images: getImagePaths(senserImages, 'senser')
    },
    {
      header: 'The Inspector Play Kit',
      description: "Your baby is more aware of everything around them and fascinated with details. This Play Kit makes the most of your baby's natural curiosity about how things work with opportunities to explore ure, practice nesting and stacking, and learn about object permanence.",
      age: '7-8',
      images: getImagePaths(inspectorImages, 'inspector')
    },
    {
      header: 'The Explorer Play Kit',
      description: 'Your baby loves to see the effect they can have on their environment. This Play Kit is designed to experiment with gravity, practice balance, and begin coordinating both sides of their body.',
      age: '9-10',
      images: getImagePaths(explorerImages, 'explorer')
    },
    {
      header: 'The Thinker Play Kit',
      description: 'Your baby is starting to put it all together and understand concepts at a deeper level. This Play Kit encourages your baby to define and organize information while engaging their budding imagination.',
      age: '11-12',
      images: getImagePaths(thinkerImages, 'thinker')
    }
  ]
}

export const getPlaceholderKit = () => {
  return {
    header: "Find My Kit",
    description: 'Support your child’s learning during important developmental windows with play essentials that are tailored to their exact stage. Our toys are built to last and made with sustainably harvested wood, organic cotton, nontoxic paint, and baby-safe plastics.',
    age: '',
    images: [`${process.env.PUBLIC_URL}/public-assets/placeholder.jpeg`]
  }
}
