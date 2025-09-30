

const data = [
    {
        id: 1,
        name: 'India Gate',
        title: 'Famous Landmark in Delhi',
        info: 'India Gate is very famous in India. India Gate is a war memorial established in India.',
        image: "https://th.bing.com/th/id/OIP.NMQebKbXoqVqTUGQmsTqAgHaE7?w=242&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        price: 344
    },
    {
        id: 2,
        name: 'Sunflower Field',
        title: 'Beautiful Sunflower Landscape',
        info: 'This sunflower field is very famous. It is known for its scenic beauty and vibrant flowers.',
        image: "https://img.freepik.com/free-photo/closeup-shot-sunflower-head-with-field-many-surface_181624-37260.jpg?w=996&t=st=1727798113~exp=1727798713~hmac=59acf3a23ac7704b66659d8729bff074ac995994463e6705d000e51ea0caa561",
        price: 344
    },
    {
        id: 3,
        name: 'Mountain View',
        title: 'Scenic Mountain Landscape',
        info: 'A beautiful mountain view famous for its serene environment and natural beauty.',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauhGSjUsGSJCFs8gRdOQbA75EhtVQ_L7sVA&s",
        price: 344
    },
    {
        id: 4,
        name: 'Waterfall',
        title: 'Majestic Waterfall',
        info: 'This waterfall is very famous for its mesmerizing view and refreshing environment.',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEPPv5yuXAqgrRuMICII1GtRveOrgASBSWdw&s",
        price: 344
    },
    {
        id: 5,
        name: 'Lone Tree Sunset',
        title: 'Sunset with Single Tree',
        info: 'A lone tree captured during sunset surrounded by grasslands. Very photogenic and popular.',
        image: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
        price: 344
    },
    {
        id: 6,
        name: 'Waterfall Poster',
        title: 'Nature Waterfall Poster',
        info: 'A high-quality poster of a beautiful waterfall in nature. Perfect for decoration.',
        image: "https://rukminim2.flixcart.com/image/850/1000/kgsb1jk0-0/poster/n/h/y/medium-twfnp2-beautiful-waterfall-nature-view-large-size-high-original-imafwy37qv2b5g3v.jpeg?q=20&crop=false",
        price: 344
    },
     {
        id: 7,
        name: 'Beach Paradise',
        title: 'Relaxing Beach View',
        info: 'A beautiful beach with white sand and clear water, perfect for vacation.',
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        price: 500
    },
    {
        id: 8,
        name: 'Snowy Mountains',
        title: 'Winter Mountain Landscape',
        info: 'Snow-covered mountains offering breathtaking views.',
        image: "https://th.bing.com/th/id/OIP.8icWod_IK9TJuRvU_dNtKwHaEK?w=312&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        price: 450
    },
    {
        id: 9,
        name: 'City Skyline',
        title: 'Modern City Skyline',
        info: 'A beautiful city skyline during sunset.',
        image: "https://th.bing.com/th/id/OIP.wo_aNaUHmEOhiN_6-5DGIwHaEo?w=298&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        price: 600
    },
    {
        id: 10,
        name: 'Forest Trail',
        title: 'Serene Forest Path',
        info: 'A peaceful trail through a dense forest.',
        image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
        price: 400
    },
    {
        id: 11,
        name: 'Autumn Leaves',
        title: 'Colorful Autumn Landscape',
        info: 'Trees with golden leaves during the fall season.',
        image: "https://th.bing.com/th/id/OIP.0j6iKqFSxpxYPrgR46z4DwHaE8?w=249&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        price: 350
    },
    {
        id: 12,
        name: 'Desert Dunes',
        title: 'Expansive Desert',
        info: 'Endless sand dunes in the desert with beautiful curves.',
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        price: 400
    },
    {
        id: 13,
        name: 'Lake Reflection',
        title: 'Calm Lake Reflection',
        info: 'A serene lake reflecting the surrounding mountains.',
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        price: 420
    },
    {
        id: 14,
        name: 'Cherry Blossom',
        title: 'Spring Cherry Blossoms',
        info: 'Beautiful cherry trees in full bloom during spring.',
        image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
        price: 380
    },
    {
        id: 15,
        name: 'Golden Gate Bridge',
        title: 'Iconic San Francisco Bridge',
        info: 'The famous Golden Gate Bridge in San Francisco, USA.',
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
        price: 550
    },
    {
        id: 16,
        name: 'Tropical Island',
        title: 'Tropical Paradise',
        info: 'A remote tropical island with crystal clear waters.',
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        price: 600
    },
    {
        id: 17,
        name: 'Foggy Forest',
        title: 'Misty Forest Landscape',
        info: 'A foggy forest with a mystical and calm atmosphere.',
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        price: 410
    },
    {
        id: 18,
        name: 'Rainy Street',
        title: 'Urban Rainy Scene',
        info: 'A wet street in a busy city during rainfall.',
        image: "https://th.bing.com/th/id/OIP.KJoYeUAhZ3KINKghqZ3eHwHaEo?w=250&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        price: 300
    },
    {
        id: 19,
        name: 'Lavender Field',
        title: 'Purple Lavender Landscape',
        info: 'Vast fields of lavender in full bloom, perfect for relaxation.',
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        price: 390
    },
    {
        id: 20,
        name: 'Rocky Coastline',
        title: 'Coastal Cliff View',
        info: 'Dramatic cliffs by the sea with crashing waves.',
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        price: 470
    },
    {
        id: 21,
        name: 'Ancient Temple',
        title: 'Historic Temple in Asia',
        info: 'A centuries-old temple surrounded by nature.',
        image: "https://images.unsplash.com/photo-1507120410856-1f35574c3b45",
        price: 500
    },
]

export default data;
