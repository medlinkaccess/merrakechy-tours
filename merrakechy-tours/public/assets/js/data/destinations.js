// assets/js/data/destinations.js

// Destination data
const destinationsData = {
    'marrakech': {
        title: 'Marrakech',
        subtitle: 'The cultural heart of Morocco with vibrant souks and historic palaces',
        heroImage: '../assets/images/destinations/marrakech.jpg',
        mainImage: '../assets/images/destinations/marrakech.jpg',
        description: `
            <h3>Destination Overview</h3>
            <p>Marrakech, known as the "Red City" for its distinctive rose-hued buildings, is a vibrant cultural hub that captivates visitors with its unique blend of traditional Moroccan heritage and cosmopolitan flair. Founded in 1062, this imperial city has evolved into one of Morocco's most popular destinations, offering travelers an intoxicating mix of history, architecture, cuisine, and shopping.</p>
            <p>The heart of Marrakech is its ancient medina, a UNESCO World Heritage site surrounded by 12th-century ramparts. Within these walls, a labyrinth of narrow alleyways leads to bustling souks selling everything from intricate handicrafts and vibrant textiles to aromatic spices and traditional Moroccan lamps. The historic Djemaa el-Fna square transforms from a daytime market to an evening carnival of food stalls, storytellers, musicians, and performers.</p>
            <p>Beyond the medina, Marrakech offers stunning palaces, tranquil gardens, and world-class museums. The more modern Gueliz district showcases contemporary Moroccan culture with its galleries, boutiques, and cafés. With its architectural marvels, sensory experiences, and warm hospitality, Marrakech provides an authentic introduction to Moroccan culture that leaves a lasting impression on all who visit.</p>
        `,
        highlights: [
            {
                title: 'Djemaa el-Fna Square',
                description: 'The bustling heart of Marrakech, where food vendors, performers, and musicians create an unforgettable atmosphere, especially at sunset.'
            },
            {
                title: 'Bahia Palace',
                description: 'A stunning 19th-century palace showcasing the finest Moroccan architecture, with intricate tilework, carved cedar ceilings, and tranquil courtyards.'
            },
            {
                title: 'Majorelle Garden',
                description: 'A peaceful botanical garden designed by Jacques Majorelle and later owned by Yves Saint Laurent, featuring vibrant blue buildings and exotic plants.'
            },
            {
                title: 'Koutoubia Mosque',
                description: 'The largest mosque in Marrakech, with its iconic 77-meter minaret serving as a landmark visible throughout the city.'
            },
            {
                title: 'The Souks',
                description: 'Miles of covered markets offering traditional crafts, textiles, spices, jewelry, and souvenirs in a vibrant shopping experience.'
            }
        ],
        bestTimeToVisit: 'March to May and September to November, when temperatures are pleasant and crowds are smaller.',
        relatedPrograms: ['quad-biking', 'camel-ride', 'cooking-class']
    },

    'atlas-mountains': {
        title: 'Atlas Mountains',
        subtitle: 'Breathtaking mountain ranges with traditional Berber villages',
        heroImage: '../assets/images/destinations/atlas-mountains.jpg',
        mainImage: '../assets/images/destinations/atlas-mountains.jpg',
        description: `
            <h3>Destination Overview</h3>
            <p>The Atlas Mountains form a spectacular mountain range that stretches across Morocco, Algeria, and Tunisia, with their highest peaks found in Morocco. This majestic range serves as a natural barrier between the Mediterranean and Atlantic coastlines and the Sahara Desert, creating diverse landscapes of snow-capped peaks, lush valleys, and traditional Berber villages.</p>
            <p>The High Atlas, often called the "Mountains of Mountains," includes North Africa's highest peak, Mount Toubkal (4,167m), which attracts hikers and climbers from around the world. The range is home to fascinating Berber culture, with communities that have maintained their traditional way of life for centuries, living in harmony with the challenging mountain environment.</p>
            <p>Visitors to the Atlas Mountains can experience breathtaking natural beauty while hiking through walnut groves, terraced fields, and cedar forests. The mountains offer opportunities for various outdoor activities, from gentle day hikes to multi-day treks, as well as cultural experiences in authentic Berber villages where visitors can learn about local traditions, enjoy home-cooked meals, and witness traditional crafts.</p>
        `,
        highlights: [
            {
                title: 'Mount Toubkal',
                description: 'North Africa\'s highest peak (4,167m), offering challenging but rewarding hiking with stunning panoramic views from the summit.'
            },
            {
                title: 'Imlil Village',
                description: 'The gateway to the High Atlas and Mount Toubkal, this charming village serves as a starting point for many treks and day hikes.'
            },
            {
                title: 'Ourika Valley',
                description: 'A lush valley with rushing streams, waterfalls, and Berber villages, located just an hour from Marrakech.'
            },
            {
                title: 'Ouzoud Waterfalls',
                description: 'One of the most spectacular waterfalls in Morocco, with multiple cascades dropping 110 meters into the valley below.'
            },
            {
                title: 'Traditional Berber Villages',
                description: 'Authentic mountain communities where visitors can experience local hospitality, traditional architecture, and age-old customs.'
            }
        ],
        bestTimeToVisit: 'April to October for general hiking and exploration. July and August are hottest but suitable for high altitude treks. Winter months (November to March) can see snow at higher elevations.',
        relatedPrograms: ['imlil-atlas', 'ourika-valley', 'hot-air-balloon']
    },

    'sahara-desert': {
        title: 'Sahara Desert',
        subtitle: 'Endless golden dunes and starry nights in the world\'s largest desert',
        heroImage: '../assets/images/destinations/sarah-desert.jpg',
        mainImage: '../assets/images/destinations/sarah-desert.jpg',
        description: `
            <h3>Destination Overview</h3>
            <p>The Sahara Desert in Morocco offers one of the most awe-inspiring landscapes on earth. As the largest hot desert in the world, the Sahara stretches across much of North Africa, with its most accessible and spectacular areas found in Morocco's eastern regions. Here, vast seas of golden sand dunes, known as ergs, create an otherworldly landscape that has captivated travelers for centuries.</p>
            <p>Morocco's portion of the Sahara is home to the famous Erg Chebbi dunes near Merzouga and the Erg Chigaga dunes near M'hamid. These massive sand formations, some reaching heights of over 150 meters, shift and change with the desert winds, creating an ever-evolving natural masterpiece. The region is also home to desert oases, ancient trading routes, and nomadic Berber and Tuareg communities who have adapted to life in this challenging environment.</p>
            <p>A visit to the Moroccan Sahara offers unforgettable experiences, from camel treks across the dunes to overnight stays in traditional desert camps. Visitors can witness breathtaking sunrises and sunsets that transform the desert landscape, stargaze under some of the clearest night skies on the planet, and connect with local cultures through music, food, and storytelling around the campfire.</p>
        `,
        highlights: [
            {
                title: 'Erg Chebbi Dunes',
                description: 'Spectacular orange-gold sand dunes near Merzouga that can reach heights of 150 meters, offering stunning vistas especially at sunrise and sunset.'
            },
            {
                title: 'Desert Camps',
                description: 'Overnight stays in traditional nomadic tents among the dunes, with opportunities for traditional music, dinner under the stars, and authentic cultural experiences.'
            },
            {
                title: 'Camel Trekking',
                description: 'The traditional and most atmospheric way to explore the desert, following ancient caravan routes across the shifting sands.'
            },
            {
                title: 'Stargazing',
                description: 'The Sahara offers some of the clearest night skies in the world, perfect for observing stars, planets, and the Milky Way.'
            },
            {
                title: 'Desert Oases',
                description: 'Lush green pockets of palm trees and vegetation that provide striking contrast to the surrounding arid landscape.'
            }
        ],
        bestTimeToVisit: 'October to April, when temperatures are more moderate. Summer months (June to August) can be extremely hot with daytime temperatures often exceeding 40°C (104°F).',
        relatedPrograms: ['zagora-2-days', 'merzouga-3-days', 'camel-ride']
    }
};