// Base de datos de productos
if (!window.productsDatabase) {
    window.productsDatabase = [
        //Lifepod Kits......................................................................
        {
            id: 'lifepod-banana-custard-kit',
            name: 'Banana Custard Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 70.00,
            image: 'banana-custard-kit.jpg',
            description: 'Kit completo Lifepod con sabor a banana custard cremoso y dulce.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: 'Más vendido',
        },
        {
            id: 'lifepod-pink-lemonade-kit',
            name: 'Pink Lemonade Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'frutal',
            price: 80.00,
            offerprice: 70.00,
            image: 'pink-lemonade-kit.jpg',
            description: 'Kit completo Lifepod con sabor a limonada rosada.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: 'Más vendido',
        },
        {
            id: 'lifepod-dragon-fruit-ice-kit',
            name: 'Dragon Fruit Ice Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 70.00,
            image: 'dragon-fruit-ice-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Dragon Fruit Ice.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-cranberry-cake-kit',
            name: 'Cranberry Cake Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Dulce',
            price: 80.00,
            offerprice: 70.00,
            image: 'cranberry-cake-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Cranberry Cake.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-miami-mint-kit',
            name: 'Miami Mint Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Mentolado',
            price: 80.00,
            offerprice: 70.00,
            image: 'miami-mint-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Miami Mint.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-red-orange-kit',
            name: 'Red Orange Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 70.00,
            image: 'red-orange-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Red Orange.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-kiwi-berry-kit',
            name: 'Kiwi Berry Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 70.00,
            image: 'kiwi-berry-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Kiwi Berry.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-blackberry-ice-kit',
            name: 'BlackBerry Ice Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 70.00,
            image: 'blackberry-ice-kit.jpg',
            description: 'Kit completo Lifepod con sabor a BlackBerry Ice.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-love-66-kit',
            name: 'Love 66 Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 70.00,
            image: 'love-66-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Love 66.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-white-mocha-ice-kit',
            name: 'White Mocha Ice Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Cremoso',
            price: 80.00,
            offerprice: 70.00,
            image: 'white-mocha-ice-kit.jpg',
            description: 'Kit completo Lifepod con sabor a White Mocha Ice.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-clear-kit',
            name: 'Clear Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Neutro',
            price: 80.00,
            offerprice: 70.00,
            image: 'clear-kit.jpg',
            description: 'Kit completo Lifepod con sabor neutro Clear.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-blue-strawberry-cake-kit',
            name: 'Blue Strawberry Cake Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Dulce',
            price: 80.00,
            offerprice: 70.00,
            image: 'blue-strawberry-cake-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Blue Strawberry Cake.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-mint-waterberry-kit',
            name: 'Mint Waterberry Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Mentolado',
            price: 80.00,
            offerprice: 70.00,
            image: 'mint-waterberry-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Mint Waterberry.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-strong-apple-kit',
            name: 'Strong Apple Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 70.00,
            image: 'strong-apple-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Strong Apple.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-cherry-lime-ice-kit',
            name: 'Cherry Lime Ice Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 70.00,
            image: 'cherry-lime-ice-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Cherry Lime Ice.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-capuccino-kit',
            name: 'Capuccino Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Cremoso',
            price: 80.00,
            offerprice: 70.00,
            image: 'capuccino-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Capuccino.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-cranberry-soda-kit',
            name: 'Cranberry Soda Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Refrescante',
            price: 80.00,
            offerprice: 70.00,
            image: 'cranberry-soda-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Cranberry Soda.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-watermelon-peach-ice-kit',
            name: 'Watermelon Peach Ice Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 70.00,
            image: 'watermelon-peach-ice-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Watermelon Peach Ice.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-candy-ice-kit',
            name: 'Candy Ice Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Dulce',
            price: 80.00,
            offerprice: 70.00,
            image: 'candy-ice-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Candy Ice.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-blueberry-strawberry-kit',
            name: 'Blueberry Strawberry Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 70.00,
            image: 'blueberry-strawberry-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Blueberry Strawberry.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-peach-mango-kit',
            name: 'Peach Mango Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 70.00,
            image: 'peach-mango-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Peach Mango.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-green-apple-ice-kit',
            name: 'Green Apple Ice Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 70.00,
            image: 'green-apple-ice-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Green Apple Ice.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-tobacco-virginia-kit',
            name: 'Tobacco Virginia Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Tabaco',
            price: 80.00,
            offerprice: 70.00,
            image: 'tobacco-virginia-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Tobacco Virginia.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-summer-love-kit',
            name: 'Summer Love Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 70.00,
            image: 'summer-love-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Summer Love.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-monster-drink-kit',
            name: 'Monster Drink Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Energético',
            price: 80.00,
            offerprice: 70.00,
            image: 'monster-drink-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Monster Drink.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-banana-ice-kit',
            name: 'Banana Ice Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 70.00,
            image: 'banana-ice-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Banana Ice.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-grape-honeydew-kit',
            name: 'Grape Honeydew Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 70.00,
            image: 'grape-honeydew-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Grape Honeydew.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-menthol-kit',
            name: 'Menthol Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Mentolado',
            price: 80.00,
            offerprice: 70.00,
            image: 'menthol-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Menthol.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-blueberry-mint-kit',
            name: 'Blueberry Mint Kit',
            brand: 'Lifepod',
            type: 'kit',
            flavor: 'Mentolado',
            price: 80.00,
            offerprice: 70.00,
            image: 'blueberry-mint-kit.jpg',
            description: 'Kit completo Lifepod con sabor a Blueberry Mint.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },

        //Lifepod Recargas...................................................................
        {
            id: 'lifepod-banana-custard-refill',
            name: 'Banana Custard Prefilled',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'banana-custard-refill.jpg',
            description: 'Recarga de 18ml con sabor a banana custard cremoso y dulce.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },

        {
            id: 'lifepod-banana-ice-refill',
            name: 'Banana Ice Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'banana-ice-refill.jpg',
            description: 'Recarga de 18ml con sabor a banana con un toque de hielo.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-blackberry-ice-refill',
            name: 'Blackberry Ice Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'blackberry-ice-refill.jpg',
            description: 'Recarga de 18ml con sabor a mora helada.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-blueberry-mint-refill',
            name: 'Blueberry Mint Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'blueberry-mint-refill.jpg',
            description: 'Recarga de 18ml con sabor a arándano y menta refrescante.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-blue-cake-strawberry-refill',
            name: 'Blue Cake Strawberry Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'blue-cake-strawberry-refill.jpg',
            description: 'Recarga de 18ml con sabor a pastel de fresa con toques cremosos.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-candy-ice-refill',
            name: 'Candy Ice Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Dulce',
            price: 53.00,
            offerprice: 43.00,
            image: 'candy-ice-refill.jpg',
            description: 'Recarga de 18ml con sabor a caramelos con un toque de frescura.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-capuccino-refill',
            name: 'Capuccino Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Café',
            price: 53.00,
            offerprice: 43.00,
            image: 'capuccino-refill.jpg',
            description: 'Recarga de 18ml con sabor a capuccino suave y cremoso.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-white-mocha-ice-refill',
            name: 'White Mocha Ice Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Café',
            price: 53.00,
            offerprice: 43.00,
            image: 'white-mocha-ice-refill.jpg',
            description: 'Recarga de 18ml con sabor a mocha blanco con un toque helado.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-cherry-lime-ginger-refill',
            name: 'Cherry Lime Ginger Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'cherry-lime-ginger-refill.jpg',
            description: 'Recarga de 18ml con sabor a cereza, lima y jengibre.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-cranberry-soda-refill',
            name: 'Cranberry Soda Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'cranberry-soda-refill.jpg',
            description: 'Recarga de 18ml con sabor a soda de arándano rojo.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-dragon-fruit-ice-refill',
            name: 'Dragon Fruit Ice Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'dragon-fruit-ice-refill.jpg',
            description: 'Recarga de 18ml con sabor a pitahaya con un toque helado.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-grape-honey-refill',
            name: 'Grape Honey Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'grape-honey-refill.jpg',
            description: 'Recarga de 18ml con sabor a uva con un toque dulce de miel.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-green-apple-ice-refill',
            name: 'Green Apple Ice Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'green-apple-ice-refill.jpg',
            description: 'Recarga de 18ml con sabor a manzana verde helada.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-summer-love-refill',
            name: 'Summer Love Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'summer-love-refill.jpg',
            description: 'Recarga de 18ml con una mezcla frutal refrescante y veraniega.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-mint-berries-watermelon-refill',
            name: 'Mint Berries Watermelon Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'mint-berries-watermelon-refill.jpg',
            description: 'Recarga de 18ml con sabor a menta, frutos rojos y sandía.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-kiwi-berry-refill',
            name: 'Kiwi Berry Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'kiwi-berry-refill.jpg',
            description: 'Recarga de 18ml con sabor a kiwi combinado con frutos del bosque.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-love66-refill',
            name: 'Love66 Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'love66-refill.jpg',
            description: 'Recarga de 18ml con un sabor tropical dulce e intenso inspirado en Love66.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-menthol-refill',
            name: 'Menthol Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Mentolado',
            price: 53.00,
            offerprice: 43.00,
            image: 'menthol-refill.jpg',
            description: 'Recarga de 18ml con sabor mentolado clásico y refrescante.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-miami-mint-refill',
            name: 'Miami Mint Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Mentolado',
            price: 53.00,
            offerprice: 43.00,
            image: 'miami-mint-refill.jpg',
            description: 'Recarga de 18ml con sabor a menta fresca estilo Miami.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-monster-drink-refill',
            name: 'Monster Drink Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Bebida',
            price: 53.00,
            offerprice: 43.00,
            image: 'monster-drink-refill.jpg',
            description: 'Recarga de 18ml con sabor a bebida energética estilo Monster.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-blueberry-strawberry-refill',
            name: 'Blueberry Strawberry Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'blueberry-strawberry-refill.jpg',
            description: 'Recarga de 18ml con sabor a arándano y fresa dulce.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-pink-lemonade-refill',
            name: 'Pink Lemonade Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'pink-lemonade-refill.jpg',
            description: 'Recarga de 18ml con sabor a limonada rosada, cítrica y refrescante.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-watermelon-peach-ice-refill',
            name: 'Watermelon Peach Ice Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'watermelon-peach-ice-refill.jpg',
            description: 'Recarga de 18ml con sabor a sandía y durazno con un toque de frescura.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-tobacco-virginia-refill',
            name: 'Tobacco Virginia Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Tabaco',
            price: 53.00,
            offerprice: 43.00,
            image: 'tobacco-virginia-refill.jpg',
            description: 'Recarga de 18ml con sabor a tabaco Virginia clásico y suave.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-polar-ice-refill',
            name: 'Polar Ice Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Mentolado',
            price: 53.00,
            offerprice: 43.00,
            image: 'polar-ice-refill.jpg',
            description: 'Recarga de 18ml con un sabor intensamente mentolado tipo hielo polar.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-strawberry-watermelon-ice-refill',
            name: 'Strawberry Watermelon Ice Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'strawberry-watermelon-ice-refill.jpg',
            description: 'Recarga de 18ml con sabor a fresa y sandía con un toque helado.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-coconut-watermelon-refill',
            name: 'Coconut Watermelon Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'coconut-watermelon-refill.jpg',
            description: 'Recarga de 18ml con sabor a coco y sandía tropical.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-passion-mango-frost-refill',
            name: 'Passion Mango Frost Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'passion-mango-frost-refill.jpg',
            description: 'Recarga de 18ml con sabor a maracuyá, mango y un toque helado.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'lifepod-green-grape-ice-refill',
            name: 'Green Grape Ice Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'green-grape-ice-refill.jpg',
            description: 'Recarga de 18ml con sabor a uva verde helada.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'lifepod-dragon-blue-razz-refill',
            name: 'Dragon Blue Razz Recarga',
            brand: 'Lifepod',
            type: 'recarga',
            flavor: 'Frutal',
            price: 53.00,
            offerprice: 43.00,
            image: 'dragon-blue-razz-refill.jpg',
            description: 'Recarga de 18ml con sabor a pitahaya y frambuesa azul.',
            puffs: '10000',
            capacity: '18ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },

        //Oxbar Kit Completo
        {
            id: 'oxbar-grape-bull-kit',
            name: 'Grape Bull Kit',
            brand: 'Oxbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 75.00,
            image: 'grape-bull-kit.jpg',
            description: 'Recarga de 18ml con sabor a uvas y bebida energética estilo Red Bull.',
            puffs: '25000',
            capacity: '20ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'oxbar-cherry-cola-ice-kit',
            name: 'Cherry Cola Ice Kit',
            brand: 'Oxbar',
            type: 'kit',
            flavor: 'Refrescante',
            price: 80.00,
            offerprice: 75.00,
            image: 'cherry-cola-ice-kit.jpg',
            description: 'Recarga de 18ml con un sabor clásico de cereza y cola con un toque helado.',
            puffs: '25000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: 'Más vendido',
        },
        {
            id: 'oxbar-watermelon-ice-kit',
            name: 'Watermelon Ice Kit',
            brand: 'Oxbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 75.00,
            image: 'watermelon-ice-kit.jpg',
            description: 'Recarga de 18ml con un sabor dulce y refrescante de sandía helada.',
            puffs: '25000',
            capacity: '20ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'oxbar-mango-peach-ice-kit',
            name: 'Mango Peach Ice Kit',
            brand: 'Oxbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 75.00,
            image: 'mango-peach-ice-kit.jpg',
            description: 'Recarga de 18ml con la mezcla tropical de mango y durazno, con un final frío.',
            puffs: '25000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: 'Más vendido',
        },
        {
            id: 'oxbar-orange-fanta-kit',
            name: 'Orange Fanta Kit',
            brand: 'Oxbar',
            type: 'kit',
            flavor: 'Refrescante',
            price: 80.00,
            offerprice: 75.00,
            image: 'orange-fanta-kit.jpg',
            description: 'Recarga de 18ml con un sabor cítrico inspirado en la clásica gaseosa Fanta de naranja.',
            puffs: '25000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'oxbar-strawberry-watermelon-kit',
            name: 'Strawberry Watermelon Kit',
            brand: 'Oxbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 75.00,
            image: 'strawberry-watermelon-kit.jpg',
            description: 'Recarga de 18ml con la mezcla jugosa de fresa y sandía.',
            puffs: '25000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'oxbar-blueberry-raspberry-lemon-kit',
            name: 'Blueberry Raspberry Lemon Kit',
            brand: 'Oxbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 75.00,
            image: 'blueberry-raspberry-lemon-kit.jpg',
            description: 'Recarga de 18ml con una fusión frutal de arándanos, frambuesas y limón ácido.',
            puffs: '25000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'oxbar-strawberry-watermelon-peach-kit',
            name: 'Strawberry Watermelon Peach Kit',
            brand: 'Oxbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 80.00,
            offerprice: 75.00,
            image: 'strawberry-watermelon-peach-kit.jpg',
            description: 'Recarga de 18ml con la deliciosa combinación de fresa, sandía y durazno.',
            puffs: '25000',
            capacity: '20ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },

        //Elfbar Kit Completo 10K
        {
            id: 'elfbar-blackberry-cramberry-10k-kit',
            name: 'Blackberry Cramberry 10k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 70.00,
            offerprice: 60.00,
            image: 'blackberry-cramberry-10k-kit.jpg',
            description: 'Kit de 20ml con la deliciosa combinación de moras y cerezas.',
            puffs: '10000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'elfbar-blueberry-ice-10k-kit',
            name: 'Blueberry Ice 10k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 70.00,
            offerprice: 60.00,
            image: 'blueberry-ice-10k-kit.jpg',
            description: 'Kit de 20ml con un refrescante sabor a arándano helado.',
            puffs: '10000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: 'Nuevo',
        },
        {
            id: 'elfbar-blueberry-mint-10k-kit',
            name: 'Blueberry Mint 10k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 70.00,
            offerprice: 60.00,
            image: 'blueberry-mint-10k-kit.jpg',
            description: 'Kit de 20ml con un balanceado sabor entre arándano y menta.',
            puffs: '10000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: 'Nuevo',
        },
        {
            id: 'elfbar-cherry-watermelon-10k-kit',
            name: 'Cherry Watermelon 10k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 70.00,
            offerprice: 60.00,
            image: 'cherry-watermelon-10k-kit.jpg',
            description: 'Kit de 20ml con cereza dulce y sandía jugosa.',
            puffs: '10000',
            capacity: '20ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'elfbar-double-mango-10k-kit',
            name: 'Double Mango 10k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 70.00,
            offerprice: 60.00,
            image: 'double-mango-10k-kit.jpg',
            description: 'Kit de 20ml con doble explosión de mango tropical.',
            puffs: '10000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'elfbar-blue-razz-ice-10k-kit',
            name: 'Blue Razz Ice 10k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 70.00,
            offerprice: 60.00,
            image: 'blue-razz-ice-10k-kit.jpg',
            description: 'Kit de 20ml con frambuesa azul y un toque helado.',
            puffs: '10000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'elfbar-grape-cherry-10k-kit',
            name: 'Grape Cherry 10k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 70.00,
            offerprice: 60.00,
            image: 'grape-cherry-10k-kit.jpg',
            description: 'Kit de 20ml con uvas dulces y cerezas vibrantes.',
            puffs: '10000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'elfbar-miami-mint-10k-kit',
            name: 'Miami Mint 10k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Mentolado',
            price: 70.00,
            offerprice: 60.00,
            image: 'miami-mint-10k-kit.jpg',
            description: 'Kit de 20ml con una menta fresca al estilo Miami.',
            puffs: '10000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'elfbar-pineaple-ice-10k-kit',
            name: 'Pineaple Ice 10k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 70.00,
            offerprice: 60.00,
            image: 'pineaple-ice-10k-kit.jpg',
            description: 'Kit de 20ml con piña tropical y un toque frío.',
            puffs: '10000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'elfbar-strawberry-ice-10k-kit',
            name: 'Strawberry Ice 10k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 70.00,
            offerprice: 60.00,
            image: 'strawberry-ice-10k-kit.jpg',
            description: 'Kit de 20ml con fresa dulce y efecto refrescante.',
            puffs: '10000',
            capacity: '20ml',
            nicotine: '5%',
            available: false,
            tag: '',
        },
        {
            id: 'elfbar-strawberry-kiwi-ice-10k-kit',
            name: 'Strawberry Kiwi Ice 10k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 70.00,
            offerprice: 60.00,
            image: 'strawberry-kiwi-ice-10k-kit.jpg',
            description: 'Kit de 20ml con fresas y kiwis helados.',
            puffs: '10000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },
        {
            id: 'elfbar-watermelon-ice-10k-kit',
            name: 'Watermelon Ice 10k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 70.00,
            offerprice: 60.00,
            image: 'watermelon-ice-10k-kit.jpg',
            description: 'Kit de 20ml con sandía refrescante y toque mentolado.',
            puffs: '10000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: '',
        },

        //Elfbar Kit Completo 40K
        {
            id: 'elfbar-watermelon-ice-40k-kit',
            name: 'Watermelon Ice 40k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 90.00,
            offerprice: 80.00,
            image: 'watermelon-ice-40k-kit.jpg',
            description: 'Kit de 20ml con sandía dulce y un toque helado.',
            puffs: '40000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: 'Nuevo',
        },
        {
            id: 'elfbar-grape-ice-40k-kit',
            name: 'Grape Ice 40k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 90.00,
            offerprice: 80.00,
            image: 'grape-ice-40k-kit.jpg',
            description: 'Kit de 20ml con uvas frescas y efecto mentolado.',
            puffs: '40000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: 'Nuevo',
        },
        {
            id: 'elfbar-summer-splash-40k-kit',
            name: 'Summer Splash 40k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 90.00,
            offerprice: 80.00,
            image: 'summer-splash-40k-kit.jpg',
            description: 'Kit de 20ml con una mezcla refrescante de frutas veraniegas.',
            puffs: '40000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: 'Nuevo',
        },
        {
            id: 'elfbar-mango-maginc-40k-kit',
            name: 'Mango Maginc 40k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 90.00,
            offerprice: 80.00,
            image: 'mango-maginc-40k-kit.jpg',
            description: 'Kit de 20ml con un mango tropical intensamente dulce.',
            puffs: '40000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: 'Nuevo',
        },
        {
            id: 'elfbar-miami-mint-40k-kit',
            name: 'Miami Mint 40k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Mentolado',
            price: 90.00,
            offerprice: 80.00,
            image: 'miami-mint-40k-kit.jpg',
            description: 'Kit de 20ml con una fresca explosión de menta estilo Miami.',
            puffs: '40000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: 'Nuevo',
        },
        {
            id: 'elfbar-strawberry-watermelon-40k-kit',
            name: 'Strawberry Watermelon 40k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 90.00,
            offerprice: 80.00,
            image: 'strawberry-watermelon-40k-kit.jpg',
            description: 'Kit de 20ml con fresas dulces y sandía jugosa.',
            puffs: '40000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: 'Nuevo',
        },
        {
            id: 'elfbar-strawberry-ice-40k-kit',
            name: 'Strawberry Ice 40k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 90.00,
            offerprice: 80.00,
            image: 'strawberry-ice-40k-kit.jpg',
            description: 'Kit de 20ml con fresa dulce y un efecto refrescante.',
            puffs: '40000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: 'Nuevo',
        },
        {
            id: 'elfbar-dragon-sirawnana-40k-kit',
            name: 'Dragon Sirawnana 40k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 90.00,
            offerprice: 80.00,
            image: 'dragon-sirawnana-40k-kit.jpg',
            description: 'Kit de 20ml con una exótica mezcla de dragon fruit y banana.',
            puffs: '40000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: 'Nuevo',
        },
        {
            id: 'elfbar-blue-razz-ice-40k-kit',
            name: 'Blue Razz Ice 40k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 90.00,
            offerprice: 80.00,
            image: 'blue-razz-ice-40k-kit.jpg',
            description: 'Kit de 20ml con frambuesa azul y frescura intensa.',
            puffs: '40000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: 'Nuevo',
        },
        {
            id: 'elfbar-green-apple-ice-40k-kit',
            name: 'Green Apple Ice 40k Kit',
            brand: 'Elfbar',
            type: 'kit',
            flavor: 'Frutal',
            price: 90.00,
            offerprice: 80.00,
            image: 'green-apple-ice-40k-kit.jpg',
            description: 'Kit de 20ml con manzana verde crujiente y toque mentolado.',
            puffs: '40000',
            capacity: '20ml',
            nicotine: '5%',
            available: true,
            tag: 'Nuevo',
        }

        // ... otros productos
    ];
}

// Función para mostrar productos en la tienda
// En productos.js, modificar la función displayStoreProducts
function displayStoreProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const sundayOffer = isSunday();
    
    container.innerHTML = products.map(product => `
        <div class="product-card">
            <a href="producto.html?id=${product.id}" class="product-card-link">
                <div class="product-image">
                    <img src="img/${product.brand}/${product.image}" alt="${product.name}" loading="lazy">
                    ${sundayOffer && product.offerprice ? '<span class="product-tag sunday-offer">Solo por Hoy🔥!!</span>' : ''}
                    ${!sundayOffer && product.tag ? `<span class="product-tag ${product.tag.toLowerCase().replace(' ', '-')}">${product.tag}</span>` : ''}
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <span class="product-brand">${product.brand}</span>
                    <p class="product-description-short">${product.description.substring(0, 60)}...</p>
                    <div class="product-price">
                        ${sundayOffer && product.offerprice ? `
                            <span class="old-price">S/${product.price.toFixed(2)}</span>
                            <span class="current-price">S/${product.offerprice.toFixed(2)}</span>
                        ` : `
                            ${product.oldPrice ? `<span class="old-price">S/${product.oldPrice.toFixed(2)}</span>` : ''}
                            <span class="current-price">S/${product.price.toFixed(2)}</span>
                        `}
                    </div>
                    <div class="btn ${!product.available ? 'disabled' : ''}">
                        ${product.available ? 'Ver Producto' : 'Agotado'}
                    </div>
                </div>
            </a>
        </div>
    `).join('') || '<p class="no-products">No se encontraron productos</p>';
}

// Función para mostrar productos en el admin
function displayAdminProducts(products, containerId, isFullAdmin = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = products.map(product => `
        <div class="admin-product-card">
            <div class="admin-product-header">
                <div>
                    <h3>${product.name}</h3>
                    <span class="admin-product-brand">${product.brand}</span>
                </div>
                <img src="img/${product.brand}/${product.image}" alt="${product.name}" class="admin-product-image">
            </div>
            
            <div class="admin-product-details">
                <p><strong>Tipo:</strong> ${product.type === 'kit' ? 'Kit completo' : 'Recarga'}</p>
                <p><strong>Sabor:</strong> ${product.flavor}</p>
                <p><strong>Precio:</strong> S/${product.price.toFixed(2)}</p>
                ${product.tag ? `<p><strong>Etiqueta:</strong> ${product.tag}</p>` : ''}
            </div>
            
            <div class="admin-product-actions">
                <label class="switch">
                    <input type="checkbox" ${product.available ? 'checked' : ''} 
                           ${isFullAdmin ? '' : 'disabled'}>
                    <span class="slider"></span>
                </label>
                <span>${product.available ? 'Disponible' : 'Agotado'}</span>
                
                ${isFullAdmin ? `
                <button class="edit-btn" data-id="${product.id}">
                    <i class="fas fa-edit"></i> Editar
                </button>
                ` : ''}
            </div>
        </div>
    `).join('') || '<p class="no-products">No hay productos registrados</p>';
}

// Cargar productos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Para index.html - Mostrar productos destacados
    if (document.getElementById('featured-products')) {
        const featuredProducts = window.productsDatabase.filter(p => p.tag === 'Más vendido');
        displayStoreProducts(featuredProducts.slice(0, 4), 'featured-products');
    }

    // Para index.html - Mostrar productos nuevos
    if (document.getElementById('new-products')) {
        const newProducts = window.productsDatabase.filter(p => p.tag === 'Nuevo');
        // Ordenar por disponibilidad
        newProducts.sort((a, b) => b.available - a.available);
        displayStoreProducts(newProducts.slice(0, 4), 'new-products');
    }

    // Para productos.html
    if (document.getElementById('products-grid')) {
        // No mostrar todos los productos directamente, aplicar filtros
        applyFilters();
        
        // Si necesitas una sección de destacados en productos.html también
        if (document.getElementById('featured-products')) {
            const featuredProducts = window.productsDatabase.filter(p => p.tag === 'Más vendido');
            displayStoreProducts(featuredProducts.slice(0, 4), 'featured-products');
        }
    }

    // Para admin1.html (admin completo)
    if (document.getElementById('admin-products-grid')) {
        displayAdminProducts(window.productsDatabase, 'admin-products-grid', true);
    }
    
    // Para admin2.html (admin limitado)
    if (document.getElementById('admin-products-grid') && !document.querySelector('.edit-btn')) {
        displayAdminProducts(window.productsDatabase, 'admin-products-grid');
    }
});

function displayRelatedProducts(relatedProducts) {
    const container = document.getElementById('related-products');
    if (!container) return;
    
    container.innerHTML = relatedProducts.map(product => `
        <div class="product-card">
            <a href="producto.html?id=${product.id}" class="product-card-link">
                <div class="product-image">
                    <img src="img/${product.brand}/${product.image}" alt="${product.name}" loading="lazy">
                    ${product.tag ? `<span class="product-tag ${product.tag.toLowerCase().replace(' ', '-')}">${product.tag}</span>` : ''}
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <span class="product-brand">${product.brand}</span>
                    <div class="product-price">
                        ${product.oldPrice ? `<span class="old-price">S/${product.oldPrice.toFixed(2)}</span>` : ''}
                        <span class="current-price">S/${product.price.toFixed(2)}</span>
                    </div>
                </div>
                <button class="btn ${!product.available ? 'disabled' : ''}">
                    ${product.available ? 'Ver Producto' : 'Agotado'}
                </button>
            </a>
        </div>
    `).join('') || '<p>No hay productos relacionados disponibles</p>';
}

// En productos.js, añade estas funciones al final del archivo

// Variables globales para paginación
let currentPage = 1;
const productsPerPage = 20;

// Función para mostrar productos paginados
function displayPaginatedProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Calcular índices para la paginación
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);
    
    // Mostrar productos
    displayStoreProducts(paginatedProducts, containerId);
    
    // Configurar paginación
    setupPagination(products.length);
}

// Función para configurar la paginación
function setupPagination(totalProducts) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const pageNumbersContainer = document.getElementById('page-numbers');
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    
    if (!pageNumbersContainer || !prevBtn || !nextBtn) return;
    
    // Limpiar números de página existentes
    pageNumbersContainer.innerHTML = '';
    
    // Crear botones de números de página
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = currentPage === i ? 'active' : '';
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            applyFilters();
            // Scroll suave al inicio de los productos
            document.querySelector('.products-main').scrollIntoView({ behavior: 'smooth' });
        });
        pageNumbersContainer.appendChild(pageBtn);
    }
    
    // Configurar botones anterior/siguiente
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            applyFilters();
            // Scroll suave al inicio de los productos
            document.querySelector('.products-main').scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            applyFilters();
            // Scroll suave al inicio de los productos
            document.querySelector('.products-main').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

function applyFilters() {
    const urlParams = new URLSearchParams(window.location.search);
    let filteredProducts = [...window.productsDatabase];
    
    // Búsqueda mejorada con coincidencias parciales y más campos
    const searchParam = urlParams.get('search');
    if (searchParam) {
        const searchTerms = searchParam.toLowerCase().split(' ');
        
        filteredProducts = filteredProducts.filter(product => {
            const searchFields = [
                product.name.toLowerCase(),
                product.brand.toLowerCase(),
                product.flavor.toLowerCase(),
                product.description.toLowerCase(),
                product.type.toLowerCase()
            ].join(' ');
            
            return searchTerms.every(term => 
                searchFields.includes(term)
            );
        });
        
        document.title = `Resultados para "${searchParam}" - Drift & Cloud`;
        
        const productsHeader = document.querySelector('.container h2');
        if (productsHeader) {
            productsHeader.textContent = `Resultados para "${searchParam}" (${filteredProducts.length})`;
        }
    }
    
    // Aplicar otros filtros solo si no hay búsqueda o además de la búsqueda
    const brandParam = urlParams.get('marca');
    const filterParam = urlParams.get('filter');
    
    const brandFilters = brandParam ? [brandParam] : 
        Array.from(document.querySelectorAll('input[name="marca"]:checked')).map(cb => cb.value);
    
    const typeFilters = Array.from(document.querySelectorAll('input[name="tipo"]:checked')).map(cb => cb.value);
    const flavorFilters = Array.from(document.querySelectorAll('input[name="sabor"]:checked')).map(cb => cb.value);
    
    // Aplicar otros filtros
    filteredProducts = filteredProducts.filter(product => {
        const brandMatch = brandFilters.length === 0 || brandFilters.includes('all') || brandFilters.includes(product.brand);
        const typeMatch = typeFilters.length === 0 || typeFilters.includes('all') || typeFilters.includes(product.type);
        const flavorMatch = flavorFilters.length === 0 || flavorFilters.includes('all') || flavorFilters.includes(product.flavor.toLowerCase());
        
        // Si hay filtro de nuevos, solo mostrar productos con tag "Nuevo"
        const newMatch = filterParam === 'new' ? product.tag === 'Nuevo' : true;
        
        return brandMatch && typeMatch && flavorMatch && newMatch;
    });
    
    // Ordenar productos: disponibles primero, no disponibles al final
    filteredProducts.sort((a, b) => {
        if (a.available && !b.available) return -1;
        if (!a.available && b.available) return 1;
        return 0;
    });
    
    // Mostrar productos filtrados y paginados
    displayPaginatedProducts(filteredProducts, 'products-grid');
    
    // Si hay un parámetro de marca en la URL, marcar el checkbox correspondiente
    if (brandParam) {
        document.querySelectorAll('input[name="marca"]').forEach(checkbox => {
            checkbox.checked = checkbox.value === brandParam;
        });
    }
}

// Modifica el evento DOMContentLoaded para usar la paginación
document.addEventListener('DOMContentLoaded', function() {
    // Configurar eventos de filtros
    document.querySelectorAll('.filter-options input').forEach(input => {
        input.addEventListener('change', applyFilters);
    });
    
    // Aplicar filtros iniciales
    applyFilters();
});